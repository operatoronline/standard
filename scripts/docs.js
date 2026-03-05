// Standard Design System v1.0 — Shell Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Standard v1.0 initialized');

    // ═══════════════════════════════════════
    // SEARCH SHORTCUT HINT (⌘K / Ctrl+K)
    // ═══════════════════════════════════════
    const shortcutMods = document.querySelectorAll('.search-shortcut-mod');
    if (shortcutMods.length) {
        const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform) || 
                      (navigator.userAgentData && navigator.userAgentData.platform === 'macOS');
        const modSymbol = isMac ? '⌘' : 'Ctrl+';
        shortcutMods.forEach(el => { el.textContent = modSymbol; });
    }

    // ═══════════════════════════════════════
    // A11Y: LIVE REGION ANNOUNCER
    // ═══════════════════════════════════════
    const announcer = document.getElementById('a11y-announcer');
    function announce(message, priority) {
        if (!announcer) return;
        // Briefly clear to ensure re-announcement of same text
        announcer.textContent = '';
        announcer.setAttribute('aria-live', priority === 'assertive' ? 'assertive' : 'polite');
        requestAnimationFrame(() => {
            announcer.textContent = message;
        });
    }

    // ═══════════════════════════════════════
    // A11Y: FOCUS TRAP UTILITY
    // ═══════════════════════════════════════
    function trapFocus(container) {
        const focusableSelectors = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
        
        function handler(e) {
            if (e.key !== 'Tab') return;
            const focusable = Array.from(container.querySelectorAll(focusableSelectors)).filter(el => el.offsetParent !== null);
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
        container.addEventListener('keydown', handler);
        return () => container.removeEventListener('keydown', handler);
    }

    // ═══════════════════════════════════════
    // THEME TOGGLE
    // ═══════════════════════════════════════
    const themeBtn = document.getElementById('theme-btn');
    const html = document.documentElement;
    
    // Theme is set by blocking inline script in <head> (prevents FOUC).
    // If no saved theme, CSS prefers-color-scheme handles it — read the effective state.
    const savedTheme = localStorage.getItem('standard-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
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
            announce(`Switched to ${newTheme} mode`);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeBtn) return;
        const icon = themeBtn.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'ph-bold ph-sun';
            themeBtn.setAttribute('aria-label', 'Switch to light mode');
        } else {
            icon.className = 'ph-bold ph-moon';
            themeBtn.setAttribute('aria-label', 'Switch to dark mode');
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
    // SEARCH SNIPPET EXTRACTION
    // ═══════════════════════════════════════
    // Extract a content snippet around the best match, with highlighted text
    function getSearchSnippet(result, query) {
        const item = result.item;
        const content = item.content || '';
        if (!content) return '';

        // Find the content match from Fuse.js matches array
        const contentMatch = result.matches?.find(m => m.key === 'content');
        const queryLower = query.toLowerCase();

        // Get the position to center the snippet around
        let snippetStart = 0;
        if (contentMatch && contentMatch.indices && contentMatch.indices.length > 0) {
            // Use first match index from Fuse
            snippetStart = Math.max(0, contentMatch.indices[0][0] - 40);
        } else {
            // Fallback: find query text directly in content
            const idx = content.toLowerCase().indexOf(queryLower);
            if (idx >= 0) snippetStart = Math.max(0, idx - 40);
        }

        // Extract ~120 char window
        const maxLen = 120;
        let snippet = content.slice(snippetStart, snippetStart + maxLen);

        // Clean up: trim to word boundaries
        if (snippetStart > 0) {
            const spaceIdx = snippet.indexOf(' ');
            if (spaceIdx > 0 && spaceIdx < 20) snippet = snippet.slice(spaceIdx + 1);
            snippet = '…' + snippet;
        }
        if (snippetStart + maxLen < content.length) {
            const lastSpace = snippet.lastIndexOf(' ');
            if (lastSpace > snippet.length - 20) snippet = snippet.slice(0, lastSpace);
            snippet += '…';
        }

        // Strip leftover markdown/HTML artifacts
        snippet = snippet.replace(/<[^>]+>/g, '').replace(/[#*_`|]/g, '').replace(/\s+/g, ' ').trim();

        // Highlight matching text (escape HTML first, then wrap matches)
        snippet = snippet.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        if (queryLower.length >= 2) {
            const escaped = queryLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp(`(${escaped})`, 'gi');
            snippet = snippet.replace(re, '<mark>$1</mark>');
        }

        return snippet;
    }

    // Section icon mapping for search results
    const sectionIcons = {
        'Home': 'ph ph-house',
        'Tokens': 'ph ph-palette',
        'Components': 'ph ph-stack',
        'Patterns': 'ph ph-grid-four'
    };

    function renderSearchResult(result, query, i, idPrefix) {
        const item = result.item;
        const snippet = getSearchSnippet(result, query);
        const iconClass = sectionIcons[item.section] || 'ph ph-file-text';
        return `
            <a href="${item.url}" class="search-result-item" role="option" id="${idPrefix}-${i}">
                <div class="search-result-icon"><i class="${iconClass}" aria-hidden="true"></i></div>
                <div class="search-result-body">
                    <span class="search-result-title">${item.title}</span>
                    ${snippet ? `<span class="search-result-snippet">${snippet}</span>` : ''}
                </div>
                <span class="search-result-section">${item.section}</span>
            </a>
        `;
    }

    // ═══════════════════════════════════════
    // MOBILE SEARCH OVERLAY
    // ═══════════════════════════════════════
    // On mobile (< 768px), the top-bar search is hidden.
    // Create a full-screen overlay triggered by the fnav search button.
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-search-overlay';
    mobileOverlay.setAttribute('role', 'dialog');
    mobileOverlay.setAttribute('aria-label', 'Search');
    mobileOverlay.setAttribute('aria-modal', 'true');
    mobileOverlay.innerHTML = `
        <button class="mobile-search-close" aria-label="Close search" type="button">
            <i class="ph ph-x" aria-hidden="true"></i>
        </button>
        <div class="mobile-search-bar" role="search">
            <i class="ph ph-magnifying-glass" aria-hidden="true"></i>
            <input type="text" class="mobile-search-input" placeholder="Search components…" aria-label="Search components" autocomplete="off" aria-controls="mobile-search-results" aria-expanded="false" aria-autocomplete="list" role="combobox">
        </div>
        <div class="mobile-search-results" id="mobile-search-results" role="listbox"></div>
    `;
    document.body.appendChild(mobileOverlay);

    const mobileSearchInput = mobileOverlay.querySelector('.mobile-search-input');
    const mobileSearchResults = mobileOverlay.querySelector('.mobile-search-results');
    const mobileSearchClose = mobileOverlay.querySelector('.mobile-search-close');

    let releaseMobileTrap = null;
    let mobileSearchTrigger = null;

    function openMobileSearch() {
        mobileSearchTrigger = document.activeElement;
        mobileOverlay.classList.add('active');
        releaseMobileTrap = trapFocus(mobileOverlay);
        // Small delay to let transition start, then focus
        requestAnimationFrame(() => mobileSearchInput.focus());
    }

    function closeMobileSearch() {
        mobileOverlay.classList.remove('active');
        mobileSearchInput.value = '';
        mobileSearchInput.setAttribute('aria-expanded', 'false');
        mobileSearchResults.classList.remove('active');
        mobileSearchResults.innerHTML = '';
        if (releaseMobileTrap) { releaseMobileTrap(); releaseMobileTrap = null; }
        // Return focus to trigger element
        if (mobileSearchTrigger) { mobileSearchTrigger.focus(); mobileSearchTrigger = null; }
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
            mobileSearchInput.setAttribute('aria-expanded', 'false');
            return;
        }

        const results = fuse.search(query).slice(0, 8);

        if (results.length === 0) {
            mobileSearchResults.innerHTML = '<div class="search-no-results">No results found</div>';
            mobileSearchResults.classList.add('active');
            mobileSearchInput.setAttribute('aria-expanded', 'true');
            announce('No results found');
            return;
        }

        mobileSearchResults.innerHTML = results.map((result, i) => renderSearchResult(result, query, i, 'mobile-search-opt')).join('');

        mobileSearchResults.classList.add('active');
        mobileSearchInput.setAttribute('aria-expanded', 'true');
        announce(`${results.length} result${results.length === 1 ? '' : 's'} found`);
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
                searchInput.setAttribute('aria-expanded', 'false');
                return;
            }

            const results = fuse.search(query).slice(0, 8);
            
            if (results.length === 0) {
                searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
                searchResults.classList.add('active');
                searchInput.setAttribute('aria-expanded', 'true');
                announce('No results found');
                return;
            }

            searchResults.innerHTML = results.map((result, i) => renderSearchResult(result, query, i, 'search-opt')).join('');
            
            searchResults.classList.add('active');
            searchInput.setAttribute('aria-expanded', 'true');
            announce(`${results.length} result${results.length === 1 ? '' : 's'} found`);
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (searchContainer && !searchContainer.contains(e.target)) {
                searchResults.classList.remove('active');
                searchInput.setAttribute('aria-expanded', 'false');
                searchInput.removeAttribute('aria-activedescendant');
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
                searchInput.setAttribute('aria-activedescendant', items[index]?.id || '');
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (activeItem) activeItem.classList.remove('active');
                index = index <= 0 ? items.length - 1 : index - 1;
                items[index]?.classList.add('active');
                searchInput.setAttribute('aria-activedescendant', items[index]?.id || '');
            } else if (e.key === 'Enter' && activeItem) {
                e.preventDefault();
                window.location.href = activeItem.getAttribute('href');
            } else if (e.key === 'Escape') {
                searchResults.classList.remove('active');
                searchInput.setAttribute('aria-expanded', 'false');
                searchInput.removeAttribute('aria-activedescendant');
                searchInput.blur();
            }
        });
    }

    // ═══════════════════════════════════════
    // MODAL & DRAWER HANDLING (A11Y)
    // ═══════════════════════════════════════
    let releaseModalTrap = null;
    let modalTrigger = null;

    function closeActiveModal() {
        const activeOverlay = document.querySelector('.Modal-overlay.active, .Modal-overlay--active');
        if (!activeOverlay) return;
        activeOverlay.classList.remove('active', 'Modal-overlay--active');
        if (releaseModalTrap) { releaseModalTrap(); releaseModalTrap = null; }
        if (modalTrigger) { modalTrigger.focus(); modalTrigger = null; }
    }

    // Close modals on overlay click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('Modal-overlay')) {
            closeActiveModal();
        }
    });

    // Close modals on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeOverlay = document.querySelector('.Modal-overlay.active, .Modal-overlay--active');
            if (activeOverlay) {
                e.preventDefault();
                closeActiveModal();
            }
        }
    });

    // Auto-setup focus trap when modal becomes active (via MutationObserver)
    const modalObserver = new MutationObserver((mutations) => {
        for (const m of mutations) {
            if (m.type === 'attributes' && m.attributeName === 'class') {
                const el = m.target;
                if (el.classList.contains('Modal-overlay') || el.classList.contains('Drawer-overlay')) {
                    const isActive = el.classList.contains('active') || el.classList.contains('Modal-overlay--active');
                    if (isActive) {
                        modalTrigger = document.activeElement;
                        el.setAttribute('role', 'dialog');
                        el.setAttribute('aria-modal', 'true');
                        releaseModalTrap = trapFocus(el);
                        // Focus first focusable element inside
                        const firstFocusable = el.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                        if (firstFocusable) requestAnimationFrame(() => firstFocusable.focus());
                    }
                }
            }
        }
    });
    // Observe all modal/drawer overlays that exist in the page content (from Preview demos)
    document.querySelectorAll('.Modal-overlay, .Drawer-overlay').forEach(overlay => {
        modalObserver.observe(overlay, { attributes: true, attributeFilter: ['class'] });
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
        copyBtn.innerHTML = '<i class="ph ph-copy" aria-hidden="true"></i><span>Copy</span>';
        copyBtn.setAttribute('aria-label', 'Copy code');

        copyBtn.addEventListener('click', async () => {
            const code = pre.querySelector('code')?.textContent || pre.textContent;
            try {
                await navigator.clipboard.writeText(code);
                copyBtn.innerHTML = '<i class="ph ph-check" aria-hidden="true"></i><span>Copied!</span>';
                copyBtn.classList.add('copied');
                announce('Code copied to clipboard');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="ph ph-copy" aria-hidden="true"></i><span>Copy</span>';
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
    document.querySelectorAll('.Preview').forEach((preview, previewIdx) => {
        // A11Y: Set up tab ARIA roles
        const tabsContainer = preview.querySelector('.Preview-tabs');
        const tabs = preview.querySelectorAll('.Preview-tab');
        const panes = preview.querySelectorAll('.Preview-pane');
        
        if (tabsContainer) tabsContainer.setAttribute('role', 'tablist');
        
        tabs.forEach((tab, i) => {
            const target = tab.dataset.tab;
            const paneId = `preview-${previewIdx}-pane-${target}`;
            const tabId = `preview-${previewIdx}-tab-${target}`;
            tab.setAttribute('role', 'tab');
            tab.setAttribute('id', tabId);
            tab.setAttribute('aria-controls', paneId);
            tab.setAttribute('aria-selected', tab.classList.contains('active') ? 'true' : 'false');
            tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');
            
            // Find matching pane
            const matchingPane = Array.from(panes).find(p => p.dataset.pane === target);
            if (matchingPane) {
                matchingPane.setAttribute('role', 'tabpanel');
                matchingPane.setAttribute('id', paneId);
                matchingPane.setAttribute('aria-labelledby', tabId);
                if (!matchingPane.classList.contains('active')) matchingPane.setAttribute('hidden', '');
            }
        });

        // Arrow key navigation for tabs
        if (tabsContainer) {
            tabsContainer.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                    const currentTab = tabsContainer.querySelector('.Preview-tab[aria-selected="true"]');
                    const tabArr = Array.from(tabs);
                    let idx = tabArr.indexOf(currentTab);
                    if (e.key === 'ArrowRight') idx = (idx + 1) % tabArr.length;
                    else idx = (idx - 1 + tabArr.length) % tabArr.length;
                    tabArr[idx].click();
                    tabArr[idx].focus();
                    e.preventDefault();
                }
            });
        }

        // Tab switching
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;
                
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                    t.setAttribute('tabindex', '-1');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                tab.setAttribute('tabindex', '0');
                
                panes.forEach(pane => {
                    const isActive = pane.dataset.pane === target;
                    pane.classList.toggle('active', isActive);
                    if (isActive) pane.removeAttribute('hidden');
                    else pane.setAttribute('hidden', '');
                });
            });
        });

        // Cycle button logic
        const canvas = preview.querySelector('.Preview-canvas');
        const bgCycle = ['light', 'dark', 'checkered'];
        const bgIcons = { light: 'ph-sun', dark: 'ph-moon', checkered: 'ph-grid-four' };
        const bgLabels = { light: 'Light background', dark: 'Dark background', checkered: 'Checkered background' };
        const vpCycle = ['desktop', 'tablet', 'mobile'];
        const vpIcons = { desktop: 'ph-desktop', tablet: 'ph-device-tablet', mobile: 'ph-device-mobile' };
        const vpLabels = { desktop: 'Desktop viewport', tablet: 'Tablet viewport', mobile: 'Mobile viewport' };

        preview.querySelectorAll('.Preview-cycle').forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.dataset.cycle;
                const states = type === 'bg' ? bgCycle : vpCycle;
                const icons = type === 'bg' ? bgIcons : vpIcons;
                const labels = type === 'bg' ? bgLabels : vpLabels;
                const current = btn.dataset.state;
                const idx = states.indexOf(current);
                const next = states[(idx + 1) % states.length];

                btn.dataset.state = next;
                btn.querySelector('i').className = `ph ${icons[next]}`;
                btn.setAttribute('aria-label', labels[next]);
                btn.title = labels[next];

                if (type === 'bg') {
                    canvas.classList.remove('Preview-canvas--light', 'Preview-canvas--dark', 'Preview-canvas--checkered');
                    canvas.classList.add(`Preview-canvas--${next}`);
                } else {
                    canvas.classList.remove('Preview-canvas--mobile', 'Preview-canvas--tablet');
                    if (next !== 'desktop') canvas.classList.add(`Preview-canvas--${next}`);
                }
            });
        });

        // Copy buttons
        preview.querySelectorAll('.Preview-code-copy').forEach(copyBtn => {
            copyBtn.setAttribute('aria-label', 'Copy code');
            copyBtn.addEventListener('click', async () => {
                const codePane = copyBtn.closest('.Preview-pane');
                const code = codePane.querySelector('code')?.textContent || codePane.querySelector('pre')?.textContent || '';
                
                try {
                    await navigator.clipboard.writeText(code);
                    const originalText = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="ph ph-check" aria-hidden="true"></i> Copied';
                    copyBtn.classList.add('copied');
                    announce('Code copied to clipboard');
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
    // ═══════════════════════════════════════
    // PAGE TRANSITIONS + SCROLL BEHAVIOR
    // ═══════════════════════════════════════
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Smooth-scroll anchor links (respects reduced motion)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth', block: 'start' });
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
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
    // DELEGATED EVENT HANDLERS (replaces inline onclick)
    // ═══════════════════════════════════════
    document.addEventListener('click', (e) => {
        // Password visibility toggle
        const pwToggle = e.target.closest('[data-action="toggle-password"]');
        if (pwToggle) {
            const input = pwToggle.previousElementSibling;
            const icon = pwToggle.querySelector('i');
            if (input && icon) {
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.className = 'ph ph-eye-slash';
                } else {
                    input.type = 'password';
                    icon.className = 'ph ph-eye';
                }
            }
            return;
        }

        // Menu toggle
        const menuToggle = e.target.closest('[data-action="toggle-menu"]');
        if (menuToggle) {
            const menu = menuToggle.nextElementSibling;
            if (menu) menu.classList.toggle('Menu--open');
            return;
        }
    });

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

    // ═══════════════════════════════════════
    // TOC SIDEBAR — SCROLL SPY
    // ═══════════════════════════════════════
    const tocLinks = document.querySelectorAll('[data-toc-link]');
    if (tocLinks.length > 0) {
        // Collect all heading targets referenced by TOC links
        const tocTargets = [];
        tocLinks.forEach(link => {
            const id = link.getAttribute('href')?.replace('#', '');
            if (id) {
                const el = document.getElementById(id);
                if (el) tocTargets.push({ el, link });
            }
        });

        if (tocTargets.length > 0) {
            let rafId = null;
            function updateActiveToc() {
                rafId = null;
                const scrollTop = window.scrollY;
                const offset = 100; // activate when heading is 100px from top
                let activeIdx = -1;

                for (let i = tocTargets.length - 1; i >= 0; i--) {
                    if (tocTargets[i].el.offsetTop - offset <= scrollTop) {
                        activeIdx = i;
                        break;
                    }
                }

                tocLinks.forEach(l => l.classList.remove('active'));
                if (activeIdx >= 0) {
                    tocTargets[activeIdx].link.classList.add('active');
                }
            }

            window.addEventListener('scroll', () => {
                if (!rafId) rafId = requestAnimationFrame(updateActiveToc);
            }, { passive: true });

            // Initial highlight
            updateActiveToc();

            // Smooth scroll for TOC clicks (respects reduced motion preference)
            const tocScrollBehavior = prefersReducedMotion ? 'instant' : 'smooth';
            tocLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const id = link.getAttribute('href')?.replace('#', '');
                    const target = id && document.getElementById(id);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: tocScrollBehavior, block: 'start' });
                        // Update URL hash without jump
                        history.pushState(null, '', `#${id}`);
                        // Move focus to heading for keyboard users
                        target.setAttribute('tabindex', '-1');
                        target.focus({ preventScroll: true });
                    }
                });
            });

            // Handle initial page load with hash — ensure heading is visible below fixed nav
            if (window.location.hash) {
                const hashTarget = document.getElementById(window.location.hash.slice(1));
                if (hashTarget) {
                    // Slight delay to let the browser finish layout
                    requestAnimationFrame(() => {
                        hashTarget.scrollIntoView({ behavior: 'instant', block: 'start' });
                    });
                }
            }
        }
    }

    // ─── Token Export: Copy buttons ───
    document.querySelectorAll('.token-export-copy[data-copy-target]').forEach(btn => {
        btn.addEventListener('click', async () => {
            const targetId = btn.getAttribute('data-copy-target');
            const codeEl = document.getElementById(targetId);
            if (!codeEl) return;
            const code = codeEl.querySelector('code')?.textContent || codeEl.textContent;
            try {
                await navigator.clipboard.writeText(code);
                const origHtml = btn.innerHTML;
                btn.innerHTML = '<i class="ph ph-check" aria-hidden="true"></i> Copied!';
                btn.classList.add('copied');
                announce('Tokens copied to clipboard');
                setTimeout(() => {
                    btn.innerHTML = origHtml;
                    btn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy tokens:', err);
            }
        });
    });

    // Token count for "Copy All" block
    const allCodeEl = document.getElementById('token-code-all');
    const countEl = document.getElementById('token-count-all');
    const sizeEl = document.getElementById('token-size-all');
    if (allCodeEl && countEl) {
        const text = allCodeEl.textContent || '';
        const tokenCount = (text.match(/^\s+--[\w-]+:/gm) || []).length;
        countEl.textContent = tokenCount + ' tokens';
        if (sizeEl) {
            const bytes = new Blob([text]).size;
            sizeEl.textContent = bytes < 1024 ? bytes + ' B' : (bytes / 1024).toFixed(1) + ' KB';
        }
    }
});

