# Breadcrumbs

Breadcrumbs show the user's location within a site hierarchy and provide quick navigation to parent pages. They help users understand where they are and navigate back through the site structure.

---

## Installation

Copy the breadcrumb CSS from `styles/docs.css` or include the Standard stylesheet:

```html
<link rel="stylesheet" href="standard.min.css">
```

Then use breadcrumb classes in your HTML:

```html
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item"><a href="#">Home</a></li>
        <li class="Breadcrumb-item" aria-current="page">Current Page</li>
    </ol>
</nav>
```

---

## Usage

The breadcrumb component uses semantic HTML with a `<nav>` landmark and an ordered list to convey hierarchy. The last item represents the current page and should not be a link.

<Preview>
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item"><a href="#">Home</a></li>
        <li class="Breadcrumb-item"><a href="#">Products</a></li>
        <li class="Breadcrumb-item" aria-current="page">Widget</li>
    </ol>
</nav>
</Preview>

---

## Examples

### Basic Breadcrumb

A simple trail of links separated by slashes.

<Preview>
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item"><a href="#">Home</a></li>
        <li class="Breadcrumb-item"><a href="#">Products</a></li>
        <li class="Breadcrumb-item"><a href="#">Category</a></li>
        <li class="Breadcrumb-item" aria-current="page">Current Page</li>
    </ol>
</nav>
</Preview>

### With Home Icon

Add a home icon to the first item for visual clarity. Use `aria-label` when replacing text with an icon.

<Preview>
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item">
            <a href="#" aria-label="Home">
                <i class="ph ph-house"></i>
            </a>
        </li>
        <li class="Breadcrumb-item"><a href="#">Settings</a></li>
        <li class="Breadcrumb-item" aria-current="page">Profile</li>
    </ol>
</nav>
</Preview>

### Separator Styles

Use modifier classes to change the separator character.

<Preview>
<div class="Layout-stack">
    <nav class="Breadcrumb" aria-label="Breadcrumb with slash">
        <ol class="Breadcrumb-list">
            <li class="Breadcrumb-item"><a href="#">Home</a></li>
            <li class="Breadcrumb-item"><a href="#">Section</a></li>
            <li class="Breadcrumb-item" aria-current="page">Page</li>
        </ol>
    </nav>
    <nav class="Breadcrumb Breadcrumb--arrows" aria-label="Breadcrumb with arrows">
        <ol class="Breadcrumb-list">
            <li class="Breadcrumb-item"><a href="#">Home</a></li>
            <li class="Breadcrumb-item"><a href="#">Section</a></li>
            <li class="Breadcrumb-item" aria-current="page">Page</li>
        </ol>
    </nav>
    <nav class="Breadcrumb Breadcrumb--dots" aria-label="Breadcrumb with dots">
        <ol class="Breadcrumb-list">
            <li class="Breadcrumb-item"><a href="#">Home</a></li>
            <li class="Breadcrumb-item"><a href="#">Section</a></li>
            <li class="Breadcrumb-item" aria-current="page">Page</li>
        </ol>
    </nav>
</div>
</Preview>

### Truncated Breadcrumb

For deep hierarchies, collapse middle items with an ellipsis button that can reveal hidden levels.

<Preview>
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item"><a href="#">Home</a></li>
        <li class="Breadcrumb-item">
            <button class="Breadcrumb-ellipsis" aria-label="Show 3 more levels">
                <i class="ph ph-dots-three"></i>
            </button>
        </li>
        <li class="Breadcrumb-item"><a href="#">Parent</a></li>
        <li class="Breadcrumb-item" aria-current="page">Current</li>
    </ol>
</nav>
</Preview>

---

## Sizes

Breadcrumbs come in three sizes: small, medium (default), and large.

<Preview>
<div class="Layout-stack">
    <div>
        <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Small</small>
        <nav class="Breadcrumb Breadcrumb--small" aria-label="Small breadcrumb">
            <ol class="Breadcrumb-list">
                <li class="Breadcrumb-item"><a href="#">Home</a></li>
                <li class="Breadcrumb-item"><a href="#">Section</a></li>
                <li class="Breadcrumb-item" aria-current="page">Page</li>
            </ol>
        </nav>
    </div>
    <div>
        <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Default</small>
        <nav class="Breadcrumb" aria-label="Default breadcrumb">
            <ol class="Breadcrumb-list">
                <li class="Breadcrumb-item"><a href="#">Home</a></li>
                <li class="Breadcrumb-item"><a href="#">Section</a></li>
                <li class="Breadcrumb-item" aria-current="page">Page</li>
            </ol>
        </nav>
    </div>
    <div>
        <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Large</small>
        <nav class="Breadcrumb Breadcrumb--large" aria-label="Large breadcrumb">
            <ol class="Breadcrumb-list">
                <li class="Breadcrumb-item"><a href="#">Home</a></li>
                <li class="Breadcrumb-item"><a href="#">Section</a></li>
                <li class="Breadcrumb-item" aria-current="page">Page</li>
            </ol>
        </nav>
    </div>
