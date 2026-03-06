# Chips

Chips (also called Tags) are compact elements that represent inputs, attributes, or actions. They can be interactive (selectable, removable) or purely informational.

---

## Basic Chips

Simple non-interactive chips for displaying metadata.

<Preview title="Basic Chips">
    <div class="Layout-cluster">
        <span class="Chip">Design</span>
        <span class="Chip">Development</span>
        <span class="Chip">Product</span>
        <span class="Chip">Research</span>
    </div>
</Preview>

```html
<span class="Chip">Design</span>
<span class="Chip">Development</span>
```

---

## With Icons

Add leading icons for visual context.

<Preview title="Chips with Icons">
    <div class="Layout-cluster">
        <span class="Chip">
            <i class="ph ph-user"></i>
            John Doe
        </span>
        <span class="Chip">
            <i class="ph ph-calendar"></i>
            Today
        </span>
        <span class="Chip">
            <i class="ph ph-map-pin"></i>
            San Francisco
        </span>
    </div>
</Preview>

```html
<span class="Chip">
    <i class="ph ph-user"></i>
    John Doe
</span>
```

---

## Removable Chips

Add a close button to allow users to remove chips.

<Preview title="Removable Chips">
    <div class="Layout-cluster">
        <span class="Chip Chip--removable">
            React
            <button class="Chip-remove" aria-label="Remove React">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--removable">
            TypeScript
            <button class="Chip-remove" aria-label="Remove TypeScript">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--removable">
            Node.js
            <button class="Chip-remove" aria-label="Remove Node.js">
                <i class="ph ph-x"></i>
            </button>
        </span>
    </div>
</Preview>

```html
<span class="Chip Chip--removable">
    React
    <button class="Chip-remove" aria-label="Remove React">
        <i class="ph ph-x"></i>
    </button>
</span>
```

---

## Selectable Chips

Chips that can be toggled on/off, useful for filters.

<Preview title="Selectable Chips">
    <div class="Layout-cluster">
        <button class="Chip Chip--selectable Chip--selected">
            <i class="ph ph-check"></i>
            All
        </button>
        <button class="Chip Chip--selectable">
            Open
        </button>
        <button class="Chip Chip--selectable Chip--selected">
            <i class="ph ph-check"></i>
            In Progress
        </button>
        <button class="Chip Chip--selectable">
            Closed
        </button>
    </div>
</Preview>

```html
<button class="Chip Chip--selectable">Open</button>
<button class="Chip Chip--selectable Chip--selected">
    <i class="ph ph-check"></i>
    Selected
</button>
```

---

## Color Variants

Semantic colors for different contexts.

<Preview title="Chip Colors">
    <div class="Layout-cluster">
        <span class="Chip">Default</span>
        <span class="Chip Chip--primary">Primary</span>
        <span class="Chip Chip--success">Success</span>
        <span class="Chip Chip--warning">Warning</span>
        <span class="Chip Chip--error">Error</span>
    </div>
</Preview>

```html
<span class="Chip">Default</span>
<span class="Chip Chip--primary">Primary</span>
<span class="Chip Chip--success">Success</span>
<span class="Chip Chip--warning">Warning</span>
<span class="Chip Chip--error">Error</span>
```

---

## Outlined Variant

Lighter visual weight with border-only styling.

<Preview title="Outlined Chips">
    <div class="Layout-cluster">
        <span class="Chip Chip--outlined">Default</span>
        <span class="Chip Chip--outlined Chip--primary">Primary</span>
        <span class="Chip Chip--outlined Chip--success">Success</span>
        <span class="Chip Chip--outlined Chip--warning">Warning</span>
        <span class="Chip Chip--outlined Chip--error">Error</span>
    </div>
</Preview>

```html
<span class="Chip Chip--outlined">Default</span>
<span class="Chip Chip--outlined Chip--primary">Primary</span>
```

---

## Sizes

<Preview title="Chip Sizes">
    <div class="Layout-stack">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Small</small>
            <div class="Layout-cluster">
                <span class="Chip Chip--small">Small</span>
                <span class="Chip Chip--small Chip--primary">Primary</span>
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Default</small>
            <div class="Layout-cluster">
                <span class="Chip">Default</span>
                <span class="Chip Chip--primary">Primary</span>
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Large</small>
            <div class="Layout-cluster">
                <span class="Chip Chip--large">Large</span>
                <span class="Chip Chip--large Chip--primary">Primary</span>
            </div>
        </div>
    </div>
