# File Upload

Upload files via drag-and-drop or file browser. Supports single and multiple files with progress indicators, previews, and validation.

---

## Installation

File Upload uses Standard's base styles and JavaScript for drag-and-drop interactions.

```html
<link rel="stylesheet" href="https://standard.operator.onl/styles/standard-core.css">
```

---

## Usage

### Basic Drop Zone

<Preview>
  <div class="FileUpload">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">
        <span class="FileUpload-link">Click to upload</span> or drag and drop
      </p>
      <p class="FileUpload-hint">PNG, JPG, GIF up to 10MB</p>
      <input type="file" class="FileUpload-input" />
    </div>
  </div>
</Preview>

### Multiple Files

Add `multiple` to accept multiple files.

<Preview>
  <div class="FileUpload">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">
        <span class="FileUpload-link">Click to upload</span> or drag and drop
      </p>
      <p class="FileUpload-hint">Up to 5 files, 10MB each</p>
      <input type="file" class="FileUpload-input" multiple />
    </div>
  </div>
</Preview>

---

## Variants

### Compact

Smaller drop zone for inline usage.

<Preview>
  <div class="FileUpload FileUpload--compact">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <span class="FileUpload-text">
        <span class="FileUpload-link">Upload file</span>
      </span>
      <input type="file" class="FileUpload-input" />
    </div>
  </div>
</Preview>

### With Border

More prominent border style.

<Preview>
  <div class="FileUpload FileUpload--bordered">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">
        <span class="FileUpload-link">Click to upload</span> or drag and drop
      </p>
      <p class="FileUpload-hint">SVG, PNG, JPG or GIF (max. 800x400px)</p>
      <input type="file" class="FileUpload-input" accept="image/*" />
    </div>
  </div>
</Preview>

### Image Preview

Shows thumbnail preview for uploaded images.

<Preview>
  <div class="FileUpload FileUpload--preview">
    <div class="FileUpload-dropzone">
      <div class="FileUpload-preview">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect fill='%23e5e7eb' width='120' height='120'/%3E%3Cpath fill='%239ca3af' d='M45 50h30v20H45z'/%3E%3Ccircle fill='%239ca3af' cx='52' cy='45' r='5'/%3E%3C/svg%3E" alt="Preview" class="FileUpload-thumbnail" />
      </div>
      <div class="FileUpload-content">
        <p class="FileUpload-text">
          <span class="FileUpload-link">Change image</span>
        </p>
        <p class="FileUpload-hint">PNG, JPG up to 5MB</p>
      </div>
      <input type="file" class="FileUpload-input" accept="image/*" />
    </div>
  </div>
</Preview>

---

## File List

Display uploaded files with actions.

### Basic File List

<Preview>
  <div class="FileUpload">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text"><span class="FileUpload-link">Add more files</span></p>
      <input type="file" class="FileUpload-input" multiple />
    </div>
    <ul class="FileUpload-list">
      <li class="FileUpload-item">
        <svg class="FileUpload-itemIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
        <div class="FileUpload-itemInfo">
          <span class="FileUpload-itemName">document.pdf</span>
          <span class="FileUpload-itemSize">2.4 MB</span>
        </div>
        <button class="FileUpload-itemRemove" aria-label="Remove file">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </li>
      <li class="FileUpload-item">
        <svg class="FileUpload-itemIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <div class="FileUpload-itemInfo">
          <span class="FileUpload-itemName">photo.jpg</span>
          <span class="FileUpload-itemSize">1.2 MB</span>
        </div>
        <button class="FileUpload-itemRemove" aria-label="Remove file">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</Preview>

### With Progress

Show upload progress for each file.

<Preview>
  <ul class="FileUpload-list">
    <li class="FileUpload-item FileUpload-item--uploading">
      <svg class="FileUpload-itemIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
      <div class="FileUpload-itemInfo">
        <span class="FileUpload-itemName">large-video.mp4</span>
        <div class="FileUpload-progress">
          <div class="FileUpload-progressBar" style="width: 65%"></div>
        </div>
        <span class="FileUpload-itemSize">65% · 12.4 MB of 19.1 MB</span>
      </div>
      <button class="FileUpload-itemRemove" aria-label="Cancel upload">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </li>
    <li class="FileUpload-item FileUpload-item--complete">
      <svg class="FileUpload-itemIcon FileUpload-itemIcon--success" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <div class="FileUpload-itemInfo">
        <span class="FileUpload-itemName">report.pdf</span>
        <span class="FileUpload-itemSize">Complete · 4.2 MB</span>
      </div>
      <button class="FileUpload-itemRemove" aria-label="Remove file">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </li>
    <li class="FileUpload-item FileUpload-item--error">
      <svg class="FileUpload-itemIcon FileUpload-itemIcon--error" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <div class="FileUpload-itemInfo">
        <span class="FileUpload-itemName">corrupted.zip</span>
        <span class="FileUpload-itemSize FileUpload-itemSize--error">Upload failed · File corrupted</span>
      </div>
      <button class="FileUpload-itemRetry" aria-label="Retry upload">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="23 4 23 10 17 10"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
      </button>
    </li>
  </ul>
