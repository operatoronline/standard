# Avatars

Avatars are visual representations of users, entities, or brands. They provide identity and personalization throughout the interface.

---

## Basic Avatar

A simple image avatar.

<Preview title="Basic Avatar">
    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=basic" class="Avatar" alt="User Avatar" loading="lazy" decoding="async">
</Preview>

```html
<img src="..." class="Avatar" alt="User Avatar" loading="lazy" decoding="async">
```

---

## Avatar Sizes

Avatars come in five sizes: xs, small, medium (default), large, and xl.

<Preview title="Avatar Sizes">
    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=size1" class="Avatar Avatar--xs" alt="User" loading="lazy" decoding="async">
    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=size2" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=size3" class="Avatar" alt="User" loading="lazy" decoding="async">
    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=size4" class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=size5" class="Avatar Avatar--xl" alt="User" loading="lazy" decoding="async">
</Preview>

```html
<img src="..." class="Avatar Avatar--xs" alt="User" loading="lazy" decoding="async">
<img src="..." class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
<img src="..." class="Avatar" alt="User" loading="lazy" decoding="async">
<img src="..." class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
<img src="..." class="Avatar Avatar--xl" alt="User" loading="lazy" decoding="async">
```

---

## Avatar with Initials

When no image is available, use initials as a fallback.

<Preview title="Initials Avatars">
    <span class="Avatar Avatar--initials">JD</span>
    <span class="Avatar Avatar--initials Avatar--primary">SC</span>
    <span class="Avatar Avatar--initials Avatar--success">MK</span>
    <span class="Avatar Avatar--initials Avatar--warning">RB</span>
</Preview>

```html
<span class="Avatar Avatar--initials">JD</span>
<span class="Avatar Avatar--initials Avatar--primary">SC</span>
```

<Preview title="Initials in All Sizes">
    <span class="Avatar Avatar--initials Avatar--xs">JD</span>
    <span class="Avatar Avatar--initials Avatar--small">JD</span>
    <span class="Avatar Avatar--initials">JD</span>
    <span class="Avatar Avatar--initials Avatar--large">JD</span>
    <span class="Avatar Avatar--initials Avatar--xl">JD</span>
</Preview>

```html
<span class="Avatar Avatar--initials Avatar--small">JD</span>
<span class="Avatar Avatar--initials Avatar--large">JD</span>
```

---

## Avatar with Icon

Use an icon when no image or initials are available.

<Preview title="Icon Avatars">
    <span class="Avatar Avatar--icon">
        <i class="ph ph-user"></i>
    </span>
    <span class="Avatar Avatar--icon Avatar--primary">
        <i class="ph ph-user"></i>
    </span>
    <span class="Avatar Avatar--icon Avatar--large">
        <i class="ph ph-user"></i>
    </span>
</Preview>

```html
<span class="Avatar Avatar--icon">
    <i class="ph ph-user"></i>
</span>
```

---

## Avatar Shapes

Avatars can be circular (default) or rounded square.

<Preview title="Avatar Shapes">
    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=shape1" class="Avatar" alt="User" loading="lazy" decoding="async">
    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=shape2" class="Avatar Avatar--rounded" alt="User" loading="lazy" decoding="async">
    <span class="Avatar Avatar--initials">JD</span>
    <span class="Avatar Avatar--initials Avatar--rounded">SC</span>
</Preview>

```html
<img src="..." class="Avatar" alt="User" loading="lazy" decoding="async">
<img src="..." class="Avatar Avatar--rounded" alt="User" loading="lazy" decoding="async">
```

---

## Avatar with Status

Show online, away, busy, or offline status with an indicator.

<Preview title="Status Indicators">
    <div style="position: relative; display: inline-block;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=status1" class="Avatar" alt="User" loading="lazy" decoding="async">
        <span class="Avatar-status Avatar-status--online"></span>
    </div>
    <div style="position: relative; display: inline-block;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=status2" class="Avatar" alt="User" loading="lazy" decoding="async">
        <span class="Avatar-status Avatar-status--away"></span>
    </div>
    <div style="position: relative; display: inline-block;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=status3" class="Avatar" alt="User" loading="lazy" decoding="async">
        <span class="Avatar-status Avatar-status--busy"></span>
    </div>
    <div style="position: relative; display: inline-block;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=status4" class="Avatar" alt="User" loading="lazy" decoding="async">
        <span class="Avatar-status Avatar-status--offline"></span>
    </div>