/* ═══════════════════════════════════════
   TOKEN PLAYGROUND — Interactive OKLCH Tools
   ═══════════════════════════════════════ */
(function () {
    'use strict';

    // --- OKLCH → sRGB Conversion (for hex output and contrast calc) ---
    // Attempt CSS.supports check for oklch; if not, we still render via CSS but hex approximations use math
    function oklchToLinearRGB(l, c, h) {
        // Convert OKLCH → OKLab → Linear sRGB
        const hRad = (h * Math.PI) / 180;
        const a = c * Math.cos(hRad);
        const b = c * Math.sin(hRad);

        // OKLab → LMS (cube root domain)
        const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
        const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
        const s_ = l - 0.0894841775 * a - 1.2914855480 * b;

        // Undo cube root
        const ll = l_ * l_ * l_;
        const mm = m_ * m_ * m_;
        const ss = s_ * s_ * s_;

        // LMS → Linear sRGB
        const r = +4.0767416621 * ll - 3.3077115913 * mm + 0.2309699292 * ss;
        const g = -1.2684380046 * ll + 2.6097574011 * mm - 0.3413193965 * ss;
        const bOut = -0.0041960863 * ll - 0.7034186147 * mm + 1.7076147010 * ss;

        return [r, g, bOut];
    }

    function linearToSRGB(c) {
        return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
    }

    function oklchToHex(l100, c100, h) {
        const l = l100 / 100; // Convert percentage to 0-1
        const c = c100 / 100; // Convert from 0-40 slider → 0-0.40
        const [lr, lg, lb] = oklchToLinearRGB(l, c, h);
        const r = Math.round(Math.max(0, Math.min(1, linearToSRGB(lr))) * 255);
        const g = Math.round(Math.max(0, Math.min(1, linearToSRGB(lg))) * 255);
        const b = Math.round(Math.max(0, Math.min(1, linearToSRGB(lb))) * 255);
        return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
    }

    function isInGamut(l100, c100, h) {
        const l = l100 / 100;
        const c = c100 / 100;
        const [lr, lg, lb] = oklchToLinearRGB(l, c, h);
        const sr = linearToSRGB(lr), sg = linearToSRGB(lg), sb = linearToSRGB(lb);
        return sr >= -0.002 && sr <= 1.002 && sg >= -0.002 && sg <= 1.002 && sb >= -0.002 && sb <= 1.002;
    }

    // WCAG relative luminance from sRGB 0-255
    function relativeLuminance(r, g, b) {
        const [rs, gs, bs] = [r, g, b].map(c => {
            c = c / 255;
            return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    }

    function contrastRatio(l1, l2) {
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
    }

    function hexToRGB(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    }

    function announce(msg) {
        const el = document.getElementById('a11y-announcer');
        if (el) { el.textContent = ''; requestAnimationFrame(() => { el.textContent = msg; }); }
    }

    function copyText(text, btn) {
        navigator.clipboard.writeText(text).then(() => {
            btn.classList.add('copied');
            const orig = btn.innerHTML;
            btn.innerHTML = '<i class="ph ph-check" aria-hidden="true"></i> Copied!';
            announce('Copied to clipboard');
            setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = orig; }, 2000);
        });
    }

    // ─────── OKLCH Explorer ───────
    const explorer = document.getElementById('oklch-explorer');
    if (explorer) {
        const lSlider = document.getElementById('pg-lightness');
        const cSlider = document.getElementById('pg-chroma');
        const hSlider = document.getElementById('pg-hue');
        const lVal = document.getElementById('pg-lightness-val');
        const cVal = document.getElementById('pg-chroma-val');
        const hVal = document.getElementById('pg-hue-val');
        const swatchInner = document.getElementById('pg-swatch-inner');
        const swatchLabel = document.getElementById('pg-swatch-label');
        const copyOklch = document.getElementById('pg-copy-oklch');
        const copyHex = document.getElementById('pg-copy-hex');
        const hexLabel = document.getElementById('pg-hex-label');

        function updateExplorer() {
            const l = parseInt(lSlider.value);
            const c = parseInt(cSlider.value);
            const h = parseInt(hSlider.value);
            const cFloat = (c / 100).toFixed(2);
            const oklchStr = `oklch(${l}% ${cFloat} ${h})`;
            const hex = oklchToHex(l, c, h);

            lVal.textContent = l + '%';
            cVal.textContent = cFloat;
            hVal.textContent = h + '°';

            swatchInner.style.background = oklchStr;
            swatchLabel.textContent = oklchStr;

            // Determine label color based on lightness
            swatchLabel.style.color = l > 60 ? 'oklch(0% 0 0 / .8)' : 'oklch(100% 0 0 / .9)';
            swatchLabel.style.background = l > 60 ? 'oklch(100% 0 0 / .4)' : 'oklch(0% 0 0 / .4)';

            copyOklch.setAttribute('data-copy-value', oklchStr);
            copyHex.setAttribute('data-copy-value', hex);
            hexLabel.textContent = hex;

            // Update chroma track gradient to show current L/H
            cSlider.style.background = `linear-gradient(to right, oklch(${l}% 0 ${h}), oklch(${l}% 0.20 ${h}), oklch(${l}% 0.40 ${h}))`;
        }

        [lSlider, cSlider, hSlider].forEach(s => s.addEventListener('input', updateExplorer));
        copyOklch.addEventListener('click', () => copyText(copyOklch.getAttribute('data-copy-value'), copyOklch));
        copyHex.addEventListener('click', () => copyText(copyHex.getAttribute('data-copy-value'), copyHex));
        updateExplorer();

        // Public API for preset loading
        window._pgSetExplorer = function (l, c, h) {
            lSlider.value = l;
            cSlider.value = c;
            hSlider.value = h;
            updateExplorer();
            explorer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };
    }

    // ─────── Contrast Checker ───────
    const ccEl = document.getElementById('contrast-checker');
    if (ccEl) {
        const fgL = document.getElementById('cc-fg-l');
        const fgC = document.getElementById('cc-fg-c');
        const fgH = document.getElementById('cc-fg-h');
        const bgL = document.getElementById('cc-bg-l');
        const bgC = document.getElementById('cc-bg-c');
        const bgH = document.getElementById('cc-bg-h');
        const sample = document.getElementById('cc-sample');
        const ratioEl = document.getElementById('cc-ratio');
        const aaNormal = document.getElementById('cc-aa-normal');
        const aaLarge = document.getElementById('cc-aa-large');
        const aaa = document.getElementById('cc-aaa');
        const fgChip = document.getElementById('cc-fg-chip');
        const bgChip = document.getElementById('cc-bg-chip');
        const ccCopy = document.getElementById('cc-copy');

        function updateContrast() {
            const fl = parseInt(fgL.value), fc = parseInt(fgC.value), fh = parseInt(fgH.value);
            const bl = parseInt(bgL.value), bc = parseInt(bgC.value), bh = parseInt(bgH.value);
            const fgOklch = `oklch(${fl}% ${(fc/100).toFixed(2)} ${fh})`;
            const bgOklch = `oklch(${bl}% ${(bc/100).toFixed(2)} ${bh})`;

            sample.style.color = fgOklch;
            sample.style.background = bgOklch;
            fgChip.style.background = fgOklch;
            bgChip.style.background = bgOklch;

            // Outputs
            document.getElementById('cc-fg-l-val').textContent = fl + '%';
            document.getElementById('cc-fg-c-val').textContent = (fc/100).toFixed(2);
            document.getElementById('cc-fg-h-val').textContent = fh + '°';
            document.getElementById('cc-bg-l-val').textContent = bl + '%';
            document.getElementById('cc-bg-c-val').textContent = (bc/100).toFixed(2);
            document.getElementById('cc-bg-h-val').textContent = bh + '°';

            // Compute contrast
            const fgHex = oklchToHex(fl, fc, fh);
            const bgHex = oklchToHex(bl, bc, bh);
            const fgRGB = hexToRGB(fgHex);
            const bgRGB = hexToRGB(bgHex);
            const fgLum = relativeLuminance(...fgRGB);
            const bgLum = relativeLuminance(...bgRGB);
            const ratio = contrastRatio(fgLum, bgLum);

            ratioEl.textContent = ratio.toFixed(2) + ':1';

            function setBadge(el, pass, label) {
                el.textContent = label + (pass ? ' ✓ Pass' : ' ✗ Fail');
                el.className = 'playground-badge ' + (pass ? 'pass' : 'fail');
            }
            setBadge(aaNormal, ratio >= 4.5, 'AA Normal');
            setBadge(aaLarge, ratio >= 3, 'AA Large');
            setBadge(aaa, ratio >= 7, 'AAA');

            ccCopy.setAttribute('data-copy-value', `color: ${fgOklch};\nbackground: ${bgOklch};\n/* Contrast ratio: ${ratio.toFixed(2)}:1 */`);
        }

        [fgL, fgC, fgH, bgL, bgC, bgH].forEach(s => s.addEventListener('input', updateContrast));
        ccCopy.addEventListener('click', () => copyText(ccCopy.getAttribute('data-copy-value'), ccCopy));
        updateContrast();
    }

    // ─────── Hue Wheel ───────
    const hueWheelContainer = document.getElementById('hue-wheel-container');
    if (hueWheelContainer) {
        const wheel = document.getElementById('hue-wheel');
        const hwL = document.getElementById('hw-lightness');
        const hwC = document.getElementById('hw-chroma');
        const hwLVal = document.getElementById('hw-lightness-val');
        const hwCVal = document.getElementById('hw-chroma-val');
        const hwLabel = document.getElementById('hw-label');
        let activeSegment = null;

        function buildWheel() {
            const l = parseInt(hwL.value);
            const c = parseInt(hwC.value);
            hwLVal.textContent = l + '%';
            hwCVal.textContent = (c / 100).toFixed(2);

            wheel.innerHTML = '';
            for (let h = 0; h < 360; h += 5) {
                const seg = document.createElement('div');
                seg.className = 'playground-wheel-segment';
                seg.style.background = `oklch(${l}% ${(c/100).toFixed(2)} ${h})`;
                seg.setAttribute('data-hue', h);
                seg.setAttribute('role', 'button');
                seg.setAttribute('aria-label', `Hue ${h}°`);
                seg.setAttribute('tabindex', '0');
                wheel.appendChild(seg);
            }
        }

        wheel.addEventListener('mouseover', (e) => {
            const seg = e.target.closest('.playground-wheel-segment');
            if (seg) {
                const h = seg.getAttribute('data-hue');
                const l = hwL.value;
                const c = (parseInt(hwC.value) / 100).toFixed(2);
                hwLabel.textContent = `oklch(${l}% ${c} ${h})`;
            }
        });

        wheel.addEventListener('click', (e) => {
            const seg = e.target.closest('.playground-wheel-segment');
            if (seg) {
                if (activeSegment) activeSegment.classList.remove('active');
                seg.classList.add('active');
                activeSegment = seg;
                const h = parseInt(seg.getAttribute('data-hue'));
                if (window._pgSetExplorer) {
                    window._pgSetExplorer(parseInt(hwL.value), parseInt(hwC.value), h);
                }
            }
        });

        wheel.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.target.click();
            }
        });

        [hwL, hwC].forEach(s => s.addEventListener('input', buildWheel));
        buildWheel();
    }

    // ─────── Scale Generator ───────
    const sgEl = document.getElementById('scale-generator');
    if (sgEl) {
        const sgHue = document.getElementById('sg-hue');
        const sgChroma = document.getElementById('sg-chroma');
        const sgHueVal = document.getElementById('sg-hue-val');
        const sgChromaVal = document.getElementById('sg-chroma-val');
        const sgScale = document.getElementById('sg-scale');
        const sgCopy = document.getElementById('sg-copy');

        // Scale stops: name, lightness, chroma multiplier
        const stops = [
            { name: '600', l: 45, cm: 0.90 },
            { name: '500', l: 55, cm: 1.00 },
            { name: '400', l: 65, cm: 0.90 },
            { name: '300', l: 75, cm: 0.70 },
            { name: '200', l: 85, cm: 0.40 },
            { name: '100', l: 92, cm: 0.20 },
            { name: '50',  l: 96, cm: 0.10 },
        ];

        function updateScale() {
            const h = parseInt(sgHue.value);
            const peakC = parseInt(sgChroma.value);
            sgHueVal.textContent = h + '°';
            sgChromaVal.textContent = (peakC / 100).toFixed(2);

            sgScale.innerHTML = '';
            const cssLines = [];

            stops.forEach(stop => {
                const c = ((peakC * stop.cm) / 100).toFixed(2);
                const oklch = `oklch(${stop.l}% ${c} ${h})`;
                const el = document.createElement('div');
                el.className = 'playground-scale-stop';
                el.style.background = oklch;
                // Determine text color based on lightness
                const textColor = stop.l > 60 ? 'oklch(0% 0 0 / .7)' : 'oklch(100% 0 0 / .85)';
                el.innerHTML = `<span class="playground-scale-stop-name" style="color:${textColor}">${stop.name}</span><span class="playground-scale-stop-value" style="color:${textColor}">${c}</span>`;
                el.addEventListener('click', () => {
                    if (window._pgSetExplorer) window._pgSetExplorer(stop.l, Math.round(peakC * stop.cm), h);
                });
                sgScale.appendChild(el);
                cssLines.push(`  --hue-${stop.name}: ${oklch};`);
            });

            sgCopy.setAttribute('data-copy-value', `:root {\n${cssLines.join('\n')}\n}`);
        }

        [sgHue, sgChroma].forEach(s => s.addEventListener('input', updateScale));
        sgCopy.addEventListener('click', () => copyText(sgCopy.getAttribute('data-copy-value'), sgCopy));
        updateScale();
    }

    // ─────── Presets ───────
    const presetsEl = document.getElementById('presets');
    if (presetsEl) {
        presetsEl.addEventListener('click', (e) => {
            const btn = e.target.closest('.playground-preset');
            if (btn && window._pgSetExplorer) {
                const l = parseInt(btn.getAttribute('data-l'));
                const c = parseInt(btn.getAttribute('data-c'));
                const h = parseInt(btn.getAttribute('data-h'));
                window._pgSetExplorer(l, c, h);
            }
        });
    }

    // ═══════════════════════════════════════
    // BACK TO TOP BUTTON
    // ═══════════════════════════════════════
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        const BTT_THRESHOLD = 400; // px scrolled before showing
        let bttTicking = false;

        function updateBackToTop() {
            if (window.scrollY > BTT_THRESHOLD) {
                backToTopBtn.classList.add('is-visible');
            } else {
                backToTopBtn.classList.remove('is-visible');
            }
            bttTicking = false;
        }

        window.addEventListener('scroll', () => {
            if (!bttTicking) {
                requestAnimationFrame(updateBackToTop);
                bttTicking = true;
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            // Use smooth scroll if user hasn't opted out of motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? 'instant' : 'smooth'
            });
            // Move focus to skip-link or top of page for a11y
            const skipLink = document.querySelector('.skip-link');
            if (skipLink) {
                skipLink.focus({ preventScroll: true });
            }
        });

        // Initial check (e.g., if page loaded scrolled down)
        updateBackToTop();
    }

    // ═══════════════════════════════════════
    // MOBILE TOC — Bottom sheet for <1200px screens
    // ═══════════════════════════════════════
    const mobileTocTrigger = document.getElementById('mobile-toc-trigger');
    const mobileTocOverlay = document.getElementById('mobile-toc-overlay');
    const mobileTocClose = document.getElementById('mobile-toc-close');
    const mobileTocBody = document.getElementById('mobile-toc-body');
    const sidebarToc = document.querySelector('.toc-sidebar .toc');

    if (mobileTocTrigger && mobileTocOverlay && mobileTocBody && sidebarToc) {
        // Clone the sidebar TOC content into the mobile sheet
        const tocClone = sidebarToc.cloneNode(true);
        // Update cloned links with mobile-specific data attribute
        tocClone.querySelectorAll('[data-toc-link]').forEach(link => {
            link.setAttribute('data-mobile-toc-link', '');
        });
        mobileTocBody.appendChild(tocClone);

        // Show/hide trigger based on scroll (same logic as back-to-top)
        const MTOC_THRESHOLD = 200;
        let mtocTicking = false;
        function updateMobileTocTrigger() {
            const isWide = window.matchMedia('(min-width: 1200px)').matches;
            if (!isWide && window.scrollY > MTOC_THRESHOLD) {
                mobileTocTrigger.classList.add('is-visible');
            } else {
                mobileTocTrigger.classList.remove('is-visible');
            }
            mtocTicking = false;
        }
        window.addEventListener('scroll', () => {
            if (!mtocTicking) {
                requestAnimationFrame(updateMobileTocTrigger);
                mtocTicking = true;
            }
        }, { passive: true });
        window.addEventListener('resize', updateMobileTocTrigger, { passive: true });
        updateMobileTocTrigger();

        // Sync scroll-spy active state to mobile TOC links
        function syncMobileTocActive() {
            const desktopLinks = sidebarToc.querySelectorAll('[data-toc-link]');
            const mobileLinks = mobileTocBody.querySelectorAll('[data-mobile-toc-link]');
            desktopLinks.forEach((dLink, i) => {
                if (i < mobileLinks.length) {
                    mobileLinks[i].classList.toggle('active', dLink.classList.contains('active'));
                }
            });
        }
        // Observe scroll-spy changes
        window.addEventListener('scroll', () => {
            requestAnimationFrame(syncMobileTocActive);
        }, { passive: true });

        function openMobileToc() {
            syncMobileTocActive();
            mobileTocOverlay.classList.add('is-open');
            mobileTocTrigger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
            // Focus first link or close button
            const firstLink = mobileTocBody.querySelector('a');
            if (firstLink) firstLink.focus({ preventScroll: true });
            // Scroll active item into view
            const activeLink = mobileTocBody.querySelector('.toc a.active');
            if (activeLink) {
                activeLink.scrollIntoView({ block: 'center', behavior: 'instant' });
            }
        }

        function closeMobileToc() {
            mobileTocOverlay.classList.remove('is-open');
            mobileTocTrigger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            mobileTocTrigger.focus({ preventScroll: true });
        }

        mobileTocTrigger.addEventListener('click', openMobileToc);
        mobileTocClose.addEventListener('click', closeMobileToc);
        // Close on overlay click (not sheet itself)
        mobileTocOverlay.addEventListener('click', (e) => {
            if (e.target === mobileTocOverlay) closeMobileToc();
        });
        // Escape key
        mobileTocOverlay.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileToc();
        });

        // Handle link clicks in mobile TOC
        mobileTocBody.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;
            e.preventDefault();
            const id = link.getAttribute('href')?.replace('#', '');
            const target = id && document.getElementById(id);
            if (target) {
                closeMobileToc();
                // Small delay for sheet to close before scrolling
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: prefersReducedMotion ? 'instant' : 'smooth',
                        block: 'start'
                    });
                    history.pushState(null, '', `#${id}`);
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                }, 150);
            }
        });

        // Focus trap inside mobile TOC sheet
        mobileTocOverlay.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;
            const focusable = mobileTocOverlay.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        });
    }

    // ─── Heading anchor links: click-to-copy deep-link URL ───
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('.heading-anchor');
        if (!anchor) return;
        e.preventDefault();
        const url = new URL(anchor.getAttribute('href'), window.location.href).href;
        navigator.clipboard.writeText(url).then(() => {
            // Visual feedback
            anchor.classList.add('copied');
            // Update URL hash without scroll
            history.replaceState(null, '', anchor.getAttribute('href'));
            // Announce to screen reader
            const announcer = document.getElementById('a11y-announcer');
            if (announcer) announcer.textContent = 'Link copied to clipboard';
            // Reset after 2s
            setTimeout(() => {
                anchor.classList.remove('copied');
            }, 2000);
        }).catch(() => {
            // Fallback: just navigate to the anchor
            window.location.hash = anchor.getAttribute('href');
        });
    });
})();
