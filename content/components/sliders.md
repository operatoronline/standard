# Sliders

Sliders allow users to select a value or range from a continuous or discrete set of values by moving a handle along a track.

---

## Basic Slider

A simple range input with Standard styling.

<Preview title="Basic Slider">
    <div style="width: 100%; max-width: 320px;">
        <input type="range" class="Slider" min="0" max="100" value="50">
    </div>
</Preview>

```html
<input type="range" class="Slider" min="0" max="100" value="50">
```

---

## With Labels

Add min/max labels for context.

<Preview title="Slider with Labels">
    <div class="Slider-container" style="max-width: 320px;">
        <div class="Slider-labels">
            <span>0</span>
            <span>100</span>
        </div>
        <input type="range" class="Slider" min="0" max="100" value="50">
    </div>
</Preview>

```html
<div class="Slider-container">
    <div class="Slider-labels">
        <span>0</span>
        <span>100</span>
    </div>
    <input type="range" class="Slider" min="0" max="100" value="50">
</div>
```

---

## With Value Display

Show the current value alongside the slider.

<Preview title="Slider with Value">
    <div class="Slider-container" style="max-width: 320px;">
        <div class="Layout-split" style="margin-bottom: var(--space-2);">
            <label style="font-weight: 500;">Volume</label>
            <span class="Slider-value">50%</span>
        </div>
        <input type="range" class="Slider" min="0" max="100" value="50">
    </div>
</Preview>

```html
<div class="Slider-container">
    <div class="Layout-split">
        <label>Volume</label>
        <span class="Slider-value">50%</span>
    </div>
    <input type="range" class="Slider" min="0" max="100" value="50">
</div>
```

```javascript
// Update value display
const slider = document.querySelector('.Slider');
const display = document.querySelector('.Slider-value');
slider.addEventListener('input', () => {
    display.textContent = slider.value + '%';
});
```

---

## Discrete Steps

Use the `step` attribute for predefined increments.

<Preview title="Stepped Slider">
    <div class="Slider-container" style="max-width: 320px;">
        <div class="Layout-split" style="margin-bottom: var(--space-2);">
            <label style="font-weight: 500;">Quality</label>
            <span class="Slider-value">Medium</span>
        </div>
        <input type="range" class="Slider" min="1" max="5" step="1" value="3">
        <div class="Slider-ticks">
            <span>Low</span>
            <span></span>
            <span>Med</span>
            <span></span>
            <span>High</span>
        </div>
    </div>
</Preview>

```html
<input type="range" class="Slider" min="1" max="5" step="1" value="3">
<div class="Slider-ticks">
    <span>Low</span>
    <span></span>
    <span>Med</span>
    <span></span>
    <span>High</span>
</div>
```

---

## Sizes

<Preview title="Slider Sizes">
    <div class="Layout-stack" style="max-width: 320px;">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Small</small>
            <input type="range" class="Slider Slider--small" min="0" max="100" value="30">
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Default</small>
            <input type="range" class="Slider" min="0" max="100" value="50">
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Large</small>
            <input type="range" class="Slider Slider--large" min="0" max="100" value="70">
        </div>
    </div>
</Preview>

```html
<input type="range" class="Slider Slider--small" ...>
<input type="range" class="Slider" ...>
<input type="range" class="Slider Slider--large" ...>
```

---

## Color Variants

<Preview title="Colored Sliders">
    <div class="Layout-stack" style="max-width: 320px;">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Default (Accent)</small>
            <input type="range" class="Slider" min="0" max="100" value="60">
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Success</small>
            <input type="range" class="Slider Slider--success" min="0" max="100" value="80">
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Warning</small>
            <input type="range" class="Slider Slider--warning" min="0" max="100" value="40">
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Error</small>
            <input type="range" class="Slider Slider--error" min="0" max="100" value="20">
        </div>
    </div>
</Preview>

```html
<input type="range" class="Slider Slider--success" ...>
<input type="range" class="Slider Slider--warning" ...>
<input type="range" class="Slider Slider--error" ...>
```

---

## Disabled State

