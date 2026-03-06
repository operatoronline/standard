---
title: Toolbar
---

# Toolbar

Toolbars group related actions and controls in a horizontal bar, commonly used at the top of content areas or as contextual action bars.

## Basic Toolbar

A simple toolbar with action buttons.

<Preview>
  <div class="Toolbar">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-list"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-grid-four"></i></button>
    <div class="Toolbar-divider"></div>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-funnel"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-sort-ascending"></i></button>
  </div>
</Preview>

```html
<div class="Toolbar">
  <button class="Button Button--ghost Button--icon"><i class="ph ph-list"></i></button>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-grid-four"></i></button>
  <div class="Toolbar-divider"></div>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-funnel"></i></button>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-sort-ascending"></i></button>
</div>
```

## With Text Buttons

Toolbars can include text buttons alongside icon buttons.

<Preview>
  <div class="Toolbar">
    <button class="Button Button--ghost"><i class="ph ph-plus"></i> New</button>
    <button class="Button Button--ghost"><i class="ph ph-upload"></i> Upload</button>
    <div class="Toolbar-spacer"></div>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-magnifying-glass"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-dots-three"></i></button>
  </div>
</Preview>

```html
<div class="Toolbar">
  <button class="Button Button--ghost"><i class="ph ph-plus"></i> New</button>
  <button class="Button Button--ghost"><i class="ph ph-upload"></i> Upload</button>
  <div class="Toolbar-spacer"></div>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-magnifying-glass"></i></button>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-dots-three"></i></button>
</div>
```

## Button Groups

Group related actions together.

<Preview>
  <div class="Toolbar">
    <div class="ButtonGroup">
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-align-left"></i></button>
      <button class="Button Button--ghost Button--icon active"><i class="ph ph-text-align-center"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-align-right"></i></button>
    </div>
    <div class="Toolbar-divider"></div>
    <div class="ButtonGroup">
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-b"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-italic"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-underline"></i></button>
    </div>
  </div>
</Preview>

```html
<div class="Toolbar">
  <div class="ButtonGroup">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-align-left"></i></button>
    <button class="Button Button--ghost Button--icon active"><i class="ph ph-text-align-center"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-align-right"></i></button>
  </div>
  <div class="Toolbar-divider"></div>
  <div class="ButtonGroup">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-b"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-italic"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-text-underline"></i></button>
  </div>
</div>
```

## Bordered Toolbar

Add a border for visual separation.

<Preview>
  <div class="Toolbar Toolbar--bordered">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-arrow-left"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-arrow-right"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-arrow-clockwise"></i></button>
    <div class="Toolbar-spacer"></div>
    <span class="Toolbar-text">Page 1 of 10</span>
    <div class="Toolbar-spacer"></div>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-share"></i></button>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-download"></i></button>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--bordered">
  <button class="Button Button--ghost Button--icon">...</button>
  <div class="Toolbar-spacer"></div>
  <span class="Toolbar-text">Page 1 of 10</span>
  <div class="Toolbar-spacer"></div>
  <button class="Button Button--ghost Button--icon">...</button>
</div>
```

## Sizes

Toolbars come in different sizes.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div class="Toolbar Toolbar--sm Toolbar--bordered">
      <span class="Toolbar-label">Small</span>
      <div class="Toolbar-spacer"></div>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-pencil"></i></button>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-trash"></i></button>
    </div>
    <div class="Toolbar Toolbar--bordered">
      <span class="Toolbar-label">Default</span>
      <div class="Toolbar-spacer"></div>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-pencil"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-trash"></i></button>
    </div>
    <div class="Toolbar Toolbar--lg Toolbar--bordered">
      <span class="Toolbar-label">Large</span>
      <div class="Toolbar-spacer"></div>
      <button class="Button Button--ghost Button--icon Button--lg"><i class="ph ph-pencil"></i></button>
      <button class="Button Button--ghost Button--icon Button--lg"><i class="ph ph-trash"></i></button>
    </div>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--sm">...</div>
<div class="Toolbar">...</div>
<div class="Toolbar Toolbar--lg">...</div>
```

## With Search

Integrate a search input into the toolbar.

