# Dropdowns

Dropdowns display a list of actions or options when triggered. They help declutter interfaces by hiding secondary actions until needed.

---

## Installation

Copy the dropdown CSS from `styles/docs.css` or include the Standard stylesheet:

```html
<link rel="stylesheet" href="standard.min.css">
```

Then use dropdown classes in your HTML:

```html
<div class="Dropdown">
    <button class="Button Dropdown-trigger">Options <i class="ph ph-caret-down"></i></button>
    <div class="Dropdown-menu">
        <a href="#" class="Dropdown-item">Edit</a>
        <a href="#" class="Dropdown-item">Delete</a>
    </div>
</div>
```

---

## Usage

Wrap a trigger and menu in `.Dropdown`. The trigger toggles the `.Dropdown-menu` visibility.

<Preview>
<div class="Dropdown">
    <button class="Button Button--secondary Dropdown-trigger">
        Options
        <i class="ph ph-caret-down"></i>
    </button>
    <div class="Dropdown-menu" style="position: relative; display: block; margin-top: var(--space-2);">
        <a href="#" class="Dropdown-item">Edit</a>
        <a href="#" class="Dropdown-item">Duplicate</a>
        <a href="#" class="Dropdown-item">Archive</a>
    </div>
</div>
</Preview>

---

## Examples

### Basic Dropdown

A simple dropdown with action items and a divider.

<Preview>
<div class="Dropdown">
    <button class="Button Button--secondary Dropdown-trigger">
        Actions
        <i class="ph ph-caret-down"></i>
    </button>
    <div class="Dropdown-menu" style="position: relative; display: block; margin-top: var(--space-2);">
        <a href="#" class="Dropdown-item">Edit</a>
        <a href="#" class="Dropdown-item">Duplicate</a>
        <a href="#" class="Dropdown-item">Archive</a>
        <hr class="Dropdown-divider">
        <a href="#" class="Dropdown-item Dropdown-item--danger">Delete</a>
    </div>
</div>
</Preview>

### With Icons

Add icons to dropdown items for visual reinforcement.

<Preview>
<div class="Dropdown-menu" style="position: relative; display: block; width: 200px;">
    <a href="#" class="Dropdown-item">
        <i class="ph ph-pencil"></i>
        <span>Edit</span>
    </a>
    <a href="#" class="Dropdown-item">
        <i class="ph ph-copy"></i>
        <span>Duplicate</span>
    </a>
    <a href="#" class="Dropdown-item">
        <i class="ph ph-archive"></i>
        <span>Archive</span>
    </a>
    <hr class="Dropdown-divider">
    <a href="#" class="Dropdown-item Dropdown-item--danger">
        <i class="ph ph-trash"></i>
        <span>Delete</span>
    </a>
</div>
</Preview>

### With Sections

Group related items using headers and dividers.

<Preview>
<div class="Dropdown-menu" style="position: relative; display: block; width: 220px;">
    <div class="Dropdown-header">Actions</div>
    <a href="#" class="Dropdown-item">Edit profile</a>
    <a href="#" class="Dropdown-item">Preferences</a>
    <hr class="Dropdown-divider">
    <div class="Dropdown-header">Account</div>
    <a href="#" class="Dropdown-item">Billing</a>
    <a href="#" class="Dropdown-item">Team members</a>
    <hr class="Dropdown-divider">
    <a href="#" class="Dropdown-item Dropdown-item--danger">Sign out</a>
</div>
</Preview>

### Checkable Items

Use for multi-select or toggle options within a dropdown.

<Preview>
<div class="Dropdown-menu" style="position: relative; display: block; width: 180px;">
    <label class="Dropdown-item Dropdown-item--check">
        <input type="checkbox" checked>
        <span>Show sidebar</span>
    </label>
    <label class="Dropdown-item Dropdown-item--check">
        <input type="checkbox" checked>
        <span>Show toolbar</span>
    </label>
    <label class="Dropdown-item Dropdown-item--check">
        <input type="checkbox">
        <span>Compact mode</span>
    </label>
