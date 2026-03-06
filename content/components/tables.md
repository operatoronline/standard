# Tables

Tables display structured data in rows and columns, making it easy to scan, compare, and analyze information. They're essential for dashboards, admin panels, and data-heavy applications.

---

## Installation

Copy the table CSS from `styles/docs.css` or include the Standard stylesheet:

```html
<link rel="stylesheet" href="standard.min.css">
```

Then use table classes in your HTML:

```html
<table class="Table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project Alpha</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
```

---

## Usage

The base `.Table` class provides clean table styling with proper spacing and borders. Add modifier classes to enable features like striping, hover states, and responsive behavior.

<Preview>
<table class="Table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Chen</td>
      <td>alice@example.com</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>Bob Smith</td>
      <td>bob@example.com</td>
      <td>Editor</td>
    </tr>
    <tr>
      <td>Carol Davis</td>
      <td>carol@example.com</td>
      <td>Viewer</td>
    </tr>
  </tbody>
</table>
</Preview>

---

## Examples

### Basic Table

A simple table with header row and body content. The base `.Table` class handles typography, spacing, and subtle borders.

<Preview>
<table class="Table">
  <thead>
    <tr>
      <th>Product</th>
      <th>Category</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wireless Headphones</td>
      <td>Electronics</td>
      <td>$149.00</td>
      <td>234</td>
    </tr>
    <tr>
      <td>Ergonomic Keyboard</td>
      <td>Electronics</td>
      <td>$89.00</td>
      <td>156</td>
    </tr>
    <tr>
      <td>Standing Desk Mat</td>
      <td>Furniture</td>
      <td>$45.00</td>
      <td>89</td>
    </tr>
  </tbody>
</table>
</Preview>

### Striped Rows

Alternating row colors improve readability for large datasets. Add `.Table--striped` for zebra striping.

<Preview>
<table class="Table Table--striped">
  <thead>
    <tr>
      <th>Date</th>
      <th>Description</th>
      <th>Amount</th>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Feb 1, 2026</td>
      <td>Opening Balance</td>
      <td>—</td>
      <td>$5,000.00</td>
    </tr>
    <tr>
      <td>Feb 2, 2026</td>
      <td>Wire Transfer</td>
      <td>+$2,500.00</td>
      <td>$7,500.00</td>
    </tr>
    <tr>
      <td>Feb 3, 2026</td>
      <td>Software License</td>
      <td>-$299.00</td>
      <td>$7,201.00</td>
    </tr>
    <tr>
      <td>Feb 3, 2026</td>
      <td>Office Supplies</td>
      <td>-$85.50</td>
      <td>$7,115.50</td>
    </tr>
    <tr>
      <td>Feb 4, 2026</td>
      <td>Client Payment</td>
      <td>+$1,200.00</td>
      <td>$8,315.50</td>
    </tr>
  </tbody>
</table>
</Preview>

### Hoverable Rows

Highlight rows on hover for better focus. Add `.Table--hoverable` to enable hover states.

<Preview>
<table class="Table Table--hoverable">
  <thead>
    <tr>
      <th>Employee</th>
      <th>Department</th>
      <th>Location</th>
      <th>Start Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Emma Wilson</td>
      <td>Engineering</td>
      <td>San Francisco</td>
      <td>Jan 15, 2024</td>
    </tr>
    <tr>
      <td>James Lee</td>
      <td>Design</td>
      <td>New York</td>
      <td>Mar 8, 2024</td>
    </tr>
    <tr>
      <td>Sofia Martinez</td>
      <td>Marketing</td>
      <td>Austin</td>
      <td>Jul 22, 2024</td>
    </tr>
  </tbody>
</table>
</Preview>

### Bordered Table

Full borders around all cells. Add `.Table--bordered` for a grid appearance.

<Preview>
<table class="Table Table--bordered">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Free</th>
      <th>Pro</th>
      <th>Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Projects</td>
      <td>3</td>
      <td>Unlimited</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td>Team Members</td>
      <td>1</td>
      <td>10</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>1 GB</td>
      <td>100 GB</td>
      <td>1 TB</td>
    </tr>
    <tr>
      <td>Support</td>
      <td>Community</td>
      <td>Email</td>
      <td>24/7 Phone</td>
    </tr>
  </tbody>