</Preview>

---

## States

### Drag Over

Active state when files are dragged over the drop zone.

<Preview>
  <div class="FileUpload">
    <div class="FileUpload-dropzone is-dragover">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">Drop files here</p>
      <input type="file" class="FileUpload-input" />
    </div>
  </div>
</Preview>

### Disabled

<Preview>
  <div class="FileUpload FileUpload--disabled">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <p class="FileUpload-text">Upload disabled</p>
      <p class="FileUpload-hint">Contact admin for access</p>
      <input type="file" class="FileUpload-input" disabled />
    </div>
  </div>
</Preview>

### Error

<Preview>
  <div class="FileUpload FileUpload--error">
    <div class="FileUpload-dropzone">
      <svg class="FileUpload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <p class="FileUpload-text">File too large</p>
      <p class="FileUpload-hint">Maximum file size is 10MB</p>
      <input type="file" class="FileUpload-input" />
    </div>
  </div>
</Preview>

---

## Common Patterns

### Profile Avatar Upload

<Preview title="Avatar Upload">
<div style="display: flex; align-items: center; gap: var(--space-4); max-width: 400px;">
    <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, oklch(60% 0.15 250), oklch(50% 0.2 280)); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 600;">JD</div>
    <div>
        <p style="font-weight: 500; margin-bottom: var(--space-2);">Profile Photo</p>
        <div style="display: flex; gap: var(--space-2);">
            <button class="Button Button--secondary Button--small">Upload</button>
            <button class="Button Button--ghost Button--small" style="color: oklch(55% 0.2 25);">Remove</button>
        </div>
        <p style="font-size: 0.8rem; color: var(--fg-3); margin-top: var(--space-1);">JPG or PNG, max 2MB</p>
    </div>
</div>
</Preview>

### Form with File Attachment

<Preview title="Support Ticket Form">
<div style="max-width: 400px;">
    <div style="margin-bottom: var(--space-4);">
        <label style="display: block; font-weight: 500; margin-bottom: var(--space-1);">Subject</label>
        <input type="text" class="Input" placeholder="Brief description" style="width: 100%;">
    </div>
    <div style="margin-bottom: var(--space-4);">
        <label style="display: block; font-weight: 500; margin-bottom: var(--space-1);">Attachments</label>
        <div class="FileUpload FileUpload--compact">
            <div class="FileUpload-dropzone">
                <svg class="FileUpload-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <span class="FileUpload-text"><span class="FileUpload-link">Attach files</span></span>
                <input type="file" class="FileUpload-input" multiple />
            </div>
        </div>
    </div>
    <button class="Button Button--primary">Submit Ticket</button>
</div>
</Preview>

### Multi-file Upload with Progress

<Preview title="Bulk Upload">
<div style="max-width: 450px;">
    <div class="FileUpload">
        <div class="FileUpload-dropzone" style="padding: var(--space-4);">
            <svg class="FileUpload-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <p class="FileUpload-text"><span class="FileUpload-link">Upload files</span> or drag and drop</p>
            <input type="file" class="FileUpload-input" multiple />
        </div>
        <ul class="FileUpload-list">
            <li class="FileUpload-item FileUpload-item--complete">
                <svg class="FileUpload-itemIcon FileUpload-itemIcon--success" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <div class="FileUpload-itemInfo">
                    <span class="FileUpload-itemName">design-v2.fig</span>
                    <span class="FileUpload-itemSize">Complete · 8.1 MB</span>
                </div>
            </li>
            <li class="FileUpload-item FileUpload-item--uploading">
                <svg class="FileUpload-itemIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <div class="FileUpload-itemInfo">
                    <span class="FileUpload-itemName">assets.zip</span>
                    <div class="FileUpload-progress"><div class="FileUpload-progressBar" style="width: 40%"></div></div>
                    <span class="FileUpload-itemSize">40% · 3.2 MB of 8 MB</span>
                </div>
            </li>
        </ul>
    </div>
