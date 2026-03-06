# Lists

Lists display collections of related items in a vertical arrangement. They're ideal for navigation, settings, selections, and displaying data.

---

## Basic List

A simple list with clickable items.

<Preview title="Basic List">
    <ul class="List" style="max-width: 320px;">
        <li class="List-item">
            <span class="List-item-text">Profile</span>
        </li>
        <li class="List-item">
            <span class="List-item-text">Settings</span>
        </li>
        <li class="List-item">
            <span class="List-item-text">Notifications</span>
        </li>
        <li class="List-item">
            <span class="List-item-text">Help & Support</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <span class="List-item-text">Profile</span>
    </li>
    <li class="List-item">
        <span class="List-item-text">Settings</span>
    </li>
    ...
</ul>
```

## List with Icons

Add leading icons to provide visual context for each item.

<Preview title="List with Icons">
    <ul class="List" style="max-width: 320px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-user"></i>
            <span class="List-item-text">Profile</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-gear"></i>
            <span class="List-item-text">Settings</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-bell"></i>
            <span class="List-item-text">Notifications</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-question"></i>
            <span class="List-item-text">Help & Support</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <i class="List-item-icon ph ph-user"></i>
        <span class="List-item-text">Profile</span>
    </li>
    ...
</ul>
```

## List with Descriptions

Add secondary text for additional context.

<Preview title="List with Descriptions">
    <ul class="List" style="max-width: 400px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-user"></i>
            <div class="List-item-content">
                <span class="List-item-text">Profile</span>
                <span class="List-item-description">Manage your personal information</span>
            </div>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-shield-check"></i>
            <div class="List-item-content">
                <span class="List-item-text">Security</span>
                <span class="List-item-description">Password, 2FA, and login sessions</span>
            </div>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-bell"></i>
            <div class="List-item-content">
                <span class="List-item-text">Notifications</span>
                <span class="List-item-description">Configure alerts and emails</span>
            </div>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <i class="List-item-icon ph ph-user"></i>
        <div class="List-item-content">
            <span class="List-item-text">Profile</span>
            <span class="List-item-description">Manage your personal information</span>
        </div>
    </li>
    ...
</ul>
```

## List with Trailing Actions

Add trailing elements like badges, chevrons, or switches.

<Preview title="List with Trailing Actions">
    <ul class="List" style="max-width: 400px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-envelope"></i>
            <span class="List-item-text">Messages</span>
            <span class="List-item-trailing">
                <span class="Badge Badge--primary">5</span>
            </span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-moon"></i>
            <span class="List-item-text">Dark Mode</span>
            <span class="List-item-trailing">
                <label class="Switch">
                    <input type="checkbox" checked>
                    <span class="Switch-slider"></span>
                </label>
            </span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-globe"></i>
            <span class="List-item-text">Language</span>
            <span class="List-item-trailing List-item-meta">
                English
                <i class="ph ph-caret-right"></i>
            </span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-trash"></i>
            <span class="List-item-text List-item-text--danger">Delete Account</span>
            <span class="List-item-trailing">
                <i class="ph ph-caret-right"></i>
            </span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <i class="List-item-icon ph ph-envelope"></i>
        <span class="List-item-text">Messages</span>
        <span class="List-item-trailing">
            <span class="Badge Badge--primary">5</span>
        </span>
    </li>
    ...
</ul>
```

## Grouped Lists

Use headers to organize related items into sections.

<Preview title="Grouped List">
    <div style="max-width: 400px;">
        <div class="List-header">Account</div>
        <ul class="List">
            <li class="List-item">
                <i class="List-item-icon ph ph-user"></i>
                <span class="List-item-text">Profile</span>
                <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
            </li>
            <li class="List-item">
                <i class="List-item-icon ph ph-shield-check"></i>
                <span class="List-item-text">Security</span>
                <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
            </li>
        </ul>
        <div class="List-header">Preferences</div>
        <ul class="List">
            <li class="List-item">
                <i class="List-item-icon ph ph-bell"></i>
                <span class="List-item-text">Notifications</span>
                <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
            </li>
            <li class="List-item">
                <i class="List-item-icon ph ph-palette"></i>
                <span class="List-item-text">Appearance</span>
                <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
            </li>
        </ul>
    </div>
</Preview>

```html
<div class="List-header">Account</div>
<ul class="List">
    <li class="List-item">...</li>
</ul>
<div class="List-header">Preferences</div>
<ul class="List">
    <li class="List-item">...</li>
</ul>
```

## Selectable List

