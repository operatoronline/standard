# Icons

Standard uses **Phosphor Icons** for its visual language. Icons provide visual context, improve scannability, and reinforce meaning throughout the interface.

---

## Basic Usage

Include icons using the Phosphor icon font classes.

<Preview title="Basic Icons">
    <i class="ph ph-house" style="font-size: 1.5rem;"></i>
    <i class="ph ph-gear" style="font-size: 1.5rem;"></i>
    <i class="ph ph-user" style="font-size: 1.5rem;"></i>
    <i class="ph ph-envelope" style="font-size: 1.5rem;"></i>
    <i class="ph ph-magnifying-glass" style="font-size: 1.5rem;"></i>
</Preview>

```html
<i class="ph ph-house"></i>
<i class="ph ph-gear"></i>
<i class="ph ph-user"></i>
```

---

## Icon Styles

Phosphor icons come in multiple styles: regular, bold, fill, and duotone.

<Preview title="Icon Styles">
    <div style="display: flex; gap: var(--space-6); align-items: center;">
        <div style="text-align: center;">
            <i class="ph ph-heart" style="font-size: 2rem;"></i>
            <div style="font-size: 0.75rem; color: var(--fg-3); margin-top: var(--space-2);">Regular</div>
        </div>
        <div style="text-align: center;">
            <i class="ph-bold ph-heart" style="font-size: 2rem;"></i>
            <div style="font-size: 0.75rem; color: var(--fg-3); margin-top: var(--space-2);">Bold</div>
        </div>
        <div style="text-align: center;">
            <i class="ph-fill ph-heart" style="font-size: 2rem;"></i>
            <div style="font-size: 0.75rem; color: var(--fg-3); margin-top: var(--space-2);">Fill</div>
        </div>
        <div style="text-align: center;">
            <i class="ph-duotone ph-heart" style="font-size: 2rem;"></i>
            <div style="font-size: 0.75rem; color: var(--fg-3); margin-top: var(--space-2);">Duotone</div>
        </div>
    </div>
</Preview>

```html
<i class="ph ph-heart"></i>         <!-- Regular -->
<i class="ph-bold ph-heart"></i>    <!-- Bold -->
<i class="ph-fill ph-heart"></i>    <!-- Fill -->
<i class="ph-duotone ph-heart"></i> <!-- Duotone -->
```

---

## Icon Sizes

Control icon size using font-size or predefined classes.

<Preview title="Icon Sizes">
    <i class="ph ph-star Icon Icon--xs"></i>
    <i class="ph ph-star Icon Icon--small"></i>
    <i class="ph ph-star Icon"></i>
    <i class="ph ph-star Icon Icon--large"></i>
    <i class="ph ph-star Icon Icon--xl"></i>
</Preview>

```html
<i class="ph ph-star Icon Icon--xs"></i>    <!-- 12px -->
<i class="ph ph-star Icon Icon--small"></i> <!-- 16px -->
<i class="ph ph-star Icon"></i>             <!-- 20px -->
<i class="ph ph-star Icon Icon--large"></i> <!-- 24px -->
<i class="ph ph-star Icon Icon--xl"></i>    <!-- 32px -->
```

<Preview title="Custom Size with font-size">
    <i class="ph ph-rocket" style="font-size: 1rem;"></i>
    <i class="ph ph-rocket" style="font-size: 1.5rem;"></i>
    <i class="ph ph-rocket" style="font-size: 2rem;"></i>
    <i class="ph ph-rocket" style="font-size: 3rem;"></i>
</Preview>

```html
<i class="ph ph-rocket" style="font-size: 2rem;"></i>
```

---

## Icon Colors

Icons inherit the current text color. Override with CSS.

