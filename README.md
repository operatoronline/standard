# Standard Design System

[![Version](https://img.shields.io/badge/version-1.0.1-7B2FBE?style=flat-square)](https://standard.operator.onl/changelog.html)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![WCAG AA](https://img.shields.io/badge/WCAG-AA%20compliant-4CAF50?style=flat-square)](#accessibility)
[![Zero Dependencies](https://img.shields.io/badge/runtime%20deps-0-brightgreen?style=flat-square)](#zero-dependencies)
[![Pages](https://img.shields.io/badge/docs-47%20pages-8B5CF6?style=flat-square)](https://standard.operator.onl)

A framework-agnostic design system built on **OKLCH colors**, a **24-column fluid grid**, and **4px spacing**. Zero runtime dependencies. Dark mode. Print-ready. Accessible.

**[Live Site →](https://standard.operator.onl)** · **[Getting Started →](https://standard.operator.onl/getting-started.html)** · **[Changelog →](https://standard.operator.onl/changelog.html)**

---

## Features

| Feature | Details |
|---------|---------|
| 🎨 **OKLCH Color System** | Perceptually uniform colors with semantic tokens (`--fg`, `--bg`, `--accent`, `--ok`, `--warn`, `--err`) |
| 📐 **24-Column Fluid Grid** | Responsive layouts with Stack, Grid, and Cluster primitives |
| 📏 **4px Spacing Scale** | 8 spacing tokens (`--space-1` through `--space-8`) on a strict 4px grid |
| 🌙 **Dark Mode** | 83 CSS rules covering all 32 components. Auto-detects system preference |
| ♿ **WCAG 2.1 AA** | Skip-to-content, focus traps, ARIA combobox search, live regions, contrast-safe tokens |
| 🖨️ **Print Stylesheet** | Optimized for paper — grayscale syntax, page break control, URL printing |
| 🔒 **Security Hardened** | CSP, HSTS, X-Frame-Options, Permissions-Policy. Zero external runtime requests |
| ⚡ **Performance** | Self-hosted fonts, minified CSS/JS, content-hash cache busting, immutable vendor assets |
| 🔍 **Full-Text Search** | Client-side Fuse.js search with keyboard navigation and ARIA combobox pattern |
| 📱 **Mobile-First** | Every component tested across breakpoints. Full-screen search overlay on mobile |

## Quick Start

No build tools required. Add one stylesheet:

```html
<link rel="stylesheet" href="https://standard.operator.onl/docs.min.css">
```

Then use components:

```html
<button class="Button Button--primary">Get Started</button>

<div class="Alert Alert--success">
  <i class="ph ph-check-circle Alert-icon"></i>
  <div class="Alert-content">Operation complete.</div>
</div>

<div class="Card Card--elevated">
  <div class="Card-body">
    <h3 class="Card-title">Hello</h3>
    <p>Built with Standard.</p>
  </div>
</div>
```

## Components

32 production-ready components with live previews, API reference tables, and do/don't guidance:

| Category | Components |
|----------|-----------|
| **Actions** | Button, Link, Toolbar |
| **Data Display** | Badge, Card, Chip, Avatar, Icons, List, Table, Timeline |
| **Feedback** | Alert, Toast, Progress, Skeleton, Rating, Empty State |
| **Forms** | Input, Select, Textarea, Checkbox, Radio, Switch, Slider, File Upload, Dropdown |
| **Layout** | Accordion, Tabs, Stepper, Divider, Breadcrumbs, Pagination |
| **Overlays** | Modal, Drawer, Tooltip, Menu |

## Design Tokens

All styling flows through CSS custom properties:

```css
/* Colors */
--fg: oklch(15% 0 0);          /* Primary text */
--bg: oklch(99% 0 0);          /* Page background */
--accent: oklch(55% 0.25 285); /* Brand purple */

/* Spacing (4px grid) */
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 20px;  --space-6: 24px;  --space-7: 28px;   --space-8: 32px;

/* Typography */
--fs-base: 1rem;               /* Body text */
--fs-xl: 1.25rem;              /* Prose */
--fs-hero: clamp(...);         /* Page titles */

/* Shadows (multi-layer composites) */
--sh-s   /* Subtle */    --sh-m   /* Medium */
--sh-l   /* Large */     --sh-xl  /* Extra large */

/* Radii */
--r-s: 4px;  --r-m: 8px;  --r-l: 12px;  --r-xl: 16px;  --r-f: 9999px;
```

Token documentation: [Colors](https://standard.operator.onl/tokens/colors.html) · [Spacing](https://standard.operator.onl/tokens/spacing.html) · [Typography](https://standard.operator.onl/tokens/typography.html) · [Elevation](https://standard.operator.onl/tokens/elevation.html)

## Dark Mode

Three ways to enable dark mode:

```html
<!-- 1. Automatic (system preference) -->
<!-- Just works — CSS uses prefers-color-scheme -->

<!-- 2. Manual attribute -->
<html data-theme="dark">

<!-- 3. JavaScript toggle -->
<script>
  document.documentElement.setAttribute('data-theme', 'dark');
</script>
```

## Class Naming

BEM-inspired, framework-agnostic. No utility classes. No `!important`.

| Pattern | Example | Usage |
|---------|---------|-------|
| Block | `.Button` | Component root |
| Modifier | `.Button--primary` | Variant |
| Element | `.Alert-icon` | Child element |

## Browser Support

| Browser | Minimum | Reason |
|---------|---------|--------|
| Chrome / Edge | 111+ | OKLCH color support |
| Safari | 17+ | OKLCH color support |
| Firefox | 121+ | OKLCH color support |

## Zero Dependencies

The production site makes **zero external network requests**. Everything is vendored and self-hosted:

- **Fonts:** Instrument Serif, Outfit, JetBrains Mono (woff2, `font-display: swap`)
- **Icons:** Phosphor Icons (subsetted — Bold 150KB→14KB, Regular 147KB→14KB)
- **Libraries:** normalize.css, Fuse.js, Prism.js (vendored to `/vendor/`)

No DNS lookups to CDNs. No SPOF. Works offline after first visit.

## Accessibility

- **Skip-to-content link** (WCAG 2.4.1)
- **Focus traps** on Modal, Drawer, mobile search overlay
- **ARIA combobox** search pattern with `aria-activedescendant`
- **Live region announcer** for theme changes, search results, clipboard actions
- **Contrast-safe status tokens** (`--ok-text`, `--warn-text`, `--err-text`) — all ≥4.5:1
- **`prefers-reduced-motion`** — all animations and transitions disabled
- **Tab panel ARIA** on all component previews
- **`aria-current="page"`** on active navigation
- **Keyboard navigation** — arrow keys in tabs, search results, preview panels

## Security

Production Caddy config includes:

```
Content-Security-Policy: default-src 'self'; script-src 'self'; ...
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Build

```bash
git clone https://github.com/operatoronline/standard.git
cd standard
npm install
npm run build        # Build static site → dist/
npm run dev          # Watch mode with live rebuild
npm test             # Playwright visual regression (68 tests)
npm run test:update  # Regenerate snapshots
```

### Build Output

The build pipeline:
1. Compiles Markdown → HTML via markdown-it
2. Injects meta tags (description, OG, Twitter Cards, canonical URLs)
3. Minifies CSS and JS via esbuild with content-hash filenames
4. Generates sitemap.xml and robots.txt
5. Copies vendored assets and fonts
6. Outputs to `dist/`

## Project Structure

```
content/                  # Markdown source (41 pages)
  index.md                # Homepage
  getting-started.md      # Onboarding guide
  changelog.md            # Release history
  components/             # 32 component pages
  tokens/                 # Colors, Spacing, Typography, Elevation
  patterns/               # Layouts, Empty States
templates/                # HTML shell template
styles/
  docs.css                # Source CSS (~5,300 lines)
  critical.css            # Above-fold critical CSS
  404.css                 # 404 page styles
scripts/
  build.mjs               # Static site generator
  docs.js                 # Client-side JS (search, theme, a11y)
  404.js                  # 404 page logic
  generate-favicons.mjs   # Favicon set generator
assets/
  fonts/                  # Self-hosted woff2 (Instrument Serif, Outfit, JetBrains Mono)
  og-image.png            # Open Graph image (1200×630)
  favicon.svg             # SVG favicon
vendor/                   # Vendored dependencies (normalize, fuse, prism, phosphor)
tests/                    # Playwright visual regression
dist/                     # Built output
```

## Performance

| Metric | Value |
|--------|-------|
| CSS (minified) | ~78KB |
| JS (minified) | ~10KB |
| Fonts (latin subset) | ~157KB |
| Icon fonts (subsetted) | ~32KB |
| External requests | 0 |
| Cache strategy | Immutable content-hash (CSS/JS/vendor/fonts), 5min revalidate (HTML) |

## Changelog

See [CHANGELOG](https://standard.operator.onl/changelog.html) for the full release history.

**v1.0.0** — Production release. 41 pages, WCAG AA, zero external dependencies, complete dark mode (83 rules), print stylesheet, CSP headers, content-hash cache busting, SEO (sitemap, OG tags, canonical URLs), comprehensive accessibility (skip-to-content, focus traps, ARIA combobox, live regions).

## License

MIT
