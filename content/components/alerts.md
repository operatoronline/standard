# Alerts

Alerts display important messages that require user attention.

<Hero>
<!-- stats: 4 Variants, Dismissible, Accessible -->
<div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:400px">
    <div class="Alert Alert--success"><i class="ph ph-check-circle" aria-hidden="true"></i><p style="margin:0">Changes saved successfully.</p></div>
    <div class="Alert Alert--warning"><i class="ph ph-warning" aria-hidden="true"></i><p style="margin:0">Your session expires in 5 minutes.</p></div>
    <div class="Alert Alert--error"><i class="ph ph-x-circle" aria-hidden="true"></i><p style="margin:0">Unable to connect to the server.</p></div>
</div>
</Hero>

## Basic Alert

<Preview title="Basic Alert">
    <div class="Alert">
        <p>This is a basic alert message.</p>
    </div>
</Preview>

```html
<div class="Alert">
    <p>This is a basic alert message.</p>
</div>
```

## With Icon

<Preview title="Alert with Icon">
    <div class="Alert Alert--info">
        <i class="ph ph-info Alert-icon"></i>
        <div class="Alert-content">
            <p>A new version is available. Please refresh to update.</p>
        </div>
    </div>
</Preview>

```html
<div class="Alert Alert--info">
    <i class="ph ph-info Alert-icon"></i>
    <div class="Alert-content">
        <p>Your message here.</p>
    </div>
</div>
```

## Variants

<Preview title="Alert Variants">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div class="Alert Alert--info">
            <i class="ph ph-info Alert-icon"></i>
            <div class="Alert-content">
                <strong>Info:</strong> This is an informational message.
            </div>
        </div>
        <div class="Alert Alert--success">
            <i class="ph ph-check-circle Alert-icon"></i>
            <div class="Alert-content">
                <strong>Success:</strong> Your changes have been saved.
            </div>
        </div>
        <div class="Alert Alert--warning">
            <i class="ph ph-warning Alert-icon"></i>
            <div class="Alert-content">
                <strong>Warning:</strong> Your session will expire in 5 minutes.
            </div>
        </div>
        <div class="Alert Alert--error">
            <i class="ph ph-x-circle Alert-icon"></i>
            <div class="Alert-content">
                <strong>Error:</strong> Something went wrong. Please try again.
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Alert Alert--info">...</div>
<div class="Alert Alert--success">...</div>
<div class="Alert Alert--warning">...</div>
<div class="Alert Alert--error">...</div>
```

## With Title

<Preview title="Alert with Title">
    <div class="Alert Alert--warning">
        <i class="ph ph-warning Alert-icon"></i>
        <div class="Alert-content">
            <p class="Alert-title">Scheduled Maintenance</p>
            <p>The system will be unavailable on Sunday, Feb 5th from 2-4 AM UTC for scheduled maintenance.</p>
        </div>
    </div>
</Preview>

```html
<div class="Alert Alert--warning">
    <i class="ph ph-warning Alert-icon"></i>
    <div class="Alert-content">
        <p class="Alert-title">Scheduled Maintenance</p>
        <p>Description text...</p>
    </div>
</div>
```

## Dismissible

<Preview title="Dismissible Alert">
    <div class="Alert Alert--info">
        <i class="ph ph-info Alert-icon"></i>
        <div class="Alert-content">
            <p>This alert can be dismissed.</p>
        </div>
        <button class="Alert-close" aria-label="Dismiss">
            <i class="ph ph-x"></i>
        </button>
    </div>
</Preview>

```html
<div class="Alert Alert--info">
    <i class="ph ph-info Alert-icon"></i>
    <div class="Alert-content">
        <p>This alert can be dismissed.</p>
    </div>
    <button class="Alert-close" aria-label="Dismiss">
        <i class="ph ph-x"></i>
    </button>
</div>
```

## With Actions

<Preview title="Alert with Actions">
    <div class="Alert Alert--info">
        <i class="ph ph-cloud-arrow-up Alert-icon"></i>
        <div class="Alert-content">
            <p class="Alert-title">Update Available</p>
            <p>A new version (v2.1.0) is ready to install.</p>
            <div class="Alert-actions">
                <button class="Button Button--primary" style="padding: var(--space-1) var(--space-3); font-size: 0.85rem;">Update Now</button>
                <button class="Button" style="padding: var(--space-1) var(--space-3); font-size: 0.85rem;">Later</button>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Alert Alert--info">
    <div class="Alert-content">
        <p class="Alert-title">Update Available</p>
        <p>Description...</p>
        <div class="Alert-actions">
            <button class="Button Button--primary">Update Now</button>
            <button class="Button">Later</button>
        </div>
    </div>
</div>
```

## Callout (Bordered)

A softer variant for documentation callouts.

