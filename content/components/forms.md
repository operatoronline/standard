# Forms

Forms allow users to enter data and interact with the system. Standard provides a complete set of form controls including inputs, textareas, selects, checkboxes, radio buttons, switches, and file uploads — all with built-in validation states and accessibility.

<Hero>
<!-- stats: 7 Controls, 3 Sizes, Validation -->
<div style="display:flex;flex-direction:column;gap:12px;min-width:240px;max-width:280px">
    <div class="FormField">
        <label class="FormField-label">Email</label>
        <input type="email" class="Input" placeholder="you@example.com" style="pointer-events:none">
    </div>
    <div style="display:flex;gap:12px;align-items:center">
        <label class="Checkbox"><input type="checkbox" checked><span class="Checkbox-box"></span><span>Remember me</span></label>
        <label class="Switch"><input type="checkbox" checked><span class="Switch-slider"></span></label>
    </div>
</div>
</Hero>

---

## Installation

Copy the form CSS from `styles/docs.css` or include the Standard stylesheet:

```html
<link rel="stylesheet" href="standard.min.css">
```

Then use form classes in your HTML:

```html
<div class="FormField">
    <label class="FormField-label" for="email">Email</label>
    <input type="email" id="email" class="Input" placeholder="you@example.com">
</div>
```

---

## Usage

The base `.Input` class provides core input styling. Wrap inputs in `.FormField` for proper labeling and spacing.

<Preview>
<div class="FormField" style="max-width: 320px;">
    <label class="FormField-label" for="demo-input">Username</label>
    <input type="text" id="demo-input" class="Input" placeholder="Enter username">
</div>
</Preview>

---

## Input Variants

### Sizes

Inputs come in three sizes: small, medium (default), and large.

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 320px;">
    <input type="text" class="Input Input--small" placeholder="Small">
    <input type="text" class="Input" placeholder="Medium (default)">
    <input type="text" class="Input Input--large" placeholder="Large">
</div>
</Preview>

### With Icons

Add leading or trailing icons for visual context.

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 320px;">
    <div class="Input-wrapper">
        <i class="ph ph-magnifying-glass Input-icon"></i>
        <input type="text" class="Input Input--withIcon" placeholder="Search...">
    </div>
    <div class="Input-wrapper">
        <input type="email" class="Input Input--withIconTrailing" placeholder="Enter email">
        <i class="ph ph-envelope Input-icon Input-icon--trailing"></i>
    </div>
</div>
</Preview>

### With Button

Common pattern for search or subscribe fields.

<Preview>
<div class="Input-group" style="max-width: 400px;">
    <input type="text" class="Input Input--grouped" placeholder="Search documentation...">
    <button class="Button Button--primary">Search</button>
</div>
</Preview>

### Password with Toggle

Toggle password visibility for user convenience.

<Preview>
<div class="FormField" style="max-width: 320px;">
    <label class="FormField-label" for="pw-demo">Password</label>
    <div class="Input-wrapper">
        <input type="password" id="pw-demo" class="Input Input--withIconTrailing" placeholder="Enter password">
        <button type="button" class="Input-toggle" aria-label="Toggle password visibility" data-action="toggle-password">
            <i class="ph ph-eye"></i>
        </button>
    </div>
</div>
</Preview>

---

## States

### Validation States

Visual feedback for different input states.

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 320px;">
    <div class="FormField">
        <label class="FormField-label">Default</label>
        <input type="text" class="Input" value="Normal input">
    </div>
    <div class="FormField FormField--error">
        <label class="FormField-label">Error</label>
        <input type="text" class="Input Input--error" value="Invalid value">
        <span class="FormField-message FormField-message--error">
            <i class="ph ph-warning-circle"></i>
            This field is required
        </span>
    </div>
    <div class="FormField FormField--success">
        <label class="FormField-label">Success</label>
        <input type="text" class="Input Input--success" value="Valid input">
        <span class="FormField-message FormField-message--success">
            <i class="ph ph-check-circle"></i>
            Looks good!
        </span>
    </div>
    <div class="FormField">
        <label class="FormField-label">Disabled</label>
        <input type="text" class="Input" value="Cannot edit" disabled>
    </div>
</div>
</Preview>

### Helper Text & Character Count

Provide additional context or show remaining characters.

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 320px;">
    <div class="FormField">
        <label class="FormField-label" for="helper-demo">Email Address</label>
        <input type="email" id="helper-demo" class="Input" placeholder="you@example.com">
        <span class="FormField-helper">We'll never share your email.</span>
    </div>
    <div class="FormField">
        <label class="FormField-label" for="count-demo">Bio</label>
        <input type="text" id="count-demo" class="Input" placeholder="Tell us about yourself" maxlength="100">
        <div class="FormField-footer">
            <span class="FormField-helper">Brief description</span>
            <span class="FormField-count">0/100</span>
        </div>
    </div>
</div>
</Preview>

### Required Fields

Indicate required fields with an asterisk.

<Preview>
<div class="FormField" style="max-width: 320px;">
    <label class="FormField-label FormField-label--required" for="req-demo">Email</label>
    <input type="email" id="req-demo" class="Input" placeholder="you@example.com" required>
