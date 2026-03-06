# Steppers

Steppers display progress through a sequence of steps, commonly used in multi-step forms, wizards, and onboarding flows.

## Basic Stepper

A horizontal stepper showing numbered steps.

<Preview title="Basic Stepper">
    <div class="Stepper">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Account</span>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">2</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Profile</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Preferences</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">4</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Confirm</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper">
    <div class="Stepper-step Stepper-step--completed">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Account</span>
        </div>
    </div>
    <div class="Stepper-connector Stepper-connector--completed"></div>
    <div class="Stepper-step Stepper-step--active">
        <div class="Stepper-indicator">2</div>
        <div class="Stepper-content">
            <span class="Stepper-title">Profile</span>
        </div>
    </div>
    ...
</div>
```

## Stepper with Descriptions

Add descriptions for additional context on each step.

<Preview title="Stepper with Descriptions">
    <div class="Stepper">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Cart</span>
                <span class="Stepper-description">Review your items</span>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">2</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Shipping</span>
                <span class="Stepper-description">Enter delivery address</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Payment</span>
                <span class="Stepper-description">Add payment method</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">4</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Review</span>
                <span class="Stepper-description">Confirm your order</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper">
    <div class="Stepper-step Stepper-step--completed">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Cart</span>
            <span class="Stepper-description">Review your items</span>
        </div>
    </div>
    ...
</div>
```

## Vertical Stepper

A vertical layout for longer flows or mobile views.

<Preview title="Vertical Stepper">
    <div class="Stepper Stepper--vertical" style="max-width: 320px;">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Create account</span>
                <span class="Stepper-description">Sign up with email or social login</span>
            </div>
        </div>
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Verify email</span>
                <span class="Stepper-description">Check your inbox for verification</span>
            </div>
        </div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Complete profile</span>
                <span class="Stepper-description">Add your personal information</span>
            </div>
        </div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">4</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Set preferences</span>
                <span class="Stepper-description">Customize your experience</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper Stepper--vertical">
    <div class="Stepper-step Stepper-step--completed">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Create account</span>
            <span class="Stepper-description">Sign up with email...</span>
        </div>
    </div>
    ...
</div>
```

## Icon Stepper

Use icons instead of numbers for visual clarity.

<Preview title="Icon Stepper">
    <div class="Stepper">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Upload</span>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator Stepper-indicator--icon">
                <i class="ph ph-sliders"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Edit</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator Stepper-indicator--icon">
                <i class="ph ph-eye"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Preview</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator Stepper-indicator--icon">
                <i class="ph ph-share"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Publish</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper">
    <div class="Stepper-step Stepper-step--active">
        <div class="Stepper-indicator Stepper-indicator--icon">
            <i class="ph ph-sliders"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Edit</span>
        </div>
    </div>
    ...
</div>
```

## Compact Stepper

A minimal stepper for space-constrained layouts.

<Preview title="Compact Stepper">
    <div class="Stepper Stepper--compact">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">3</div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">4</div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">5</div>
        </div>
    </div>
    <p style="text-align: center; margin-top: var(--space-4); color: var(--fg-3); font-size: 0.9rem;">Step 3 of 5: Payment Details</p>
</Preview>

```html
<div class="Stepper Stepper--compact">
    <div class="Stepper-step Stepper-step--completed">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
    </div>
    <div class="Stepper-connector Stepper-connector--completed"></div>
    <div class="Stepper-step Stepper-step--active">
        <div class="Stepper-indicator">3</div>
    </div>
    ...
</div>
```

## Clickable Stepper

Allow users to navigate between completed steps.

<Preview title="Clickable Stepper">
    <div class="Stepper Stepper--clickable">
        <button class="Stepper-step Stepper-step--completed Stepper-step--clickable">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Details</span>
            </div>
        </button>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <button class="Stepper-step Stepper-step--completed Stepper-step--clickable">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Address</span>
            </div>
        </button>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <button class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Payment</span>
            </div>
        </button>
        <div class="Stepper-connector"></div>
        <button class="Stepper-step" disabled>
            <div class="Stepper-indicator">4</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Confirm</span>
            </div>
        </button>
    </div>
</Preview>

```html
<div class="Stepper Stepper--clickable">
    <button class="Stepper-step Stepper-step--completed Stepper-step--clickable">
        <div class="Stepper-indicator">
            <i class="ph ph-check"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Details</span>
        </div>
    </button>
    ...
</div>
```

## Error State

Show when a step has validation errors.

