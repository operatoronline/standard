---
title: Drawer
---

# Drawer

Drawers are panels that slide in from the edge of the screen, commonly used for navigation, filters, or secondary content.

## Basic Drawer

A simple slide-out panel from the right.

<Preview>
  <div style="position: relative; height: 300px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
    <div class="Drawer-backdrop Drawer-backdrop--visible"></div>
    <div class="Drawer Drawer--right Drawer--open" style="position: absolute;">
      <div class="Drawer-header">
        <h3 class="Drawer-title">Drawer Title</h3>
        <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
      </div>
      <div class="Drawer-body">
        <p>Drawer content goes here. This can contain any elements.</p>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer-backdrop"></div>
<div class="Drawer Drawer--right">
  <div class="Drawer-header">
    <h3 class="Drawer-title">Drawer Title</h3>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
  </div>
  <div class="Drawer-body">
    <p>Drawer content goes here.</p>
  </div>
</div>
```

## Position Variants

Drawers can slide in from any edge.

<Preview>
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4);">
    <div style="position: relative; height: 200px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--left Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
          <h4 class="Drawer-title">Left</h4>
        </div>
      </div>
    </div>
    <div style="position: relative; height: 200px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--right Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
          <h4 class="Drawer-title">Right</h4>
        </div>
      </div>
    </div>
    <div style="position: relative; height: 200px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--top Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
          <h4 class="Drawer-title">Top</h4>
        </div>
      </div>
    </div>
    <div style="position: relative; height: 200px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--bottom Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
          <h4 class="Drawer-title">Bottom</h4>
        </div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--left">...</div>
<div class="Drawer Drawer--right">...</div>
<div class="Drawer Drawer--top">...</div>
<div class="Drawer Drawer--bottom">...</div>
```

## Sizes

Drawers come in different widths.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div style="position: relative; height: 150px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--right Drawer--open Drawer--xs" style="position: absolute;">
        <div class="Drawer-header"><h4 class="Drawer-title">XS (240px)</h4></div>
      </div>
    </div>
    <div style="position: relative; height: 150px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--right Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header"><h4 class="Drawer-title">SM (320px)</h4></div>
      </div>
    </div>
    <div style="position: relative; height: 150px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
      <div class="Drawer Drawer--right Drawer--open" style="position: absolute;">
        <div class="Drawer-header"><h4 class="Drawer-title">Default (400px)</h4></div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--xs">...</div>  <!-- 240px -->
<div class="Drawer Drawer--sm">...</div>  <!-- 320px -->
<div class="Drawer">...</div>             <!-- 400px -->
<div class="Drawer Drawer--lg">...</div>  <!-- 560px -->
<div class="Drawer Drawer--xl">...</div>  <!-- 720px -->
<div class="Drawer Drawer--full">...</div> <!-- 100% -->
```

## Navigation Drawer

A sidebar navigation pattern.

<Preview>
  <div style="position: relative; height: 400px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
    <div class="Drawer Drawer--left Drawer--open Drawer--sm" style="position: absolute;">
      <div class="Drawer-header">
        <div style="display: flex; align-items: center; gap: var(--space-2);">
          <div style="width: 32px; height: 32px; background: var(--accent); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">C</div>
          <span style="font-weight: 600;">Standard</span>
        </div>
      </div>
      <nav class="Drawer-nav">
        <a href="#" class="Drawer-navItem Drawer-navItem--active">
          <i class="ph ph-house"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-folder"></i>
          <span>Projects</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-users"></i>
          <span>Team</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-calendar"></i>
          <span>Calendar</span>
        </a>
        <div class="Drawer-navDivider"></div>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-gear"></i>
          <span>Settings</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-question"></i>
          <span>Help</span>
        </a>
      </nav>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--left Drawer--sm">
  <div class="Drawer-header">
    <div class="Logo">...</div>
  </div>
  <nav class="Drawer-nav">
    <a href="#" class="Drawer-navItem Drawer-navItem--active">
      <i class="ph ph-house"></i>
      <span>Dashboard</span>
    </a>
    <a href="#" class="Drawer-navItem">
      <i class="ph ph-folder"></i>
      <span>Projects</span>
    </a>
    <div class="Drawer-navDivider"></div>
    <a href="#" class="Drawer-navItem">
      <i class="ph ph-gear"></i>
      <span>Settings</span>
    </a>
  </nav>
</div>
```

