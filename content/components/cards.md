# Cards

Cards are flexible containers that group related content and actions. They provide a clean, elevated surface for displaying everything from simple text to complex interactive layouts.

<Hero>
<!-- stats: 4 Variants, 5 Sections, Interactive -->
<div class="Card Card--elevated" style="max-width: 220px;">
    <div class="Card-body">
        <h3 class="Card-title" style="margin:0 0 4px">Design Tokens</h3>
        <p class="Card-text" style="margin:0;font-size:.875rem">OKLCH colors, spacing, and type scale.</p>
    </div>
</div>
<div class="Card Card--interactive" style="max-width: 220px;">
    <div class="Card-body">
        <h3 class="Card-title" style="margin:0 0 4px">Components</h3>
        <p class="Card-text" style="margin:0;font-size:.875rem">32 production-ready UI primitives.</p>
    </div>
</div>
</Hero>

---

## Installation

Copy the card CSS from `styles/docs.css` or include the Standard stylesheet:

```html
<link rel="stylesheet" href="standard.min.css">
```

Then use card classes in your HTML:

```html
<div class="Card">
    <div class="Card-body">
        <h3 class="Card-title">Card Title</h3>
        <p class="Card-text">Card content goes here.</p>
    </div>
</div>
```

---

## Usage

The base `.Card` class provides core styling with elevation and border radius. Add sections like `.Card-header`, `.Card-body`, and `.Card-footer` to structure content.

<Preview>
<div class="Card" style="max-width: 320px;">
    <div class="Card-body">
        <h3 class="Card-title">Simple Card</h3>
        <p class="Card-text">Cards group related content and actions together.</p>
    </div>
</div>
</Preview>

---

## Examples

### Basic Card

A minimal card with title and text content.

<Preview>
<div class="Card" style="max-width: 320px;">
    <div class="Card-body">
        <h3 class="Card-title">Project Update</h3>
        <p class="Card-text">The new dashboard feature is ready for review. All tests passing.</p>
    </div>
</div>
</Preview>

### Card with Header and Footer

Use header and footer sections for titles, metadata, and actions.

<Preview>
<div class="Card" style="max-width: 320px;">
    <div class="Card-header">
        <h3 class="Card-title">Weekly Report</h3>
        <span class="Card-subtitle">Feb 3, 2026</span>
    </div>
    <div class="Card-body">
        <p class="Card-text">Revenue increased 12% this week. Customer satisfaction scores remain high at 4.8/5.</p>
    </div>
    <div class="Card-footer">
        <button class="Button Button--tertiary Button--small">Dismiss</button>
        <button class="Button Button--primary Button--small">View Details</button>
    </div>
</div>
</Preview>

### Card with Image

Add images to cards using `.Card-image` at the top.

<Preview>
<div class="Card" style="max-width: 320px;">
    <div class="Card-image" style="background: linear-gradient(135deg, oklch(60% 0.15 250), oklch(50% 0.2 280)); height: 160px;"></div>
    <div class="Card-body">
        <h3 class="Card-title">Mountain Retreat</h3>
        <p class="Card-text">Escape to the peaks for a weekend of hiking and relaxation.</p>
        <button class="Button Button--primary Button--small">Book Now</button>
    </div>
</div>
</Preview>

### Card with Image Overlay

Overlay text on images for hero-style cards.

<Preview>
<div class="Card Card--overlay" style="max-width: 400px;">
    <div class="Card-image" style="background: linear-gradient(135deg, oklch(45% 0.18 30), oklch(35% 0.15 350)); height: 220px;"></div>
    <div class="Card-overlay">
        <span class="Card-tag">Featured</span>
        <h3 class="Card-title">Sunset Photography Workshop</h3>
        <p class="Card-text">Learn to capture golden hour magic</p>
    </div>
</div>
</Preview>

### Horizontal Card

Side-by-side layout for media and content.

<Preview>
<div class="Card Card--horizontal" style="max-width: 480px;">
    <div class="Card-image" style="background: linear-gradient(135deg, oklch(55% 0.12 170), oklch(45% 0.15 200)); min-width: 140px;"></div>
    <div class="Card-body">
        <span class="Card-tag">Article</span>
        <h3 class="Card-title">Design Systems at Scale</h3>
        <p class="Card-text">How leading teams maintain consistency across products.</p>
        <span class="Card-meta">8 min read</span>
    </div>
