---
title: Timeline
---

# Timeline

Timelines display a list of events in chronological order, commonly used for activity feeds, order tracking, or history views.

## Basic Timeline

A simple vertical timeline with events.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Order placed</div>
        <div class="Timeline-time">Today, 2:30 PM</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Payment confirmed</div>
        <div class="Timeline-time">Today, 2:32 PM</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Order shipped</div>
        <div class="Timeline-time">Today, 4:15 PM</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline">
  <div class="Timeline-item">
    <div class="Timeline-marker"></div>
    <div class="Timeline-content">
      <div class="Timeline-title">Order placed</div>
      <div class="Timeline-time">Today, 2:30 PM</div>
    </div>
  </div>
  <!-- More items... -->
</div>
```

## With Descriptions

Add descriptions for more context.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Application submitted</div>
        <div class="Timeline-description">Your application has been received and is being reviewed by our team.</div>
        <div class="Timeline-time">Jan 15, 2026</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Phone screening scheduled</div>
        <div class="Timeline-description">We'd like to schedule a 30-minute call to discuss your experience.</div>
        <div class="Timeline-time">Jan 18, 2026</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Technical interview</div>
        <div class="Timeline-description">A 1-hour technical discussion with the engineering team.</div>
        <div class="Timeline-time">Jan 22, 2026</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline-item">
  <div class="Timeline-marker"></div>
  <div class="Timeline-content">
    <div class="Timeline-title">Application submitted</div>
    <div class="Timeline-description">Your application has been received...</div>
    <div class="Timeline-time">Jan 15, 2026</div>
  </div>
</div>
```

## With Icons

Use icons instead of simple markers.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon">
        <i class="ph ph-package"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-title">Package received at facility</div>
        <div class="Timeline-time">Feb 1, 9:00 AM</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon">
        <i class="ph ph-truck"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-title">Out for delivery</div>
        <div class="Timeline-time">Feb 2, 8:30 AM</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon Timeline-marker--success">
        <i class="ph ph-check"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-title">Delivered</div>
        <div class="Timeline-description">Signed by: J. Smith</div>
        <div class="Timeline-time">Feb 2, 2:15 PM</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline-marker Timeline-marker--icon">
  <i class="ph ph-package"></i>
</div>

<div class="Timeline-marker Timeline-marker--icon Timeline-marker--success">
  <i class="ph ph-check"></i>
</div>
```

## Status Variants

Different colors indicate status.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--success"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Build passed</div>
        <div class="Timeline-time">2 minutes ago</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--warning"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Tests have warnings</div>
        <div class="Timeline-time">5 minutes ago</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--error"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Deployment failed</div>
        <div class="Timeline-time">8 minutes ago</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--info"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Pipeline started</div>
        <div class="Timeline-time">10 minutes ago</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline-marker Timeline-marker--success"></div>
<div class="Timeline-marker Timeline-marker--warning"></div>
<div class="Timeline-marker Timeline-marker--error"></div>
<div class="Timeline-marker Timeline-marker--info"></div>
```

## Alternating Layout

Events alternate between left and right.

<Preview>
  <div class="Timeline Timeline--alternating">
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Company founded</div>
        <div class="Timeline-description">Started in a small garage with big dreams.</div>
        <div class="Timeline-time">2015</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">First product launch</div>
        <div class="Timeline-description">Released our flagship product to market.</div>
        <div class="Timeline-time">2017</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Series A funding</div>
        <div class="Timeline-description">Raised $10M to accelerate growth.</div>
        <div class="Timeline-time">2019</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Global expansion</div>
        <div class="Timeline-description">Opened offices in 5 new countries.</div>
        <div class="Timeline-time">2022</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline Timeline--alternating">
  <div class="Timeline-item">...</div>
  <div class="Timeline-item">...</div>
</div>
```

## Compact Timeline

A denser layout for activity feeds.

<Preview>
  <div class="Timeline Timeline--compact">
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <span class="Timeline-actor">Sarah</span> commented on <span class="Timeline-link">Issue #42</span>
        <span class="Timeline-time">5m ago</span>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <span class="Timeline-actor">Mike</span> merged <span class="Timeline-link">PR #128</span>
        <span class="Timeline-time">12m ago</span>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <span class="Timeline-actor">Alex</span> closed <span class="Timeline-link">Issue #39</span>
        <span class="Timeline-time">1h ago</span>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <span class="Timeline-actor">Jordan</span> opened <span class="Timeline-link">Issue #43</span>
        <span class="Timeline-time">2h ago</span>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline Timeline--compact">
  <div class="Timeline-item">
    <div class="Timeline-marker"></div>
    <div class="Timeline-content">
      <span class="Timeline-actor">Sarah</span> commented on 
      <span class="Timeline-link">Issue #42</span>
      <span class="Timeline-time">5m ago</span>
    </div>
  </div>
</div>
```

