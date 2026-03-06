# Rating

Ratings allow users to view or provide feedback using a visual scale, typically stars.

## Basic Rating

A simple star rating display.

<Preview>
  <div class="Rating">
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph ph-star Rating-star"></i>
  </div>
</Preview>

```html
<div class="Rating">
  <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
  <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
  <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
  <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
  <i class="ph ph-star Rating-star"></i>
</div>
```

## Interactive Rating

Allow users to select a rating.

<Preview>
  <div class="Rating Rating--interactive" role="radiogroup" aria-label="Rating">
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="1 star">
      <i class="ph ph-star"></i>
    </button>
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="2 stars">
      <i class="ph ph-star"></i>
    </button>
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="3 stars">
      <i class="ph ph-star"></i>
    </button>
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="4 stars">
      <i class="ph ph-star"></i>
    </button>
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="5 stars">
      <i class="ph ph-star"></i>
    </button>
  </div>
</Preview>

```html
<div class="Rating Rating--interactive" role="radiogroup" aria-label="Rating">
  <button class="Rating-star" role="radio" aria-checked="false">
    <i class="ph ph-star"></i>
  </button>
  <!-- Repeat for each star -->
</div>
```

## Sizes

Ratings come in different sizes.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div>
      <span class="text-sm text-secondary">Small</span>
      <div class="Rating Rating--sm">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph ph-star Rating-star"></i>
        <i class="ph ph-star Rating-star"></i>
      </div>
    </div>
    <div>
      <span class="text-sm text-secondary">Default</span>
      <div class="Rating">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph ph-star Rating-star"></i>
        <i class="ph ph-star Rating-star"></i>
      </div>
    </div>
    <div>
      <span class="text-sm text-secondary">Large</span>
      <div class="Rating Rating--lg">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph ph-star Rating-star"></i>
        <i class="ph ph-star Rating-star"></i>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="Rating Rating--sm">...</div>
<div class="Rating">...</div>
<div class="Rating Rating--lg">...</div>
```

## With Count

Show the number of ratings alongside the stars.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-3);">
    <div class="Rating-display">
      <div class="Rating">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--half"></i>
      </div>
      <span class="Rating-value">4.5</span>
      <span class="Rating-count">(128 reviews)</span>
    </div>
    <div class="Rating-display">
      <div class="Rating Rating--sm">
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
        <i class="ph ph-star Rating-star"></i>
      </div>
      <span class="Rating-value Rating-value--sm">4.0</span>
    </div>
  </div>
</Preview>

```html
<div class="Rating-display">
  <div class="Rating">
    <!-- Stars -->
  </div>
  <span class="Rating-value">4.5</span>
  <span class="Rating-count">(128 reviews)</span>
</div>
```

## Half Stars

Support for half-star precision.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-3);">
    <div class="Rating">
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star-half Rating-star Rating-star--half"></i>
      <i class="ph ph-star Rating-star"></i>
      <i class="ph ph-star Rating-star"></i>
      <i class="ph ph-star Rating-star"></i>
    </div>
    <div class="Rating">
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star-half Rating-star Rating-star--half"></i>
      <i class="ph ph-star Rating-star"></i>
      <i class="ph ph-star Rating-star"></i>
    </div>
    <div class="Rating">
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
      <i class="ph-fill ph-star-half Rating-star Rating-star--half"></i>
      <i class="ph ph-star Rating-star"></i>
    </div>
  </div>
</Preview>

```html
<i class="ph-fill ph-star-half Rating-star Rating-star--half"></i>
```

## Different Icons

Use hearts, thumbs, or custom icons.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div>
      <span class="text-sm text-secondary">Hearts</span>
      <div class="Rating Rating--hearts">
        <i class="ph-fill ph-heart Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-heart Rating-star Rating-star--filled"></i>
        <i class="ph-fill ph-heart Rating-star Rating-star--filled"></i>
        <i class="ph ph-heart Rating-star"></i>
        <i class="ph ph-heart Rating-star"></i>
      </div>
    </div>
    <div>
      <span class="text-sm text-secondary">Thumbs</span>
      <div class="Rating Rating--thumbs">
        <button class="Rating-thumb Rating-thumb--up">
          <i class="ph ph-thumbs-up"></i>
          <span>42</span>
        </button>
        <button class="Rating-thumb Rating-thumb--down">
          <i class="ph ph-thumbs-down"></i>
          <span>3</span>
        </button>
      </div>
    </div>
    <div>
      <span class="text-sm text-secondary">Emoji</span>
      <div class="Rating Rating--emoji">
        <button class="Rating-emoji">😞</button>
        <button class="Rating-emoji">😐</button>
        <button class="Rating-emoji Rating-emoji--selected">🙂</button>
        <button class="Rating-emoji">😊</button>
        <button class="Rating-emoji">🤩</button>
      </div>
    </div>
  </div>
</Preview>

```html
<!-- Hearts -->
<div class="Rating Rating--hearts">
  <i class="ph-fill ph-heart Rating-star Rating-star--filled"></i>
  ...
