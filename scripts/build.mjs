import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

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
            <button class="Preview-tab active" data-tab="preview">Preview</button>
            <button class="Preview-tab" data-tab="html">HTML</button>
        </div>
        <div class="Preview-controls">
            <button class="Preview-control${defaultBg === 'light' ? ' active' : ''}" data-bg="light" title="Light background">
                <i class="ph ph-sun"></i>
            </button>
            <button class="Preview-control${defaultBg === 'dark' ? ' active' : ''}" data-bg="dark" title="Dark background">
                <i class="ph ph-moon"></i>
            </button>
            <button class="Preview-control${defaultBg === 'checkered' ? ' active' : ''}" data-bg="checkered" title="Checkered">
                <i class="ph ph-grid-four"></i>
            </button>
            <div class="Preview-divider"></div>
            <button class="Preview-control active" data-viewport="desktop" title="Desktop">
                <i class="ph ph-desktop"></i>
            </button>
            <button class="Preview-control" data-viewport="tablet" title="Tablet">
                <i class="ph ph-device-tablet"></i>
            </button>
            <button class="Preview-control" data-viewport="mobile" title="Mobile">
                <i class="ph ph-device-mobile"></i>
            </button>
        </div>
    </div>
    <div class="Preview-pane active" data-pane="preview">
        <div class="Preview-canvas${defaultBg !== 'default' ? ` Preview-canvas--${defaultBg}` : ''}">${innerContent}</div>
    </div>
    <div class="Preview-pane" data-pane="html">
        <button class="Preview-code-copy"><i class="ph ph-copy"></i> Copy</button>
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
    assets: ['styles', 'scripts', 'assets'],
    version: 'v0.3'
};