</div>
</Preview>

---

## Textarea

Multi-line text input for longer content.

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-4); max-width: 400px;">
    <div class="FormField">
        <label class="FormField-label" for="ta-basic">Description</label>
        <textarea id="ta-basic" class="Textarea" placeholder="Enter a detailed description..." rows="4"></textarea>
    </div>
    <div class="FormField">
        <label class="FormField-label" for="ta-count">Bio</label>
        <textarea id="ta-count" class="Textarea" placeholder="Tell us about yourself..." rows="3" maxlength="280"></textarea>
        <div class="FormField-footer">
            <span class="FormField-helper">Brief description for your profile</span>
            <span class="FormField-count">0/280</span>
        </div>
    </div>
</div>
</Preview>

---

## Select

Dropdown for choosing from predefined options.

<Preview>
<div class="FormField" style="max-width: 320px;">
    <label class="FormField-label" for="select-demo">Country</label>
    <select id="select-demo" class="Select">
        <option value="">Choose a country...</option>
        <option>United States</option>
        <option>Canada</option>
        <option>United Kingdom</option>
        <option>Australia</option>
        <option>Germany</option>
    </select>
</div>
</Preview>

---

## Checkbox

For binary choices or multiple selections.

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-3);">
    <label class="Checkbox">
        <input type="checkbox" class="Checkbox-input">
        <span class="Checkbox-box"></span>
        <span class="Checkbox-label">Remember me</span>
    </label>
    <label class="Checkbox">
        <input type="checkbox" class="Checkbox-input" checked>
        <span class="Checkbox-box"></span>
        <span class="Checkbox-label">Receive notifications</span>
    </label>
    <label class="Checkbox Checkbox--disabled">
        <input type="checkbox" class="Checkbox-input" disabled>
        <span class="Checkbox-box"></span>
        <span class="Checkbox-label">Disabled option</span>
    </label>
</div>
</Preview>

### Checkbox Group

Group related checkboxes in a fieldset.

<Preview>
<fieldset class="FormFieldset">
    <legend class="FormFieldset-legend">Interests</legend>
    <div class="CheckboxGroup">
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input" name="interests" value="design">
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">Design</span>
        </label>
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input" name="interests" value="development" checked>
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">Development</span>
        </label>
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input" name="interests" value="marketing">
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">Marketing</span>
        </label>
    </div>
</fieldset>
</Preview>

### Indeterminate State

For "select all" patterns where some items are selected.

<Preview>
<div style="max-width: 300px;">
    <label class="Checkbox" style="margin-bottom: var(--space-3); border-bottom: 1px solid var(--bd); padding-bottom: var(--space-3);">
        <input type="checkbox" class="Checkbox-input Checkbox-input--indeterminate">
        <span class="Checkbox-box Checkbox-box--indeterminate"></span>
        <span class="Checkbox-label" style="font-weight: 500;">Select All Files</span>
    </label>
    <div style="padding-left: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3);">
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input" checked>
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">document.pdf</span>
        </label>
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input">
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">image.png</span>
        </label>
        <label class="Checkbox">
            <input type="checkbox" class="Checkbox-input" checked>
            <span class="Checkbox-box"></span>
            <span class="Checkbox-label">spreadsheet.xlsx</span>
        </label>
    </div>
</div>
</Preview>

---

## Radio Buttons

For single selection from a list of options.

<Preview>
<fieldset class="FormFieldset">
    <legend class="FormFieldset-legend">Plan</legend>
    <div class="RadioGroup">
        <label class="Radio">
            <input type="radio" class="Radio-input" name="plan" value="free">
            <span class="Radio-circle"></span>
            <span class="Radio-label">Free</span>
        </label>
        <label class="Radio">
            <input type="radio" class="Radio-input" name="plan" value="pro" checked>
            <span class="Radio-circle"></span>
            <span class="Radio-label">Pro</span>
        </label>
        <label class="Radio">
            <input type="radio" class="Radio-input" name="plan" value="enterprise">
            <span class="Radio-circle"></span>
            <span class="Radio-label">Enterprise</span>
        </label>
    </div>
</fieldset>
</Preview>

### Radio Cards

Richer radio selection with descriptions and prices.

<Preview>
<div class="RadioCardGroup" style="max-width: 400px;">
    <label class="RadioCard">
        <input type="radio" name="tier" value="starter" class="RadioCard-input">
        <div class="RadioCard-content">
            <div class="RadioCard-header">
                <span class="RadioCard-title">Starter</span>
                <span class="RadioCard-price">$9/mo</span>
            </div>
            <p class="RadioCard-description">Perfect for individuals and small projects.</p>
        </div>
    </label>
    <label class="RadioCard RadioCard--selected">
        <input type="radio" name="tier" value="pro" class="RadioCard-input" checked>
        <div class="RadioCard-content">
            <div class="RadioCard-header">
                <span class="RadioCard-title">Pro</span>
                <span class="RadioCard-price">$29/mo</span>
            </div>
            <p class="RadioCard-description">For growing teams with advanced needs.</p>
        </div>
    </label>
    <label class="RadioCard">
        <input type="radio" name="tier" value="enterprise" class="RadioCard-input">
        <div class="RadioCard-content">
            <div class="RadioCard-header">
                <span class="RadioCard-title">Enterprise</span>
                <span class="RadioCard-price">Custom</span>
            </div>
            <p class="RadioCard-description">Dedicated support and custom integrations.</p>
        </div>
    </label>