</Preview>

```html
<div style="position: relative; display: inline-block;">
    <img src="..." class="Avatar" alt="User" loading="lazy" decoding="async">
    <span class="Avatar-status Avatar-status--online"></span>
</div>
```

<Preview title="Status on Different Sizes">
    <div style="position: relative; display: inline-block;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sizes1" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
        <span class="Avatar-status Avatar-status--online Avatar-status--small"></span>
    </div>
    <div style="position: relative; display: inline-block;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sizes2" class="Avatar" alt="User" loading="lazy" decoding="async">
        <span class="Avatar-status Avatar-status--online"></span>
    </div>
    <div style="position: relative; display: inline-block;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sizes3" class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
        <span class="Avatar-status Avatar-status--online Avatar-status--large"></span>
    </div>
</Preview>

---

## Avatar with Badge

Display a notification badge on an avatar.

<Preview title="Avatar with Badge">
    <div style="position: relative; display: inline-block;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=badged1" class="Avatar" alt="User" loading="lazy" decoding="async">
        <span class="Badge Badge--count Badge--error Badge--avatar">3</span>
    </div>
    <div style="position: relative; display: inline-block;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=badged2" class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
        <span class="Badge Badge--count Badge--primary Badge--avatar">12</span>
    </div>
</Preview>

```html
<div style="position: relative; display: inline-block;">
    <img src="..." class="Avatar" alt="User" loading="lazy" decoding="async">
    <span class="Badge Badge--count Badge--error Badge--avatar">3</span>
</div>
```

---

## Avatar Groups

Stack multiple avatars to represent a group.

<Preview title="Avatar Group">
    <div class="AvatarGroup">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=group1" class="Avatar" alt="User 1" loading="lazy" decoding="async">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=group2" class="Avatar" alt="User 2" loading="lazy" decoding="async">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=group3" class="Avatar" alt="User 3" loading="lazy" decoding="async">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=group4" class="Avatar" alt="User 4" loading="lazy" decoding="async">
    </div>
</Preview>

```html
<div class="AvatarGroup">
    <img src="..." class="Avatar" alt="User 1" loading="lazy" decoding="async">
    <img src="..." class="Avatar" alt="User 2" loading="lazy" decoding="async">
    <img src="..." class="Avatar" alt="User 3" loading="lazy" decoding="async">
    <img src="..." class="Avatar" alt="User 4" loading="lazy" decoding="async">
</div>
```

<Preview title="Avatar Group with Overflow">
    <div class="AvatarGroup">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=over1" class="Avatar" alt="User 1" loading="lazy" decoding="async">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=over2" class="Avatar" alt="User 2" loading="lazy" decoding="async">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=over3" class="Avatar" alt="User 3" loading="lazy" decoding="async">
        <span class="Avatar Avatar--initials AvatarGroup-overflow">+5</span>
    </div>
</Preview>

```html
<div class="AvatarGroup">
    <img src="..." class="Avatar" alt="User 1" loading="lazy" decoding="async">
    <img src="..." class="Avatar" alt="User 2" loading="lazy" decoding="async">
    <img src="..." class="Avatar" alt="User 3" loading="lazy" decoding="async">
    <span class="Avatar Avatar--initials AvatarGroup-overflow">+5</span>
</div>
```

<Preview title="Avatar Group Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div class="AvatarGroup AvatarGroup--small">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sm1" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sm2" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sm3" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
        </div>
        <div class="AvatarGroup">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=md1" class="Avatar" alt="User" loading="lazy" decoding="async">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=md2" class="Avatar" alt="User" loading="lazy" decoding="async">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=md3" class="Avatar" alt="User" loading="lazy" decoding="async">
        </div>
        <div class="AvatarGroup AvatarGroup--large">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=lg1" class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=lg2" class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=lg3" class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
        </div>
    </div>