<Preview title="Callout">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div class="Callout Callout--info">
            <i class="ph ph-lightbulb Callout-icon"></i>
            <div class="Callout-content">
                <strong>Tip:</strong> You can use keyboard shortcuts to navigate faster.
            </div>
        </div>
        <div class="Callout Callout--warning">
            <i class="ph ph-warning Callout-icon"></i>
            <div class="Callout-content">
                <strong>Caution:</strong> This action cannot be undone.
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Callout Callout--info">
    <i class="ph ph-lightbulb Callout-icon"></i>
    <div class="Callout-content">
        <strong>Tip:</strong> Your content here.
    </div>
</div>
```

---

## Common Patterns

### Form Validation Summary

<Preview title="Form Validation">
<div style="max-width: 400px;">
    <div class="Alert Alert--error" style="margin-bottom: var(--space-4);">
        <i class="ph ph-x-circle Alert-icon"></i>
        <div class="Alert-content">
            <p class="Alert-title">Please fix the following errors:</p>
            <ul style="margin: var(--space-2) 0 0; padding-left: var(--space-4); font-size: 0.875rem;">
                <li>Email address is required</li>
                <li>Password must be at least 8 characters</li>
            </ul>
        </div>
    </div>
</div>
</Preview>

### Success Confirmation

<Preview title="Save Confirmation">
<div style="max-width: 480px;">
    <div class="Alert Alert--success">
        <i class="ph ph-check-circle Alert-icon"></i>
        <div class="Alert-content">
            <strong>Changes saved successfully.</strong> Your profile has been updated.
        </div>
        <button class="Alert-close" aria-label="Dismiss">
            <i class="ph ph-x"></i>
        </button>
    </div>
</div>
</Preview>

### System Banner

<Preview title="System Announcement">
<div style="max-width: 600px;">
    <div class="Alert Alert--warning">
        <i class="ph ph-warning Alert-icon"></i>
        <div class="Alert-content">
            <p class="Alert-title">Scheduled Maintenance</p>
            <p>Services will be unavailable on Sunday 2–4 AM UTC.</p>
            <div class="Alert-actions">
                <button class="Button Button--primary" style="padding: var(--space-1) var(--space-3); font-size: 0.85rem;">Learn More</button>
                <button class="Button" style="padding: var(--space-1) var(--space-3); font-size: 0.85rem;">Dismiss</button>
            </div>
        </div>
    </div>
</div>
</Preview>

### Inline Callout in Documentation

<Preview title="Documentation Callout">
<div style="max-width: 520px;">
    <p style="margin-bottom: var(--space-3); font-size: 0.9rem;">To configure the API, set the following environment variable:</p>
    <div class="Callout Callout--info">
        <i class="ph ph-lightbulb Callout-icon"></i>
        <div class="Callout-content">
            <strong>Tip:</strong> You can also set this in your <code>.env</code> file for local development.
        </div>
    </div>
</div>
</Preview>

---

## Customization

Override alert styles using CSS custom properties:

```css
/* Custom alert colors */
.Alert--brand {
  background-color: oklch(60% 0.15 280 / 0.1);
  border-left: 4px solid oklch(60% 0.15 280);
  color: oklch(40% 0.15 280);
}

/* Compact alerts */
.Alert--compact {
  padding: var(--space-2) var(--space-3);
  font-size: 0.8rem;
}

.Alert--compact .Alert-icon {
  font-size: 1rem;
}

/* Full-width banner style */
.Alert--banner {
  border-radius: 0;
  border-left: none;
  border-right: none;
  text-align: center;
  justify-content: center;
}

