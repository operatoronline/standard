# Progress

Progress indicators show the status of ongoing processes.

## Progress Bar

<Preview title="Progress Bar">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div class="Progress">
            <div class="Progress-bar" style="width: 25%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar" style="width: 50%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar" style="width: 75%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar" style="width: 100%;"></div>
        </div>
    </div>
</Preview>

```html
<div class="Progress">
    <div class="Progress-bar" style="width: 50%;"></div>
</div>
```

## With Label

<Preview title="Progress with Label">
    <div style="width: 100%;">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-2); font-size: 0.9rem;">
            <span>Uploading...</span>
            <span>67%</span>
        </div>
        <div class="Progress">
            <div class="Progress-bar" style="width: 67%;"></div>
        </div>
    </div>
</Preview>

```html
<div style="display: flex; justify-content: space-between;">
    <span>Uploading...</span>
    <span>67%</span>
</div>
<div class="Progress">
    <div class="Progress-bar" style="width: 67%;"></div>
</div>
```

## Sizes

<Preview title="Progress Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div>
            <small style="color: var(--fg-3);">Small</small>
            <div class="Progress Progress--small" style="margin-top: var(--space-1);">
                <div class="Progress-bar" style="width: 60%;"></div>
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3);">Default</small>
            <div class="Progress" style="margin-top: var(--space-1);">
                <div class="Progress-bar" style="width: 60%;"></div>
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3);">Large</small>
            <div class="Progress Progress--large" style="margin-top: var(--space-1);">
                <div class="Progress-bar" style="width: 60%;"></div>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Progress Progress--small">...</div>
<div class="Progress">...</div>
<div class="Progress Progress--large">...</div>
```

## Variants

<Preview title="Progress Variants">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); width: 100%;">
        <div class="Progress">
            <div class="Progress-bar" style="width: 60%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar Progress-bar--success" style="width: 100%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar Progress-bar--warning" style="width: 45%;"></div>
        </div>
        <div class="Progress">
            <div class="Progress-bar Progress-bar--error" style="width: 30%;"></div>
        </div>
    </div>
</Preview>

```html
<div class="Progress-bar Progress-bar--success"></div>
<div class="Progress-bar Progress-bar--warning"></div>
<div class="Progress-bar Progress-bar--error"></div>
```

## Indeterminate

For unknown duration processes.

<Preview title="Indeterminate Progress">
    <div class="Progress">
        <div class="Progress-bar Progress-bar--indeterminate"></div>
    </div>
</Preview>

```html
<div class="Progress">
    <div class="Progress-bar Progress-bar--indeterminate"></div>
</div>
```

## Spinner

For inline loading states.

<Preview title="Spinners">
    <div style="display: flex; gap: var(--space-6); align-items: center;">
        <div class="Spinner Spinner--small"></div>
        <div class="Spinner"></div>
        <div class="Spinner Spinner--large"></div>
    </div>
</Preview>

```html
<div class="Spinner Spinner--small"></div>
<div class="Spinner"></div>
<div class="Spinner Spinner--large"></div>
```

## Button with Spinner

<Preview title="Loading Button">
    <div style="display: flex; gap: var(--space-4);">
        <button class="Button Button--primary" disabled>
            <div class="Spinner Spinner--small Spinner--light"></div>
            <span>Saving...</span>
        </button>
        <button class="Button" disabled>
            <div class="Spinner Spinner--small"></div>
            <span>Loading...</span>
        </button>
    </div>
</Preview>

```html
<button class="Button Button--primary" disabled>
    <div class="Spinner Spinner--small Spinner--light"></div>
    <span>Saving...</span>
</button>
```

## Full Page Loader

<Preview title="Page Loader">
    <div style="height: 200px; display: flex; align-items: center; justify-content: center; background: var(--bg-s); border-radius: var(--r-m);">
        <div style="text-align: center;">
            <div class="Spinner Spinner--large"></div>
            <p style="margin-top: var(--space-3); color: var(--fg-3); font-size: 0.9rem;">Loading...</p>
        </div>
    </div>
</Preview>

```html
<div class="page-loader">
    <div class="Spinner Spinner--large"></div>
    <p>Loading...</p>
