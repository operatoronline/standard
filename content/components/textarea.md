# Textarea

Textareas are multi-line text inputs for longer-form content like comments, descriptions, or messages.

## Basic Textarea

A standard multi-line text input.

<Preview title="Basic Textarea">
    <div style="max-width: 400px;">
        <label class="Form-label" for="basic-textarea">Description</label>
        <textarea class="Textarea" id="basic-textarea" rows="4" placeholder="Enter a description..."></textarea>
    </div>
</Preview>

```html
<label class="Form-label" for="basic-textarea">Description</label>
<textarea class="Textarea" id="basic-textarea" rows="4" placeholder="Enter a description..."></textarea>
```

## With Helper Text

Add context or instructions below the textarea.

<Preview title="Textarea with Helper Text">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label" for="helper-textarea">Bio</label>
        <textarea class="Textarea" id="helper-textarea" rows="3" placeholder="Tell us about yourself..."></textarea>
        <span class="Form-hint">Maximum 500 characters</span>
    </div>
</Preview>

```html
<div class="Form-group">
    <label class="Form-label" for="helper-textarea">Bio</label>
    <textarea class="Textarea" id="helper-textarea" rows="3" placeholder="Tell us about yourself..."></textarea>
    <span class="Form-hint">Maximum 500 characters</span>
</div>
```

## Character Counter

Show remaining or used character count.

<Preview title="Textarea with Character Counter">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label" for="counter-textarea">Message</label>
        <textarea class="Textarea" id="counter-textarea" rows="4" maxlength="280" placeholder="What's on your mind?"></textarea>
        <div class="Textarea-footer">
            <span class="Form-hint">Be concise and clear</span>
            <span class="Textarea-counter">0 / 280</span>
        </div>
    </div>
</Preview>

```html
<div class="Form-group">
    <label class="Form-label" for="counter-textarea">Message</label>
    <textarea class="Textarea" id="counter-textarea" rows="4" maxlength="280" placeholder="..."></textarea>
    <div class="Textarea-footer">
        <span class="Form-hint">Be concise and clear</span>
        <span class="Textarea-counter">0 / 280</span>
    </div>
</div>
```

## Sizes

Multiple size variants for different contexts.

<Preview title="Textarea Sizes">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 400px;">
        <div class="Form-group">
            <label class="Form-label">Small</label>
            <textarea class="Textarea Textarea--sm" rows="2" placeholder="Small textarea..."></textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Medium (Default)</label>
            <textarea class="Textarea" rows="3" placeholder="Medium textarea..."></textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Large</label>
            <textarea class="Textarea Textarea--lg" rows="4" placeholder="Large textarea..."></textarea>
        </div>
    </div>
</Preview>

```html
<textarea class="Textarea Textarea--sm" rows="2">Small</textarea>
<textarea class="Textarea" rows="3">Medium (default)</textarea>
<textarea class="Textarea Textarea--lg" rows="4">Large</textarea>
```

## States

Different visual states for validation and interaction.

<Preview title="Textarea States">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 400px;">
        <div class="Form-group">
            <label class="Form-label">Default</label>
            <textarea class="Textarea" rows="2" placeholder="Default state..."></textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Focused</label>
            <textarea class="Textarea Textarea--focus" rows="2" placeholder="Focused state..."></textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Error</label>
            <textarea class="Textarea Textarea--error" rows="2" placeholder="Error state..."></textarea>
            <span class="Form-error">This field is required</span>
        </div>
        <div class="Form-group">
            <label class="Form-label">Success</label>
            <textarea class="Textarea Textarea--success" rows="2" placeholder="Success state...">Valid content here</textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Disabled</label>
            <textarea class="Textarea" rows="2" disabled placeholder="Disabled state...">Cannot edit this</textarea>
        </div>
        <div class="Form-group">
            <label class="Form-label">Read-only</label>
            <textarea class="Textarea" rows="2" readonly>This content is read-only</textarea>
        </div>
    </div>