<Preview title="Colored Icons">
    <i class="ph ph-check-circle" style="font-size: 1.5rem; color: oklch(55% 0.15 150);"></i>
    <i class="ph ph-warning" style="font-size: 1.5rem; color: oklch(70% 0.15 80);"></i>
    <i class="ph ph-x-circle" style="font-size: 1.5rem; color: oklch(55% 0.2 25);"></i>
    <i class="ph ph-info" style="font-size: 1.5rem; color: var(--accent);"></i>
    <i class="ph ph-star-fill" style="font-size: 1.5rem; color: oklch(75% 0.15 80);"></i>
</Preview>

```html
<i class="ph ph-check-circle" style="color: oklch(55% 0.15 150);"></i>
<i class="ph ph-warning" style="color: oklch(70% 0.15 80);"></i>
```

<Preview title="Semantic Icon Classes">
    <i class="ph ph-check-circle Icon Icon--success"></i>
    <i class="ph ph-warning Icon Icon--warning"></i>
    <i class="ph ph-x-circle Icon Icon--error"></i>
    <i class="ph ph-info Icon Icon--info"></i>
</Preview>

```html
<i class="ph ph-check-circle Icon Icon--success"></i>
<i class="ph ph-warning Icon Icon--warning"></i>
```

---

## Icons in Buttons

Common pattern for enhanced button clarity.

<Preview title="Button with Leading Icon">
    <button class="Button Button--primary">
        <i class="ph ph-plus Button-icon"></i>
        Create New
    </button>
    <button class="Button Button--secondary">
        <i class="ph ph-download Button-icon"></i>
        Download
    </button>
    <button class="Button Button--danger">
        <i class="ph ph-trash Button-icon"></i>
        Delete
    </button>
</Preview>

```html
<button class="Button Button--primary">
    <i class="ph ph-plus Button-icon"></i>
    Create New
</button>
```

<Preview title="Button with Trailing Icon">
    <button class="Button Button--primary">
        Continue
        <i class="ph ph-arrow-right Button-icon Button-icon--trailing"></i>
    </button>
    <button class="Button Button--secondary">
        External Link
        <i class="ph ph-arrow-square-out Button-icon Button-icon--trailing"></i>
    </button>
</Preview>

```html
<button class="Button Button--primary">
    Continue
    <i class="ph ph-arrow-right Button-icon Button-icon--trailing"></i>
</button>
```

<Preview title="Icon-Only Buttons">
    <button class="Button Button--icon" aria-label="Search">
        <i class="ph ph-magnifying-glass"></i>
    </button>
    <button class="Button Button--icon Button--primary" aria-label="Add item">
        <i class="ph ph-plus"></i>
    </button>
    <button class="Button Button--icon Button--secondary" aria-label="Settings">
        <i class="ph ph-gear"></i>
    </button>
    <button class="Button Button--icon Button--ghost" aria-label="More options">
        <i class="ph ph-dots-three"></i>
    </button>
</Preview>

```html
<button class="Button Button--icon" aria-label="Search">
    <i class="ph ph-magnifying-glass"></i>
</button>
```

---

## Icons in Inputs

Add context to form inputs.

<Preview title="Input with Icon">
    <div class="Input-wrapper" style="max-width: 280px;">
        <i class="ph ph-magnifying-glass Input-icon"></i>
        <input type="text" class="Input Input--withIcon" placeholder="Search...">
    </div>
    <div class="Input-wrapper" style="max-width: 280px; margin-top: var(--space-3);">
        <i class="ph ph-envelope Input-icon"></i>
        <input type="email" class="Input Input--withIcon" placeholder="Email address">
    </div>
</Preview>

```html
<div class="Input-wrapper">
    <i class="ph ph-magnifying-glass Input-icon"></i>
    <input type="text" class="Input Input--withIcon" placeholder="Search...">
</div>
```

---

## Icons in Lists

Enhance list items with icons.