<Preview>
  <div class="Toolbar Toolbar--bordered">
    <div class="Toolbar-search">
      <i class="ph ph-magnifying-glass"></i>
      <input type="text" placeholder="Search..." class="Toolbar-searchInput">
    </div>
    <div class="Toolbar-spacer"></div>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-funnel"></i></button>
    <button class="Button Button--primary Button--sm">Search</button>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--bordered">
  <div class="Toolbar-search">
    <i class="ph ph-magnifying-glass"></i>
    <input type="text" placeholder="Search..." class="Toolbar-searchInput">
  </div>
  <div class="Toolbar-spacer"></div>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-funnel"></i></button>
  <button class="Button Button--primary Button--sm">Search</button>
</div>
```

## Contextual Toolbar

Appears when items are selected, showing relevant actions.

<Preview>
  <div class="Toolbar Toolbar--contextual">
    <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
    <span class="Toolbar-text"><strong>3</strong> selected</span>
    <div class="Toolbar-spacer"></div>
    <button class="Button Button--ghost"><i class="ph ph-copy"></i> Copy</button>
    <button class="Button Button--ghost"><i class="ph ph-folder"></i> Move</button>
    <button class="Button Button--ghost text-error"><i class="ph ph-trash"></i> Delete</button>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--contextual">
  <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
  <span class="Toolbar-text"><strong>3</strong> selected</span>
  <div class="Toolbar-spacer"></div>
  <button class="Button Button--ghost"><i class="ph ph-copy"></i> Copy</button>
  <button class="Button Button--ghost"><i class="ph ph-folder"></i> Move</button>
  <button class="Button Button--ghost text-error"><i class="ph ph-trash"></i> Delete</button>
</div>
```

## Vertical Toolbar

Stack actions vertically for sidebars or narrow spaces.

<Preview>
  <div style="display: inline-block;">
    <div class="Toolbar Toolbar--vertical Toolbar--bordered">
      <button class="Button Button--ghost Button--icon"><i class="ph ph-cursor"></i></button>
      <button class="Button Button--ghost Button--icon active"><i class="ph ph-hand"></i></button>
      <div class="Toolbar-divider"></div>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-square"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-circle"></i></button>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-line-segment"></i></button>
      <div class="Toolbar-divider"></div>
      <button class="Button Button--ghost Button--icon"><i class="ph ph-text-t"></i></button>
    </div>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--vertical Toolbar--bordered">
  <button class="Button Button--ghost Button--icon"><i class="ph ph-cursor"></i></button>
  <button class="Button Button--ghost Button--icon active"><i class="ph ph-hand"></i></button>
  <div class="Toolbar-divider"></div>
  <button class="Button Button--ghost Button--icon"><i class="ph ph-square"></i></button>
  ...
</div>
```

## Floating Toolbar

A floating toolbar for contextual actions (like text editors).

<Preview>
  <div style="padding: var(--space-8); background: var(--bg-s); border-radius: var(--r-m);">
    <div class="Toolbar Toolbar--floating">
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-b"></i></button>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-italic"></i></button>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-underline"></i></button>
      <div class="Toolbar-divider"></div>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-link"></i></button>
      <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-code"></i></button>
    </div>
  </div>
</Preview>

```html
<div class="Toolbar Toolbar--floating">
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-b"></i></button>
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-italic"></i></button>
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-underline"></i></button>
  <div class="Toolbar-divider"></div>
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-link"></i></button>
  <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-code"></i></button>