/* Custom close button */
.Alert-close:hover {
  background-color: oklch(0% 0 0 / 0.08);
  border-radius: var(--r-s);
}
```

---

## API Reference

### Alert Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Alert</code></td><td class="ApiTable-desc">Base alert container</td></tr>
<tr><td><code class="ApiTable-prop">.Alert--info</code></td><td class="ApiTable-desc">Informational variant (blue)</td></tr>
<tr><td><code class="ApiTable-prop">.Alert--success</code></td><td class="ApiTable-desc">Success variant (green)</td></tr>
<tr><td><code class="ApiTable-prop">.Alert--warning</code></td><td class="ApiTable-desc">Warning variant (yellow)</td></tr>
<tr><td><code class="ApiTable-prop">.Alert--error</code></td><td class="ApiTable-desc">Error variant (red)</td></tr>
<tr><td><code class="ApiTable-prop">.Alert-icon</code></td><td class="ApiTable-desc">Icon container</td></tr>
<tr><td><code class="ApiTable-prop">.Alert-content</code></td><td class="ApiTable-desc">Content wrapper</td></tr>
<tr><td><code class="ApiTable-prop">.Alert-title</code></td><td class="ApiTable-desc">Bold heading text</td></tr>
<tr><td><code class="ApiTable-prop">.Alert-actions</code></td><td class="ApiTable-desc">Button group container</td></tr>
<tr><td><code class="ApiTable-prop">.Alert-close</code></td><td class="ApiTable-desc">Dismiss button</td></tr>
</tbody>
</table>

### Callout Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Callout</code></td><td class="ApiTable-desc">Bordered callout variant</td></tr>
<tr><td><code class="ApiTable-prop">.Callout--info</code></td><td class="ApiTable-desc">Info callout</td></tr>
<tr><td><code class="ApiTable-prop">.Callout--warning</code></td><td class="ApiTable-desc">Warning callout</td></tr>
<tr><td><code class="ApiTable-prop">.Callout-icon</code></td><td class="ApiTable-desc">Callout icon</td></tr>
<tr><td><code class="ApiTable-prop">.Callout-content</code></td><td class="ApiTable-desc">Callout content</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base Alert */
.Alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--r-m);
  border-left: 4px solid var(--bd);
  background-color: var(--bg-s);
  color: var(--fg);
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Variants */
.Alert--info {
  border-left-color: oklch(60% 0.15 250);
  background-color: oklch(60% 0.15 250 / 0.08);
}

.Alert--success {
  border-left-color: oklch(55% 0.15 150);
  background-color: oklch(55% 0.15 150 / 0.08);
}

.Alert--warning {
  border-left-color: oklch(65% 0.15 80);
  background-color: oklch(65% 0.15 80 / 0.08);
}

.Alert--error {
  border-left-color: oklch(55% 0.2 25);
  background-color: oklch(55% 0.2 25 / 0.08);
}

/* Icon */
.Alert-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 1px;
}

.Alert--info .Alert-icon { color: oklch(55% 0.15 250); }
.Alert--success .Alert-icon { color: oklch(50% 0.15 150); }
.Alert--warning .Alert-icon { color: oklch(55% 0.15 80); }
.Alert--error .Alert-icon { color: oklch(50% 0.2 25); }

/* Content */
.Alert-content {
  flex: 1;
  min-width: 0;
}

.Alert-title {
  font-weight: 600;
  margin: 0 0 var(--space-1);
}

.Alert-actions {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

/* Close Button */
.Alert-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  color: var(--fg-3);
  cursor: pointer;
  flex-shrink: 0;
  transition: color 0.15s;
}

.Alert-close:hover {
  color: var(--fg);
}

/* Callout */
.Callout {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  font-size: 0.875rem;
  line-height: 1.5;
}

.Callout--info {
  border-color: oklch(60% 0.15 250 / 0.3);
  background-color: oklch(60% 0.15 250 / 0.05);
}

.Callout--warning {
  border-color: oklch(65% 0.15 80 / 0.3);
  background-color: oklch(65% 0.15 80 / 0.05);
}

.Callout-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.Callout-content {
  flex: 1;
  min-width: 0;
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus to dismiss button or action buttons |
| Enter / Space | Activate dismiss button or action |

### Screen Readers

```html
<!-- Time-sensitive alerts -->
<div class="Alert Alert--error" role="alert">
    <i class="ph ph-x-circle Alert-icon" aria-hidden="true"></i>
    <div class="Alert-content">
        <p>Payment failed. Please try again.</p>
    </div>
</div>

<!-- Informational alerts -->
<div class="Alert Alert--info" role="status">
    <i class="ph ph-info Alert-icon" aria-hidden="true"></i>
    <div class="Alert-content">
        <p>A new version is available.</p>
    </div>
</div>

<!-- Dismissible with accessible close -->
<div class="Alert Alert--success">
    <div class="Alert-content">Changes saved.</div>
    <button class="Alert-close" aria-label="Dismiss">
        <i class="ph ph-x"></i>
    </button>
</div>
```

### Important Guidelines

1. Use `role="alert"` for urgent, time-sensitive messages
2. Use `role="status"` for informational, non-urgent messages
3. Include `aria-hidden="true"` on decorative icons
4. Ensure sufficient color contrast — don't rely on color alone
5. Give users enough time to read auto-dismissing alerts

---

## Best Practices

### Do

- ✓ **Keep messages clear and concise** — Users should understand the issue at a glance
- ✓ **Use the appropriate variant** — Match color and icon to the severity level
- ✓ **Include an icon** — Reinforces meaning beyond color alone
- ✓ **Position alerts prominently** — Place near the relevant content or at the top of the page
- ✓ **Provide actionable guidance** — Tell users what to do next, not just what went wrong
- ✓ **Use role="alert" for urgent messages** — Ensures screen readers announce immediately

### Don't

- ✗ **Stack too many alerts** — More than 2-3 simultaneous alerts overwhelm users
- ✗ **Use alerts for non-essential info** — Reserve for genuinely important messages
- ✗ **Auto-dismiss error alerts** — Users need time to read and act on errors
- ✗ **Use warning/error colors for info** — Misusing severity erodes trust in the system
- ✗ **Hide critical info behind dismissible alerts** — Important content should persist
- ✗ **Rely on color alone** — Always pair with text and/or icons for accessibility