<Preview title="Icon List">
    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--space-3);">
        <li style="display: flex; align-items: center; gap: var(--space-3);">
            <i class="ph ph-check-circle Icon Icon--success"></i>
            <span>Feature included in plan</span>
        </li>
        <li style="display: flex; align-items: center; gap: var(--space-3);">
            <i class="ph ph-check-circle Icon Icon--success"></i>
            <span>Unlimited storage space</span>
        </li>
        <li style="display: flex; align-items: center; gap: var(--space-3);">
            <i class="ph ph-check-circle Icon Icon--success"></i>
            <span>Priority customer support</span>
        </li>
        <li style="display: flex; align-items: center; gap: var(--space-3);">
            <i class="ph ph-x-circle" style="color: var(--fg-3);"></i>
            <span style="color: var(--fg-3);">Advanced analytics</span>
        </li>
    </ul>
</Preview>

```html
<li style="display: flex; align-items: center; gap: var(--space-3);">
    <i class="ph ph-check-circle Icon Icon--success"></i>
    <span>Feature included</span>
</li>
```

---

## Icons in Alerts

Add visual weight to alert messages.

<Preview title="Alert Icons">
    <div class="Alert Alert--info" style="max-width: 400px;">
        <i class="ph ph-info Alert-icon"></i>
        <div>This is an informational message.</div>
    </div>
    <div class="Alert Alert--success" style="max-width: 400px; margin-top: var(--space-3);">
        <i class="ph ph-check-circle Alert-icon"></i>
        <div>Changes saved successfully.</div>
    </div>
    <div class="Alert Alert--warning" style="max-width: 400px; margin-top: var(--space-3);">
        <i class="ph ph-warning Alert-icon"></i>
        <div>Please review your settings.</div>
    </div>
    <div class="Alert Alert--error" style="max-width: 400px; margin-top: var(--space-3);">
        <i class="ph ph-x-circle Alert-icon"></i>
        <div>An error occurred. Please try again.</div>
    </div>
</Preview>

```html
<div class="Alert Alert--success">
    <i class="ph ph-check-circle Alert-icon"></i>
    <div>Changes saved successfully.</div>
</div>
```

---

## Icon Backgrounds

Icons in circular or square backgrounds.

<Preview title="Icon with Background">
    <span class="IconBg">
        <i class="ph ph-house"></i>
    </span>
    <span class="IconBg IconBg--primary">
        <i class="ph ph-gear"></i>
    </span>
    <span class="IconBg IconBg--success">
        <i class="ph ph-check"></i>
    </span>
    <span class="IconBg IconBg--warning">
        <i class="ph ph-warning"></i>
    </span>
    <span class="IconBg IconBg--error">
        <i class="ph ph-x"></i>
    </span>
</Preview>

```html
<span class="IconBg IconBg--primary">
    <i class="ph ph-gear"></i>
</span>
```

<Preview title="Icon Background Sizes">
    <span class="IconBg IconBg--small IconBg--primary">
        <i class="ph ph-star"></i>
    </span>
    <span class="IconBg IconBg--primary">
        <i class="ph ph-star"></i>
    </span>
    <span class="IconBg IconBg--large IconBg--primary">
        <i class="ph ph-star"></i>
    </span>
</Preview>

```html
<span class="IconBg IconBg--small IconBg--primary">...</span>
<span class="IconBg IconBg--large IconBg--primary">...</span>
```

---

## Animated Icons

Icons with loading or state animations.

<Preview title="Spinning Icon">
    <i class="ph ph-spinner Icon Icon--spin" style="font-size: 1.5rem;"></i>
    <i class="ph ph-circle-notch Icon Icon--spin" style="font-size: 1.5rem;"></i>
    <i class="ph ph-arrows-clockwise Icon Icon--spin" style="font-size: 1.5rem;"></i>
</Preview>

```html
<i class="ph ph-spinner Icon Icon--spin"></i>
```

<Preview title="Pulsing Icon">
    <i class="ph ph-bell Icon Icon--pulse" style="font-size: 1.5rem; color: var(--accent);"></i>
    <i class="ph ph-heart-fill Icon Icon--pulse" style="font-size: 1.5rem; color: oklch(55% 0.2 25);"></i>
</Preview>

```html
<i class="ph ph-bell Icon Icon--pulse"></i>
```

---