</div>
</Preview>

### Interactive Card

Clickable cards with hover effects.

<Preview>
<a href="#" class="Card Card--interactive" style="max-width: 320px; text-decoration: none;">
    <div class="Card-body">
        <div style="display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-3);">
            <div style="width: 40px; height: 40px; border-radius: var(--r-m); background: oklch(60% 0.15 250); display: flex; align-items: center; justify-content: center;">
                <i class="ph ph-folder" style="color: white; font-size: 1.25rem;"></i>
            </div>
            <div>
                <h3 class="Card-title" style="margin: 0;">Design Files</h3>
                <span class="Card-meta">24 items</span>
            </div>
        </div>
        <p class="Card-text">Figma files, brand assets, and component libraries.</p>
    </div>
</a>
</Preview>

### Profile Card

Display user information and quick actions.

<Preview>
<div class="Card" style="max-width: 300px; text-align: center;">
    <div class="Card-body">
        <div class="Card-avatar" style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, oklch(65% 0.15 150), oklch(55% 0.18 180)); margin: 0 auto var(--space-4);"></div>
        <h3 class="Card-title">Alex Chen</h3>
        <p class="Card-subtitle">Senior Product Designer</p>
        <p class="Card-text" style="margin-top: var(--space-3);">Creating delightful experiences at Acme Corp. Previously at Figma.</p>
        <div style="display: flex; gap: var(--space-2); justify-content: center; margin-top: var(--space-4);">
            <button class="Button Button--primary Button--small">Follow</button>
            <button class="Button Button--secondary Button--small">Message</button>
        </div>
    </div>
</div>
</Preview>

### Stats Card

Highlight key metrics and numbers.

<Preview>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); max-width: 600px;">
    <div class="Card">
        <div class="Card-body" style="text-align: center;">
            <span class="Card-stat">2,847</span>
            <span class="Card-stat-label">Total Users</span>
            <span class="Card-stat-change Card-stat-change--positive">+12.5%</span>
        </div>
    </div>
    <div class="Card">
        <div class="Card-body" style="text-align: center;">
            <span class="Card-stat">$48.2k</span>
            <span class="Card-stat-label">Revenue</span>
            <span class="Card-stat-change Card-stat-change--positive">+8.2%</span>
        </div>
    </div>
    <div class="Card">
        <div class="Card-body" style="text-align: center;">
            <span class="Card-stat">94.2%</span>
            <span class="Card-stat-label">Uptime</span>
            <span class="Card-stat-change Card-stat-change--negative">-0.3%</span>
        </div>
    </div>
</div>
</Preview>

### Pricing Card

Display pricing tiers and features.

<Preview>
<div class="Card Card--pricing" style="max-width: 320px;">
    <div class="Card-header" style="text-align: center;">
        <span class="Card-tag">Popular</span>
        <h3 class="Card-title">Pro</h3>
        <div class="Card-price">
            <span class="Card-price-amount">$29</span>
            <span class="Card-price-period">/month</span>
        </div>
    </div>
    <div class="Card-body">
        <ul class="Card-features">
            <li class="Card-feature">
                <i class="ph ph-check"></i>
                Unlimited projects
            </li>
            <li class="Card-feature">
                <i class="ph ph-check"></i>
                50GB storage
            </li>
            <li class="Card-feature">
                <i class="ph ph-check"></i>
                Priority support
            </li>
            <li class="Card-feature">
                <i class="ph ph-check"></i>
                Advanced analytics
            </li>
            <li class="Card-feature Card-feature--disabled">
                <i class="ph ph-x"></i>
                Custom domain
            </li>
        </ul>
    </div>
    <div class="Card-footer">
        <button class="Button Button--primary Button--block">Get Started</button>
    </div>
</div>
</Preview>

### Product Card

E-commerce style product display.