</Preview>

```html
<textarea class="Textarea">Default</textarea>
<textarea class="Textarea Textarea--error">Error state</textarea>
<textarea class="Textarea Textarea--success">Success state</textarea>
<textarea class="Textarea" disabled>Disabled</textarea>
<textarea class="Textarea" readonly>Read-only</textarea>
```

## Auto-resize

Textareas that grow with content.

<Preview title="Auto-resize Textarea">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label" for="autoresize-textarea">Notes</label>
        <textarea class="Textarea Textarea--autoresize" id="autoresize-textarea" rows="2" placeholder="Start typing... the textarea will grow"></textarea>
        <span class="Form-hint">Textarea expands as you type</span>
    </div>
</Preview>

```html
<textarea class="Textarea Textarea--autoresize" rows="2" placeholder="..."></textarea>

<script>
// Auto-resize implementation
textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});
</script>
```

## With Toolbar

Add formatting controls above the textarea.

<Preview title="Textarea with Toolbar">
    <div class="Textarea-wrapper" style="max-width: 500px;">
        <div class="Textarea-toolbar">
            <button type="button" class="Textarea-toolbar-btn" title="Bold">
                <i class="ph ph-text-bolder"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Italic">
                <i class="ph ph-text-italic"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Underline">
                <i class="ph ph-text-underline"></i>
            </button>
            <div class="Textarea-toolbar-divider"></div>
            <button type="button" class="Textarea-toolbar-btn" title="Link">
                <i class="ph ph-link"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Image">
                <i class="ph ph-image"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Code">
                <i class="ph ph-code"></i>
            </button>
            <div class="Textarea-toolbar-divider"></div>
            <button type="button" class="Textarea-toolbar-btn" title="List">
                <i class="ph ph-list-bullets"></i>
            </button>
            <button type="button" class="Textarea-toolbar-btn" title="Quote">
                <i class="ph ph-quotes"></i>
            </button>
        </div>
        <textarea class="Textarea Textarea--no-top-radius" rows="6" placeholder="Write your content here..."></textarea>
    </div>
</Preview>

```html
<div class="Textarea-wrapper">
    <div class="Textarea-toolbar">
        <button type="button" class="Textarea-toolbar-btn" title="Bold">
            <i class="ph ph-text-bolder"></i>
        </button>
        <button type="button" class="Textarea-toolbar-btn" title="Italic">
            <i class="ph ph-text-italic"></i>
        </button>
        ...
    </div>
    <textarea class="Textarea Textarea--no-top-radius" rows="6"></textarea>
</div>
```

## With Action Bar

Add actions below the textarea for submit or attachments.

<Preview title="Textarea with Action Bar">
    <div class="Textarea-wrapper" style="max-width: 500px;">
        <textarea class="Textarea Textarea--no-bottom-radius" rows="4" placeholder="Write a comment..."></textarea>
        <div class="Textarea-actions">
            <div class="Textarea-actions-left">
                <button type="button" class="Textarea-action-btn" title="Attach file">
                    <i class="ph ph-paperclip"></i>
                </button>
                <button type="button" class="Textarea-action-btn" title="Add emoji">
                    <i class="ph ph-smiley"></i>
                </button>
                <button type="button" class="Textarea-action-btn" title="Mention">
                    <i class="ph ph-at"></i>
                </button>
            </div>
            <button type="submit" class="Button Button--primary Button--sm">
                Post Comment
            </button>
        </div>
    </div>
</Preview>

```html
<div class="Textarea-wrapper">
    <textarea class="Textarea Textarea--no-bottom-radius" rows="4"></textarea>
    <div class="Textarea-actions">
        <div class="Textarea-actions-left">
            <button type="button" class="Textarea-action-btn">
                <i class="ph ph-paperclip"></i>
            </button>
            ...
        </div>
        <button type="submit" class="Button Button--primary Button--sm">
            Post Comment
        </button>
    </div>
</div>
```

## No Resize

Disable user resizing.