</div>
</Preview>

---

## Switch

Toggle switches for on/off settings.

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <label class="Switch">
        <input type="checkbox" class="Switch-input">
        <span class="Switch-track"></span>
        <span class="Switch-label">Enable notifications</span>
    </label>
    <label class="Switch">
        <input type="checkbox" class="Switch-input" checked>
        <span class="Switch-track"></span>
        <span class="Switch-label">Dark mode</span>
    </label>
    <label class="Switch Switch--disabled">
        <input type="checkbox" class="Switch-input" disabled>
        <span class="Switch-track"></span>
        <span class="Switch-label">Disabled switch</span>
    </label>
</div>
</Preview>

### Switch with Description

For settings that need more context.

<Preview>
<div style="max-width: 400px;">
    <label class="Switch Switch--block">
        <div class="Switch-content">
            <span class="Switch-label">Email notifications</span>
            <span class="Switch-description">Receive email updates about your account activity</span>
        </div>
        <input type="checkbox" class="Switch-input" checked>
        <span class="Switch-track"></span>
    </label>
</div>
</Preview>

### Switch Sizes

<Preview>
<div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <label class="Switch Switch--small">
        <input type="checkbox" class="Switch-input" checked>
        <span class="Switch-track"></span>
        <span class="Switch-label">Small</span>
    </label>
    <label class="Switch">
        <input type="checkbox" class="Switch-input" checked>
        <span class="Switch-track"></span>
        <span class="Switch-label">Medium (default)</span>
    </label>
    <label class="Switch Switch--large">
        <input type="checkbox" class="Switch-input" checked>
        <span class="Switch-track"></span>
        <span class="Switch-label">Large</span>
    </label>
</div>
</Preview>

---

## File Upload

File input with drag-and-drop support.

<Preview>
<div class="FormField" style="max-width: 400px;">
    <label class="FormField-label">Attachment</label>
    <div class="FileInput">
        <input type="file" class="FileInput-input" id="file-demo">
        <label for="file-demo" class="FileInput-label">
            <i class="ph ph-upload-simple FileInput-icon"></i>
            <span class="FileInput-text">Choose file or drag here</span>
            <span class="FileInput-hint">PNG, JPG up to 10MB</span>
        </label>
    </div>
</div>
</Preview>

### File Upload with Preview

Show a preview thumbnail alongside the upload button.

<Preview>
<div class="FormField" style="max-width: 400px;">
    <label class="FormField-label">Profile Photo</label>
    <div class="FileInput FileInput--with-preview">
        <div class="FileInput-preview">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=upload" alt="Preview" class="FileInput-image" loading="lazy" decoding="async">
        </div>
        <div class="FileInput-content">
            <input type="file" class="FileInput-input" id="file-preview-demo" accept="image/*">
            <label for="file-preview-demo" class="Button Button--secondary Button--small">
                <i class="ph ph-upload-simple Button-icon"></i>
                Change Photo
            </label>
            <span class="FileInput-hint">JPG, PNG or GIF. Max 2MB.</span>
        </div>
    </div>
</div>
</Preview>

### Multiple File Upload

Upload multiple files with a file list display.

<Preview>
<div class="FormField" style="max-width: 400px;">
    <label class="FormField-label">Documents</label>
    <div class="FileInput FileInput--multiple">
        <input type="file" class="FileInput-input" id="file-multi-demo" multiple>
        <label for="file-multi-demo" class="FileInput-label">
            <i class="ph ph-files FileInput-icon"></i>
            <span class="FileInput-text">Drop files here or click to browse</span>
            <span class="FileInput-hint">Upload multiple files at once</span>
        </label>
    </div>
    <div class="FileInput-list" style="margin-top: var(--space-3);">
        <div class="FileInput-item">
            <i class="ph ph-file-pdf FileInput-item-icon" style="color: oklch(55% 0.2 25);"></i>
            <span class="FileInput-item-name">document.pdf</span>
            <span class="FileInput-item-size">2.4 MB</span>
            <button class="Button Button--icon Button--ghost Button--small" aria-label="Remove file">
                <i class="ph ph-x"></i>
            </button>
        </div>
        <div class="FileInput-item">
            <i class="ph ph-file-image FileInput-item-icon" style="color: oklch(55% 0.15 150);"></i>
            <span class="FileInput-item-name">photo.jpg</span>
            <span class="FileInput-item-size">1.1 MB</span>
            <button class="Button Button--icon Button--ghost Button--small" aria-label="Remove file">
                <i class="ph ph-x"></i>
            </button>
        </div>
    </div>
</div>
</Preview>

---

## Form Layouts

### Stacked Form (Default)