## Filter Drawer

A drawer for filter controls.

<Preview>
  <div style="position: relative; height: 400px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
    <div class="Drawer-backdrop Drawer-backdrop--visible"></div>
    <div class="Drawer Drawer--right Drawer--open Drawer--sm" style="position: absolute;">
      <div class="Drawer-header">
        <h3 class="Drawer-title">Filters</h3>
        <button class="Button Button--ghost Button--sm">Reset</button>
      </div>
      <div class="Drawer-body">
        <div class="Drawer-section">
          <h4 class="Drawer-sectionTitle">Category</h4>
          <label class="Checkbox"><input type="checkbox" checked> Electronics</label>
          <label class="Checkbox"><input type="checkbox"> Clothing</label>
          <label class="Checkbox"><input type="checkbox" checked> Books</label>
          <label class="Checkbox"><input type="checkbox"> Home & Garden</label>
        </div>
        <div class="Drawer-section">
          <h4 class="Drawer-sectionTitle">Price Range</h4>
          <div style="display: flex; gap: var(--space-2); align-items: center;">
            <input type="number" class="Input Input--sm" placeholder="Min" style="width: 80px;">
            <span>—</span>
            <input type="number" class="Input Input--sm" placeholder="Max" style="width: 80px;">
          </div>
        </div>
        <div class="Drawer-section">
          <h4 class="Drawer-sectionTitle">Rating</h4>
          <label class="Radio"><input type="radio" name="rating"> 4+ Stars</label>
          <label class="Radio"><input type="radio" name="rating" checked> 3+ Stars</label>
          <label class="Radio"><input type="radio" name="rating"> Any</label>
        </div>
      </div>
      <div class="Drawer-footer">
        <button class="Button Button--ghost" style="flex: 1;">Cancel</button>
        <button class="Button Button--primary" style="flex: 1;">Apply Filters</button>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--right Drawer--sm">
  <div class="Drawer-header">
    <h3 class="Drawer-title">Filters</h3>
    <button class="Button Button--ghost Button--sm">Reset</button>
  </div>
  <div class="Drawer-body">
    <div class="Drawer-section">
      <h4 class="Drawer-sectionTitle">Category</h4>
      <!-- Filter controls -->
    </div>
  </div>
  <div class="Drawer-footer">
    <button class="Button Button--ghost">Cancel</button>
    <button class="Button Button--primary">Apply</button>
  </div>
</div>
```

## With Tabs

Organize drawer content with tabs.

<Preview>
  <div style="position: relative; height: 350px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--radius-md);">
    <div class="Drawer Drawer--right Drawer--open" style="position: absolute;">
      <div class="Drawer-header">
        <h3 class="Drawer-title">Details</h3>
        <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
      </div>
      <div class="Tabs Tabs--full">
        <div class="Tabs-list" role="tablist">
          <button class="Tabs-tab active" role="tab">Info</button>
          <button class="Tabs-tab" role="tab">Activity</button>
          <button class="Tabs-tab" role="tab">Comments</button>
        </div>
      </div>
      <div class="Drawer-body">
        <p>Tab content goes here...</p>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--right">
  <div class="Drawer-header">
    <h3 class="Drawer-title">Details</h3>
    <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
  </div>
  <div class="Tabs Tabs--full">
    <div class="Tabs-list" role="tablist">
      <button class="Tabs-tab active" role="tab">Info</button>
      <button class="Tabs-tab" role="tab">Activity</button>
    </div>
  </div>
  <div class="Drawer-body">
    <!-- Content -->
  </div>
</div>
```

