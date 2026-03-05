# Typography

Standard's type system is built on a deliberate tension: **three fonts, each chosen for a specific emotional register**. Instrument Serif carries the weight of tradition — gravitas, authority, the feeling that words matter. Outfit is the geometric sans-serif that says clarity and modernity without trying too hard. JetBrains Mono is precision itself — every character the same width, every symbol unambiguous.

Together, they create a visual language where hierarchy isn't just size — it's *voice*.

---

## The Three Voices

```css
--ff-d: 'Instrument Serif', Georgia, serif;     /* Display */
--ff-b: 'Outfit', system-ui, sans-serif;        /* Body */
--ff-m: 'JetBrains Mono', ui-monospace, monospace; /* Mono */
```

<Preview title="Font Families">
    <div style="display: flex; flex-direction: column; gap: var(--space-6);">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Instrument Serif (Display)</small>
            <div style="font-family: var(--ff-d); font-size: 2rem; letter-spacing: -0.02em;">The quick brown fox jumps over the lazy dog.</div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Outfit (Body & UI)</small>
            <div style="font-family: var(--ff-b); font-size: 1rem;">The quick brown fox jumps over the lazy dog. Perfect for readable body text and clean UI elements.</div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">JetBrains Mono (Code)</small>
            <div style="font-family: var(--ff-m); font-size: 0.9rem; color: var(--accent);">const greeting = "Hello, World!";</div>
        </div>
    </div>
</Preview>

### Why These Three?

Most design systems pick one sans-serif and call it done. Standard uses three because each serves a fundamentally different purpose:

<Preview title="Design Philosophy">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); width: 100%;">
        <div style="background: var(--bg-s); border-radius: var(--r-m); padding: var(--space-5); border: 1px solid var(--bd-w);">
            <div style="font-family: var(--ff-d); font-size: 1.75rem; letter-spacing: -0.02em; margin-bottom: var(--space-3);">Aa</div>
            <div style="font-family: var(--ff-m); font-size: .5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); margin-bottom: var(--space-2);">Instrument Serif</div>
            <div style="font-size: .85rem; color: var(--fg-2); line-height: 1.6;">Gravitas. The serifs anchor words to the page, giving headlines the permanence of something <em>worth reading</em>. Used only at display sizes where the details sing.</div>
        </div>
        <div style="background: var(--bg-s); border-radius: var(--r-m); padding: var(--space-5); border: 1px solid var(--bd-w);">
            <div style="font-family: var(--ff-b); font-size: 1.75rem; font-weight: 500; margin-bottom: var(--space-3);">Aa</div>
            <div style="font-family: var(--ff-m); font-size: .5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); margin-bottom: var(--space-2);">Outfit</div>
            <div style="font-size: .85rem; color: var(--fg-2); line-height: 1.6;">Clarity. Geometric proportions with just enough warmth. No distracting personality — it disappears into the content, which is exactly what body text should do.</div>
        </div>
        <div style="background: var(--bg-s); border-radius: var(--r-m); padding: var(--space-5); border: 1px solid var(--bd-w);">
            <div style="font-family: var(--ff-m); font-size: 1.75rem; margin-bottom: var(--space-3);">Aa</div>
            <div style="font-family: var(--ff-m); font-size: .5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); margin-bottom: var(--space-2);">JetBrains Mono</div>
            <div style="font-size: .85rem; color: var(--fg-2); line-height: 1.6;">Precision. Monospaced for code, data, and technical labels. Every character occupies the same width — alignment is automatic, scanning is instant.</div>
        </div>
    </div>
</Preview>

---

## Font Pairing in Context

The three fonts don't just coexist — they create a visual hierarchy that guides the eye from headline to body to detail without conscious effort.