</div>

<!-- Thumbs -->
<div class="Rating Rating--thumbs">
  <button class="Rating-thumb Rating-thumb--up">
    <i class="ph ph-thumbs-up"></i>
    <span>42</span>
  </button>
  <button class="Rating-thumb Rating-thumb--down">
    <i class="ph ph-thumbs-down"></i>
    <span>3</span>
  </button>
</div>

<!-- Emoji -->
<div class="Rating Rating--emoji">
  <button class="Rating-emoji">😞</button>
  <button class="Rating-emoji Rating-emoji--selected">🙂</button>
  ...
</div>
```

## Rating Breakdown

Show distribution of ratings.

<Preview>
  <div class="Rating-breakdown">
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">5 stars</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 65%;"></div>
      </div>
      <span class="Rating-breakdownCount">65%</span>
    </div>
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">4 stars</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 20%;"></div>
      </div>
      <span class="Rating-breakdownCount">20%</span>
    </div>
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">3 stars</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 10%;"></div>
      </div>
      <span class="Rating-breakdownCount">10%</span>
    </div>
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">2 stars</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 3%;"></div>
      </div>
      <span class="Rating-breakdownCount">3%</span>
    </div>
    <div class="Rating-breakdownRow">
      <span class="Rating-breakdownLabel">1 star</span>
      <div class="Rating-breakdownBar">
        <div class="Rating-breakdownFill" style="width: 2%;"></div>
      </div>
      <span class="Rating-breakdownCount">2%</span>
    </div>
  </div>
</Preview>

```html
<div class="Rating-breakdown">
  <div class="Rating-breakdownRow">
    <span class="Rating-breakdownLabel">5 stars</span>
    <div class="Rating-breakdownBar">
      <div class="Rating-breakdownFill" style="width: 65%;"></div>
    </div>
    <span class="Rating-breakdownCount">65%</span>
  </div>
  <!-- Repeat for each rating level -->
</div>
```

## Readonly

Display-only rating (no interaction).

<Preview>
  <div class="Rating Rating--readonly">
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph ph-star Rating-star"></i>
  </div>
</Preview>

```html
<div class="Rating Rating--readonly">
  <!-- Stars -->
</div>
```

## Disabled

Dimmed, non-interactive state.

<Preview>
  <div class="Rating Rating--disabled">
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
    <i class="ph ph-star Rating-star"></i>
    <i class="ph ph-star Rating-star"></i>
  </div>
</Preview>

```html
<div class="Rating Rating--disabled">
  <!-- Stars -->
</div>
```

## With Label

Include a text label.

<Preview>
  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    <div>
      <label class="Rating-label">How would you rate this product?</label>
      <div class="Rating Rating--interactive" role="radiogroup">
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
      </div>
    </div>
    <div>
      <label class="Rating-label">
        Your rating
        <span class="Rating-required">*</span>
      </label>
      <div class="Rating Rating--interactive" role="radiogroup">
        <button class="Rating-star Rating-star--filled" role="radio"><i class="ph-fill ph-star"></i></button>
        <button class="Rating-star Rating-star--filled" role="radio"><i class="ph-fill ph-star"></i></button>
        <button class="Rating-star Rating-star--filled" role="radio"><i class="ph-fill ph-star"></i></button>
        <button class="Rating-star Rating-star--filled" role="radio"><i class="ph-fill ph-star"></i></button>
        <button class="Rating-star" role="radio"><i class="ph ph-star"></i></button>
      </div>
      <span class="Rating-helper">4 out of 5 stars</span>
    </div>
  </div>
</Preview>

```html
<label class="Rating-label">
  Your rating
  <span class="Rating-required">*</span>
</label>
<div class="Rating Rating--interactive" role="radiogroup">
  <!-- Stars -->
