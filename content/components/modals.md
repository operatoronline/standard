# Modals

Modals are overlay dialogs that require user interaction before returning to the main content. They focus attention on critical information, decisions, or forms.

<Hero>
<!-- stats: 3 Sizes, Focus Trap, Accessible -->
<div class="Card Card--elevated" style="max-width:320px;text-align:center;padding:0">
    <div style="padding:16px 20px;border-bottom:1px solid var(--bd)">
        <strong style="font-size:.9375rem">Confirm Action</strong>
    </div>
    <div style="padding:20px">
        <p style="margin:0 0 16px;font-size:.875rem;color:var(--fg-3)">Are you sure you want to proceed?</p>
        <div style="display:flex;gap:8px;justify-content:flex-end">
            <button class="Button Button--ghost Button--small">Cancel</button>
            <button class="Button Button--primary Button--small">Confirm</button>
        </div>
    </div>
</div>
</Hero>

---

## Installation

Copy the modal CSS from `styles/docs.css` or include the Standard stylesheet:

```html
<link rel="stylesheet" href="standard.min.css">
```

Basic modal structure:

```html
<div class="Modal-overlay">
  <div class="Modal">
    <header class="Modal-header">
      <h2 class="Modal-title">Modal Title</h2>
      <button class="Button Button--icon Button--ghost" aria-label="Close">
        <i class="ph ph-x"></i>
      </button>
    </header>
    <div class="Modal-body">
      <p>Modal content goes here.</p>
    </div>
    <footer class="Modal-footer">
      <button class="Button Button--tertiary">Cancel</button>
      <button class="Button Button--primary">Confirm</button>
    </footer>
  </div>
</div>
```

---

## Usage

Modals use a two-part structure: `.Modal-overlay` for the backdrop and `.Modal` for the dialog itself. Add `.active` or `.Modal-overlay--active` to show the modal.

<Preview>
<div style="position: relative; width: 100%; height: 200px; background: var(--bg-s); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center;">
  <div class="Modal" style="position: relative; transform: none; max-width: 320px;">
    <header class="Modal-header">
      <h2 class="Modal-title">Example Modal</h2>
      <button class="Button Button--icon Button--ghost" aria-label="Close">
        <i class="ph ph-x"></i>
      </button>
    </header>
    <div class="Modal-body">
      <p>This is an example modal dialog.</p>
    </div>
    <footer class="Modal-footer">
      <button class="Button Button--tertiary">Cancel</button>
      <button class="Button Button--primary">Confirm</button>
    </footer>
  </div>
</div>
</Preview>

---

## Examples

### Basic

A simple modal with header, body, and footer actions.

<Preview>
<div style="position: relative; width: 100%; height: 220px; background: oklch(0% 0 0 / 0.5); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center; padding: var(--space-4);">
  <div class="Modal" style="position: relative; transform: none;">
    <header class="Modal-header">
      <h2 class="Modal-title">Save Changes?</h2>
      <button class="Button Button--icon Button--ghost" aria-label="Close">
        <i class="ph ph-x"></i>
      </button>
    </header>
    <div class="Modal-body">
      <p>You have unsaved changes. Would you like to save them before leaving?</p>
    </div>
    <footer class="Modal-footer">
      <button class="Button Button--tertiary">Discard</button>
      <button class="Button Button--primary">Save</button>
    </footer>
  </div>
</div>
</Preview>

### Confirmation

Use danger buttons for destructive actions. Clear messaging helps users understand consequences.

<Preview>
<div style="position: relative; width: 100%; height: 240px; background: oklch(0% 0 0 / 0.5); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center; padding: var(--space-4);">
  <div class="Modal Modal--small" style="position: relative; transform: none;">
    <header class="Modal-header">
      <h2 class="Modal-title">Delete Project?</h2>
      <button class="Button Button--icon Button--ghost" aria-label="Close">
        <i class="ph ph-x"></i>
      </button>
    </header>
    <div class="Modal-body">
      <p>This will permanently delete <strong>"My Project"</strong> and all associated files. This action cannot be undone.</p>
    </div>
    <footer class="Modal-footer">
      <button class="Button Button--secondary">Cancel</button>
      <button class="Button Button--danger">Delete Project</button>
    </footer>
  </div>
</div>
</Preview>

### Form Modal

Modals work great for focused form inputs. Keep forms short — complex flows belong on dedicated pages.

