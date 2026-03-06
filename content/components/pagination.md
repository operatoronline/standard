# Pagination

Pagination helps users navigate through large sets of content.

## Basic Pagination

<Preview title="Basic Pagination">
    <nav class="Pagination">
        <a href="#" class="Pagination-item Pagination-item--prev" aria-label="Previous">
            <i class="ph ph-caret-left"></i>
        </a>
        <a href="#" class="Pagination-item">1</a>
        <a href="#" class="Pagination-item active">2</a>
        <a href="#" class="Pagination-item">3</a>
        <a href="#" class="Pagination-item">4</a>
        <a href="#" class="Pagination-item">5</a>
        <a href="#" class="Pagination-item Pagination-item--next" aria-label="Next">
            <i class="ph ph-caret-right"></i>
        </a>
    </nav>
</Preview>

```html
<nav class="Pagination">
    <a href="#" class="Pagination-item Pagination-item--prev">
        <i class="ph ph-caret-left"></i>
    </a>
    <a href="#" class="Pagination-item">1</a>
    <a href="#" class="Pagination-item active">2</a>
    <a href="#" class="Pagination-item">3</a>
    <a href="#" class="Pagination-item Pagination-item--next">
        <i class="ph ph-caret-right"></i>
    </a>
</nav>
```

## With Ellipsis

For large page counts, use ellipsis to indicate skipped pages.

<Preview title="Pagination with Ellipsis">
    <nav class="Pagination">
        <a href="#" class="Pagination-item Pagination-item--prev">
            <i class="ph ph-caret-left"></i>
        </a>
        <a href="#" class="Pagination-item">1</a>
        <span class="Pagination-ellipsis">...</span>
        <a href="#" class="Pagination-item">4</a>
        <a href="#" class="Pagination-item active">5</a>
        <a href="#" class="Pagination-item">6</a>
        <span class="Pagination-ellipsis">...</span>
        <a href="#" class="Pagination-item">20</a>
        <a href="#" class="Pagination-item Pagination-item--next">
            <i class="ph ph-caret-right"></i>
        </a>
    </nav>
</Preview>

```html
<span class="Pagination-ellipsis">...</span>
```

## Disabled States

<Preview title="Disabled Pagination">
    <nav class="Pagination">
        <a href="#" class="Pagination-item Pagination-item--prev disabled" aria-disabled="true">
            <i class="ph ph-caret-left"></i>
        </a>
        <a href="#" class="Pagination-item active">1</a>
        <a href="#" class="Pagination-item">2</a>
        <a href="#" class="Pagination-item">3</a>
        <a href="#" class="Pagination-item Pagination-item--next">
            <i class="ph ph-caret-right"></i>
        </a>
    </nav>
</Preview>

```html
<a class="Pagination-item Pagination-item--prev disabled" aria-disabled="true">
```

## Compact

For tight spaces, use the compact variant.

<Preview title="Compact Pagination">
    <nav class="Pagination Pagination--compact">
        <a href="#" class="Pagination-item Pagination-item--prev">
            <i class="ph ph-caret-left"></i>
        </a>
        <span class="Pagination-info">Page 5 of 20</span>
        <a href="#" class="Pagination-item Pagination-item--next">
            <i class="ph ph-caret-right"></i>
        </a>
    </nav>
</Preview>

```html
<nav class="Pagination Pagination--compact">
    <a href="#" class="Pagination-item Pagination-item--prev">...</a>
    <span class="Pagination-info">Page 5 of 20</span>
    <a href="#" class="Pagination-item Pagination-item--next">...</a>
</nav>
```

## With Page Size

<Preview title="Pagination with Page Size">
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
        <div style="display: flex; align-items: center; gap: var(--space-2); font-size: 0.9rem; color: var(--fg-3);">
            <span>Show</span>
            <select class="Select" style="width: auto; padding: var(--space-1) var(--space-2);">
                <option>10</option>
                <option>25</option>
                <option>50</option>
            </select>
            <span>per page</span>
        </div>
        <nav class="Pagination">
            <a href="#" class="Pagination-item Pagination-item--prev">
                <i class="ph ph-caret-left"></i>
            </a>
            <a href="#" class="Pagination-item active">1</a>
            <a href="#" class="Pagination-item">2</a>
            <a href="#" class="Pagination-item">3</a>
            <a href="#" class="Pagination-item Pagination-item--next">
                <i class="ph ph-caret-right"></i>
            </a>
        </nav>
    </div>
</Preview>

---

## Common Patterns

### Data Table Footer