<Preview title="Fonts Working Together">
    <div style="max-width: 480px; border: 1px solid var(--bd); border-radius: var(--r-l); overflow: hidden;">
        <div style="padding: var(--space-6);">
            <div style="font-family: var(--ff-m); font-size: .5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-3);">Featured Article</div>
            <div style="font-family: var(--ff-d); font-size: 1.75rem; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: var(--space-3);">Design tokens are the <em style="color: var(--accent);">atoms</em> of visual consistency</div>
            <div style="font-family: var(--ff-b); font-size: .9rem; color: var(--fg-2); line-height: 1.6; margin-bottom: var(--space-4);">A design token is a named value — a single source of truth for a visual decision. Change the token, and every component that references it updates in concert.</div>
            <div style="display: flex; align-items: center; gap: var(--space-3);">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--accent);"></div>
                <div>
                    <div style="font-family: var(--ff-b); font-size: .8rem; font-weight: 600;">Sarah Chen</div>
                    <div style="font-family: var(--ff-m); font-size: .65rem; color: var(--fg-3);">2026-02-08 · 4 min read</div>
                </div>
            </div>
        </div>
    </div>
</Preview>

Notice the layering: **mono** for the category label (small, precise), **serif** for the headline (large, commanding), **sans** for the body (medium, readable), then **mono** again for metadata (small, data-like). Three fonts, four levels of hierarchy.

---

## Type Scale

Based on a **Major Third (1.25)** progression, tokenized as CSS custom properties. Every `font-size` in the system uses one of these tokens — no magic numbers.

| Token | Size | px | Usage |
|-------|------|-----|-------|
| `--fs-hero` | clamp(2.5rem, 8vw, 4rem) | 40–64 | Hero headlines |
| `--fs-7xl` | 2.5rem | 40 | Display |
| `--fs-6xl` | 2rem | 32 | Display small |
| `--fs-5xl` | 1.75rem | 28 | H2 section headers |
| `--fs-4xl` | 1.5rem | 24 | Large headings |
| `--fs-3xl` | 1.25rem | 20 | Section icons, large UI |
| `--fs-2xl` | 1.125rem | 18 | H3, sub-headings |
| `--fs-xl` | 1rem | 16 | Prose body, prominent text |
| `--fs-lg` | 0.9375rem | 15 | Emphasized body, component text |
| `--fs-base` | 0.875rem | 14 | Default body, form inputs |
| `--fs-md` | 0.8125rem | 13 | Compact body, code blocks |
| `--fs-sm` | 0.75rem | 12 | Small text, table captions |
| `--fs-xs` | 0.6875rem | 11 | Captions, metadata, breadcrumbs |
| `--fs-2xs` | 0.625rem | 10 | Tiny labels, counters |
| `--fs-nav` | 0.5625rem | 9 | Nav pill labels (mono, uppercase) |
| `--fs-3xs` | 0.5rem | 8 | Micro labels |

<Preview title="Type Scale">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div style="font-family: var(--ff-d); font-size: var(--fs-hero); font-weight: 400; line-height: 1; letter-spacing: -0.035em;">Hero</div>
        <div style="font-family: var(--ff-d); font-size: var(--fs-5xl); font-weight: 400; line-height: 1.25; letter-spacing: -0.02em;">Heading 2 <code style="font-size: 0.75em; color: var(--fg-3);">--fs-5xl</code></div>
        <div style="font-family: var(--ff-b); font-size: var(--fs-2xl); font-weight: 600; line-height: 1.4;">Heading 3 <code style="font-size: 0.75em; color: var(--fg-3);">--fs-2xl</code></div>
        <div style="font-family: var(--ff-b); font-size: var(--fs-xl); line-height: 1.6; color: var(--fg-2);">Body text — the quick brown fox jumps over the lazy dog. <code style="font-size: 0.75em; color: var(--fg-3);">--fs-xl</code></div>
        <div style="font-family: var(--ff-b); font-size: var(--fs-base); color: var(--fg-3); line-height: 1.5;">Default body for captions and labels. <code style="font-size: 0.75em; color: var(--fg-3);">--fs-base</code></div>
        <div style="font-family: var(--ff-m); font-size: var(--fs-md); color: var(--accent); line-height: 1.7; background: var(--bg-s); padding: var(--space-2) var(--space-3); border-radius: var(--r-s);">const code = "monospace"; <span style="font-size: 0.85em; color: var(--fg-3);">// --fs-md</span></div>
        <div style="font-family: var(--ff-m); font-size: var(--fs-nav); font-weight: 500; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-3);">Nav Label <code style="font-size: 1em; color: var(--fg-4);">--fs-nav</code></div>
    </div>