</div>
```

---

## Common Patterns

### File Upload Progress

<Preview title="File Upload">
    <div style="width: 100%; max-width: 400px; padding: var(--space-4); border: 1px solid var(--bd); border-radius: var(--r-m);">
        <div style="display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-3);">
            <i class="ph ph-file-arrow-up" style="font-size: 1.5rem; color: var(--accent);"></i>
            <div style="flex: 1;">
                <div style="font-weight: 500; font-size: 0.9rem;">report-2024.pdf</div>
                <div style="font-size: 0.8rem; color: var(--fg-3);">2.4 MB of 5.1 MB</div>
            </div>
            <span style="font-weight: 600; font-size: 0.9rem;">47%</span>
        </div>
        <div class="Progress">
            <div class="Progress-bar" style="width: 47%;"></div>
        </div>
    </div>
</Preview>

### Multi-step Form Progress

<Preview title="Form Progress Bar">
    <div style="width: 100%; max-width: 500px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-2); font-size: 0.85rem;">
            <span style="font-weight: 500;">Step 2 of 4</span>
            <span style="color: var(--fg-3);">50% complete</span>
        </div>
        <div class="Progress Progress--small">
            <div class="Progress-bar" style="width: 50%;"></div>
        </div>
    </div>
</Preview>

### Inline Loading Button

<Preview title="Loading Button States">
    <div style="display: flex; gap: var(--space-3); flex-wrap: wrap;">
        <button class="Button Button--primary" disabled>
            <div class="Spinner Spinner--small Spinner--light"></div>
            <span>Saving...</span>
        </button>
        <button class="Button" disabled>
            <div class="Spinner Spinner--small"></div>
            <span>Loading...</span>
        </button>
        <button class="Button Button--primary">
            <span>Save Changes</span>
        </button>
    </div>
</Preview>

### Dashboard Metric

<Preview title="Storage Usage">
    <div style="width: 100%; max-width: 300px; padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-m);">
        <div style="font-weight: 600; margin-bottom: var(--space-1);">Storage</div>
        <div style="font-size: 0.85rem; color: var(--fg-3); margin-bottom: var(--space-3);">7.2 GB of 10 GB used</div>
        <div class="Progress">
            <div class="Progress-bar Progress-bar--warning" style="width: 72%;"></div>
        </div>
    </div>
</Preview>

### Full Page Loading

<Preview title="Page Loader">
    <div style="height: 180px; display: flex; align-items: center; justify-content: center; background: var(--bg-s); border-radius: var(--r-m);">
        <div style="text-align: center;">
            <div class="Spinner Spinner--large"></div>
            <p style="margin-top: var(--space-3); color: var(--fg-3); font-size: 0.9rem;">Loading your dashboard...</p>
        </div>
    </div>
</Preview>

---

## Customization

Override progress styling with CSS custom properties:

```css
/* Custom progress bar color */
.Progress {
  --progress-bg: oklch(90% 0 0);
  --progress-fill: oklch(55% 0.2 260);
}

.Progress {
  background: var(--progress-bg);
}

.Progress-bar {
  background: var(--progress-fill);
}
```

### Striped Progress

```css
.Progress-bar--striped {
  background-image: linear-gradient(
    45deg,
    rgba(255,255,255,.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255,255,255,.15) 50%,
    rgba(255,255,255,.15) 75%,
    transparent 75%
  );
  background-size: 1rem 1rem;
}
```

### Custom Spinner Color

```css
.Spinner--branded {
  border-color: oklch(80% 0.05 260);
  border-top-color: oklch(55% 0.2 260);
}
```

### Theming

```css
[data-theme="dark"] .Progress {
  background: oklch(25% 0 0);
}