<Preview>
<div style="position: relative; width: 100%; height: 360px; background: oklch(0% 0 0 / 0.5); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center; padding: var(--space-4);">
  <div class="Modal" style="position: relative; transform: none;">
    <header class="Modal-header">
      <h2 class="Modal-title">Create New Workspace</h2>
      <button class="Button Button--icon Button--ghost" aria-label="Close">
        <i class="ph ph-x"></i>
      </button>
    </header>
    <div class="Modal-body">
      <div class="FormField" style="margin-bottom: var(--space-4);">
        <label class="FormField-label">Workspace Name</label>
        <input type="text" class="Input" placeholder="My Workspace">
      </div>
      <div class="FormField">
        <label class="FormField-label">Description</label>
        <input type="text" class="Input" placeholder="Optional description...">
      </div>
    </div>
    <footer class="Modal-footer">
      <button class="Button Button--tertiary">Cancel</button>
      <button class="Button Button--primary">Create Workspace</button>
    </footer>
  </div>
</div>
</Preview>

### Fullscreen

Fullscreen modals take over the entire viewport. Use for immersive experiences or complex multi-step flows.

<Preview>
<div style="position: relative; width: 100%; height: 300px; background: oklch(0% 0 0 / 0.5); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center;">
  <div class="Modal Modal--fullscreen" style="position: relative; transform: none; height: 100%; border-radius: var(--r-m);">
    <header class="Modal-header">
      <h2 class="Modal-title">Document Editor</h2>
      <button class="Button Button--icon Button--ghost" aria-label="Close">
        <i class="ph ph-x"></i>
      </button>
    </header>
    <div class="Modal-body" style="display: flex; align-items: center; justify-content: center; color: var(--fg-3);">
      <p>Fullscreen content area</p>
    </div>
    <footer class="Modal-footer">
      <button class="Button Button--tertiary">Cancel</button>
      <button class="Button Button--primary">Save Document</button>
    </footer>
  </div>
</div>
</Preview>

### Slideout / Drawer

Slide-in panels from the side work well for settings, filters, or detailed information.

<Preview>
<div style="position: relative; width: 100%; height: 280px; background: oklch(0% 0 0 / 0.5); border-radius: var(--r-m); display: flex; justify-content: flex-end; overflow: hidden;">
  <div class="Modal" style="position: relative; transform: none; height: 100%; border-radius: 0; max-width: 320px; border-left: 1px solid var(--bd);">
    <header class="Modal-header">
      <h2 class="Modal-title">Filters</h2>
      <button class="Button Button--icon Button--ghost" aria-label="Close">
        <i class="ph ph-x"></i>
      </button>
    </header>
    <div class="Modal-body">
      <div class="FormField" style="margin-bottom: var(--space-4);">
        <label class="FormField-label">Category</label>
        <select class="Select">
          <option>All Categories</option>
          <option>Design</option>
          <option>Development</option>
        </select>
      </div>
      <div class="FormField">
        <label class="FormField-label">Status</label>
        <select class="Select">
          <option>Any Status</option>
          <option>Active</option>
          <option>Archived</option>
        </select>
      </div>
    </div>
    <footer class="Modal-footer">
      <button class="Button Button--tertiary">Reset</button>
      <button class="Button Button--primary">Apply Filters</button>
    </footer>
  </div>
</div>
</Preview>

### Nested

Open a modal from within another modal. The second modal uses `.Modal-overlay--nested` for higher z-index.

<Preview>
<div style="position: relative; width: 100%; height: 320px; background: oklch(0% 0 0 / 0.5); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center; padding: var(--space-4);">
  <div class="Modal" style="position: relative; transform: none; opacity: 0.6; scale: 0.95;">
    <header class="Modal-header">
      <h2 class="Modal-title">Edit Profile</h2>
    </header>
    <div class="Modal-body">
      <p>Primary modal content...</p>
    </div>
  </div>
  <div class="Modal Modal--small" style="position: absolute; transform: none;">
    <header class="Modal-header">
      <h2 class="Modal-title">Discard Changes?</h2>
      <button class="Button Button--icon Button--ghost" aria-label="Close">
        <i class="ph ph-x"></i>
      </button>
    </header>
    <div class="Modal-body">
      <p>You have unsaved changes. Are you sure you want to close?</p>
    </div>
    <footer class="Modal-footer">
      <button class="Button Button--tertiary">Keep Editing</button>
      <button class="Button Button--danger">Discard</button>
    </footer>
  </div>