<Preview title="Non-resizable Textarea">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label" for="noresize-textarea">Fixed Size</label>
        <textarea class="Textarea Textarea--no-resize" id="noresize-textarea" rows="4" placeholder="This textarea cannot be resized..."></textarea>
    </div>
</Preview>

```html
<textarea class="Textarea Textarea--no-resize" rows="4"></textarea>
```

## Horizontal Resize Only

Allow only horizontal resizing.

<Preview title="Horizontal Resize Only">
    <div class="Form-group" style="max-width: 600px;">
        <label class="Form-label">Adjustable Width</label>
        <textarea class="Textarea Textarea--resize-horizontal" rows="3" placeholder="Drag the corner to resize horizontally..."></textarea>
    </div>
</Preview>

```html
<textarea class="Textarea Textarea--resize-horizontal" rows="3"></textarea>
```

## Required Field

Mark textarea as required with visual indicator.

<Preview title="Required Textarea">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label">
            Feedback
            <span class="Form-required">*</span>
        </label>
        <textarea class="Textarea" rows="4" required placeholder="Please share your feedback..."></textarea>
        <span class="Form-hint">Required field</span>
    </div>
</Preview>

```html
<div class="Form-group">
    <label class="Form-label">
        Feedback
        <span class="Form-required">*</span>
    </label>
    <textarea class="Textarea" rows="4" required></textarea>
</div>
```

## Common Patterns

### Comment Box

<Preview title="Comment Input">
    <div class="Textarea-wrapper" style="max-width: 500px;">
        <textarea class="Textarea Textarea--no-bottom-radius" rows="3" placeholder="Write a comment..."></textarea>
        <div class="Textarea-actions">
            <div class="Textarea-actions-left">
                <button type="button" class="Textarea-action-btn" title="Attach file"><i class="ph ph-paperclip"></i></button>
                <button type="button" class="Textarea-action-btn" title="Emoji"><i class="ph ph-smiley"></i></button>
            </div>
            <button type="submit" class="Button Button--primary Button--sm">Comment</button>
        </div>
    </div>
</Preview>

### Feedback Form

<Preview title="Feedback Form">
    <div style="max-width: 450px; display: flex; flex-direction: column; gap: var(--space-4);">
        <div class="Form-group">
            <label class="Form-label">How can we improve?</label>
            <textarea class="Textarea" rows="4" placeholder="Tell us what you think..."></textarea>
            <div class="Textarea-footer">
                <span class="Form-hint">Your feedback is anonymous</span>
                <span class="Textarea-counter">0 / 500</span>
            </div>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--space-2);">
            <button class="Button Button--secondary">Cancel</button>
            <button class="Button Button--primary">Submit</button>
        </div>
    </div>
</Preview>

### Rich Text Editor

<Preview title="Rich Text Editor">
    <div class="Textarea-wrapper" style="max-width: 550px;">
        <div class="Textarea-toolbar">
            <button type="button" class="Textarea-toolbar-btn" title="Bold"><i class="ph ph-text-bolder"></i></button>
            <button type="button" class="Textarea-toolbar-btn" title="Italic"><i class="ph ph-text-italic"></i></button>
            <button type="button" class="Textarea-toolbar-btn" title="Underline"><i class="ph ph-text-underline"></i></button>
            <div class="Textarea-toolbar-divider"></div>
            <button type="button" class="Textarea-toolbar-btn" title="Link"><i class="ph ph-link"></i></button>
            <button type="button" class="Textarea-toolbar-btn" title="Code"><i class="ph ph-code"></i></button>
            <div class="Textarea-toolbar-divider"></div>
            <button type="button" class="Textarea-toolbar-btn" title="List"><i class="ph ph-list-bullets"></i></button>
            <button type="button" class="Textarea-toolbar-btn" title="Quote"><i class="ph ph-quotes"></i></button>
        </div>
        <textarea class="Textarea Textarea--no-top-radius" rows="8" placeholder="Write your content here..."></textarea>
    </div>