<Preview title="Table with Pagination">
    <div style="width: 100%; border: 1px solid var(--bd); border-radius: var(--r-m); overflow: hidden;">
        <div style="padding: var(--space-3); background: var(--bg-s); border-bottom: 1px solid var(--bd); font-weight: 600; font-size: 0.9rem;">Recent Orders</div>
        <div style="padding: var(--space-3); border-bottom: 1px solid var(--bd); font-size: 0.9rem;">Order #1042 — $129.00</div>
        <div style="padding: var(--space-3); border-bottom: 1px solid var(--bd); font-size: 0.9rem;">Order #1041 — $67.50</div>
        <div style="padding: var(--space-3); border-bottom: 1px solid var(--bd); font-size: 0.9rem;">Order #1040 — $245.00</div>
        <div style="padding: var(--space-3); display: flex; justify-content: space-between; align-items: center; background: var(--bg-s);">
            <span style="font-size: 0.85rem; color: var(--fg-3);">Showing 1–3 of 128</span>
            <nav class="Pagination">
                <a href="#" class="Pagination-item Pagination-item--prev" aria-label="Previous"><i class="ph ph-caret-left"></i></a>
                <a href="#" class="Pagination-item active">1</a>
                <a href="#" class="Pagination-item">2</a>
                <a href="#" class="Pagination-item">3</a>
                <span class="Pagination-ellipsis">...</span>
                <a href="#" class="Pagination-item">43</a>
                <a href="#" class="Pagination-item Pagination-item--next" aria-label="Next"><i class="ph ph-caret-right"></i></a>
            </nav>
        </div>
    </div>
</Preview>

### Search Results

<Preview title="Search Results Pagination">
    <div style="width: 100%; max-width: 500px;">
        <div style="margin-bottom: var(--space-3); font-size: 0.9rem; color: var(--fg-3);">About 1,240 results (0.42 seconds)</div>
        <div style="display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-4);">
            <div style="padding: var(--space-3); border-left: 3px solid var(--accent); background: var(--bg-s);">
                <div style="font-weight: 600; margin-bottom: var(--space-1);">Result Title</div>
                <div style="font-size: 0.85rem; color: var(--fg-3);">Brief description of the search result...</div>
            </div>
        </div>
        <nav class="Pagination" style="justify-content: center;">
            <a href="#" class="Pagination-item Pagination-item--prev disabled" aria-disabled="true"><i class="ph ph-caret-left"></i></a>
            <a href="#" class="Pagination-item active">1</a>
            <a href="#" class="Pagination-item">2</a>
            <a href="#" class="Pagination-item">3</a>
            <span class="Pagination-ellipsis">...</span>
            <a href="#" class="Pagination-item">124</a>
            <a href="#" class="Pagination-item Pagination-item--next"><i class="ph ph-caret-right"></i></a>
        </nav>
    </div>
</Preview>

### Card Grid with Pagination

<Preview title="Card Grid Pagination">
    <div style="width: 100%;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-4);">
            <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m); text-align: center; font-size: 0.85rem; color: var(--fg-3);">Card 1</div>
            <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m); text-align: center; font-size: 0.85rem; color: var(--fg-3);">Card 2</div>
            <div style="padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m); text-align: center; font-size: 0.85rem; color: var(--fg-3);">Card 3</div>
        </div>
        <div style="display: flex; justify-content: center;">
            <nav class="Pagination">
                <a href="#" class="Pagination-item Pagination-item--prev"><i class="ph ph-caret-left"></i></a>
                <a href="#" class="Pagination-item">1</a>
                <a href="#" class="Pagination-item active">2</a>
                <a href="#" class="Pagination-item">3</a>
                <a href="#" class="Pagination-item Pagination-item--next"><i class="ph ph-caret-right"></i></a>
            </nav>
        </div>
    </div>
</Preview>

### Mobile Compact Pagination

<Preview title="Mobile Compact">
    <div style="max-width: 320px; width: 100%;">
        <nav class="Pagination Pagination--compact" style="width: 100%; justify-content: space-between;">
            <a href="#" class="Pagination-item Pagination-item--prev"><i class="ph ph-caret-left"></i></a>
            <span class="Pagination-info">Page 3 of 12</span>
            <a href="#" class="Pagination-item Pagination-item--next"><i class="ph ph-caret-right"></i></a>
        </nav>
    </div>
</Preview>

---

## Customization

Override pagination styling with CSS custom properties:

```css
/* Custom accent color */
.Pagination {
  --pagination-active-bg: oklch(55% 0.2 260);
  --pagination-active-fg: white;
  --pagination-hover-bg: oklch(92% 0.02 260);
}

.Pagination-item.active {
  background: var(--pagination-active-bg);
  color: var(--pagination-active-fg);
}

.Pagination-item:hover:not(.active):not(.disabled) {
  background: var(--pagination-hover-bg);
}
```

### Rounded Items

```css
.Pagination--rounded .Pagination-item {
  border-radius: var(--r-f);
}
```

### Bordered Variant

```css
.Pagination--bordered .Pagination-item {
  border: 1px solid var(--bd);
}
```

### Theming

```css
/* Dark theme overrides */
[data-theme="dark"] .Pagination-item.active {
  background: oklch(70% 0.15 260);
  color: oklch(15% 0 0);
}
```

---