</Preview>

### Why 1.25?

A modular scale creates sizes that feel *related* rather than arbitrary. Here's what happens when you don't use one:

<Preview title="Random Sizes vs Modular Scale">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); width: 100%;">
        <div>
            <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: oklch(55% 0.2 25); margin-bottom: var(--space-3);">❌ Arbitrary sizes</div>
            <div style="background: var(--bg-s); padding: var(--space-4); border-radius: var(--r-m);">
                <div style="font-family: var(--ff-b); font-size: 2.3rem; font-weight: 600; line-height: 1.1; margin-bottom: var(--space-2);">Too big?</div>
                <div style="font-family: var(--ff-b); font-size: 1.4rem; font-weight: 600; line-height: 1.3; margin-bottom: var(--space-2);">Awkward gap</div>
                <div style="font-family: var(--ff-b); font-size: 1.05rem; color: var(--fg-2); line-height: 1.5;">Body text sits oddly beneath headings that don't relate to each other mathematically.</div>
            </div>
        </div>
        <div>
            <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: oklch(55% 0.15 150); margin-bottom: var(--space-3);">✓ Major Third (1.25)</div>
            <div style="background: var(--bg-s); padding: var(--space-4); border-radius: var(--r-m);">
                <div style="font-family: var(--ff-d); font-size: 1.953rem; font-weight: 400; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: var(--space-2);">Proportional</div>
                <div style="font-family: var(--ff-d); font-size: 1.563rem; font-weight: 400; line-height: 1.25; letter-spacing: -0.02em; margin-bottom: var(--space-2);">Each step × 1.25</div>
                <div style="font-family: var(--ff-b); font-size: 1rem; color: var(--fg-2); line-height: 1.6;">Body text relates harmonically to every heading above it. The eye perceives order.</div>
            </div>
        </div>
    </div>
</Preview>

The 1.25 ratio (Major Third) is deliberate — assertive enough to create clear hierarchy, restrained enough to avoid jarring jumps. Larger ratios (like 1.414 Augmented Fourth) work for dramatic editorial design; smaller ratios (like 1.125 Major Second) suit dense data UIs. Standard's 1.25 sits in the sweet spot for documentation and product interfaces.

---

## Vertical Rhythm

When line heights and spacing share a common unit, text across adjacent columns aligns to the same invisible grid. Standard's type system uses a **4px baseline** — every line height resolves to a multiple of 4px.

<Preview title="Baseline Rhythm">
    <div style="position: relative; width: 100%;">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; background: repeating-linear-gradient(to bottom, transparent 0, transparent 23px, oklch(from var(--accent) l c h / .08) 23px, oklch(from var(--accent) l c h / .08) 24px); z-index: 1;"></div>
        <div style="position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); padding: var(--space-4) 0;">
            <div>
                <div style="font-family: var(--ff-d); font-size: 1.75rem; line-height: 48px; letter-spacing: -0.02em;">Heading aligns</div>
                <div style="font-family: var(--ff-b); font-size: 1rem; line-height: 24px; color: var(--fg-2);">Body text snaps to the same 24px baseline grid. Each line sits on an invisible shelf, creating a calm, orderly rhythm even across columns.</div>
            </div>
            <div>
                <div style="font-family: var(--ff-b); font-size: 1rem; line-height: 24px; color: var(--fg-2);">Adjacent columns share the same grid. Notice how these lines align horizontally with the text on the left — that's the power of consistent vertical rhythm.</div>
                <div style="font-family: var(--ff-m); font-size: .8125rem; line-height: 24px; color: var(--fg-3); margin-top: 24px;">code.also.aligns()</div>
            </div>
        </div>
    </div>