</table>
</Preview>

### Responsive / Scrollable Table

Wrap tables in `.Table-wrapper` for horizontal scrolling on small screens.

<Preview>
<div class="Table-wrapper">
  <table class="Table">
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Customer</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Total</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#ORD-001</td>
        <td>Acme Corp</td>
        <td>Widget Pro</td>
        <td>50</td>
        <td>$25.00</td>
        <td>$1,250.00</td>
        <td><span class="Badge Badge--success">Shipped</span></td>
        <td>Feb 1, 2026</td>
      </tr>
      <tr>
        <td>#ORD-002</td>
        <td>Tech Solutions</td>
        <td>Gadget Plus</td>
        <td>25</td>
        <td>$75.00</td>
        <td>$1,875.00</td>
        <td><span class="Badge Badge--warning">Processing</span></td>
        <td>Feb 2, 2026</td>
      </tr>
      <tr>
        <td>#ORD-003</td>
        <td>Global Industries</td>
        <td>Device Max</td>
        <td>100</td>
        <td>$50.00</td>
        <td>$5,000.00</td>
        <td><span class="Badge Badge--info">Pending</span></td>
        <td>Feb 3, 2026</td>
      </tr>
    </tbody>
  </table>
</div>
</Preview>

### Sortable Headers

Add `.Table--sortable` and use `.Table-sort` buttons in headers. JavaScript handles the sorting logic.

<Preview>
<table class="Table Table--sortable Table--hoverable">
  <thead>
    <tr>
      <th>
        <button class="Table-sort Table-sort--active" aria-sort="ascending">
          Name
          <i class="ph ph-caret-up Table-sortIcon"></i>
        </button>
      </th>
      <th>
        <button class="Table-sort">
          Size
          <i class="ph ph-caret-up-down Table-sortIcon"></i>
        </button>
      </th>
      <th>
        <button class="Table-sort">
          Modified
          <i class="ph ph-caret-up-down Table-sortIcon"></i>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i class="ph ph-folder Table-fileIcon"></i> Documents</td>
      <td>—</td>
      <td>Feb 4, 2026</td>
    </tr>
    <tr>
      <td><i class="ph ph-folder Table-fileIcon"></i> Images</td>
      <td>—</td>
      <td>Feb 3, 2026</td>
    </tr>
    <tr>
      <td><i class="ph ph-file-text Table-fileIcon"></i> notes.md</td>
      <td>4.2 KB</td>
      <td>Feb 2, 2026</td>
    </tr>
    <tr>
      <td><i class="ph ph-file-text Table-fileIcon"></i> readme.txt</td>
      <td>1.8 KB</td>
      <td>Feb 1, 2026</td>
    </tr>
  </tbody>
</table>
</Preview>

### Selectable Rows

Add checkboxes for row selection. Use `.Table--selectable` for proper alignment.

<Preview>
<table class="Table Table--selectable Table--hoverable">
  <thead>
    <tr>
      <th class="Table-checkbox">
        <input type="checkbox" class="Checkbox" aria-label="Select all rows">
      </th>
      <th>Name</th>
      <th>Type</th>
      <th>Size</th>
    </tr>
  </thead>
  <tbody>
    <tr class="Table-row--selected">
      <td class="Table-checkbox">
        <input type="checkbox" class="Checkbox" checked aria-label="Select row">
      </td>
      <td>project-v2.zip</td>
      <td>Archive</td>
      <td>45.2 MB</td>
    </tr>
    <tr>
      <td class="Table-checkbox">
        <input type="checkbox" class="Checkbox" aria-label="Select row">
      </td>
      <td>design-specs.pdf</td>
      <td>Document</td>
      <td>2.8 MB</td>
    </tr>
    <tr class="Table-row--selected">
      <td class="Table-checkbox">
        <input type="checkbox" class="Checkbox" checked aria-label="Select row">
      </td>
      <td>logo-final.svg</td>
      <td>Image</td>
      <td>128 KB</td>
    </tr>
    <tr>
      <td class="Table-checkbox">
        <input type="checkbox" class="Checkbox" aria-label="Select row">
      </td>
      <td>meeting-notes.docx</td>
      <td>Document</td>
      <td>340 KB</td>
    </tr>
  </tbody>
