# Switches

Switches toggle a single option on or off.

## Basic Switch

<Preview title="Basic Switch">
    <label class="Switch">
        <input type="checkbox">
        <span class="Switch-slider"></span>
    </label>
</Preview>

```html
<label class="Switch">
    <input type="checkbox">
    <span class="Switch-slider"></span>
</label>
```

## States

<Preview title="Switch States">
    <div style="display: flex; gap: var(--space-6); align-items: center;">
        <label class="Switch">
            <input type="checkbox">
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch">
            <input type="checkbox" checked>
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch">
            <input type="checkbox" disabled>
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch">
            <input type="checkbox" checked disabled>
            <span class="Switch-slider"></span>
        </label>
    </div>
</Preview>

```html
<input type="checkbox">           <!-- Off -->
<input type="checkbox" checked>   <!-- On -->
<input type="checkbox" disabled>  <!-- Disabled off -->
<input type="checkbox" checked disabled>  <!-- Disabled on -->
```

## Sizes

<Preview title="Switch Sizes">
    <div style="display: flex; gap: var(--space-6); align-items: center;">
        <label class="Switch Switch--small">
            <input type="checkbox" checked>
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch">
            <input type="checkbox" checked>
            <span class="Switch-slider"></span>
        </label>
        <label class="Switch Switch--large">
            <input type="checkbox" checked>
            <span class="Switch-slider"></span>
        </label>
    </div>
</Preview>

```html
<label class="Switch Switch--small">...</label>
<label class="Switch">...</label>
<label class="Switch Switch--large">...</label>
```

## With Label

<Preview title="Switch with Label">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <label class="Switch-label">
            <span class="Switch-label-text">
                <span>Dark mode</span>
                <small style="color: var(--fg-3);">Use dark theme across the app</small>
            </span>
            <span class="Switch">
                <input type="checkbox">
                <span class="Switch-slider"></span>
            </span>
        </label>
        <label class="Switch-label">
            <span class="Switch-label-text">
                <span>Notifications</span>
                <small style="color: var(--fg-3);">Receive push notifications</small>
            </span>
            <span class="Switch">
                <input type="checkbox" checked>
                <span class="Switch-slider"></span>
            </span>
        </label>
    </div>
</Preview>

```html
<label class="Switch-label">
    <span class="Switch-label-text">
        <span>Dark mode</span>
        <small>Use dark theme across the app</small>
    </span>
    <span class="Switch">
        <input type="checkbox">
        <span class="Switch-slider"></span>
    </span>
</label>
```

## In a Form

<Preview title="Settings Form">
    <div style="width: 320px; display: flex; flex-direction: column; gap: var(--space-3);">
        <label class="Switch-label" style="padding: var(--space-3) 0; border-bottom: 1px solid var(--bd);">
            <span>Email notifications</span>
            <span class="Switch Switch--small">
                <input type="checkbox" checked>
                <span class="Switch-slider"></span>
            </span>
        </label>
        <label class="Switch-label" style="padding: var(--space-3) 0; border-bottom: 1px solid var(--bd);">
            <span>SMS alerts</span>
            <span class="Switch Switch--small">
                <input type="checkbox">
                <span class="Switch-slider"></span>
            </span>
        </label>
        <label class="Switch-label" style="padding: var(--space-3) 0; border-bottom: 1px solid var(--bd);">
            <span>Marketing emails</span>
            <span class="Switch Switch--small">
                <input type="checkbox">
                <span class="Switch-slider"></span>
            </span>
        </label>
    </div>
</Preview>

---

## Common Patterns

### Settings Panel

<Preview title="Settings Panel with Switches">
    <div style="width: 360px; border: 1px solid var(--bd); border-radius: var(--radius-md); overflow: hidden;">
        <div style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--bd); font-weight: 600;">Preferences</div>
        <div style="display: flex; flex-direction: column;">
            <label class="Switch-label" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--bd);">
                <span class="Switch-label-text"><span>Dark mode</span><small style="color: var(--fg-3);">Use dark theme across the app</small></span>
                <span class="Switch"><input type="checkbox" checked><span class="Switch-slider"></span></span>
            </label>
            <label class="Switch-label" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--bd);">
                <span class="Switch-label-text"><span>Compact view</span><small style="color: var(--fg-3);">Reduce spacing in lists</small></span>
                <span class="Switch"><input type="checkbox"><span class="Switch-slider"></span></span>
            </label>
            <label class="Switch-label" style="padding: var(--space-3) var(--space-4);">
                <span class="Switch-label-text"><span>Sounds</span><small style="color: var(--fg-3);">Play notification sounds</small></span>
                <span class="Switch"><input type="checkbox" checked><span class="Switch-slider"></span></span>
            </label>
        </div>
    </div>