<Preview title="Disabled Slider">
    <div style="max-width: 320px;">
        <input type="range" class="Slider" min="0" max="100" value="50" disabled>
    </div>
</Preview>

```html
<input type="range" class="Slider" min="0" max="100" value="50" disabled>
```

---

## In Forms

Common slider use cases in forms.

<Preview title="Settings Form">
    <div class="Layout-stack" style="max-width: 400px; padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-m);">
        <div class="Slider-container">
            <div class="Layout-split" style="margin-bottom: var(--space-2);">
                <label style="font-weight: 500;">Brightness</label>
                <span style="color: var(--fg-3);">75%</span>
            </div>
            <input type="range" class="Slider" min="0" max="100" value="75">
        </div>
        <div class="Slider-container">
            <div class="Layout-split" style="margin-bottom: var(--space-2);">
                <label style="font-weight: 500;">Contrast</label>
                <span style="color: var(--fg-3);">50%</span>
            </div>
            <input type="range" class="Slider" min="0" max="100" value="50">
        </div>
        <div class="Slider-container">
            <div class="Layout-split" style="margin-bottom: var(--space-2);">
                <label style="font-weight: 500;">Saturation</label>
                <span style="color: var(--fg-3);">60%</span>
            </div>
            <input type="range" class="Slider" min="0" max="100" value="60">
        </div>
    </div>
</Preview>

### Price Range Filter

<Preview title="Price Range">
    <div style="max-width: 320px; padding: var(--space-4); border: 1px solid var(--bd); border-radius: var(--r-m);">
        <div style="font-weight: 600; margin-bottom: var(--space-3);">Price Range</div>
        <div class="Layout-split" style="margin-bottom: var(--space-3);">
            <div>
                <small style="color: var(--fg-3);">Min</small>
                <div style="font-size: 1.25rem; font-weight: 600;">$25</div>
            </div>
            <div style="text-align: right;">
                <small style="color: var(--fg-3);">Max</small>
                <div style="font-size: 1.25rem; font-weight: 600;">$150</div>
            </div>
        </div>
        <input type="range" class="Slider" min="0" max="200" value="150">
        <div class="Slider-labels" style="margin-top: var(--space-1);">
            <span style="font-size: 0.75rem; color: var(--fg-3);">$0</span>
            <span style="font-size: 0.75rem; color: var(--fg-3);">$200</span>
        </div>
    </div>
</Preview>

---

## Common Patterns

### Audio Player Volume

<Preview title="Audio Volume Control">
    <div style="display: flex; align-items: center; gap: var(--space-3); max-width: 280px; padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
        <i class="ph ph-speaker-low" style="color: var(--fg-3);"></i>
        <input type="range" class="Slider Slider--small" min="0" max="100" value="65">
        <i class="ph ph-speaker-high" style="color: var(--fg-3);"></i>
    </div>
</Preview>

### Filter Panel Price Range

<Preview title="Price Range Filter">
    <div style="max-width: 280px; padding: var(--space-4); border: 1px solid var(--bd); border-radius: var(--r-m);">
        <div style="font-weight: 600; margin-bottom: var(--space-3);">Price Range</div>
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-2); font-size: 0.9rem;">
            <span>$25</span>
            <span>$150</span>
        </div>
        <input type="range" class="Slider" min="0" max="200" value="150">
        <div class="Slider-labels" style="margin-top: var(--space-1);">
            <span style="font-size: 0.75rem; color: var(--fg-3);">$0</span>
            <span style="font-size: 0.75rem; color: var(--fg-3);">$200</span>
        </div>
    </div>
</Preview>

### Settings Panel

<Preview title="Display Settings">
    <div style="max-width: 360px; padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-m); display: flex; flex-direction: column; gap: var(--space-4);">
        <div class="Slider-container">
            <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-2);">
                <label style="font-weight: 500;">Brightness</label>
                <span style="color: var(--fg-3);">75%</span>
            </div>
            <input type="range" class="Slider" min="0" max="100" value="75">
        </div>
        <div class="Slider-container">
            <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-2);">
                <label style="font-weight: 500;">Font Size</label>
                <span style="color: var(--fg-3);">16px</span>
            </div>
            <input type="range" class="Slider" min="12" max="24" step="1" value="16">
        </div>
    </div>