</div>
<span class="Rating-helper">4 out of 5 stars</span>
```

## JavaScript

```js
// Interactive rating
document.querySelectorAll('.Rating--interactive').forEach(rating => {
  const stars = rating.querySelectorAll('.Rating-star');
  let currentRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      currentRating = index + 1;
      updateStars();
    });

    star.addEventListener('mouseenter', () => {
      highlightStars(index + 1);
    });
  });

  rating.addEventListener('mouseleave', () => {
    highlightStars(currentRating);
  });

  function updateStars() {
    stars.forEach((star, i) => {
      const icon = star.querySelector('i');
      star.setAttribute('aria-checked', i < currentRating);
      star.classList.toggle('Rating-star--filled', i < currentRating);
      icon.className = i < currentRating ? 'ph-fill ph-star' : 'ph ph-star';
    });
  }

  function highlightStars(count) {
    stars.forEach((star, i) => {
      const icon = star.querySelector('i');
      icon.className = i < count ? 'ph-fill ph-star' : 'ph ph-star';
    });
  }
});
```

---

## Common Patterns

### Product Review Card

<Preview title="Product Review">
    <div style="max-width: 400px; padding: var(--space-4); border: 1px solid var(--bd); border-radius: var(--r-m);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3);">
            <div style="font-weight: 600; font-size: 1.1rem;">Customer Reviews</div>
            <div class="Rating-display">
                <div class="Rating Rating--sm">
                    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                    <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                    <i class="ph ph-star Rating-star"></i>
                </div>
                <span class="Rating-value Rating-value--sm">4.2</span>
            </div>
        </div>
        <div style="font-size: 0.85rem; color: var(--fg-3);">Based on 1,247 reviews</div>
    </div>
</Preview>

### Feedback Form

<Preview title="Feedback Form Rating">
    <div style="max-width: 400px; padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-m);">
        <div style="font-weight: 600; margin-bottom: var(--space-3);">How was your experience?</div>
        <div class="Rating Rating--interactive" role="radiogroup" aria-label="Experience rating" style="margin-bottom: var(--space-3);">
            <button class="Rating-star Rating-star--filled" role="radio" aria-checked="true"><i class="ph-fill ph-star"></i></button>
            <button class="Rating-star Rating-star--filled" role="radio" aria-checked="true"><i class="ph-fill ph-star"></i></button>
            <button class="Rating-star Rating-star--filled" role="radio" aria-checked="true"><i class="ph-fill ph-star"></i></button>
            <button class="Rating-star Rating-star--filled" role="radio" aria-checked="true"><i class="ph-fill ph-star"></i></button>
            <button class="Rating-star" role="radio" aria-checked="false"><i class="ph ph-star"></i></button>
        </div>
        <span class="Rating-helper">4 out of 5 stars</span>
    </div>
</Preview>

### Compact List Item Rating

<Preview title="List Item with Rating">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); max-width: 350px;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-2) 0; border-bottom: 1px solid var(--bd);">
            <span style="font-weight: 500;">Wireless Headphones</span>
            <div class="Rating Rating--sm">
                <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                <i class="ph-fill ph-star-half Rating-star Rating-star--half"></i>
            </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-2) 0; border-bottom: 1px solid var(--bd);">
            <span style="font-weight: 500;">USB-C Hub</span>
            <div class="Rating Rating--sm">
                <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                <i class="ph-fill ph-star Rating-star Rating-star--filled"></i>
                <i class="ph ph-star Rating-star"></i>
                <i class="ph ph-star Rating-star"></i>
            </div>
        </div>
    </div>
</Preview>

### Quick Satisfaction Survey

<Preview title="Emoji Survey">
    <div style="text-align: center; padding: var(--space-4); background: var(--bg-s); border-radius: var(--r-m); max-width: 320px;">
        <div style="font-weight: 500; margin-bottom: var(--space-3);">How helpful was this article?</div>
        <div class="Rating Rating--emoji">
            <button class="Rating-emoji">😞</button>
            <button class="Rating-emoji">😐</button>
            <button class="Rating-emoji Rating-emoji--selected">🙂</button>
            <button class="Rating-emoji">😊</button>
            <button class="Rating-emoji">🤩</button>
        </div>
    </div>
</Preview>

---

## Customization

Override rating styling with CSS custom properties:

```css
/* Custom star colors */
.Rating {
  --rating-color-empty: oklch(80% 0.02 0);
  --rating-color-filled: oklch(65% 0.2 45);
}

