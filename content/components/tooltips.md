# Tooltips

Tooltips display informative text when users hover over or focus on an element.

## Basic Tooltip

Tooltips use the `data-tooltip` attribute for content.

<Preview title="Basic Tooltip">
    <div style="padding: var(--space-8);">
        <button class="Button Button--primary Tooltip" data-tooltip="This is a tooltip">Hover me</button>
    </div>
</Preview>

```html
<button class="Tooltip" data-tooltip="This is a tooltip">
    Hover me
</button>
```

## Positions

Control tooltip placement with position modifiers.

<Preview title="Tooltip Positions">
    <div style="display: flex; gap: var(--space-4); flex-wrap: wrap; padding: var(--space-8);">
        <button class="Button Tooltip Tooltip--top" data-tooltip="Top tooltip">Top</button>
        <button class="Button Tooltip Tooltip--bottom" data-tooltip="Bottom tooltip">Bottom</button>
        <button class="Button Tooltip Tooltip--left" data-tooltip="Left tooltip">Left</button>
        <button class="Button Tooltip Tooltip--right" data-tooltip="Right tooltip">Right</button>
    </div>
</Preview>

```html
<button class="Tooltip Tooltip--top" data-tooltip="...">Top</button>
<button class="Tooltip Tooltip--bottom" data-tooltip="...">Bottom</button>
<button class="Tooltip Tooltip--left" data-tooltip="...">Left</button>
<button class="Tooltip Tooltip--right" data-tooltip="...">Right</button>
```

## On Icons

Common use case: adding context to icon buttons.

<Preview title="Icon Tooltips">
    <div style="display: flex; gap: var(--space-2); padding: var(--space-6);">
        <button class="icon-btn Tooltip" data-tooltip="Settings">
            <i class="ph ph-gear"></i>
        </button>
        <button class="icon-btn Tooltip" data-tooltip="Notifications">
            <i class="ph ph-bell"></i>
        </button>
        <button class="icon-btn Tooltip" data-tooltip="Profile">
            <i class="ph ph-user"></i>
        </button>
    </div>
</Preview>

```html
<button class="icon-btn Tooltip" data-tooltip="Settings">
    <i class="ph ph-gear"></i>
</button>
```

## Multiline

For longer content, the tooltip expands to accommodate text.

<Preview title="Multiline Tooltip">
    <div style="padding: var(--space-8);">
        <span class="Tooltip Tooltip--wide" data-tooltip="This is a longer tooltip that wraps to multiple lines when the content exceeds the default width.">
            <span class="Link">Hover for details</span>
        </span>
    </div>
</Preview>

```html
<span class="Tooltip Tooltip--wide" data-tooltip="Longer content...">
    Hover for details
</span>
```

---

## Common Patterns

### Icon Button Bar

<Preview title="Icon Buttons with Tooltips">
    <div style="display: flex; gap: var(--space-1); padding: var(--space-6);">
        <button class="Button Button--ghost Button--icon Tooltip" data-tooltip="Bold (⌘B)">
            <i class="ph ph-text-bolder"></i>
        </button>
        <button class="Button Button--ghost Button--icon Tooltip" data-tooltip="Italic (⌘I)">
            <i class="ph ph-text-italic"></i>
        </button>
        <button class="Button Button--ghost Button--icon Tooltip" data-tooltip="Underline (⌘U)">
            <i class="ph ph-text-underline"></i>
        </button>
        <button class="Button Button--ghost Button--icon Tooltip" data-tooltip="Link (⌘K)">
            <i class="ph ph-link"></i>
        </button>
    </div>
</Preview>

### Truncated Text

<Preview title="Tooltip on Truncated Text">
    <div style="width: 180px; padding: var(--space-4);">
        <span class="Tooltip" data-tooltip="This is a very long project name that doesn't fit in one line" style="display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            This is a very long project name that doesn't fit in one line
        </span>
    </div>
</Preview>

### Disabled Button Explanation

<Preview title="Tooltip on Disabled Action">
    <div style="padding: var(--space-6); display: flex; gap: var(--space-3);">
        <button class="Button Button--primary">Save</button>
        <span class="Tooltip Tooltip--bottom" data-tooltip="You need admin permissions to delete" tabindex="0">
            <button class="Button Button--secondary" disabled>Delete</button>
        </span>
    </div>
</Preview>

### Avatar Identity