Vertical layout with labels above inputs.

<Preview>
<form style="max-width: 400px; display: flex; flex-direction: column; gap: var(--space-4);">
    <div class="FormField">
        <label class="FormField-label FormField-label--required">Full Name</label>
        <input type="text" class="Input" placeholder="John Doe">
    </div>
    <div class="FormField">
        <label class="FormField-label FormField-label--required">Email</label>
        <input type="email" class="Input" placeholder="john@example.com">
    </div>
    <div class="FormField">
        <label class="FormField-label">Company</label>
        <input type="text" class="Input" placeholder="Acme Inc">
    </div>
    <label class="Checkbox">
        <input type="checkbox" class="Checkbox-input">
        <span class="Checkbox-box"></span>
        <span class="Checkbox-label">Subscribe to newsletter</span>
    </label>
    <button type="submit" class="Button Button--primary Button--block">Submit</button>
</form>
</Preview>

### Inline Form

Horizontal layout for compact forms like newsletter signups.

<Preview>
<form class="FormInline">
    <div class="FormField" style="flex: 1;">
        <input type="email" class="Input" placeholder="Enter your email">
    </div>
    <button type="submit" class="Button Button--primary">Subscribe</button>
</form>
</Preview>

### Two-Column Form

Side-by-side fields for related data.

<Preview>
<form style="max-width: 500px;">
    <div class="FormRow">
        <div class="FormField">
            <label class="FormField-label">First Name</label>
            <input type="text" class="Input" placeholder="John">
        </div>
        <div class="FormField">
            <label class="FormField-label">Last Name</label>
            <input type="text" class="Input" placeholder="Doe">
        </div>
    </div>
    <div class="FormField" style="margin-top: var(--space-4);">
        <label class="FormField-label">Email</label>
        <input type="email" class="Input" placeholder="john.doe@example.com">
    </div>
</form>
</Preview>

---

## Common Patterns

### Login Form

<Preview>
<div class="Card" style="max-width: 400px; margin: 0 auto;">
    <div class="Card-body">
        <div style="text-align: center; margin-bottom: var(--space-6);">
            <h3 style="margin: 0 0 var(--space-2);">Welcome back</h3>
            <p style="color: var(--fg-3); margin: 0; font-size: 0.9rem;">Sign in to your account</p>
        </div>
        <form style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div class="FormField">
                <label class="FormField-label FormField-label--required">Email</label>
                <div class="Input-wrapper">
                    <i class="ph ph-envelope Input-icon"></i>
                    <input type="email" class="Input Input--withIcon" placeholder="you@example.com">
                </div>
            </div>
            <div class="FormField">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <label class="FormField-label FormField-label--required">Password</label>
                    <a href="#" class="Link" style="font-size: 0.8rem;">Forgot password?</a>
                </div>
                <div class="Input-wrapper">
                    <input type="password" class="Input Input--withIconTrailing" placeholder="••••••••">
                    <button type="button" class="Input-toggle" aria-label="Show password">
                        <i class="ph ph-eye"></i>
                    </button>
                </div>
            </div>
            <label class="Checkbox">
                <input type="checkbox" class="Checkbox-input">
                <span class="Checkbox-box"></span>
                <span class="Checkbox-label">Remember me for 30 days</span>
            </label>
            <button type="submit" class="Button Button--primary Button--block">Sign In</button>
        </form>
        <div style="text-align: center; margin-top: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--bd);">
            <span style="color: var(--fg-3); font-size: 0.9rem;">Don't have an account? </span>
            <a href="#" class="Link">Sign up</a>
        </div>
    </div>
</div>
</Preview>

### Signup Form

<Preview>
<div class="Card" style="max-width: 480px; margin: 0 auto;">
    <div class="Card-body">
        <div style="text-align: center; margin-bottom: var(--space-6);">
            <h3 style="margin: 0 0 var(--space-2);">Create your account</h3>
            <p style="color: var(--fg-3); margin: 0; font-size: 0.9rem;">Start your 14-day free trial</p>
        </div>
        <form style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div class="FormRow">
                <div class="FormField">
                    <label class="FormField-label FormField-label--required">First name</label>
                    <input type="text" class="Input" placeholder="John">
                </div>
                <div class="FormField">
                    <label class="FormField-label FormField-label--required">Last name</label>
                    <input type="text" class="Input" placeholder="Doe">
                </div>
            </div>
            <div class="FormField">
                <label class="FormField-label FormField-label--required">Email</label>
                <input type="email" class="Input" placeholder="john@example.com">
            </div>
            <div class="FormField">
                <label class="FormField-label FormField-label--required">Password</label>
                <input type="password" class="Input" placeholder="Create a strong password">
                <span class="FormField-helper">Must be at least 8 characters with a number and symbol</span>
            </div>
            <label class="Checkbox">
                <input type="checkbox" class="Checkbox-input">
                <span class="Checkbox-box"></span>
                <span class="Checkbox-label" style="font-size: 0.85rem;">I agree to the <a href="#" class="Link">Terms of Service</a> and <a href="#" class="Link">Privacy Policy</a></span>
            </label>
            <button type="submit" class="Button Button--primary Button--block">Create Account</button>
        </form>
    </div>
