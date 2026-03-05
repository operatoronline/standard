import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import { createHash } from 'crypto';
import { transform } from 'esbuild';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

// Add loading="lazy" and decoding="async" to <img> tags that don't have them
// Skips data: URIs (inline), meta og:image tags, and images that already have the attributes
function addLazyLoading(html) {
    return html.replace(/<img\b([^>]*?)(\s*\/?>)/g, (match, attrs, closing) => {
        // Skip if already has loading attribute
        if (/loading=/.test(attrs)) return match;
        // Skip data: URIs (inline, no network request to defer)
        if (/src="data:/.test(attrs)) return match;
        // Skip meta tags / OG image (not real <img> elements, but just in case)
        if (/property=/.test(attrs)) return match;
        return `<img${attrs} loading="lazy" decoding="async"${closing}`;
    });
}

// Escape HTML for display in code blocks
function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Format HTML for display (basic indentation)
function formatHtml(html) {
    return html.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n');
}

// Create display title with italic accent word (Library aesthetic)
// Pattern: First word or last word gets the italic treatment
function createDisplayTitle(title) {
    const words = title.split(' ');
    if (words.length === 1) {
        // Single word: italicize the whole word
        return `<em>${title}</em>`;
    }
    // Multiple words: italicize the first word
    words[0] = `<em>${words[0]}</em>`;
    return words.join(' ');
}

// Custom Plugin for <Preview> blocks (v0.2 Enhanced)
const previewPlugin = (md) => {
    const defaultRender = md.renderer.rules.html_block || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };

    md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        const content = tokens[idx].content;
        if (content.trim().startsWith('<Preview')) {
            // Parse attributes
            const titleMatch = content.match(/title="([^"]+)"/);
            const title = titleMatch ? titleMatch[1] : 'Preview';
            const bgMatch = content.match(/background="([^"]+)"/);
            const defaultBg = bgMatch ? bgMatch[1] : 'default';
            const compactMatch = content.match(/compact="true"/);
            const isCompact = !!compactMatch;
            
            // Extract inner HTML content
            const innerContent = content
                .replace(/<Preview[^>]*>/, '')
                .replace(/<\/Preview>/, '')
                .trim();
            
            const formattedCode = formatHtml(innerContent);
            const escapedCode = escapeHtml(formattedCode);
            
            // Generate unique ID for this preview
            const previewId = `preview-${Math.random().toString(36).substr(2, 9)}`;
            
            // Build the enhanced Preview HTML
            return `
<div class="Preview" id="${previewId}">
    <div class="Preview-header">
        <div class="Preview-tabs">
            <button class="Preview-tab active" data-tab="preview" type="button">Preview</button>
            <button class="Preview-tab" data-tab="html" type="button">HTML</button>
        </div>
        <div class="Preview-controls">
            <button class="Preview-cycle" data-cycle="bg" data-state="${defaultBg || 'light'}" title="Toggle background" type="button" aria-label="Toggle background">
                <i class="ph ph-sun" aria-hidden="true"></i>
            </button>
            <button class="Preview-cycle" data-cycle="viewport" data-state="desktop" title="Toggle viewport" type="button" aria-label="Toggle viewport">
                <i class="ph ph-desktop" aria-hidden="true"></i>
            </button>
        </div>
    </div>
    <div class="Preview-pane active" data-pane="preview">
        <div class="Preview-canvas${defaultBg !== 'default' ? ` Preview-canvas--${defaultBg}` : ''}">${innerContent}</div>
    </div>
    <div class="Preview-pane" data-pane="html" hidden>
        <button class="Preview-code-copy" type="button"><i class="ph ph-copy" aria-hidden="true"></i> Copy</button>
        <pre class="language-html"><code class="language-html">${escapedCode}</code></pre>
    </div>
</div>`;
        }
        return defaultRender(tokens, idx, options, env, self);
    };
};

md.use(previewPlugin);

const CONFIG = {
    contentDir: 'content',
    distDir: 'dist',
    templatePath: 'templates/page.html',
    assets: ['styles', 'scripts', 'assets', 'vendor'],
    version: 'v1.0',
    siteUrl: 'https://standard.operator.onl'
};

// Defined reading order for Previous/Next navigation
// Follows the information architecture: Home → Getting Started → Tokens → Components → Patterns → Contributing → Changelog
const PAGE_ORDER = [
    'index.md',
    'getting-started.md',
    // Tokens
    'tokens.md',
    'tokens/colors.md',
    'tokens/typography.md',
    'tokens/spacing.md',
    'tokens/elevation.md',
    'tokens/export.md',
    'tokens/playground.md',
    // Components
    'components.md',
    // Actions
    'components/buttons.md',
    'components/links.md',
    'components/dropdowns.md',
    'components/menus.md',
    // Data Entry
    'components/forms.md',
    'components/switches.md',
    'components/textarea.md',
    'components/sliders.md',
    'components/file-upload.md',
    // Data Display
    'components/tables.md',
    'components/cards.md',
    'components/badges.md',
    'components/avatars.md',
    'components/icons.md',
    'components/lists.md',
    'components/timeline.md',
    'components/rating.md',
    // Feedback
    'components/alerts.md',
    'components/toasts.md',
    'components/progress.md',
    'components/skeletons.md',
    'components/tooltips.md',
    // Navigation
    'components/tabs.md',
    'components/breadcrumbs.md',
    'components/pagination.md',
    'components/steppers.md',
    // Layout
    'components/modals.md',
    'components/drawer.md',
    'components/toolbar.md',
    'components/accordions.md',
    'components/chips.md',
    'components/dividers.md',
    // Patterns
    'patterns.md',
    'patterns/layouts.md',
    'patterns/empty-states.md',
    // Resources
    'contributing.md',
    'changelog.md',
];