<Preview title="Stepper with Error">
    <div class="Stepper">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator">
                <i class="ph ph-check"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Account</span>
            </div>
        </div>
        <div class="Stepper-connector Stepper-connector--completed"></div>
        <div class="Stepper-step Stepper-step--error">
            <div class="Stepper-indicator">
                <i class="ph ph-warning"></i>
            </div>
            <div class="Stepper-content">
                <span class="Stepper-title">Payment</span>
                <span class="Stepper-description Stepper-description--error">Card declined</span>
            </div>
        </div>
        <div class="Stepper-connector"></div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Confirm</span>
            </div>
        </div>
    </div>
</Preview>

```html
<div class="Stepper">
    <div class="Stepper-step Stepper-step--error">
        <div class="Stepper-indicator">
            <i class="ph ph-warning"></i>
        </div>
        <div class="Stepper-content">
            <span class="Stepper-title">Payment</span>
            <span class="Stepper-description Stepper-description--error">Card declined</span>
        </div>
    </div>
    ...
</div>
```

## Progress Stepper

Combine with a progress indicator for completion status.

<Preview title="Progress Stepper">
    <div style="max-width: 400px;">
        <div class="Stepper Stepper--compact" style="margin-bottom: var(--space-3);">
            <div class="Stepper-step Stepper-step--completed">
                <div class="Stepper-indicator"><i class="ph ph-check"></i></div>
            </div>
            <div class="Stepper-connector Stepper-connector--completed"></div>
            <div class="Stepper-step Stepper-step--completed">
                <div class="Stepper-indicator"><i class="ph ph-check"></i></div>
            </div>
            <div class="Stepper-connector Stepper-connector--completed"></div>
            <div class="Stepper-step Stepper-step--active">
                <div class="Stepper-indicator">3</div>
            </div>
            <div class="Stepper-connector"></div>
            <div class="Stepper-step">
                <div class="Stepper-indicator">4</div>
            </div>
        </div>
        <div class="Progress" style="height: 4px;">
            <div class="Progress-bar" style="width: 66%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: var(--space-2); font-size: 0.85rem; color: var(--fg-3);">
            <span>Step 3 of 4</span>
            <span>66% complete</span>
        </div>
    </div>
</Preview>

```html
<div class="Stepper Stepper--compact">
    ...
</div>
<div class="Progress" style="height: 4px;">
    <div class="Progress-bar" style="width: 66%;"></div>
</div>
```

## Dot Stepper

A minimal dot-based progress indicator.

<Preview title="Dot Stepper">
    <div class="Stepper Stepper--dots">
        <div class="Stepper-dot Stepper-dot--completed"></div>
        <div class="Stepper-dot Stepper-dot--completed"></div>
        <div class="Stepper-dot Stepper-dot--active"></div>
        <div class="Stepper-dot"></div>
        <div class="Stepper-dot"></div>
    </div>
</Preview>

```html
<div class="Stepper Stepper--dots">
    <div class="Stepper-dot Stepper-dot--completed"></div>
    <div class="Stepper-dot Stepper-dot--completed"></div>
    <div class="Stepper-dot Stepper-dot--active"></div>
    <div class="Stepper-dot"></div>
    <div class="Stepper-dot"></div>
</div>
```

---

## Common Patterns

### Checkout Flow

<Preview title="E-commerce Checkout">
    <div style="max-width: 500px; width: 100%;">
        <div class="Stepper" style="margin-bottom: var(--space-4);">
            <div class="Stepper-step Stepper-step--completed">
                <div class="Stepper-indicator"><i class="ph ph-check"></i></div>
                <div class="Stepper-content"><span class="Stepper-title">Cart</span></div>
            </div>
            <div class="Stepper-connector Stepper-connector--completed"></div>
            <div class="Stepper-step Stepper-step--active">
                <div class="Stepper-indicator">2</div>
                <div class="Stepper-content"><span class="Stepper-title">Shipping</span></div>
            </div>
            <div class="Stepper-connector"></div>
            <div class="Stepper-step">
                <div class="Stepper-indicator">3</div>
                <div class="Stepper-content"><span class="Stepper-title">Payment</span></div>
            </div>
            <div class="Stepper-connector"></div>
            <div class="Stepper-step">
                <div class="Stepper-indicator">4</div>
                <div class="Stepper-content"><span class="Stepper-title">Review</span></div>
            </div>
        </div>
        <div style="padding: var(--space-4); border: 1px solid var(--bd); border-radius: var(--r-m);">
            <div style="font-weight: 600; margin-bottom: var(--space-2);">Shipping Address</div>
            <div style="font-size: 0.85rem; color: var(--fg-3);">Enter your delivery details below</div>
        </div>
    </div>
</Preview>

### Account Setup Wizard

