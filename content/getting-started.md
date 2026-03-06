# Getting Started

Start building with Standard in under two minutes. Copy the stylesheet, paste a component, and you're live — no build tools, no JavaScript frameworks, no dependencies.

---

## Quick Start

Add Standard's CSS to any HTML page. That's the entire setup.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="https://standard.operator.onl/styles/standard-core.css">
</head>
<body>
    <button class="Button Button--primary">Get Started</button>
</body>
</html>
```

That single `<link>` gives you every token, every component, dark mode, and responsive behavior. No JavaScript required for styling.

> **Which file?** `standard-core.css` (~63KB) contains only what your app needs — tokens, all 32 components, layouts, dark mode, and print styles. The full `standard.css` (~168KB) adds documentation-site chrome and is used by this site itself.

---

## What You Get

Standard ships as a single CSS file. Here's what's inside:

| Layer | What it does | Example |
|-------|-------------|---------|
| **Tokens** | CSS custom properties for color, spacing, type, shadows, radii | `var(--accent)`, `var(--space-4)` |
| **Components** | 32 production-ready UI components | `.Button`, `.Card`, `.Alert` |
| **Patterns** | Layout primitives — grid, stack, cluster, split | `.Grid`, `.Stack`, `.Cluster` |
| **Dark mode** | Automatic via `prefers-color-scheme` or manual via `data-theme` | Works out of the box |
| **Print styles** | Ink-optimized layouts, hidden chrome | Automatic via `@media print` |

---

## Using Tokens

Tokens are CSS custom properties on `:root`. Use them everywhere — they're the single source of truth.

### Colors

```css
/* Semantic colors — use these, not raw values */
color: var(--fg);          /* Primary text */
color: var(--fg-2);        /* Secondary text */
color: var(--fg-3);        /* Tertiary text */
background: var(--bg);     /* Page background */
background: var(--bg-s);   /* Surface (cards, inputs) */
border-color: var(--bd);   /* Default border */

/* Accent */
background: var(--accent);    /* Brand purple */
color: var(--accent-fg);      /* White text on accent */

/* Status */
color: var(--ok-text);     /* Success text (WCAG AA safe) */
color: var(--warn-text);   /* Warning text */
color: var(--err-text);    /* Error text */
background: var(--ok-soft);   /* Success background tint */
```

### Spacing

Built on a **4px grid**. Every spacing value is a multiple of 4.

```css
padding: var(--space-1);    /*  4px */
padding: var(--space-2);    /*  8px */
padding: var(--space-3);    /* 12px */
padding: var(--space-4);    /* 16px */
padding: var(--space-6);    /* 24px */
padding: var(--space-8);    /* 32px */
padding: var(--space-10);   /* 40px */
padding: var(--space-12);   /* 48px */
```

### Typography

Three font families for three purposes:

```css
font-family: var(--ff-d);  /* Display — Instrument Serif */
font-family: var(--ff-b);  /* Body — Outfit */
font-family: var(--ff-m);  /* Mono — JetBrains Mono */
```

### Radii

```css
border-radius: var(--r-s);   /*  6px — small elements */
border-radius: var(--r-m);   /* 10px — cards, inputs */
border-radius: var(--r-l);   /* 16px — modals, large cards */
border-radius: var(--r-xl);  /* 24px — sections */
border-radius: var(--r-f);   /* pill — full rounding */
```

### Shadows

Four elevation levels, each a multi-layer composite:

```css
box-shadow: var(--sh-s);    /* Small — subtle lift */
box-shadow: var(--sh-m);    /* Medium — cards, dropdowns */
box-shadow: var(--sh-l);    /* Large — modals */
box-shadow: var(--sh-xl);   /* Extra large — fullscreen overlays */
```

→ Full token reference: [Colors](./tokens/colors.html) · [Typography](./tokens/typography.html) · [Spacing](./tokens/spacing.html) · [Elevation](./tokens/elevation.html)

---

## Your First Component

Components use BEM-inspired class names. No data attributes, no JavaScript hooks — just classes.

<Preview title="Button variants">
    <div style="display: flex; gap: var(--space-3); flex-wrap: wrap; align-items: center;">
        <button class="Button Button--primary">Primary</button>
        <button class="Button Button--secondary">Secondary</button>
        <button class="Button Button--ghost">Ghost</button>
        <button class="Button Button--outline">Outline</button>
        <button class="Button Button--danger">Danger</button>
    </div>
</Preview>

<Preview title="Alert with icon">
    <div class="Alert Alert--info" role="alert">
        <i class="ph ph-info Alert-icon"></i>
        <div class="Alert-content">
            <strong>Tip:</strong> Every component works in light mode, dark mode, and print — no extra classes needed.
        </div>
    </div>
</Preview>

<Preview title="Card grid">
    <div class="Grid" style="--grid-min: 200px;">
        <div class="Card Card--elevated" style="padding: var(--space-4);">
            <h3 style="margin: 0 0 var(--space-2) 0; font-family: var(--ff-d);">Tokens</h3>
            <p style="margin: 0; color: var(--fg-3); font-size: var(--fs-sm);">Colors, spacing, type scales — the foundation.</p>
        </div>
        <div class="Card Card--elevated" style="padding: var(--space-4);">
            <h3 style="margin: 0 0 var(--space-2) 0; font-family: var(--ff-d);">Components</h3>
            <p style="margin: 0; color: var(--fg-3); font-size: var(--fs-sm);">32 production-ready building blocks.</p>
        </div>
        <div class="Card Card--elevated" style="padding: var(--space-4);">
            <h3 style="margin: 0 0 var(--space-2) 0; font-family: var(--ff-d);">Patterns</h3>
            <p style="margin: 0; color: var(--fg-3); font-size: var(--fs-sm);">Layout primitives for any page structure.</p>
        </div>
    </div>
</Preview>

---

## Dark Mode

Standard supports dark mode three ways — all automatic, zero config:

### 1. System preference (default)

If the user's OS is set to dark mode, Standard follows automatically via `prefers-color-scheme: dark`. Nothing to configure.

### 2. Manual toggle

Set `data-theme` on the `<html>` element:

```html
<!-- Force light mode -->
<html data-theme="light">