</Preview>

### Bio / Profile Description

<Preview title="Profile Bio">
    <div class="Form-group" style="max-width: 400px;">
        <label class="Form-label">Bio</label>
        <textarea class="Textarea" rows="3" maxlength="160" placeholder="Write a short bio...">Product designer crafting thoughtful interfaces.</textarea>
        <div class="Textarea-footer">
            <span class="Form-hint">Displayed on your public profile</span>
            <span class="Textarea-counter">49 / 160</span>
        </div>
    </div>
</Preview>

---

## Customization

Override textarea styles using CSS custom properties:

```css
/* Custom border color on focus */
.Textarea:focus {
  border-color: oklch(55% 0.2 150);
  box-shadow: 0 0 0 3px oklch(55% 0.2 150 / 0.15);
}

/* Monospace textarea for code */
.Textarea--code {
  font-family: var(--ff-m);
  font-size: 0.875rem;
  line-height: 1.6;
  tab-size: 2;
}

/* Dark toolbar */
.Textarea-toolbar--dark {
  background: var(--fg);
  color: var(--bg);
}
.Textarea-toolbar--dark .Textarea-toolbar-btn {
  color: var(--bg);
}

/* Minimal textarea (no border until focus) */
.Textarea--minimal {
  border-color: transparent;
  background: transparent;
}
.Textarea--minimal:focus {
  border-color: var(--bd);
  background: var(--bg);
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
<td><code class="ApiTable-prop">.Textarea</code></td>
<td class="ApiTable-desc">Base textarea styling (required)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea-wrapper</code></td>
<td class="ApiTable-desc">Container for textarea + toolbar/actions</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea-footer</code></td>
<td class="ApiTable-desc">Footer with counter/hint</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea-counter</code></td>
<td class="ApiTable-desc">Character counter display</td>
</tr>
</tbody>
</table>

### Size Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Textarea--sm</code></td>
<td class="ApiTable-desc">Small size variant</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea--lg</code></td>
<td class="ApiTable-desc">Large size variant</td>
</tr>
</tbody>
</table>

### State Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Textarea--focus</code></td>
<td class="ApiTable-desc">Forced focus state (for demos)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea--error</code></td>
<td class="ApiTable-desc">Error state styling</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea--success</code></td>
<td class="ApiTable-desc">Success/valid state styling</td>
</tr>
</tbody>
</table>

### Modifier Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Textarea--autoresize</code></td>
<td class="ApiTable-desc">Auto-growing textarea</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea--no-resize</code></td>
<td class="ApiTable-desc">Disables user resizing</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea--resize-horizontal</code></td>
<td class="ApiTable-desc">Horizontal resize only</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea--no-top-radius</code></td>
<td class="ApiTable-desc">Removes top border radius (for toolbar)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea--no-bottom-radius</code></td>
<td class="ApiTable-desc">Removes bottom border radius (for action bar)</td>
</tr>
</tbody>
</table>

### Toolbar Classes

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Textarea-toolbar</code></td>
<td class="ApiTable-desc">Formatting toolbar above textarea</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea-toolbar-btn</code></td>
<td class="ApiTable-desc">Toolbar button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea-toolbar-divider</code></td>
<td class="ApiTable-desc">Divider between toolbar groups</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea-actions</code></td>
<td class="ApiTable-desc">Action bar below textarea</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea-actions-left</code></td>
<td class="ApiTable-desc">Left-aligned actions</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea-action-btn</code></td>
<td class="ApiTable-desc">Action bar button</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base textarea */
.Textarea {
  display: block;
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-family: var(--ff-b);
  font-size: var(--fs-sm);
  line-height: 1.5;
  color: var(--fg);
  background: var(--bg);
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  resize: vertical;
  transition: border-color var(--dur-f), box-shadow var(--dur-f);
}

.Textarea::placeholder {
  color: var(--fg-3);
}

.Textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px oklch(60% 0.15 250 / 0.15);
}

/* Sizes */
.Textarea--sm {
  padding: var(--space-1) var(--space-2);
  font-size: var(--fs-xs);
}

.Textarea--lg {
  padding: var(--space-3) var(--space-4);
  font-size: var(--fs-base);
}

/* States */
.Textarea--error {
  border-color: oklch(55% 0.2 25);
}
.Textarea--error:focus {
  box-shadow: 0 0 0 3px oklch(55% 0.2 25 / 0.15);
}

.Textarea--success {
  border-color: oklch(55% 0.15 150);
}
.Textarea--success:focus {
  box-shadow: 0 0 0 3px oklch(55% 0.15 150 / 0.15);
}

.Textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--bg-s);
}

.Textarea[readonly] {
  background: var(--bg-s);
}

/* Resize modifiers */
.Textarea--no-resize { resize: none; }
.Textarea--resize-horizontal { resize: horizontal; }
.Textarea--autoresize { resize: none; overflow: hidden; }

/* Border radius modifiers */
.Textarea--no-top-radius { border-top-left-radius: 0; border-top-right-radius: 0; }
.Textarea--no-bottom-radius { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }

/* Wrapper */
.Textarea-wrapper {
  display: flex;
  flex-direction: column;
}

/* Toolbar */
.Textarea-toolbar {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background: var(--bg-s);
  border: 1px solid var(--bd);
  border-bottom: none;
  border-radius: var(--r-m) var(--r-m) 0 0;
}

.Textarea-toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  color: var(--fg-3);
  cursor: pointer;
  border-radius: var(--r-s);
}
.Textarea-toolbar-btn:hover {
  background: var(--bg);
  color: var(--fg);
}

.Textarea-toolbar-divider {
  width: 1px;
  height: 1rem;
  background: var(--bd);
  margin: 0 var(--space-1);
}

/* Actions bar */
.Textarea-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-3);
  background: var(--bg-s);
  border: 1px solid var(--bd);
  border-top: none;
  border-radius: 0 0 var(--r-m) var(--r-m);
}

.Textarea-actions-left {
  display: flex;
  gap: var(--space-1);
}

.Textarea-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  color: var(--fg-3);
  cursor: pointer;
}
.Textarea-action-btn:hover {
  color: var(--fg);
}

/* Footer */
.Textarea-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-1);
}

.Textarea-counter {
  font-size: var(--fs-xs);
  color: var(--fg-3);
}
```