<Preview>
<div class="Card" style="max-width: 280px;">
    <div class="Card-image" style="background: linear-gradient(135deg, oklch(92% 0.02 80), oklch(88% 0.03 60)); height: 200px; position: relative;">
        <button class="Card-wishlist" aria-label="Add to wishlist">
            <i class="ph ph-heart"></i>
        </button>
    </div>
    <div class="Card-body">
        <span class="Card-category">Electronics</span>
        <h3 class="Card-title">Wireless Headphones</h3>
        <div class="Card-rating">
            <i class="ph-fill ph-star"></i>
            <i class="ph-fill ph-star"></i>
            <i class="ph-fill ph-star"></i>
            <i class="ph-fill ph-star"></i>
            <i class="ph ph-star"></i>
            <span class="Card-rating-count">(128)</span>
        </div>
        <div class="Card-price-row">
            <span class="Card-price-current">$79.99</span>
            <span class="Card-price-original">$99.99</span>
        </div>
        <button class="Button Button--primary Button--block Button--small">Add to Cart</button>
    </div>
</div>
</Preview>

### Notification Card

Alert or notification style cards.

<Preview>
<div class="Card Card--notification Card--notification-info" style="max-width: 400px;">
    <div class="Card-body" style="display: flex; gap: var(--space-3);">
        <i class="ph ph-info" style="font-size: 1.25rem; flex-shrink: 0;"></i>
        <div>
            <h4 class="Card-title" style="margin-bottom: var(--space-1);">New Feature Available</h4>
            <p class="Card-text">Dark mode is now available. Update your preferences in settings.</p>
        </div>
        <button class="Button Button--ghost Button--icon Button--small" aria-label="Dismiss">
            <i class="ph ph-x"></i>
        </button>
    </div>
</div>
</Preview>

<Preview>
<div class="Card Card--notification Card--notification-success" style="max-width: 400px;">
    <div class="Card-body" style="display: flex; gap: var(--space-3);">
        <i class="ph ph-check-circle" style="font-size: 1.25rem; flex-shrink: 0;"></i>
        <div>
            <h4 class="Card-title" style="margin-bottom: var(--space-1);">Payment Successful</h4>
            <p class="Card-text">Your subscription has been renewed for another year.</p>
        </div>
    </div>
</div>
</Preview>

### List Card

Cards containing list items.

<Preview>
<div class="Card" style="max-width: 360px;">
    <div class="Card-header">
        <h3 class="Card-title">Recent Activity</h3>
        <button class="Button Button--ghost Button--small">View All</button>
    </div>
    <ul class="Card-list">
        <li class="Card-list-item">
            <div class="Card-list-icon" style="background: oklch(60% 0.15 150);">
                <i class="ph ph-file-text" style="color: white;"></i>
            </div>
            <div class="Card-list-content">
                <span class="Card-list-title">Document uploaded</span>
                <span class="Card-list-meta">report-q4.pdf • 2 min ago</span>
            </div>
        </li>
        <li class="Card-list-item">
            <div class="Card-list-icon" style="background: oklch(60% 0.15 250);">
                <i class="ph ph-user-plus" style="color: white;"></i>
            </div>
            <div class="Card-list-content">
                <span class="Card-list-title">New team member</span>
                <span class="Card-list-meta">Sarah joined Design • 1 hour ago</span>
            </div>
        </li>
        <li class="Card-list-item">
            <div class="Card-list-icon" style="background: oklch(65% 0.15 45);">
                <i class="ph ph-star" style="color: white;"></i>
            </div>
            <div class="Card-list-content">
                <span class="Card-list-title">Project starred</span>
                <span class="Card-list-meta">Standard Design System • 3 hours ago</span>
            </div>
        </li>
    </ul>
</div>
</Preview>

---

## Variants

### Elevated

Default cards have subtle elevation with shadow.

<Preview>
<div class="Card" style="max-width: 280px;">
    <div class="Card-body">
        <h3 class="Card-title">Elevated Card</h3>
        <p class="Card-text">Default shadow provides depth.</p>
    </div>
</div>
</Preview>

### Outlined

Border-only variant without shadow.

<Preview>
<div class="Card Card--outlined" style="max-width: 280px;">
    <div class="Card-body">
        <h3 class="Card-title">Outlined Card</h3>
        <p class="Card-text">Clean border, no shadow.</p>
    </div>
