# Buttons

Buttons allow users to take actions and make choices with a single tap. They communicate actions that users can take and are typically placed throughout your UI.

<Hero>
<!-- stats: 6 Variants, 3 Sizes, 4 States -->
<button class="Button Button--primary">Get Started</button>
<button class="Button Button--secondary">Learn More</button>
<button class="Button Button--outline">Documentation</button>
<button class="Button Button--ghost">Cancel</button>
<button class="Button Button--danger Button--small"><i class="ph ph-trash" aria-hidden="true"></i> Delete</button>
<button class="Button Button--primary Button--large"><i class="ph ph-arrow-right" aria-hidden="true"></i> Continue</button>
</Hero>

---

## Usage

The base `.Button` class provides core button styling. Add variant classes to change appearance.

<Preview>
<button class="Button Button--primary">Primary Action</button>
<button class="Button Button--secondary">Secondary</button>
<button class="Button Button--tertiary">Cancel</button>
</Preview>

---

## Variants

### All Variants

<Preview>
<button class="Button Button--primary">Primary</button>
<button class="Button Button--secondary">Secondary</button>
<button class="Button Button--tertiary">Tertiary</button>
<button class="Button Button--ghost">Ghost</button>
<button class="Button Button--outline">Outline</button>
<button class="Button Button--danger">Danger</button>
</Preview>

### Primary

The primary button is for the main action on a page. Use sparingly — one primary action per section.

<Preview>
<button class="Button Button--primary">Get Started</button>
</Preview>

### Secondary

Secondary buttons are for alternative actions. They pair well with primary buttons.

<Preview>
<button class="Button Button--secondary">Learn More</button>
</Preview>

### Tertiary

Tertiary buttons are for less prominent actions. Use for actions like "Cancel" or "Back".

<Preview>
<button class="Button Button--tertiary">Cancel</button>
</Preview>

### Ghost

Ghost buttons are minimal, blending into the background until hovered.

<Preview>
<button class="Button Button--ghost">View All</button>
</Preview>

### Outline

Outline buttons have a border but no fill. Good for secondary actions with more visual weight than ghost.

<Preview>
<button class="Button Button--outline">Download</button>
</Preview>

### Danger

Danger buttons indicate destructive actions like delete or remove.

<Preview>
<button class="Button Button--danger">Delete Account</button>
</Preview>

---

## Sizes

Buttons come in three sizes: small, medium (default), and large.

<Preview>
<button class="Button Button--primary Button--small">Small</button>
<button class="Button Button--primary">Medium</button>
<button class="Button Button--primary Button--large">Large</button>
</Preview>

---

## With Icons

Buttons can include icons for visual reinforcement. Icons can be leading or trailing.

### Leading Icon

<Preview>
<button class="Button Button--primary">
    <i class="ph ph-plus Button-icon"></i>
    Add Item
</button>
<button class="Button Button--secondary">
    <i class="ph ph-download Button-icon"></i>
    Download
</button>
</Preview>

### Trailing Icon

<Preview>
<button class="Button Button--primary">
    Continue
    <i class="ph ph-arrow-right Button-icon Button-icon--trailing"></i>
</button>
<button class="Button Button--secondary">
    Open Link
    <i class="ph ph-arrow-square-out Button-icon Button-icon--trailing"></i>
</button>
</Preview>

---

## Icon-Only Buttons

For actions where the icon is self-explanatory. Always include an `aria-label`.

<Preview>
<button class="Button Button--icon" aria-label="Search">
    <i class="ph ph-magnifying-glass"></i>
</button>
<button class="Button Button--icon" aria-label="Settings">
    <i class="ph ph-gear"></i>
</button>
<button class="Button Button--icon" aria-label="Close">
    <i class="ph ph-x"></i>
</button>
<button class="Button Button--icon Button--primary" aria-label="Add">
    <i class="ph ph-plus"></i>
</button>
</Preview>

---

## States

### Loading

Show a loading state when an action is in progress. Disable interaction during loading.

<Preview>
<button class="Button Button--primary Button--loading" disabled>
    <span class="Button-spinner"></span>
    Loading...
</button>
<button class="Button Button--secondary Button--loading" disabled>
    <span class="Button-spinner"></span>
    Saving...
</button>
</Preview>

### Disabled

Disabled buttons indicate an action is unavailable.

<Preview>
<button class="Button Button--primary" disabled>Primary</button>
<button class="Button Button--secondary" disabled>Secondary</button>
<button class="Button Button--outline" disabled>Outline</button>
<button class="Button Button--danger" disabled>Danger</button>
</Preview>

---

## Button Groups

Group related buttons together.