---

## Accessibility

- Always associate textareas with labels using `for` and `id`
- Use `aria-describedby` to link helper text and error messages
- Provide clear placeholder text that disappears on focus
- Ensure error states are announced to screen readers
- Support keyboard navigation (Tab to focus, standard text editing)
- Use `aria-invalid="true"` for error states
- Include `maxlength` attribute when character limits apply
- Announce character count updates to screen readers with `aria-live="polite"`
- Ensure toolbar buttons have descriptive `title` or `aria-label` attributes

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus to/from the textarea |
| Shift + Tab | Move focus to previous element |
| Escape | Remove focus from textarea (when appropriate) |

---

## Best Practices

### Do

- ✓ **Always include a label** — Every textarea needs an associated label
- ✓ **Set appropriate rows** — Match initial height to expected input length
- ✓ **Show character limits** — Display counter when maxlength is set
- ✓ **Provide helper text** — Explain what input is expected
- ✓ **Use auto-resize for chat** — Reduces unnecessary whitespace
- ✓ **Include error messages** — Specific, actionable validation feedback

### Don't

- ✗ **Disable resize without reason** — Users may need more space
- ✗ **Use for single-line input** — Use `<input>` instead
- ✗ **Set tiny max heights** — Cramped textareas frustrate users
- ✗ **Rely on placeholder as label** — Placeholders disappear on input
- ✗ **Skip validation feedback** — Show errors inline, not just on submit
- ✗ **Use for read-only content** — Use `<div>` or `<pre>` instead