## Persistent Sidebar

A drawer that stays open alongside main content.

<Preview>
  <div style="display: flex; height: 300px; border: 1px solid var(--bd); border-radius: var(--radius-md); overflow: hidden;">
    <div class="Drawer Drawer--persistent Drawer--open Drawer--sm" style="position: relative;">
      <nav class="Drawer-nav">
        <a href="#" class="Drawer-navItem Drawer-navItem--active">
          <i class="ph ph-house"></i>
          <span>Home</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-chart-bar"></i>
          <span>Analytics</span>
        </a>
        <a href="#" class="Drawer-navItem">
          <i class="ph ph-envelope"></i>
          <span>Messages</span>
        </a>
      </nav>
    </div>
    <div style="flex: 1; padding: var(--space-4); background: var(--bg-s);">
      <p style="color: var(--fg-3);">Main content area</p>
    </div>
  </div>
</Preview>

```html
<div class="Layout">
  <div class="Drawer Drawer--persistent Drawer--sm">
    <nav class="Drawer-nav">...</nav>
  </div>
  <main class="Layout-main">
    <!-- Main content -->
  </main>
</div>
```

## Mini Variant

Collapsed sidebar showing only icons, expands on hover.

<Preview>
  <div style="display: flex; height: 300px; border: 1px solid var(--bd); border-radius: var(--radius-md); overflow: hidden;">
    <div class="Drawer Drawer--persistent Drawer--mini Drawer--open" style="position: relative;">
      <nav class="Drawer-nav">
        <a href="#" class="Drawer-navItem Drawer-navItem--active" title="Home">
          <i class="ph ph-house"></i>
          <span>Home</span>
        </a>
        <a href="#" class="Drawer-navItem" title="Search">
          <i class="ph ph-magnifying-glass"></i>
          <span>Search</span>
        </a>
        <a href="#" class="Drawer-navItem" title="Notifications">
          <i class="ph ph-bell"></i>
          <span>Notifications</span>
        </a>
        <a href="#" class="Drawer-navItem" title="Settings">
          <i class="ph ph-gear"></i>
          <span>Settings</span>
        </a>
      </nav>
    </div>
    <div style="flex: 1; padding: var(--space-4); background: var(--bg-s);">
      <p style="color: var(--fg-3);">Hover over the sidebar to expand</p>
    </div>
  </div>
</Preview>

```html
<div class="Drawer Drawer--persistent Drawer--mini">
  <nav class="Drawer-nav">
    <a href="#" class="Drawer-navItem" title="Home">
      <i class="ph ph-house"></i>
      <span>Home</span>
    </a>
  </nav>
</div>
```

## JavaScript

```js
// Toggle drawer
function toggleDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  const backdrop = document.querySelector('.Drawer-backdrop');
  
  drawer.classList.toggle('Drawer--open');
  backdrop?.classList.toggle('Drawer-backdrop--visible');
  
  // Prevent body scroll when open
  document.body.style.overflow = drawer.classList.contains('Drawer--open') ? 'hidden' : '';
}

// Close on backdrop click
document.querySelector('.Drawer-backdrop')?.addEventListener('click', () => {
  document.querySelectorAll('.Drawer--open').forEach(d => d.classList.remove('Drawer--open'));
  document.querySelector('.Drawer-backdrop')?.classList.remove('Drawer-backdrop--visible');
  document.body.style.overflow = '';
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.Drawer--open').forEach(d => d.classList.remove('Drawer--open'));
    document.querySelector('.Drawer-backdrop')?.classList.remove('Drawer-backdrop--visible');
    document.body.style.overflow = '';
  }
});
```

---

## Common Patterns

### Shopping Cart Drawer