</div>
</Preview>

### Flat

No border or shadow — blends with background.

<Preview>
<div class="Card Card--flat" style="max-width: 280px;">
    <div class="Card-body">
        <h3 class="Card-title">Flat Card</h3>
        <p class="Card-text">Minimal visual weight.</p>
    </div>
</div>
</Preview>

### Filled

Filled background without shadow.

<Preview>
<div class="Card Card--filled" style="max-width: 280px;">
    <div class="Card-body">
        <h3 class="Card-title">Filled Card</h3>
        <p class="Card-text">Solid background color.</p>
    </div>
</div>
</Preview>

---

## Padding Sizes

<Preview>
<div style="display: flex; gap: var(--space-4); flex-wrap: wrap;">
    <div class="Card Card--compact" style="max-width: 200px;">
        <div class="Card-body">
            <h4 class="Card-title">Compact</h4>
            <p class="Card-text">Less padding</p>
        </div>
    </div>
    <div class="Card" style="max-width: 200px;">
        <div class="Card-body">
            <h4 class="Card-title">Default</h4>
            <p class="Card-text">Standard padding</p>
        </div>
    </div>
    <div class="Card Card--spacious" style="max-width: 200px;">
        <div class="Card-body">
            <h4 class="Card-title">Spacious</h4>
            <p class="Card-text">More padding</p>
        </div>
    </div>
</div>
</Preview>

---

## Card Grid

Responsive grid layout for multiple cards.

<Preview>
<div class="CardGrid">
    <div class="Card">
        <div class="Card-image" style="background: linear-gradient(135deg, oklch(60% 0.15 30), oklch(50% 0.18 10)); height: 120px;"></div>
        <div class="Card-body">
            <h3 class="Card-title">Card One</h3>
            <p class="Card-text">Description text for the first card.</p>
        </div>
    </div>
    <div class="Card">
        <div class="Card-image" style="background: linear-gradient(135deg, oklch(60% 0.15 150), oklch(50% 0.18 170)); height: 120px;"></div>
        <div class="Card-body">
            <h3 class="Card-title">Card Two</h3>
            <p class="Card-text">Description text for the second card.</p>
        </div>
    </div>
    <div class="Card">
        <div class="Card-image" style="background: linear-gradient(135deg, oklch(60% 0.15 250), oklch(50% 0.18 270)); height: 120px;"></div>
        <div class="Card-body">
            <h3 class="Card-title">Card Three</h3>
            <p class="Card-text">Description text for the third card.</p>
        </div>
    </div>
</div>
</Preview>

---

## Common Patterns

### Dashboard Cards

<Preview title="Dashboard Layout">
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); max-width: 700px;">
    <div class="Card">
        <div class="Card-body" style="text-align: center;">
            <span class="Card-stat">1,284</span>
            <span class="Card-stat-label">Active Users</span>
            <span class="Card-stat-change Card-stat-change--positive">+5.2%</span>
        </div>
    </div>
    <div class="Card">
        <div class="Card-body" style="text-align: center;">
            <span class="Card-stat">$32.1k</span>
            <span class="Card-stat-label">Monthly Revenue</span>
            <span class="Card-stat-change Card-stat-change--positive">+11%</span>
        </div>
    </div>
    <div class="Card">
        <div class="Card-body" style="text-align: center;">
            <span class="Card-stat">98.7%</span>
            <span class="Card-stat-label">Uptime</span>
            <span class="Card-stat-change Card-stat-change--negative">-0.1%</span>
        </div>
    </div>
</div>
</Preview>

### Card in a Settings Page

<Preview title="Settings Section">
<div class="Card Card--outlined" style="max-width: 480px;">
    <div class="Card-header">
        <h3 class="Card-title">Notifications</h3>
    </div>
    <div class="Card-body">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3);">
            <span>Email notifications</span>
            <label class="Toggle"><input type="checkbox" checked><span class="Toggle-slider"></span></label>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>Push notifications</span>
            <label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>
        </div>
    </div>
</div>
</Preview>

### Card with Media Gallery

