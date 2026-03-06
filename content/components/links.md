# Links

Links are used for navigation and to reference external resources. They provide a way for users to move between pages, sections, or to external content.

---

## Usage

The base `.Link` class provides core link styling. Add variant classes to change appearance.

<Preview>
<a href="#" class="Link">Default Link</a>
<a href="#" class="Link Link--subtle">Subtle</a>
<a href="#" class="Link Link--muted">Muted</a>
</Preview>

---

## Inline Links

Links within body text should be clearly distinguishable but not disruptive.

<Preview title="Inline Link">
    <p style="max-width: 480px; line-height: 1.6;">
        For more information about our services, please visit our 
        <a href="#" class="Link">documentation</a> or contact 
        <a href="#" class="Link">customer support</a>. You can also 
        check out our <a href="#" class="Link">getting started guide</a> 
        for beginners.
    </p>
</Preview>
---

## Link Variants

Different visual styles for various contexts.

<Preview title="Link Variants">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <a href="#" class="Link">Default Link</a>
        <a href="#" class="Link Link--subtle">Subtle Link</a>
        <a href="#" class="Link Link--muted">Muted Link</a>
        <a href="#" class="Link Link--underline">Always Underlined</a>
    </div>
</Preview>
---

## Standalone Links

Links that stand alone as navigation elements.

<Preview title="Standalone Link">
    <a href="#" class="Link Link--standalone">
        View all products
    </a>
</Preview>

<Preview title="Standalone Link with Arrow">
    <a href="#" class="Link Link--standalone">
        Read the full article
        <i class="ph ph-arrow-right Link-icon"></i>
    </a>
</Preview>
---

## Links with Icons

Add icons for visual context or to indicate behavior.

<Preview title="Link with Leading Icon">
    <a href="#" class="Link">
        <i class="ph ph-file-text Link-icon"></i>
        View Documentation
    </a>
</Preview>

<Preview title="Link with Trailing Icon">
    <a href="#" class="Link" target="_blank">
        Open in new tab
        <i class="ph ph-arrow-square-out Link-icon"></i>
    </a>
</Preview>

<Preview title="External Link Indicator">
    <p style="max-width: 480px; line-height: 1.6;">
        Learn more on the 
        <a href="#" class="Link Link--external" target="_blank" rel="noopener">
            official website
            <i class="ph ph-arrow-square-out Link-icon"></i>
        </a>
        for complete details.
    </p>
</Preview>
---

## Link Sizes

Control link size for different contexts.

<Preview title="Link Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <a href="#" class="Link Link--small">Small Link</a>
        <a href="#" class="Link">Default Link</a>
        <a href="#" class="Link Link--large">Large Link</a>
    </div>
</Preview>
---

## Visited State

Indicate links that have been visited.

<Preview title="Visited Links">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <a href="#" class="Link">Unvisited Link</a>
        <a href="#" class="Link Link--visited">Visited Link</a>
    </div>
</Preview>
### CSS for Visited State
```css
.Link:visited {
  color: oklch(50% 0.12 300); /* Muted purple */
}
```

---

## Disabled Link

Style for links that are temporarily unavailable.

<Preview title="Disabled Link">
    <span class="Link Link--disabled" aria-disabled="true">
        Currently unavailable
    </span>
</Preview>
---

## Link Groups

Common patterns for grouping related links.

<Preview title="Vertical Link List">
    <nav style="display: flex; flex-direction: column; gap: var(--space-2);">
        <a href="#" class="Link Link--nav">Home</a>
        <a href="#" class="Link Link--nav Link--active">Products</a>
        <a href="#" class="Link Link--nav">About Us</a>
        <a href="#" class="Link Link--nav">Contact</a>
    </nav>
</Preview>

<Preview title="Horizontal Link List">
    <nav style="display: flex; gap: var(--space-6);">
        <a href="#" class="Link Link--nav">Features</a>
        <a href="#" class="Link Link--nav">Pricing</a>
        <a href="#" class="Link Link--nav">Blog</a>
        <a href="#" class="Link Link--nav">Support</a>
    </nav>
</Preview>