</div>
</Preview>

### Image Lightbox

Display images in a focused, centered view with minimal chrome.

<Preview>
<div style="position: relative; width: 100%; height: 280px; background: oklch(0% 0 0 / 0.85); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center; padding: var(--space-4);">
  <button class="Button Button--icon Button--ghost" style="position: absolute; top: var(--space-3); right: var(--space-3); color: white;" aria-label="Close">
    <i class="ph ph-x"></i>
  </button>
  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop" alt="Mountain landscape" style="max-width: 100%; max-height: 220px; border-radius: var(--r-m); object-fit: cover;" loading="lazy" decoding="async">
  <button class="Button Button--icon Button--ghost" style="position: absolute; left: var(--space-3); color: white;" aria-label="Previous">
    <i class="ph ph-caret-left"></i>
  </button>
  <button class="Button Button--icon Button--ghost" style="position: absolute; right: var(--space-3); color: white;" aria-label="Next">
    <i class="ph ph-caret-right"></i>
  </button>
</div>
</Preview>

### Video Modal

Embed video content with playback controls.

<Preview>
<div style="position: relative; width: 100%; height: 280px; background: oklch(0% 0 0 / 0.85); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center; padding: var(--space-6);">
  <button class="Button Button--icon Button--ghost" style="position: absolute; top: var(--space-3); right: var(--space-3); color: white;" aria-label="Close">
    <i class="ph ph-x"></i>
  </button>
  <div style="width: 100%; max-width: 480px; aspect-ratio: 16/9; background: oklch(10% 0 0); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center;">
    <button class="Button Button--icon Button--primary Button--large" aria-label="Play video">
      <i class="ph ph-play-fill"></i>
    </button>
  </div>
</div>
</Preview>

---

## Sizes

Modals come in three sizes: small, medium (default), and large. Fullscreen is also available.

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
  <div class="Modal Modal--small" style="position: relative; transform: none; margin: 0 auto;">
    <header class="Modal-header">
      <h2 class="Modal-title">Small (360px)</h2>
    </header>
    <div class="Modal-body">
      <p>Compact dialogs</p>
    </div>
  </div>
  <div class="Modal" style="position: relative; transform: none; margin: 0 auto;">
    <header class="Modal-header">
      <h2 class="Modal-title">Medium (480px) — Default</h2>
    </header>
    <div class="Modal-body">
      <p>Standard modal width</p>
    </div>
  </div>
  <div class="Modal Modal--large" style="position: relative; transform: none; margin: 0 auto; max-width: 100%;">
    <header class="Modal-header">
      <h2 class="Modal-title">Large (720px)</h2>
    </header>
    <div class="Modal-body">
      <p>For complex content or forms</p>
    </div>
  </div>
</div>
</Preview>

---

## Common Patterns

### Confirmation Before Delete

<Preview title="Delete Confirmation">
    <div style="position: relative; width: 100%; height: 220px; background: oklch(0% 0 0 / 0.5); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center; padding: var(--space-4);">
        <div class="Modal Modal--small" style="position: relative; transform: none;">
            <header class="Modal-header">
                <h2 class="Modal-title">
                    <i class="ph ph-warning" style="color: oklch(55% 0.2 25); margin-right: var(--space-2);"></i>
                    Delete 3 items?
                </h2>
            </header>
            <div class="Modal-body">
                <p>This will permanently remove the selected items. This action cannot be undone.</p>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--secondary">Cancel</button>
                <button class="Button Button--danger">Delete Items</button>
            </footer>
        </div>
    </div>
</Preview>

### Success Feedback Modal

<Preview title="Success Modal">
    <div style="position: relative; width: 100%; height: 220px; background: oklch(0% 0 0 / 0.5); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center; padding: var(--space-4);">
        <div class="Modal Modal--small" style="position: relative; transform: none; text-align: center;">
            <div class="Modal-body" style="padding-top: var(--space-6);">
                <i class="ph ph-check-circle" style="font-size: 3rem; color: oklch(55% 0.15 150); margin-bottom: var(--space-3);"></i>
                <h3 style="margin: 0 0 var(--space-2);">Payment Successful</h3>
                <p style="color: var(--fg-3);">Your order has been confirmed and will ship within 2 business days.</p>
            </div>
            <footer class="Modal-footer" style="justify-content: center;">
                <button class="Button Button--primary">View Order</button>
            </footer>
        </div>
    </div>