## Horizontal Timeline

Display events horizontally (useful for progress steps).

<Preview>
  <div class="Timeline Timeline--horizontal">
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--success"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Ordered</div>
        <div class="Timeline-time">Jan 28</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--success"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Shipped</div>
        <div class="Timeline-time">Jan 30</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--active"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">In Transit</div>
        <div class="Timeline-time">Feb 1</div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker"></div>
      <div class="Timeline-content">
        <div class="Timeline-title">Delivered</div>
        <div class="Timeline-time">Est. Feb 3</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline Timeline--horizontal">
  <div class="Timeline-item">
    <div class="Timeline-marker Timeline-marker--success"></div>
    <div class="Timeline-content">
      <div class="Timeline-title">Ordered</div>
      <div class="Timeline-time">Jan 28</div>
    </div>
  </div>
  <!-- More items... -->
</div>
```

## With Actions

Include actions within timeline items.

<Preview>
  <div class="Timeline">
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon">
        <i class="ph ph-chat-circle"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-header">
          <div class="Timeline-title">New comment from Alex</div>
          <div class="Timeline-time">Just now</div>
        </div>
        <div class="Timeline-body">
          <p>Looks great! Just a few minor suggestions on the styling.</p>
        </div>
        <div class="Timeline-actions">
          <button class="Button Button--ghost Button--sm">Reply</button>
          <button class="Button Button--ghost Button--sm">View</button>
        </div>
      </div>
    </div>
    <div class="Timeline-item">
      <div class="Timeline-marker Timeline-marker--icon">
        <i class="ph ph-git-pull-request"></i>
      </div>
      <div class="Timeline-content">
        <div class="Timeline-header">
          <div class="Timeline-title">Pull request opened</div>
          <div class="Timeline-time">2 hours ago</div>
        </div>
        <div class="Timeline-body">
          <p><strong>#142</strong> — Add new authentication flow</p>
        </div>
        <div class="Timeline-actions">
          <button class="Button Button--primary Button--sm">Review</button>
          <button class="Button Button--ghost Button--sm">View Changes</button>
        </div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Timeline-content">
  <div class="Timeline-header">
    <div class="Timeline-title">New comment from Alex</div>
    <div class="Timeline-time">Just now</div>
  </div>
  <div class="Timeline-body">
    <p>Looks great! Just a few minor suggestions...</p>
  </div>
  <div class="Timeline-actions">
    <button class="Button Button--ghost Button--sm">Reply</button>
    <button class="Button Button--ghost Button--sm">View</button>
  </div>
</div>
```

## Common Patterns

### Order Tracking

<Preview title="Order Tracking">
    <div class="Timeline">
        <div class="Timeline-item">
            <div class="Timeline-marker Timeline-marker--icon Timeline-marker--success"><i class="ph ph-check"></i></div>
            <div class="Timeline-content">
                <div class="Timeline-title">Order placed</div>
                <div class="Timeline-time">Jan 28, 2:30 PM</div>
            </div>
        </div>
        <div class="Timeline-item">
            <div class="Timeline-marker Timeline-marker--icon Timeline-marker--success"><i class="ph ph-check"></i></div>
            <div class="Timeline-content">
                <div class="Timeline-title">Payment confirmed</div>
                <div class="Timeline-time">Jan 28, 2:32 PM</div>
            </div>
        </div>
        <div class="Timeline-item">
            <div class="Timeline-marker Timeline-marker--active"></div>
            <div class="Timeline-content">
                <div class="Timeline-title">In transit</div>
                <div class="Timeline-description">Package is on its way — expected Feb 2</div>
                <div class="Timeline-time">Jan 30, 8:00 AM</div>
            </div>
        </div>
        <div class="Timeline-item">
            <div class="Timeline-marker"></div>
            <div class="Timeline-content">
                <div class="Timeline-title" style="color: var(--fg-3);">Delivered</div>
            </div>
        </div>
    </div>
</Preview>

### Activity Feed