</Preview>

### Image Editor Toolbar

<Preview title="Image Adjustment">
    <div style="max-width: 300px; display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); border: 1px solid var(--bd); border-radius: var(--r-m);">
        <i class="ph ph-sun-dim" style="color: var(--fg-3);"></i>
        <input type="range" class="Slider Slider--small" min="0" max="100" value="50">
        <i class="ph ph-sun" style="color: var(--fg-3);"></i>
        <span style="font-size: 0.8rem; font-weight: 600; min-width: 3ch; text-align: right;">50</span>
    </div>
</Preview>

---

## Customization

Override slider styling with CSS custom properties:

```css
/* Custom thumb color */
.Slider--brand::-webkit-slider-thumb {
  background: oklch(55% 0.25 280);
}

.Slider--brand::-moz-range-thumb {
  background: oklch(55% 0.25 280);
}
```

### Filled Track

```css
/* Show filled portion of track (requires JS to update) */
.Slider--filled {
  background: linear-gradient(
    to right,
    var(--accent) 0%,
    var(--accent) var(--fill, 50%),
    var(--bd) var(--fill, 50%),
    var(--bd) 100%
  );
}
```

### Larger Touch Target

```css
.Slider--touch::-webkit-slider-thumb {
  width: 28px;
  height: 28px;
  margin-top: -11px;
}
```

### Theming

```css
[data-theme="dark"] .Slider {
  background: oklch(30% 0 0);
}

[data-theme="dark"] .Slider::-webkit-slider-thumb {
  background: oklch(70% 0.15 260);
  box-shadow: 0 2px 4px oklch(0% 0 0 / 0.4);
}
```

---

## API Reference

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Slider</code></td><td class="ApiTable-desc">Base range input styling</td></tr>
<tr><td><code class="ApiTable-prop">.Slider--small</code></td><td class="ApiTable-desc">Smaller track and thumb</td></tr>
<tr><td><code class="ApiTable-prop">.Slider--large</code></td><td class="ApiTable-desc">Larger track and thumb</td></tr>
<tr><td><code class="ApiTable-prop">.Slider--success</code></td><td class="ApiTable-desc">Green thumb color</td></tr>
<tr><td><code class="ApiTable-prop">.Slider--warning</code></td><td class="ApiTable-desc">Yellow thumb color</td></tr>
<tr><td><code class="ApiTable-prop">.Slider--error</code></td><td class="ApiTable-desc">Red thumb color</td></tr>
<tr><td><code class="ApiTable-prop">.Slider-container</code></td><td class="ApiTable-desc">Wrapper for slider + labels</td></tr>
<tr><td><code class="ApiTable-prop">.Slider-labels</code></td><td class="ApiTable-desc">Min/max label container</td></tr>
<tr><td><code class="ApiTable-prop">.Slider-ticks</code></td><td class="ApiTable-desc">Discrete step labels</td></tr>
<tr><td><code class="ApiTable-prop">.Slider-value</code></td><td class="ApiTable-desc">Current value display</td></tr>
</tbody>
</table>

### HTML Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">min</code></td><td class="ApiTable-desc">Minimum value</td></tr>
<tr><td><code class="ApiTable-prop">max</code></td><td class="ApiTable-desc">Maximum value</td></tr>
<tr><td><code class="ApiTable-prop">value</code></td><td class="ApiTable-desc">Current value</td></tr>
<tr><td><code class="ApiTable-prop">step</code></td><td class="ApiTable-desc">Increment amount (for discrete steps)</td></tr>
<tr><td><code class="ApiTable-prop">disabled</code></td><td class="ApiTable-desc">Non-interactive state</td></tr>
</tbody>
</table>

### ARIA Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">aria-valuemin</code></td><td class="ApiTable-desc">Minimum value (auto from <code>min</code>)</td></tr>
<tr><td><code class="ApiTable-prop">aria-valuemax</code></td><td class="ApiTable-desc">Maximum value (auto from <code>max</code>)</td></tr>
<tr><td><code class="ApiTable-prop">aria-valuenow</code></td><td class="ApiTable-desc">Current value (auto from <code>value</code>)</td></tr>
<tr><td><code class="ApiTable-prop">aria-valuetext</code></td><td class="ApiTable-desc">Human-readable value (e.g., "50 percent")</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base slider */
.Slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: var(--bd);
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