</table>
</Preview>

### Expandable Rows

Rows that expand to show additional details. Use `.Table-expandBtn` to toggle nested content.

<Preview>
<table class="Table Table--expandable Table--hoverable">
  <thead>
    <tr>
      <th class="Table-expandCol"></th>
      <th>Order</th>
      <th>Customer</th>
      <th>Total</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr class="Table-row--expandable">
      <td class="Table-expandCol">
        <button class="Table-expandBtn" aria-expanded="false" aria-label="Expand row">
          <i class="ph ph-caret-right"></i>
        </button>
      </td>
      <td>#ORD-1234</td>
      <td>John Doe</td>
      <td>$299.00</td>
      <td><span class="Badge Badge--success">Complete</span></td>
    </tr>
    <tr class="Table-row--expanded">
      <td class="Table-expandCol">
        <button class="Table-expandBtn Table-expandBtn--open" aria-expanded="true" aria-label="Collapse row">
          <i class="ph ph-caret-down"></i>
        </button>
      </td>
      <td>#ORD-1235</td>
      <td>Jane Smith</td>
      <td>$549.00</td>
      <td><span class="Badge Badge--warning">Processing</span></td>
    </tr>
    <tr class="Table-expandContent">
      <td colspan="5">
        <div class="Table-expandPanel">
          <div class="Table-expandDetail">
            <strong>Shipping Address:</strong> 123 Main St, New York, NY 10001
          </div>
          <div class="Table-expandDetail">
            <strong>Items:</strong> Widget Pro (2), Gadget Plus (1)
          </div>
          <div class="Table-expandDetail">
            <strong>Notes:</strong> Please leave at front door
          </div>
        </div>
      </td>
    </tr>
    <tr class="Table-row--expandable">
      <td class="Table-expandCol">
        <button class="Table-expandBtn" aria-expanded="false" aria-label="Expand row">
          <i class="ph ph-caret-right"></i>
        </button>
      </td>
      <td>#ORD-1236</td>
      <td>Bob Johnson</td>
      <td>$125.00</td>
      <td><span class="Badge Badge--info">Pending</span></td>
    </tr>
  </tbody>
</table>
</Preview>

### Sticky Header

Keep headers visible while scrolling long tables. Add `.Table--stickyHeader` and set a max-height on the wrapper.

<Preview>
<div class="Table-wrapper Table-wrapper--scrollable" style="max-height: 240px;">
  <table class="Table Table--stickyHeader Table--striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Event</th>
        <th>User</th>
        <th>Timestamp</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>User Login</td>
        <td>alice@example.com</td>
        <td>04:02:15</td>
      </tr>
      <tr>
        <td>002</td>
        <td>Page View</td>
        <td>alice@example.com</td>
        <td>04:02:18</td>
      </tr>
      <tr>
        <td>003</td>
        <td>File Upload</td>
        <td>bob@example.com</td>
        <td>04:03:22</td>
      </tr>
      <tr>
        <td>004</td>
        <td>Settings Change</td>
        <td>alice@example.com</td>
        <td>04:05:01</td>
      </tr>
      <tr>
        <td>005</td>
        <td>User Logout</td>
        <td>bob@example.com</td>
        <td>04:08:45</td>
      </tr>
      <tr>
        <td>006</td>
        <td>User Login</td>
        <td>carol@example.com</td>
        <td>04:10:12</td>
      </tr>
      <tr>
        <td>007</td>
        <td>API Request</td>
        <td>system</td>
        <td>04:12:33</td>
      </tr>
      <tr>
        <td>008</td>
        <td>Error</td>
        <td>system</td>
        <td>04:15:00</td>
      </tr>
    </tbody>
  </table>
</div>
</Preview>

### Compact / Dense Table

Reduce padding for data-dense interfaces. Add `.Table--compact` for tighter spacing.