<Preview title="Cart Sidebar">
<div style="position: relative; height: 350px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--r-m);">
    <div class="Drawer-backdrop Drawer-backdrop--visible"></div>
    <div class="Drawer Drawer--right Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
            <h3 class="Drawer-title">Cart (3)</h3>
            <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
        </div>
        <div class="Drawer-body">
            <div style="display: flex; gap: var(--space-3); margin-bottom: var(--space-4);">
                <div style="width: 60px; height: 60px; background: var(--bg-s); border-radius: var(--r-s);"></div>
                <div style="flex: 1;">
                    <div style="font-weight: 500;">Wireless Mouse</div>
                    <div style="font-size: 0.85rem; color: var(--fg-3);">Qty: 1</div>
                    <div style="font-weight: 600;">$49.99</div>
                </div>
            </div>
            <div style="display: flex; gap: var(--space-3); margin-bottom: var(--space-4);">
                <div style="width: 60px; height: 60px; background: var(--bg-s); border-radius: var(--r-s);"></div>
                <div style="flex: 1;">
                    <div style="font-weight: 500;">USB-C Hub</div>
                    <div style="font-size: 0.85rem; color: var(--fg-3);">Qty: 2</div>
                    <div style="font-weight: 600;">$35.00</div>
                </div>
            </div>
        </div>
        <div class="Drawer-footer" style="flex-direction: column; gap: var(--space-2);">
            <div style="display: flex; justify-content: space-between; width: 100%; font-weight: 600;">
                <span>Total</span><span>$119.99</span>
            </div>
            <button class="Button Button--primary" style="width: 100%;">Checkout</button>
        </div>
    </div>
</div>
</Preview>

### Notification Panel

<Preview title="Notifications Drawer">
<div style="position: relative; height: 300px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--r-m);">
    <div class="Drawer Drawer--right Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
            <h3 class="Drawer-title">Notifications</h3>
            <button class="Button Button--ghost Button--small">Mark all read</button>
        </div>
        <div class="Drawer-body" style="padding: 0;">
            <div style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--bd); background: oklch(60% 0.15 250 / 0.05);">
                <div style="font-weight: 500;">New comment on your PR</div>
                <div style="font-size: 0.8rem; color: var(--fg-3);">2 minutes ago</div>
            </div>
            <div style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--bd);">
                <div style="font-weight: 500;">Build succeeded</div>
                <div style="font-size: 0.8rem; color: var(--fg-3);">1 hour ago</div>
            </div>
        </div>
    </div>
</div>
</Preview>

### Mobile Navigation Drawer

<Preview title="Mobile Nav">
<div style="position: relative; height: 350px; overflow: hidden; border: 1px solid var(--bd); border-radius: var(--r-m);">
    <div class="Drawer-backdrop Drawer-backdrop--visible"></div>
    <div class="Drawer Drawer--left Drawer--open Drawer--sm" style="position: absolute;">
        <div class="Drawer-header">
            <span style="font-weight: 700; font-size: 1.1rem;">Menu</span>
            <button class="Button Button--ghost Button--icon"><i class="ph ph-x"></i></button>
        </div>
        <nav class="Drawer-nav">
            <a href="#" class="Drawer-navItem Drawer-navItem--active"><i class="ph ph-house"></i><span>Home</span></a>
            <a href="#" class="Drawer-navItem"><i class="ph ph-package"></i><span>Products</span></a>
            <a href="#" class="Drawer-navItem"><i class="ph ph-info"></i><span>About</span></a>
            <a href="#" class="Drawer-navItem"><i class="ph ph-phone"></i><span>Contact</span></a>
        </nav>
    </div>
</div>
</Preview>

---

## Customization

Override drawer styles using CSS custom properties:

```css
/* Custom drawer width */
.Drawer--custom {
  width: 480px;
}

/* Custom backdrop opacity */
.Drawer-backdrop--light {
  background: oklch(0% 0 0 / 0.25);
}

/* Custom transition speed */
.Drawer--slow {
  transition: transform var(--dur-s) var(--ease);
}

/* Drawer with border instead of shadow */
.Drawer--bordered {
  box-shadow: none;
  border-left: 1px solid var(--bd);
}

/* Custom nav item style */
.Drawer-navItem--rounded {
  border-radius: var(--r-m);
  margin: 0 var(--space-2);
}
```

### Theme Variants

```css
/* Dark drawer */
.Drawer--dark {
  background: oklch(15% 0 0);
  color: oklch(90% 0 0);
}

.Drawer--dark .Drawer-header {
  border-bottom-color: oklch(25% 0 0);
}

.Drawer--dark .Drawer-navItem:hover {
  background: oklch(20% 0 0);
}
```

---

## API Reference

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Drawer</code></td><td class="ApiTable-desc">Base drawer container</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--left</code></td><td class="ApiTable-desc">Slides in from the left edge</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--right</code></td><td class="ApiTable-desc">Slides in from the right edge (default)</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--top</code></td><td class="ApiTable-desc">Slides in from the top edge</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--bottom</code></td><td class="ApiTable-desc">Slides in from the bottom edge</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--open</code></td><td class="ApiTable-desc">Shows the drawer (applies transform)</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--xs</code></td><td class="ApiTable-desc">Extra small width (240px)</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--sm</code></td><td class="ApiTable-desc">Small width (320px)</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--lg</code></td><td class="ApiTable-desc">Large width (560px)</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--xl</code></td><td class="ApiTable-desc">Extra large width (720px)</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--full</code></td><td class="ApiTable-desc">Full width (100%)</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--persistent</code></td><td class="ApiTable-desc">In-page sidebar (no overlay)</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer--mini</code></td><td class="ApiTable-desc">Collapsed sidebar, expands on hover</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-backdrop</code></td><td class="ApiTable-desc">Overlay behind the drawer</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-backdrop--visible</code></td><td class="ApiTable-desc">Shows the backdrop</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-header</code></td><td class="ApiTable-desc">Header with title and close button</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-title</code></td><td class="ApiTable-desc">Title text in header</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-body</code></td><td class="ApiTable-desc">Scrollable content area</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-footer</code></td><td class="ApiTable-desc">Footer with actions</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-nav</code></td><td class="ApiTable-desc">Navigation container</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-navItem</code></td><td class="ApiTable-desc">Navigation link item</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-navItem--active</code></td><td class="ApiTable-desc">Active navigation item</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-navDivider</code></td><td class="ApiTable-desc">Divider between nav groups</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-section</code></td><td class="ApiTable-desc">Content section (e.g., filters)</td></tr>
<tr><td><code class="ApiTable-prop">.Drawer-sectionTitle</code></td><td class="ApiTable-desc">Section heading</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Backdrop overlay */
.Drawer-backdrop {
  position: fixed;
  inset: 0;
  background: oklch(0% 0 0 / 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--dur-n), visibility var(--dur-n);
  z-index: 998;
}
.Drawer-backdrop--visible {
  opacity: 1;
  visibility: visible;
}

/* Base drawer */
.Drawer {
  position: fixed;
  background: var(--bg);
  z-index: 999;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-xl);
  transition: transform var(--dur-s) var(--ease);
}

/* Position variants */
.Drawer--right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  transform: translateX(100%);
}
.Drawer--left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  transform: translateX(-100%);
}
.Drawer--top {
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  transform: translateY(-100%);
}
.Drawer--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  transform: translateY(100%);
}

/* Open state */
.Drawer--open {
  transform: translate(0);
}

/* Sizes */
.Drawer--xs { width: 240px; }
.Drawer--sm { width: 320px; }
.Drawer--lg { width: 560px; }
.Drawer--xl { width: 720px; }
.Drawer--full { width: 100%; }