Lists where items can be selected, with checkboxes or radio buttons.

<Preview title="Selectable List (Checkbox)">
    <ul class="List List--selectable" style="max-width: 320px;">
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="sel-1" checked>
            <label for="sel-1" class="List-item-text">Design System</label>
        </li>
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="sel-2">
            <label for="sel-2" class="List-item-text">API Documentation</label>
        </li>
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="sel-3" checked>
            <label for="sel-3" class="List-item-text">Component Library</label>
        </li>
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="sel-4">
            <label for="sel-4" class="List-item-text">Testing Suite</label>
        </li>
    </ul>
</Preview>

```html
<ul class="List List--selectable">
    <li class="List-item">
        <input type="checkbox" class="List-item-checkbox" id="sel-1" checked>
        <label for="sel-1" class="List-item-text">Design System</label>
    </li>
    ...
</ul>
```

<Preview title="Selectable List (Radio)">
    <ul class="List List--selectable" style="max-width: 320px;">
        <li class="List-item">
            <input type="radio" name="plan" class="List-item-radio" id="plan-1">
            <label for="plan-1" class="List-item-text">Free Plan</label>
        </li>
        <li class="List-item">
            <input type="radio" name="plan" class="List-item-radio" id="plan-2" checked>
            <label for="plan-2" class="List-item-text">Pro Plan</label>
        </li>
        <li class="List-item">
            <input type="radio" name="plan" class="List-item-radio" id="plan-3">
            <label for="plan-3" class="List-item-text">Enterprise</label>
        </li>
    </ul>
</Preview>

```html
<ul class="List List--selectable">
    <li class="List-item">
        <input type="radio" name="plan" class="List-item-radio" id="plan-1">
        <label for="plan-1" class="List-item-text">Free Plan</label>
    </li>
    ...
</ul>
```

## List with Avatars

Display user or entity information with avatars.

<Preview title="List with Avatars">
    <ul class="List" style="max-width: 400px;">
        <li class="List-item">
            <div class="Avatar Avatar--md">
                <img src="https://i.pravatar.cc/150?img=1" alt="Sarah Chen" loading="lazy" decoding="async">
            </div>
            <div class="List-item-content">
                <span class="List-item-text">Sarah Chen</span>
                <span class="List-item-description">Product Designer</span>
            </div>
            <span class="List-item-trailing">
                <span class="Badge Badge--success">Online</span>
            </span>
        </li>
        <li class="List-item">
            <div class="Avatar Avatar--md">
                <img src="https://i.pravatar.cc/150?img=3" alt="Alex Rivera" loading="lazy" decoding="async">
            </div>
            <div class="List-item-content">
                <span class="List-item-text">Alex Rivera</span>
                <span class="List-item-description">Frontend Engineer</span>
            </div>
            <span class="List-item-trailing">
                <span class="Badge">Away</span>
            </span>
        </li>
        <li class="List-item">
            <div class="Avatar Avatar--md">JD</div>
            <div class="List-item-content">
                <span class="List-item-text">Jordan Davis</span>
                <span class="List-item-description">Backend Engineer</span>
            </div>
            <span class="List-item-trailing">
                <span class="Badge Badge--secondary">Offline</span>
            </span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <div class="Avatar Avatar--md">
            <img src="..." alt="Sarah Chen" loading="lazy" decoding="async">
        </div>
        <div class="List-item-content">
            <span class="List-item-text">Sarah Chen</span>
            <span class="List-item-description">Product Designer</span>
        </div>
        <span class="List-item-trailing">
            <span class="Badge Badge--success">Online</span>
        </span>
    </li>
    ...
</ul>
```

## Bordered List

A list with visible borders between items.

<Preview title="Bordered List">
    <ul class="List List--bordered" style="max-width: 320px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-file-text"></i>
            <span class="List-item-text">Documents</span>
            <span class="List-item-trailing List-item-meta">128 files</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-image"></i>
            <span class="List-item-text">Images</span>
            <span class="List-item-trailing List-item-meta">64 files</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-video"></i>
            <span class="List-item-text">Videos</span>
            <span class="List-item-trailing List-item-meta">12 files</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-music-note"></i>
            <span class="List-item-text">Audio</span>
            <span class="List-item-trailing List-item-meta">89 files</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List List--bordered">
    <li class="List-item">
        <i class="List-item-icon ph ph-file-text"></i>
        <span class="List-item-text">Documents</span>
        <span class="List-item-trailing List-item-meta">128 files</span>
    </li>
    ...
</ul>
```

