# Standard Design System

A framework-agnostic design system built on OKLCH colors, a 4px spacing scale, and zero dependencies. Ship anywhere — no build tools required.

<Hero>
<div class="home-hero-left">
    <div class="home-hero-tagline">
        <span class="home-hero-badge">v1.0</span>
        Zero dependencies · OKLCH colors · WCAG AA
    </div>
    <div class="home-hero-cta">
        <a href="./getting-started.html" class="Button Button--primary Button--large"><i class="ph ph-rocket-launch" aria-hidden="true"></i> Get Started</a>
        <a href="./components.html" class="Button Button--outline Button--large"><i class="ph ph-stack" aria-hidden="true"></i> Components</a>
    </div>
</div>
<div class="home-hero-right">
    <div class="home-hero-code">
        <div class="home-hero-code-header">
            <span class="home-hero-code-dot"></span>
            <span class="home-hero-code-dot"></span>
            <span class="home-hero-code-dot"></span>
            <span class="home-hero-code-file">index.html</span>
        </div>
        <pre class="home-hero-code-body"><code><span class="t-comment">&lt;!-- One file. That's it. --&gt;</span>
<span class="t-tag">&lt;link</span> <span class="t-attr">rel</span>=<span class="t-str">"stylesheet"</span>
      <span class="t-attr">href</span>=<span class="t-str">"standard.css"</span><span class="t-tag">&gt;</span>

<span class="t-tag">&lt;button</span> <span class="t-attr">class</span>=<span class="t-str">"Button Button--primary"</span><span class="t-tag">&gt;</span>
  Ship it
<span class="t-tag">&lt;/button&gt;</span>

<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-str">"Card Card--elevated"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;h3</span> <span class="t-attr">class</span>=<span class="t-str">"Card-title"</span><span class="t-tag">&gt;</span>Ready<span class="t-tag">&lt;/h3&gt;</span>
  <span class="t-tag">&lt;p&gt;</span>No build step needed.<span class="t-tag">&lt;/p&gt;</span>
<span class="t-tag">&lt;/div&gt;</span></code></pre>
    </div>
</div>

</Hero>

<div class="home-stats">
    <div class="home-stat">
        <i class="ph ph-file-text" aria-hidden="true"></i>
        <strong>47</strong>
        <span>Pages</span>
    </div>
    <div class="home-stat">
        <i class="ph ph-stack" aria-hidden="true"></i>
        <strong>32</strong>
        <span>Components</span>
    </div>
    <div class="home-stat">
        <i class="ph ph-package" aria-hidden="true"></i>
        <strong>0</strong>
        <span>Dependencies</span>
    </div>
    <div class="home-stat">
        <i class="ph ph-eye" aria-hidden="true"></i>
        <strong>AA</strong>
        <span>WCAG</span>
    </div>
    <div class="home-stat">
        <i class="ph ph-moon" aria-hidden="true"></i>
        <strong>Dark</strong>
        <span>Mode</span>
    </div>
    <div class="home-stat">
        <i class="ph ph-printer" aria-hidden="true"></i>
        <strong>Print</strong>
        <span>Ready</span>
    </div>
</div>

---

## Tokens

The foundation: colors, type, and spacing that every component inherits.

- [Colors](./tokens/colors.html) — OKLCH palette, grayscale, accent, status, semantic mapping
- [Typography](./tokens/typography.html) — Font stacks, scale, weights, line heights
- [Spacing](./tokens/spacing.html) — 4px base grid, spacing tokens
- [Elevation](./tokens/elevation.html) — Shadow system, multi-layer composites
- [Export](./tokens/export.html) — Copy all tokens as CSS, JSON, or SCSS
- [Playground](./tokens/playground.html) — Interactive OKLCH explorer, contrast checker, scale generator

---

## Components

Interactive building blocks. Each page includes live previews, code snippets, and an API reference.

### Actions
- [Buttons](./components/buttons.html) — Primary, secondary, ghost, outline, danger, icon, groups
- [Links](./components/links.html) — Inline, standalone, with icons
- [Dropdowns](./components/dropdowns.html) — Trigger + menu, dividers, danger items
- [Menus](./components/menus.html) — Context menus, icon items, sections

### Data Entry
- [Forms](./components/forms.html) — Inputs, selects, checkboxes, radios, field layout
- [Switches](./components/switches.html) — Toggle switches, sizes, labels
- [Textarea](./components/textarea.html) — Multi-line input, states, sizes
- [Sliders](./components/sliders.html) — Range inputs, custom styling
- [File Upload](./components/file-upload.html) — Drag-and-drop zone, file input

### Data Display
- [Tables](./components/tables.html) — Striped, hoverable, bordered, sortable, responsive
- [Cards](./components/cards.html) — Standard, elevated, interactive, grid layout
- [Badges](./components/badges.html) — Status, primary, success, warning, error
- [Avatars](./components/avatars.html) — Sizes, rounded, fallback
- [Icons](./components/icons.html) — Phosphor icon set, grid display
- [Lists](./components/lists.html) — Bordered, active states, with icons
- [Timeline](./components/timeline.html) — Vertical timeline with dots and content
- [Rating](./components/rating.html) — Star rating, readonly

### Feedback
- [Alerts](./components/alerts.html) — Info, success, warning, error with icons
- [Toasts](./components/toasts.html) — Notifications, actions, auto-dismiss
- [Progress](./components/progress.html) — Bars, indeterminate, spinners
- [Skeletons](./components/skeletons.html) — Loading placeholders, shimmer
- [Tooltips](./components/tooltips.html) — Hover hints, positions

### Navigation
- [Tabs](./components/tabs.html) — Standard, pills variant
- [Breadcrumbs](./components/breadcrumbs.html) — Path navigation
- [Pagination](./components/pagination.html) — Page controls
- [Steppers](./components/steppers.html) — Multi-step progress

### Layout
- [Modals](./components/modals.html) — Dialog overlays, sizes, fullscreen
- [Drawer](./components/drawer.html) — Slide-in panels, left/right
- [Toolbar](./components/toolbar.html) — Icon button bars, groups, dividers
- [Accordions](./components/accordions.html) — Collapsible sections, bordered
- [Chips](./components/chips.html) — Tags, selectable, removable
- [Dividers](./components/dividers.html) — Horizontal rules, dashed, labeled

---

## Patterns

Composable layout primitives and common UI patterns.

- [Layouts](./patterns/layouts.html) — Container, Grid, Stack, Cluster, Split, Sidebar, Center
- [Empty States](./patterns/empty-states.html) — No-content messaging with icons and CTAs

---

## Resources

- [Getting Started](./getting-started.html) — Installation, quick start, and first components
- [Contributing](./contributing.html) — Development workflow, CSS conventions, and how to add components
- [Changelog](./changelog.html) — Release history and what's new in v1.0