<Preview title="Footer Links">
    <div style="display: flex; gap: var(--space-4); flex-wrap: wrap;">
        <a href="#" class="Link Link--muted Link--small">Privacy Policy</a>
        <span style="color: var(--fg-3);">·</span>
        <a href="#" class="Link Link--muted Link--small">Terms of Service</a>
        <span style="color: var(--fg-3);">·</span>
        <a href="#" class="Link Link--muted Link--small">Cookie Settings</a>
    </div>
</Preview>
---

## Skip Link

Accessibility pattern for keyboard navigation.

<Preview title="Skip Link">
    <a href="#main-content" class="Link Link--skip">Skip to main content</a>
    <p style="margin-top: var(--space-4); color: var(--fg-3); font-size: 0.875rem;">
        (Tab to this preview to see the skip link appear)
    </p>
</Preview>
---

## Download Links

Style for downloadable resources.

<Preview title="Download Links">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <a href="#" class="Link" download>
            <i class="ph ph-file-pdf Link-icon"></i>
            Annual Report 2025.pdf
        </a>
        <a href="#" class="Link" download>
            <i class="ph ph-file-xls Link-icon"></i>
            Financial Data.xlsx
        </a>
        <a href="#" class="Link" download>
            <i class="ph ph-file-zip Link-icon"></i>
            Source Code.zip
        </a>
    </div>
</Preview>
---

## Common Patterns

### Card with Link

<Preview title="Card Read More Link">
    <div class="Card" style="max-width: 320px;">
        <div class="Card-body">
            <h4 class="Card-title">Getting Started Guide</h4>
            <p class="Card-text">Learn the basics of setting up your first project with our step-by-step tutorial.</p>
            <a href="#" class="Link Link--standalone" style="margin-top: var(--space-3); display: inline-flex;">
                Read more
                <i class="ph ph-arrow-right Link-icon"></i>
            </a>
        </div>
    </div>
</Preview>

### Breadcrumb Navigation

<Preview title="Breadcrumbs">
    <nav aria-label="Breadcrumb" style="display: flex; align-items: center; gap: var(--space-2); font-size: 0.9rem;">
        <a href="#" class="Link Link--muted">Home</a>
        <i class="ph ph-caret-right" style="color: var(--fg-3); font-size: 0.75rem;"></i>
        <a href="#" class="Link Link--muted">Products</a>
        <i class="ph ph-caret-right" style="color: var(--fg-3); font-size: 0.75rem;"></i>
        <span style="color: var(--fg);">Widget Pro</span>
    </nav>
</Preview>
### Help Text with Link

<Preview title="Help Text">
    <div class="FormField" style="max-width: 320px;">
        <label class="FormField-label">Email Address</label>
        <input type="email" class="Input" placeholder="you@example.com">
        <span class="FormField-helper">
            Having trouble? <a href="#" class="Link">Reset your email</a>
        </span>
    </div>
</Preview>

### Alert with Link

<Preview title="Alert with Action Link">
    <div class="Alert Alert--info" style="max-width: 480px;">
        <i class="ph ph-info Alert-icon"></i>
        <div>
            Your subscription expires in 7 days. 
            <a href="#" class="Link">Renew now</a> to avoid interruption.
        </div>
    </div>
</Preview>

### Empty State with Links

<Preview title="Empty State">
    <div style="text-align: center; padding: var(--space-8); max-width: 400px;">
        <i class="ph ph-magnifying-glass" style="font-size: 3rem; color: var(--fg-3); margin-bottom: var(--space-4);"></i>
        <h4 style="margin: 0 0 var(--space-2);">No results found</h4>
        <p style="color: var(--fg-3); margin: 0 0 var(--space-4);">
            We couldn't find anything matching your search. Try 
            <a href="#" class="Link">browsing all items</a> or 
            <a href="#" class="Link">adjusting your filters</a>.
        </p>
    </div>
</Preview>

### Reference Links