<Preview>
<div class="ButtonGroup">
    <button class="Button Button--secondary">Day</button>
    <button class="Button Button--secondary ButtonGroup-item--active">Week</button>
    <button class="Button Button--secondary">Month</button>
</div>
</Preview>

### Icon Button Group

<Preview>
<div class="ButtonGroup">
    <button class="Button Button--icon Button--secondary" aria-label="List view">
        <i class="ph ph-list"></i>
    </button>
    <button class="Button Button--icon Button--secondary ButtonGroup-item--active" aria-label="Grid view">
        <i class="ph ph-squares-four"></i>
    </button>
    <button class="Button Button--icon Button--secondary" aria-label="Column view">
        <i class="ph ph-columns"></i>
    </button>
</div>
</Preview>

---

## Full Width

Buttons can expand to fill their container.

<Preview>
<div style="max-width: 320px; width: 100%;">
    <button class="Button Button--primary Button--block">Create Account</button>
</div>
</Preview>

---

## Common Patterns

### Modal Actions

<Preview>
<div style="display: flex; gap: var(--space-3); justify-content: flex-end;">
    <button class="Button Button--tertiary">Cancel</button>
    <button class="Button Button--primary">Save Changes</button>
</div>
</Preview>

### Destructive Confirmation

<Preview>
<div style="display: flex; gap: var(--space-3); justify-content: flex-end;">
    <button class="Button Button--secondary">Keep</button>
    <button class="Button Button--danger">Delete</button>
</div>
</Preview>

### Form Submit

<Preview>
<div style="max-width: 320px; width: 100%;">
    <div style="margin-bottom: var(--space-4);">
        <label style="display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: var(--space-2);">Email</label>
        <input type="email" class="Input" placeholder="you@example.com">
    </div>
    <button class="Button Button--primary Button--block">Subscribe</button>
</div>
</Preview>

### Toolbar

<Preview>
<div style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
    <button class="Button Button--primary Button--small">
        <i class="ph ph-plus Button-icon"></i>
        New
    </button>
    <div class="ButtonGroup">
        <button class="Button Button--icon Button--secondary Button--small" aria-label="Undo">
            <i class="ph ph-arrow-counter-clockwise"></i>
        </button>
        <button class="Button Button--icon Button--secondary Button--small" aria-label="Redo">
            <i class="ph ph-arrow-clockwise"></i>
        </button>
    </div>
    <div style="flex: 1;"></div>
    <button class="Button Button--icon Button--ghost Button--small" aria-label="More options">
        <i class="ph ph-dots-three"></i>
    </button>
</div>
</Preview>

---

## Customization

Override button styles using CSS custom properties:

```css
/* Custom primary color */
.Button--primary {
  --button-bg: oklch(55% 0.2 150);
  --button-hover: oklch(50% 0.2 150);
  background-color: var(--button-bg);
}

.Button--primary:hover {
  background-color: var(--button-hover);
}

/* Custom size */
.Button--xl {
  padding: var(--space-4) var(--space-8);
  font-size: 1.125rem;
}

/* Custom border radius */
.Button--rounded {
  border-radius: var(--space-6);
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
<td><code class="ApiTable-prop">.Button</code></td>
<td class="ApiTable-desc">Base button styles (required)</td>
</tr>
</tbody>
</table>

### Variant Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Button--primary</code></td>
<td class="ApiTable-desc">Primary action button (solid accent color)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button--secondary</code></td>
<td class="ApiTable-desc">Secondary action button (subtle background)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button--tertiary</code></td>
<td class="ApiTable-desc">Tertiary action button (text only)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button--ghost</code></td>
<td class="ApiTable-desc">Minimal button (transparent until hover)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button--outline</code></td>
<td class="ApiTable-desc">Outlined button (border, no fill)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button--danger</code></td>
<td class="ApiTable-desc">Destructive action button (red)</td>
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
<td><code class="ApiTable-prop">.Button--small</code></td>
<td class="ApiTable-desc">Small button (28px height)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button--large</code></td>
<td class="ApiTable-desc">Large button (44px height)</td>
</tr>
</tbody>
</table>

### Modifier Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Button--icon</code></td>
<td class="ApiTable-desc">Icon-only button (square aspect ratio)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button--block</code></td>
<td class="ApiTable-desc">Full-width button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button--loading</code></td>
<td class="ApiTable-desc">Loading state (use with disabled)</td>
</tr>
</tbody>
</table>

### Icon Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Button-icon</code></td>
<td class="ApiTable-desc">Icon inside button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button-icon--trailing</code></td>
<td class="ApiTable-desc">Place icon after text</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Button-spinner</code></td>
<td class="ApiTable-desc">Loading spinner element</td>
</tr>
</tbody>
</table>

### Button Group Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.ButtonGroup</code></td>
<td class="ApiTable-desc">Container for grouped buttons</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.ButtonGroup-item--active</code></td>
<td class="ApiTable-desc">Active state for segmented control</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base Button */
.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border: 1px solid transparent;
  border-radius: var(--r-s);
  font-family: var(--font-sans);
  font-size: var(--fs-base);
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  transition: background-color var(--dur-f), color var(--dur-f), border-color var(--dur-f), box-shadow var(--dur-f);
  white-space: nowrap;
  text-decoration: none;
  background-color: var(--bg-s);
  color: var(--fg);
}

.Button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Variants */
.Button--primary {
  background-color: var(--accent);
  color: var(--fg-on-accent);
  border-color: transparent;
}

.Button--primary:hover {
  filter: brightness(1.1);
}

.Button--secondary {
  background-color: var(--bg-s);
  color: var(--fg);
  border-color: var(--bd);
}

.Button--secondary:hover {
  background-color: var(--bd);
}

.Button--tertiary {
  background-color: transparent;
  color: var(--fg-3);
  border-color: transparent;
}

.Button--tertiary:hover {
  background-color: var(--bg-s);
  color: var(--fg);
}

.Button--ghost {
  background-color: transparent;
  color: var(--fg);
  border-color: transparent;
}

.Button--ghost:hover {
  background-color: var(--bg-s);
}

.Button--outline {
  background-color: transparent;
  color: var(--accent);
  border-color: var(--accent);
}

.Button--outline:hover {
  background-color: oklch(from var(--accent) l c h / 0.1);
}

.Button--danger {
  background-color: oklch(55% 0.2 25);
  color: white;
  border-color: transparent;
}

.Button--danger:hover {
  background-color: oklch(50% 0.2 25);
}

/* Sizes */
.Button--small {
  padding: var(--space-1) var(--space-3);
  font-size: var(--fs-sm);
  height: 28px;
}

.Button--large {
  padding: var(--space-3) var(--space-6);
  font-size: var(--fs-xl);
  height: 44px;
}

/* Icon-Only */
.Button--icon {
  width: 36px;
  height: 36px;
  padding: 0;
}

.Button--icon.Button--small {
  width: 28px;
  height: 28px;
}

.Button--icon.Button--large {
  width: 44px;
  height: 44px;
}

/* Full Width */
.Button--block {
  display: flex;
  width: 100%;
}

/* Loading */
.Button--loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.Button-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: button-spin 0.6s linear infinite;
}

@keyframes button-spin {
  to { transform: rotate(360deg); }
}

/* Disabled */
.Button:disabled,
.Button[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Icon inside button */
.Button-icon {
  font-size: 1.1em;
  flex-shrink: 0;
}

.Button-icon--trailing {
  order: 1;
}

/* Button Group */
.ButtonGroup {
  display: inline-flex;
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

.ButtonGroup .Button + .Button {
  margin-left: -1px;
}

.ButtonGroup-item--active {
  background-color: var(--accent);
  color: var(--fg-on-accent);
  border-color: var(--accent);
  z-index: 1;
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Enter | Activates the button |
| Space | Activates the button |
| Tab | Moves focus to the button |

### Screen Readers

```html
<!-- Standard button — text is read automatically -->
<button class="Button Button--primary">Submit Form</button>

<!-- Icon-only — requires aria-label -->
<button class="Button Button--icon" aria-label="Close dialog">
    <i class="ph ph-x"></i>
</button>

<!-- Loading state — announce status -->
<button class="Button Button--primary" aria-busy="true" disabled>
    <span class="Button-spinner"></span>
    Saving...
</button>

<!-- Toggle button -->
<button class="Button Button--secondary" aria-pressed="true">
    <i class="ph ph-star-fill"></i>
    Starred
</button>
```

### Disabled vs aria-disabled

```html
<!-- Native disabled — removes from tab order -->
<button class="Button Button--primary" disabled>Cannot Click</button>

<!-- aria-disabled — keeps in tab order (for tooltips) -->
<button class="Button Button--primary" aria-disabled="true">
    Upgrade Required
</button>
```

---

## Best Practices

### Do

- ✓ **Use clear, action-oriented labels** — "Save Changes" not "Submit"
- ✓ **Lead with a verb** — "Create Project", "Delete File"
- ✓ **Limit primary buttons** — One per section/view
- ✓ **Show loading states** — Feedback during async actions
- ✓ **Size touch targets** — Minimum 44px for mobile

### Don't

- ✗ **Use vague labels** — "Click Here", "OK", "Yes"
- ✗ **Disable without explanation** — Provide tooltip or helper text
- ✗ **Use too many styles** — Stick to 2-3 variants per view
- ✗ **Hide important actions** — Primary actions should be visible
- ✗ **Forget hover/focus states** — Essential for accessibility