/* Track - WebKit */
.Slider::-webkit-slider-runnable-track {
  height: 6px;
  background: var(--bd);
  border-radius: 3px;
}

/* Thumb - WebKit */
.Slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: var(--accent);
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px;
  box-shadow: 0 2px 4px oklch(0% 0 0 / 0.2);
  transition: transform var(--dur-f), box-shadow var(--dur-f);
}

.Slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

.Slider::-webkit-slider-thumb:active {
  transform: scale(0.95);
  box-shadow: 0 1px 2px oklch(0% 0 0 / 0.2);
}

/* Thumb - Firefox */
.Slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: var(--accent);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px oklch(0% 0 0 / 0.2);
}

/* Focus */
.Slider:focus-visible::-webkit-slider-thumb {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Disabled */
.Slider:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.Slider--small { height: 4px; }
.Slider--small::-webkit-slider-thumb { width: 14px; height: 14px; margin-top: -5px; }
.Slider--large { height: 8px; }
.Slider--large::-webkit-slider-thumb { width: 22px; height: 22px; margin-top: -7px; }

/* Color variants */
.Slider--success::-webkit-slider-thumb { background: oklch(55% 0.15 150); }
.Slider--warning::-webkit-slider-thumb { background: oklch(70% 0.15 80); }
.Slider--error::-webkit-slider-thumb { background: oklch(55% 0.2 25); }

/* Container helpers */
.Slider-container {
  width: 100%;
}

.Slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: var(--fs-md);
  color: var(--fg-3);
  margin-bottom: var(--space-1);
}

.Slider-ticks {
  display: flex;
  justify-content: space-between;
  font-size: var(--fs-sm);
  color: var(--fg-3);
  margin-top: var(--space-1);
}

.Slider-value {
  font-weight: 600;
  color: var(--fg);
  min-width: 3ch;
  text-align: right;
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| `Arrow Left` / `Arrow Down` | Decrease value by one step |
| `Arrow Right` / `Arrow Up` | Increase value by one step |
| `Home` | Set to minimum value |
| `End` | Set to maximum value |
| `Page Up` / `Page Down` | Increase/decrease by larger step |

### Screen Reader Guidance

Native `<input type="range">` is accessible by default. Enhance with `aria-valuetext` for human-readable values (e.g., "50 percent" instead of "50"). Always associate a `<label>` with the slider.

```html
<label for="volume-slider">Volume</label>
<input
    type="range"
    id="volume-slider"
    class="Slider"
    min="0"
    max="100"
    value="50"
    aria-valuetext="50 percent"
>
```

### ARIA Attributes

- `aria-valuemin`, `aria-valuemax`, `aria-valuenow` are automatic for native range inputs
- `aria-valuetext` for human-readable value descriptions
- Always use `<label>` to describe the slider's purpose
- Ensure visible focus indicators on the thumb

---

## Best Practices

### Do

- ✓ **Show the current value** — Display the number alongside the slider for clarity
- ✓ **Use appropriate ranges** — Match real-world constraints (0–100 for percentages)
- ✓ **Add labels** — Min/max labels help users understand the scale
- ✓ **Consider discrete steps** — Snapping to values is often easier than continuous
- ✓ **Associate a label element** — Screen readers need to know what the slider controls
- ✓ **Provide adequate thumb size** — At least 44px touch target on mobile

### Don't

- ✗ **Use for precise numeric input** — A text field is better when exact values matter
- ✗ **Hide the scale** — Users need to understand the range boundaries
- ✗ **Make the thumb too small** — Tiny thumbs are frustrating on touch devices
- ✗ **Forget keyboard users** — Native range inputs handle this; custom sliders must too
- ✗ **Use sliders for binary choices** — A toggle switch is more appropriate
- ✗ **Skip the value display** — Sliders without visible values feel imprecise