<Preview title="Tooltips on Avatars">
    <div style="display: flex; gap: var(--space-1); padding: var(--space-6);">
        <div class="Avatar Tooltip" data-tooltip="Alice Chen" style="width:32px;height:32px;border-radius:50%;background:var(--accent);color:white;display:flex;align-items:center;justify-content:center;font-size:0.75rem;">AC</div>
        <div class="Avatar Tooltip" data-tooltip="Bob Smith" style="width:32px;height:32px;border-radius:50%;background:oklch(55% 0.15 150);color:white;display:flex;align-items:center;justify-content:center;font-size:0.75rem;">BS</div>
        <div class="Avatar Tooltip" data-tooltip="Carol Davis" style="width:32px;height:32px;border-radius:50%;background:oklch(55% 0.2 25);color:white;display:flex;align-items:center;justify-content:center;font-size:0.75rem;">CD</div>
    </div>
</Preview>

---

## Customization

Override tooltip styles using CSS custom properties:

```css
/* Custom tooltip colors */
.Tooltip--branded::after {
  background: oklch(55% 0.2 250);
  color: white;
}

/* Larger tooltip text */
.Tooltip--lg::after {
  font-size: 0.875rem;
  padding: var(--space-2) var(--space-3);
}

/* Tooltip with arrow customization */
.Tooltip--arrow::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
  transform: rotate(45deg);
}

/* Delayed tooltip */
.Tooltip--slow:hover::after {
  transition-delay: 500ms;
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
<td><code class="ApiTable-prop">.Tooltip</code></td>
<td class="ApiTable-desc">Base tooltip trigger (add to any element)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tooltip--wide</code></td>
<td class="ApiTable-desc">Allow wider tooltip for longer content</td>
</tr>
</tbody>
</table>

### Position Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Tooltip--top</code></td>
<td class="ApiTable-desc">Position tooltip above element (default)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tooltip--bottom</code></td>
<td class="ApiTable-desc">Position tooltip below element</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tooltip--left</code></td>
<td class="ApiTable-desc">Position tooltip to the left</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tooltip--right</code></td>
<td class="ApiTable-desc">Position tooltip to the right</td>
</tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">data-tooltip</code></td>
<td class="ApiTable-desc"><strong>Required.</strong> The tooltip text content</td>
</tr>
<tr>
<td><code class="ApiTable-prop">aria-describedby</code></td>
<td class="ApiTable-desc">Link to tooltip ID for screen readers</td>
</tr>
<tr>
<td><code class="ApiTable-prop">tabindex="0"</code></td>
<td class="ApiTable-desc">Add to non-focusable elements that need tooltips</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base tooltip — uses ::after pseudo-element */
.Tooltip {
  position: relative;
}

.Tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  padding: var(--space-1) var(--space-2);
  background: var(--fg);
  color: var(--bg);
  font-size: var(--text-xs);
  line-height: 1.4;
  white-space: nowrap;
  border-radius: var(--radius-sm);
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--dur-f);
  z-index: 1000;
}

.Tooltip:hover::after,
.Tooltip:focus::after,
.Tooltip:focus-within::after {
  opacity: 1;
}

/* Positions */
.Tooltip--bottom::after {
  bottom: auto;
  top: 100%;
  transform: translateX(-50%) translateY(4px);
}

.Tooltip--left::after {
  bottom: auto;
  top: 50%;
  left: auto;
  right: 100%;
  transform: translateY(-50%) translateX(-4px);
}

.Tooltip--right::after {
  bottom: auto;
  top: 50%;
  left: 100%;
  transform: translateY(-50%) translateX(4px);
}

/* Wide variant */
.Tooltip--wide::after {
  white-space: normal;
  width: max-content;
  max-width: 240px;
  text-align: center;
}
```

---

## Accessibility

- Tooltips appear on `:hover` and `:focus`
- Use `aria-describedby` for screen readers when tooltip contains essential info
- Don't put interactive elements inside tooltips
- Add `tabindex="0"` to non-focusable trigger elements
- Keep tooltip text concise — use a modal or popover for complex content

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus to tooltip trigger, showing tooltip |
| Escape | Dismiss tooltip (when implemented with JS) |

---

## Best Practices

### Do

- ✓ **Keep text short** — One sentence max, ideally under 80 characters
- ✓ **Use for supplementary info** — Labels, hints, keyboard shortcuts
- ✓ **Ensure trigger is focusable** — Buttons, links, or add `tabindex`
- ✓ **Position to avoid clipping** — Use appropriate direction modifier
- ✓ **Add to icon-only buttons** — Always explain unlabeled controls
- ✓ **Show keyboard shortcuts** — "Bold (⌘B)" is a great tooltip pattern

### Don't

- ✗ **Hide essential info** — If users *need* it, don't put it in a tooltip
- ✗ **Use on touch devices** — Hover doesn't work; use alternative patterns
- ✗ **Include interactive content** — Links, buttons belong in popovers
- ✗ **Overuse tooltips** — If everything has a tooltip, nothing stands out
- ✗ **Duplicate visible labels** — Don't tooltip "Save" on a "Save" button
- ✗ **Use for form validation** — Use inline error messages instead