</div>
</Preview>

---

## Common Patterns

### Page Header

Breadcrumbs typically appear above the page title.

<Preview>
<div>
    <nav class="Breadcrumb Breadcrumb--small" aria-label="Breadcrumb" style="margin-bottom: var(--space-2);">
        <ol class="Breadcrumb-list">
            <li class="Breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="Breadcrumb-item"><a href="#">Projects</a></li>
            <li class="Breadcrumb-item" aria-current="page">Standard Design System</li>
        </ol>
    </nav>
    <h1 style="font-size: 1.5rem; font-weight: 600; margin: 0;">Standard Design System</h1>
</div>
</Preview>

### E-commerce Category

Show the product category hierarchy for shopping sites.

<Preview>
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item">
            <a href="#" aria-label="Home">
                <i class="ph ph-house"></i>
            </a>
        </li>
        <li class="Breadcrumb-item"><a href="#">Electronics</a></li>
        <li class="Breadcrumb-item"><a href="#">Computers</a></li>
        <li class="Breadcrumb-item"><a href="#">Laptops</a></li>
        <li class="Breadcrumb-item" aria-current="page">MacBook Pro 16"</li>
    </ol>
</nav>
</Preview>

### Documentation Site

Breadcrumbs in documentation help users navigate sections.

<Preview>
<nav class="Breadcrumb Breadcrumb--arrows" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item"><a href="#">Docs</a></li>
        <li class="Breadcrumb-item"><a href="#">Components</a></li>
        <li class="Breadcrumb-item" aria-current="page">Breadcrumbs</li>
    </ol>
</nav>
</Preview>

---

## Customization

Override breadcrumb styles using CSS custom properties:

```css
/* Custom separator */
.Breadcrumb--custom .Breadcrumb-item + .Breadcrumb-item::before {
    content: "→";
    color: var(--accent);
}

/* Custom link colors */
.Breadcrumb--brand .Breadcrumb-item a {
    color: var(--accent);
}

.Breadcrumb--brand .Breadcrumb-item a:hover {
    color: var(--accent-secondary);
    text-decoration: underline;
}

/* Pill-style breadcrumb */
.Breadcrumb--pills .Breadcrumb-item a {
    background: var(--bg-s);
    padding: var(--space-1) var(--space-2);
    border-radius: var(--space-4);
}

.Breadcrumb--pills .Breadcrumb-item a:hover {
    background: var(--bg-tertiary);
}

/* Custom separator icon */
.Breadcrumb--chevron .Breadcrumb-item + .Breadcrumb-item::before {
    content: "";
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,...");
    background-size: contain;
}
```

---

## API Reference

### Base Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Breadcrumb</code></td>
<td class="ApiTable-desc">Container element (use on <code>&lt;nav&gt;</code>)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Breadcrumb-list</code></td>
<td class="ApiTable-desc">Ordered list wrapper (use on <code>&lt;ol&gt;</code>)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Breadcrumb-item</code></td>
<td class="ApiTable-desc">Individual breadcrumb item (use on <code>&lt;li&gt;</code>)</td>
</tr>
</tbody>
</table>

### Separator Variants

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Breadcrumb--arrows</code></td>
<td class="ApiTable-desc">Uses <code>›</code> as separator</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Breadcrumb--dots</code></td>
<td class="ApiTable-desc">Uses <code>•</code> as separator</td>
</tr>
</tbody>
</table>

### Size Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Breadcrumb--small</code></td>
<td class="ApiTable-desc">Small text size (0.75rem)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Breadcrumb--large</code></td>
<td class="ApiTable-desc">Large text size (1rem)</td>
</tr>
</tbody>
</table>

### Utility Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Breadcrumb-ellipsis</code></td>
<td class="ApiTable-desc">Ellipsis button for truncated breadcrumbs</td>
</tr>
</tbody>
</table>