## API Reference

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Pagination</code></td><td class="ApiTable-desc">Container for pagination controls</td></tr>
<tr><td><code class="ApiTable-prop">.Pagination--compact</code></td><td class="ApiTable-desc">Minimal prev/next with page info text</td></tr>
<tr><td><code class="ApiTable-prop">.Pagination-item</code></td><td class="ApiTable-desc">Individual page link or button</td></tr>
<tr><td><code class="ApiTable-prop">.Pagination-item--prev</code></td><td class="ApiTable-desc">Previous page button</td></tr>
<tr><td><code class="ApiTable-prop">.Pagination-item--next</code></td><td class="ApiTable-desc">Next page button</td></tr>
<tr><td><code class="ApiTable-prop">.Pagination-item.active</code></td><td class="ApiTable-desc">Current page indicator</td></tr>
<tr><td><code class="ApiTable-prop">.Pagination-item.disabled</code></td><td class="ApiTable-desc">Non-interactive disabled state</td></tr>
<tr><td><code class="ApiTable-prop">.Pagination-ellipsis</code></td><td class="ApiTable-desc">Skipped pages indicator (...)</td></tr>
<tr><td><code class="ApiTable-prop">.Pagination-info</code></td><td class="ApiTable-desc">Page count text (compact mode)</td></tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">aria-label</code></td><td class="ApiTable-desc">On <code>&lt;nav&gt;</code> to describe the pagination region</td></tr>
<tr><td><code class="ApiTable-prop">aria-current="page"</code></td><td class="ApiTable-desc">On the current page item</td></tr>
<tr><td><code class="ApiTable-prop">aria-disabled="true"</code></td><td class="ApiTable-desc">On disabled navigation items</td></tr>
<tr><td><code class="ApiTable-prop">aria-label="Previous"</code></td><td class="ApiTable-desc">On prev/next icon-only buttons</td></tr>
</tbody>
</table>

### Structure

```html
<nav class="Pagination" aria-label="Pagination">
    <a class="Pagination-item Pagination-item--prev">...</a>
    <a class="Pagination-item">1</a>
    <a class="Pagination-item active" aria-current="page">2</a>
    <span class="Pagination-ellipsis">...</span>
    <a class="Pagination-item">10</a>
    <a class="Pagination-item Pagination-item--next">...</a>
</nav>
```

---

## CSS Reference

```css
/* Base pagination */
.Pagination {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

/* Individual page item */
.Pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 var(--space-2);
  font-size: var(--fs-lg);
  font-weight: 500;
  color: var(--fg);
  background: transparent;
  border: none;
  border-radius: var(--r-s);
  cursor: pointer;
  text-decoration: none;
  transition: background var(--dur-f), color var(--dur-f);
}

.Pagination-item:hover:not(.active):not(.disabled) {
  background: var(--bg-s);
}

/* Active state */
.Pagination-item.active {
  background: var(--accent);
  color: white;
}

/* Disabled state */
.Pagination-item.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* Prev/Next buttons */
.Pagination-item--prev,
.Pagination-item--next {
  font-size: var(--fs-xl);
}

/* Ellipsis */
.Pagination-ellipsis {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  color: var(--fg-3);
  font-size: var(--fs-lg);
  user-select: none;
}

/* Compact variant */
.Pagination--compact {
  gap: var(--space-2);
}

.Pagination-info {
  font-size: var(--fs-lg);
  color: var(--fg-3);
  white-space: nowrap;
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus between pagination items |
| `Enter` / `Space` | Activate the focused page link |

### Screen Reader Guidance

Use `<nav>` with `aria-label` to create a landmark region. Mark the current page with `aria-current="page"` so screen readers announce it. Disabled items should use `aria-disabled="true"` instead of removing the `href`.

```html
<nav class="Pagination" aria-label="Pagination">
    <a href="#" class="Pagination-item Pagination-item--prev" aria-label="Previous page">
        <i class="ph ph-caret-left"></i>
    </a>
    <a href="#" class="Pagination-item active" aria-current="page">2</a>
    <a href="#" class="Pagination-item Pagination-item--next" aria-label="Next page">
        <i class="ph ph-caret-right"></i>
    </a>
</nav>
```

### ARIA Attributes

- `aria-label` on `<nav>` to identify the pagination region
- `aria-current="page"` on the active page element
- `aria-disabled="true"` on non-functional prev/next when at boundaries
- `aria-label` on icon-only buttons (Previous / Next)

---

## Best Practices

### Do

- ✓ **Show current position** — Always indicate which page the user is on
- ✓ **Use ellipsis for large sets** — Collapse middle pages to avoid overwhelming UI
- ✓ **Disable boundary buttons** — Gray out Previous on page 1, Next on last page
- ✓ **Provide compact mode for mobile** — Switch to compact pagination on small screens
- ✓ **Keep first and last pages visible** — Users need to know the total range
- ✓ **Use semantic `<nav>` element** — Wrap pagination in a navigation landmark

### Don't

- ✗ **Show all page numbers** — Hundreds of links create visual noise
- ✗ **Hide page numbers entirely** — Users lose sense of position in the dataset
- ✗ **Make touch targets smaller than 44px** — Small targets frustrate mobile users
- ✗ **Use pagination for small datasets** — Under 20 items usually don't need pagination
- ✗ **Remove disabled links from DOM** — Screen reader users lose navigation context
- ✗ **Forget to update URL** — Users expect to bookmark or share paginated views
