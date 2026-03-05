# Changelog

Release history for the Standard Design System. Each version documents what changed, what was added, and what was fixed.

---

## v1.0.1 — Polish & Navigation

**Released:** March 5, 2026

A focused quality pass on navigation, content discovery, and the homepage experience. This release brings the documentation from 43 to **47 pages** and adds the navigation infrastructure that makes the site feel like a real product.

### Added
- **Homepage redesign** — hero section with live code preview, animated stat counters, categorized section grid with 47 page cards, and a persistent quick-stats bar
- **Site-wide footer** — 3-column link grid (Documentation, Resources, Community), branding strip, and version tag
- **Back-to-top button** — glassmorphic floating button, appears on scroll, smooth-scrolls to top, adapts for mobile/desktop breakpoints
- **Heading anchor links** — `#` permalink buttons on all `h2`/`h3` headings with copy-to-clipboard and toast confirmation
- **Previous / Next page navigation** — contextual links at the bottom of every doc page, ordered by section hierarchy
- **"See Also" related pages** — curated link cards at the bottom of every component/token/pattern page, showing related documentation
- **Section category headers** — icon + label + count headers on the homepage grid for Tokens, Components, and Patterns
- **Comprehensive search index** — all 47 pages indexed with content snippets for better search result previews

### Changed
- **Page count badge** updated from 41 → 47 in README
- **Homepage** completely rebuilt from simple link list to production-quality landing page with visual hierarchy
- **Navigation flow** improved — users can now traverse the entire site without touching the nav bar (via prev/next + see-also)

---

## v1.0 — Production Release

**Released:** March 5, 2026

The first production-grade release of Standard. This version represents a comprehensive quality pass across every layer of the system — from tokens and accessibility to performance and SEO.

### Highlights

- **43 pages** of documentation across tokens, components, and patterns (later expanded to 47 in v1.0.1)
- **WCAG 2.1 AA compliant** — contrast, focus management, reduced motion, screen reader support
- **Zero external dependencies** — all assets self-hosted and vendored
- **Dark mode** — complete coverage across all 32 components with system preference auto-detection
- **Print-optimized** — every page produces clean, ink-efficient printed output
- **SEO-ready** — Open Graph, Twitter Cards, sitemap, robots.txt, canonical URLs
- **Sub-second loads** — minified CSS/JS, content-hashed filenames, immutable caching

### Added
- **Getting Started guide** — quick start, token overview, dark mode setup, project structure
- **Elevation tokens page** — interactive scale, multi-layer anatomy, component hierarchy map
- **Token export page** — copy-all utility with CSS, JSON, and SCSS formats
- **Contributing guide** — dev workflow, CSS conventions, accessibility checklist
- **Changelog page** — this page
- **404 page** — branded error page with integrated search and quick navigation
- **Sticky TOC sidebar** — scroll-spy navigation on all doc pages (≥1200px)
- **Lazy loading** — all 89 demo images use `loading="lazy"` and `decoding="async"`
- **Skip-to-content link** — keyboard-accessible bypass navigation (WCAG 2.4.1)
- **Live region announcer** — screen reader announcements for theme changes, search results, copy actions
- **Focus trap utility** — modal and overlay focus management
- **Print stylesheet** — comprehensive print styles for all components and code blocks
- **robots.txt and sitemap.xml** — auto-generated from build pipeline
- **Web manifest** — basic PWA support with branded icons
- **Favicon set** — SVG, ICO, Apple Touch Icon, Android Chrome icons (7 files)
- **OG image** — branded 1200×630 social sharing card
- **Page transitions** — View Transitions API with fallback fade/slide animation
- **Entry stagger animation** — cascading content reveal on page load