<Preview>
<table class="Table Table--compact Table--striped Table--bordered">
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
      <th>Type</th>
      <th>Updated</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>API_KEY</code></td>
      <td><code>sk_live_***</code></td>
      <td>Secret</td>
      <td>2h ago</td>
    </tr>
    <tr>
      <td><code>DEBUG_MODE</code></td>
      <td><code>false</code></td>
      <td>Boolean</td>
      <td>1d ago</td>
    </tr>
    <tr>
      <td><code>MAX_UPLOAD_SIZE</code></td>
      <td><code>10485760</code></td>
      <td>Number</td>
      <td>3d ago</td>
    </tr>
    <tr>
      <td><code>TIMEZONE</code></td>
      <td><code>UTC</code></td>
      <td>String</td>
      <td>7d ago</td>
    </tr>
  </tbody>
</table>
</Preview>

### Table with Actions Column

Add action buttons in the last column for row-level operations.

<Preview>
<table class="Table Table--hoverable">
  <thead>
    <tr>
      <th>User</th>
      <th>Email</th>
      <th>Role</th>
      <th>Status</th>
      <th class="Table-actions">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="Table-user">
          <div class="Avatar Avatar--small">AC</div>
          <span>Alice Chen</span>
        </div>
      </td>
      <td>alice@example.com</td>
      <td>Admin</td>
      <td><span class="Badge Badge--success">Active</span></td>
      <td class="Table-actions">
        <button class="Button Button--icon Button--ghost Button--small" aria-label="Edit user">
          <i class="ph ph-pencil"></i>
        </button>
        <button class="Button Button--icon Button--ghost Button--small" aria-label="Delete user">
          <i class="ph ph-trash"></i>
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div class="Table-user">
          <div class="Avatar Avatar--small">BS</div>
          <span>Bob Smith</span>
        </div>
      </td>
      <td>bob@example.com</td>
      <td>Editor</td>
      <td><span class="Badge Badge--success">Active</span></td>
      <td class="Table-actions">
        <button class="Button Button--icon Button--ghost Button--small" aria-label="Edit user">
          <i class="ph ph-pencil"></i>
        </button>
        <button class="Button Button--icon Button--ghost Button--small" aria-label="Delete user">
          <i class="ph ph-trash"></i>
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div class="Table-user">
          <div class="Avatar Avatar--small">CD</div>
          <span>Carol Davis</span>
        </div>
      </td>
      <td>carol@example.com</td>
      <td>Viewer</td>
      <td><span class="Badge Badge--muted">Inactive</span></td>
      <td class="Table-actions">
        <button class="Button Button--icon Button--ghost Button--small" aria-label="Edit user">
          <i class="ph ph-pencil"></i>
        </button>
        <button class="Button Button--icon Button--ghost Button--small" aria-label="Delete user">
          <i class="ph ph-trash"></i>
        </button>
      </td>
    </tr>
  </tbody>
</table>
</Preview>

### Pagination

Combine tables with pagination controls for large datasets.

<Preview>
<div class="Table-container">
  <table class="Table Table--hoverable">
    <thead>
      <tr>
        <th>Invoice</th>
        <th>Client</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#INV-0042</td>
        <td>Acme Corporation</td>
        <td>$3,450.00</td>
        <td>Jan 28, 2026</td>
        <td><span class="Badge Badge--success">Paid</span></td>
      </tr>
      <tr>
        <td>#INV-0041</td>
        <td>Tech Startup Inc</td>
        <td>$1,200.00</td>
        <td>Jan 25, 2026</td>
        <td><span class="Badge Badge--success">Paid</span></td>
      </tr>
      <tr>
        <td>#INV-0040</td>
        <td>Design Studio</td>
        <td>$890.00</td>
        <td>Jan 22, 2026</td>
        <td><span class="Badge Badge--warning">Pending</span></td>
      </tr>
      <tr>
        <td>#INV-0039</td>
        <td>Marketing Agency</td>
        <td>$2,100.00</td>
        <td>Jan 18, 2026</td>
        <td><span class="Badge Badge--danger">Overdue</span></td>
      </tr>
      <tr>
        <td>#INV-0038</td>
        <td>Consulting LLC</td>
        <td>$4,500.00</td>
        <td>Jan 15, 2026</td>
        <td><span class="Badge Badge--success">Paid</span></td>
      </tr>
    </tbody>
  </table>
  <div class="Table-pagination">
    <span class="Table-pageInfo">Showing 1-5 of 42 results</span>
    <div class="Table-pageControls">
      <button class="Button Button--icon Button--secondary Button--small" disabled aria-label="Previous page">
        <i class="ph ph-caret-left"></i>
      </button>
      <button class="Button Button--secondary Button--small Table-pageBtn--active">1</button>
      <button class="Button Button--ghost Button--small">2</button>
      <button class="Button Button--ghost Button--small">3</button>
      <span class="Table-pageEllipsis">...</span>
      <button class="Button Button--ghost Button--small">9</button>
      <button class="Button Button--icon Button--secondary Button--small" aria-label="Next page">
        <i class="ph ph-caret-right"></i>
      </button>
    </div>
  </div>
