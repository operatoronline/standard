# Badges

Badges are small status descriptors used to highlight item properties, counts, or states. They provide visual emphasis and quick recognition of important information.

---

## Simple Badges

Basic badges for categorization and labels.

<Preview title="Standard Badges">
    <span class="Badge">Default</span>
    <span class="Badge Badge--primary">Primary</span>
    <span class="Badge Badge--secondary">Secondary</span>
</Preview>

```html
<span class="Badge">Default</span>
<span class="Badge Badge--primary">Primary</span>
<span class="Badge Badge--secondary">Secondary</span>
```

---

## Status Badges

Semantic badges to indicate states like success, warning, or error.

<Preview title="Status Badges">
    <span class="Badge Badge--success">Active</span>
    <span class="Badge Badge--warning">Pending</span>
    <span class="Badge Badge--error">Failed</span>
    <span class="Badge Badge--info">New</span>
</Preview>

```html
<span class="Badge Badge--success">Active</span>
<span class="Badge Badge--warning">Pending</span>
<span class="Badge Badge--error">Failed</span>
<span class="Badge Badge--info">New</span>
```

---

## Badge Sizes

Badges come in three sizes: small, medium (default), and large.

<Preview title="Badge Sizes">
    <span class="Badge Badge--primary Badge--small">Small</span>
    <span class="Badge Badge--primary">Medium</span>
    <span class="Badge Badge--primary Badge--large">Large</span>
</Preview>

```html
<span class="Badge Badge--primary Badge--small">Small</span>
<span class="Badge Badge--primary">Medium</span>
<span class="Badge Badge--primary Badge--large">Large</span>
```

---

## Pill Badges

Fully rounded badges for a softer appearance.

<Preview title="Pill Badges">
    <span class="Badge Badge--pill">Default</span>
    <span class="Badge Badge--pill Badge--primary">Primary</span>
    <span class="Badge Badge--pill Badge--success">Success</span>
    <span class="Badge Badge--pill Badge--warning">Warning</span>
    <span class="Badge Badge--pill Badge--error">Error</span>
</Preview>

```html
<span class="Badge Badge--pill Badge--primary">Primary</span>
<span class="Badge Badge--pill Badge--success">Success</span>
```

---

## Outline Badges

Badges with transparent background and colored border.

<Preview title="Outline Badges">
    <span class="Badge Badge--outline">Default</span>
    <span class="Badge Badge--outline Badge--primary">Primary</span>
    <span class="Badge Badge--outline Badge--success">Success</span>
    <span class="Badge Badge--outline Badge--warning">Warning</span>
    <span class="Badge Badge--outline Badge--error">Error</span>
</Preview>

```html
<span class="Badge Badge--outline Badge--primary">Primary</span>
<span class="Badge Badge--outline Badge--success">Success</span>
```

---

## Badges with Icons

Add icons for visual reinforcement.

<Preview title="Badges with Leading Icon">
    <span class="Badge Badge--success">
        <i class="ph ph-check-circle Badge-icon"></i>
        Complete
    </span>
    <span class="Badge Badge--warning">
        <i class="ph ph-clock Badge-icon"></i>
        Pending
    </span>
    <span class="Badge Badge--error">
        <i class="ph ph-warning Badge-icon"></i>
        Error
    </span>
    <span class="Badge Badge--info">
        <i class="ph ph-info Badge-icon"></i>
        Info
    </span>
</Preview>

```html
<span class="Badge Badge--success">
    <i class="ph ph-check-circle Badge-icon"></i>
    Complete
</span>
```

<Preview title="Badges with Trailing Icon">
    <span class="Badge Badge--primary">
        New Feature
        <i class="ph ph-arrow-right Badge-icon Badge-icon--trailing"></i>
    </span>
    <span class="Badge Badge--secondary">
        Settings
        <i class="ph ph-gear Badge-icon Badge-icon--trailing"></i>
    </span>
</Preview>

```html
<span class="Badge Badge--primary">
    New Feature
    <i class="ph ph-arrow-right Badge-icon Badge-icon--trailing"></i>
</span>
```

---

## Dot Indicator