</Preview>

### Modal with Scrollable Content

<Preview title="Terms & Conditions Modal">
    <div style="position: relative; width: 100%; height: 280px; background: oklch(0% 0 0 / 0.5); border-radius: var(--r-m); display: flex; align-items: center; justify-content: center; padding: var(--space-4);">
        <div class="Modal" style="position: relative; transform: none; max-height: 250px; display: flex; flex-direction: column;">
            <header class="Modal-header">
                <h2 class="Modal-title">Terms of Service</h2>
                <button class="Button Button--icon Button--ghost" aria-label="Close"><i class="ph ph-x"></i></button>
            </header>
            <div class="Modal-body" style="overflow-y: auto; flex: 1; font-size: 0.85rem; color: var(--fg-3);">
                <p>By using this service you agree to the following terms and conditions. Please read carefully before proceeding.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <footer class="Modal-footer">
                <button class="Button Button--secondary">Decline</button>
                <button class="Button Button--primary">I Agree</button>
            </footer>
        </div>
    </div>
</Preview>

---

## Customization

Override modal styles using CSS custom properties:

```css
/* Custom modal width */
.Modal--custom {
  max-width: 600px;
}

/* Custom overlay color */
.Modal-overlay--branded {
  background-color: oklch(25% 0.05 250 / 0.8);
}

/* Remove backdrop blur for performance */
.Modal-overlay--no-blur {
  backdrop-filter: none;
}

/* Slide-in from side animation */
.Modal-overlay--slideout .Modal {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 400px;
  height: 100%;
  border-radius: 0;
  transform: translateX(100%);
}

.Modal-overlay--slideout.active .Modal {
  transform: translateX(0);
}

/* Centered content variant */
.Modal--centered .Modal-header {
  text-align: center;
  justify-content: center;
}

.Modal--centered .Modal-body {
  text-align: center;
}

.Modal--centered .Modal-footer {
  justify-content: center;
}
```

---

## API Reference

### Overlay Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Modal-overlay</code></td>
<td class="ApiTable-desc">Full-screen backdrop with centering</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal-overlay.active</code></td>
<td class="ApiTable-desc">Shows the modal (visible, interactive)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal-overlay--active</code></td>
<td class="ApiTable-desc">Alternative active class</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal-overlay--nested</code></td>
<td class="ApiTable-desc">Higher z-index for stacked modals</td>
</tr>
</tbody>
</table>

### Modal Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Modal</code></td>
<td class="ApiTable-desc">Modal container (required)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal--small</code></td>
<td class="ApiTable-desc">Small modal (360px max-width)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal--large</code></td>
<td class="ApiTable-desc">Large modal (720px max-width)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal--fullscreen</code></td>
<td class="ApiTable-desc">Full viewport modal</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal--centered</code></td>
<td class="ApiTable-desc">Center-aligned header and content</td>
</tr>
</tbody>
</table>

### Structure Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Modal-header</code></td>
<td class="ApiTable-desc">Header area with title and close button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal-title</code></td>
<td class="ApiTable-desc">Modal heading text</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal-body</code></td>
<td class="ApiTable-desc">Main content area (scrollable)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal-body--scrollable</code></td>
<td class="ApiTable-desc">Explicit scrollable body</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Modal-footer</code></td>
<td class="ApiTable-desc">Action buttons area</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Modal Overlay */
.Modal-overlay {
  position: fixed;
  inset: 0;
  background: oklch(0% 0 0 / 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--dur-n), visibility var(--dur-n);
}

.Modal-overlay.active,
.Modal-overlay--active {
  opacity: 1;
  visibility: visible;
}

.Modal-overlay--nested {
  z-index: 1001;
}

/* Modal Container */
.Modal {
  background: var(--bg);
  border: 1px solid var(--bd);
  border-radius: var(--r-l);
  box-shadow: 0 8px 32px oklch(0% 0 0 / 0.15);
  max-width: 480px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  transform: translateY(-8px);
  transition: transform var(--dur-n);
}

.Modal-overlay.active .Modal {
  transform: translateY(0);
}

/* Sizes */
.Modal--small { max-width: 360px; }
.Modal--large { max-width: 720px; }
.Modal--fullscreen {
  max-width: 100%;
  max-height: 100%;
  height: 100vh;
  border-radius: 0;
}

/* Header */
.Modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid var(--bd);
}