function getPageTitle(filePath) {
    const baseName = path.basename(filePath, '.md');
    if (baseName === 'index') return 'Home';
    return baseName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function getPageSection(filePath) {
    if (filePath.startsWith('tokens')) return 'Tokens';
    if (filePath.startsWith('components')) return 'Components';
    if (filePath.startsWith('patterns')) return 'Patterns';
    return null;
}

function generatePageNav(relativePath, relRoot) {
    const orderIndex = PAGE_ORDER.indexOf(relativePath);
    if (orderIndex === -1) return '';

    const prev = orderIndex > 0 ? PAGE_ORDER[orderIndex - 1] : null;
    const next = orderIndex < PAGE_ORDER.length - 1 ? PAGE_ORDER[orderIndex + 1] : null;

    let html = '<nav class="page-nav" aria-label="Page navigation">';

    if (prev) {
        const prevUrl = relRoot + prev.replace('.md', '.html');
        const prevTitle = getPageTitle(prev);
        const prevSection = getPageSection(prev);
        html += `<a href="${prevUrl}" class="page-nav-link page-nav-link--prev" rel="prev">
            <span class="page-nav-label"><i class="ph ph-arrow-left" aria-hidden="true"></i> Previous${prevSection ? ` · ${prevSection}` : ''}</span>
            <span class="page-nav-title">${prevTitle}</span>
        </a>`;
    }

    if (next) {
        const nextUrl = relRoot + next.replace('.md', '.html');
        const nextTitle = getPageTitle(next);
        const nextSection = getPageSection(next);
        html += `<a href="${nextUrl}" class="page-nav-link page-nav-link--next" rel="next">
            <span class="page-nav-label">Next${nextSection ? ` · ${nextSection}` : ''} <i class="ph ph-arrow-right" aria-hidden="true"></i></span>
            <span class="page-nav-title">${nextTitle}</span>
        </a>`;
    }

    html += '</nav>';
    return html;
}

async function build() {
    const startTime = Date.now();
    console.log('🚀 Starting Standard v1.0 build...');

    const template = await fs.readFile(CONFIG.templatePath, 'utf-8');

    // Read and minify critical CSS for inline injection
    const criticalCssRaw = await fs.readFile('styles/critical.css', 'utf-8');
    const criticalCssResult = await transform(criticalCssRaw, {
        loader: 'css',
        minify: true,
        target: ['chrome111', 'safari17', 'firefox121'],
    });
    const criticalCssInline = criticalCssResult.code;
    console.log(`  ✓ Critical CSS: ${(Buffer.byteLength(criticalCssRaw) / 1024).toFixed(1)}KB → ${(Buffer.byteLength(criticalCssInline) / 1024).toFixed(1)}KB (minified for inline)`);


    // 1. Clean dist and copy assets
    await fs.ensureDir(CONFIG.distDir);
    const filesInDist = await fs.readdir(CONFIG.distDir);
    for (const file of filesInDist) {
        await fs.remove(path.join(CONFIG.distDir, file));
    }

    for (const asset of CONFIG.assets) {
        if (await fs.pathExists(asset)) {
            await fs.copy(asset, path.join(CONFIG.distDir, asset));
        }
    }

    const assetMap = {}; // maps original name → hashed name (e.g. 'docs.css' → 'docs.a1b2c3d4.min.css')

    // 1b. Combine + subset + minify all vendor CSS into single file
    // Step 1: Scan all source files for used Phosphor icon names
    const sourceFiles = await glob('{content,templates,scripts,styles}/**/*.{md,html,js,css}');
    const usedIcons = new Set();
    for (const sf of sourceFiles) {
        const src = await fs.readFile(sf, 'utf-8');
        const matches = src.matchAll(/ph-([a-z][a-z0-9-]*)/g);
        for (const m of matches) usedIcons.add(m[1]);
    }
    // Remove false positives (CSS class prefixes, not icon names)
    ['bold', 'fill', 'duotone'].forEach(w => usedIcons.delete(w));
    console.log(`  ✓ Found ${usedIcons.size} unique Phosphor icon names used`);

    // Step 2: Subset each Phosphor CSS — keep @font-face + base class + only used icon rules
    const vendorCssParts = [
        { path: 'vendor/normalize.css', subset: false },
        { path: 'vendor/phosphor/regular/style.css', subset: true, prefix: '.ph.ph-' },
        { path: 'vendor/phosphor/bold/style.css', subset: true, prefix: '.ph-bold.ph-' },
        { path: 'vendor/phosphor/fill/style.css', subset: true, prefix: '.ph-fill.ph-' },
        { path: 'vendor/phosphor/duotone/style.css', subset: true, prefix: '.ph-duotone.ph-' },
    ];
    let combinedVendorCss = '';
    let totalOrigRules = 0;
    let totalKeptRules = 0;

    for (const vp of vendorCssParts) {
        const fullPath = path.join(CONFIG.distDir, vp.path);
        if (!await fs.pathExists(fullPath)) continue;
        let css = await fs.readFile(fullPath, 'utf-8');

        // Rewrite font url() paths for combined file (served from styles/)
        const dir = path.dirname(vp.path);
        css = css.replace(/url\(["']?\.\/([^"')]+)["']?\)/g, (_, file) => `url(../${dir}/${file})`);

        if (vp.subset) {
            // Split into lines and keep: @font-face block, base class block, and used icon rules
            const lines = css.split('\n');
            const kept = [];
            let inBlock = false;
            let blockLines = [];
            let blockSelector = '';
            let braceDepth = 0;

            for (const line of lines) {
                const openBraces = (line.match(/{/g) || []).length;
                const closeBraces = (line.match(/}/g) || []).length;

                if (!inBlock && openBraces > 0) {
                    inBlock = true;
                    blockSelector = line;
                    blockLines = [line];
                    braceDepth = openBraces - closeBraces;
                    if (braceDepth <= 0) {
                        // Single-line rule
                        inBlock = false;
                        totalOrigRules++;
                        // Check if we should keep this rule
                        const isIconRule = blockSelector.includes(':before') || blockSelector.includes('::before') || blockSelector.includes(':after') || blockSelector.includes('::after');
                        if (isIconRule) {
                            // Extract icon name from selector like .ph.ph-house:before, .ph-duotone.ph-house:after
                            const nameMatch = blockSelector.match(/\.ph-([a-z][a-z0-9-]*?)(?:::|:)(?:before|after)/);
                            if (nameMatch && usedIcons.has(nameMatch[1])) {
                                kept.push(blockLines.join('\n'));
                                totalKeptRules++;
                            }
                        } else {
                            kept.push(blockLines.join('\n'));
                            totalKeptRules++;
                        }
                    }
                } else if (inBlock) {
                    blockLines.push(line);
                    braceDepth += openBraces - closeBraces;
                    if (braceDepth <= 0) {
                        inBlock = false;
                        totalOrigRules++;
                        const isIconRule = blockSelector.includes(':before') || blockSelector.includes('::before') || blockSelector.includes(':after') || blockSelector.includes('::after');
                        if (isIconRule) {
                            const nameMatch = blockSelector.match(/\.ph-([a-z][a-z0-9-]*?)(?:::|:)(?:before|after)/);
                            if (nameMatch && usedIcons.has(nameMatch[1])) {
                                kept.push(blockLines.join('\n'));
                                totalKeptRules++;
                            }
                        } else {
                            // Non-icon rule: @font-face, base class, etc. — keep
                            kept.push(blockLines.join('\n'));
                            totalKeptRules++;
                        }
                    }
                } else {
                    // Outside blocks (comments, whitespace)
                    kept.push(line);
                }
            }
            css = kept.join('\n');
        }

        combinedVendorCss += `/* ${vp.path} */\n${css}\n`;
    }

    console.log(`  ✓ Phosphor CSS subsetted: ${totalKeptRules} rules kept of ${totalOrigRules} (${Math.round((1 - totalKeptRules / totalOrigRules) * 100)}% removed)`);

    // 1c. Combine vendor CSS + docs CSS into SINGLE file (eliminates one render-blocking request)
    const cssPath = path.join(CONFIG.distDir, 'styles/docs.css');
    let combinedAllCss = combinedVendorCss;
    if (await fs.pathExists(cssPath)) {
        const docsCss = await fs.readFile(cssPath, 'utf-8');
        combinedAllCss += `\n/* docs.css */\n${docsCss}`;
        await fs.remove(cssPath);
    }
    const combinedOrigSize = Buffer.byteLength(combinedAllCss);

    const combinedResult = await transform(combinedAllCss, {
        loader: 'css',
        minify: true,
        target: ['chrome111', 'safari17', 'firefox121'],
    });
    const combinedHash = createHash('md5').update(combinedResult.code).digest('hex').slice(0, 8);
    const combinedMinName = `standard.${combinedHash}.min.css`;
    await fs.writeFile(path.join(CONFIG.distDir, `styles/${combinedMinName}`), combinedResult.code);
    const combinedMinSize = Buffer.byteLength(combinedResult.code);
    assetMap['docs.css'] = combinedMinName;
    // Also create a stable /styles/standard.css alias for external consumers (Getting Started guide)
    await fs.writeFile(path.join(CONFIG.distDir, 'styles/standard.css'), combinedResult.code);
    console.log(`  ✓ Combined vendor + docs → ${combinedMinName} (${(combinedOrigSize / 1024).toFixed(1)}KB → ${(combinedMinSize / 1024).toFixed(1)}KB, ${Math.round((1 - combinedMinSize / combinedOrigSize) * 100)}% smaller)`);
    console.log(`  ✓ Stable alias: styles/standard.css (for external consumers)`);

    // Minify JS
    const jsPath = path.join(CONFIG.distDir, 'scripts/docs.js');
    if (await fs.pathExists(jsPath)) {
        const jsSource = await fs.readFile(jsPath, 'utf-8');
        const jsResult = await transform(jsSource, {
            loader: 'js',
            minify: true,
            target: ['chrome111', 'safari17', 'firefox121'],
        });
        const jsHash = createHash('md5').update(jsResult.code).digest('hex').slice(0, 8);
        const jsMinName = `docs.${jsHash}.min.js`;
        await fs.writeFile(path.join(CONFIG.distDir, `scripts/${jsMinName}`), jsResult.code);
        await fs.remove(jsPath); // remove unminified
        assetMap['docs.js'] = jsMinName;
        const jsOrigSize = Buffer.byteLength(jsSource, 'utf-8');
        const jsMinSize = Buffer.byteLength(jsResult.code, 'utf-8');
        console.log(`  ✓ Minified docs.js → ${jsMinName} (${(jsOrigSize / 1024).toFixed(1)}KB → ${(jsMinSize / 1024).toFixed(1)}KB, ${Math.round((1 - jsMinSize / jsOrigSize) * 100)}% smaller)`);
    }

    // Combine vendor JS into single bundle (Fuse.js + Prism.js + plugins → one request)
    const vendorJsFiles = [
        'vendor/fuse.min.js',
        'vendor/prism/prism.min.js',
        'vendor/prism/prism-markup.min.js',
        'vendor/prism/prism-css.min.js',
        'vendor/prism/prism-javascript.min.js',
    ];
    let combinedVendorJs = '';
    for (const vjf of vendorJsFiles) {
        const fullPath = path.join(CONFIG.distDir, vjf);
        if (await fs.pathExists(fullPath)) {
            combinedVendorJs += await fs.readFile(fullPath, 'utf-8') + ';\n';
        }
    }
    if (combinedVendorJs) {
        const vendorJsResult = await transform(combinedVendorJs, {
            loader: 'js',
            minify: true,
            target: ['chrome111', 'safari17', 'firefox121'],
        });
        const vendorJsHash = createHash('md5').update(vendorJsResult.code).digest('hex').slice(0, 8);
        const vendorJsMinName = `vendor.${vendorJsHash}.min.js`;
        await fs.writeFile(path.join(CONFIG.distDir, `scripts/${vendorJsMinName}`), vendorJsResult.code);
        assetMap['vendor.js'] = vendorJsMinName;
        const vendorJsOrigSize = Buffer.byteLength(combinedVendorJs);
        const vendorJsMinSize = Buffer.byteLength(vendorJsResult.code);
        console.log(`  ✓ Combined vendor JS → ${vendorJsMinName} (${(vendorJsOrigSize / 1024).toFixed(1)}KB → ${(vendorJsMinSize / 1024).toFixed(1)}KB, ${Math.round((1 - vendorJsMinSize / vendorJsOrigSize) * 100)}% smaller)`);
    }

    // Minify 404 CSS
    const css404Path = path.join(CONFIG.distDir, 'styles/404.css');
    if (await fs.pathExists(css404Path)) {
        const css404Source = await fs.readFile(css404Path, 'utf-8');
        const css404Result = await transform(css404Source, {
            loader: 'css',
            minify: true,
            target: ['chrome111', 'safari17', 'firefox121'],
        });
        const css404Hash = createHash('md5').update(css404Result.code).digest('hex').slice(0, 8);
        const css404MinName = `404.${css404Hash}.min.css`;
        await fs.writeFile(path.join(CONFIG.distDir, `styles/${css404MinName}`), css404Result.code);
        await fs.remove(css404Path);
        assetMap['404.css'] = css404MinName;
        console.log(`  ✓ Minified 404.css → ${css404MinName}`);
    }

    // Minify 404 JS
    const js404Path = path.join(CONFIG.distDir, 'scripts/404.js');
    if (await fs.pathExists(js404Path)) {
        const js404Source = await fs.readFile(js404Path, 'utf-8');
        const js404Result = await transform(js404Source, {
            loader: 'js',
            minify: true,
            target: ['chrome111', 'safari17', 'firefox121'],
        });
        const js404Hash = createHash('md5').update(js404Result.code).digest('hex').slice(0, 8);
        const js404MinName = `404.${js404Hash}.min.js`;
        await fs.writeFile(path.join(CONFIG.distDir, `scripts/${js404MinName}`), js404Result.code);
        await fs.remove(js404Path);
        assetMap['404.js'] = js404MinName;
        console.log(`  ✓ Minified 404.js → ${js404MinName}`);
    }

    // 2. Walk content
    const files = await glob(`${CONFIG.contentDir}/**/*.md`);
    
    // Generate Navigation Tree
    const navTree = {};
    for (const file of files) {
        const relativePath = path.relative(CONFIG.contentDir, file);
        const parts = relativePath.split(path.sep);
        let current = navTree;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (i === parts.length - 1) {
                current[part] = relativePath.replace('.md', '.html');
            } else {
                current[part] = current[part] || {};
                current = current[part];
            }
        }
    }

    const generateNavHtml = (tree, relRoot, depth = 0) => {
        let html = '<ul>';
        const entries = Object.entries(tree).sort(([a], [b]) => {
            if (a === 'index.md') return -1;
            if (b === 'index.md') return 1;
            return a.localeCompare(b);
        });

        for (const [key, value] of entries) {
            const label = key.replace('.md', '').replace(/-/g, ' ');
            const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
            if (typeof value === 'string') {
                const displayLabel = key === 'index.md' ? 'Home' : capitalizedLabel;
                html += `<li><a href="${relRoot}${value}">${displayLabel}</a></li>`;
            } else {
                html += `<li><span class="nav-group">${capitalizedLabel}</span>${generateNavHtml(value, relRoot, depth + 1)}</li>`;
            }
        }
        html += '</ul>';
        return html;
    };

    for (const file of files) {
        let rawContent = await fs.readFile(file, 'utf-8');
        const relativePath = path.relative(CONFIG.contentDir, file);
        const targetPath = path.join(CONFIG.distDir, relativePath.replace('.md', '.html'));
        const relRoot = '../'.repeat(relativePath.split(path.sep).length - 1) || './';

        // Extract <Hero> block if present (rendered in template, not prose)
        let heroHtml = '';
        const heroMatch = rawContent.match(/<Hero>([\s\S]*?)<\/Hero>/);
        if (heroMatch) {
            const heroInner = heroMatch[1].trim();
            // Parse stats: <!-- stats: 6 Variants, 3 Sizes, 4 States -->
            const statsMatch = heroInner.match(/<!--\s*stats:\s*(.*?)\s*-->/);
            let statsHtml = '';
            if (statsMatch) {
                const statItems = statsMatch[1].split(',').map(s => s.trim());
                statsHtml = statItems.map(item => {
                    const [num, ...labelParts] = item.split(' ');
                    const label = labelParts.join(' ');
                    return `<div class="Hero-stat"><strong>${num}</strong> ${label}</div>`;
                }).join('\n                    ');
                statsHtml = `<div class="Hero-meta">\n                    ${statsHtml}\n                </div>`;
            }
            // Remove stats comment from showcase content
            const showcaseContent = heroInner
                .replace(/<!--\s*stats:.*?-->/g, '')
                .trim();
            heroHtml = `<div class="Hero" aria-label="Component showcase">
                <div class="Hero-content">
                    <div class="Hero-showcase">
                        ${showcaseContent}
                    </div>
                    ${statsHtml}
                </div>
            </div>`;
            // Remove Hero block from raw content so it doesn't appear in prose
            rawContent = rawContent.replace(/<Hero>[\s\S]*?<\/Hero>/, '');
        }

        // Extract first paragraph as subtitle (for page header)
        // Also capture it for meta description before removing from rawContent
        let subtitleHtml = '';
        let subtitlePlainText = '';
        const contentForSubtitle = rawContent.replace(/^---[\s\S]*?---\n*/, ''); // skip frontmatter
        const contentAfterTitle = contentForSubtitle.replace(/^#[^\n]+\n+/, ''); // skip h1
        const firstParaMatch = contentAfterTitle.match(/^([^#<\n-][^\n]+)/m);
        if (firstParaMatch && firstParaMatch[1].trim().length > 20) {
            const subtitleText = firstParaMatch[1].trim()
                .replace(/\*\*([^*]+)\*\*/g, '$1')
                .replace(/\*([^*]+)\*/g, '$1')
                .replace(/`([^`]+)`/g, '$1')
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
            subtitleHtml = `<p class="page-subtitle">${subtitleText}</p>`;
            subtitlePlainText = subtitleText;
            // Remove the matched paragraph from rawContent to avoid duplication in prose
            const paraToRemove = firstParaMatch[1];
            const idx = rawContent.indexOf(paraToRemove);
            if (idx !== -1) {
                // Remove the paragraph and any trailing newlines
                const before = rawContent.slice(0, idx);
                let after = rawContent.slice(idx + paraToRemove.length);
                after = after.replace(/^\n{1,2}/, ''); // eat 1-2 trailing newlines
                rawContent = before + after;
            }
        }

        const navHtml = generateNavHtml(navTree, relRoot);

        // Determine active nav section from path
        let activeSection = 'home';
        if (relativePath.startsWith('tokens/') || relativePath === 'tokens.md') {
            activeSection = 'tokens';
        } else if (relativePath.startsWith('components/') || relativePath === 'components.md') {
            activeSection = 'components';
        } else if (relativePath.startsWith('patterns/') || relativePath === 'patterns.md') {
            activeSection = 'patterns';
        }

        // Generate Breadcrumbs
        const pathParts = relativePath.replace('.md', '').split(path.sep);
        let breadcrumbsHtml = `<a href="${relRoot}index.html">Standard</a>`;
        let accumulatedPath = relRoot;
        if (pathParts[0] !== 'index') {
            for (let i = 0; i < pathParts.length; i++) {
                const part = pathParts[i];
                const label = part.replace(/-/g, ' ');
                const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
                breadcrumbsHtml += ` <span class="sep" aria-hidden="true">/</span> `;
                if (i === pathParts.length - 1) {
                    breadcrumbsHtml += `<span aria-current="page">${capitalizedLabel}</span>`;
                } else {
                    // Link intermediate segments to section index pages
                    const sectionHref = `${relRoot}${part}.html`;
                    breadcrumbsHtml += `<a href="${sectionHref}">${capitalizedLabel}</a>`;
                }
            }
        }

        // Extract TOC from headings
        const tocEntries = [];
        const tokens = md.parse(rawContent, {});
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].type === 'heading_open') {
                const level = parseInt(tokens[i].tag.slice(1));
                if (level === 2 || level === 3) {
                    const text = tokens[i + 1].content;
                    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
                    tocEntries.push({ level, text, id });
                    tokens[i].attrPush(['id', id]);
                }
            }
        }
        const tocHtml = `<ul>${tocEntries.map(e => `<li class="toc-l${e.level}"><a href="#${e.id}">${e.text}</a></li>`).join('')}</ul>`;

        // Generate TOC sidebar HTML (only for pages with ≥4 h2 headings)
        const h2Count = tocEntries.filter(e => e.level === 2).length;
        const hasToc = h2Count >= 4;
        const tocSidebarHtml = hasToc
            ? `<aside class="toc-sidebar" aria-label="Table of contents">
                <nav class="toc">
                    <h3>On this page</h3>
                    <ul>
                        ${tocEntries.map(e => `<li class="toc-l${e.level}"><a href="#${e.id}" data-toc-link>${e.text}</a></li>`).join('\n                        ')}
                    </ul>
                </nav>
            </aside>`
            : '';

        let htmlContent = md.renderer.render(tokens, md.options, {});
        // Wrap markdown-rendered <table> (bare, no class attr) in scrollable container with Table class
        // Use a marker to only close wrappers we opened
        htmlContent = htmlContent.replace(/<table>\n/g, '<div class="Table-container"><table class="Table">\n');
        // Close </div> only after tables we wrapped (Table class without further class attrs)
        htmlContent = htmlContent.replace(/<div class="Table-container"><table class="Table">([\s\S]*?)<\/table>/g, 
            '<div class="Table-container"><table class="Table">$1</table></div>');
        const baseName = path.basename(file, '.md');
        const title = baseName === 'index' 
            ? 'Standard Design System' 
            : baseName.replace(/-/g, ' ').charAt(0).toUpperCase() + baseName.replace(/-/g, ' ').slice(1);
        
        // Create display title with italic accent for hero treatment
        const titleDisplay = createDisplayTitle(title);

        // Generate meta description — prefer subtitle (already extracted from first paragraph)
        let metaDescription;
        if (subtitlePlainText) {
            metaDescription = subtitlePlainText.slice(0, 155) + (subtitlePlainText.length > 155 ? '…' : '');
        } else {
            const descriptionMatch = rawContent
                .replace(/^#[^\n]+\n+/, '')
                .replace(/<Preview[\s\S]*?<\/Preview>/g, '')
                .replace(/```[\s\S]*?```/g, '')
                .replace(/\|[^\n]+\|/g, '')
                .replace(/---+/g, '')
                .trim()
                .split(/\n\n/)[0];
            metaDescription = descriptionMatch
                ? descriptionMatch
                    .replace(/<[^>]+>/g, '')
                    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                    .replace(/\*\*([^*]+)\*\*/g, '$1')
                    .replace(/\*([^*]+)\*/g, '$1')
                    .replace(/`([^`]+)`/g, '$1')
                    .replace(/#+\s/g, '')
                    .replace(/\s+/g, ' ')
                    .trim()
                    .slice(0, 155)
                    + (descriptionMatch.length > 155 ? '…' : '')
                : `${title} — Standard Design System documentation.`;
        }

        // Generate canonical URL
        let canonicalPath = relativePath.replace('.md', '');
        if (canonicalPath === 'index') {
            canonicalPath = '';
        }
        const canonicalUrl = `${CONFIG.siteUrl}/${canonicalPath}`;
        const ogUrl = canonicalUrl;

        // Generate JSON-LD structured data
        const jsonLd = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${title} | Standard`,
            description: metaDescription,
            url: canonicalUrl,
            isPartOf: {
                '@type': 'WebSite',
                name: 'Standard Design System',
                url: CONFIG.siteUrl
            },
            ...(relativePath === 'index.md' ? {
                '@type': 'WebSite',
                potentialAction: {
                    '@type': 'SearchAction',
                    target: { '@type': 'EntryPoint', urlTemplate: `${CONFIG.siteUrl}/?q={search_term_string}` },
                    'query-input': 'required name=search_term_string'
                }
            } : {})
        });

        // For homepage, use just "Standard Design System" as the page title (no " | Standard" suffix)
        const isHomePage = relativePath === 'index.md';
        const pageTitle = isHomePage ? title : `${title} | Standard`;
        const finalHtml = template
            .replace(/{{TITLE}}/g, title)
            .replace(/{{PAGE_TITLE}}/g, pageTitle)
            .replace(/{{TITLE_DISPLAY}}/g, titleDisplay)
            .replace(/{{META_DESCRIPTION}}/g, metaDescription.replace(/"/g, '&quot;'))
            .replace(/{{CANONICAL_URL}}/g, canonicalUrl)
            .replace(/{{OG_URL}}/g, ogUrl)
            .replace(/{{SITE_URL}}/g, CONFIG.siteUrl)
            .replace(/{{NAV_HTML}}/g, navHtml)
            .replace(/{{BREADCRUMBS_HTML}}/g, breadcrumbsHtml)
            .replace(/{{TOC_HTML}}/g, tocHtml) // kept for backward compat
            .replace(/{{CONTENT_HTML}}/g, htmlContent)
            .replace(/{{REL_ROOT}}/g, relRoot)
            .replace(/{{VERSION}}/g, CONFIG.version)
            .replace(/{{LAST_BUILT}}/g, new Date().toLocaleString())
            .replace(/{{CRITICAL_CSS}}/g, () => criticalCssInline.replace(/\.\.\/assets\//g, relRoot + 'assets/').replace(/\.\.\/vendor\//g, relRoot + 'vendor/'))
            .replace(/{{CSS_FILE}}/g, assetMap['docs.css'] || 'docs.css')
            .replace(/{{VENDOR_JS_FILE}}/g, assetMap['vendor.js'] || 'vendor.js')
            .replace(/{{JS_FILE}}/g, assetMap['docs.js'] || 'docs.js')
            .replace(/{{JSON_LD}}/g, () => jsonLd)
            .replace(/{{ACTIVE_SECTION}}/g, activeSection)
            .replace(/{{CONTAINER_CLASS}}/g, hasToc ? 'has-toc' : '')
            .replace(/{{TOC_SIDEBAR}}/g, () => tocSidebarHtml)
            .replace(/{{PAGE_SUBTITLE}}/g, () => subtitleHtml)
            .replace(/{{HERO_SHOWCASE}}/g, () => heroHtml)
            .replace(/{{PAGE_NAV}}/g, () => generatePageNav(relativePath, relRoot));

        // Post-process: add lazy loading to any <img> tags missing it
        const processedHtml = addLazyLoading(finalHtml);

        await fs.ensureDir(path.dirname(targetPath));
        await fs.writeFile(targetPath, processedHtml);
        console.log(`  ✓ Written ${targetPath}`);
    }

    // 3. Generate search index
    const searchIndex = [];
    for (const file of files) {
        const rawContent = await fs.readFile(file, 'utf-8');
        const relativePath = path.relative(CONFIG.contentDir, file);
        const url = relativePath.replace('.md', '.html');
        const title = path.basename(file, '.md').replace(/-/g, ' ');
        const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
        
        const plainText = rawContent
            .replace(/<Preview[^>]*>[\s\S]*?<\/Preview>/g, '')
            .replace(/<[^>]+>/g, '')
            .replace(/```[\s\S]*?```/g, '')
            .replace(/#+\s/g, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/\n+/g, ' ')
            .trim()
            .slice(0, 500);
        
        const section = relativePath.includes(path.sep) 
            ? relativePath.split(path.sep)[0] 
            : 'home';

        searchIndex.push({
            title: capitalizedTitle,
            url,
            section: section.charAt(0).toUpperCase() + section.slice(1),
            content: plainText
        });
    }
    
    await fs.writeFile(
        path.join(CONFIG.distDir, 'search-index.json'),
        JSON.stringify(searchIndex)
    );
    console.log(`  ✓ Generated search-index.json (${searchIndex.length} pages)`);

    // 4. Generate robots.txt
    const robotsTxt = `# Standard Design System
# ${CONFIG.siteUrl}

User-agent: *
Allow: /

# Sitemap
Sitemap: ${CONFIG.siteUrl}/sitemap.xml

# Disallow non-content resources
Disallow: /search-index.json
`;
    await fs.writeFile(path.join(CONFIG.distDir, 'robots.txt'), robotsTxt);
    console.log('  ✓ Generated robots.txt');

    // 5. Generate sitemap.xml
    const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const sitemapEntries = [];

    // Define priority and changefreq by section
    const getSitemapMeta = (url) => {
        if (url === 'index.html') return { priority: '1.0', changefreq: 'weekly' };
        if (url === 'getting-started.html') return { priority: '0.9', changefreq: 'monthly' };
        if (url === 'contributing.html') return { priority: '0.7', changefreq: 'monthly' };
        if (url === 'changelog.html') return { priority: '0.6', changefreq: 'weekly' };
        if (url === 'tokens.html') return { priority: '0.8', changefreq: 'monthly' };
        if (url === 'components.html') return { priority: '0.9', changefreq: 'monthly' };
        if (url === 'patterns.html') return { priority: '0.7', changefreq: 'monthly' };
        if (url.startsWith('tokens/')) return { priority: '0.8', changefreq: 'monthly' };
        if (url.startsWith('components/')) return { priority: '0.9', changefreq: 'monthly' };
        if (url.startsWith('patterns/')) return { priority: '0.7', changefreq: 'monthly' };
        return { priority: '0.5', changefreq: 'monthly' };
    };

    for (const file of files) {
        const relativePath = path.relative(CONFIG.contentDir, file);
        const url = relativePath.replace('.md', '.html');
        // Use clean URL (strip .html, strip index.html for root)
        let cleanUrl = url;
        if (cleanUrl === 'index.html') {
            cleanUrl = '';
        } else {
            cleanUrl = cleanUrl.replace(/\.html$/, '');
        }
        const fullUrl = `${CONFIG.siteUrl}/${cleanUrl}`;
        const meta = getSitemapMeta(url);
        sitemapEntries.push({ url: fullUrl, lastmod: now, ...meta });
    }

    // Sort: homepage first, then alphabetically
    sitemapEntries.sort((a, b) => {
        if (a.url === CONFIG.siteUrl + '/') return -1;
        if (b.url === CONFIG.siteUrl + '/') return 1;
        return a.url.localeCompare(b.url);
    });

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(e => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
    await fs.writeFile(path.join(CONFIG.distDir, 'sitemap.xml'), sitemapXml);
    console.log(`  ✓ Generated sitemap.xml (${sitemapEntries.length} URLs)`);

    // 5b. Generate web manifest
    const manifest = {
        name: 'Standard Design System',
        short_name: 'Standard',
        description: 'Framework-agnostic design system built on OKLCH colors, 4px grid, and zero dependencies.',
        start_url: '/',
        display: 'standalone',
        background_color: '#FBFBFE',
        theme_color: '#7B2FBE',
        icons: [
            { src: '/assets/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/assets/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
            { src: '/assets/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
    };
    await fs.writeFile(
        path.join(CONFIG.distDir, 'manifest.webmanifest'),
        JSON.stringify(manifest, null, 2)
    );
    console.log('  ✓ Generated manifest.webmanifest');

    // 6. Generate 404 page (all CSS/JS external — CSP-safe)
    const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="color-scheme" content="light dark">
    <meta name="theme-color" content="#7B2FBE" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#1E1E1E" media="(prefers-color-scheme: dark)">
    <script>(function(){var t=localStorage.getItem('standard-theme');if(t)document.documentElement.setAttribute('data-theme',t)})()</script>
    <title>404 — Page Not Found | Standard</title>
    <meta name="description" content="The page you're looking for doesn't exist. Search the Standard Design System or navigate to a section.">
    <link rel="canonical" href="${CONFIG.siteUrl}/404">
    <meta property="og:title" content="404 — Page Not Found | Standard">
    <meta property="og:description" content="The page you're looking for doesn't exist. Search the Standard Design System or navigate to a section.">
    <meta property="og:url" content="${CONFIG.siteUrl}/404">
    <meta property="og:image" content="${CONFIG.siteUrl}/assets/og-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="robots" content="noindex">
    <link rel="icon" href="./assets/favicon.ico" sizes="32x32">
    <link rel="icon" href="./assets/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="./assets/apple-touch-icon.png">
    <link rel="manifest" href="./manifest.webmanifest">
    <link rel="preload" href="./assets/fonts/outfit-latin.woff2" as="font" type="font/woff2" crossorigin fetchpriority="high">
    <style>${criticalCssInline.replace(/\.\.\/assets\//g, './assets/').replace(/\.\.\/vendor\//g, './vendor/')}</style>
    <link rel="preload" href="./styles/${assetMap['docs.css'] || 'docs.css'}" as="style">
    <link rel="preload" href="./styles/${assetMap['404.css'] || '404.css'}" as="style">
</head>
<body>
    <div class="app">
        <!-- Hidden nav — 404 has its own navigation -->
        <nav class="fnav fnav--hidden" id="fnav" role="navigation" aria-label="Main navigation"></nav>

        <!-- 404 Content -->
        <div class="error-page">
            <div class="error-content">
                <h1 class="error-code">4<em>0</em>4</h1>
                <p class="error-title">This page has wandered off</p>
                <p class="error-description">
                    The page you're looking for doesn't exist, has been moved, or perhaps never was.
                    Try searching or pick a section below.
                </p>

                <div class="error-search" role="search">
                    <i class="ph ph-magnifying-glass error-search-icon" aria-hidden="true"></i>
                    <input type="text" id="error-search-input" placeholder="Search the design system..." aria-label="Search the design system" autocomplete="off">
                    <div class="search-results" id="error-search-results" role="listbox"></div>
                </div>

                <div class="error-links">
                    <a href="./index.html" class="error-link">
                        <i class="ph-bold ph-house" aria-hidden="true"></i>
                        Home
                    </a>
                    <a href="./tokens.html" class="error-link">
                        <i class="ph-bold ph-palette" aria-hidden="true"></i>
                        Tokens
                    </a>
                    <a href="./components.html" class="error-link">
                        <i class="ph-bold ph-stack" aria-hidden="true"></i>
                        Components
                    </a>
                    <a href="./patterns.html" class="error-link">
                        <i class="ph-bold ph-grid-four" aria-hidden="true"></i>
                        Patterns
                    </a>
                </div>

                <hr class="error-divider">

                <div class="error-footer">
                    <p>Standard ${CONFIG.version} · <a href="./index.html">Back to safety</a></p>
                </div>
            </div>
        </div>
    </div>

    <link rel="stylesheet" href="./styles/${assetMap['docs.css'] || 'docs.css'}">
    <link rel="stylesheet" href="./styles/${assetMap['404.css'] || '404.css'}">
    <script src="./scripts/${assetMap['404.js'] || '404.js'}" defer></script>
</body>
</html>`;

    await fs.writeFile(path.join(CONFIG.distDir, '404.html'), notFoundHtml);
    console.log('  ✓ Generated 404.html');

    console.log(`✨ Build finished in ${Date.now() - startTime}ms`);
}

build().catch(console.error);