Minimal status indicator without text.

<Preview title="Dot Indicators">
    <span class="Badge Badge--dot"></span>
    <span class="Badge Badge--dot Badge--success"></span>
    <span class="Badge Badge--dot Badge--warning"></span>
    <span class="Badge Badge--dot Badge--error"></span>
    <span class="Badge Badge--dot Badge--primary"></span>
</Preview>

```html
<span class="Badge Badge--dot Badge--success"></span>
<span class="Badge Badge--dot Badge--error"></span>
```

<Preview title="Dot with Label">
    <div style="display: flex; align-items: center; gap: var(--space-2);">
        <span class="Badge Badge--dot Badge--success"></span>
        <span style="font-size: 0.875rem;">Online</span>
    </div>
    <div style="display: flex; align-items: center; gap: var(--space-2);">
        <span class="Badge Badge--dot Badge--warning"></span>
        <span style="font-size: 0.875rem;">Away</span>
    </div>
    <div style="display: flex; align-items: center; gap: var(--space-2);">
        <span class="Badge Badge--dot Badge--error"></span>
        <span style="font-size: 0.875rem;">Offline</span>
    </div>
</Preview>

---

## Count Badges

Badges for displaying numeric counts.

<Preview title="Count Badges">
    <span class="Badge Badge--count">5</span>
    <span class="Badge Badge--count Badge--primary">12</span>
    <span class="Badge Badge--count Badge--error">99+</span>
</Preview>

```html
<span class="Badge Badge--count">5</span>
<span class="Badge Badge--count Badge--primary">12</span>
<span class="Badge Badge--count Badge--error">99+</span>
```

---

## Badge Positioning

Common patterns for positioning badges relative to other elements.

<Preview title="Badge on Icon Button">
    <button class="Button Button--icon Button--secondary" style="position: relative;" aria-label="Notifications">
        <i class="ph ph-bell"></i>
        <span class="Badge Badge--count Badge--error Badge--positioned">3</span>
    </button>
    <button class="Button Button--icon Button--secondary" style="position: relative;" aria-label="Messages">
        <i class="ph ph-envelope"></i>
        <span class="Badge Badge--count Badge--primary Badge--positioned">12</span>
    </button>
    <button class="Button Button--icon Button--secondary" style="position: relative;" aria-label="Cart">
        <i class="ph ph-shopping-cart"></i>
        <span class="Badge Badge--dot Badge--error Badge--positioned"></span>
    </button>
</Preview>

```html
<button class="Button Button--icon" style="position: relative;">
    <i class="ph ph-bell"></i>
    <span class="Badge Badge--count Badge--error Badge--positioned">3</span>
</button>
```

<Preview title="Badge on Avatar">
    <div style="display: flex; gap: var(--space-6);">
        <div style="position: relative; display: inline-block;">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=badge1" class="Avatar" alt="User" loading="lazy" decoding="async">
            <span class="Badge Badge--dot Badge--success Badge--avatar"></span>
        </div>
        <div style="position: relative; display: inline-block;">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=badge2" class="Avatar" alt="User" loading="lazy" decoding="async">
            <span class="Badge Badge--dot Badge--warning Badge--avatar"></span>
        </div>
        <div style="position: relative; display: inline-block;">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=badge3" class="Avatar" alt="User" loading="lazy" decoding="async">
            <span class="Badge Badge--count Badge--error Badge--avatar" style="font-size: 0.65rem;">5</span>
        </div>
    </div>
</Preview>

```html
<div style="position: relative; display: inline-block;">
    <img src="..." class="Avatar" alt="User" loading="lazy" decoding="async">
    <span class="Badge Badge--dot Badge--success Badge--avatar"></span>
</div>
```

---

## Interactive Badges

Badges that can be clicked or dismissed.

<Preview title="Dismissible Badge">
    <span class="Badge Badge--primary Badge--dismissible">
        Filter Active
        <button class="Badge-dismiss" aria-label="Remove filter">
            <i class="ph ph-x"></i>
        </button>
    </span>
    <span class="Badge Badge--secondary Badge--dismissible">
        Tag Name
        <button class="Badge-dismiss" aria-label="Remove tag">
            <i class="ph ph-x"></i>
        </button>
    </span>
