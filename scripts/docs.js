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
            icon.className = 'ph-bold ph-sun';
        } else {
            icon.className = 'ph-bold ph-moon';
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
        if (currentPath.includes('/tokens/') || currentPath.includes('/tokens.html')) {
            currentSection = 'tokens';
        } else if (currentPath.includes('/components/') || currentPath.includes('/components.html')) {
            currentSection = 'components';
        } else if (currentPath.includes('/patterns/') || currentPath.includes('/patterns.html')) {
            currentSection = 'patterns';
        }
        
        navLinks.forEach(link => {
            const section = link.getAttribute('data-section');
            if (section === currentSection) {
                link.classList.add('active');
                link.setAttribute('aria-current', section === currentSection && currentPath === link.pathname ? 'page' : 'true');
            } else {
                link.removeAttribute('aria-current');
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

    // ═══════════════════════════════════════
    // MOBILE SEARCH OVERLAY
    // ═══════════════════════════════════════
    // On mobile (< 768px), the top-bar search is hidden.
    // Create a full-screen overlay triggered by the fnav search button.
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-search-overlay';
    mobileOverlay.innerHTML = `
        <button class="mobile-search-close" aria-label="Close search">
            <i class="ph ph-x"></i>
        </button>
        <div class="mobile-search-bar">
            <i class="ph ph-magnifying-glass"></i>
            <input type="text" class="mobile-search-input" placeholder="Search components…" aria-label="Search" autocomplete="off">
        </div>
        <div class="mobile-search-results"></div>
    `;
    document.body.appendChild(mobileOverlay);

    const mobileSearchInput = mobileOverlay.querySelector('.mobile-search-input');
    const mobileSearchResults = mobileOverlay.querySelector('.mobile-search-results');
    const mobileSearchClose = mobileOverlay.querySelector('.mobile-search-close');

    function openMobileSearch() {
        mobileOverlay.classList.add('active');
        // Small delay to let transition start, then focus
        requestAnimationFrame(() => mobileSearchInput.focus());
    }

    function closeMobileSearch() {
        mobileOverlay.classList.remove('active');
        mobileSearchInput.value = '';
        mobileSearchResults.classList.remove('active');
        mobileSearchResults.innerHTML = '';
    }

    mobileSearchClose.addEventListener('click', closeMobileSearch);

    // Close overlay on Escape
    mobileOverlay.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileSearch();
    });

    // Close overlay when clicking outside the search bar/results
    mobileOverlay.addEventListener('click', (e) => {
        if (e.target === mobileOverlay) closeMobileSearch();
    });

    // Mobile search input handling
    mobileSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        if (!fuse || query.length < 2) {
            mobileSearchResults.classList.remove('active');
            mobileSearchResults.innerHTML = '';
            return;
        }

        const results = fuse.search(query).slice(0, 8);

        if (results.length === 0) {
            mobileSearchResults.innerHTML = '<div class="search-no-results">No results found</div>';
            mobileSearchResults.classList.add('active');
            return;
        }

        mobileSearchResults.innerHTML = results.map(result => {
            const item = result.item;
            return `
                <a href="${item.url}" class="search-result-item">
                    <span class="search-result-title">${item.title}</span>
                    <span class="search-result-section">${item.section}</span>
                </a>
            `;
        }).join('');

        mobileSearchResults.classList.add('active');
    });

    // Mobile search keyboard navigation
    mobileSearchInput.addEventListener('keydown', (e) => {
        const items = mobileSearchResults.querySelectorAll('.search-result-item');
        const activeItem = mobileSearchResults.querySelector('.search-result-item.active');
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
        }
    });

    // Search toggle: mobile opens overlay, desktop focuses top-bar input
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                openMobileSearch();
            } else if (searchInput) {
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
    // RESPONSIVE TABLE WRAPPERS
    // ═══════════════════════════════════════
    // Wrap tables in scrollable containers on all screens.
    // This prevents horizontal overflow while preserving
    // table layout (better than CSS display:block approach).
    document.querySelectorAll('.prose table, .prose .ApiTable').forEach(table => {
        // Skip if already inside a scrollable container
        if (table.parentElement.classList.contains('Table-container') ||
            table.parentElement.classList.contains('table-scroll-wrapper')) {
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.className = 'table-scroll-wrapper';
        wrapper.style.overflowX = 'auto';
        wrapper.style.WebkitOverflowScrolling = 'touch';
        wrapper.style.margin = 'var(--space-4) 0';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);

        // Remove the table's own margin since wrapper provides it
        table.style.margin = '0';
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
    // PAGE TRANSITIONS
    // ═══════════════════════════════════════
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasViewTransitions = 'startViewTransition' in document;

    // For browsers WITHOUT View Transitions API: intercept internal links
    // and add a smooth fade-out before navigating.
    // For browsers WITH the API, the CSS @view-transition { navigation: auto }
    // handles cross-document transitions natively — no JS interception needed.
    if (!hasViewTransitions && !prefersReducedMotion) {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (!link) return;

            const href = link.getAttribute('href');
            // Skip: external links, anchors, new tabs, special protocols
            if (!href ||
                href.startsWith('#') ||
                href.startsWith('http') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                link.target === '_blank' ||
                e.ctrlKey || e.metaKey || e.shiftKey) {
                return;
            }

            // Only intercept same-origin relative links
            try {
                const url = new URL(href, window.location.origin);
                if (url.origin !== window.location.origin) return;
            } catch { return; }

            e.preventDefault();

            const mainContent = document.querySelector('.main-content');
            if (!mainContent) {
                window.location.href = href;
                return;
            }

            // Trigger exit animation
            mainContent.classList.add('page-exit');

            // Navigate after exit animation completes
            const duration = parseFloat(getComputedStyle(document.documentElement)
                .getPropertyValue('--dur-n')) || 200;

            setTimeout(() => {
                window.location.href = href;
            }, duration);
        });
    }

    // ═══════════════════════════════════════
    // KEYBOARD SHORTCUTS
    // ═══════════════════════════════════════
    document.addEventListener('keydown', (e) => {
        // Cmd/Ctrl + K to focus search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                openMobileSearch();
            } else if (searchInput) {
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