</div>
</Preview>

### Settings Form

<Preview>
<form style="max-width: 600px;">
    <fieldset class="FormFieldset" style="margin-bottom: var(--space-6);">
        <legend class="FormFieldset-legend" style="font-size: 1rem; margin-bottom: var(--space-4);">Profile Information</legend>
        <div style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div class="FormRow">
                <div class="FormField">
                    <label class="FormField-label">First name</label>
                    <input type="text" class="Input" value="Sarah">
                </div>
                <div class="FormField">
                    <label class="FormField-label">Last name</label>
                    <input type="text" class="Input" value="Chen">
                </div>
            </div>
            <div class="FormField">
                <label class="FormField-label">Email</label>
                <input type="email" class="Input" value="sarah@example.com">
            </div>
            <div class="FormField">
                <label class="FormField-label">Bio</label>
                <textarea class="Textarea" rows="3" placeholder="Tell us about yourself..."></textarea>
                <div class="FormField-footer">
                    <span class="FormField-helper">Brief description for your profile</span>
                    <span class="FormField-count">0/160</span>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset class="FormFieldset" style="margin-bottom: var(--space-6);">
        <legend class="FormFieldset-legend" style="font-size: 1rem; margin-bottom: var(--space-4);">Notifications</legend>
        <div style="display: flex; flex-direction: column; gap: var(--space-4);">
            <label class="Switch Switch--block">
                <div class="Switch-content">
                    <span class="Switch-label">Email notifications</span>
                    <span class="Switch-description">Receive emails about account activity</span>
                </div>
                <input type="checkbox" class="Switch-input" checked>
                <span class="Switch-track"></span>
            </label>
            <label class="Switch Switch--block">
                <div class="Switch-content">
                    <span class="Switch-label">Push notifications</span>
                    <span class="Switch-description">Receive push notifications on your devices</span>
                </div>
                <input type="checkbox" class="Switch-input">
                <span class="Switch-track"></span>
            </label>
        </div>
    </fieldset>
    <div style="display: flex; gap: var(--space-3); justify-content: flex-end; padding-top: var(--space-4); border-top: 1px solid var(--bd);">
        <button type="button" class="Button Button--secondary">Cancel</button>
        <button type="submit" class="Button Button--primary">Save Changes</button>
    </div>
</form>
</Preview>

### Contact Form

<Preview>
<form class="Card" style="max-width: 500px;">
    <div class="Card-header">
        <h4 class="Card-title">Get in touch</h4>
    </div>
    <div class="Card-body" style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div class="FormRow">
            <div class="FormField">
                <label class="FormField-label FormField-label--required">Name</label>
                <input type="text" class="Input" placeholder="Your name">
            </div>
            <div class="FormField">
                <label class="FormField-label FormField-label--required">Email</label>
                <input type="email" class="Input" placeholder="you@example.com">
            </div>
        </div>
        <div class="FormField">
            <label class="FormField-label FormField-label--required">Subject</label>
            <select class="Select">
                <option value="">Select a topic...</option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing Question</option>
                <option>Partnership</option>
            </select>
        </div>
        <div class="FormField">
            <label class="FormField-label FormField-label--required">Message</label>
            <textarea class="Textarea" rows="5" placeholder="How can we help?"></textarea>
        </div>
    </div>
    <div class="Card-footer">
        <button type="submit" class="Button Button--primary">
            <i class="ph ph-paper-plane-right Button-icon"></i>
            Send Message
        </button>
    </div>
</form>
</Preview>

### Form Validation

<Preview>
<form style="max-width: 400px; display: flex; flex-direction: column; gap: var(--space-4);">
    <div class="FormField FormField--error">
        <label class="FormField-label FormField-label--required">Email</label>
        <input type="email" class="Input Input--error" value="invalid-email">
        <span class="FormField-message FormField-message--error">
            <i class="ph ph-warning-circle"></i>
            Please enter a valid email address
        </span>
    </div>
    <div class="FormField FormField--success">
        <label class="FormField-label FormField-label--required">Password</label>
        <input type="password" class="Input Input--success" value="••••••••">
        <span class="FormField-message FormField-message--success">
            <i class="ph ph-check-circle"></i>
            Strong password
        </span>
    </div>
    <div class="FormField">
        <label class="FormField-label FormField-label--required">Confirm Password</label>
        <input type="password" class="Input" placeholder="Re-enter password">
    </div>
    <button type="submit" class="Button Button--primary Button--block" disabled>Create Account</button>
</form>
</Preview>

---

## Customization

Override form styles using CSS custom properties:

```css
/* Custom input styling */
.Input {
  --input-radius: var(--space-2);
  --input-border: var(--bd-s);
  --input-focus: var(--accent);
  
  border-radius: var(--input-radius);
  border-color: var(--input-border);
}

.Input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px oklch(60% 0.15 250 / 0.15);
}

/* Custom checkbox color */
.Checkbox-input:checked + .Checkbox-box {
  background-color: oklch(55% 0.2 150); /* Green */
  border-color: oklch(55% 0.2 150);
}

/* Custom switch color */
.Switch-input:checked + .Switch-track {
  background-color: oklch(55% 0.2 150);
  border-color: oklch(55% 0.2 150);
}

/* Pill-shaped inputs */
.Input--pill {
  border-radius: var(--r-f);
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

/* Custom error color */
.Input--error {
  border-color: oklch(55% 0.25 0); /* Deeper red */
}
```

---

## API Reference

### Form Field Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.FormField</code></td>
<td class="ApiTable-desc">Container for label, input, and helper text</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormField-label</code></td>
<td class="ApiTable-desc">Label styling for form fields</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormField-label--required</code></td>
<td class="ApiTable-desc">Adds asterisk to indicate required field</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormField-helper</code></td>
<td class="ApiTable-desc">Helper text below input</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormField-message</code></td>
<td class="ApiTable-desc">Validation message container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormField-message--error</code></td>
<td class="ApiTable-desc">Error message styling (red)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormField-message--success</code></td>
<td class="ApiTable-desc">Success message styling (green)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormField-footer</code></td>
<td class="ApiTable-desc">Container for helper + count</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormField-count</code></td>
<td class="ApiTable-desc">Character count display</td>
</tr>
</tbody>
</table>

### Input Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Input</code></td>
<td class="ApiTable-desc">Base input styling (required)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input--small</code></td>
<td class="ApiTable-desc">Small input size</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input--large</code></td>
<td class="ApiTable-desc">Large input size</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input--error</code></td>
<td class="ApiTable-desc">Error state (red border)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input--success</code></td>
<td class="ApiTable-desc">Success state (green border)</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input--withIcon</code></td>
<td class="ApiTable-desc">Padding for leading icon</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input--withIconTrailing</code></td>
<td class="ApiTable-desc">Padding for trailing icon</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input--grouped</code></td>
<td class="ApiTable-desc">For input + button combos</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input-wrapper</code></td>
<td class="ApiTable-desc">Container for input with icon</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input-icon</code></td>
<td class="ApiTable-desc">Icon inside input wrapper</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input-icon--trailing</code></td>
<td class="ApiTable-desc">Position icon on right</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input-toggle</code></td>
<td class="ApiTable-desc">Password visibility toggle button</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Input-group</code></td>
<td class="ApiTable-desc">Container for input + button</td>
</tr>
</tbody>
</table>

### Textarea Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Textarea</code></td>
<td class="ApiTable-desc">Base textarea styling</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Textarea--error</code></td>
<td class="ApiTable-desc">Error state (red border)</td>
</tr>
</tbody>
</table>

### Select Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Select</code></td>
<td class="ApiTable-desc">Base select/dropdown styling</td>
</tr>
</tbody>
</table>

### Checkbox Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Checkbox</code></td>
<td class="ApiTable-desc">Container for custom checkbox</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Checkbox-input</code></td>
<td class="ApiTable-desc">Hidden native checkbox</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Checkbox-box</code></td>
<td class="ApiTable-desc">Custom checkbox visual</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Checkbox-box--indeterminate</code></td>
<td class="ApiTable-desc">Indeterminate state styling</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Checkbox-label</code></td>
<td class="ApiTable-desc">Label text for checkbox</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Checkbox--disabled</code></td>
<td class="ApiTable-desc">Disabled state</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.CheckboxGroup</code></td>
<td class="ApiTable-desc">Container for multiple checkboxes</td>
</tr>
</tbody>
</table>

### Radio Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Radio</code></td>
<td class="ApiTable-desc">Container for custom radio</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Radio-input</code></td>
<td class="ApiTable-desc">Hidden native radio</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Radio-circle</code></td>
<td class="ApiTable-desc">Custom radio visual</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Radio-label</code></td>
<td class="ApiTable-desc">Label text for radio</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.RadioGroup</code></td>
<td class="ApiTable-desc">Container for radio group</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.RadioCardGroup</code></td>
<td class="ApiTable-desc">Container for radio cards</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.RadioCard</code></td>
<td class="ApiTable-desc">Rich radio option with description</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.RadioCard--selected</code></td>
<td class="ApiTable-desc">Selected radio card state</td>
</tr>
</tbody>
</table>

### Switch Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.Switch</code></td>
<td class="ApiTable-desc">Container for toggle switch</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch-input</code></td>
<td class="ApiTable-desc">Hidden native checkbox</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch-track</code></td>
<td class="ApiTable-desc">Switch track and thumb</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch-label</code></td>
<td class="ApiTable-desc">Label text for switch</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch--block</code></td>
<td class="ApiTable-desc">Full-width switch with border</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch--small</code></td>
<td class="ApiTable-desc">Small switch size</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch--large</code></td>
<td class="ApiTable-desc">Large switch size</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch--disabled</code></td>
<td class="ApiTable-desc">Disabled state</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch-content</code></td>
<td class="ApiTable-desc">Container for label + description</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.Switch-description</code></td>
<td class="ApiTable-desc">Secondary text under label</td>
</tr>
</tbody>
</table>