</Preview>

### Feature Flags

<Preview title="Feature Flags">
    <div style="width: 400px; display: flex; flex-direction: column; gap: var(--space-2);">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-2) var(--space-3); background: var(--bg-s); border-radius: var(--radius-sm);">
            <div style="display: flex; align-items: center; gap: var(--space-2);">
                <code style="font-size: 0.8rem;">BETA_EDITOR</code>
                <span class="Badge Badge--warning" style="font-size: 0.65rem;">Beta</span>
            </div>
            <label class="Switch Switch--small"><input type="checkbox" checked><span class="Switch-slider"></span></label>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-2) var(--space-3); background: var(--bg-s); border-radius: var(--radius-sm);">
            <div style="display: flex; align-items: center; gap: var(--space-2);">
                <code style="font-size: 0.8rem;">AI_ASSIST</code>
                <span class="Badge Badge--info" style="font-size: 0.65rem;">New</span>
            </div>
            <label class="Switch Switch--small"><input type="checkbox"><span class="Switch-slider"></span></label>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-2) var(--space-3); background: var(--bg-s); border-radius: var(--radius-sm);">
            <div style="display: flex; align-items: center; gap: var(--space-2);">
                <code style="font-size: 0.8rem;">DARK_MODE</code>
            </div>
            <label class="Switch Switch--small"><input type="checkbox" checked><span class="Switch-slider"></span></label>
        </div>
    </div>
</Preview>

### Notification Preferences

<Preview title="Notification Channels">
    <div style="width: 340px;">
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="border-bottom: 1px solid var(--bd);">
                    <th style="text-align: left; padding: var(--space-2) 0; font-size: 0.8rem; color: var(--fg-3);">Channel</th>
                    <th style="text-align: center; padding: var(--space-2); font-size: 0.8rem; color: var(--fg-3);">Email</th>
                    <th style="text-align: center; padding: var(--space-2); font-size: 0.8rem; color: var(--fg-3);">Push</th>
                    <th style="text-align: center; padding: var(--space-2); font-size: 0.8rem; color: var(--fg-3);">SMS</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid var(--bd);">
                    <td style="padding: var(--space-2) 0; font-size: 0.875rem;">Comments</td>
                    <td style="text-align: center;"><label class="Switch Switch--small"><input type="checkbox" checked><span class="Switch-slider"></span></label></td>
                    <td style="text-align: center;"><label class="Switch Switch--small"><input type="checkbox" checked><span class="Switch-slider"></span></label></td>
                    <td style="text-align: center;"><label class="Switch Switch--small"><input type="checkbox"><span class="Switch-slider"></span></label></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--bd);">
                    <td style="padding: var(--space-2) 0; font-size: 0.875rem;">Mentions</td>
                    <td style="text-align: center;"><label class="Switch Switch--small"><input type="checkbox" checked><span class="Switch-slider"></span></label></td>
                    <td style="text-align: center;"><label class="Switch Switch--small"><input type="checkbox" checked><span class="Switch-slider"></span></label></td>
                    <td style="text-align: center;"><label class="Switch Switch--small"><input type="checkbox" checked><span class="Switch-slider"></span></label></td>
                </tr>
                <tr>
                    <td style="padding: var(--space-2) 0; font-size: 0.875rem;">Updates</td>
                    <td style="text-align: center;"><label class="Switch Switch--small"><input type="checkbox" checked><span class="Switch-slider"></span></label></td>
                    <td style="text-align: center;"><label class="Switch Switch--small"><input type="checkbox"><span class="Switch-slider"></span></label></td>
                    <td style="text-align: center;"><label class="Switch Switch--small"><input type="checkbox"><span class="Switch-slider"></span></label></td>
                </tr>
            </tbody>
        </table>
    </div>
