# Tabs

Tabs organize content into separate views, allowing users to switch between related sections without leaving the page. They help reduce clutter and make complex interfaces more manageable.

---

## Installation

Copy the tabs CSS from `styles/docs.css` or include the Standard stylesheet:

```html
<link rel="stylesheet" href="standard.min.css">
```

Then use tabs classes in your HTML:

```html
<div class="Tabs">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">Tab One</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Tab Two</button>
    </div>
    <div class="Tabs-panel active" role="tabpanel">Content here...</div>
</div>
```

---

## Usage

The base `.Tabs` class provides the container. The `.Tabs-list` holds tab buttons, and `.Tabs-panel` contains the content for each tab.

<Preview>
<div class="Tabs">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">Overview</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Features</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Pricing</button>
    </div>
    <div class="Tabs-panel active" role="tabpanel">
        <p>Overview content goes here. This is the first panel with introductory information.</p>
    </div>
</div>
</Preview>

---

## Variants

### All Variants

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-8);">
    <div>
        <div style="font-size: 0.75rem; color: var(--fg-3); margin-bottom: var(--space-2);">Default</div>
        <div class="Tabs">
            <div class="Tabs-list" role="tablist">
                <button class="Tabs-tab active" role="tab" aria-selected="true">Tab</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Tab</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Tab</button>
            </div>
        </div>
    </div>
    <div>
        <div style="font-size: 0.75rem; color: var(--fg-3); margin-bottom: var(--space-2);">Contained</div>
        <div class="Tabs Tabs--contained">
            <div class="Tabs-list" role="tablist">
                <button class="Tabs-tab active" role="tab" aria-selected="true">Tab</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Tab</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Tab</button>
            </div>
        </div>
    </div>
    <div>
        <div style="font-size: 0.75rem; color: var(--fg-3); margin-bottom: var(--space-2);">Pills</div>
        <div class="Tabs Tabs--pills">
            <div class="Tabs-list" role="tablist">
                <button class="Tabs-tab active" role="tab" aria-selected="true">Tab</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Tab</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Tab</button>
            </div>
        </div>
    </div>
</div>
</Preview>

### Default

The default tabs style features an underline indicator on the active tab. Best for primary navigation within a page.

<Preview>
<div class="Tabs">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">Overview</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Features</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Pricing</button>
    </div>
    <div class="Tabs-panel active" role="tabpanel">
        <p>Overview content goes here. This is the first panel.</p>
    </div>
</div>
</Preview>

### Contained

Contained tabs have a visible container boundary, making them ideal for code blocks, embedded content, or when tabs need visual separation from surrounding content.

<Preview>
<div class="Tabs Tabs--contained">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">HTML</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">CSS</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">JavaScript</button>
    </div>
    <div class="Tabs-panel active" role="tabpanel">
        <pre><code>&lt;button class="Button"&gt;Click me&lt;/button&gt;</code></pre>
    </div>
</div>
</Preview>

### Pills

Pills-style tabs are more compact and work well for filters, categories, or segmented controls.

<Preview>
<div class="Tabs Tabs--pills">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">All</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Active</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Completed</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Archived</button>
    </div>
</div>
</Preview>

---

## With Icons

Tabs can include icons for visual reinforcement. Icons can appear alone or alongside text.

### Icon with Text

<Preview>
<div class="Tabs">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">
            <i class="ph ph-house"></i>
            <span>Home</span>
        </button>
        <button class="Tabs-tab" role="tab" aria-selected="false">
            <i class="ph ph-gear"></i>
            <span>Settings</span>
        </button>
        <button class="Tabs-tab" role="tab" aria-selected="false">
            <i class="ph ph-user"></i>
            <span>Profile</span>
        </button>
    </div>
</div>
</Preview>

### Icon Only

For compact interfaces where icons are self-explanatory. Always include `aria-label` for accessibility.