</div>
```

## Common Patterns

### Text Editor Toolbar

<Preview title="Text Editor">
    <div class="Toolbar Toolbar--bordered" style="max-width: 600px;">
        <div class="ButtonGroup">
            <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-b"></i></button>
            <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-italic"></i></button>
            <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-underline"></i></button>
            <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-strikethrough"></i></button>
        </div>
        <div class="Toolbar-divider"></div>
        <div class="ButtonGroup">
            <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-align-left"></i></button>
            <button class="Button Button--ghost Button--icon Button--sm active"><i class="ph ph-text-align-center"></i></button>
            <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-text-align-right"></i></button>
        </div>
        <div class="Toolbar-divider"></div>
        <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-link"></i></button>
        <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-image"></i></button>
        <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-code"></i></button>
    </div>
</Preview>

### File Manager Actions

<Preview title="File Manager Toolbar">
    <div class="Toolbar Toolbar--bordered" style="max-width: 600px;">
        <button class="Button Button--ghost Button--sm"><i class="ph ph-plus"></i> New</button>
        <button class="Button Button--ghost Button--sm"><i class="ph ph-upload"></i> Upload</button>
        <div class="Toolbar-divider"></div>
        <div class="Toolbar-search">
            <i class="ph ph-magnifying-glass"></i>
            <input type="text" placeholder="Search files..." class="Toolbar-searchInput">
        </div>
        <div class="Toolbar-spacer"></div>
        <div class="ButtonGroup">
            <button class="Button Button--ghost Button--icon Button--sm active"><i class="ph ph-list"></i></button>
            <button class="Button Button--ghost Button--icon Button--sm"><i class="ph ph-grid-four"></i></button>
        </div>
    </div>
</Preview>

### Bulk Selection Bar

<Preview title="Selection Toolbar">
    <div class="Toolbar Toolbar--contextual" style="max-width: 500px;">
        <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
        <span class="Toolbar-text"><strong>5</strong> items selected</span>
        <div class="Toolbar-spacer"></div>
        <button class="Button Button--ghost"><i class="ph ph-download"></i> Export</button>
        <button class="Button Button--ghost"><i class="ph ph-trash"></i> Delete</button>
    </div>
</Preview>

### Drawing Tools (Vertical)

<Preview title="Drawing Palette">
    <div style="display: inline-block;">
        <div class="Toolbar Toolbar--vertical Toolbar--bordered">
            <button class="Button Button--ghost Button--icon active"><i class="ph ph-cursor"></i></button>
            <button class="Button Button--ghost Button--icon"><i class="ph ph-hand"></i></button>
            <div class="Toolbar-divider"></div>
            <button class="Button Button--ghost Button--icon"><i class="ph ph-pencil"></i></button>
            <button class="Button Button--ghost Button--icon"><i class="ph ph-square"></i></button>
            <button class="Button Button--ghost Button--icon"><i class="ph ph-circle"></i></button>
            <button class="Button Button--ghost Button--icon"><i class="ph ph-line-segment"></i></button>
            <div class="Toolbar-divider"></div>
            <button class="Button Button--ghost Button--icon"><i class="ph ph-eraser"></i></button>
        </div>
    </div>
</Preview>

---

## Customization

Override toolbar styles using CSS custom properties:

```css
/* Transparent toolbar */
.Toolbar--transparent {
  background: transparent;
  border: none;
}

/* Custom contextual color */
.Toolbar--contextual-danger {
  background: oklch(55% 0.2 25);
  color: white;
}

/* Compact button spacing */
.Toolbar--tight {
  gap: 0;
  padding: var(--space-1);
}