## Common Icons Reference

### Navigation

<Preview title="Navigation Icons">
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-4); text-align: center;">
        <div>
            <i class="ph ph-house" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">house</div>
        </div>
        <div>
            <i class="ph ph-magnifying-glass" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">magnifying-glass</div>
        </div>
        <div>
            <i class="ph ph-gear" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">gear</div>
        </div>
        <div>
            <i class="ph ph-bell" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">bell</div>
        </div>
        <div>
            <i class="ph ph-user" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">user</div>
        </div>
        <div>
            <i class="ph ph-sign-out" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">sign-out</div>
        </div>
    </div>
</Preview>

### Actions

<Preview title="Action Icons">
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-4); text-align: center;">
        <div>
            <i class="ph ph-plus" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">plus</div>
        </div>
        <div>
            <i class="ph ph-pencil" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">pencil</div>
        </div>
        <div>
            <i class="ph ph-trash" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">trash</div>
        </div>
        <div>
            <i class="ph ph-download" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">download</div>
        </div>
        <div>
            <i class="ph ph-upload" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">upload</div>
        </div>
        <div>
            <i class="ph ph-share" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">share</div>
        </div>
    </div>
</Preview>

### Status & Feedback

<Preview title="Status Icons">
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-4); text-align: center;">
        <div>
            <i class="ph ph-check" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">check</div>
        </div>
        <div>
            <i class="ph ph-x" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">x</div>
        </div>
        <div>
            <i class="ph ph-warning" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">warning</div>
        </div>
        <div>
            <i class="ph ph-info" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">info</div>
        </div>
        <div>
            <i class="ph ph-question" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">question</div>
        </div>
        <div>
            <i class="ph ph-spinner" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">spinner</div>
        </div>
    </div>
</Preview>

### Arrows & Chevrons

<Preview title="Directional Icons">
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-4); text-align: center;">
        <div>
            <i class="ph ph-arrow-left" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">arrow-left</div>
        </div>
        <div>
            <i class="ph ph-arrow-right" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">arrow-right</div>
        </div>
        <div>
            <i class="ph ph-caret-down" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">caret-down</div>
        </div>
        <div>
            <i class="ph ph-caret-right" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">caret-right</div>
        </div>
        <div>
            <i class="ph ph-arrow-square-out" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">arrow-square-out</div>
        </div>
        <div>
            <i class="ph ph-arrows-clockwise" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">arrows-clockwise</div>
        </div>
    </div>
</Preview>

### Media & Files

<Preview title="Media Icons">
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-4); text-align: center;">
        <div>
            <i class="ph ph-image" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">image</div>
        </div>
        <div>
            <i class="ph ph-file" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">file</div>
        </div>
        <div>
            <i class="ph ph-folder" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">folder</div>
        </div>
        <div>
            <i class="ph ph-video" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">video</div>
        </div>
        <div>
            <i class="ph ph-link" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">link</div>
        </div>
        <div>
            <i class="ph ph-paperclip" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">paperclip</div>
        </div>
    </div>
</Preview>

### Communication

<Preview title="Communication Icons">
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-4); text-align: center;">
        <div>
            <i class="ph ph-envelope" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">envelope</div>
        </div>
        <div>
            <i class="ph ph-chat" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">chat</div>
        </div>
        <div>
            <i class="ph ph-phone" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">phone</div>
        </div>
        <div>
            <i class="ph ph-paper-plane-tilt" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">paper-plane-tilt</div>
        </div>
        <div>
            <i class="ph ph-at" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">at</div>
        </div>
        <div>
            <i class="ph ph-users" style="font-size: 1.5rem;"></i>
            <div style="font-size: 0.7rem; color: var(--fg-3); margin-top: var(--space-1);">users</div>
        </div>
    </div>
</Preview>

---

## Common Patterns

### Empty State