</Preview>

```html
<span class="Badge Badge--primary Badge--dismissible">
    Filter Active
    <button class="Badge-dismiss" aria-label="Remove filter">
        <i class="ph ph-x"></i>
    </button>
</span>
```

<Preview title="Clickable Badge">
    <a href="#" class="Badge Badge--primary Badge--clickable">View Details</a>
    <a href="#" class="Badge Badge--outline Badge--clickable">Documentation</a>
</Preview>

```html
<a href="#" class="Badge Badge--primary Badge--clickable">View Details</a>
```

---

## Common Patterns

### Table Row Status

<Preview title="Status in Table Row">
    <div style="display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
        <span style="flex: 1; font-weight: 500;">Order #12345</span>
        <span class="Badge Badge--success">Delivered</span>
        <span style="color: var(--fg-3); font-size: 0.875rem;">Today</span>
    </div>
    <div style="display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m); margin-top: var(--space-2);">
        <span style="flex: 1; font-weight: 500;">Order #12346</span>
        <span class="Badge Badge--warning">In Transit</span>
        <span style="color: var(--fg-3); font-size: 0.875rem;">Est. Tomorrow</span>
    </div>
    <div style="display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m); margin-top: var(--space-2);">
        <span style="flex: 1; font-weight: 500;">Order #12347</span>
        <span class="Badge Badge--error">Cancelled</span>
        <span style="color: var(--fg-3); font-size: 0.875rem;">—</span>
    </div>
</Preview>

### User List with Status

<Preview title="User Status List">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); max-width: 320px;">
        <div style="display: flex; align-items: center; gap: var(--space-3);">
            <div style="position: relative;">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" class="Avatar Avatar--small" alt="Sarah" loading="lazy" decoding="async">
                <span class="Badge Badge--dot Badge--success Badge--avatar"></span>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 500; font-size: 0.9rem;">Sarah Chen</div>
                <div style="font-size: 0.75rem; color: var(--fg-3);">Online</div>
            </div>
            <span class="Badge Badge--primary Badge--small">Admin</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-3);">
            <div style="position: relative;">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" class="Avatar Avatar--small" alt="John" loading="lazy" decoding="async">
                <span class="Badge Badge--dot Badge--warning Badge--avatar"></span>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 500; font-size: 0.9rem;">John Smith</div>
                <div style="font-size: 0.75rem; color: var(--fg-3);">Away</div>
            </div>
            <span class="Badge Badge--secondary Badge--small">Editor</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-3);">
            <div style="position: relative;">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" class="Avatar Avatar--small" alt="Mike" loading="lazy" decoding="async">
                <span class="Badge Badge--dot Badge--avatar" style="background-color: var(--fg-3);"></span>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 500; font-size: 0.9rem;">Mike Johnson</div>
                <div style="font-size: 0.75rem; color: var(--fg-3);">Offline</div>
            </div>
            <span class="Badge Badge--secondary Badge--small">Viewer</span>
        </div>
    </div>
</Preview>

### Feature Tags

<Preview title="Feature Tags">
    <div class="Card" style="max-width: 360px;">
        <div class="Card-body">
            <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; margin-bottom: var(--space-3);">
                <span class="Badge Badge--pill Badge--primary Badge--small">Featured</span>
                <span class="Badge Badge--pill Badge--info Badge--small">New</span>
            </div>
            <h4 class="Card-title">Advanced Analytics</h4>
            <p class="Card-text">Track performance with real-time dashboards and detailed reports.</p>
            <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-4);">
                <span class="Badge Badge--outline Badge--small">Charts</span>
                <span class="Badge Badge--outline Badge--small">Exports</span>
                <span class="Badge Badge--outline Badge--small">API</span>
            </div>
        </div>
    </div>
</Preview>

### Notification Header

<Preview title="Notification Header">
    <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-m); max-width: 400px;">
        <div style="display: flex; align-items: center; gap: var(--space-3);">
            <h4 style="margin: 0; font-size: 1rem;">Notifications</h4>
            <span class="Badge Badge--error Badge--small">4 new</span>
        </div>
        <button class="Button Button--ghost Button--small">Mark all read</button>
    </div>