</Preview>

```html
<span class="Chip Chip--small">Small</span>
<span class="Chip">Default</span>
<span class="Chip Chip--large">Large</span>
```

---

## Avatar Chips

Chips with leading avatar for people or entities.

<Preview title="Avatar Chips">
    <div class="Layout-cluster">
        <span class="Chip Chip--avatar">
            <span class="Chip-avatar" style="background: var(--accent);">A</span>
            Alice
        </span>
        <span class="Chip Chip--avatar Chip--removable">
            <span class="Chip-avatar" style="background: oklch(55% 0.15 150);">B</span>
            Bob
            <button class="Chip-remove" aria-label="Remove Bob">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--avatar">
            <img class="Chip-avatar" src="https://i.pravatar.cc/24?img=3" alt="" loading="lazy" decoding="async">
            Carol
        </span>
    </div>
</Preview>

```html
<span class="Chip Chip--avatar">
    <span class="Chip-avatar">A</span>
    Alice
</span>

<span class="Chip Chip--avatar">
    <img class="Chip-avatar" src="avatar.jpg" alt="" loading="lazy" decoding="async">
    Carol
</span>
```

---

## Input Chips

Common pattern for tag inputs in forms.

<Preview title="Tag Input">
    <div style="border: 1px solid var(--bd-s); border-radius: var(--r-s); padding: var(--space-2); display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; min-height: 44px;">
        <span class="Chip Chip--small Chip--removable">
            javascript
            <button class="Chip-remove" aria-label="Remove javascript">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--small Chip--removable">
            typescript
            <button class="Chip-remove" aria-label="Remove typescript">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <span class="Chip Chip--small Chip--removable">
            react
            <button class="Chip-remove" aria-label="Remove react">
                <i class="ph ph-x"></i>
            </button>
        </span>
        <input type="text" placeholder="Add tag..." style="border: none; outline: none; flex: 1; min-width: 100px; font-family: var(--ff-b); font-size: 0.9rem; background: transparent;">
    </div>
</Preview>

```html
<div class="ChipInput">
    <span class="Chip Chip--small Chip--removable">
        tag
        <button class="Chip-remove">×</button>
    </span>
    <input type="text" placeholder="Add tag...">
</div>
```

---

## Use Cases

### Filter Bar

<Preview title="Filter Example">
    <div class="Layout-stack Layout-stack--tight">
        <small style="color: var(--fg-3);">Active filters:</small>
        <div class="Layout-cluster">
            <span class="Chip Chip--primary Chip--removable">
                Status: Open
                <button class="Chip-remove" aria-label="Remove filter">
                    <i class="ph ph-x"></i>
                </button>
            </span>
            <span class="Chip Chip--primary Chip--removable">
                Assigned: Me
                <button class="Chip-remove" aria-label="Remove filter">
                    <i class="ph ph-x"></i>
                </button>
            </span>
            <span class="Chip Chip--primary Chip--removable">
                Label: Bug
                <button class="Chip-remove" aria-label="Remove filter">
                    <i class="ph ph-x"></i>
                </button>
            </span>
            <button class="Link" style="font-size: 0.85rem;">Clear all</button>
        </div>
    </div>
</Preview>

### Category Tags

<Preview title="Category Tags">
    <div class="Card" style="max-width: 320px;">
        <div style="height: 120px; background: linear-gradient(135deg, oklch(60% 0.15 250), oklch(60% 0.15 280));"></div>
        <div class="Card-body">
            <div class="Layout-cluster" style="margin-bottom: var(--space-2);">
                <span class="Chip Chip--small Chip--outlined Chip--primary">Tutorial</span>
                <span class="Chip Chip--small Chip--outlined">Beginner</span>
            </div>
            <div class="Card-title">Getting Started with Standard</div>
            <div class="Card-description">Learn how to set up and customize the design system.</div>
        </div>
    </div>
</Preview>

---

## Common Patterns

### Status Badges in Tables

<Preview title="Status Chips in a Data Row">
<div style="display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3); border: 1px solid var(--bd); border-radius: var(--r-s);">
    <span style="flex: 1; font-weight: 500;">Order #4281</span>
    <span class="Chip Chip--small Chip--success">Shipped</span>
    <span class="Chip Chip--small Chip--outlined">Express</span>
</div>
</Preview>

### Skill Tags on a Profile