.Rating-star { color: var(--rating-color-empty); }
.Rating-star--filled { color: var(--rating-color-filled); }
```

### Custom Icon Size

```css
.Rating--xl .Rating-star {
  font-size: 2.5rem;
}
```

### Brand Colors

```css
/* Use brand blue instead of gold */
.Rating--brand .Rating-star--filled {
  color: oklch(55% 0.2 260);
}

.Rating--brand .Rating--hearts .Rating-star--filled {
  color: oklch(55% 0.25 350);
}
```

### Theming

```css
[data-theme="dark"] .Rating-star {
  color: oklch(40% 0.02 0);
}

[data-theme="dark"] .Rating-star--filled {
  color: oklch(80% 0.15 80);
}
```

---

## API Reference

<table class="ApiTable">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code class="ApiTable-prop">.Rating</code></td><td class="ApiTable-desc">Base rating container</td></tr>
<tr><td><code class="ApiTable-prop">.Rating--sm</code></td><td class="ApiTable-desc">Small size variant</td></tr>
<tr><td><code class="ApiTable-prop">.Rating--lg</code></td><td class="ApiTable-desc">Large size variant</td></tr>
<tr><td><code class="ApiTable-prop">.Rating--interactive</code></td><td class="ApiTable-desc">Enables click/hover interactions</td></tr>
<tr><td><code class="ApiTable-prop">.Rating--readonly</code></td><td class="ApiTable-desc">Display-only (no pointer events)</td></tr>
<tr><td><code class="ApiTable-prop">.Rating--disabled</code></td><td class="ApiTable-desc">Dimmed, non-interactive state</td></tr>
<tr><td><code class="ApiTable-prop">.Rating--hearts</code></td><td class="ApiTable-desc">Heart icon variant (red)</td></tr>
<tr><td><code class="ApiTable-prop">.Rating--thumbs</code></td><td class="ApiTable-desc">Thumbs up/down variant</td></tr>
<tr><td><code class="ApiTable-prop">.Rating--emoji</code></td><td class="ApiTable-desc">Emoji-based rating variant</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-star</code></td><td class="ApiTable-desc">Individual star element</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-star--filled</code></td><td class="ApiTable-desc">Filled/active star</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-star--half</code></td><td class="ApiTable-desc">Half-filled star</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-display</code></td><td class="ApiTable-desc">Container for rating + value + count</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-value</code></td><td class="ApiTable-desc">Numeric rating value</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-value--sm</code></td><td class="ApiTable-desc">Small value text</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-count</code></td><td class="ApiTable-desc">Review count text</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-thumb</code></td><td class="ApiTable-desc">Thumbs button container</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-thumb--up</code></td><td class="ApiTable-desc">Thumbs up button</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-thumb--down</code></td><td class="ApiTable-desc">Thumbs down button</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-emoji</code></td><td class="ApiTable-desc">Emoji button</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-emoji--selected</code></td><td class="ApiTable-desc">Selected emoji</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-breakdown</code></td><td class="ApiTable-desc">Rating distribution container</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-breakdownRow</code></td><td class="ApiTable-desc">Single breakdown row</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-breakdownBar</code></td><td class="ApiTable-desc">Progress bar track</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-breakdownFill</code></td><td class="ApiTable-desc">Progress bar fill</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-label</code></td><td class="ApiTable-desc">Label for rating input</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-required</code></td><td class="ApiTable-desc">Required field indicator</td></tr>
<tr><td><code class="ApiTable-prop">.Rating-helper</code></td><td class="ApiTable-desc">Helper text below rating</td></tr>
</tbody>
</table>

---

## CSS Reference

```css
/* Base rating container */
.Rating {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

/* Star element */
.Rating-star {
  color: var(--bd-s);
  font-size: var(--fs-3xl);
  transition: color var(--dur-f), transform var(--dur-f);
}

.Rating-star--filled,
.Rating-star--half {
  color: oklch(75% 0.15 80);
}

/* Sizes */
.Rating--sm .Rating-star { font-size: var(--fs-xl); }
.Rating--lg .Rating-star { font-size: var(--fs-5xl); }

/* Interactive */
.Rating--interactive .Rating-star {
  cursor: pointer;
  background: none;
  border: none;
  padding: var(--space-1);
}
.Rating--interactive .Rating-star:hover {
  transform: scale(1.1);
}
.Rating--interactive .Rating-star:hover,
.Rating--interactive .Rating-star:hover ~ .Rating-star {
  color: oklch(75% 0.15 80);
}

/* Display with value */
.Rating-display {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.Rating-value {
  font-weight: 600;
  font-size: var(--text-lg);
}
.Rating-value--sm { font-size: var(--text-sm); }
.Rating-count {
  color: var(--fg-3);
  font-size: var(--text-sm);
}

/* Hearts variant */
.Rating--hearts .Rating-star--filled {
  color: oklch(60% 0.25 15);
}

/* Thumbs variant */
.Rating--thumbs {
  gap: var(--space-3);
}
.Rating-thumb {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--bd);
  border-radius: var(--radius-sm);
  background: transparent;
  cursor: pointer;
  transition: color var(--dur-f), transform var(--dur-f);
}
.Rating-thumb:hover {
  background: var(--bg-s);
}
.Rating-thumb--up:hover { color: oklch(55% 0.15 150); }
.Rating-thumb--down:hover { color: oklch(55% 0.2 25); }

/* Emoji variant */
.Rating--emoji {
  gap: var(--space-2);
}
.Rating-emoji {
  font-size: var(--fs-4xl);
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: color var(--dur-f), transform var(--dur-f);
  padding: var(--space-1);
}
.Rating-emoji:hover,
.Rating-emoji--selected {
  opacity: 1;
  transform: scale(1.2);
}

/* Breakdown */
.Rating-breakdown {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 300px;
}
.Rating-breakdownRow {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.Rating-breakdownLabel {
  font-size: var(--text-sm);
  color: var(--fg-3);
  min-width: 60px;
}
.Rating-breakdownBar {
  flex: 1;
  height: 8px;
  background: var(--bg-s);
  border-radius: var(--radius-full);
  overflow: hidden;
}
.Rating-breakdownFill {
  height: 100%;
  background: oklch(75% 0.15 80);
  border-radius: var(--radius-full);
}
.Rating-breakdownCount {
  font-size: var(--text-sm);
  color: var(--fg-3);
  min-width: 40px;
  text-align: right;
}

/* States */
.Rating--readonly { pointer-events: none; }
.Rating--disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Labels */
.Rating-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--space-1);
}
.Rating-required { color: oklch(55% 0.2 25); }
.Rating-helper {
  display: block;
  font-size: var(--text-xs);
  color: var(--fg-3);
  margin-top: var(--space-1);
}
```

---

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| `Arrow Left` / `Arrow Right` | Navigate between stars |
| `Enter` / `Space` | Select the focused star |
| `Tab` | Move focus to/from the rating group |

### Screen Reader Guidance

Use `role="radiogroup"` on the interactive container and `role="radio"` with `aria-checked` on each star button. Provide `aria-label` with the star count on each button (e.g., "3 stars").

```html
<div class="Rating Rating--interactive" role="radiogroup" aria-label="Product rating">
    <button class="Rating-star" role="radio" aria-checked="false" aria-label="1 star">
        <i class="ph ph-star"></i>
    </button>
    <!-- ... -->