</div>
</Preview>

---

## Common Patterns

### Data Dashboard

<Preview title="Dashboard Table">
<div class="Table-container">
  <div class="Toolbar Toolbar--bordered" style="border-bottom: none; border-radius: var(--r-m) var(--r-m) 0 0;">
    <span class="Toolbar-label">Recent Orders</span>
    <div class="Toolbar-spacer"></div>
    <button class="Button Button--ghost Button--sm"><i class="ph ph-funnel"></i> Filter</button>
    <button class="Button Button--primary Button--sm"><i class="ph ph-plus"></i> New</button>
  </div>
  <table class="Table Table--hoverable">
    <thead>
      <tr>
        <th>Order</th>
        <th>Customer</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#ORD-001</td>
        <td>Acme Corp</td>
        <td>$1,250.00</td>
        <td><span class="Badge Badge--success">Paid</span></td>
      </tr>
      <tr>
        <td>#ORD-002</td>
        <td>Tech Solutions</td>
        <td>$890.00</td>
        <td><span class="Badge Badge--warning">Pending</span></td>
      </tr>
      <tr>
        <td>#ORD-003</td>
        <td>Design Co</td>
        <td>$2,100.00</td>
        <td><span class="Badge Badge--danger">Overdue</span></td>
      </tr>
    </tbody>
  </table>
</div>
</Preview>

### Settings Key-Value Table

<Preview title="Configuration Table">
<table class="Table Table--compact Table--striped" style="max-width: 500px;">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Language</td>
      <td>English (US)</td>
    </tr>
    <tr>
      <td>Timezone</td>
      <td>UTC-8 (Pacific)</td>
    </tr>
    <tr>
      <td>Date Format</td>
      <td>MM/DD/YYYY</td>
    </tr>
    <tr>
      <td>Currency</td>
      <td>USD ($)</td>
    </tr>
  </tbody>
</table>
</Preview>

### Comparison Table

<Preview title="Plan Comparison">
<table class="Table Table--bordered" style="text-align: center;">
  <thead>
    <tr>
      <th style="text-align: left;">Feature</th>
      <th>Free</th>
      <th style="background: oklch(95% 0.05 250);">Pro</th>
      <th>Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">Users</td>
      <td>1</td>
      <td style="background: oklch(97% 0.02 250);">10</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td style="text-align: left;">Storage</td>
      <td>1 GB</td>
      <td style="background: oklch(97% 0.02 250);">100 GB</td>
      <td>1 TB</td>
    </tr>
    <tr>
      <td style="text-align: left;">Support</td>
      <td>Community</td>
      <td style="background: oklch(97% 0.02 250);">Email</td>
      <td>24/7 Phone</td>
    </tr>
  </tbody>
</table>
</Preview>

---

## Customization

Override table styles using CSS custom properties:

```css
/* Custom table colors */
.Table {
  --table-border-color: oklch(85% 0 0);
  --table-header-bg: oklch(97% 0 0);
  --table-stripe-bg: oklch(98% 0 0);
  --table-hover-bg: oklch(95% 0.02 250);
  --table-selected-bg: oklch(95% 0.05 250);
}

/* Dark mode overrides */
[data-theme="dark"] .Table {
  --table-border-color: oklch(30% 0 0);
  --table-header-bg: oklch(20% 0 0);
  --table-stripe-bg: oklch(18% 0 0);
  --table-hover-bg: oklch(25% 0.02 250);
  --table-selected-bg: oklch(25% 0.05 250);
}

/* Custom compact sizing */
.Table--extra-compact {
  --table-cell-padding-y: var(--space-1);
  --table-cell-padding-x: var(--space-2);
  font-size: 0.75rem;
}

/* Accent header row */
.Table--accent-header thead {
  background: var(--accent);
  color: white;
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
<td><code class="ApiTable-prop">.Table</code></td>
<td class="ApiTable-desc">Base table styles (required)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-wrapper</code></td>
<td class="ApiTable-desc">Responsive wrapper for horizontal scrolling</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-container</code></td>
<td class="ApiTable-desc">Container with pagination area</td>
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
<td><code class="ApiTable-prop">.Table--striped</code></td>
<td class="ApiTable-desc">Alternating row background colors</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table--hoverable</code></td>
<td class="ApiTable-desc">Highlight rows on hover</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table--bordered</code></td>
<td class="ApiTable-desc">Full borders around all cells</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table--compact</code></td>
<td class="ApiTable-desc">Reduced cell padding for dense data</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table--stickyHeader</code></td>
<td class="ApiTable-desc">Fixed header during vertical scroll</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table--selectable</code></td>
<td class="ApiTable-desc">Optimized for row selection with checkboxes</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table--sortable</code></td>
<td class="ApiTable-desc">Styled for sortable column headers</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table--expandable</code></td>
<td class="ApiTable-desc">Support for expandable row content</td>
</tr>
</tbody>
</table>

### Row Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Table-row--selected</code></td>
<td class="ApiTable-desc">Highlighted selected row state</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-row--expandable</code></td>
<td class="ApiTable-desc">Row that can be expanded</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-row--expanded</code></td>
<td class="ApiTable-desc">Currently expanded row</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-expandContent</code></td>
<td class="ApiTable-desc">Row containing expanded content</td>
</tr>
</tbody>
</table>

### Cell Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Table-checkbox</code></td>
<td class="ApiTable-desc">Checkbox cell with proper alignment</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-actions</code></td>
<td class="ApiTable-desc">Actions column (right-aligned)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-expandCol</code></td>
<td class="ApiTable-desc">Expand/collapse button column</td>
</tr>
</tbody>
</table>

### Interactive Elements

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Table-sort</code></td>
<td class="ApiTable-desc">Sortable column header button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-sort--active</code></td>
<td class="ApiTable-desc">Currently sorted column</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-sortIcon</code></td>
<td class="ApiTable-desc">Sort direction indicator icon</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-expandBtn</code></td>
<td class="ApiTable-desc">Row expand/collapse button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-expandBtn--open</code></td>
<td class="ApiTable-desc">Expanded state for button</td>
</tr>
</tbody>
</table>

### Pagination Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Table-pagination</code></td>
<td class="ApiTable-desc">Pagination controls container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-pageInfo</code></td>
<td class="ApiTable-desc">"Showing X of Y" text</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-pageControls</code></td>
<td class="ApiTable-desc">Page buttons container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-pageBtn--active</code></td>
<td class="ApiTable-desc">Current page button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-pageEllipsis</code></td>
<td class="ApiTable-desc">Ellipsis between page numbers</td>
</tr>
</tbody>
</table>

### Utility Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Table-user</code></td>
<td class="ApiTable-desc">User cell with avatar layout</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-fileIcon</code></td>
<td class="ApiTable-desc">File/folder icon in cells</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-expandPanel</code></td>
<td class="ApiTable-desc">Container for expanded content</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-expandDetail</code></td>
<td class="ApiTable-desc">Individual detail item in expanded content</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Table-wrapper--scrollable</code></td>
<td class="ApiTable-desc">Wrapper with vertical scroll (use with max-height)</td>
</tr>
</tbody>
</table>


## CSS Reference

```css
/* Base table */
.Table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--fs-sm);
  color: var(--fg);
}

.Table th,
.Table td {
  padding: var(--space-3) var(--space-4);
  text-align: left;
  border-bottom: 1px solid var(--bd);
}