<Preview title="Onboarding Stepper">
    <div class="Stepper Stepper--vertical" style="max-width: 300px;">
        <div class="Stepper-step Stepper-step--completed">
            <div class="Stepper-indicator"><i class="ph ph-check"></i></div>
            <div class="Stepper-content">
                <span class="Stepper-title">Create account</span>
                <span class="Stepper-description">Email verified</span>
            </div>
        </div>
        <div class="Stepper-step Stepper-step--active">
            <div class="Stepper-indicator">2</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Add profile photo</span>
                <span class="Stepper-description">Upload or take a picture</span>
            </div>
        </div>
        <div class="Stepper-step">
            <div class="Stepper-indicator">3</div>
            <div class="Stepper-content">
                <span class="Stepper-title">Choose preferences</span>
                <span class="Stepper-description">Customize your feed</span>
            </div>
        </div>
    </div>
</Preview>

### Mobile Carousel Dots

<Preview title="Carousel Dots">
    <div style="text-align: center; padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-m); max-width: 320px;">
        <div style="height: 120px; display: flex; align-items: center; justify-content: center; color: var(--fg-3); margin-bottom: var(--space-3);">Slide Content</div>
        <div class="Stepper Stepper--dots" style="justify-content: center;">
            <div class="Stepper-dot Stepper-dot--completed"></div>
            <div class="Stepper-dot Stepper-dot--active"></div>
            <div class="Stepper-dot"></div>
            <div class="Stepper-dot"></div>
        </div>
    </div>
</Preview>

### Form with Compact Progress

<Preview title="Compact Form Stepper">
    <div style="max-width: 400px; width: 100%;">
        <div class="Stepper Stepper--compact" style="margin-bottom: var(--space-2);">
            <div class="Stepper-step Stepper-step--completed"><div class="Stepper-indicator"><i class="ph ph-check"></i></div></div>
            <div class="Stepper-connector Stepper-connector--completed"></div>
            <div class="Stepper-step Stepper-step--completed"><div class="Stepper-indicator"><i class="ph ph-check"></i></div></div>
            <div class="Stepper-connector Stepper-connector--completed"></div>
            <div class="Stepper-step Stepper-step--active"><div class="Stepper-indicator">3</div></div>
            <div class="Stepper-connector"></div>
            <div class="Stepper-step"><div class="Stepper-indicator">4</div></div>
        </div>
        <p style="text-align: center; font-size: 0.85rem; color: var(--fg-3);">Step 3 of 4: Payment Details</p>
    </div>
</Preview>

---

## Customization

Override stepper styling with CSS custom properties:

```css
/* Custom accent colors */
.Stepper {
  --stepper-active-bg: oklch(55% 0.2 260);
  --stepper-completed-bg: oklch(55% 0.15 150);
  --stepper-connector-color: var(--bd);
}
```

### Custom Indicator Size

```css
.Stepper--lg .Stepper-indicator {
  width: 40px;
  height: 40px;
  font-size: 1.1rem;
}
```

### Dashed Connectors

```css
.Stepper-connector--dashed {
  border-top-style: dashed;
}
```

### Theming

```css
[data-theme="dark"] .Stepper-step--active .Stepper-indicator {
  background: oklch(65% 0.18 260);
}

[data-theme="dark"] .Stepper-connector--completed {
  background: oklch(55% 0.15 150);
}
```

---

## API Reference

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Stepper</code></td><td class="ApiTable-desc">Base stepper container</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper--vertical</code></td><td class="ApiTable-desc">Vertical layout variant</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper--compact</code></td><td class="ApiTable-desc">Minimal variant (indicators only)</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper--clickable</code></td><td class="ApiTable-desc">Enables navigation to completed steps</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper--dots</code></td><td class="ApiTable-desc">Dot-based progress indicator</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-step</code></td><td class="ApiTable-desc">Individual step container</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-step--completed</code></td><td class="ApiTable-desc">Completed step state</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-step--active</code></td><td class="ApiTable-desc">Current active step</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-step--error</code></td><td class="ApiTable-desc">Error state for a step</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-step--clickable</code></td><td class="ApiTable-desc">Clickable step (for navigation)</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-indicator</code></td><td class="ApiTable-desc">Step number or icon container</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-indicator--icon</code></td><td class="ApiTable-desc">Icon-only indicator variant</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-content</code></td><td class="ApiTable-desc">Step title and description container</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-title</code></td><td class="ApiTable-desc">Step title text</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-description</code></td><td class="ApiTable-desc">Step description text</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-description--error</code></td><td class="ApiTable-desc">Error description styling</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-connector</code></td><td class="ApiTable-desc">Line connecting steps</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-connector--completed</code></td><td class="ApiTable-desc">Completed connector (filled)</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-dot</code></td><td class="ApiTable-desc">Dot indicator (for dot variant)</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-dot--completed</code></td><td class="ApiTable-desc">Completed dot</td></tr>
<tr><td><code class="ApiTable-prop">.Stepper-dot--active</code></td><td class="ApiTable-desc">Active dot</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base stepper */
.Stepper {
  display: flex;
  align-items: center;
  width: 100%;
}