<Preview title="Activity Feed">
    <div class="Timeline Timeline--compact">
        <div class="Timeline-item">
            <div class="Timeline-marker" style="background: var(--accent); border-color: var(--accent);"></div>
            <div class="Timeline-content">
                <span class="Timeline-actor">Alice</span> pushed 3 commits to <span class="Timeline-link">main</span>
                <span class="Timeline-time">2m ago</span>
            </div>
        </div>
        <div class="Timeline-item">
            <div class="Timeline-marker" style="background: oklch(55% 0.15 150); border-color: oklch(55% 0.15 150);"></div>
            <div class="Timeline-content">
                <span class="Timeline-actor">Bob</span> merged <span class="Timeline-link">PR #42</span>
                <span class="Timeline-time">15m ago</span>
            </div>
        </div>
        <div class="Timeline-item">
            <div class="Timeline-marker" style="background: oklch(55% 0.2 25); border-color: oklch(55% 0.2 25);"></div>
            <div class="Timeline-content">
                <span class="Timeline-actor">CI</span> failed on <span class="Timeline-link">feature/auth</span>
                <span class="Timeline-time">30m ago</span>
            </div>
        </div>
    </div>
</Preview>

### Project Milestones

<Preview title="Company Milestones">
    <div class="Timeline Timeline--alternating">
        <div class="Timeline-item">
            <div class="Timeline-marker Timeline-marker--icon"><i class="ph ph-rocket"></i></div>
            <div class="Timeline-content">
                <div class="Timeline-title">Founded</div>
                <div class="Timeline-description">Started with a vision and a small team.</div>
                <div class="Timeline-time">2020</div>
            </div>
        </div>
        <div class="Timeline-item">
            <div class="Timeline-marker Timeline-marker--icon Timeline-marker--success"><i class="ph ph-chart-line-up"></i></div>
            <div class="Timeline-content">
                <div class="Timeline-title">Series A</div>
                <div class="Timeline-description">Raised $12M to scale operations.</div>
                <div class="Timeline-time">2022</div>
            </div>
        </div>
        <div class="Timeline-item">
            <div class="Timeline-marker Timeline-marker--icon Timeline-marker--info"><i class="ph ph-globe"></i></div>
            <div class="Timeline-content">
                <div class="Timeline-title">Global Launch</div>
                <div class="Timeline-description">Expanded to 15 countries.</div>
                <div class="Timeline-time">2024</div>
            </div>
        </div>
    </div>
</Preview>

---

## Customization

Override timeline styles using CSS custom properties:

```css
/* Custom line color */
.Timeline::before {
  background: var(--accent);
  opacity: 0.3;
}

/* Larger markers */
.Timeline--large .Timeline-marker {
  width: 16px;
  height: 16px;
}

/* Custom status colors */
.Timeline-marker--purple {
  background: oklch(55% 0.2 300);
  border-color: oklch(55% 0.2 300);
}

/* Card-style timeline items */
.Timeline--cards .Timeline-content {
  background: var(--bg-s);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--r-m);
  border: 1px solid var(--bd);
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
<td><code class="ApiTable-prop">.Timeline</code></td>
<td class="ApiTable-desc">Base timeline container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-item</code></td>
<td class="ApiTable-desc">Individual timeline entry</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-marker</code></td>
<td class="ApiTable-desc">Dot/icon marker on the timeline</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-content</code></td>
<td class="ApiTable-desc">Content container for an item</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-title</code></td>
<td class="ApiTable-desc">Event title</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-description</code></td>
<td class="ApiTable-desc">Event description</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-time</code></td>
<td class="ApiTable-desc">Timestamp</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-header</code></td>
<td class="ApiTable-desc">Header with title and time</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-body</code></td>
<td class="ApiTable-desc">Extended content area</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-actions</code></td>
<td class="ApiTable-desc">Action buttons for an item</td>
</tr>
</tbody>
</table>

### Variant Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Timeline--compact</code></td>
<td class="ApiTable-desc">Dense layout for activity feeds</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline--horizontal</code></td>
<td class="ApiTable-desc">Horizontal layout variant</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline--alternating</code></td>
<td class="ApiTable-desc">Alternating left/right layout</td>
</tr>
</tbody>
</table>

### Marker Modifiers

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Timeline-marker--icon</code></td>
<td class="ApiTable-desc">Marker with icon inside</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-marker--success</code></td>
<td class="ApiTable-desc">Green success marker</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-marker--warning</code></td>
<td class="ApiTable-desc">Yellow warning marker</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-marker--error</code></td>
<td class="ApiTable-desc">Red error marker</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-marker--info</code></td>
<td class="ApiTable-desc">Blue info marker</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-marker--active</code></td>
<td class="ApiTable-desc">Active/current marker with glow</td>
</tr>
</tbody>
</table>

### Compact-specific Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Timeline-actor</code></td>
<td class="ApiTable-desc">Person/entity name (compact variant)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Timeline-link</code></td>
<td class="ApiTable-desc">Linked reference (compact variant)</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base timeline */
.Timeline {
  position: relative;
  padding-left: var(--space-6);
}

/* Vertical line */
.Timeline::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--bd);
}

/* Timeline item */
.Timeline-item {
  position: relative;
  padding-bottom: var(--space-6);
}

.Timeline-item:last-child {
  padding-bottom: 0;
}

/* Marker dot */
.Timeline-marker {
  position: absolute;
  left: calc(-1 * var(--space-6) - 1px);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--bd-s);
}

/* Icon markers */
.Timeline-marker--icon {
  width: 28px;
  height: 28px;
  left: calc(-1 * var(--space-6) - 9px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-s);
  border: 2px solid var(--bd);
  font-size: var(--fs-base);
  color: var(--fg-3);
}

/* Status variants */
.Timeline-marker--success {
  background: oklch(55% 0.15 150);
  border-color: oklch(55% 0.15 150);
}
.Timeline-marker--warning {
  background: oklch(70% 0.15 80);
  border-color: oklch(70% 0.15 80);
}
.Timeline-marker--error {
  background: oklch(55% 0.2 25);
  border-color: oklch(55% 0.2 25);
}
.Timeline-marker--info {
  background: var(--accent);
  border-color: var(--accent);
}
.Timeline-marker--active {
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 0 4px oklch(60% 0.15 250 / 0.2);
}

/* Content */
.Timeline-content {
  padding-top: 0;
}

.Timeline-title {
  font-weight: 500;
  color: var(--fg);
}

.Timeline-description {
  margin-top: var(--space-1);
  color: var(--fg-3);
  font-size: var(--fs-sm);
}

.Timeline-time {
  margin-top: var(--space-1);
  font-size: var(--fs-xs);
  color: var(--fg-3);
}

/* Compact variant */
.Timeline--compact .Timeline-item {
  padding-bottom: var(--space-3);
}
.Timeline--compact .Timeline-content {
  font-size: var(--fs-sm);
}
.Timeline--compact .Timeline-time {
  display: inline;
  margin-left: var(--space-2);
}

/* Horizontal variant */
.Timeline--horizontal {
  display: flex;
  padding-left: 0;
}
.Timeline--horizontal::before {
  top: 5px;
  left: 0;
  right: 0;
  bottom: auto;
  height: 2px;
  width: auto;
}
.Timeline--horizontal .Timeline-item {
  flex: 1;
  padding-bottom: 0;
  padding-top: var(--space-6);
  text-align: center;
}
.Timeline--horizontal .Timeline-marker {
  left: 50%;
  top: calc(-1 * var(--space-6) + 2px);
  transform: translateX(-50%);
}
```

---

## Accessibility

- Use semantic list markup (`<ol>` or `<ul>`) for timeline structure
- Include `role="list"` and `role="listitem"` when using divs
- Ensure timestamps are machine-readable with `<time datetime="...">`
- Provide sufficient color contrast for status indicators
- Don't rely solely on color—use icons or text for status meaning
- For interactive timelines, ensure focusable elements are keyboard-accessible
- Use `aria-label` to describe timeline purpose (e.g., "Order history")
- Announce new items with `aria-live` for dynamically updating timelines

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus between interactive timeline items |
| Enter / Space | Activate action buttons within items |

---

## Best Practices

### Do

- ✓ **Order chronologically** — Most recent first or last, be consistent
- ✓ **Use status colors meaningfully** — Green for complete, red for errors
- ✓ **Include timestamps** — Always provide temporal context
- ✓ **Use icons for clarity** — Reinforce status with visual markers
- ✓ **Keep entries scannable** — Short titles, optional descriptions
- ✓ **Use compact for feeds** — Dense layout for high-frequency updates

### Don't

- ✗ **Mix chronological orders** — Pick newest-first or oldest-first
- ✗ **Rely only on color** — Colorblind users need icons or text
- ✗ **Overload with content** — Keep timeline items brief
- ✗ **Skip the connecting line** — It provides visual continuity
- ✗ **Use horizontal for many items** — More than 5 items should be vertical
- ✗ **Forget loading states** — Show skeleton items for async data