</div>
</Preview>

### Icon Button Trigger

Common pattern for contextual action menus.

<Preview>
<div style="display: flex; gap: var(--space-4); align-items: flex-start;">
    <div class="Dropdown">
        <button class="Button Button--icon Button--secondary Dropdown-trigger" aria-label="More options">
            <i class="ph ph-dots-three"></i>
        </button>
    </div>
    <div class="Dropdown">
        <button class="Button Button--icon Button--secondary Dropdown-trigger" aria-label="More options">
            <i class="ph ph-dots-three-vertical"></i>
        </button>
    </div>
</div>
</Preview>

### With Descriptions

Add helper text to clarify actions.

<Preview>
<div class="Dropdown-menu" style="position: relative; display: block; width: 260px;">
    <a href="#" class="Dropdown-item Dropdown-item--descriptive">
        <div class="Dropdown-item-content">
            <span class="Dropdown-item-label">Public</span>
            <span class="Dropdown-item-description">Anyone can view this item</span>
        </div>
    </a>
    <a href="#" class="Dropdown-item Dropdown-item--descriptive">
        <div class="Dropdown-item-content">
            <span class="Dropdown-item-label">Private</span>
            <span class="Dropdown-item-description">Only you can view this item</span>
        </div>
    </a>
    <a href="#" class="Dropdown-item Dropdown-item--descriptive">
        <div class="Dropdown-item-content">
            <span class="Dropdown-item-label">Team only</span>
            <span class="Dropdown-item-description">Only team members can view</span>
        </div>
    </a>
</div>
</Preview>

### With Keyboard Shortcuts

Display keyboard shortcuts alongside actions.

<Preview>
<div class="Dropdown-menu" style="position: relative; display: block; width: 220px;">
    <a href="#" class="Dropdown-item">
        <span>Undo</span>
        <kbd class="Dropdown-shortcut">⌘Z</kbd>
    </a>
    <a href="#" class="Dropdown-item">
        <span>Redo</span>
        <kbd class="Dropdown-shortcut">⌘⇧Z</kbd>
    </a>
    <hr class="Dropdown-divider">
    <a href="#" class="Dropdown-item">
        <span>Cut</span>
        <kbd class="Dropdown-shortcut">⌘X</kbd>
    </a>
    <a href="#" class="Dropdown-item">
        <span>Copy</span>
        <kbd class="Dropdown-shortcut">⌘C</kbd>
    </a>
    <a href="#" class="Dropdown-item">
        <span>Paste</span>
        <kbd class="Dropdown-shortcut">⌘V</kbd>
    </a>
</div>
</Preview>

---

## JavaScript

Basic toggle logic for dropdown interaction:

```js
document.querySelectorAll('.Dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.Dropdown-trigger');
    const menu = dropdown.querySelector('.Dropdown-menu');
    
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        // Close other dropdowns
        document.querySelectorAll('.Dropdown-menu.is-open').forEach(m => {
            if (m !== menu) m.classList.remove('is-open');
        });
        menu.classList.toggle('is-open');
    });
});

// Close on outside click
document.addEventListener('click', () => {
    document.querySelectorAll('.Dropdown-menu.is-open')
        .forEach(m => m.classList.remove('is-open'));
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.Dropdown-menu.is-open')
            .forEach(m => m.classList.remove('is-open'));
    }
});
```

---

## Common Patterns

### User Account Menu

<Preview>
<div class="Dropdown-menu" style="position: relative; display: block; width: 240px;">
    <div style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--border-color);">
        <div style="font-weight: 500;">John Doe</div>
        <div style="font-size: 0.875rem; color: var(--fg-3);">john@example.com</div>
    </div>
    <a href="#" class="Dropdown-item">
        <i class="ph ph-user"></i>
        <span>Profile</span>
    </a>
    <a href="#" class="Dropdown-item">
        <i class="ph ph-gear"></i>
        <span>Settings</span>
    </a>
    <a href="#" class="Dropdown-item">
        <i class="ph ph-credit-card"></i>
        <span>Billing</span>
    </a>
    <hr class="Dropdown-divider">
    <a href="#" class="Dropdown-item Dropdown-item--danger">
        <i class="ph ph-sign-out"></i>
        <span>Sign out</span>
    </a>