.Table th {
  font-weight: 600;
  color: var(--fg);
  background: var(--bg-s);
  font-size: var(--fs-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Striped variant */
.Table--striped tbody tr:nth-child(even) {
  background: var(--bg-s);
}

/* Hoverable variant */
.Table--hoverable tbody tr:hover {
  background: oklch(95% 0.02 250 / 0.5);
}

/* Bordered variant */
.Table--bordered th,
.Table--bordered td {
  border: 1px solid var(--bd);
}

/* Compact variant */
.Table--compact th,
.Table--compact td {
  padding: var(--space-1) var(--space-2);
  font-size: var(--fs-xs);
}

/* Sticky header */
.Table--stickyHeader thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--bg);
}

/* Scrollable wrapper */
.Table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.Table-wrapper--scrollable {
  overflow-y: auto;
}

/* Selected rows */
.Table-row--selected {
  background: oklch(95% 0.05 250);
}

/* Checkbox column */
.Table--selectable .Table-checkbox {
  width: 40px;
  padding: var(--space-2);
}

/* Sort buttons */
.Table-sort {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  font-weight: 600;
  color: var(--fg);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: var(--fs-xs);
}

.Table-sort:hover {
  color: var(--accent);
}

.Table-sort--active {
  color: var(--accent);
}

.Table-sortIcon {
  font-size: var(--fs-base);
  opacity: 0.5;
}

.Table-sort--active .Table-sortIcon {
  opacity: 1;
}

/* Expand/collapse */
.Table-expandCol {
  width: 40px;
  padding: var(--space-2);
}

.Table-expandBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--fg-3);
}

.Table-expandBtn:hover {
  color: var(--fg);
}

.Table-expandPanel {
  padding: var(--space-3) var(--space-4);
  background: var(--bg-s);
}

.Table-expandDetail {
  padding: var(--space-1) 0;
  font-size: var(--fs-sm);
}

/* Actions column */
.Table-actions {
  text-align: right;
  white-space: nowrap;
}

/* User cell */
.Table-user {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* Pagination */
.Table-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  border-top: 1px solid var(--bd);
}

.Table-pageInfo {
  font-size: var(--fs-sm);
  color: var(--fg-3);
}

.Table-pageControls {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.Table-pageBtn--active {
  font-weight: 600;
}

.Table-pageEllipsis {
  padding: 0 var(--space-1);
  color: var(--fg-3);
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus to next interactive element |
| Shift + Tab | Move focus to previous interactive element |
| Space | Toggle checkbox, activate sort button |
| Enter | Activate buttons, expand/collapse rows |
| Arrow Keys | Navigate within pagination controls |

### Screen Readers

```html
<!-- Sortable header with proper ARIA -->
<th>
  <button class="Table-sort" aria-sort="ascending">
    Name
    <i class="ph ph-caret-up Table-sortIcon" aria-hidden="true"></i>
  </button>
</th>

<!-- Select all checkbox -->
<th class="Table-checkbox">
  <input type="checkbox" class="Checkbox" aria-label="Select all rows">
</th>

<!-- Expandable row -->
<button class="Table-expandBtn" 
        aria-expanded="false" 
        aria-controls="row-details-1"
        aria-label="Show details for Order #1234">
  <i class="ph ph-caret-right" aria-hidden="true"></i>
</button>
```

### Caption and Summary

```html
<table class="Table">
  <caption class="sr-only">
    User accounts showing name, email, role, and status.
  </caption>
  <!-- ... -->
</table>
```

### Row Headers

```html
<table class="Table">
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
      <th scope="col">Expenses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$45,000</td>
      <td>$32,000</td>
    </tr>
  </tbody>
</table>
```

---

## Best Practices

### Do

- ✓ **Use tables for tabular data** — Don't use tables for layout
- ✓ **Keep columns scannable** — Align numbers right, text left
- ✓ **Truncate long content** — Use ellipsis or expand on hover
- ✓ **Show loading states** — Skeleton rows or spinner for async data
- ✓ **Provide empty states** — Clear message when no data exists
- ✓ **Make actions discoverable** — Hover to reveal or always visible

### Don't

- ✗ **Overload with columns** — 5-7 columns max for readability
- ✗ **Hide critical information** — Key data should always be visible
- ✗ **Use inconsistent alignment** — Pick one style and stick to it
- ✗ **Forget mobile** — Use responsive wrapper or card layout
- ✗ **Skip keyboard support** — All actions must be keyboard accessible
- ✗ **Nest tables** — Use expandable rows instead