<Preview title="Profile Skills">
<div style="max-width: 360px;">
    <p style="font-weight: 600; margin-bottom: var(--space-2);">Skills</p>
    <div class="Layout-cluster">
        <span class="Chip Chip--outlined">JavaScript</span>
        <span class="Chip Chip--outlined">React</span>
        <span class="Chip Chip--outlined">CSS</span>
        <span class="Chip Chip--outlined">Node.js</span>
        <span class="Chip Chip--outlined">Figma</span>
    </div>
</div>
</Preview>

### Multi-select Chip Group

<Preview title="Interest Selector">
<div style="max-width: 400px;">
    <p style="font-weight: 500; margin-bottom: var(--space-2);">Select your interests:</p>
    <div class="Layout-cluster">
        <button class="Chip Chip--selectable Chip--selected"><i class="ph ph-check"></i> Design</button>
        <button class="Chip Chip--selectable">Engineering</button>
        <button class="Chip Chip--selectable Chip--selected"><i class="ph ph-check"></i> Product</button>
        <button class="Chip Chip--selectable">Marketing</button>
        <button class="Chip Chip--selectable">Data Science</button>
    </div>
</div>
</Preview>

### Notification Badges

<Preview title="Chips with Counts">
<div class="Layout-cluster">
    <span class="Chip Chip--primary">
        <i class="ph ph-envelope"></i>
        Inbox
        <span style="background: var(--accent); color: white; border-radius: 50%; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.7rem;">3</span>
    </span>
    <span class="Chip">
        <i class="ph ph-bell"></i>
        Alerts
        <span style="background: oklch(55% 0.2 25); color: white; border-radius: 50%; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.7rem;">7</span>
    </span>
</div>
</Preview>

---

## Customization

Override chip styles using CSS custom properties:

```css
/* Custom chip colors */
.Chip--brand {
  background-color: oklch(60% 0.18 280 / 0.15);
  border-color: oklch(60% 0.18 280 / 0.3);
  color: oklch(50% 0.18 280);
}

/* Pill shape (more rounded) */
.Chip--pill {
  border-radius: var(--r-f);
  padding: var(--space-1) var(--space-3);
}

/* Square chips */
.Chip--square {
  border-radius: var(--r-s);
}

/* Custom size */
.Chip--xl {
  padding: var(--space-2) var(--space-4);
  font-size: 1rem;
  gap: var(--space-2);
}

/* Filled selected state with custom color */
.Chip--selectable.Chip--selected {
  background-color: oklch(50% 0.15 250);
  border-color: oklch(50% 0.15 250);
}
```

### Theme Overrides

```css
/* Dark theme adjustments */
[data-theme="dark"] .Chip {
  background-color: oklch(25% 0 0);
  border-color: oklch(35% 0 0);
  color: oklch(85% 0 0);
}

[data-theme="dark"] .Chip--primary {
  background-color: oklch(60% 0.15 250 / 0.25);
  color: oklch(75% 0.1 250);
}
```

---

## API Reference

### Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Chip</code></td><td class="ApiTable-desc">Base chip styling</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--primary</code></td><td class="ApiTable-desc">Primary color variant</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--success</code></td><td class="ApiTable-desc">Success color variant</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--warning</code></td><td class="ApiTable-desc">Warning color variant</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--error</code></td><td class="ApiTable-desc">Error color variant</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--outlined</code></td><td class="ApiTable-desc">Transparent background with border</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--small</code></td><td class="ApiTable-desc">Smaller chip size</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--large</code></td><td class="ApiTable-desc">Larger chip size</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--removable</code></td><td class="ApiTable-desc">Chip with dismiss button</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--selectable</code></td><td class="ApiTable-desc">Interactive toggle chip</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--selected</code></td><td class="ApiTable-desc">Active selected state</td></tr>
<tr><td><code class="ApiTable-prop">.Chip--avatar</code></td><td class="ApiTable-desc">Chip with leading avatar</td></tr>
<tr><td><code class="ApiTable-prop">.Chip-remove</code></td><td class="ApiTable-desc">Dismiss button element</td></tr>
<tr><td><code class="ApiTable-prop">.Chip-avatar</code></td><td class="ApiTable-desc">Avatar element inside chip</td></tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">aria-label</code></td><td class="ApiTable-desc">Required on <code>.Chip-remove</code> to describe what is removed</td></tr>
<tr><td><code class="ApiTable-prop">role="listitem"</code></td><td class="ApiTable-desc">Use when chips are in a list context</td></tr>
<tr><td><code class="ApiTable-prop">aria-pressed</code></td><td class="ApiTable-desc">Use on selectable chips to indicate state</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base */
.Chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background-color: var(--bg-s);
  border: 1px solid var(--bd);
  border-radius: var(--r-l);
  font-family: var(--ff-b);
  font-size: var(--fs-base);
  font-weight: 500;
  color: var(--fg);
  white-space: nowrap;
}