.Modal-title {
  font-size: var(--fs-2xl);
  font-weight: 600;
  margin: 0;
}

/* Body */
.Modal-body {
  padding: var(--space-4) var(--space-5);
  flex: 1;
  overflow-y: auto;
}

.Modal-body p {
  margin: 0 0 var(--space-3);
  line-height: 1.5;
  color: var(--fg-3);
}

.Modal-body p:last-child {
  margin-bottom: 0;
}

/* Footer */
.Modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  border-top: 1px solid var(--bd);
}

/* Centered variant */
.Modal--centered .Modal-header { text-align: center; justify-content: center; }
.Modal--centered .Modal-body { text-align: center; }
.Modal--centered .Modal-footer { justify-content: center; }
```

---

## Accessibility

Proper modal accessibility ensures all users can interact with your dialogs, including those using keyboards and screen readers.

### Focus Management

```html
<!-- Modal should trap focus when open -->
<div class="Modal-overlay active" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="Modal">
    <header class="Modal-header">
      <h2 class="Modal-title" id="modal-title">Accessible Modal</h2>
      <button class="Button Button--icon Button--ghost" aria-label="Close modal">
        <i class="ph ph-x"></i>
      </button>
    </header>
    <div class="Modal-body">
      <p>First focusable element receives focus on open.</p>
      <input type="text" class="Input" placeholder="Focus starts here">
    </div>
    <footer class="Modal-footer">
      <button class="Button Button--tertiary">Cancel</button>
      <button class="Button Button--primary">Submit</button>
    </footer>
  </div>
</div>
```

### Focus Trap

Keep focus within the modal while open. Tab cycles through focusable elements without escaping to background content.

```javascript
// Basic focus trap implementation
function trapFocus(modal) {
  const focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}
```

### Escape Key

Allow users to close the modal by pressing Escape.

```javascript
function handleEscapeKey(modal, closeCallback) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCallback();
    }
  });
}
```

### ARIA Attributes

| Attribute | Element | Description |
|-----------|---------|-------------|
| `role="dialog"` | `.Modal-overlay` | Identifies as a dialog |
| `aria-modal="true"` | `.Modal-overlay` | Indicates modal behavior |
| `aria-labelledby` | `.Modal-overlay` | Points to title ID |
| `aria-describedby` | `.Modal-overlay` | Points to description (optional) |
| `aria-label` | Close button | Describes the button action |

### Screen Reader Announcements

```html
<!-- Use aria-live for dynamic content -->
<div class="Modal-body">
  <div aria-live="polite" aria-atomic="true">
    <!-- Dynamic messages announced to screen readers -->
    <p class="Alert Alert--success">Changes saved successfully!</p>
  </div>
</div>
```

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus to next focusable element |
| Shift + Tab | Move focus to previous focusable element |
| Escape | Close the modal |
| Enter | Activate focused button |

### Return Focus

When the modal closes, return focus to the element that triggered it.

```javascript
let triggerElement = null;

function openModal(modal, trigger) {
  triggerElement = trigger;
  modal.classList.add('active');
  modal.querySelector('input, button')?.focus();
}

function closeModal(modal) {
  modal.classList.remove('active');
  triggerElement?.focus();
  triggerElement = null;
}
```

---

## Best Practices

### Do

- ✓ **Use clear, specific titles** — "Delete Project?" not "Confirm"
- ✓ **Keep content concise** — Modals interrupt flow, respect users' time
- ✓ **Provide obvious exit paths** — Close button, Cancel action, Escape key
- ✓ **Trap focus** — Keep keyboard navigation within the modal
- ✓ **Return focus** — On close, focus returns to the trigger element
- ✓ **Prevent background scroll** — Body shouldn't scroll when modal is open
- ✓ **Match button order to reading flow** — Primary action on the right
- ✓ **Use danger styling** — Red buttons for destructive actions

### Don't

- ✗ **Stack too many modals** — Two max; consider page navigation instead
- ✗ **Use for complex flows** — Long forms belong on dedicated pages
- ✗ **Auto-open modals on page load** — Let users initiate the interaction
- ✗ **Hide the close button** — Users must always be able to dismiss
- ✗ **Put critical content in modals** — Important info should be on the page
- ✗ **Use vague actions** — "OK" and "Cancel" don't describe what happens
- ✗ **Forget mobile** — Ensure modals work on small screens
- ✗ **Block background interaction permanently** — Always provide an exit