<Preview>
<div class="Tabs Tabs--pills">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true" aria-label="List view">
            <i class="ph ph-list"></i>
        </button>
        <button class="Tabs-tab" role="tab" aria-selected="false" aria-label="Grid view">
            <i class="ph ph-squares-four"></i>
        </button>
        <button class="Tabs-tab" role="tab" aria-selected="false" aria-label="Column view">
            <i class="ph ph-columns"></i>
        </button>
    </div>
</div>
</Preview>

---

## States

### Disabled

Disabled tabs indicate a section is unavailable. Use sparingly and provide context for why.

<Preview>
<div class="Tabs">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">Active</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Available</button>
        <button class="Tabs-tab" role="tab" aria-selected="false" disabled>Premium Only</button>
    </div>
</div>
</Preview>

### With Badge

Show counts or status indicators with badges inside tabs.

<Preview>
<div class="Tabs">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">
            Inbox
            <span class="Badge Badge--primary" style="margin-left: var(--space-2);">12</span>
        </button>
        <button class="Tabs-tab" role="tab" aria-selected="false">
            Sent
        </button>
        <button class="Tabs-tab" role="tab" aria-selected="false">
            Drafts
            <span class="Badge Badge--secondary" style="margin-left: var(--space-2);">3</span>
        </button>
    </div>
</div>
</Preview>

---

## Sizes

Tabs come in three sizes to fit different contexts.

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-6);">
    <div>
        <div style="font-size: 0.75rem; color: var(--fg-3); margin-bottom: var(--space-2);">Small</div>
        <div class="Tabs Tabs--small">
            <div class="Tabs-list" role="tablist">
                <button class="Tabs-tab active" role="tab" aria-selected="true">Details</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Activity</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Comments</button>
            </div>
        </div>
    </div>
    <div>
        <div style="font-size: 0.75rem; color: var(--fg-3); margin-bottom: var(--space-2);">Default</div>
        <div class="Tabs">
            <div class="Tabs-list" role="tablist">
                <button class="Tabs-tab active" role="tab" aria-selected="true">Details</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Activity</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Comments</button>
            </div>
        </div>
    </div>
    <div>
        <div style="font-size: 0.75rem; color: var(--fg-3); margin-bottom: var(--space-2);">Large</div>
        <div class="Tabs Tabs--large">
            <div class="Tabs-list" role="tablist">
                <button class="Tabs-tab active" role="tab" aria-selected="true">Details</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Activity</button>
                <button class="Tabs-tab" role="tab" aria-selected="false">Comments</button>
            </div>
        </div>
    </div>
</div>
</Preview>

---

## Full Width

Tabs can stretch to fill their container width. Useful for mobile layouts.

<Preview>
<div class="Tabs Tabs--fullWidth">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">For You</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Following</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Trending</button>
    </div>
</div>
</Preview>

---

## JavaScript

Tabs require minimal JavaScript for interactivity:

```js
document.querySelectorAll('.Tabs').forEach(tabs => {
    const tabList = tabs.querySelector('.Tabs-list');
    const tabButtons = tabs.querySelectorAll('.Tabs-tab');
    const panels = tabs.querySelectorAll('.Tabs-panel');
    
    tabList.addEventListener('click', (e) => {
        const tab = e.target.closest('.Tabs-tab');
        if (!tab || tab.disabled) return;
        
        // Update tab states
        tabButtons.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        
        // Update panel visibility
        const index = Array.from(tabButtons).indexOf(tab);
        panels.forEach((panel, i) => {
            panel.classList.toggle('active', i === index);
        });
    });
    
    // Keyboard navigation
    tabList.addEventListener('keydown', (e) => {
        const tabs = Array.from(tabButtons).filter(t => !t.disabled);
        const current = tabs.findIndex(t => t.classList.contains('active'));
        let next;
        
        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                next = (current + 1) % tabs.length;
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                next = (current - 1 + tabs.length) % tabs.length;
                break;
            case 'Home':
                next = 0;
                break;
            case 'End':
                next = tabs.length - 1;
                break;
            default:
                return;
        }
        
        e.preventDefault();
        tabs[next].click();
        tabs[next].focus();
    });
});
```