</Preview>

---

## Customization

Override badge styles using CSS custom properties:

```css
/* Custom brand badge */
.Badge--brand {
  background-color: oklch(60% 0.15 280 / 0.15);
  color: oklch(50% 0.15 280);
}

/* Larger count badge */
.Badge--count-lg {
  min-width: 28px;
  height: 28px;
  font-size: 0.8rem;
  padding: 0 var(--space-2);
}

/* Animated dot (pulsing) */
.Badge--dot.Badge--pulse {
  animation: badge-pulse 2s infinite;
}

@keyframes badge-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* Bordered badge */
.Badge--bordered {
  border: 1.5px solid currentColor;
  background-color: transparent;
}

/* Custom spacing for tight layouts */
.Badge--tight {
  padding: 0 var(--space-1);
  font-size: 0.65rem;
}
```

---

## API Reference

### Base & Variant Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Badge</code></td><td class="ApiTable-desc">Base badge styling</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--primary</code></td><td class="ApiTable-desc">Primary color variant</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--secondary</code></td><td class="ApiTable-desc">Secondary/neutral color variant</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--success</code></td><td class="ApiTable-desc">Success/positive state</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--warning</code></td><td class="ApiTable-desc">Warning/caution state</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--error</code></td><td class="ApiTable-desc">Error/danger state</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--info</code></td><td class="ApiTable-desc">Informational state</td></tr>
</tbody>
</table>

### Size & Shape Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Badge--small</code></td><td class="ApiTable-desc">Smaller badge size</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--large</code></td><td class="ApiTable-desc">Larger badge size</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--pill</code></td><td class="ApiTable-desc">Fully rounded pill shape</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--outline</code></td><td class="ApiTable-desc">Transparent background with border</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--dot</code></td><td class="ApiTable-desc">Minimal dot indicator (no text)</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--count</code></td><td class="ApiTable-desc">Circular count badge</td></tr>
</tbody>
</table>

### Positioning & Interactive Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Badge--positioned</code></td><td class="ApiTable-desc">Absolute positioning for overlays</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--avatar</code></td><td class="ApiTable-desc">Positioning for avatar overlays</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--dismissible</code></td><td class="ApiTable-desc">Badge with remove button</td></tr>
<tr><td><code class="ApiTable-prop">.Badge--clickable</code></td><td class="ApiTable-desc">Interactive link/button badge</td></tr>
<tr><td><code class="ApiTable-prop">.Badge-icon</code></td><td class="ApiTable-desc">Leading icon styling</td></tr>
<tr><td><code class="ApiTable-prop">.Badge-icon--trailing</code></td><td class="ApiTable-desc">Trailing icon positioning</td></tr>
<tr><td><code class="ApiTable-prop">.Badge-dismiss</code></td><td class="ApiTable-desc">Dismiss button inside badge</td></tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">aria-label</code></td><td class="ApiTable-desc">Required for dot indicators without visible text</td></tr>
<tr><td><code class="ApiTable-prop">aria-hidden</code></td><td class="ApiTable-desc">Use on count badges when count is announced via parent</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base Badge */
.Badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--r-s);
  font-family: var(--ff-b);
  font-size: var(--fs-sm);
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  background-color: var(--bg-s);
  color: var(--fg);
  border: 1px solid transparent;
}

/* Colors */
.Badge--primary {
  background-color: oklch(60% 0.15 250 / 0.15);
  color: oklch(50% 0.15 250);
}

.Badge--secondary {
  background-color: var(--bg-s);
  color: var(--fg-3);
  border-color: var(--bd);
}

.Badge--success {
  background-color: oklch(65% 0.15 150 / 0.15);
  color: oklch(45% 0.15 150);
}

.Badge--warning {
  background-color: oklch(75% 0.15 80 / 0.15);
  color: oklch(50% 0.15 80);
}

.Badge--error {
  background-color: oklch(55% 0.2 25 / 0.15);
  color: oklch(50% 0.2 25);
}