<Preview title="Empty State with Icon">
    <div style="text-align: center; padding: var(--space-8); max-width: 320px; margin: 0 auto;">
        <span class="IconBg IconBg--large" style="margin-bottom: var(--space-4);">
            <i class="ph ph-folder-open" style="font-size: 2rem; color: var(--fg-3);"></i>
        </span>
        <h4 style="margin: 0 0 var(--space-2);">No files yet</h4>
        <p style="color: var(--fg-3); margin: 0 0 var(--space-4); font-size: 0.9rem;">Upload your first file to get started.</p>
        <button class="Button Button--primary">
            <i class="ph ph-upload Button-icon"></i>
            Upload File
        </button>
    </div>
</Preview>

### Feature List

<Preview title="Feature List">
    <div class="Card" style="max-width: 360px;">
        <div class="Card-body">
            <h4 class="Card-title" style="margin-bottom: var(--space-4);">Pro Plan Features</h4>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--space-3);">
                <li style="display: flex; align-items: flex-start; gap: var(--space-3);">
                    <span class="IconBg IconBg--small IconBg--success">
                        <i class="ph ph-check"></i>
                    </span>
                    <span>Unlimited projects</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: var(--space-3);">
                    <span class="IconBg IconBg--small IconBg--success">
                        <i class="ph ph-check"></i>
                    </span>
                    <span>Advanced analytics</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: var(--space-3);">
                    <span class="IconBg IconBg--small IconBg--success">
                        <i class="ph ph-check"></i>
                    </span>
                    <span>Priority support</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: var(--space-3);">
                    <span class="IconBg IconBg--small IconBg--success">
                        <i class="ph ph-check"></i>
                    </span>
                    <span>Custom integrations</span>
                </li>
            </ul>
        </div>
        <div class="Card-footer">
            <button class="Button Button--primary Button--block">Upgrade to Pro</button>
        </div>
    </div>
</Preview>

### Menu with Icons

<Preview title="Dropdown Menu">
    <div style="background: var(--bg); border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-2); width: 200px; box-shadow: 0 4px 12px oklch(0% 0 0 / 0.1);">
        <button style="display: flex; align-items: center; gap: var(--space-3); width: 100%; padding: var(--space-2) var(--space-3); border: none; background: none; cursor: pointer; border-radius: var(--r-s); font-size: 0.9rem; color: var(--fg);">
            <i class="ph ph-user"></i>
            Profile
        </button>
        <button style="display: flex; align-items: center; gap: var(--space-3); width: 100%; padding: var(--space-2) var(--space-3); border: none; background: none; cursor: pointer; border-radius: var(--r-s); font-size: 0.9rem; color: var(--fg);">
            <i class="ph ph-gear"></i>
            Settings
        </button>
        <button style="display: flex; align-items: center; gap: var(--space-3); width: 100%; padding: var(--space-2) var(--space-3); border: none; background: none; cursor: pointer; border-radius: var(--r-s); font-size: 0.9rem; color: var(--fg);">
            <i class="ph ph-question"></i>
            Help
        </button>
        <hr style="border: none; border-top: 1px solid var(--bd); margin: var(--space-2) 0;">
        <button style="display: flex; align-items: center; gap: var(--space-3); width: 100%; padding: var(--space-2) var(--space-3); border: none; background: none; cursor: pointer; border-radius: var(--r-s); font-size: 0.9rem; color: oklch(55% 0.2 25);">
            <i class="ph ph-sign-out"></i>
            Sign out
        </button>
    </div>
</Preview>

---

## Customization

Override icon styles using CSS custom properties:

```css
/* Custom icon color scheme */
.Icon--brand {
  color: oklch(55% 0.2 280);
}

/* Custom icon background */
.IconBg--brand {
  background-color: oklch(55% 0.2 280 / 0.15);
  color: oklch(45% 0.2 280);
}

/* Square icon backgrounds */
.IconBg--square {
  border-radius: var(--r-s);
}

/* Custom animation speed */
.Icon--spin-slow {
  animation: spin 2s linear infinite;
}

/* Custom size scale */
.Icon--xxl {
  font-size: 3rem;
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
<tr><td><code class="ApiTable-prop">.Icon</code></td><td class="ApiTable-desc">Base icon styling</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--xs</code></td><td class="ApiTable-desc">Extra small (12px)</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--small</code></td><td class="ApiTable-desc">Small (16px)</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--large</code></td><td class="ApiTable-desc">Large (24px)</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--xl</code></td><td class="ApiTable-desc">Extra large (32px)</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--success</code></td><td class="ApiTable-desc">Success/green color</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--warning</code></td><td class="ApiTable-desc">Warning/yellow color</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--error</code></td><td class="ApiTable-desc">Error/red color</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--info</code></td><td class="ApiTable-desc">Info/primary color</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--spin</code></td><td class="ApiTable-desc">Spinning animation</td></tr>
<tr><td><code class="ApiTable-prop">.Icon--pulse</code></td><td class="ApiTable-desc">Pulsing animation</td></tr>
<tr><td><code class="ApiTable-prop">.IconBg</code></td><td class="ApiTable-desc">Icon with circular background</td></tr>
<tr><td><code class="ApiTable-prop">.IconBg--small</code></td><td class="ApiTable-desc">Small background (28px)</td></tr>
<tr><td><code class="ApiTable-prop">.IconBg--large</code></td><td class="ApiTable-desc">Large background (56px)</td></tr>
<tr><td><code class="ApiTable-prop">.IconBg--primary</code></td><td class="ApiTable-desc">Primary color background</td></tr>
<tr><td><code class="ApiTable-prop">.IconBg--success</code></td><td class="ApiTable-desc">Success color background</td></tr>
<tr><td><code class="ApiTable-prop">.IconBg--warning</code></td><td class="ApiTable-desc">Warning color background</td></tr>
<tr><td><code class="ApiTable-prop">.IconBg--error</code></td><td class="ApiTable-desc">Error color background</td></tr>
</tbody>
</table>

### Phosphor Icon Styles

<table class="ApiTable">
<thead>
<tr><th>Class Prefix</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">ph</code></td><td class="ApiTable-desc">Regular weight</td></tr>
<tr><td><code class="ApiTable-prop">ph-bold</code></td><td class="ApiTable-desc">Bold weight</td></tr>
<tr><td><code class="ApiTable-prop">ph-fill</code></td><td class="ApiTable-desc">Filled style</td></tr>
<tr><td><code class="ApiTable-prop">ph-duotone</code></td><td class="ApiTable-desc">Two-tone style</td></tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">aria-hidden="true"</code></td><td class="ApiTable-desc">For decorative icons (text provides meaning)</td></tr>
<tr><td><code class="ApiTable-prop">aria-label</code></td><td class="ApiTable-desc">For meaningful icons without visible text</td></tr>
<tr><td><code class="ApiTable-prop">role="img"</code></td><td class="ApiTable-desc">When icon conveys meaning</td></tr>
</tbody>
</table>

### CSS Custom Properties

<table class="ApiTable">
<thead>
<tr><th>Property</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">--text-secondary</code></td><td class="ApiTable-desc">—</td><td class="ApiTable-desc">Default icon color</td></tr>
<tr><td><code class="ApiTable-prop">--bg-secondary</code></td><td class="ApiTable-desc">—</td><td class="ApiTable-desc">IconBg background</td></tr>
<tr><td><code class="ApiTable-prop">--accent-primary</code></td><td class="ApiTable-desc">—</td><td class="ApiTable-desc">Info color</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base Icon */
.Icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1;
}

/* Sizes */
.Icon--xs { font-size: 0.75rem; }
.Icon--small { font-size: 1rem; }
.Icon--large { font-size: 1.5rem; }
.Icon--xl { font-size: 2rem; }

/* Colors */
.Icon--success { color: oklch(55% 0.15 150); }
.Icon--warning { color: oklch(70% 0.15 80); }
.Icon--error { color: oklch(55% 0.2 25); }
.Icon--info { color: var(--accent); }

/* Animations */
.Icon--spin {
  animation: spin 1s linear infinite;
}

.Icon--pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Icon Background */
.IconBg {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-s);
  color: var(--fg-3);
}

.IconBg--small {
  width: 28px;
  height: 28px;
  font-size: 0.875rem;
}

.IconBg--large {
  width: 56px;
  height: 56px;
  font-size: 1.5rem;
}

.IconBg--primary {
  background-color: oklch(60% 0.15 250 / 0.15);
  color: oklch(50% 0.15 250);
}

.IconBg--success {
  background-color: oklch(65% 0.15 150 / 0.15);
  color: oklch(45% 0.15 150);
}

.IconBg--warning {
  background-color: oklch(75% 0.15 80 / 0.15);
  color: oklch(50% 0.15 80);
}

.IconBg--error {
  background-color: oklch(55% 0.2 25 / 0.15);
  color: oklch(50% 0.2 25);
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## Accessibility

Icons require attention to ensure they're accessible:

### Decorative Icons
```html
<!-- Icon is purely decorative, text provides meaning -->
<button class="Button Button--primary">
    <i class="ph ph-plus" aria-hidden="true"></i>
    Add Item