</Preview>

---

## Avatar Stack (Vertical)

Stack avatars vertically for lists.

<Preview title="Vertical Avatar Stack">
    <div class="AvatarStack">
        <div class="AvatarStack-item">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=stack1" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
            <span class="AvatarStack-name">Sarah Chen</span>
        </div>
        <div class="AvatarStack-item">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=stack2" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
            <span class="AvatarStack-name">John Smith</span>
        </div>
        <div class="AvatarStack-item">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=stack3" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
            <span class="AvatarStack-name">Mike Johnson</span>
        </div>
    </div>
</Preview>

```html
<div class="AvatarStack">
    <div class="AvatarStack-item">
        <img src="..." class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
        <span class="AvatarStack-name">Sarah Chen</span>
    </div>
    ...
</div>
```

---

## Interactive Avatar

Avatars that respond to user interaction.

<Preview title="Clickable Avatar">
    <button class="Avatar-button" aria-label="View profile">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=click1" class="Avatar" alt="User" loading="lazy" decoding="async">
    </button>
    <button class="Avatar-button" aria-label="View profile">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=click2" class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
    </button>
</Preview>

```html
<button class="Avatar-button" aria-label="View profile">
    <img src="..." class="Avatar" alt="User" loading="lazy" decoding="async">
</button>
```

<Preview title="Avatar with Edit Overlay">
    <div class="Avatar-editable Avatar-editable--large">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=edit1" class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
        <button class="Avatar-edit" aria-label="Change photo">
            <i class="ph ph-camera"></i>
        </button>
    </div>
</Preview>

```html
<div class="Avatar-editable Avatar-editable--large">
    <img src="..." class="Avatar Avatar--large" alt="User" loading="lazy" decoding="async">
    <button class="Avatar-edit" aria-label="Change photo">
        <i class="ph ph-camera"></i>
    </button>
</div>
```

---

## Common Patterns

### Comment Header

<Preview title="Comment Author">
    <div style="display: flex; align-items: center; gap: var(--space-3); max-width: 400px;">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=comment" class="Avatar" alt="Sarah Chen" loading="lazy" decoding="async">
        <div style="flex: 1;">
            <div style="font-weight: 500;">Sarah Chen</div>
            <div style="font-size: 0.8rem; color: var(--fg-3);">2 hours ago</div>
        </div>
        <button class="Button Button--icon Button--ghost Button--small" aria-label="More options">
            <i class="ph ph-dots-three"></i>
        </button>
    </div>
</Preview>

### Team Members

<Preview title="Team Members Card">
    <div class="Card" style="max-width: 320px;">
        <div class="Card-header">
            <h4 class="Card-title">Team Members</h4>
            <span class="Badge">5</span>
        </div>
        <div class="Card-body" style="padding-top: 0;">
            <div style="display: flex; flex-direction: column; gap: var(--space-3);">
                <div style="display: flex; align-items: center; gap: var(--space-3);">
                    <div style="position: relative;">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=team1" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
                        <span class="Avatar-status Avatar-status--online Avatar-status--small"></span>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 500; font-size: 0.9rem;">Sarah Chen</div>
                        <div style="font-size: 0.75rem; color: var(--fg-3);">Lead Designer</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: var(--space-3);">
                    <div style="position: relative;">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=team2" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
                        <span class="Avatar-status Avatar-status--online Avatar-status--small"></span>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 500; font-size: 0.9rem;">John Smith</div>
                        <div style="font-size: 0.75rem; color: var(--fg-3);">Developer</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: var(--space-3);">
                    <div style="position: relative;">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=team3" class="Avatar Avatar--small" alt="User" loading="lazy" decoding="async">
                        <span class="Avatar-status Avatar-status--away Avatar-status--small"></span>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 500; font-size: 0.9rem;">Mike Johnson</div>
                        <div style="font-size: 0.75rem; color: var(--fg-3);">Product Manager</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Card-footer">
            <button class="Button Button--secondary Button--small Button--block">
                <i class="ph ph-plus Button-icon"></i>
                Invite Member
            </button>
        </div>
    </div>