</Preview>

The striped background reveals the 24px baseline grid. Headings, body text, and code all land on it. This isn't about rigid rules — it's about the subtle sense of *order* that makes a page feel polished.

---

## Font Weights

Outfit provides a range of weights. Use them intentionally to create hierarchy.

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Large display text only |
| Regular | 400 | Body text, descriptions |
| Medium | 500 | UI labels, buttons |
| Semi-Bold | 600 | Subheadings, emphasis |
| Bold | 700 | Strong emphasis |

<Preview title="Font Weights (Outfit)">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); font-size: 1.125rem; font-family: var(--ff-b);">
        <div style="font-weight: 300;">Light (300) — Large display only</div>
        <div style="font-weight: 400;">Regular (400) — Default body weight</div>
        <div style="font-weight: 500;">Medium (500) — Buttons and labels</div>
        <div style="font-weight: 600;">Semi-Bold (600) — Subheadings</div>
        <div style="font-weight: 700;">Bold (700) — Strong emphasis</div>
    </div>
</Preview>

### Instrument Serif

Instrument Serif works best at regular weight (400), with italics for emphasis.

<Preview title="Instrument Serif Styles">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); font-size: 1.5rem; font-family: var(--ff-d);">
        <div style="font-weight: 400;">Regular — Elegant display headings</div>
        <div style="font-style: italic;">Italic — <em>Beautiful</em> emphasis</div>
    </div>
</Preview>

```css
/* Weight usage */
body { font-family: var(--ff-b); font-weight: 400; }
.Button { font-weight: 500; }
h3 { font-weight: 600; }
h1, h2 { font-family: var(--ff-d); font-weight: 400; }
```

---

## Responsive Typography

The display heading uses `clamp()` for smooth scaling — no breakpoint jumps, just a continuous curve from mobile to desktop.

<Preview title="Responsive clamp() Behavior">
    <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%;">
        <div style="font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-4); margin-bottom: var(--space-1);">Simulated viewport widths</div>
        <div style="width: 320px; border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-4); overflow: hidden;">
            <div style="font-family: var(--ff-m); font-size: .5625rem; color: var(--fg-4); margin-bottom: var(--space-2);">320px — Mobile</div>
            <div style="font-family: var(--ff-d); font-size: 2.5rem; line-height: 1; letter-spacing: -0.035em;">Design</div>
        </div>
        <div style="width: 480px; border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-4); overflow: hidden;">
            <div style="font-family: var(--ff-m); font-size: .5625rem; color: var(--fg-4); margin-bottom: var(--space-2);">480px — Large mobile</div>
            <div style="font-family: var(--ff-d); font-size: 3rem; line-height: 1; letter-spacing: -0.035em;">Design</div>
        </div>
        <div style="width: 100%; border: 1px solid var(--bd); border-radius: var(--r-m); padding: var(--space-4); overflow: hidden;">
            <div style="font-family: var(--ff-m); font-size: .5625rem; color: var(--fg-4); margin-bottom: var(--space-2);">Full width — Desktop</div>
            <div style="font-family: var(--ff-d); font-size: 4rem; line-height: 1; letter-spacing: -0.035em;">Design</div>
        </div>
    </div>
</Preview>

```css
/* Scales from 2.5rem (40px) to 4rem (64px) based on viewport */
font-size: var(--fs-hero); /* clamp(2.5rem, 8vw, 4rem) */

/* Base (Mobile) */
.page-header h1 { 
  font-size: var(--fs-hero); 
}

/* Prose scales naturally with rem */
.prose { font-size: var(--fs-xl); }

/* Breakpoint-specific adjustments */
@media (min-width: 768px) {
  .prose h2 { font-size: var(--fs-5xl); }
}

@media (min-width: 1024px) {
  .prose h2 { font-size: var(--fs-6xl); }
}
```