<Preview title="Media Gallery Card">
<div class="Card" style="max-width: 360px;">
    <div class="Card-body">
        <h3 class="Card-title">Trip Photos</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); margin-top: var(--space-3);">
            <div style="aspect-ratio: 1; background: linear-gradient(135deg, oklch(60% 0.15 30), oklch(50% 0.18 10)); border-radius: var(--r-s);"></div>
            <div style="aspect-ratio: 1; background: linear-gradient(135deg, oklch(60% 0.15 150), oklch(50% 0.18 170)); border-radius: var(--r-s);"></div>
            <div style="aspect-ratio: 1; background: linear-gradient(135deg, oklch(60% 0.15 250), oklch(50% 0.18 270)); border-radius: var(--r-s);"></div>
        </div>
        <p class="Card-meta" style="margin-top: var(--space-2);">12 photos · June 2025</p>
    </div>
</div>
</Preview>

### Card as Empty State

<Preview title="Empty State Card">
<div class="Card Card--outlined" style="max-width: 400px; text-align: center;">
    <div class="Card-body" style="padding: var(--space-8);">
        <i class="ph ph-folder-open" style="font-size: 2.5rem; color: var(--fg-3); margin-bottom: var(--space-3);"></i>
        <h3 class="Card-title">No projects yet</h3>
        <p class="Card-text">Create your first project to get started.</p>
        <button class="Button Button--primary Button--small" style="margin-top: var(--space-4);">Create Project</button>
    </div>
</div>
</Preview>

---

## Customization

Override card styles using CSS custom properties:

```css
/* Custom card background */
.Card--custom {
  --card-bg: oklch(95% 0.02 250);
  --card-border: oklch(85% 0.05 250);
  background-color: var(--card-bg);
  border-color: var(--card-border);
}

/* Custom shadow depth */
.Card--deep {
  box-shadow: 
    0 4px 6px -1px oklch(0% 0 0 / 0.1),
    0 10px 15px -3px oklch(0% 0 0 / 0.1);
}

/* Custom border radius */
.Card--rounded {
  border-radius: var(--r-xl);
}

/* Custom padding */
.Card--tight {
  --card-padding: var(--space-3);
}

.Card--loose {
  --card-padding: var(--space-8);
}

/* Accent border */
.Card--accent {
  border-left: 4px solid var(--accent);
}
```

### Theme Variants

