# Toasts

Toasts provide brief, non-blocking notifications that appear temporarily.

## Basic Toast

<Preview title="Basic Toast">
    <div class="Toast">
        <span class="Toast-message">Your changes have been saved.</span>
    </div>
</Preview>

```html
<div class="Toast">
    <span class="Toast-message">Your changes have been saved.</span>
</div>
```

## With Icon

<Preview title="Toast with Icon">
    <div class="Toast">
        <i class="ph ph-check-circle Toast-icon"></i>
        <span class="Toast-message">Successfully uploaded!</span>
    </div>
</Preview>

```html
<div class="Toast">
    <i class="ph ph-check-circle Toast-icon"></i>
    <span class="Toast-message">Successfully uploaded!</span>
</div>
```

## Variants

Toasts support semantic variants for different message types.

<Preview title="Toast Variants">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div class="Toast Toast--success">
            <i class="ph ph-check-circle Toast-icon"></i>
            <span class="Toast-message">Operation completed successfully.</span>
        </div>
        <div class="Toast Toast--error">
            <i class="ph ph-x-circle Toast-icon"></i>
            <span class="Toast-message">Something went wrong. Please try again.</span>
        </div>
        <div class="Toast Toast--warning">
            <i class="ph ph-warning Toast-icon"></i>
            <span class="Toast-message">Your session will expire in 5 minutes.</span>
        </div>
        <div class="Toast Toast--info">
            <i class="ph ph-info Toast-icon"></i>
            <span class="Toast-message">New version available. Refresh to update.</span>
        </div>
    </div>
</Preview>

```html
<div class="Toast Toast--success">...</div>
<div class="Toast Toast--error">...</div>
<div class="Toast Toast--warning">...</div>
<div class="Toast Toast--info">...</div>
```

## With Action

Toasts can include a single action button.

<Preview title="Toast with Action">
    <div class="Toast">
        <span class="Toast-message">Message archived.</span>
        <button class="Toast-action">Undo</button>
    </div>
</Preview>

```html
<div class="Toast">
    <span class="Toast-message">Message archived.</span>
    <button class="Toast-action">Undo</button>
</div>
```

## With Close Button

<Preview title="Dismissible Toast">
    <div class="Toast">
        <span class="Toast-message">3 items selected.</span>
        <button class="Toast-close" aria-label="Dismiss">
            <i class="ph ph-x"></i>
        </button>
    </div>
</Preview>

```html
<div class="Toast">
    <span class="Toast-message">3 items selected.</span>
    <button class="Toast-close" aria-label="Dismiss">
        <i class="ph ph-x"></i>
    </button>
</div>
```

## Toast Container

Toasts are positioned using a container, typically at the bottom-right.

```html
<div class="Toast-container">
    <div class="Toast">...</div>
    <div class="Toast">...</div>
</div>
```

```css
.Toast-container {
    position: fixed;
    bottom: 24px;
    right: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 1100;
}
```

## JavaScript

Basic toast management:

```js
function showToast(message, variant = 'default', duration = 4000) {
    const container = document.querySelector('.Toast-container') 
        || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `Toast Toast--${variant}`;
    toast.innerHTML = `<span class="Toast-message">${message}</span>`;
    
    container.appendChild(toast);
    
    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('active'));
    
    // Auto-dismiss
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}
```

---

## Common Patterns

### Save Confirmation

<Preview title="Save Confirmation Toast">
    <div class="Toast Toast--success">
        <i class="ph ph-check-circle Toast-icon"></i>
        <span class="Toast-message">Changes saved successfully.</span>
    </div>
</Preview>

### Undo Action

<Preview title="Undo Toast">
    <div class="Toast">
        <span class="Toast-message">3 messages moved to trash.</span>
        <button class="Toast-action">Undo</button>
        <button class="Toast-close" aria-label="Dismiss"><i class="ph ph-x"></i></button>
    </div>
</Preview>

### Stacked Notifications

<Preview title="Toast Stack">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); align-items: flex-end;">
        <div class="Toast Toast--success">
            <i class="ph ph-check-circle Toast-icon"></i>
            <span class="Toast-message">File uploaded.</span>
        </div>
        <div class="Toast Toast--info">
            <i class="ph ph-info Toast-icon"></i>
            <span class="Toast-message">2 new comments on your post.</span>
            <button class="Toast-action">View</button>
        </div>
        <div class="Toast Toast--warning">
            <i class="ph ph-warning Toast-icon"></i>
            <span class="Toast-message">Session expires in 5 minutes.</span>
        </div>
    </div>
</Preview>

### Error with Retry

<Preview title="Error Toast with Retry">
    <div class="Toast Toast--error">
        <i class="ph ph-x-circle Toast-icon"></i>
        <span class="Toast-message">Failed to send message.</span>
        <button class="Toast-action">Retry</button>
        <button class="Toast-close" aria-label="Dismiss"><i class="ph ph-x"></i></button>
    </div>
</Preview>

---

## Customization

Override toast styles using CSS custom properties:

```css
/* Custom toast width */
.Toast {
  --toast-max-width: 480px;
  max-width: var(--toast-max-width);
}

/* Custom success color */
.Toast--success {
  --toast-accent: oklch(55% 0.2 150);
  border-left: 3px solid var(--toast-accent);
}

/* Dark toast style */
.Toast--dark {
  background: var(--fg);
  color: var(--bg);
}
.Toast--dark .Toast-action {
  color: var(--accent);
}

/* Toast slide-in animation */
@keyframes toast-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.Toast.active {
  animation: toast-in 0.3s ease;
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
<td><code class="ApiTable-prop">.Toast</code></td>
<td class="ApiTable-desc">Base toast container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toast-icon</code></td>
<td class="ApiTable-desc">Leading icon</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toast-message</code></td>
<td class="ApiTable-desc">Message text content</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toast-action</code></td>
<td class="ApiTable-desc">Optional action button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toast-close</code></td>
<td class="ApiTable-desc">Dismiss button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toast-container</code></td>
<td class="ApiTable-desc">Fixed positioning wrapper for stacking toasts</td>
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
<td><code class="ApiTable-prop">.Toast--success</code></td>
<td class="ApiTable-desc">Green success variant</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toast--error</code></td>
<td class="ApiTable-desc">Red error variant</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toast--warning</code></td>
<td class="ApiTable-desc">Yellow warning variant</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Toast--info</code></td>
<td class="ApiTable-desc">Blue informational variant</td>
</tr>
</tbody>
</table>

### Modifier Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Toast.active</code></td>
<td class="ApiTable-desc">Visible/animated state</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base toast */
.Toast {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--bg);
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  box-shadow: var(--sh-l);
  font-size: var(--fs-sm);
  min-width: 280px;
  max-width: 420px;
}

/* Icon */
.Toast-icon {
  flex-shrink: 0;
  font-size: var(--fs-3xl);
}

/* Message */
.Toast-message {
  flex: 1;
  color: var(--fg);
}

/* Action button */
.Toast-action {
  flex-shrink: 0;
  background: none;
  border: none;
  color: var(--accent);
  font-weight: 600;
  font-size: var(--fs-sm);
  cursor: pointer;
  padding: var(--space-1) var(--space-2);
}
.Toast-action:hover {
  text-decoration: underline;
}

/* Close button */
.Toast-close {
  flex-shrink: 0;
  background: none;
  border: none;
  color: var(--fg-3);
  cursor: pointer;
  padding: var(--space-1);
  display: flex;
  align-items: center;
}
.Toast-close:hover {
  color: var(--fg);
}

/* Variants */
.Toast--success {
  border-left: 3px solid oklch(55% 0.15 150);
}
.Toast--success .Toast-icon {
  color: oklch(55% 0.15 150);
}

.Toast--error {
  border-left: 3px solid oklch(55% 0.2 25);
}
.Toast--error .Toast-icon {
  color: oklch(55% 0.2 25);
}

.Toast--warning {
  border-left: 3px solid oklch(70% 0.15 80);
}
.Toast--warning .Toast-icon {
  color: oklch(70% 0.15 80);
}

.Toast--info {
  border-left: 3px solid var(--accent);
}
.Toast--info .Toast-icon {
  color: var(--accent);
}

/* Container */
.Toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1100;
}

/* Animation */
.Toast.active {
  animation: toast-slide-in 0.3s ease;
}

@keyframes toast-slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

---

## Accessibility

- Use `role="status"` for non-critical toasts (informational, success)
- Use `role="alert"` for urgent toasts (errors, warnings)
- Include `aria-live="polite"` for standard notifications
- Include `aria-live="assertive"` for critical notifications
- Ensure auto-dismiss timing is sufficient (4-7 seconds minimum)
- Provide dismiss button for toasts with longer content
- Icons should have `aria-hidden="true"` when message is clear

### Example with ARIA

```html
<div class="Toast Toast--success" role="status" aria-live="polite">
    <i class="ph ph-check-circle Toast-icon" aria-hidden="true"></i>
    <span class="Toast-message">File uploaded successfully.</span>
</div>
```

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus to action/close button |
| Enter / Space | Activate focused button |
| Escape | Dismiss toast (when focused) |

---

## Best Practices

### Do

- ✓ **Keep messages brief** — One line, scannable at a glance
- ✓ **Use appropriate variants** — Match color to message severity
- ✓ **Provide undo actions** — Especially for destructive operations
- ✓ **Stack vertically** — Multiple toasts should stack, newest on top
- ✓ **Allow enough read time** — 4-7 seconds minimum before auto-dismiss
- ✓ **Include close buttons** — Let users dismiss manually

### Don't

- ✗ **Show more than 3 at once** — Queue excess toasts
- ✗ **Use for critical errors** — Use modals or inline alerts instead
- ✗ **Auto-dismiss errors** — Error toasts should persist until dismissed
- ✗ **Include lengthy text** — Keep to one sentence, two max
- ✗ **Use for confirmations** — Decisions need modals, not toasts
- ✗ **Block interaction** — Toasts should never cover important UI