.Chip i {
  font-size: var(--fs-xl);
  color: var(--fg-3);
}

/* Remove button */
.Chip-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 2px;
  margin: -2px;
  margin-left: var(--space-1);
  border-radius: 50%;
  cursor: pointer;
  color: var(--fg-3);
  transition: background var(--dur-f), color var(--dur-f);
}

.Chip-remove:hover {
  background-color: oklch(0% 0 0 / 0.1);
  color: var(--fg);
}

/* Selectable */
.Chip--selectable {
  cursor: pointer;
  transition: background var(--dur-f), border-color var(--dur-f), color var(--dur-f);
}

.Chip--selectable:hover {
  border-color: var(--bd-s);
}

.Chip--selected {
  background-color: var(--accent);
  border-color: var(--accent);
  color: white;
}

.Chip--selected i {
  color: white;
}

/* Color variants */
.Chip--primary {
  background-color: oklch(60% 0.15 250 / 0.15);
  border-color: oklch(60% 0.15 250 / 0.3);
  color: oklch(50% 0.15 250);
}

.Chip--success {
  background-color: oklch(55% 0.15 150 / 0.15);
  border-color: oklch(55% 0.15 150 / 0.3);
  color: oklch(45% 0.15 150);
}

.Chip--warning {
  background-color: oklch(70% 0.15 80 / 0.15);
  border-color: oklch(70% 0.15 80 / 0.3);
  color: oklch(50% 0.15 80);
}

.Chip--error {
  background-color: oklch(55% 0.2 25 / 0.15);
  border-color: oklch(55% 0.2 25 / 0.3);
  color: oklch(50% 0.2 25);
}

/* Outlined variant */
.Chip--outlined {
  background-color: transparent;
}

/* Sizes */
.Chip--small {
  padding: 2px var(--space-2);
  font-size: var(--fs-sm);
}

.Chip--large {
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-lg);
}

/* Avatar variant */
.Chip--avatar {
  padding-left: 2px;
}

.Chip-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-xs);
  font-weight: 600;
  color: white;
  object-fit: cover;
}
```

---

## Accessibility

- **Use `<button>` for interactive chips** — Ensures keyboard accessibility
- **Provide aria-labels for remove buttons** — Screen readers need context
- **Announce changes** — Use aria-live regions when chips are added/removed
- **Ensure sufficient contrast** — Especially for colored variants

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus between chips |
| Enter / Space | Toggle selectable chip or activate remove button |
| Backspace / Delete | Remove focused removable chip |

### Screen Reader Guidance

```html
<!-- Removable chip with proper labels -->
<span class="Chip Chip--removable" role="listitem">
    React
    <button class="Chip-remove" 
            aria-label="Remove React from selection">
        <i class="ph ph-x" aria-hidden="true"></i>
    </button>
</span>

<!-- Chip group with live region -->
<div role="list" aria-label="Selected filters">
    <span class="Chip" role="listitem">Filter 1</span>
    <span class="Chip" role="listitem">Filter 2</span>
</div>
<div aria-live="polite" class="sr-only">
    <!-- Announce changes here -->
</div>
```

---

## Best Practices

### Do

- ✓ **Use `<button>` for interactive chips** — Ensures keyboard and screen reader support
- ✓ **Provide descriptive aria-labels** — "Remove React" not just "Remove"
- ✓ **Use color + icon together** — Don't rely on color alone to convey meaning
- ✓ **Keep chip text short** — One or two words maximum
- ✓ **Group related chips** — Use `role="list"` with `role="listitem"` children
- ✓ **Announce dynamic changes** — Use `aria-live` when chips are added or removed

### Don't

- ✗ **Use chips for primary actions** — Chips are for metadata, filters, and selections
- ✗ **Nest interactive elements** — Don't put a link inside a selectable chip
- ✗ **Overload with too many chips** — More than 8-10 becomes overwhelming
- ✗ **Mix sizes in the same group** — Keep chip sizes consistent within a cluster
- ✗ **Use vague labels** — "Tag 1" tells users nothing
- ✗ **Forget hover/focus states** — Interactive chips need clear visual feedback