```css
/* Success card */
.Card--success {
  --card-bg: oklch(95% 0.04 150);
  --card-border: oklch(70% 0.15 150);
  border-left: 4px solid var(--card-border);
}

/* Warning card */
.Card--warning {
  --card-bg: oklch(95% 0.04 85);
  --card-border: oklch(75% 0.15 85);
  border-left: 4px solid var(--card-border);
}

/* Error card */
.Card--error {
  --card-bg: oklch(95% 0.04 25);
  --card-border: oklch(65% 0.2 25);
  border-left: 4px solid var(--card-border);
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
<td><code class="ApiTable-prop">.Card</code></td>
<td class="ApiTable-desc">Base card container (required)</td>
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
<td><code class="ApiTable-prop">.Card-header</code></td>
<td class="ApiTable-desc">Card header section with title and actions</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-body</code></td>
<td class="ApiTable-desc">Main content area with padding</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-footer</code></td>
<td class="ApiTable-desc">Footer section for actions</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-image</code></td>
<td class="ApiTable-desc">Image container at card top</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-overlay</code></td>
<td class="ApiTable-desc">Text overlay on images</td>
</tr>
</tbody>
</table>

### Typography Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Card-title</code></td>
<td class="ApiTable-desc">Card heading text</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-subtitle</code></td>
<td class="ApiTable-desc">Secondary heading or date</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-text</code></td>
<td class="ApiTable-desc">Body text content</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-meta</code></td>
<td class="ApiTable-desc">Metadata like timestamps or counts</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-tag</code></td>
<td class="ApiTable-desc">Category or status tag</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-category</code></td>
<td class="ApiTable-desc">Product/content category label</td>
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
<td><code class="ApiTable-prop">.Card--outlined</code></td>
<td class="ApiTable-desc">Border only, no shadow</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--flat</code></td>
<td class="ApiTable-desc">No border or shadow</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--filled</code></td>
<td class="ApiTable-desc">Filled background, no shadow</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--interactive</code></td>
<td class="ApiTable-desc">Clickable with hover effects</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--horizontal</code></td>
<td class="ApiTable-desc">Side-by-side layout</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--overlay</code></td>
<td class="ApiTable-desc">Text overlaid on image</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--pricing</code></td>
<td class="ApiTable-desc">Pricing tier styling</td>
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
<td><code class="ApiTable-prop">.Card--compact</code></td>
<td class="ApiTable-desc">Reduced padding</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--spacious</code></td>
<td class="ApiTable-desc">Increased padding</td>
</tr>
</tbody>
</table>

### Stats Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Card-stat</code></td>
<td class="ApiTable-desc">Large metric number</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-stat-label</code></td>
<td class="ApiTable-desc">Metric label text</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-stat-change</code></td>
<td class="ApiTable-desc">Change indicator</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-stat-change--positive</code></td>
<td class="ApiTable-desc">Positive change (green)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-stat-change--negative</code></td>
<td class="ApiTable-desc">Negative change (red)</td>
</tr>
</tbody>
</table>

### Pricing Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Card-price</code></td>
<td class="ApiTable-desc">Price container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-price-amount</code></td>
<td class="ApiTable-desc">Large price number</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-price-period</code></td>
<td class="ApiTable-desc">Billing period text</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-features</code></td>
<td class="ApiTable-desc">Feature list container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-feature</code></td>
<td class="ApiTable-desc">Individual feature item</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-feature--disabled</code></td>
<td class="ApiTable-desc">Unavailable feature (grayed)</td>
</tr>
</tbody>
</table>

### Product Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Card-wishlist</code></td>
<td class="ApiTable-desc">Wishlist heart button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-rating</code></td>
<td class="ApiTable-desc">Star rating container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-rating-count</code></td>
<td class="ApiTable-desc">Review count text</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-price-current</code></td>
<td class="ApiTable-desc">Current sale price</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-price-original</code></td>
<td class="ApiTable-desc">Original strikethrough price</td>
</tr>
</tbody>
</table>

### Notification Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Card--notification</code></td>
<td class="ApiTable-desc">Notification card base</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--notification-info</code></td>
<td class="ApiTable-desc">Info notification (blue)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--notification-success</code></td>
<td class="ApiTable-desc">Success notification (green)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--notification-warning</code></td>
<td class="ApiTable-desc">Warning notification (yellow)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card--notification-error</code></td>
<td class="ApiTable-desc">Error notification (red)</td>
</tr>
</tbody>
</table>

### List Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Card-list</code></td>
<td class="ApiTable-desc">List container inside card</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-list-item</code></td>
<td class="ApiTable-desc">Individual list item</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-list-icon</code></td>
<td class="ApiTable-desc">Icon container for list item</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-list-content</code></td>
<td class="ApiTable-desc">Text content wrapper</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-list-title</code></td>
<td class="ApiTable-desc">List item title</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Card-list-meta</code></td>
<td class="ApiTable-desc">List item metadata</td>
</tr>
</tbody>
</table>

### Layout Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.CardGrid</code></td>
<td class="ApiTable-desc">Responsive card grid container</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base card */
.Card {
  background: var(--bg);
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  box-shadow: 0 1px 3px oklch(0% 0 0 / 0.08);
  overflow: hidden;
}

/* Structure */
.Card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
  border-bottom: 1px solid var(--bd);
}

.Card-body {
  padding: var(--space-4);
}

.Card-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-2);
  padding: var(--space-4);
  border-top: 1px solid var(--bd);
}

.Card-image {
  width: 100%;
  background-size: cover;
  background-position: center;
}

/* Typography */
.Card-title {
  font-weight: 600;
  font-size: var(--fs-xl);
  color: var(--fg);
  margin-bottom: var(--space-1);
}

.Card-subtitle {
  font-size: var(--fs-base);
  color: var(--fg-3);
}

.Card-text {
  font-size: var(--fs-lg);
  color: var(--fg-2);
  line-height: 1.5;
}

.Card-meta {
  font-size: var(--fs-md);
  color: var(--fg-3);
}

.Card-tag {
  display: inline-block;
  padding: 2px var(--space-2);
  font-size: var(--fs-sm);
  font-weight: 600;
  border-radius: var(--r-s);
  background: var(--accent);
  color: white;
}

/* Variants */
.Card--outlined {
  box-shadow: none;
}

.Card--flat {
  border: none;
  box-shadow: none;
  background: transparent;
}

.Card--filled {
  box-shadow: none;
  background: var(--bg-s);
}

.Card--interactive {
  cursor: pointer;
  transition: box-shadow var(--dur-f), transform var(--dur-f);
}

.Card--interactive:hover {
  box-shadow: 0 4px 12px oklch(0% 0 0 / 0.12);
  transform: translateY(-2px);
}

.Card--horizontal {
  display: flex;
}

.Card--horizontal .Card-image {
  width: auto;
  min-width: 140px;
}

/* Overlay */
.Card--overlay {
  position: relative;
}

.Card--overlay .Card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-4);
  background: linear-gradient(to top, oklch(0% 0 0 / 0.7), transparent);
  color: white;
}

.Card--overlay .Card-title,
.Card--overlay .Card-text {
  color: white;
}

/* Sizes */
.Card--compact .Card-body,
.Card--compact .Card-header,
.Card--compact .Card-footer {
  padding: var(--space-2) var(--space-3);
}

.Card--spacious .Card-body,
.Card--spacious .Card-header,
.Card--spacious .Card-footer {
  padding: var(--space-6);
}

/* Stats */
.Card-stat {
  display: block;
  font-size: var(--fs-5xl);
  font-weight: 700;
  color: var(--fg);
}

.Card-stat-label {
  display: block;
  font-size: var(--fs-md);
  color: var(--fg-3);
  margin-top: var(--space-1);
}

.Card-stat-change {
  display: block;
  font-size: var(--fs-md);
  font-weight: 600;
  margin-top: var(--space-1);
}

.Card-stat-change--positive { color: oklch(55% 0.15 150); }
.Card-stat-change--negative { color: oklch(55% 0.2 25); }

/* Pricing */
.Card-price-amount {
  font-size: var(--fs-6xl);
  font-weight: 700;
}

.Card-price-period {
  font-size: var(--fs-base);
  color: var(--fg-3);
}

.Card-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.Card-feature {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) 0;
}

.Card-feature--disabled {
  color: var(--fg-3);
  text-decoration: line-through;
}

/* Product */
.Card-wishlist {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  background: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 1px 3px oklch(0% 0 0 / 0.15);
}

.Card-rating {
  display: flex;
  align-items: center;
  gap: 2px;
  color: oklch(70% 0.15 80);
  margin: var(--space-2) 0;
}

.Card-rating-count {
  font-size: var(--fs-md);
  color: var(--fg-3);
  margin-left: var(--space-1);
}

.Card-price-current {
  font-weight: 700;
  font-size: var(--fs-2xl);
}

.Card-price-original {
  text-decoration: line-through;
  color: var(--fg-3);
  font-size: var(--fs-lg);
  margin-left: var(--space-2);
}

/* Notification */
.Card--notification {
  border-left: 4px solid var(--bd);
}

.Card--notification-info { border-left-color: oklch(60% 0.15 250); }
.Card--notification-success { border-left-color: oklch(55% 0.15 150); }
.Card--notification-warning { border-left-color: oklch(70% 0.15 80); }
.Card--notification-error { border-left-color: oklch(55% 0.2 25); }

/* List */
.Card-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.Card-list-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-top: 1px solid var(--bd);
}

.Card-list-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--r-s);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.Card-list-title {
  display: block;
  font-weight: 500;
  font-size: var(--fs-lg);
}

.Card-list-meta {
  display: block;
  font-size: var(--fs-md);
  color: var(--fg-3);
}

/* Grid */
.CardGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-4);
}
```

