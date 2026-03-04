// Carbon Design System v0.3 — Shell Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Carbon v0.3 initialized');

    // ═══════════════════════════════════════
    // THEME TOGGLE
    // ═══════════════════════════════════════
    const themeBtn = document.getElementById('theme-btn');
    const html = document.documentElement;
    
    const savedTheme = localStorage.getItem('standard-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Listen for system theme changes (when no manual override)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('standard-theme')) {
            const systemTheme = e.matches ? 'dark' : 'light';
            html.setAttribute('data-theme', systemTheme);
            updateThemeIcon(systemTheme);
        }
    });

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('standard-theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeBtn) return;
        const icon = themeBtn.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'ph ph-sun';
        } else {
            icon.className = 'ph ph-moon';
        }
    }

    // ═══════════════════════════════════════
    // FLOATING NAV ACTIVE STATE
    // ═══════════════════════════════════════
    const fnav = document.getElementById('fnav');
    if (fnav) {
        const currentPath = window.location.pathname;
        const navLinks = fnav.querySelectorAll('a.fnav-btn[data-section]');
        
        // Determine current section from path
        let currentSection = 'home';
        if (currentPath.includes('/tokens/')) {
            currentSection = 'tokens';
        } else if (currentPath.includes('/components/')) {
            currentSection = 'components';
        } else if (currentPath.includes('/patterns/')) {
            currentSection = 'patterns';
        }
        
        navLinks.forEach(link => {
            const section = link.getAttribute('data-section');
            if (section === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // ═══════════════════════════════════════
    // SEARCH FUNCTIONALITY
    // ═══════════════════════════════════════
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchContainer = document.getElementById('search-container');
    const searchToggle = document.getElementById('search-toggle');
    let fuse = null;
    let searchIndex = null;

    // Load search index
    async function loadSearchIndex() {
        try {
            const relRoot = document.querySelector('link[href*="styles/docs.css"]')
                ?.getAttribute('href')
                ?.replace('styles/docs.css', '') || './';
            
            const response = await fetch(relRoot + 'search-index.json');
            searchIndex = await response.json();
            
            fuse = new Fuse(searchIndex, {
                keys: [
                    { name: 'title', weight: 2 },
                    { name: 'content', weight: 1 }
                ],
                threshold: 0.3,
                includeMatches: true,
                minMatchCharLength: 2
            });
        } catch (err) {
            console.warn('Search index not available:', err);
        }
    }

    loadSearchIndex();

    // Search toggle for mobile
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            if (searchInput) {
                searchInput.focus();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            
            if (!fuse || query.length < 2) {
                searchResults.classList.remove('active');
                searchResults.innerHTML = '';
                return;
            }

            const results = fuse.search(query).slice(0, 8);
            
            if (results.length === 0) {
                searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
                searchResults.classList.add('active');
                return;
            }

            searchResults.innerHTML = results.map(result => {
                const item = result.item;
                return `
                    <a href="${item.url}" class="search-result-item">
                        <span class="search-result-title">${item.title}</span>
                        <span class="search-result-section">${item.section}</span>
                    </a>
                `;
            }).join('');
            
            searchResults.classList.add('active');
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (searchContainer && !searchContainer.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });

        // Keyboard navigation
        searchInput.addEventListener('keydown', (e) => {
            const items = searchResults.querySelectorAll('.search-result-item');
            const activeItem = searchResults.querySelector('.search-result-item.active');
            let index = Array.from(items).indexOf(activeItem);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (activeItem) activeItem.classList.remove('active');
                index = (index + 1) % items.length;
                items[index]?.classList.add('active');
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (activeItem) activeItem.classList.remove('active');
                index = index <= 0 ? items.length - 1 : index - 1;
                items[index]?.classList.add('active');
            } else if (e.key === 'Enter' && activeItem) {
                e.preventDefault();
                window.location.href = activeItem.getAttribute('href');
            } else if (e.key === 'Escape') {
                searchResults.classList.remove('active');
                searchInput.blur();
            }
        });
    }

    // ═══════════════════════════════════════
    // MODAL HANDLING
    // ═══════════════════════════════════════
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('Modal-overlay')) {
            e.target.classList.remove('active');
        }
    });

    // ═══════════════════════════════════════
    // CODE BLOCKS — LANGUAGE LABELS + COPY
    // ═══════════════════════════════════════
    const langNames = {
        'html': 'HTML', 'css': 'CSS', 'javascript': 'JS', 'js': 'JS',
        'typescript': 'TS', 'ts': 'TS', 'json': 'JSON', 'bash': 'Shell',
        'shell': 'Shell', 'sh': 'Shell', 'markdown': 'Markdown', 'md': 'Markdown',
        'xml': 'XML', 'svg': 'SVG', 'yaml': 'YAML', 'yml': 'YAML',
        'python': 'Python', 'py': 'Python', 'jsx': 'JSX', 'tsx': 'TSX',
        'scss': 'SCSS', 'sass': 'Sass', 'less': 'Less', 'sql': 'SQL',
        'markup': 'HTML', 'plaintext': 'Text'
    };

    document.querySelectorAll('pre[class*="language-"]:not(.Preview-pane pre)').forEach(pre => {
        // Don't double-wrap
        if (pre.parentElement.classList.contains('code-block-wrapper')) return;
        
        // Detect language from class
        const langMatch = pre.className.match(/language-(\w+)/);
        const langKey = langMatch ? langMatch[1] : '';
        const langLabel = langNames[langKey] || langKey.toUpperCase() || '';

        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        pre.parentNode.insertBefore(wrapper, pre);

        // Create header if we have a language
        if (langLabel) {
            wrapper.classList.add('has-header');
            const header = document.createElement('div');
            header.className = 'code-block-header';

            const label = document.createElement('span');
            label.className = 'code-lang-label';
            label.textContent = langLabel;
            header.appendChild(label);

            const copyBtn = createCopyBtn(pre);
            header.appendChild(copyBtn);
            wrapper.appendChild(header);
        } else {
            // No header — floating copy button
            const copyBtn = createCopyBtn(pre);
            wrapper.appendChild(copyBtn);
        }

        wrapper.appendChild(pre);
    });

    function createCopyBtn(pre) {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'code-copy-btn';
        copyBtn.innerHTML = '<i class="ph ph-copy"></i><span>Copy</span>';
        copyBtn.setAttribute('aria-label', 'Copy code');

        copyBtn.addEventListener('click', async () => {
            const code = pre.querySelector('code')?.textContent || pre.textContent;
            try {
                await navigator.clipboard.writeText(code);
                copyBtn.innerHTML = '<i class="ph ph-check"></i><span>Copied!</span>';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="ph ph-copy"></i><span>Copy</span>';
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
        return copyBtn;
    }

    // ═══════════════════════════════════════
    // ENHANCED PREVIEW COMPONENT (v0.2+)
    // ═══════════════════════════════════════
    document.querySelectorAll('.Preview').forEach(preview => {
        // Tab switching
        const tabs = preview.querySelectorAll('.Preview-tab');
        const panes = preview.querySelectorAll('.Preview-pane');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;
                
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                panes.forEach(pane => {
                    pane.classList.toggle('active', pane.dataset.pane === target);
                });
            });
        });

        // Background toggle
        const bgControls = preview.querySelectorAll('.Preview-control[data-bg]');
        const canvas = preview.querySelector('.Preview-canvas');
        
        bgControls.forEach(control => {
            control.addEventListener('click', () => {
                const bg = control.dataset.bg;
                
                bgControls.forEach(c => c.classList.remove('active'));
                control.classList.add('active');
                
                canvas.classList.remove('Preview-canvas--light', 'Preview-canvas--dark', 'Preview-canvas--checkered');
                if (bg !== 'default') {
                    canvas.classList.add(`Preview-canvas--${bg}`);
                }
            });
        });

        // Viewport toggle
        const viewportControls = preview.querySelectorAll('.Preview-control[data-viewport]');
        
        viewportControls.forEach(control => {
            control.addEventListener('click', () => {
                const viewport = control.dataset.viewport;
                
                viewportControls.forEach(c => c.classList.remove('active'));
                control.classList.add('active');
                
                canvas.classList.remove('Preview-canvas--mobile', 'Preview-canvas--tablet');
                if (viewport !== 'desktop') {
                    canvas.classList.add(`Preview-canvas--${viewport}`);
                }
            });
        });

        // Copy buttons
        preview.querySelectorAll('.Preview-code-copy').forEach(copyBtn => {
            copyBtn.addEventListener('click', async () => {
                const codePane = copyBtn.closest('.Preview-pane');
                const code = codePane.querySelector('code')?.textContent || codePane.querySelector('pre')?.textContent || '';
                
                try {
                    await navigator.clipboard.writeText(code);
                    const originalText = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="ph ph-check"></i> Copied';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.innerHTML = originalText;
                        copyBtn.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                }
            });
        });
    });

    // ═══════════════════════════════════════
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ═══════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // ═══════════════════════════════════════
    // KEYBOARD SHORTCUTS
    // ═══════════════════════════════════════
    document.addEventListener('keydown', (e) => {
        // Cmd/Ctrl + K to focus search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape to blur search
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.blur();
            if (searchResults) searchResults.classList.remove('active');
        }
    });
});