---

## When to Use Which Font

Choosing the right font isn't about preference — it's about matching the *role* of the text to the *character* of the typeface.

<Preview title="Font Decision Guide">
    <div style="display: flex; flex-direction: column; gap: var(--space-3); width: 100%;">
        <div style="display: grid; grid-template-columns: auto 1fr auto; gap: var(--space-3); align-items: center; background: var(--bg-s); padding: var(--space-4); border-radius: 0 var(--r-m) var(--r-m) 0; border-left: 3px solid var(--accent);">
            <div style="font-family: var(--ff-d); font-size: 1.5rem; width: 48px; text-align: center;">Aa</div>
            <div>
                <div style="font-weight: 600; font-size: .9rem; margin-bottom: var(--space-1);">Instrument Serif</div>
                <div style="font-size: .8rem; color: var(--fg-3);">Page titles, hero text, section headings (H1, H2). Anywhere you need to <em>stop the eye</em>.</div>
            </div>
            <div style="font-family: var(--ff-m); font-size: .65rem; color: var(--fg-4); writing-mode: vertical-lr; transform: rotate(180deg);">DISPLAY</div>
        </div>
        <div style="display: grid; grid-template-columns: auto 1fr auto; gap: var(--space-3); align-items: center; background: var(--bg-s); padding: var(--space-4); border-radius: 0 var(--r-m) var(--r-m) 0; border-left: 3px solid var(--ok);">
            <div style="font-family: var(--ff-b); font-size: 1.5rem; font-weight: 500; width: 48px; text-align: center;">Aa</div>
            <div>
                <div style="font-weight: 600; font-size: .9rem; margin-bottom: var(--space-1);">Outfit</div>
                <div style="font-size: .8rem; color: var(--fg-3);">Body copy, buttons, labels, form fields, navigation, H3+. Anything the user <em>reads through</em>.</div>
            </div>
            <div style="font-family: var(--ff-m); font-size: .65rem; color: var(--fg-4); writing-mode: vertical-lr; transform: rotate(180deg);">BODY & UI</div>
        </div>
        <div style="display: grid; grid-template-columns: auto 1fr auto; gap: var(--space-3); align-items: center; background: var(--bg-s); padding: var(--space-4); border-radius: 0 var(--r-m) var(--r-m) 0; border-left: 3px solid var(--warn);">
            <div style="font-family: var(--ff-m); font-size: 1.5rem; width: 48px; text-align: center;">Aa</div>
            <div>
                <div style="font-weight: 600; font-size: .9rem; margin-bottom: var(--space-1);">JetBrains Mono</div>
                <div style="font-size: .8rem; color: var(--fg-3);">Code, data, timestamps, nav labels, technical metadata. Anything that benefits from <em>fixed-width precision</em>.</div>
            </div>
            <div style="font-family: var(--ff-m); font-size: .65rem; color: var(--fg-4); writing-mode: vertical-lr; transform: rotate(180deg);">CODE & DATA</div>
        </div>
    </div>
</Preview>

**The rule of thumb:** If it's a *statement*, use serif. If it's *communication*, use sans. If it's *data*, use mono.

---

## Line Height

Proper leading improves readability. Tighter for headings, looser for body text.

| Context | Line Height | Ratio |
|---------|-------------|-------|
| Display/H1 | 1.0 – 1.1 | Tight |
| H2 | 1.25 | Snug |
| H3/UI | 1.4 | Normal |
| Body | 1.6 – 1.7 | Relaxed |
| Long-form | 1.7 | Loose |