## Compact List

A denser list variant for tighter spaces.

<Preview title="Compact List">
    <ul class="List List--compact" style="max-width: 280px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-house"></i>
            <span class="List-item-text">Home</span>
        </li>
        <li class="List-item List-item--active">
            <i class="List-item-icon ph ph-folder"></i>
            <span class="List-item-text">Projects</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-calendar"></i>
            <span class="List-item-text">Calendar</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-chat-circle"></i>
            <span class="List-item-text">Messages</span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-gear"></i>
            <span class="List-item-text">Settings</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List List--compact">
    <li class="List-item">
        <i class="List-item-icon ph ph-house"></i>
        <span class="List-item-text">Home</span>
    </li>
    <li class="List-item List-item--active">
        <i class="List-item-icon ph ph-folder"></i>
        <span class="List-item-text">Projects</span>
    </li>
    ...
</ul>
```

## Disabled Items

Items that cannot be interacted with.

<Preview title="Disabled Items">
    <ul class="List" style="max-width: 320px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-check-circle"></i>
            <span class="List-item-text">Available Option</span>
        </li>
        <li class="List-item List-item--disabled">
            <i class="List-item-icon ph ph-lock"></i>
            <span class="List-item-text">Premium Feature</span>
            <span class="List-item-trailing">
                <span class="Badge Badge--warning">Pro</span>
            </span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-check-circle"></i>
            <span class="List-item-text">Another Option</span>
        </li>
        <li class="List-item List-item--disabled">
            <i class="List-item-icon ph ph-clock"></i>
            <span class="List-item-text">Coming Soon</span>
        </li>
    </ul>
</Preview>

```html
<ul class="List">
    <li class="List-item">
        <span class="List-item-text">Available Option</span>
    </li>
    <li class="List-item List-item--disabled">
        <span class="List-item-text">Premium Feature</span>
    </li>
    ...
</ul>
```

---

## Common Patterns

### Settings List

<Preview title="Settings List">
    <div class="Card" style="max-width: 400px;">
        <div class="Card-header">
            <h4 class="Card-title">Settings</h4>
        </div>
        <ul class="List">
            <li class="List-item">
                <i class="List-item-icon ph ph-bell"></i>
                <span class="List-item-text">Notifications</span>
                <span class="List-item-trailing">
                    <label class="Switch">
                        <input type="checkbox" checked>
                        <span class="Switch-track"></span>
                    </label>
                </span>
            </li>
            <li class="List-item">
                <i class="List-item-icon ph ph-moon"></i>
                <span class="List-item-text">Dark Mode</span>
                <span class="List-item-trailing">
                    <label class="Switch">
                        <input type="checkbox">
                        <span class="Switch-track"></span>
                    </label>
                </span>
            </li>
            <li class="List-item">
                <i class="List-item-icon ph ph-globe"></i>
                <span class="List-item-text">Language</span>
                <span class="List-item-trailing List-item-meta">English <i class="ph ph-caret-right"></i></span>
            </li>
        </ul>
    </div>
</Preview>

### File Browser

<Preview title="File Browser">
    <ul class="List List--bordered" style="max-width: 400px;">
        <li class="List-item">
            <i class="List-item-icon ph ph-folder" style="color: oklch(70% 0.15 80);"></i>
            <div class="List-item-content">
                <span class="List-item-text">Documents</span>
                <span class="List-item-description">24 items · Modified today</span>
            </div>
            <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-folder" style="color: oklch(70% 0.15 80);"></i>
            <div class="List-item-content">
                <span class="List-item-text">Images</span>
                <span class="List-item-description">156 items · Modified yesterday</span>
            </div>
            <span class="List-item-trailing"><i class="ph ph-caret-right"></i></span>
        </li>
        <li class="List-item">
            <i class="List-item-icon ph ph-file-pdf" style="color: oklch(55% 0.2 25);"></i>
            <div class="List-item-content">
                <span class="List-item-text">report.pdf</span>
                <span class="List-item-description">2.4 MB · Modified Jan 15</span>
            </div>
        </li>
    </ul>
</Preview>

### Contact List

<Preview title="Contact List">
    <ul class="List" style="max-width: 360px;">
        <li class="List-item">
            <div class="Avatar Avatar--md" style="background: oklch(65% 0.15 250); color: white; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; font-size: 0.8rem; font-weight: 600;">SC</div>
            <div class="List-item-content">
                <span class="List-item-text">Sarah Chen</span>
                <span class="List-item-description">Last active 2m ago</span>
            </div>
            <span class="List-item-trailing">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: oklch(55% 0.15 150);"></span>
            </span>
        </li>
        <li class="List-item">
            <div class="Avatar Avatar--md" style="background: oklch(65% 0.15 150); color: white; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; font-size: 0.8rem; font-weight: 600;">AR</div>
            <div class="List-item-content">
                <span class="List-item-text">Alex Rivera</span>
                <span class="List-item-description">Last active 1h ago</span>
            </div>
        </li>
    </ul>
</Preview>

### Task List

<Preview title="Task List">
    <ul class="List List--selectable" style="max-width: 400px;">
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="task-1" checked>
            <label for="task-1" class="List-item-text" style="text-decoration: line-through; color: var(--fg-3);">Design homepage mockup</label>
        </li>
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="task-2">
            <label for="task-2" class="List-item-text">Review pull requests</label>
        </li>
        <li class="List-item">
            <input type="checkbox" class="List-item-checkbox" id="task-3">
            <label for="task-3" class="List-item-text">Write documentation</label>
        </li>
    </ul>
</Preview>

---

## Customization

Override list styles using CSS custom properties:

```css
/* Custom list spacing */
.List--relaxed .List-item {
  padding: var(--space-4) var(--space-3);
}