</div>
</Preview>

---

## Customization

### CSS Variables

```css
.FileUpload {
  /* Dropzone */
  --file-upload-bg: var(--surface-1);
  --file-upload-border: var(--border-default);
  --file-upload-border-hover: var(--bd-s);
  --file-upload-border-active: var(--color-primary);
  --file-upload-radius: var(--radius-lg);
  --file-upload-padding: var(--space-8);

  /* Colors */
  --file-upload-icon-color: var(--text-muted);
  --file-upload-text-color: var(--text-default);
  --file-upload-hint-color: var(--text-muted);
  --file-upload-link-color: var(--color-primary);

  /* Progress */
  --file-upload-progress-bg: var(--surface-2);
  --file-upload-progress-fill: var(--color-primary);

  /* States */
  --file-upload-error-color: var(--color-error);
  --file-upload-success-color: var(--color-success);
}
```

### Custom Styling Example

```css
/* Circular avatar upload */
.FileUpload--avatar .FileUpload-dropzone {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: var(--space-4);
}

.FileUpload--avatar .FileUpload-preview {
  border-radius: 50%;
  overflow: hidden;
}
```

---

## API Reference

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.FileUpload</code></td><td class="ApiTable-desc">Base container</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload--compact</code></td><td class="ApiTable-desc">Smaller, inline variant</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload--bordered</code></td><td class="ApiTable-desc">Solid border style</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload--preview</code></td><td class="ApiTable-desc">Image preview layout</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload--disabled</code></td><td class="ApiTable-desc">Disabled state</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload--error</code></td><td class="ApiTable-desc">Error state</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-dropzone</code></td><td class="ApiTable-desc">Drop target area</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-dropzone.is-dragover</code></td><td class="ApiTable-desc">Active drag state</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-input</code></td><td class="ApiTable-desc">Hidden file input</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-icon</code></td><td class="ApiTable-desc">Upload icon</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-text</code></td><td class="ApiTable-desc">Main instruction text</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-link</code></td><td class="ApiTable-desc">Clickable upload trigger</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-hint</code></td><td class="ApiTable-desc">Help text (file types, size)</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-preview</code></td><td class="ApiTable-desc">Image thumbnail container</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-thumbnail</code></td><td class="ApiTable-desc">Preview image</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-list</code></td><td class="ApiTable-desc">File list container</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-item</code></td><td class="ApiTable-desc">Individual file row</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-item--uploading</code></td><td class="ApiTable-desc">Upload in progress</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-item--complete</code></td><td class="ApiTable-desc">Upload complete</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-item--error</code></td><td class="ApiTable-desc">Upload failed</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-itemIcon</code></td><td class="ApiTable-desc">File type icon</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-itemInfo</code></td><td class="ApiTable-desc">File name and size container</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-itemName</code></td><td class="ApiTable-desc">File name</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-itemSize</code></td><td class="ApiTable-desc">File size / status</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-progress</code></td><td class="ApiTable-desc">Progress bar container</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-progressBar</code></td><td class="ApiTable-desc">Progress bar fill</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-itemRemove</code></td><td class="ApiTable-desc">Remove/cancel button</td></tr>
<tr><td><code class="ApiTable-prop">.FileUpload-itemRetry</code></td><td class="ApiTable-desc">Retry button</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base container */
.FileUpload {
  width: 100%;
}

/* Dropzone */
.FileUpload-dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-8);
  border: 2px dashed var(--bd);
  border-radius: var(--r-m);
  background: var(--bg);
  cursor: pointer;
  transition: border-color var(--dur-f), background var(--dur-f);
  position: relative;
  text-align: center;
}

.FileUpload-dropzone:hover {
  border-color: var(--bd-s);
  background: var(--bg-s);
}

.FileUpload-dropzone.is-dragover {
  border-color: var(--accent);
  background: oklch(60% 0.15 250 / 0.05);
}

/* Hidden input */
.FileUpload-input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

/* Icon */
.FileUpload-icon {
  color: var(--fg-3);
}

/* Text */
.FileUpload-text {
  font-size: var(--fs-lg);
  color: var(--fg-2);
  margin: 0;
}

.FileUpload-link {
  color: var(--accent);
  font-weight: 500;
  cursor: pointer;
}

.FileUpload-hint {
  font-size: var(--fs-md);
  color: var(--fg-3);
  margin: 0;
}