---

## Accessibility

### Semantic Structure

```html
<!-- Use article for standalone content -->
<article class="Card">
    <div class="Card-body">
        <h3 class="Card-title">Article Title</h3>
        <p class="Card-text">Self-contained content.</p>
    </div>
</article>

<!-- Use heading hierarchy -->
<div class="Card">
    <div class="Card-header">
        <h2 class="Card-title">Section Title</h2>
    </div>
    <div class="Card-body">
        <h3>Subsection</h3>
        <p class="Card-text">Content under subsection.</p>
    </div>
</div>
```

### Interactive Cards

```html
<!-- Clickable card as link -->
<a href="/project" class="Card Card--interactive">
    <div class="Card-body">
        <h3 class="Card-title">Project Name</h3>
        <p class="Card-text">Click to view project details.</p>
    </div>
</a>

<!-- Card with multiple actions — don't make whole card clickable -->
<div class="Card">
    <div class="Card-body">
        <h3 class="Card-title">Project Name</h3>
        <p class="Card-text">Project description here.</p>
        <div class="Card-actions">
            <a href="/project/edit">Edit</a>
            <button>Delete</button>
        </div>
    </div>
</div>
```

### Images

```html
<!-- Decorative image -->
<div class="Card">
    <div class="Card-image" role="presentation" aria-hidden="true"
         style="background-image: url('pattern.jpg');"></div>
    <div class="Card-body">
        <h3 class="Card-title">Title</h3>
    </div>
</div>

<!-- Meaningful image -->
<div class="Card">
    <img class="Card-image" src="product.jpg" 
         alt="Blue wireless headphones with cushioned ear cups" loading="lazy" decoding="async">
    <div class="Card-body">
        <h3 class="Card-title">Wireless Headphones</h3>
    </div>
</div>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Move focus to interactive elements |
| Enter | Activate focused link or button |
| Space | Activate focused button |

### Screen Reader Considerations

```html
<!-- Price with context -->
<div class="Card-price-row">
    <span class="Card-price-current" aria-label="Sale price: $79.99">$79.99</span>
    <span class="Card-price-original" aria-label="Original price: $99.99">
        <s>$99.99</s>
    </span>