/* Custom hover color */
.List-item:hover {
  background-color: oklch(60% 0.15 250 / 0.08);
}

/* Custom active indicator */
.List-item--active {
  border-left: 3px solid var(--accent);
  padding-left: calc(var(--space-3) - 3px);
}

/* Card-style list items */
.List--cards .List-item {
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  margin-bottom: var(--space-2);
}

/* Striped rows */
.List--striped .List-item:nth-child(even) {
  background-color: var(--bg-s);
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
<tr><td><code class="ApiTable-prop">.List</code></td><td class="ApiTable-desc">Container for list items</td></tr>
<tr><td><code class="ApiTable-prop">.List--bordered</code></td><td class="ApiTable-desc">Visible borders between items</td></tr>
<tr><td><code class="ApiTable-prop">.List--compact</code></td><td class="ApiTable-desc">Reduced padding for dense layouts</td></tr>
<tr><td><code class="ApiTable-prop">.List--selectable</code></td><td class="ApiTable-desc">List with checkbox/radio selection</td></tr>
<tr><td><code class="ApiTable-prop">.List-header</code></td><td class="ApiTable-desc">Section header/title</td></tr>
<tr><td><code class="ApiTable-prop">.List-item</code></td><td class="ApiTable-desc">Individual list item</td></tr>
<tr><td><code class="ApiTable-prop">.List-item--active</code></td><td class="ApiTable-desc">Highlighted/selected state</td></tr>
<tr><td><code class="ApiTable-prop">.List-item--disabled</code></td><td class="ApiTable-desc">Non-interactive item</td></tr>
<tr><td><code class="ApiTable-prop">.List-item-icon</code></td><td class="ApiTable-desc">Leading icon</td></tr>
<tr><td><code class="ApiTable-prop">.List-item-text</code></td><td class="ApiTable-desc">Primary text content</td></tr>
<tr><td><code class="ApiTable-prop">.List-item-text--danger</code></td><td class="ApiTable-desc">Destructive action text (red)</td></tr>
<tr><td><code class="ApiTable-prop">.List-item-description</code></td><td class="ApiTable-desc">Secondary/helper text</td></tr>
<tr><td><code class="ApiTable-prop">.List-item-content</code></td><td class="ApiTable-desc">Wrapper for text + description</td></tr>
<tr><td><code class="ApiTable-prop">.List-item-trailing</code></td><td class="ApiTable-desc">Right-aligned content</td></tr>
<tr><td><code class="ApiTable-prop">.List-item-meta</code></td><td class="ApiTable-desc">Secondary trailing text</td></tr>
<tr><td><code class="ApiTable-prop">.List-item-checkbox</code></td><td class="ApiTable-desc">Checkbox input in selectable lists</td></tr>
<tr><td><code class="ApiTable-prop">.List-item-radio</code></td><td class="ApiTable-desc">Radio input in selectable lists</td></tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">role="listbox"</code></td><td class="ApiTable-desc">For interactive/selectable lists</td></tr>
<tr><td><code class="ApiTable-prop">role="option"</code></td><td class="ApiTable-desc">For items in listbox</td></tr>
<tr><td><code class="ApiTable-prop">aria-selected</code></td><td class="ApiTable-desc">Selection state for options</td></tr>
<tr><td><code class="ApiTable-prop">aria-disabled="true"</code></td><td class="ApiTable-desc">Disabled item state</td></tr>
</tbody>
</table>

### CSS Custom Properties

<table class="ApiTable">
<thead>
<tr><th>Property</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">--bg-primary</code></td><td class="ApiTable-desc">—</td><td class="ApiTable-desc">List background</td></tr>
<tr><td><code class="ApiTable-prop">--bg-secondary</code></td><td class="ApiTable-desc">—</td><td class="ApiTable-desc">Hover/active background</td></tr>
<tr><td><code class="ApiTable-prop">--text-primary</code></td><td class="ApiTable-desc">—</td><td class="ApiTable-desc">Primary text color</td></tr>
<tr><td><code class="ApiTable-prop">--text-secondary</code></td><td class="ApiTable-desc">—</td><td class="ApiTable-desc">Description/meta text</td></tr>
<tr><td><code class="ApiTable-prop">--border-subtle</code></td><td class="ApiTable-desc">—</td><td class="ApiTable-desc">Border color</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* List Container */
.List {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

/* List Item */
.List-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  cursor: pointer;
  transition: background-color var(--dur-f);
}

.List-item:hover {
  background-color: var(--bg-s);
}

/* Active State */
.List-item--active {
  background-color: oklch(60% 0.15 250 / 0.1);
  color: var(--accent);
}

/* Disabled State */
.List-item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Item Icon */
.List-item-icon {
  font-size: var(--fs-3xl);
  color: var(--fg-3);
  flex-shrink: 0;
}

/* Item Text */
.List-item-text {
  flex: 1;
  font-size: var(--fs-lg);
  font-weight: 500;
}

.List-item-text--danger {
  color: oklch(55% 0.2 25);
}

/* Item Content (text + description) */
.List-item-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  flex: 1;
  min-width: 0;
}