async function build() {
    const startTime = Date.now();
    console.log('🚀 Starting Standard v1.0 build...');

    const template = await fs.readFile(CONFIG.templatePath, 'utf-8');

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
                const displayLabel = key === 'index.md' ? 'Introduction' : capitalizedLabel;
                html += `<li><a href="${relRoot}${value}">${displayLabel}</a></li>`;
            } else {
                html += `<li><span class="nav-group">${capitalizedLabel}</span>${generateNavHtml(value, relRoot, depth + 1)}</li>`;
            }
        }
        html += '</ul>';
        return html;
    };

    for (const file of files) {
        const rawContent = await fs.readFile(file, 'utf-8');
        const relativePath = path.relative(CONFIG.contentDir, file);
        const targetPath = path.join(CONFIG.distDir, relativePath.replace('.md', '.html'));
        const relRoot = '../'.repeat(relativePath.split(path.sep).length - 1) || './';

        const navHtml = generateNavHtml(navTree, relRoot);

        // Generate Breadcrumbs
        const pathParts = relativePath.replace('.md', '').split(path.sep);
        let breadcrumbsHtml = `<a href="${relRoot}index.html">Standard</a>`;
        let accumulatedPath = relRoot;
        if (pathParts[0] !== 'index') {
            for (let i = 0; i < pathParts.length; i++) {
                const part = pathParts[i];
                const label = part.replace(/-/g, ' ');
                const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
                breadcrumbsHtml += ` <span class="sep">/</span> `;
                if (i === pathParts.length - 1) {
                    breadcrumbsHtml += `<span>${capitalizedLabel}</span>`;
                } else {
                    breadcrumbsHtml += `<span>${capitalizedLabel}</span>`;
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

        let htmlContent = md.renderer.render(tokens, md.options, {});
        // Wrap markdown-rendered <table> (bare, no class attr) in scrollable container with Table class
        // Use a marker to only close wrappers we opened
        htmlContent = htmlContent.replace(/<table>\n/g, '<div class="Table-container"><table class="Table">\n');
        // Close </div> only after tables we wrapped (Table class without further class attrs)
        htmlContent = htmlContent.replace(/<div class="Table-container"><table class="Table">([\s\S]*?)<\/table>/g, 
            '<div class="Table-container"><table class="Table">$1</table></div>');
        const baseName = path.basename(file, '.md');
        const title = baseName === 'index' 
            ? 'Introduction' 
            : baseName.replace(/-/g, ' ').charAt(0).toUpperCase() + baseName.replace(/-/g, ' ').slice(1);
        
        // Create display title with italic accent for hero treatment
        const titleDisplay = createDisplayTitle(title);

        const finalHtml = template
            .replace(/{{TITLE}}/g, title)
            .replace(/{{TITLE_DISPLAY}}/g, titleDisplay)
            .replace(/{{NAV_HTML}}/g, navHtml)
            .replace(/{{BREADCRUMBS_HTML}}/g, breadcrumbsHtml)
            .replace(/{{TOC_HTML}}/g, tocHtml)
            .replace(/{{CONTENT_HTML}}/g, htmlContent)
            .replace(/{{REL_ROOT}}/g, relRoot)
            .replace(/{{VERSION}}/g, CONFIG.version)
            .replace(/{{LAST_BUILT}}/g, new Date().toLocaleString());

        await fs.ensureDir(path.dirname(targetPath));
        await fs.writeFile(targetPath, finalHtml);
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

    // 4. Generate 404 page
    const notFoundHtml = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>404 — Page Not Found | Standard</title>
    <link rel="preload" href="./assets/fonts/outfit-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="./assets/fonts/instrument-serif-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="./assets/fonts/instrument-serif-italic-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8/normalize.css">
    <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web/src/regular/style.css">
    <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web/src/bold/style.css">
    <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web/src/fill/style.css">
    <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web/src/duotone/style.css">
    <link rel="stylesheet" href="./styles/docs.css">
    <style>
        /* 404 Page — Unique Styles */
        .error-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            min-height: 100dvh;
            padding: var(--space-6);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        /* Ambient background glow */
        .error-page::before {
            content: '';
            position: absolute;
            top: -30%;
            left: 50%;
            transform: translateX(-50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, oklch(from var(--accent) l c h / .06) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
        }

        .error-content {
            position: relative;
            z-index: 1;
            max-width: 560px;
            animation: error-fade-in var(--dur-s) var(--ease) both;
        }

        @keyframes error-fade-in {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* The big 404 number */
        .error-code {
            font-family: var(--ff-d);
            font-size: clamp(6rem, 20vw, 12rem);
            font-weight: 400;
            line-height: 1;
            letter-spacing: -0.02em;
            color: var(--fg);
            margin: 0 0 var(--space-2) 0;
            position: relative;
        }

        .error-code em {
            font-style: italic;
            color: var(--accent);
        }

        .error-title {
            font-family: var(--ff-d);
            font-size: clamp(1.5rem, 4vw, 2rem);
            font-weight: 400;
            font-style: italic;
            color: var(--fg-2);
            margin: 0 0 var(--space-6) 0;
            line-height: 1.3;
        }

        .error-description {
            font-family: var(--ff-b);
            font-size: 1rem;
            line-height: 1.7;
            color: var(--fg-3);
            margin: 0 0 var(--space-8) 0;
        }

        /* Search box on the 404 page */
        .error-search {
            width: 100%;
            max-width: 400px;
            position: relative;
            margin: 0 auto var(--space-8) auto;
        }

        .error-search-icon {
            position: absolute;
            left: var(--space-4);
            top: 50%;
            transform: translateY(-50%);
            color: var(--fg-4);
            font-size: 1.1rem;
            pointer-events: none;
        }

        .error-search input {
            width: 100%;
            padding: var(--space-3) var(--space-4) var(--space-3) var(--space-10);
            font-family: var(--ff-b);
            font-size: 0.95rem;
            color: var(--fg);
            background: var(--bg-s);
            border: 1px solid var(--bd);
            border-radius: var(--r-f);
            outline: none;
            transition: border-color var(--dur-n) var(--ease), box-shadow var(--dur-n) var(--ease);
        }

        .error-search input::placeholder {
            color: var(--fg-4);
        }

        .error-search input:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 3px oklch(from var(--accent) l c h / .12);
        }

        .error-search .search-results {
            position: absolute;
            top: calc(100% + var(--space-2));
            left: 0;
            right: 0;
            background: var(--bg);
            border: 1px solid var(--bd);
            border-radius: var(--r-m);
            box-shadow: var(--sh-m);
            max-height: 280px;
            overflow-y: auto;
            display: none;
            z-index: 10;
        }

        .error-search .search-results.active {
            display: block;
        }

        .error-search .search-result-item {
            display: block;
            padding: var(--space-3) var(--space-4);
            color: var(--fg);
            text-decoration: none;
            font-family: var(--ff-b);
            font-size: 0.9rem;
            border-bottom: 1px solid var(--bd-w);
            transition: background var(--dur-f) var(--ease);
        }

        .error-search .search-result-item:last-child {
            border-bottom: none;
        }

        .error-search .search-result-item:hover,
        .error-search .search-result-item.active {
            background: var(--bg-s);
        }

        .error-search .search-result-item .search-result-section {
            font-size: 0.75rem;
            color: var(--fg-4);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        /* Quick links grid */
        .error-links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: var(--space-3);
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
        }

        .error-link {
            display: flex;
            align-items: center;
            gap: var(--space-2);
            padding: var(--space-3) var(--space-4);
            font-family: var(--ff-b);
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--fg-2);
            text-decoration: none;
            background: var(--bg-s);
            border: 1px solid var(--bd-w);
            border-radius: var(--r-m);
            transition: all var(--dur-n) var(--ease);
        }

        .error-link:hover {
            color: var(--accent);
            border-color: var(--accent);
            background: var(--accent-s);
            transform: translateY(-1px);
            box-shadow: var(--sh-s);
        }

        .error-link i {
            font-size: 1.1rem;
            flex-shrink: 0;
        }

        /* Divider */
        .error-divider {
            width: 48px;
            height: 1px;
            background: var(--bd);
            margin: var(--space-6) auto;
            border: none;
        }

        .error-footer {
            font-family: var(--ff-b);
            font-size: 0.8rem;
            color: var(--fg-4);
            margin-top: var(--space-4);
        }

        .error-footer a {
            color: var(--accent);
            text-decoration: none;
        }

        .error-footer a:hover {
            text-decoration: underline;
        }

        /* Dark mode overrides for 404 */
        [data-theme="dark"] .error-page::before {
            background: radial-gradient(circle, oklch(from var(--accent) l c h / .08) 0%, transparent 70%);
        }

        @media (prefers-color-scheme: dark) {
            html:not([data-theme="light"]) .error-page::before {
                background: radial-gradient(circle, oklch(from var(--accent) l c h / .08) 0%, transparent 70%);
            }
        }

        /* Hide the default app chrome on the 404 page */
        .app > .fnav,
        .app > .top-bar,
        .app > .container {
            display: none;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
            .error-content { animation: none; }
            .error-link { transition: none; }
        }
    </style>
</head>
<body>
    <div class="app">
        <!-- Hidden nav — 404 has its own navigation -->
        <nav class="fnav" id="fnav" role="navigation" aria-label="Main navigation" style="display:none"></nav>

        <!-- 404 Content -->
        <div class="error-page">
            <div class="error-content">
                <h1 class="error-code">4<em>0</em>4</h1>
                <p class="error-title">This page has wandered off</p>
                <p class="error-description">
                    The page you're looking for doesn't exist, has been moved, or perhaps never was.
                    Try searching or pick a section below.
                </p>

                <div class="error-search">
                    <i class="ph ph-magnifying-glass error-search-icon"></i>
                    <input type="text" id="error-search-input" placeholder="Search the design system..." aria-label="Search" autocomplete="off">
                    <div class="search-results" id="error-search-results"></div>
                </div>

                <div class="error-links">
                    <a href="./index.html" class="error-link">
                        <i class="ph-bold ph-house"></i>
                        Home
                    </a>
                    <a href="./tokens/colors.html" class="error-link">
                        <i class="ph-bold ph-palette"></i>
                        Tokens
                    </a>
                    <a href="./components/buttons.html" class="error-link">
                        <i class="ph-bold ph-stack"></i>
                        Components
                    </a>
                    <a href="./patterns/layouts.html" class="error-link">
                        <i class="ph-bold ph-grid-four"></i>
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

    <!-- Theme detection (minimal — no nav/search scripts needed from docs.js) -->
    <script>
        // Theme
        const html = document.documentElement;
        const saved = localStorage.getItem('standard-theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        html.setAttribute('data-theme', saved);

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('standard-theme')) {
                html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });

        // Search (standalone — loads Fuse.js and search index)
        (async () => {
            const input = document.getElementById('error-search-input');
            const resultsEl = document.getElementById('error-search-results');
            if (!input || !resultsEl) return;

            // Load Fuse.js
            const fuseScript = document.createElement('script');
            fuseScript.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';
            document.head.appendChild(fuseScript);

            await new Promise(resolve => { fuseScript.onload = resolve; });

            // Load search index
            let searchData = [];
            try {
                const res = await fetch('./search-index.json');
                searchData = await res.json();
            } catch (e) { return; }

            const fuse = new Fuse(searchData, {
                keys: [
                    { name: 'title', weight: 3 },
                    { name: 'content', weight: 1 },
                    { name: 'section', weight: 2 }
                ],
                threshold: 0.35,
                includeScore: true,
                minMatchCharLength: 2
            });

            let activeIndex = -1;

            input.addEventListener('input', () => {
                const query = input.value.trim();
                if (query.length < 2) {
                    resultsEl.classList.remove('active');
                    resultsEl.innerHTML = '';
                    activeIndex = -1;
                    return;
                }

                const results = fuse.search(query).slice(0, 8);
                if (results.length === 0) {
                    resultsEl.classList.remove('active');
                    resultsEl.innerHTML = '';
                    activeIndex = -1;
                    return;
                }

                activeIndex = -1;
                resultsEl.innerHTML = results.map((r, i) =>
                    '<a class="search-result-item" href="./' + r.item.url + '">' +
                        '<span class="search-result-section">' + r.item.section + '</span> ' +
                        r.item.title +
                    '</a>'
                ).join('');
                resultsEl.classList.add('active');
            });

            input.addEventListener('keydown', (e) => {
                const items = resultsEl.querySelectorAll('.search-result-item');
                if (!items.length) return;

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    activeIndex = Math.min(activeIndex + 1, items.length - 1);
                    items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    activeIndex = Math.max(activeIndex - 1, 0);
                    items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
                } else if (e.key === 'Enter' && activeIndex >= 0) {
                    e.preventDefault();
                    items[activeIndex].click();
                } else if (e.key === 'Escape') {
                    resultsEl.classList.remove('active');
                    resultsEl.innerHTML = '';
                    activeIndex = -1;
                    input.blur();
                }
            });

            // Close on click outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.error-search')) {
                    resultsEl.classList.remove('active');
                    activeIndex = -1;
                }
            });
        })();
    <\/script>
</body>
</html>`;

    await fs.writeFile(path.join(CONFIG.distDir, '404.html'), notFoundHtml);
    console.log('  ✓ Generated 404.html');

    console.log(`✨ Build finished in ${Date.now() - startTime}ms`);
}

build().catch(console.error);
