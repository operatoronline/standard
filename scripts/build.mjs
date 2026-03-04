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

    console.log(`✨ Build finished in ${Date.now() - startTime}ms`);
}

build().catch(console.error);