/* Step */
.Stepper-step {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

/* Indicator */
.Stepper-indicator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-base);
  font-weight: 600;
  background: var(--bg-s);
  color: var(--fg-3);
  border: 2px solid var(--bd);
  flex-shrink: 0;
}

/* Active step */
.Stepper-step--active .Stepper-indicator {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

/* Completed step */
.Stepper-step--completed .Stepper-indicator {
  background: oklch(55% 0.15 150);
  color: white;
  border-color: oklch(55% 0.15 150);
}

/* Error step */
.Stepper-step--error .Stepper-indicator {
  background: oklch(55% 0.2 25);
  color: white;
  border-color: oklch(55% 0.2 25);
}

/* Connector */
.Stepper-connector {
  flex: 1;
  height: 2px;
  background: var(--bd);
  margin: 0 var(--space-2);
}

.Stepper-connector--completed {
  background: oklch(55% 0.15 150);
}

/* Content */
.Stepper-content {
  display: flex;
  flex-direction: column;
}

.Stepper-title {
  font-size: var(--fs-lg);
  font-weight: 500;
}

.Stepper-description {
  font-size: var(--fs-md);
  color: var(--fg-3);
}

.Stepper-description--error {
  color: oklch(55% 0.2 25);
}

/* Vertical */
.Stepper--vertical {
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.Stepper--vertical .Stepper-step {
  align-items: flex-start;
}

.Stepper--vertical .Stepper-connector {
  width: 2px;
  height: 24px;
  flex: none;
  margin: 0 0 0 15px;
}

/* Compact */
.Stepper--compact .Stepper-indicator {
  width: 24px;
  height: 24px;
  font-size: var(--fs-sm);
}

/* Clickable */
.Stepper-step--clickable {
  cursor: pointer;
}

.Stepper-step--clickable:hover .Stepper-indicator {
  box-shadow: 0 0 0 3px oklch(55% 0.15 150 / 0.2);
}

/* Dots */
.Stepper--dots {
  gap: var(--space-2);
}

.Stepper-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--bd);
}

.Stepper-dot--active {
  background: var(--accent);
  width: 24px;
  border-radius: var(--r-f);
}

.Stepper-dot--completed {
  background: oklch(55% 0.15 150);
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus between clickable steps |
| `Enter` / `Space` | Navigate to the focused step (if clickable) |

### Screen Reader Guidance

Use `role="list"` on the stepper container and `role="listitem"` on each step. Mark the active step with `aria-current="step"`. For clickable steps, use `<button>` elements with descriptive labels.

```html
<div class="Stepper" role="list" aria-label="Checkout progress">
    <div class="Stepper-step Stepper-step--completed" role="listitem">
        <div class="Stepper-indicator"><i class="ph ph-check"></i></div>
        <div class="Stepper-content">
            <span class="Stepper-title">Cart</span>
        </div>
    </div>
    <div class="Stepper-step Stepper-step--active" role="listitem" aria-current="step">
        <div class="Stepper-indicator">2</div>
        <div class="Stepper-content">
            <span class="Stepper-title">Shipping</span>
        </div>
    </div>
</div>
```

### ARIA Attributes

- `aria-current="step"` on the active step
- `aria-label` on clickable steps for descriptive context
- `role="list"` and `role="listitem"` for step sequences
- `aria-disabled="true"` for non-clickable future steps
- `aria-invalid="true"` on error steps with error description
- `aria-live="polite"` to announce step changes

---

## Best Practices

### Do

- ✓ **Show step numbers or icons** — Clear indicators help users track position
- ✓ **Mark completed steps visually** — Checkmarks confirm progress
- ✓ **Allow navigation to completed steps** — Users often need to go back
- ✓ **Use descriptions for complex flows** — Extra context reduces confusion
- ✓ **Keep step count reasonable** — 3–7 steps is ideal for most flows
- ✓ **Use vertical layout for mobile** — Horizontal steppers don't fit narrow screens

### Don't

- ✗ **Skip step numbers** — Users need to know their position in the sequence
- ✗ **Allow skipping required steps** — Enforce sequential completion when needed
- ✗ **Use steppers for single actions** — They're for multi-step processes only
- ✗ **Hide error states** — Show which step has a problem and describe it
- ✗ **Change step order mid-flow** — Consistency builds user confidence
- ✗ **Use too many steps** — More than 7 steps feels overwhelming; consider grouping