### File Upload Classes

<table class="ApiTable">
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="ApiTable-prop">.FileInput</code></td>
<td class="ApiTable-desc">File upload container</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FileInput-input</code></td>
<td class="ApiTable-desc">Hidden native file input</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FileInput-label</code></td>
<td class="ApiTable-desc">Styled drop zone label</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FileInput-icon</code></td>
<td class="ApiTable-desc">Upload icon</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FileInput-text</code></td>
<td class="ApiTable-desc">Main drop zone text</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FileInput-hint</code></td>
<td class="ApiTable-desc">File type/size hint</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FileInput--with-preview</code></td>
<td class="ApiTable-desc">Layout for preview thumbnail</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FileInput--multiple</code></td>
<td class="ApiTable-desc">Multiple file upload variant</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FileInput-list</code></td>
<td class="ApiTable-desc">Container for uploaded file list</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FileInput-item</code></td>
<td class="ApiTable-desc">Individual file item</td>
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
<td><code class="ApiTable-prop">.FormInline</code></td>
<td class="ApiTable-desc">Horizontal form layout</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormRow</code></td>
<td class="ApiTable-desc">Two-column grid row</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormFieldset</code></td>
<td class="ApiTable-desc">Fieldset without default styling</td>
</tr>
<tr>
<td><code class="ApiTable-prop">.FormFieldset-legend</code></td>
<td class="ApiTable-desc">Fieldset legend styling</td>
</tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Form Field */
.FormField {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.FormField-label {
  font-size: var(--fs-base);
  font-weight: 500;
  color: var(--fg);
}

.FormField-label--required::after {
  content: " *";
  color: oklch(55% 0.2 25);
}

.FormField-helper {
  font-size: var(--fs-md);
  color: var(--fg-3);
}

.FormField-message {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--fs-md);
}

.FormField-message--error {
  color: oklch(55% 0.2 25);
}

.FormField-message--success {
  color: oklch(55% 0.15 150);
}

.FormField-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.FormField-count {
  font-size: var(--fs-md);
  color: var(--fg-3);
}

/* Input */
.Input {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-lg);
  border: 1px solid var(--bd-s);
  border-radius: var(--r-s);
  background: var(--bg);
  color: var(--fg);
  transition: border-color var(--dur-f), box-shadow var(--dur-f);
}

.Input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 2px oklch(60% 0.15 250 / 0.15);
}

.Input::placeholder {
  color: var(--fg-3);
}

.Input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--bg-s);
}

/* Input Sizes */
.Input--small {
  padding: var(--space-1) var(--space-2);
  font-size: var(--fs-md);
}

.Input--large {
  padding: var(--space-3) var(--space-4);
  font-size: var(--fs-xl);
}

/* Input States */
.Input--error {
  border-color: oklch(55% 0.2 25);
}

.Input--error:focus {
  box-shadow: 0 0 0 2px oklch(55% 0.2 25 / 0.15);
}

.Input--success {
  border-color: oklch(55% 0.15 150);
}

.Input--success:focus {
  box-shadow: 0 0 0 2px oklch(55% 0.15 150 / 0.15);
}

/* Input with Icons */
.Input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.Input-icon {
  position: absolute;
  left: var(--space-3);
  color: var(--fg-3);
  pointer-events: none;
}

.Input-icon--trailing {
  left: auto;
  right: var(--space-3);
}

.Input--withIcon {
  padding-left: calc(var(--space-3) + 1.25rem + var(--space-2));
}

.Input--withIconTrailing {
  padding-right: calc(var(--space-3) + 1.25rem + var(--space-2));
}

.Input-toggle {
  position: absolute;
  right: var(--space-2);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--fg-3);
  padding: var(--space-1);
}

/* Input Group */
.Input-group {
  display: flex;
}

.Input--grouped {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}

.Input-group .Button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Textarea */
.Textarea {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-lg);
  border: 1px solid var(--bd-s);
  border-radius: var(--r-s);
  background: var(--bg);
  color: var(--fg);
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: border-color var(--dur-f), box-shadow var(--dur-f);
}

.Textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 2px oklch(60% 0.15 250 / 0.15);
}

/* Select */
.Select {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-lg);
  border: 1px solid var(--bd-s);
  border-radius: var(--r-s);
  background: var(--bg);
  color: var(--fg);
  appearance: none;
  background-image: url("data:image/svg+xml,...");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  cursor: pointer;
}

/* Checkbox */
.Checkbox {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.Checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.Checkbox-box {
  width: 18px;
  height: 18px;
  border: 2px solid var(--bd-s);
  border-radius: var(--r-s);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--dur-f), border-color var(--dur-f);
  flex-shrink: 0;
}

.Checkbox-input:checked + .Checkbox-box {
  background-color: var(--accent);
  border-color: var(--accent);
}