### ARIA Attributes

<table class="ApiTable">
<thead>
<tr>
<th>Attribute</th>
<th>Element</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">aria-label="Breadcrumb"</code></td>
<td class="ApiTable-desc"><code>&lt;nav&gt;</code></td>
<td class="ApiTable-desc">Identifies the navigation landmark</td>
</tr>
<tr>
<td><code class="ApiTable-prop">aria-current="page"</code></td>
<td class="ApiTable-desc"><code>&lt;li&gt;</code></td>
<td class="ApiTable-desc">Marks the current page item</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base Breadcrumb */
.Breadcrumb {
  font-size: var(--fs-base);
  color: var(--fg-3);
}

.Breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--space-1);
}

.Breadcrumb-item {
  display: inline-flex;
  align-items: center;
}

.Breadcrumb-item + .Breadcrumb-item::before {
  content: "/";
  margin-right: var(--space-1);
  color: var(--fg-3);
  opacity: 0.5;
}

.Breadcrumb-item a {
  color: var(--fg-3);
  text-decoration: none;
  transition: color var(--dur-f);
}

.Breadcrumb-item a:hover {
  color: var(--fg);
  text-decoration: underline;
}

.Breadcrumb-item a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: var(--r-s);
}

.Breadcrumb-item[aria-current="page"] {
  color: var(--fg);
  font-weight: 500;
}

/* Separator Variants */
.Breadcrumb--arrows .Breadcrumb-item + .Breadcrumb-item::before {
  content: "›";
}

.Breadcrumb--dots .Breadcrumb-item + .Breadcrumb-item::before {
  content: "•";
}

/* Sizes */
.Breadcrumb--small {
  font-size: var(--fs-sm);
}

.Breadcrumb--large {
  font-size: var(--fs-xl);
}

/* Ellipsis */
.Breadcrumb-ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-1);
  background: none;
  border: none;
  color: var(--fg-3);
  cursor: pointer;
  border-radius: var(--r-s);
  transition: background-color var(--dur-f), color var(--dur-f);
}

.Breadcrumb-ellipsis:hover {
  background-color: var(--bg-s);
  color: var(--fg);
}

.Breadcrumb-ellipsis:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Moves focus through breadcrumb links |
| Enter | Activates the focused link |
| Space | Activates the focused link or ellipsis button |

### Screen Readers

```html
<!-- ✓ Proper landmark and labeling -->
<nav class="Breadcrumb" aria-label="Breadcrumb">
    <ol class="Breadcrumb-list">
        <li class="Breadcrumb-item"><a href="/">Home</a></li>
        <li class="Breadcrumb-item"><a href="/products">Products</a></li>
        <li class="Breadcrumb-item" aria-current="page">Widget</li>
    </ol>
</nav>

<!-- ✓ Icon-only home link with aria-label -->
<li class="Breadcrumb-item">
    <a href="/" aria-label="Home">
        <i class="ph ph-house"></i>
    </a>
</li>

<!-- ✓ Ellipsis button with descriptive label -->
<button class="Breadcrumb-ellipsis" aria-label="Show 3 more navigation levels">
    <i class="ph ph-dots-three"></i>
</button>
```

### Important Guidelines

1. **Use `<nav>` with `aria-label`** — Creates a navigation landmark for screen readers
2. **Use `<ol>` for the list** — Conveys the ordered hierarchical structure
3. **Mark the current page** — Use `aria-current="page"` on the last item
4. **Don't link the current page** — It's redundant and confusing
5. **Label icon-only items** — Use `aria-label` when text is replaced by icons

---

## Best Practices

### Do

- ✓ **Start with Home or root** — Provide full navigational context
- ✓ **Keep labels short** — Use concise, recognizable page names
- ✓ **Show hierarchy, not history** — Breadcrumbs reflect site structure, not browsing path
- ✓ **Place consistently** — Usually below the header, above the page title
- ✓ **Truncate deep hierarchies** — Use ellipsis for paths deeper than 4-5 levels

### Don't

- ✗ **Link to the current page** — It's redundant and potentially confusing
- ✗ **Use on single-level sites** — Breadcrumbs only make sense for hierarchies
- ✗ **Replace primary navigation** — Breadcrumbs supplement, not replace, main nav
- ✗ **Use as browser history** — Breadcrumbs are structural, not temporal
- ✗ **Skip accessibility attributes** — Always include `aria-label` and `aria-current`