</div>
```

### ARIA Attributes

- `role="radiogroup"` on the rating container
- `role="radio"` and `aria-checked` on each star button
- `aria-label` with star count on each button
- `aria-label` on the container to describe the rating purpose
- For read-only displays, use `aria-label` to convey the value (e.g., "Rated 4 out of 5 stars")
- Ensure visible focus indicators on interactive elements
- Provide sufficient color contrast for filled vs empty states

---

## Best Practices

### Do

- ✓ **Use labels with interactive ratings** — Tell users what they're rating
- ✓ **Show the numeric value** — "4.5 out of 5" alongside stars adds clarity
- ✓ **Support keyboard navigation** — Arrow keys should move between stars
- ✓ **Provide helper text** — Confirm the selection ("You rated 4 stars")
- ✓ **Use half-stars for display** — More precise representation of averages
- ✓ **Show review count** — "(128 reviews)" adds social proof and credibility

### Don't

- ✗ **Use ratings without context** — Stars alone don't communicate what's being rated
- ✗ **Allow accidental submissions** — Require confirmation for important ratings
- ✗ **Mix rating scales** — Don't use 5-star and 10-point in the same interface
- ✗ **Hide empty stars** — Always show the full scale for reference
- ✗ **Use color alone to convey state** — Filled vs empty needs shape or icon change too
- ✗ **Make stars too small on touch devices** — Minimum 44px tap targets for mobile