### Changed
- **Dark mode expanded** from 6 CSS rules to **83 rules** covering all 32 components
- **Fonts self-hosted** — eliminated Google Fonts dependency, added `font-display: swap` and `<link rel="preload">`
- **All CDN dependencies vendored** — normalize.css, Fuse.js, Prism.js, Phosphor Icons now served locally
- **CSS minified** — 123KB → 79KB (36% reduction) via esbuild
- **JS minified** — 24KB → 10KB (57% reduction) via esbuild
- **Content-hashed filenames** — automatic cache busting on every deploy
- **Immutable caching** — 1-year `Cache-Control` for hashed assets, fonts, and vendor files
- **Shadow system upgraded** — single-layer → dual-layer composites for natural depth
- **Typography scale tokenized** — all 96 hardcoded `font-size` values replaced with 16 scale tokens
- **Spacing grid enforced** — all hardcoded px values replaced with `--space-*` tokens, 5 off-grid values snapped to 4px grid
- **Transitions audited** — eliminated all 26 `transition: all` instances, replaced with explicit property lists
- **Navigation active states** — accent glow, keyboard focus styles, `aria-current` attributes, label slide animation
- **Preview containers** — elevation, header differentiation, smart auto-centering, responsive controls
- **Code blocks** — language labels, refined syntax theme, copy button UX, dark mode tokens, scrollbar styling
- **Mobile responsive** — full-screen search overlay, table scroll wrappers, stacking layouts, compact modals/drawers
- **Icon consistency** — fixed missing `ph-fill` stylesheet (affected 75 elements), enforced weight conventions

### Fixed
- **12 WCAG AA color contrast failures** — added contrast-safe `--*-text` status tokens, fixed inline code, code comments, warning toast, dark mode `--fg-4`
- **Phosphor fill icons not rendering** — `ph-fill` stylesheet was never loaded in template
- **Mobile search completely broken** — fnav search toggle tried to focus hidden desktop input; replaced with full-screen overlay
- **Code copy button invisible in light mode** — hardcoded white overlay replaced with theme-aware tokens
- **Preview borders invisible in dark mode** — switched from `--bd-w` to `--bd`
- **Checkered background invisible in dark mode** — same fix
- **Root URL returning 404** — Caddy `try_files` missing `/index.html` fallback
- **System dark mode preference not detected** — added `prefers-color-scheme: dark` auto-detection in CSS and JS
- **Focus styles missing on interactive elements** — added `focus-visible` styles to all buttons, tabs, pagination, rating, code copy, file upload
- **Decorative icons announced by screen readers** — added `aria-hidden="true"` to all icon elements

### Security
- **Content Security Policy** — strict CSP with `script-src 'self'`, zero inline scripts
- **HSTS** — 2-year `Strict-Transport-Security` with `includeSubDomains` and `preload`
- **Security headers added** — `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`
- **carbon.operator.onl** — permanent 301 redirect to `standard.operator.onl`

---

## v0.3 — Documentation Framework

**Released:** February 2026

Initial documentation site with component previews and search.

### Added
- 37 pages of documentation (32 components, 3 token pages, 2 patterns)
- Static HTML build pipeline (Markdown → HTML)
- Floating pill navigation with glassmorphism
- Full-text search via Fuse.js
- Live component previews with background/viewport controls
- Code syntax highlighting via Prism.js
- API reference tables for every component
- Do / Don't usage guidelines
- Playwright visual regression tests (68 snapshots)

### Foundation
- OKLCH color tokens with semantic mapping
- 4px spacing scale (8 tokens)
- 24-column grid system
- 3-font type system (Instrument Serif, Outfit, JetBrains Mono)
- Zero runtime dependencies — pure CSS components

---

## v0.2 — Component Library

**Released:** January 2026

### Added
- 32 CSS components with full API surface
- Enhanced Preview component with tab switching, viewport simulation, background options
- Dark mode toggle (basic — 6 CSS rules)
- BEM-inspired class naming convention

---

## v0.1 — Token Foundation

**Released:** December 2025

### Added
- OKLCH color palette (grayscale, accent, status)
- Spacing tokens on 4px grid
- Typography scale with 3 font families
- Border radius tokens (5 levels)
- Initial component prototypes