</div>
</Preview>

### Table Row Actions

<Preview>
<div style="display: flex; gap: var(--space-4);">
    <div class="Dropdown">
        <button class="Button Button--icon Button--ghost Button--small Dropdown-trigger" aria-label="Row actions">
            <i class="ph ph-dots-three"></i>
        </button>
    </div>
    <div class="Dropdown-menu" style="position: relative; display: block; width: 160px;">
        <a href="#" class="Dropdown-item">
            <i class="ph ph-eye"></i>
            <span>View</span>
        </a>
        <a href="#" class="Dropdown-item">
            <i class="ph ph-pencil"></i>
            <span>Edit</span>
        </a>
        <hr class="Dropdown-divider">
        <a href="#" class="Dropdown-item Dropdown-item--danger">
            <i class="ph ph-trash"></i>
            <span>Delete</span>
        </a>
    </div>
</div>
</Preview>

---

## Customization

Override dropdown styles using CSS custom properties:

```css
/* Custom dropdown menu width */
.Dropdown-menu {
  --dropdown-min-width: 280px;
  min-width: var(--dropdown-min-width);
}

/* Custom item colors */
.Dropdown-item {
  --dropdown-item-hover: oklch(95% 0.02 250);
}

.Dropdown-item:hover {
  background: var(--dropdown-item-hover);
}

/* Custom danger color */
.Dropdown-item--danger {
  --dropdown-danger: oklch(55% 0.2 25);
  color: var(--dropdown-danger);
}

/* Rounded menu */
.Dropdown-menu--rounded {
  border-radius: var(--space-3);
}
```

---

## API Reference

### Container Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Dropdown</code></td>
<td class="ApiTable-desc">Container for dropdown trigger and menu</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Dropdown-trigger</code></td>
<td class="ApiTable-desc">Element that toggles the dropdown (add to button)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Dropdown-menu</code></td>
<td class="ApiTable-desc">The dropdown menu panel</td>
</tr>
</tbody>
</table>

### Menu Item Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Dropdown-item</code></td>
<td class="ApiTable-desc">Individual menu item (link or button)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Dropdown-item--danger</code></td>
<td class="ApiTable-desc">Destructive action styling (red)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Dropdown-item--check</code></td>
<td class="ApiTable-desc">Checkable item with checkbox input</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Dropdown-item--descriptive</code></td>
<td class="ApiTable-desc">Item with description text</td>
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
<td><code class="ApiTable-prop">.Dropdown-header</code></td>
<td class="ApiTable-desc">Section header label</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Dropdown-divider</code></td>
<td class="ApiTable-desc">Horizontal separator between items</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Dropdown-shortcut</code></td>
<td class="ApiTable-desc">Keyboard shortcut display (use with <code>&lt;kbd&gt;</code>)</td>
</tr>
</tbody>
</table>

### State Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.is-open</code></td>
<td class="ApiTable-desc">Shows the dropdown menu (add via JS)</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Container */
.Dropdown {
  position: relative;
  display: inline-block;
}

/* Menu */
.Dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  min-width: 180px;
  padding: var(--space-1) 0;
  background: var(--bg);
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  box-shadow: 0 4px 12px oklch(0% 0 0 / 0.12);
  display: none;
  margin-top: var(--space-1);
}

.Dropdown-menu.is-open {
  display: block;
}

/* Items */
.Dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  color: var(--fg);
  text-decoration: none;
  font-size: var(--fs-lg);
  cursor: pointer;
  transition: background var(--dur-f);
}