## Common Patterns

### Settings Page

<Preview>
<div style="max-width: 600px;">
    <div class="Tabs">
        <div class="Tabs-list" role="tablist">
            <button class="Tabs-tab active" role="tab" aria-selected="true">
                <i class="ph ph-user"></i>
                <span>Account</span>
            </button>
            <button class="Tabs-tab" role="tab" aria-selected="false">
                <i class="ph ph-bell"></i>
                <span>Notifications</span>
            </button>
            <button class="Tabs-tab" role="tab" aria-selected="false">
                <i class="ph ph-lock"></i>
                <span>Privacy</span>
            </button>
            <button class="Tabs-tab" role="tab" aria-selected="false">
                <i class="ph ph-palette"></i>
                <span>Appearance</span>
            </button>
        </div>
        <div class="Tabs-panel active" role="tabpanel">
            <div style="padding: var(--space-4) 0;">
                <h3 style="margin: 0 0 var(--space-3);">Account Settings</h3>
                <p style="color: var(--fg-3); margin: 0;">Manage your account information and preferences.</p>
            </div>
        </div>
    </div>
</div>
</Preview>

### Code Viewer

<Preview>
<div class="Tabs Tabs--contained">
    <div class="Tabs-list" role="tablist">
        <button class="Tabs-tab active" role="tab" aria-selected="true">index.html</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">styles.css</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">app.js</button>
    </div>
    <div class="Tabs-panel active" role="tabpanel" style="background: var(--bg-s); padding: var(--space-4);">
        <pre style="margin: 0; font-size: 0.875rem;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;title&gt;My App&lt;/title&gt;
  &lt;/head&gt;
&lt;/html&gt;</code></pre>
    </div>
</div>
</Preview>

### Filter Bar

<Preview>
<div style="display: flex; align-items: center; gap: var(--space-4);">
    <div class="Tabs Tabs--pills">
        <div class="Tabs-list" role="tablist">
            <button class="Tabs-tab active" role="tab" aria-selected="true">All</button>
            <button class="Tabs-tab" role="tab" aria-selected="false">Open</button>
            <button class="Tabs-tab" role="tab" aria-selected="false">Closed</button>
        </div>
    </div>
    <div style="flex: 1;"></div>
    <input type="search" class="Input Input--small" placeholder="Search..." style="max-width: 200px;">
</div>
</Preview>

### Vertical Tabs

<Preview>
<div class="Tabs Tabs--vertical" style="display: flex; gap: var(--space-4);">
    <div class="Tabs-list" role="tablist" style="flex-direction: column; border-bottom: none; border-right: 1px solid var(--bd); padding-right: var(--space-4);">
        <button class="Tabs-tab active" role="tab" aria-selected="true">General</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Security</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Billing</button>
        <button class="Tabs-tab" role="tab" aria-selected="false">Team</button>
    </div>
    <div class="Tabs-panel active" role="tabpanel" style="flex: 1;">
        <h4 style="margin: 0 0 var(--space-2);">General Settings</h4>
        <p style="margin: 0; color: var(--fg-3);">Configure your general preferences and options.</p>
    </div>
</div>
</Preview>

---

## Customization

Override tab styles using CSS custom properties:

```css
/* Custom accent color */
.Tabs-tab.active {
  --tab-active-color: oklch(55% 0.2 150);
  color: var(--tab-active-color);
  border-color: var(--tab-active-color);
}

/* Custom pill styling */
.Tabs--pills .Tabs-tab.active {
  --tab-pill-bg: oklch(55% 0.2 150);
  background-color: var(--tab-pill-bg);
  color: white;
}

/* Custom spacing */
.Tabs--compact .Tabs-tab {
  padding: var(--space-1) var(--space-2);
  font-size: 0.75rem;
}

/* Custom underline thickness */
.Tabs-tab.active {
  border-bottom-width: 3px;
}
```