</Preview>

### Assignees Selector

<Preview title="Assignees Display">
    <div style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m); max-width: 360px;">
        <span style="font-size: 0.875rem; color: var(--fg-3);">Assignees:</span>
        <div class="AvatarGroup">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=assign1" class="Avatar Avatar--small" alt="User 1" loading="lazy" decoding="async">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=assign2" class="Avatar Avatar--small" alt="User 2" loading="lazy" decoding="async">
            <span class="Avatar Avatar--small Avatar--initials AvatarGroup-overflow">+3</span>
        </div>
        <button class="Button Button--icon Button--ghost Button--small" aria-label="Add assignee" style="margin-left: auto;">
            <i class="ph ph-plus"></i>
        </button>
    </div>
</Preview>

### Profile Header

<Preview title="Profile Header">
    <div style="text-align: center; padding: var(--space-6); max-width: 320px; margin: 0 auto;">
        <div class="Avatar-editable" style="margin: 0 auto var(--space-4);">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=profile" class="Avatar Avatar--xl" alt="Sarah Chen" loading="lazy" decoding="async">
            <button class="Avatar-edit" aria-label="Change photo">
                <i class="ph ph-camera"></i>
            </button>
        </div>
        <h3 style="margin: 0 0 var(--space-1);">Sarah Chen</h3>
        <p style="color: var(--fg-3); margin: 0 0 var(--space-4); font-size: 0.9rem;">Senior Product Designer at Standard</p>
        <div style="display: flex; justify-content: center; gap: var(--space-3);">
            <button class="Button Button--primary Button--small">Follow</button>
            <button class="Button Button--secondary Button--small">Message</button>
        </div>
    </div>
</Preview>

---

## Customization

Override avatar styles using CSS custom properties:

```css
/* Custom avatar sizes */
.Avatar--xxl {
  width: 120px;
  height: 120px;
  font-size: 2rem;
}

/* Custom initials colors */
.Avatar--initials.Avatar--brand {
  background-color: oklch(60% 0.15 280 / 0.15);
  color: oklch(50% 0.15 280);
  border-color: transparent;
}

/* Square avatars */
.Avatar--square {
  border-radius: var(--r-s);
}

/* Bordered avatars for light backgrounds */
.Avatar--bordered {
  border: 2px solid var(--bd);
}

/* Custom group overlap */
.AvatarGroup--tight .Avatar {
  margin-left: -16px;
}

/* Ring style for selected state */
.Avatar--selected {
  box-shadow: 0 0 0 3px var(--accent);
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
<tr><td><code class="ApiTable-prop">.Avatar</code></td><td class="ApiTable-desc">Base avatar styling (40px circle)</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--xs</code></td><td class="ApiTable-desc">Extra small (24px)</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--small</code></td><td class="ApiTable-desc">Small size (32px)</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--large</code></td><td class="ApiTable-desc">Large size (56px)</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--xl</code></td><td class="ApiTable-desc">Extra large (80px)</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--rounded</code></td><td class="ApiTable-desc">Rounded square shape</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--initials</code></td><td class="ApiTable-desc">Text initials variant</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--icon</code></td><td class="ApiTable-desc">Icon placeholder variant</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--primary</code></td><td class="ApiTable-desc">Primary color initials</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--success</code></td><td class="ApiTable-desc">Success color initials</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar--warning</code></td><td class="ApiTable-desc">Warning color initials</td></tr>
</tbody>
</table>

### Status Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Avatar-status</code></td><td class="ApiTable-desc">Status indicator dot</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar-status--online</code></td><td class="ApiTable-desc">Online status (green)</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar-status--away</code></td><td class="ApiTable-desc">Away status (yellow)</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar-status--busy</code></td><td class="ApiTable-desc">Busy status (red)</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar-status--offline</code></td><td class="ApiTable-desc">Offline status (gray)</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar-status--small</code></td><td class="ApiTable-desc">Smaller status dot</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar-status--large</code></td><td class="ApiTable-desc">Larger status dot</td></tr>
</tbody>
</table>

### Group & Stack Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.AvatarGroup</code></td><td class="ApiTable-desc">Stacked avatar container</td></tr>
<tr><td><code class="ApiTable-prop">.AvatarGroup--small</code></td><td class="ApiTable-desc">Small group spacing</td></tr>
<tr><td><code class="ApiTable-prop">.AvatarGroup--large</code></td><td class="ApiTable-desc">Large group spacing</td></tr>
<tr><td><code class="ApiTable-prop">.AvatarGroup-overflow</code></td><td class="ApiTable-desc">Overflow count indicator</td></tr>
<tr><td><code class="ApiTable-prop">.AvatarStack</code></td><td class="ApiTable-desc">Vertical list container</td></tr>
<tr><td><code class="ApiTable-prop">.AvatarStack-item</code></td><td class="ApiTable-desc">Single item in stack</td></tr>
<tr><td><code class="ApiTable-prop">.AvatarStack-name</code></td><td class="ApiTable-desc">Name label in stack</td></tr>
</tbody>
</table>

### Interactive Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Avatar-button</code></td><td class="ApiTable-desc">Clickable avatar wrapper</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar-editable</code></td><td class="ApiTable-desc">Container for edit overlay</td></tr>
<tr><td><code class="ApiTable-prop">.Avatar-edit</code></td><td class="ApiTable-desc">Edit button overlay</td></tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">alt</code></td><td class="ApiTable-desc">Required for image avatars; describe the person</td></tr>
<tr><td><code class="ApiTable-prop">aria-label</code></td><td class="ApiTable-desc">Required for status indicators and interactive avatars</td></tr>
<tr><td><code class="ApiTable-prop">role="group"</code></td><td class="ApiTable-desc">Use on AvatarGroup with aria-label for count</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base Avatar */
.Avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--bg-s);
  color: var(--fg);
  font-weight: 600;
  font-size: var(--fs-base);
  flex-shrink: 0;
}

/* Sizes */
.Avatar--xs {
  width: 24px;
  height: 24px;
  font-size: var(--fs-2xs);
}

.Avatar--small {
  width: 32px;
  height: 32px;
  font-size: var(--fs-sm);
}

.Avatar--large {
  width: 56px;
  height: 56px;
  font-size: var(--fs-2xl);
}

.Avatar--xl {
  width: 80px;
  height: 80px;
  font-size: var(--fs-4xl);
}

/* Shapes */
.Avatar--rounded {
  border-radius: var(--r-m);
}

/* Initials */
.Avatar--initials {
  background-color: var(--bg-s);
  border: 1px solid var(--bd);
}

.Avatar--initials.Avatar--primary {
  background-color: oklch(60% 0.15 250 / 0.15);
  color: oklch(50% 0.15 250);
  border-color: transparent;
}

.Avatar--initials.Avatar--success {
  background-color: oklch(65% 0.15 150 / 0.15);
  color: oklch(45% 0.15 150);
  border-color: transparent;
}

.Avatar--initials.Avatar--warning {
  background-color: oklch(75% 0.15 80 / 0.15);
  color: oklch(50% 0.15 80);
  border-color: transparent;
}

/* Icon Avatar */
.Avatar--icon {
  background-color: var(--bg-s);
  border: 1px solid var(--bd);
}

.Avatar--icon.Avatar--primary {
  background-color: oklch(60% 0.15 250 / 0.15);
  color: oklch(50% 0.15 250);
  border-color: transparent;
}

.Avatar--icon i {
  font-size: 1.2em;
}

/* Status Indicator */
.Avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--bg);
  background-color: var(--fg-3);
}

.Avatar-status--online {
  background-color: oklch(55% 0.15 150);
}

.Avatar-status--away {
  background-color: oklch(70% 0.15 80);
}

.Avatar-status--busy {
  background-color: oklch(55% 0.2 25);
}

.Avatar-status--offline {
  background-color: var(--fg-3);
}

.Avatar-status--small {
  width: 10px;
  height: 10px;
}

.Avatar-status--large {
  width: 16px;
  height: 16px;
}

/* Avatar Group */
.AvatarGroup {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.AvatarGroup .Avatar {
  margin-left: -12px;
  border: 2px solid var(--bg);
  transition: transform var(--dur-f);
}

.AvatarGroup .Avatar:last-child {
  margin-left: 0;
}

.AvatarGroup .Avatar:hover {
  transform: translateY(-2px);
  z-index: 1;
}

.AvatarGroup--small .Avatar {
  margin-left: -10px;
}

.AvatarGroup--large .Avatar {
  margin-left: -16px;
}

.AvatarGroup-overflow {
  background-color: var(--bg-s);
  border-color: var(--bd);
  font-size: var(--fs-xs);
}

/* Avatar Stack (Vertical) */
.AvatarStack {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.AvatarStack-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.AvatarStack-name {
  font-size: var(--fs-lg);
  font-weight: 500;
}

/* Interactive Avatar */
.Avatar-button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  transition: transform var(--dur-f);
}

.Avatar-button:hover {
  transform: scale(1.05);
}

.Avatar-button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Editable Avatar */
.Avatar-editable {
  position: relative;
  display: inline-block;
}

.Avatar-editable .Avatar {
  width: 56px;
  height: 56px;
}

.Avatar-editable--large .Avatar {
  width: 80px;
  height: 80px;
}

.Avatar-edit {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid var(--bg);
  background-color: var(--bg-s);
  color: var(--fg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color var(--dur-f);
}

.Avatar-edit:hover {
  background-color: var(--bd);
}

.Avatar-edit:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.Avatar-editable--large .Avatar-edit {
  width: 32px;
  height: 32px;
}
```