<Preview title="Line Height Comparison">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); width: 100%;">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">line-height: 1.1 (Display)</small>
            <div style="font-family: var(--ff-d); font-size: 1.5rem; line-height: 1.1; padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
                Tight leading for serif headlines keeps them compact and impactful
            </div>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">line-height: 1.6 (Body)</small>
            <div style="font-family: var(--ff-b); font-size: 1rem; line-height: 1.6; padding: var(--space-3); background: var(--bg-s); border-radius: var(--r-m);">
                Relaxed leading for body text improves readability over multiple lines of content
            </div>
        </div>
    </div>
</Preview>

```css
/* Line heights */
.page-header h1 { line-height: 1; }
.prose h2 { line-height: 1.25; }
h3 { line-height: 1.4; }
body, p { line-height: 1.6; }
.prose { line-height: 1.7; }
```

---

## Letter Spacing

Subtle tracking adjustments improve legibility at extreme sizes. Large text needs tightening (characters drift apart optically); small uppercase text needs loosening (characters crowd).

| Context | Letter Spacing | When |
|---------|----------------|------|
| Display | -0.035em | Large serif headings |
| Headings | -0.02em | Section titles |
| Normal | 0 | Body text |
| Labels | 0.03em – 0.06em | Uppercase, monospace labels |

<Preview title="Letter Spacing">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div>
            <small style="color: var(--fg-3);">-0.035em (Display)</small>
            <div style="font-family: var(--ff-d); font-size: 2.5rem; letter-spacing: -0.035em;">Tight Serif Tracking</div>
        </div>
        <div>
            <small style="color: var(--fg-3);">0 (Default)</small>
            <div style="font-family: var(--ff-b); font-size: 1rem;">Normal body text with default letter spacing.</div>
        </div>
        <div>
            <small style="color: var(--fg-3);">0.06em (Labels)</small>
            <div style="font-family: var(--ff-m); font-size: 0.625rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3);">Section Label</div>
        </div>
    </div>
</Preview>

```css
/* Letter spacing */
.page-header h1 { letter-spacing: -0.035em; }
.prose h2 { letter-spacing: -0.02em; }
.fnav-btn { letter-spacing: 0.06em; text-transform: uppercase; }
```

---

## Text Colors

Use semantic color tokens for consistent hierarchy.

<Preview title="Text Hierarchy">
    <div style="display: flex; flex-direction: column; gap: var(--space-3);">
        <div style="color: var(--fg); font-size: 1.25rem; font-weight: 600;">--fg — Headlines & primary text</div>
        <div style="color: var(--fg-2);">--fg-2 — Body text, descriptions</div>
        <div style="color: var(--fg-3);">--fg-3 — Captions, placeholders</div>
        <div style="color: var(--fg-4);">--fg-4 — Disabled, decorative</div>
        <div style="color: var(--accent);">--accent — Links and interactive elements</div>
        <div style="color: var(--ok);">--ok — Success messages</div>
        <div style="color: var(--err);">--err — Error messages</div>
    </div>
</Preview>

```css
/* Text colors */
.text-primary { color: var(--fg); }
.text-secondary { color: var(--fg-2); }
.text-muted { color: var(--fg-3); }
.text-accent { color: var(--accent); }
.text-success { color: var(--ok); }
.text-error { color: var(--err); }
```

---

## Heading Styles

Complete heading definitions matching the Library aesthetic.