.Checkbox-input:focus-visible + .Checkbox-box {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.Checkbox--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.Checkbox-label {
  font-size: var(--fs-lg);
}

/* Radio */
.Radio {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.Radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.Radio-circle {
  width: 18px;
  height: 18px;
  border: 2px solid var(--bd-s);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color var(--dur-f);
  flex-shrink: 0;
}

.Radio-input:checked + .Radio-circle {
  border-color: var(--accent);
}

.Radio-input:checked + .Radio-circle::after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.RadioGroup {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* Radio Card */
.RadioCardGroup {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.RadioCard {
  display: flex;
  padding: var(--space-4);
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
  cursor: pointer;
  transition: border-color var(--dur-f), box-shadow var(--dur-f);
}

.RadioCard--selected {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}

/* Switch */
.Switch {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
}

.Switch-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.Switch-track {
  width: 40px;
  height: 22px;
  background: var(--bg-s);
  border: 1px solid var(--bd-s);
  border-radius: var(--r-m);
  position: relative;
  transition: background-color var(--dur-n), border-color var(--dur-n);
  flex-shrink: 0;
}

.Switch-track::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  top: 2px;
  left: 2px;
  transition: transform var(--dur-n);
}

.Switch-input:checked + .Switch-track {
  background: var(--accent);
  border-color: var(--accent);
}

.Switch-input:checked + .Switch-track::after {
  transform: translateX(18px);
}

.Switch--small .Switch-track { width: 32px; height: 18px; }
.Switch--large .Switch-track { width: 48px; height: 26px; }

.Switch--disabled { opacity: 0.5; cursor: not-allowed; }

.Switch--block {
  display: flex;
  justify-content: space-between;
  padding: var(--space-3);
  border: 1px solid var(--bd);
  border-radius: var(--r-m);
}

.Switch-content { display: flex; flex-direction: column; gap: var(--space-1); }
.Switch-description { font-size: var(--fs-md); color: var(--fg-3); }

/* File Input */
.FileInput {
  position: relative;
}

.FileInput-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.FileInput-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-6);
  border: 2px dashed var(--bd);
  border-radius: var(--r-m);
  cursor: pointer;
  text-align: center;
  transition: border-color var(--dur-f), background var(--dur-f);
}

.FileInput-label:hover {
  border-color: var(--accent);
  background: oklch(60% 0.15 250 / 0.05);
}

.FileInput-icon { font-size: var(--fs-4xl); color: var(--fg-3); }
.FileInput-text { font-weight: 500; }
.FileInput-hint { font-size: var(--fs-md); color: var(--fg-3); }

.FileInput-list { display: flex; flex-direction: column; gap: var(--space-2); }
.FileInput-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  border: 1px solid var(--bd);
  border-radius: var(--r-s);
}

/* Form Layouts */
.FormInline {
  display: flex;
  gap: var(--space-3);
  align-items: flex-end;
}

.FormRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.FormFieldset {
  border: none;
  padding: 0;
  margin: 0;
}

.FormFieldset-legend {
  font-weight: 600;
  margin-bottom: var(--space-3);
}
```

---

## Accessibility

### Labels

Always associate labels with inputs using `for`/`id` or by wrapping.

```html
<!-- Method 1: for/id association -->
<label for="email-field">Email</label>
<input type="email" id="email-field" class="Input">

<!-- Method 2: Wrap input in label -->
<label class="Checkbox">
    <input type="checkbox">
    <span class="Checkbox-label">Accept terms</span>
</label>
```

### Error Messages

Connect error messages to inputs with `aria-describedby`.

```html
<input 
    type="email" 
    id="email" 
    class="Input Input--error" 
    aria-invalid="true"
    aria-describedby="email-error"
>
<span id="email-error" class="FormField-message FormField-message--error">
    Please enter a valid email
</span>
```

### Required Fields

Mark required fields programmatically.

```html
<label for="name">
    Name <span aria-hidden="true">*</span>
</label>
<input type="text" id="name" required aria-required="true">
```

### Fieldsets for Groups

Use fieldsets to group related fields.

```html
<fieldset>
    <legend>Shipping Address</legend>
    <!-- Address fields -->
</fieldset>
```

### Keyboard Support

| Key | Action |
|-----|--------|
| Tab | Move focus to next field |
| Shift + Tab | Move focus to previous field |
| Space | Toggle checkbox/switch, select radio |
| Arrow keys | Navigate between radio options |
| Enter | Submit form (when on button) |

---

## Best Practices

### Do

- ✓ **Use clear, descriptive labels** — "Email address" not "Input 1"
- ✓ **Group related fields** — Use fieldsets for address, payment info
- ✓ **Show validation inline** — Error messages next to the field
- ✓ **Indicate required fields** — Asterisk or "(required)" text
- ✓ **Provide helper text** — Format hints, password requirements
- ✓ **Use appropriate input types** — `type="email"`, `type="tel"`, etc.
- ✓ **Size touch targets** — Minimum 44px for mobile

### Don't

- ✗ **Use placeholder as label** — Placeholders disappear on focus
- ✗ **Disable submit without explanation** — Show why it's disabled
- ✗ **Validate on every keystroke** — Wait for blur or submit
- ✗ **Use only color for errors** — Add icons and text
- ✗ **Reset forms on error** — Preserve user input
- ✗ **Hide password requirements** — Show them upfront