</Preview>

---

## Customization

Override switch styles using CSS custom properties:

```css
/* Custom accent color */
.Switch input:checked + .Switch-slider {
  background: oklch(55% 0.2 150);
  border-color: oklch(55% 0.2 150);
}

/* Larger thumb */
.Switch--xl .Switch-slider::before {
  width: 24px;
  height: 24px;
}

/* Square switch (no rounded corners) */
.Switch--square .Switch-slider {
  border-radius: var(--radius-sm);
}
.Switch--square .Switch-slider::before {
  border-radius: var(--radius-xs);
}

/* Custom track colors */
.Switch--danger input:checked + .Switch-slider {
  background: oklch(55% 0.2 25);
  border-color: oklch(55% 0.2 25);
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
<td><code class="ApiTable-prop">.Switch</code></td>
<td class="ApiTable-desc">Base switch wrapper (label element, required)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch-slider</code></td>
<td class="ApiTable-desc">Visual slider/track element</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch-label</code></td>
<td class="ApiTable-desc">Container for switch with text label</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch-label-text</code></td>
<td class="ApiTable-desc">Text wrapper (supports title + description)</td>
</tr>
</tbody>
</table>

### Size Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Switch--small</code></td>
<td class="ApiTable-desc">Smaller switch size</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch--large</code></td>
<td class="ApiTable-desc">Larger switch size</td>
</tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">checked</code></td>
<td class="ApiTable-desc">Checked/active state (on)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">disabled</code></td>
<td class="ApiTable-desc">Non-interactive state</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base switch */
.Switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.Switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* Track */
.Switch-slider {
  position: relative;
  width: 44px;
  height: 24px;
  background: var(--bg-s);
  border: 1px solid var(--bd-s);
  border-radius: 999px;
  transition: background var(--dur-n), border-color var(--dur-n);
}

/* Thumb */
.Switch-slider::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  transition: transform var(--dur-n);
  box-shadow: var(--shadow-sm);
}

/* Checked state */
.Switch input:checked + .Switch-slider {
  background: var(--accent);
  border-color: var(--accent);
}

.Switch input:checked + .Switch-slider::before {
  transform: translateX(20px);
}

/* Focus ring */
.Switch input:focus-visible + .Switch-slider {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Disabled */
.Switch input:disabled + .Switch-slider {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Small */
.Switch--small .Switch-slider {
  width: 34px;
  height: 18px;
}
.Switch--small .Switch-slider::before {
  width: 12px;
  height: 12px;
}
.Switch--small input:checked + .Switch-slider::before {
  transform: translateX(16px);
}

/* Large */
.Switch--large .Switch-slider {
  width: 54px;
  height: 30px;
}
.Switch--large .Switch-slider::before {
  width: 24px;
  height: 24px;
}
.Switch--large input:checked + .Switch-slider::before {
  transform: translateX(24px);
}

/* Label layout */
.Switch-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  cursor: pointer;
}

.Switch-label-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
```

---

## Accessibility

- Switches use native `<input type="checkbox">` for full accessibility
- Labels are clickable to toggle the switch
- Keyboard accessible (Space to toggle when focused)
- Screen readers announce the checked state
- Use `aria-describedby` to associate helper text with the switch

### Keyboard Support

| Key | Action |
|-----|--------|
| Space | Toggle the switch on/off |
| Tab | Move focus to/from the switch |

---

## Best Practices

### Do

- ✓ **Use for binary settings** — On/off, enabled/disabled
- ✓ **Show immediate effect** — Changes apply instantly, no submit button
- ✓ **Provide clear labels** — Describe what the switch controls
- ✓ **Keep labels positive** — "Enable notifications" not "Disable notifications"
- ✓ **Group related switches** — Settings panels with logical grouping
- ✓ **Use appropriate sizes** — Small for dense UIs, large for touch targets

### Don't

- ✗ **Use for forms requiring submission** — Use checkboxes instead
- ✗ **Hide the current state** — Always make it clear what on/off means
- ✗ **Use for multiple selections** — Switches are single binary choices
- ✗ **Use without labels** — Every switch needs a text label
- ✗ **Mix sizes in a group** — Keep sizes consistent within a section
- ✗ **Use negative labels** — Avoid "Disable dark mode" phrasing