<Preview title="Heading Definitions">
    <div style="display: flex; flex-direction: column; gap: var(--space-6);">
        <div>
            <div style="font-family: var(--ff-d); font-size: var(--fs-hero); font-weight: 400; line-height: 1; letter-spacing: -0.035em;">Page Title</div>
            <code style="font-size: 0.75em; color: var(--fg-3);">Display: --ff-d / --fs-hero / 400 / 1 / -0.035em</code>
        </div>
        <div>
            <h2 style="font-family: var(--ff-d); font-size: var(--fs-5xl); font-weight: 400; line-height: 1.25; letter-spacing: -0.02em; margin: 0;">Section Header</h2>
            <code style="font-size: 0.75em; color: var(--fg-3);">H2: --ff-d / --fs-5xl / 400 / 1.25 / -0.02em</code>
        </div>
        <div>
            <h3 style="font-family: var(--ff-b); font-size: var(--fs-2xl); font-weight: 600; line-height: 1.4; margin: 0;">Subsection</h3>
            <code style="font-size: 0.75em; color: var(--fg-3);">H3: --ff-b / --fs-2xl / 600 / 1.4 / 0</code>
        </div>
    </div>
</Preview>

```css
.page-header h1 {
  font-family: var(--ff-d);
  font-size: var(--fs-hero);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.035em;
}

.page-header h1 em {
  font-style: italic;
  color: var(--accent);
}

.prose h2 {
  font-family: var(--ff-d);
  font-size: var(--fs-5xl);
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: var(--space-10) 0 var(--space-4);
}

.prose h3 {
  font-family: var(--ff-b);
  font-size: var(--fs-2xl);
  font-weight: 600;
  line-height: 1.4;
  margin: var(--space-8) 0 var(--space-3);
}
```

---

## Prose Styles

Optimized typography for long-form reading.

<Preview title="Prose Example">
    <div class="prose" style="max-width: 65ch;">
        <p style="margin-bottom: var(--space-4); line-height: 1.7; color: var(--fg-2);">Good typography is invisible. When type is well-set, the reader doesn't notice the mechanics — they simply absorb the content. This is the goal of Standard's typography system.</p>
        <p style="margin-bottom: var(--space-4); line-height: 1.7; color: var(--fg-2);">The <strong style="font-weight: 600; color: var(--fg);">measure</strong> (line length) is kept between 45-75 characters for optimal readability. Combined with generous <em>line-height</em> and proper spacing between paragraphs, long-form content becomes effortless to read.</p>
        <p style="line-height: 1.7; color: var(--fg-2);">Notice how your eye flows naturally from line to line without strain.</p>
    </div>
</Preview>

```css
.prose {
  font-size: var(--fs-xl);
  line-height: 1.7;
  color: var(--fg-2);
  max-width: 65ch; /* Optimal line length */
}

.prose p {
  margin-bottom: var(--space-4);
}

.prose strong {
  font-weight: 600;
  color: var(--fg);
}

.prose code:not([class*="language-"]) {
  font-family: var(--ff-m);
  font-size: 0.875em;  /* Relative to parent — stays as em */
  padding: 2px 6px;
  background: var(--bg-m);
  border-radius: var(--r-s);
  color: var(--accent);
}
```

---

## Code Typography

JetBrains Mono styles for code blocks and inline code.

<Preview title="Code Styles">
    <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Inline Code</small>
            <p style="font-family: var(--ff-b);">Use the <code style="font-family: var(--ff-m); font-size: 0.875em; padding: 2px 6px; background: var(--bg-m); border-radius: var(--r-s); color: var(--accent);">var(--space-4)</code> token for standard spacing.</p>
        </div>
        <div>
            <small style="color: var(--fg-3); display: block; margin-bottom: var(--space-2);">Code Block</small>
            <pre style="font-family: var(--ff-m); font-size: 0.8125rem; line-height: 1.7; background: var(--g950); color: var(--g100); padding: var(--space-4); border-radius: var(--r-l); overflow-x: auto;"><code>function greet(name) {
  return `Hello, ${name}!`;
}</code></pre>
        </div>
    </div>
</Preview>

```css
code:not([class*="language-"]) {
  font-family: var(--ff-m);
  font-size: 0.875em;  /* Relative to parent */
  padding: 2px 6px;
  background: var(--bg-m);
  border-radius: var(--r-s);
  color: var(--accent);
}

pre[class*="language-"] {
  font-family: var(--ff-m);
  font-size: var(--fs-md);
  line-height: 1.7;
  background: var(--g950);
  border: 1px solid var(--g800);
  border-radius: var(--r-l);
  padding: var(--space-4);
}
```