### Creating Custom Variants

```css
/* Bordered variant */
.Tabs--bordered .Tabs-list {
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  padding: var(--space-1);
  background: var(--bg-s);
}

.Tabs--bordered .Tabs-tab.active {
  background: var(--bg);
  border-radius: var(--r-s);
  box-shadow: var(--sh-s);
}

/* Minimal variant */
.Tabs--minimal .Tabs-list {
  border-bottom: none;
  gap: var(--space-6);
}

.Tabs--minimal .Tabs-tab {
  padding: var(--space-2) 0;
  border-bottom: none;
  opacity: 0.6;
}

.Tabs--minimal .Tabs-tab.active {
  opacity: 1;
  font-weight: 600;
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
<td><code class="ApiTable-prop">.Tabs</code></td>
<td class="ApiTable-desc">Container for the tabs component (required)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tabs-list</code></td>
<td class="ApiTable-desc">Container for tab buttons</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tabs-tab</code></td>
<td class="ApiTable-desc">Individual tab button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tabs-panel</code></td>
<td class="ApiTable-desc">Content panel for each tab</td>
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
<td><code class="ApiTable-prop">.Tabs--contained</code></td>
<td class="ApiTable-desc">Tabs with visible container boundary</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tabs--pills</code></td>
<td class="ApiTable-desc">Pill-style tab buttons</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tabs--vertical</code></td>
<td class="ApiTable-desc">Vertical tab layout</td>
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
<td><code class="ApiTable-prop">.Tabs--small</code></td>
<td class="ApiTable-desc">Compact tabs for tight spaces</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Tabs--large</code></td>
<td class="ApiTable-desc">Larger tabs for primary navigation</td>
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
<td><code class="ApiTable-prop">.Tabs--fullWidth</code></td>
<td class="ApiTable-desc">Tabs stretch to fill container width</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.active</code></td>
<td class="ApiTable-desc">Active state for tab and panel</td>
</tr>
</tbody>
</table>

### ARIA Attributes

<table class="ApiTable">
<thead>
<tr>
<th>Attribute</th>
<th>Element</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">role="tablist"</code></td>
<td class="ApiTable-desc">.Tabs-list</td>
<td class="ApiTable-desc">Identifies the tab list container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">role="tab"</code></td>
<td class="ApiTable-desc">.Tabs-tab</td>
<td class="ApiTable-desc">Identifies each tab button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">role="tabpanel"</code></td>
<td class="ApiTable-desc">.Tabs-panel</td>
<td class="ApiTable-desc">Identifies the content panel</td>
</tr>
<tr>
<td><code class="ApiTable-prop">aria-selected</code></td>
<td class="ApiTable-desc">.Tabs-tab</td>
<td class="ApiTable-desc">"true" for active tab, "false" for others</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base tabs */
.Tabs {
  display: flex;
  flex-direction: column;
}

/* Tab list */
.Tabs-list {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--bd);
}

/* Individual tab */
.Tabs-tab {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--fg-3);
  font-size: var(--fs-sm);
  font-weight: 500;
  cursor: pointer;
  transition: color var(--dur-f), border-color var(--dur-f);
  white-space: nowrap;
}

.Tabs-tab:hover {
  color: var(--fg);
}

.Tabs-tab.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.Tabs-tab:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Tab panel */
.Tabs-panel {
  display: none;
  padding: var(--space-4) 0;
}

.Tabs-panel.active {
  display: block;
}

/* Contained variant */
.Tabs--contained {
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  overflow: hidden;
}
.Tabs--contained .Tabs-list {
  background: var(--bg-s);
}
.Tabs--contained .Tabs-tab.active {
  background: var(--bg);
  border-bottom-color: var(--bg);
}
.Tabs--contained .Tabs-panel {
  padding: var(--space-4);
}

/* Pills variant */
.Tabs--pills .Tabs-list {
  border-bottom: none;
  gap: var(--space-1);
}
.Tabs--pills .Tabs-tab {
  border-bottom: none;
  border-radius: var(--r-m);
  padding: var(--space-1) var(--space-3);
}
.Tabs--pills .Tabs-tab.active {
  background: var(--accent);
  color: white;
}

/* Size variants */
.Tabs--small .Tabs-tab {
  padding: var(--space-1) var(--space-3);
  font-size: var(--fs-xs);
}
.Tabs--large .Tabs-tab {
  padding: var(--space-3) var(--space-5);
  font-size: var(--fs-base);
}

/* Full width */
.Tabs--fullWidth .Tabs-list {
  width: 100%;
}
.Tabs--fullWidth .Tabs-tab {
  flex: 1;
  justify-content: center;
}

/* Vertical */
.Tabs--vertical {
  flex-direction: row;
}
.Tabs--vertical .Tabs-list {
  flex-direction: column;
  border-bottom: none;
  border-right: 1px solid var(--bd);
}
.Tabs--vertical .Tabs-tab {
  border-bottom: none;
  border-right: 2px solid transparent;
}
.Tabs--vertical .Tabs-tab.active {
  border-right-color: var(--accent);
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Moves focus into/out of the tab list |
| Arrow Left/Up | Moves to the previous tab |
| Arrow Right/Down | Moves to the next tab |
| Home | Moves to the first tab |
| End | Moves to the last tab |
| Enter/Space | Activates the focused tab |

### Screen Readers

```html
<!-- Basic accessible tabs -->
<div class="Tabs">
    <div class="Tabs-list" role="tablist" aria-label="Account settings">
        <button class="Tabs-tab active" role="tab" 
                id="tab-1" aria-selected="true" 
                aria-controls="panel-1">
            Profile
        </button>
        <button class="Tabs-tab" role="tab" 
                id="tab-2" aria-selected="false" 
                aria-controls="panel-2" tabindex="-1">
            Security
        </button>
    </div>
    <div class="Tabs-panel active" role="tabpanel" 
         id="panel-1" aria-labelledby="tab-1">
        Profile content...
    </div>
    <div class="Tabs-panel" role="tabpanel" 
         id="panel-2" aria-labelledby="tab-2" hidden>
        Security content...
    </div>