---

## Accessibility

Avatars require attention to ensure they're accessible:

### Alt Text
```html
<!-- Always provide meaningful alt text -->
<img src="..." class="Avatar" alt="Sarah Chen's profile photo" loading="lazy" decoding="async">

<!-- For decorative avatars in context -->
<img src="..." class="Avatar" alt="" role="presentation" loading="lazy" decoding="async">
```

### Interactive Avatars
```html
<!-- Clickable avatar needs accessible label -->
<button class="Avatar-button" aria-label="View Sarah Chen's profile">
    <img src="..." class="Avatar" alt="" loading="lazy" decoding="async">
</button>

<!-- Edit avatar with clear action -->
<button class="Avatar-edit" aria-label="Change profile photo">
    <i class="ph ph-camera"></i>
</button>
```

### Status Indicators
```html
<!-- Status should be announced -->
<div style="position: relative;">
    <img src="..." class="Avatar" alt="Sarah Chen" loading="lazy" decoding="async">
    <span class="Avatar-status Avatar-status--online" aria-label="Online"></span>
</div>

<!-- Or include in alt text -->
<img src="..." class="Avatar" alt="Sarah Chen (online)" loading="lazy" decoding="async">
```

### Avatar Groups
```html
<!-- Provide group context -->
<div class="AvatarGroup" role="group" aria-label="5 team members">
    <img src="..." class="Avatar" alt="Sarah Chen" loading="lazy" decoding="async">
    <img src="..." class="Avatar" alt="John Smith" loading="lazy" decoding="async">
    <span class="Avatar Avatar--initials" aria-label="3 more members">+3</span>
</div>
```

---

## Best Practices

### Do

- ✓ **Always provide alt text** — Describe who the avatar represents
- ✓ **Use consistent sizing** — Match avatar sizes within a context
- ✓ **Show fallbacks** — Use initials or icons when images fail
- ✓ **Indicate status clearly** — Use recognizable colors for status
- ✓ **Keep groups reasonable** — Show 3-5 avatars, then overflow

### Don't

- ✗ **Use low-quality images** — Ensure images are sharp at 2x
- ✗ **Crop faces poorly** — Faces should be centered and visible
- ✗ **Mix sizes randomly** — Be intentional about size hierarchy
- ✗ **Forget loading states** — Show placeholder during load
- ✗ **Rely on color alone** — Status needs more than just color