<!-- Force dark mode -->
<html data-theme="dark">
```

### 3. JavaScript toggle

```javascript
// Toggle between light and dark
const html = document.documentElement;
const current = html.getAttribute('data-theme');
html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
```

All 32 components, all tokens, and all status colors adapt automatically. You don't need dark-mode-specific classes.

---

## Layout Patterns

Standard includes composable layout primitives. Combine them to build any page structure.

<Preview title="Stack + Cluster">
    <div class="Stack" style="--stack-gap: var(--space-4); max-width: 400px;">
        <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m); border: 1px solid var(--bd-w);">
            <strong>Stack</strong> — vertical rhythm with consistent gaps
        </div>
        <div class="Cluster" style="--cluster-gap: var(--space-2);">
            <span class="Badge Badge--primary">Design</span>
            <span class="Badge Badge--success">Tokens</span>
            <span class="Badge Badge--warning">OKLCH</span>
        </div>
        <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m); border: 1px solid var(--bd-w);">
            Items flow vertically with equal spacing.
        </div>
    </div>
</Preview>

```html
<!-- Vertical stack with consistent gap -->
<div class="Stack" style="--stack-gap: var(--space-4);">
    <div>First item</div>
    <div>Second item</div>
    <div>Third item</div>
</div>

<!-- Responsive grid -->
<div class="Grid" style="--grid-min: 250px;">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
</div>

<!-- Horizontal cluster (wraps on small screens) -->
<div class="Cluster" style="--cluster-gap: var(--space-2);">
    <span class="Badge">Tag 1</span>
    <span class="Badge">Tag 2</span>
</div>
```

→ Full layout reference: [Layouts](./patterns/layouts.html)

---

## Class Naming

Standard uses a flat BEM-inspired convention:

| Pattern | Example | Meaning |
|---------|---------|---------|
| `.Component` | `.Button` | Block — the component itself |
| `.Component--variant` | `.Button--primary` | Modifier — a visual variant |
| `.Component-element` | `.Alert-icon` | Element — a child within the component |

No utility classes. No `!important`. No specificity wars. Each component is self-contained.

---

## Icons

Standard uses [Phosphor Icons](https://phosphoricons.com) — a flexible icon family with 6 weights. Include the CDN stylesheet and use `<i>` tags:

```html
<!-- Include Phosphor (regular weight) -->
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web/src/regular/style.css">

<!-- Use icons -->
<i class="ph ph-check"></i>          <!-- Regular weight -->
<i class="ph-bold ph-house"></i>     <!-- Bold weight (for nav) -->
<i class="ph-fill ph-star"></i>      <!-- Fill weight (for active states) -->
```

**Weight conventions:**
- `ph-bold` — Navigation chrome (nav bars, toolbars)
- `ph` (regular) — UI controls and content icons
- `ph-fill` — Active/selected states (filled stars, toggles)

→ Full icon reference: [Icons](./components/icons.html)

---

## Accessibility

Standard is built for WCAG 2.1 AA compliance:

- **Color contrast:** All text/background combinations pass 4.5:1 ratio
- **Focus indicators:** Every interactive element has a visible `:focus-visible` ring
- **Reduced motion:** All animations respect `prefers-reduced-motion: reduce`
- **Semantic HTML:** Components use proper ARIA roles, labels, and landmarks
- **Dark mode:** Status colors have dedicated `--*-text` tokens for contrast safety
- **Skip navigation:** Template includes a skip-to-content link
- **Print:** Complete print stylesheet for ink-efficient output

---

## Browser Support

Standard targets modern browsers with full OKLCH color support:

| Browser | Minimum Version |
|---------|----------------|
| Chrome / Edge | 111+ |
| Safari | 17+ |
| Firefox | 121+ |

Older browsers will see fallback system fonts and default colors. All layout and spacing works everywhere CSS custom properties are supported.

---

## Project Structure

If you're contributing or self-hosting:

```
standard/
├── content/            # Markdown source files
│   ├── index.md        # Homepage
│   ├── getting-started.md
│   ├── tokens/         # Color, type, spacing, elevation docs
│   ├── components/     # 32 component pages
│   └── patterns/       # Layout patterns
├── styles/
│   └── docs.css        # The entire design system (single file)
├── scripts/
│   ├── build.mjs       # Static site generator
│   └── docs.js         # Interactive docs (search, theme, previews)
├── templates/
│   └── page.html       # HTML template
├── assets/
│   └── fonts/          # Self-hosted woff2 fonts
└── dist/               # Built output (deploy this)
```

### Build locally

```bash
git clone https://github.com/operatoronline/standard.git
cd standard
npm install
npm run build
# Output in dist/ — open any HTML file
```

---

## What's Next

Now that you have the foundations, explore the system:

- **[Colors](./tokens/colors.html)** — Understand the OKLCH palette and semantic mapping
- **[Typography](./tokens/typography.html)** — Font stacks, scale, and sizing tokens
- **[Spacing](./tokens/spacing.html)** — The 4px grid system
- **[Buttons](./components/buttons.html)** — The most-used component, every variant
- **[Forms](./components/forms.html)** — Inputs, selects, checkboxes, radios
- **[Cards](./components/cards.html)** — Content containers with elevation
- **[Layouts](./patterns/layouts.html)** — Grid, Stack, Cluster, Split, Center