/* Persistent (in-page sidebar) */
.Drawer--persistent {
  position: relative;
  box-shadow: none;
  border-right: 1px solid var(--bd);
  transform: none;
}

/* Mini variant */
.Drawer--mini {
  width: 64px;
  transition: width var(--dur-n);
}
.Drawer--mini:hover {
  width: 240px;
}
.Drawer--mini .Drawer-navItem span {
  opacity: 0;
  width: 0;
  overflow: hidden;
}
.Drawer--mini:hover .Drawer-navItem span {
  opacity: 1;
  width: auto;
}

/* Header */
.Drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
  border-bottom: 1px solid var(--bd);
}
.Drawer-title {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 600;
}

/* Body */
.Drawer-body {
  flex: 1;
  padding: var(--space-4);
  overflow-y: auto;
}

/* Footer */
.Drawer-footer {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4);
  border-top: 1px solid var(--bd);
}

/* Navigation */
.Drawer-nav {
  display: flex;
  flex-direction: column;
  padding: var(--space-2);
}
.Drawer-navItem {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  color: var(--fg-3);
  text-decoration: none;
  transition: background var(--dur-f), color var(--dur-f);
}
.Drawer-navItem:hover {
  background: var(--bg-s);
  color: var(--fg);
}
.Drawer-navItem--active {
  background: oklch(60% 0.15 250 / 0.1);
  color: var(--accent);
}
.Drawer-navDivider {
  height: 1px;
  background: var(--bd);
  margin: var(--space-2) 0;
}

/* Sections */
.Drawer-section {
  margin-bottom: var(--space-4);
}
.Drawer-sectionTitle {
  font-size: var(--text-sm);
  font-weight: 600;
  margin-bottom: var(--space-2);
  color: var(--fg);
}
```

## Accessibility

- Use `role="dialog"` and `aria-modal="true"` for modal drawers
- Add `aria-labelledby` pointing to the drawer title
- Trap focus within the drawer when open
- Return focus to the trigger element when closed
- Support Escape key to close the drawer
- Ensure backdrop click closes the drawer
- Use `aria-hidden="true"` on main content when drawer is open
- Provide a visible close button with `aria-label="Close"`
- For navigation drawers, use `nav` element with `aria-label`

### Keyboard Support

| Key | Action |
|-----|--------|
| Escape | Close the drawer |
| Tab | Navigate between interactive elements within the drawer |
| Shift+Tab | Navigate backwards through drawer elements |
| Enter | Activate focused button or link |

### ARIA Example

```html
<div class="Drawer Drawer--right" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
    <div class="Drawer-header">
        <h3 class="Drawer-title" id="drawer-title">Settings</h3>
        <button class="Button Button--ghost Button--icon" aria-label="Close drawer">
            <i class="ph ph-x"></i>
        </button>
    </div>
    <div class="Drawer-body">...</div>
</div>
```

---

## Best Practices

### Do

- ✓ **Include a visible close button** — Never rely solely on backdrop click or Escape
- ✓ **Trap focus within modal drawers** — Prevent tabbing to hidden content behind
- ✓ **Use backdrop for modal drawers** — Clearly indicates overlay context
- ✓ **Return focus to trigger** — When the drawer closes, focus returns to the button that opened it
- ✓ **Keep drawer content focused** — One task per drawer (filters, nav, or details)
- ✓ **Use persistent drawers for primary nav** — Sidebar navigation should not require reopening

### Don't

- ✗ **Stack multiple drawers** — One drawer at a time; close before opening another
- ✗ **Put critical content only in drawers** — Users may miss it; use inline for essential info
- ✗ **Use drawers for simple confirmations** — A dialog or toast is more appropriate
- ✗ **Forget body scroll lock** — Background should not scroll when a modal drawer is open
- ✗ **Auto-open drawers on page load** — Let users trigger drawers intentionally
- ✗ **Omit ARIA attributes** — `role="dialog"` and `aria-modal="true"` are essential for accessibility