</div>

<!-- Stats with labels -->
<div class="Card-body">
    <span class="Card-stat" aria-describedby="stat-label-users">2,847</span>
    <span class="Card-stat-label" id="stat-label-users">Total Users</span>
</div>

<!-- Rating with text alternative -->
<div class="Card-rating" aria-label="4 out of 5 stars, 128 reviews">
    <i class="ph-fill ph-star" aria-hidden="true"></i>
    <i class="ph-fill ph-star" aria-hidden="true"></i>
    <i class="ph-fill ph-star" aria-hidden="true"></i>
    <i class="ph-fill ph-star" aria-hidden="true"></i>
    <i class="ph ph-star" aria-hidden="true"></i>
    <span class="Card-rating-count">(128)</span>
</div>
```

---

## Best Practices

### Do

- ✓ **Use consistent card heights** in grids — align content or use CSS Grid
- ✓ **Limit content** — Cards should be scannable, not essays
- ✓ **Single primary action** — One clear CTA per card
- ✓ **Meaningful images** — Images should add value, not just decoration
- ✓ **Clear visual hierarchy** — Title → Supporting text → Actions
- ✓ **Group related cards** — Use grids with consistent spacing

### Don't

- ✗ **Nest cards** — Cards inside cards creates visual confusion
- ✗ **Too many actions** — More than 2-3 actions clutters the card
- ✗ **Walls of text** — Keep descriptions to 2-3 lines max
- ✗ **Inconsistent styling** — Mix variants sparingly within a view
- ✗ **Click the whole card with multiple CTAs** — Accessibility nightmare
- ✗ **Tiny touch targets** — Ensure buttons/links are at least 44px

### Content Guidelines

**Titles:** Keep to one line when possible. Be specific.
- ✓ "Q4 Revenue Report"
- ✗ "Report"

**Descriptions:** Front-load important info. Truncate gracefully.
- ✓ "Revenue increased 12% driven by new enterprise clients."
- ✗ "In this quarter we saw various changes across multiple metrics..."

**Actions:** Use clear, specific verbs.
- ✓ "View Report", "Add to Cart", "Start Trial"
- ✗ "Click Here", "Submit", "Go"