<Preview title="Reference Section">
    <div style="max-width: 480px;">
        <h5 style="margin: 0 0 var(--space-3); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--fg-3);">Related Resources</h5>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--space-2);">
            <li>
                <a href="#" class="Link">
                    <i class="ph ph-book-open Link-icon"></i>
                    API Documentation
                </a>
            </li>
            <li>
                <a href="#" class="Link">
                    <i class="ph ph-video Link-icon"></i>
                    Video Tutorial
                </a>
            </li>
            <li>
                <a href="#" class="Link Link--external" target="_blank">
                    <i class="ph ph-github-logo Link-icon"></i>
                    GitHub Repository
                    <i class="ph ph-arrow-square-out Link-icon" style="margin-left: var(--space-1);"></i>
                </a>
            </li>
        </ul>
    </div>
</Preview>

---

## Customization

Override link styles using CSS custom properties:

```css
/* Custom link color */
.Link {
  --link-color: oklch(55% 0.2 250);
  --link-hover: oklch(50% 0.2 250);
  color: var(--link-color);
}

.Link:hover {
  color: var(--link-hover);
}

/* Custom underline style */
.Link--fancy {
  text-decoration: underline wavy;
  text-underline-offset: 4px;
}

/* Custom nav link */
.Link--nav {
  --nav-active-color: oklch(55% 0.2 150);
}

.Link--nav.Link--active {
  color: var(--nav-active-color);
}
```

---

## API Reference

### Base Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Link</code></td>
<td class="ApiTable-desc">Base link styles (required)</td>
</tr>
</tbody>
</table>

### Variant Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Link--subtle</code></td>
<td class="ApiTable-desc">Inherits text color, accent on hover</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Link--muted</code></td>
<td class="ApiTable-desc">Secondary text color</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Link--underline</code></td>
<td class="ApiTable-desc">Always shows underline</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Link--standalone</code></td>
<td class="ApiTable-desc">Standalone navigation link (bolder)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Link--external</code></td>
<td class="ApiTable-desc">External link (with icon styling)</td>
</tr>
</tbody>
</table>

### Size Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Link--small</code></td>
<td class="ApiTable-desc">Smaller font size (0.875rem)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Link--large</code></td>
<td class="ApiTable-desc">Larger font size (1.125rem)</td>
</tr>
</tbody>
</table>

### Modifier Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Link--disabled</code></td>
<td class="ApiTable-desc">Disabled/unavailable state</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Link--visited</code></td>
<td class="ApiTable-desc">Explicit visited styling</td>
</tr>
</tbody>
</table>

### Navigation Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Link--nav</code></td>
<td class="ApiTable-desc">Navigation link (for menus)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Link--active</code></td>
<td class="ApiTable-desc">Active/current navigation state</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Link--skip</code></td>
<td class="ApiTable-desc">Skip-to-content accessibility link</td>
</tr>
</tbody>
</table>

### Icon Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Link-icon</code></td>
<td class="ApiTable-desc">Icon inside link</td>
</tr>
</tbody>
</table>

### Attributes

<table class="ApiTable">
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">href</code></td>
<td class="ApiTable-desc">Required. The link destination</td>
</tr>
<tr>
<td><code class="ApiTable-prop">target="_blank"</code></td>
<td class="ApiTable-desc">Open in new tab (use with rel="noopener")</td>
</tr>
<tr>
<td><code class="ApiTable-prop">rel="noopener noreferrer"</code></td>
<td class="ApiTable-desc">Security attributes for external links</td>
</tr>
<tr>
<td><code class="ApiTable-prop">download</code></td>
<td class="ApiTable-desc">Trigger file download</td>
</tr>
<tr>
<td><code class="ApiTable-prop">aria-label</code></td>
<td class="ApiTable-desc">Accessible name when text isn't descriptive</td>
</tr>
<tr>
<td><code class="ApiTable-prop">aria-disabled="true"</code></td>
<td class="ApiTable-desc">For disabled links (use with span)</td>
</tr>
</tbody>
</table>

### CSS Custom Properties

<table class="ApiTable">
<thead>
<tr>
<th>Property</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">--accent-primary</code></td>
<td class="ApiTable-desc">—</td>
<td class="ApiTable-desc">Default link color</td>
</tr>
<tr>
<td><code class="ApiTable-prop">--text-primary</code></td>
<td class="ApiTable-desc">—</td>
<td class="ApiTable-desc">Subtle variant color</td>
</tr>
<tr>
<td><code class="ApiTable-prop">--text-secondary</code></td>
<td class="ApiTable-desc">—</td>
<td class="ApiTable-desc">Muted variant color</td>
</tr>
<tr>
<td><code class="ApiTable-prop">--space-1</code></td>
<td class="ApiTable-desc">0.25rem</td>
<td class="ApiTable-desc">Icon gap</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base Link */
.Link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--accent);
  text-decoration: none;
  cursor: pointer;
  transition: color var(--dur-f), text-decoration var(--dur-f);
}