.Dropdown-item:hover {
  background: var(--bg-s);
}

.Dropdown-item--danger {
  color: oklch(55% 0.2 25);
}

.Dropdown-item--danger:hover {
  background: oklch(55% 0.2 25 / 0.08);
}

/* Checkable items */
.Dropdown-item--check {
  cursor: pointer;
}

.Dropdown-item--check input {
  margin: 0;
}

/* Descriptive items */
.Dropdown-item--descriptive {
  padding: var(--space-2) var(--space-3);
}

.Dropdown-item-content {
  display: flex;
  flex-direction: column;
}

.Dropdown-item-label {
  font-weight: 500;
}

.Dropdown-item-description {
  font-size: var(--fs-md);
  color: var(--fg-3);
}

/* Divider */
.Dropdown-divider {
  border: none;
  border-top: 1px solid var(--bd);
  margin: var(--space-1) 0;
}

/* Header */
.Dropdown-header {
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--fg-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Keyboard shortcut */
.Dropdown-shortcut {
  margin-left: auto;
  font-size: var(--fs-sm);
  color: var(--fg-3);
  font-family: var(--font-sans);
}

/* Trigger caret */
.Dropdown-trigger i.ph-caret-down {
  font-size: var(--fs-md);
  transition: transform var(--dur-f);
}

.Dropdown-trigger[aria-expanded="true"] i.ph-caret-down {
  transform: rotate(180deg);
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Enter / Space | Opens dropdown, activates focused item |
| Escape | Closes dropdown |
| Arrow Down | Moves focus to next item |
| Arrow Up | Moves focus to previous item |
| Home | Moves focus to first item |
| End | Moves focus to last item |
| Tab | Closes dropdown, moves to next element |

### ARIA Attributes

```html
<!-- Proper dropdown markup -->
<div class="Dropdown">
    <button 
        class="Button Dropdown-trigger"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="dropdown-menu-1"
    >
        Options
        <i class="ph ph-caret-down" aria-hidden="true"></i>
    </button>
    <div 
        class="Dropdown-menu" 
        id="dropdown-menu-1"
        role="menu"
        aria-labelledby="dropdown-trigger-1"
    >
        <a href="#" class="Dropdown-item" role="menuitem">Edit</a>
        <a href="#" class="Dropdown-item" role="menuitem">Duplicate</a>
        <hr class="Dropdown-divider" role="separator">
        <a href="#" class="Dropdown-item Dropdown-item--danger" role="menuitem">Delete</a>
    </div>
</div>

<!-- When open, update aria-expanded -->
<button aria-expanded="true">...</button>

<!-- Checkable items use menuitemcheckbox -->
<label class="Dropdown-item Dropdown-item--check" role="menuitemcheckbox" aria-checked="true">
    <input type="checkbox" checked>
    <span>Show sidebar</span>
</label>
```

### Focus Management

```js
// Move focus into menu when opened
menu.classList.add('is-open');
menu.querySelector('.Dropdown-item')?.focus();

// Return focus to trigger when closed
menu.classList.remove('is-open');
trigger.focus();
```

---

## Best Practices

### Do

- ✓ **Group related actions** — Use headers and dividers to organize
- ✓ **Put destructive actions last** — Separate with a divider
- ✓ **Use clear action labels** — "Delete project" not just "Delete"
- ✓ **Add keyboard shortcuts** — For frequently used actions
- ✓ **Keep menus focused** — 5-7 items max before grouping
- ✓ **Close on action** — Dismiss dropdown after user selects

### Don't

- ✗ **Nest dropdowns** — Use a different pattern for sub-menus
- ✗ **Use for navigation** — Dropdowns are for actions, not nav links
- ✗ **Hide primary actions** — Important actions should be visible
- ✗ **Overload with options** — Too many items overwhelm users
- ✗ **Forget mobile** — Ensure touch targets are large enough (44px min)
- ✗ **Skip the caret icon** — Visual affordance helps discoverability