.Badge--info {
  background-color: oklch(65% 0.15 220 / 0.15);
  color: oklch(50% 0.15 220);
}

/* Sizes */
.Badge--small {
  padding: 0 var(--space-1);
  font-size: var(--fs-2xs);
}

.Badge--large {
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-base);
}

/* Pill */
.Badge--pill {
  border-radius: var(--r-f);
}

/* Outline */
.Badge--outline {
  background-color: transparent;
}

.Badge--outline.Badge--primary {
  border-color: oklch(60% 0.15 250);
  color: oklch(60% 0.15 250);
}

.Badge--outline.Badge--success {
  border-color: oklch(55% 0.15 150);
  color: oklch(55% 0.15 150);
}

.Badge--outline.Badge--warning {
  border-color: oklch(60% 0.15 80);
  color: oklch(60% 0.15 80);
}

.Badge--outline.Badge--error {
  border-color: oklch(55% 0.2 25);
  color: oklch(55% 0.2 25);
}

/* Dot */
.Badge--dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50%;
  background-color: var(--fg-3);
}

.Badge--dot.Badge--success {
  background-color: oklch(55% 0.15 150);
}

.Badge--dot.Badge--warning {
  background-color: oklch(70% 0.15 80);
}

.Badge--dot.Badge--error {
  background-color: oklch(55% 0.2 25);
}

.Badge--dot.Badge--primary {
  background-color: var(--accent);
}

/* Count */
.Badge--count {
  min-width: 20px;
  height: 20px;
  padding: 0 var(--space-1);
  border-radius: var(--r-m);
  text-align: center;
  justify-content: center;
}

/* Positioning */
.Badge--positioned {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  font-size: var(--fs-2xs);
}

.Badge--avatar {
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid var(--bg);
}

/* Icon */
.Badge-icon {
  font-size: 0.9em;
}

.Badge-icon--trailing {
  order: 1;
}

/* Dismissible */
.Badge--dismissible {
  padding-right: var(--space-1);
}

.Badge-dismiss {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  margin-left: var(--space-1);
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  transition: opacity var(--dur-f);
}

.Badge-dismiss:hover {
  opacity: 1;
  background-color: oklch(0% 0 0 / 0.1);
}

/* Clickable */
.Badge--clickable {
  cursor: pointer;
  text-decoration: none;
  transition: background var(--dur-f), color var(--dur-f);
}

.Badge--clickable:hover {
  filter: brightness(0.95);
}
```

---

## Accessibility

### Color Independence
```html
<!-- Don't rely on color alone — include text or icons -->
<span class="Badge Badge--success">
    <i class="ph ph-check-circle Badge-icon"></i>
    Complete
</span>

<!-- Not just color -->
<span class="Badge Badge--error">Error</span>
```

### Screen Reader Context
```html
<!-- Provide context for count badges -->
<button class="Button Button--icon" aria-label="Notifications, 3 unread">
    <i class="ph ph-bell"></i>
    <span class="Badge Badge--count" aria-hidden="true">3</span>
</button>

<!-- For status dots, use aria-label -->
<span class="Badge Badge--dot Badge--success" aria-label="Online"></span>
```

### Dismissible Badges
```html
<!-- Always provide accessible dismiss button -->
<span class="Badge Badge--dismissible">
    Filter: Active
    <button class="Badge-dismiss" aria-label="Remove Active filter">
        <i class="ph ph-x"></i>
    </button>
</span>
```

---

## Best Practices

### Do

- ✓ **Keep text short** — 1-2 words maximum
- ✓ **Use semantic colors** — Green for success, red for errors
- ✓ **Include icons for clarity** — Helps users with color blindness
- ✓ **Position consistently** — Same placement across similar elements
- ✓ **Use for quick scanning** — Badges should be glanceable

### Don't

- ✗ **Overuse badges** — Too many reduces impact
- ✗ **Rely on color alone** — Always pair with text or icons
- ✗ **Use for long content** — That's what labels or tags are for
- ✗ **Mix too many colors** — Stick to 2-3 per view
- ✗ **Hide important info** — Critical statuses need more than a dot