/* Toolbar with bottom border only */
.Toolbar--underline {
  border: none;
  border-bottom: 1px solid var(--bd);
  border-radius: 0;
  padding: var(--space-2) 0;
}
```

---

## API Reference

### Base Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Toolbar</code></td>
<td class="ApiTable-desc">Base toolbar container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toolbar-divider</code></td>
<td class="ApiTable-desc">Vertical divider between groups</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toolbar-spacer</code></td>
<td class="ApiTable-desc">Flexible spacer (flex: 1)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toolbar-text</code></td>
<td class="ApiTable-desc">Text content in toolbar</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toolbar-label</code></td>
<td class="ApiTable-desc">Label text (bolder)</td>
</tr>
</tbody>
</table>

### Variant Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Toolbar--bordered</code></td>
<td class="ApiTable-desc">Adds border and background</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toolbar--vertical</code></td>
<td class="ApiTable-desc">Vertical layout (sidebar)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toolbar--floating</code></td>
<td class="ApiTable-desc">Elevated floating style with shadow</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toolbar--contextual</code></td>
<td class="ApiTable-desc">Selection context bar (accent colored)</td>
</tr>
</tbody>
</table>

### Size Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Toolbar--sm</code></td>
<td class="ApiTable-desc">Small size variant</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toolbar--lg</code></td>
<td class="ApiTable-desc">Large size variant</td>
</tr>
</tbody>
</table>

### Search Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Toolbar-search</code></td>
<td class="ApiTable-desc">Search input container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toolbar-searchInput</code></td>
<td class="ApiTable-desc">Search text input element</td>
</tr>
</tbody>
</table>

### Related Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.ButtonGroup</code></td>
<td class="ApiTable-desc">Groups related buttons together</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base toolbar */
.Toolbar {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2);
}

/* Divider between groups */
.Toolbar-divider {
  width: 1px;
  height: 1.5rem;
  background: var(--bd);
  margin: 0 var(--space-2);
}

/* Flexible spacer */
.Toolbar-spacer {
  flex: 1;
}

/* Text content */
.Toolbar-text {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  padding: 0 var(--space-2);
}

.Toolbar-label {
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--fg);
  padding: 0 var(--space-2);
}

/* Bordered variant */
.Toolbar--bordered {
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  background: var(--bg);
}

/* Sizes */
.Toolbar--sm { padding: var(--space-1); gap: var(--space-0-5); }
.Toolbar--lg { padding: var(--space-3); gap: var(--space-2); }

/* Vertical layout */
.Toolbar--vertical {
  flex-direction: column;
  width: fit-content;
}
.Toolbar--vertical .Toolbar-divider {
  width: 100%;
  height: 1px;
  margin: var(--space-2) 0;
}

/* Floating (elevated) */
.Toolbar--floating {
  background: var(--bg);
  border-radius: var(--r-m);
  box-shadow: var(--sh-l);
  padding: var(--space-1);
}

/* Contextual (selection) */
.Toolbar--contextual {
  background: var(--accent);
  color: white;
  border-radius: var(--r-m);
  padding: var(--space-2) var(--space-3);
}
.Toolbar--contextual .Toolbar-text { color: white; }
.Toolbar--contextual .Button--ghost { color: white; }
.Toolbar--contextual .Button--ghost:hover { background: oklch(100% 0 0 / 0.15); }

/* Search in toolbar */
.Toolbar-search {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  background: var(--bg-s);
  border-radius: var(--r-s);
  color: var(--fg-3);
}
.Toolbar-searchInput {
  border: none;
  background: transparent;
  outline: none;
  font-size: var(--fs-sm);
  color: var(--fg);
  min-width: 150px;
}

/* Button groups */
.ButtonGroup {
  display: flex;
  gap: 0;
}
.ButtonGroup .Button {
  border-radius: 0;
}
.ButtonGroup .Button:first-child {
  border-radius: var(--r-s) 0 0 var(--r-s);
}
.ButtonGroup .Button:last-child {
  border-radius: 0 var(--r-s) var(--r-s) 0;
}
.ButtonGroup .Button.active {
  background: var(--bg-s);
}
```

---

## Accessibility

- Use `role="toolbar"` on the container element
- Add `aria-label` to describe the toolbar's purpose
- Support arrow key navigation between toolbar items
- Use `aria-pressed` for toggle buttons in button groups
- Ensure all buttons have accessible names (`aria-label` for icon-only)
- For search inputs, use `role="searchbox"` or `type="search"`
- In contextual toolbars, announce selection count to screen readers
- Provide visible focus indicators for keyboard navigation
- Use `aria-orientation` to indicate vertical toolbars

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus into/out of the toolbar |
| Arrow Left/Right | Navigate between toolbar items |
| Arrow Up/Down | Navigate in vertical toolbars |
| Home | Move to first toolbar item |
| End | Move to last toolbar item |
| Enter / Space | Activate focused button |

---

## Best Practices

### Do

- ✓ **Group related actions** — Use dividers and ButtonGroups logically
- ✓ **Use icon-only for common actions** — Bold, italic, align are universal
- ✓ **Add labels for text buttons** — "New", "Upload" with icons
- ✓ **Use spacers for alignment** — Push actions to edges with Toolbar-spacer
- ✓ **Show contextual toolbars on selection** — Replace default with relevant actions
- ✓ **Add aria-label to icon buttons** — Screen readers need text alternatives

### Don't

- ✗ **Overload with too many items** — Group or overflow excess actions
- ✗ **Mix sizes inconsistently** — Keep buttons uniform within a toolbar
- ✗ **Nest toolbars** — Use sections or tabs instead
- ✗ **Hide essential actions** — Primary actions should always be visible
- ✗ **Use without role="toolbar"** — Needed for keyboard navigation
- ✗ **Forget mobile** — Toolbars may need to collapse or scroll on small screens