[data-theme="dark"] .Progress-bar {
  background: oklch(65% 0.18 260);
}
```

---

## API Reference

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Progress</code></td><td class="ApiTable-desc">Base progress bar container</td></tr>
<tr><td><code class="ApiTable-prop">.Progress--small</code></td><td class="ApiTable-desc">Smaller height track (4px)</td></tr>
<tr><td><code class="ApiTable-prop">.Progress--large</code></td><td class="ApiTable-desc">Larger height track (12px)</td></tr>
<tr><td><code class="ApiTable-prop">.Progress-bar</code></td><td class="ApiTable-desc">Fill indicator element</td></tr>
<tr><td><code class="ApiTable-prop">.Progress-bar--success</code></td><td class="ApiTable-desc">Green completion variant</td></tr>
<tr><td><code class="ApiTable-prop">.Progress-bar--warning</code></td><td class="ApiTable-desc">Yellow warning variant</td></tr>
<tr><td><code class="ApiTable-prop">.Progress-bar--error</code></td><td class="ApiTable-desc">Red error variant</td></tr>
<tr><td><code class="ApiTable-prop">.Progress-bar--indeterminate</code></td><td class="ApiTable-desc">Animated unknown-duration progress</td></tr>
<tr><td><code class="ApiTable-prop">.Spinner</code></td><td class="ApiTable-desc">Base spinner element</td></tr>
<tr><td><code class="ApiTable-prop">.Spinner--small</code></td><td class="ApiTable-desc">Small spinner (16px)</td></tr>
<tr><td><code class="ApiTable-prop">.Spinner--large</code></td><td class="ApiTable-desc">Large spinner (32px)</td></tr>
<tr><td><code class="ApiTable-prop">.Spinner--light</code></td><td class="ApiTable-desc">Light color for dark backgrounds</td></tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr><th>Attribute</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">role="progressbar"</code></td><td class="ApiTable-desc">Identifies the element as a progress bar</td></tr>
<tr><td><code class="ApiTable-prop">aria-valuenow</code></td><td class="ApiTable-desc">Current progress value</td></tr>
<tr><td><code class="ApiTable-prop">aria-valuemin</code></td><td class="ApiTable-desc">Minimum value (typically 0)</td></tr>
<tr><td><code class="ApiTable-prop">aria-valuemax</code></td><td class="ApiTable-desc">Maximum value (typically 100)</td></tr>
<tr><td><code class="ApiTable-prop">aria-label</code></td><td class="ApiTable-desc">Describes what the progress represents</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base progress bar */
.Progress {
  width: 100%;
  height: 8px;
  background: var(--bd);
  border-radius: var(--r-f);
  overflow: hidden;
}

.Progress-bar {
  height: 100%;
  background: var(--accent);
  border-radius: var(--r-f);
  transition: width var(--dur-s) var(--ease);
}

/* Sizes */
.Progress--small { height: 4px; }
.Progress--large { height: 12px; }

/* Variants */
.Progress-bar--success { background: oklch(55% 0.15 150); }
.Progress-bar--warning { background: oklch(70% 0.15 80); }
.Progress-bar--error { background: oklch(55% 0.2 25); }

/* Indeterminate */
.Progress-bar--indeterminate {
  width: 30% !important;
  animation: progress-indeterminate 1.5s ease-in-out infinite;
}

@keyframes progress-indeterminate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}

/* Spinner */
.Spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--bd);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spinner-rotate 0.8s linear infinite;
}

.Spinner--small { width: 16px; height: 16px; border-width: 2px; }
.Spinner--large { width: 32px; height: 32px; border-width: 4px; }
.Spinner--light { border-color: rgba(255,255,255,0.3); border-top-color: white; }

@keyframes spinner-rotate {
  to { transform: rotate(360deg); }
}
```

---

## Accessibility

### Screen Reader Guidance

Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` for determinate progress. For indeterminate progress, omit `aria-valuenow`. Always provide `aria-label` or visible text to describe what is loading.

```html
<div class="Progress" role="progressbar"
     aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"
     aria-label="Upload progress">
    <div class="Progress-bar" style="width: 67%;"></div>
</div>
```

### Spinner Accessibility

Spinners should have `aria-label="Loading"` or be associated with visible text. Use `aria-busy="true"` on the container being loaded.

```html
<div aria-busy="true">
    <div class="Spinner" role="status" aria-label="Loading"></div>
</div>
```

### ARIA Attributes

- `role="progressbar"` on the progress container
- `aria-valuenow` / `aria-valuemin` / `aria-valuemax` for determinate bars
- `aria-label` to describe the process
- `aria-busy="true"` on content regions while loading
- Announce completion to screen readers via `aria-live` region

---

## Best Practices

### Do

- ✓ **Show percentage when known** — Users want to estimate remaining time
- ✓ **Use indeterminate for unknown durations** — Communicates activity without misleading
- ✓ **Provide descriptive labels** — "Uploading report.pdf..." beats a bare progress bar
- ✓ **Use color variants for status** — Green for success, red for errors, yellow for warnings
- ✓ **Keep users informed** — Describe what's happening during long operations
- ✓ **Use spinners for inline loading** — Small spinners inside buttons for quick actions

### Don't

- ✗ **Show fake progress** — Don't animate progress that doesn't reflect reality
- ✗ **Leave users without feedback** — Any action over 1 second needs an indicator
- ✗ **Use spinners for content loading** — Skeleton screens are better for layout-preserving loads
- ✗ **Block interaction silently** — Always show why the UI is unresponsive
- ✗ **Omit ARIA attributes** — Screen reader users need progress information too
- ✗ **Stack multiple progress bars** — One clear indicator is better than several competing ones