---

## Navigation Typography

The floating pill nav uses monospace labels with wide tracking.

<Preview title="Nav Label Style">
    <div style="display: flex; gap: var(--space-4); align-items: center;">
        <span style="font-family: var(--ff-m); font-size: 0.5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3);">Components</span>
        <span style="font-family: var(--ff-m); font-size: 0.5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3);">Tokens</span>
        <span style="font-family: var(--ff-m); font-size: 0.5625rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; background: var(--accent); color: white; padding: var(--space-2) var(--space-4); border-radius: var(--r-f);">Guides</span>
    </div>
</Preview>

```css
.fnav-btn {
  font-family: var(--ff-m);
  font-size: var(--fs-nav);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
```

---

## Best Practices

### Do

- ✓ **Use Instrument Serif for display** — Large headlines, hero text
- ✓ **Use Outfit for body and UI** — Readable and clean
- ✓ **Use JetBrains Mono for code** — Clear differentiation
- ✓ **Establish clear hierarchy** — Size + font + weight guides the eye
- ✓ **Use appropriate measure** — 45-75 characters per line
- ✓ **Add breathing room** — Generous line-height for body text

### Don't

- ✗ **Mix too many sizes** — Stick to the scale
- ✗ **Use pure black text** — Use --fg (oklch-based)
- ✗ **Justify body text** — Left-align for better readability
- ✗ **Use Instrument Serif for body** — Save it for headlines
- ✗ **Forget mobile** — Test typography at small viewports
- ✗ **Over-style code** — Keep it clean and readable

---

## Quick Reference

```css
/* Font Families */
font-family: var(--ff-d);  /* Instrument Serif — Display */
font-family: var(--ff-b);  /* Outfit — Body & UI */
font-family: var(--ff-m);  /* JetBrains Mono — Code */

/* Type Scale Tokens (use these, not raw values) */
font-size: var(--fs-hero); /* clamp(2.5rem, 8vw, 4rem) — Hero */
font-size: var(--fs-7xl);  /* 2.5rem  — Display */
font-size: var(--fs-6xl);  /* 2rem    — Display small */
font-size: var(--fs-5xl);  /* 1.75rem — H2 */
font-size: var(--fs-4xl);  /* 1.5rem  — Large heading */
font-size: var(--fs-3xl);  /* 1.25rem — Section icons */
font-size: var(--fs-2xl);  /* 1.125rem — H3 */
font-size: var(--fs-xl);   /* 1rem    — Prose body */
font-size: var(--fs-lg);   /* .9375rem — Emphasized body */
font-size: var(--fs-base); /* .875rem — Default body */
font-size: var(--fs-md);   /* .8125rem — Code blocks */
font-size: var(--fs-sm);   /* .75rem  — Small text */
font-size: var(--fs-xs);   /* .6875rem — Captions */
font-size: var(--fs-2xs);  /* .625rem — Tiny labels */
font-size: var(--fs-nav);  /* .5625rem — Nav labels */
font-size: var(--fs-3xs);  /* .5rem   — Micro */

/* Weights */
font-weight: 400;  /* Regular (body, serif) */
font-weight: 500;  /* Medium (buttons) */
font-weight: 600;  /* Semi-Bold (subheads) */
font-weight: 700;  /* Bold (emphasis) */

/* Line Heights */
line-height: 1;    /* Display */
line-height: 1.25; /* Headings */
line-height: 1.4;  /* UI */
line-height: 1.6;  /* Body */
line-height: 1.7;  /* Prose/Code */

/* Letter Spacing */
letter-spacing: -0.035em; /* Display */
letter-spacing: -0.02em;  /* H2 */
letter-spacing: 0.06em;   /* Labels */
```