</div>

<!-- Icon-only tabs need aria-label -->
<button class="Tabs-tab" role="tab" aria-label="Grid view">
    <i class="ph ph-squares-four"></i>
</button>

<!-- Tabs with counts -->
<button class="Tabs-tab" role="tab">
    Notifications
    <span class="Badge" aria-label="5 unread">5</span>
</button>
```

### Focus Management

```html
<!-- Only the active tab should be in the tab order -->
<div class="Tabs-list" role="tablist">
    <button class="Tabs-tab active" role="tab" 
            aria-selected="true" tabindex="0">Active</button>
    <button class="Tabs-tab" role="tab" 
            aria-selected="false" tabindex="-1">Inactive</button>
    <button class="Tabs-tab" role="tab" 
            aria-selected="false" tabindex="-1">Inactive</button>
</div>
```

---

## Best Practices

### Do

- ✓ **Use clear, concise labels** — "Settings" not "Configuration Options"
- ✓ **Order tabs logically** — Most important or commonly used first
- ✓ **Limit tab count** — 2-7 tabs; more indicates need for different navigation
- ✓ **Keep labels short** — One or two words per tab
- ✓ **Persist tab state** — Remember selection on page refresh when appropriate
- ✓ **Provide feedback** — Clear visual indicator for active tab

### Don't

- ✗ **Nest tabs within tabs** — Creates confusing navigation hierarchy
- ✗ **Use tabs for sequential steps** — Use a stepper or wizard instead
- ✗ **Hide critical content** — Essential info should be visible by default
- ✗ **Mix tab styles** — Be consistent within a page or section
- ✗ **Use tabs for unrelated content** — Tabs should group related views
- ✗ **Forget mobile** — Consider if tabs make sense on smaller screens