/* Description */
.List-item-description {
  font-size: var(--fs-md);
  color: var(--fg-3);
}

/* Trailing */
.List-item-trailing {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

.List-item-meta {
  font-size: var(--fs-md);
  color: var(--fg-3);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

/* Variants */
.List--bordered .List-item {
  border-bottom: 1px solid var(--bd);
}

.List--bordered .List-item:last-child {
  border-bottom: none;
}

.List--compact .List-item {
  padding: var(--space-2) var(--space-3);
}

/* Selectable */
.List--selectable .List-item {
  gap: var(--space-3);
}

.List-item-checkbox,
.List-item-radio {
  flex-shrink: 0;
}

/* Section Header */
.List-header {
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--fg-3);
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus to/from the list |
| Arrow Down | Move focus to next item |
| Arrow Up | Move focus to previous item |
| Space | Toggle checkbox/radio selection |
| Enter | Activate focused item |
| Home | Move focus to first item |
| End | Move focus to last item |

### Screen Reader Guidance

```html
<!-- Interactive/selectable list -->
<ul class="List List--selectable" role="listbox" aria-label="Project selection">
    <li class="List-item" role="option" aria-selected="true">
        <span class="List-item-text">Design System</span>
    </li>
    <li class="List-item" role="option" aria-selected="false">
        <span class="List-item-text">API Docs</span>
    </li>
</ul>

<!-- Disabled item -->
<li class="List-item List-item--disabled" role="option" aria-disabled="true">
    <span class="List-item-text">Premium Feature</span>
</li>
```

- Use semantic `<ul>` and `<li>` elements for static lists
- Interactive lists should use `role="listbox"` and `role="option"`
- Use `aria-selected` for selectable items
- Use `aria-disabled="true"` for disabled items
- Ensure sufficient color contrast for text and icons

---

## Best Practices

### Do

- ✓ **Use consistent item structure** — Same elements across items
- ✓ **Group related items** — Use headers for sections
- ✓ **Show interactive states** — Hover, focus, active
- ✓ **Provide visual hierarchy** — Icons, text, descriptions
- ✓ **Use semantic markup** — `<ul>` / `<li>` for lists
- ✓ **Keep items scannable** — Primary info should be immediately visible

### Don't

- ✗ **Overcrowd items** — Keep content scannable
- ✗ **Mix navigation and actions** — Separate menus from settings
- ✗ **Hide important info** — Key data should be visible
- ✗ **Use lists for single items** — Lists imply collections
- ✗ **Forget keyboard navigation** — All items must be reachable
- ✗ **Omit disabled state explanations** — Tell users why items are unavailable