.Link:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.Link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Link Icon */
.Link-icon {
  font-size: 0.9em;
  flex-shrink: 0;
}

/* Variants */
.Link--subtle {
  color: var(--fg);
}

.Link--subtle:hover {
  color: var(--accent);
}

.Link--muted {
  color: var(--fg-3);
}

.Link--muted:hover {
  color: var(--fg);
}

.Link--underline {
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* Standalone */
.Link--standalone {
  font-weight: 500;
}

/* External */
.Link--external .Link-icon:last-child {
  opacity: 0.7;
}

/* Sizes */
.Link--small {
  font-size: var(--fs-base);
}

.Link--large {
  font-size: var(--fs-2xl);
}

/* Disabled */
.Link--disabled {
  color: var(--fg-3);
  cursor: not-allowed;
  opacity: 0.6;
}

.Link--disabled:hover {
  text-decoration: none;
}

/* Navigation Links */
.Link--nav {
  color: var(--fg-3);
  font-weight: 500;
}

.Link--nav:hover {
  color: var(--fg);
  text-decoration: none;
}

.Link--nav.Link--active {
  color: var(--accent);
}

/* Visited State */
.Link:visited {
  color: oklch(50% 0.12 300);
}

.Link--subtle:visited,
.Link--muted:visited {
  color: var(--fg-3);
}

/* Skip Link */
.Link--skip {
  position: absolute;
  left: -9999px;
  top: var(--space-4);
  z-index: 9999;
  padding: var(--space-2) var(--space-4);
  background-color: var(--bg);
  border: 1px solid var(--bd-s);
  border-radius: var(--r-s);
  font-weight: 500;
}

.Link--skip:focus {
  left: var(--space-4);
}

/* Link in dark text (ensure contrast) */
p .Link,
.Card-text .Link,
.FormField-helper .Link {
  font-weight: 500;
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Enter | Activates the link |
| Tab | Moves focus to the next link |
| Shift + Tab | Moves focus to the previous link |

### Descriptive Text
```html
<!-- Good: Descriptive link text -->
<a href="/pricing" class="Link">View pricing plans</a>

<!-- Bad: Vague link text -->
<a href="/pricing" class="Link">Click here</a>
```

### External Links
```html
<!-- Indicate external links open in new tab -->
<a href="https://example.com" 
   class="Link" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Example website (opens in new tab)">
    Example website
    <i class="ph ph-arrow-square-out" aria-hidden="true"></i>
</a>
```

### Skip Links
```html
<!-- Provide skip navigation for keyboard users -->
<a href="#main-content" class="Link Link--skip">
    Skip to main content
</a>
```

### Download Links
```html
<!-- Indicate file type and size for downloads -->
<a href="/report.pdf" class="Link" download>
    <i class="ph ph-file-pdf" aria-hidden="true"></i>
    Annual Report (PDF, 2.4 MB)
</a>
```

### Links vs Buttons
```html
<!-- Link: Navigation to new page/resource -->
<a href="/about" class="Link">About Us</a>

<!-- Button: Triggers an action on the current page -->
<button class="Button Button--primary">Submit Form</button>
```

---

## Best Practices

### Do

- ✓ **Use descriptive text** — "View pricing" not "Click here"
- ✓ **Indicate external links** — Use icon and/or aria-label
- ✓ **Provide skip links** — Essential for keyboard navigation
- ✓ **Use links for navigation** — To pages or resources
- ✓ **Include file info** — For downloads, show type and size

### Don't

- ✗ **Use "click here"** — Link text should be meaningful alone
- ✗ **Open everything in new tabs** — Only for external links
- ✗ **Style links as buttons** — Use actual buttons for actions
- ✗ **Hide links in walls of text** — Make them visually distinct
- ✗ **Remove focus indicators** — Critical for accessibility