</button>
```

### Meaningful Icons
```html
<!-- Icon-only button needs aria-label -->
<button class="Button Button--icon" aria-label="Search">
    <i class="ph ph-magnifying-glass"></i>
</button>

<!-- Or use visually-hidden text -->
<button class="Button Button--icon">
    <i class="ph ph-magnifying-glass"></i>
    <span class="sr-only">Search</span>
</button>
```

### Status Icons
```html
<!-- Provide text alternative for status -->
<span>
    <i class="ph ph-check-circle Icon Icon--success" aria-hidden="true"></i>
    <span>Complete</span>
</span>
```

---

## Weight Conventions

Standard uses a deliberate weight hierarchy across the interface. Use the right weight for the right context.

| Context | Weight | Rationale |
|---------|--------|-----------|
| **Navigation chrome** (pill nav, section links) | `ph-bold` | Heavier weight anchors the nav bar visually |
| **UI controls** (toolbar buttons, search, copy) | `ph` (regular) | Lighter weight recedes behind content |
| **Content icons** (alerts, lists, form hints) | `ph` (regular) | Matches body text optical weight |
| **Filled states** (active stars, favorite hearts) | `ph-fill` | Solid fill communicates "selected" or "active" |
| **Decorative showcase** (icon grid, style demos) | Any | Documentation context; all weights available |

```html
<!-- Navigation: bold -->
<i class="ph-bold ph-house"></i>

<!-- UI control: regular -->
<i class="ph ph-copy"></i>

<!-- Filled state: fill -->
<i class="ph-fill ph-star"></i>

<!-- Unfilled state: regular -->
<i class="ph ph-star"></i>
```

> **Rule of thumb:** Use `ph-bold` only for persistent navigation. Everything else uses `ph` (regular) or `ph-fill` for active/selected states.

---

## Best Practices

### Do

- ✓ **Use consistent sizing** — Match icon size to text size
- ✓ **Pair icons with text** — When possible, provide labels
- ✓ **Use recognizable icons** — Stick to common conventions
- ✓ **Provide aria-labels** — Required for icon-only buttons
- ✓ **Follow weight conventions** — Bold for nav, regular for content, fill for active states
- ✓ **Use semantic color classes** — `.Icon--success` for positive states

### Don't

- ✗ **Overuse icons** — Not everything needs an icon
- ✗ **Create visual noise** — Too many icons reduce clarity
- ✗ **Use ambiguous icons** — A hamburger menu isn't a hamburger
- ✗ **Forget color contrast** — Icons need sufficient contrast
- ✗ **Mix icon libraries** — Stick to Phosphor for consistency
- ✗ **Mix weights arbitrarily** — Don't use `ph-bold` for content icons or `ph` for nav
- ✗ **Use icons without accessible names** — Icon-only elements need aria-label