/* Compact variant */
.FileUpload--compact .FileUpload-dropzone {
  flex-direction: row;
  padding: var(--space-3) var(--space-4);
  gap: var(--space-3);
}

/* Bordered variant */
.FileUpload--bordered .FileUpload-dropzone {
  border-style: solid;
}

/* File list */
.FileUpload-list {
  list-style: none;
  padding: 0;
  margin: var(--space-3) 0 0;
}

.FileUpload-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--bd);
  border-radius: var(--r-s);
  margin-bottom: var(--space-2);
}

.FileUpload-itemIcon {
  flex-shrink: 0;
  color: var(--fg-3);
}

.FileUpload-itemIcon--success { color: oklch(55% 0.15 150); }
.FileUpload-itemIcon--error { color: oklch(55% 0.2 25); }

.FileUpload-itemInfo {
  flex: 1;
  min-width: 0;
}

.FileUpload-itemName {
  display: block;
  font-size: var(--fs-lg);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.FileUpload-itemSize {
  display: block;
  font-size: var(--fs-md);
  color: var(--fg-3);
}

.FileUpload-itemSize--error {
  color: oklch(55% 0.2 25);
}

/* Progress bar */
.FileUpload-progress {
  height: 4px;
  background: var(--bg-s);
  border-radius: 2px;
  margin: var(--space-1) 0;
  overflow: hidden;
}

.FileUpload-progressBar {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
  transition: width var(--dur-s);
}

/* Remove / Retry buttons */
.FileUpload-itemRemove,
.FileUpload-itemRetry {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: var(--space-1);
  cursor: pointer;
  color: var(--fg-3);
  border-radius: var(--r-s);
  transition: background var(--dur-f);
}

.FileUpload-itemRemove:hover,
.FileUpload-itemRetry:hover {
  background: var(--bg-s);
  color: var(--fg);
}

/* States */
.FileUpload--disabled .FileUpload-dropzone {
  opacity: 0.5;
  pointer-events: none;
}

.FileUpload--error .FileUpload-dropzone {
  border-color: oklch(55% 0.2 25);
  background: oklch(55% 0.2 25 / 0.05);
}

/* Preview variant */
.FileUpload--preview .FileUpload-dropzone {
  flex-direction: row;
  text-align: left;
}

.FileUpload-thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--r-s);
}
```

---

## Accessibility

- Use `aria-label` on remove/retry buttons
- Add `aria-describedby` linking to hint text
- Announce upload progress to screen readers via `aria-live`
- Ensure keyboard access to drop zone via the file input
- Provide clear error messages for validation failures

### Keyboard Support

| Key | Action |
|-----|--------|
| Enter / Space | Open file browser (when focused) |
| Delete | Remove focused file from list |
| Tab | Navigate between files and actions |

### Screen Reader Guidance

```html
<div class="FileUpload">
    <div class="FileUpload-dropzone">
        <p class="FileUpload-text" id="upload-desc">
            <span class="FileUpload-link">Click to upload</span> or drag and drop
        </p>
        <p class="FileUpload-hint" id="upload-hint">PNG, JPG up to 10MB</p>
        <input type="file" class="FileUpload-input"
               aria-describedby="upload-desc upload-hint"
               aria-label="Upload file" />
    </div>
    <div aria-live="polite" class="sr-only">
        <!-- Announce upload progress and completion -->
    </div>
</div>
```

---

## Best Practices

### Do

- ✓ **Show accepted file types and size limits** — Users need to know constraints before uploading
- ✓ **Display upload progress for large files** — Visual feedback prevents uncertainty
- ✓ **Allow retry for failed uploads** — Network errors happen; let users recover gracefully
- ✓ **Show image previews when appropriate** — Helps users confirm they selected the right file
- ✓ **Provide clear error messages** — "File exceeds 10MB limit" not just "Error"
- ✓ **Support drag-and-drop and click** — Both interaction patterns are expected

### Don't

- ✗ **Allow uploads without size limits** — Unbounded uploads risk server issues and poor UX
- ✗ **Remove files without confirmation** — Accidental clicks shouldn't lose uploaded work
- ✗ **Hide the file list when processing** — Users need to see what's happening
- ✗ **Use vague error messages** — "Upload failed" tells users nothing actionable
- ✗ **Auto-upload on selection without user control** — Let users review before submitting
- ✗ **Forget mobile touch targets** — Drop zones and buttons must be at least 44px
