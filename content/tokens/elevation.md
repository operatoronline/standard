# Elevation

Elevation creates visual hierarchy through shadow and depth. Standard uses a four-level elevation system built from multi-layer composite shadows — a key light (sharp, directional) paired with an ambient fill (soft, diffused). This dual-layer approach produces more natural, realistic depth than single-layer shadows.

Every shadow in the system adapts automatically to dark mode, where opacities increase to remain visible against dark surfaces.

---

## Elevation Scale

<Preview title="Elevation Levels">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); width: 100%; padding: var(--space-4);">
        <div style="background: var(--bg); border-radius: var(--r-l); padding: var(--space-6); box-shadow: var(--sh-s); text-align: center;">
            <div style="font-family: var(--ff-m); font-size: .75rem; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-2);">Small</div>
            <code style="font-size: .8125rem;">--sh-s</code>
            <div style="font-size: .8125rem; color: var(--fg-3); margin-top: var(--space-2);">Ground level — subtle lift</div>
        </div>
        <div style="background: var(--bg); border-radius: var(--r-l); padding: var(--space-6); box-shadow: var(--sh-m); text-align: center;">
            <div style="font-family: var(--ff-m); font-size: .75rem; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-2);">Medium</div>
            <code style="font-size: .8125rem;">--sh-m</code>
            <div style="font-size: .8125rem; color: var(--fg-3); margin-top: var(--space-2);">Raised surface — cards, panels</div>
        </div>
        <div style="background: var(--bg); border-radius: var(--r-l); padding: var(--space-6); box-shadow: var(--sh-l); text-align: center;">
            <div style="font-family: var(--ff-m); font-size: .75rem; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-2);">Large</div>
            <code style="font-size: .8125rem;">--sh-l</code>
            <div style="font-size: .8125rem; color: var(--fg-3); margin-top: var(--space-2);">Overlay — dropdowns, menus, toasts</div>
        </div>
        <div style="background: var(--bg); border-radius: var(--r-l); padding: var(--space-6); box-shadow: var(--sh-xl); text-align: center;">
            <div style="font-family: var(--ff-m); font-size: .75rem; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-2);">Extra Large</div>
            <code style="font-size: .8125rem;">--sh-xl</code>
            <div style="font-size: .8125rem; color: var(--fg-3); margin-top: var(--space-2);">Modal — dialogs, drawers, nav</div>
        </div>
    </div>
</Preview>

---

## Token Reference

| Token | Light Mode | Dark Mode | Use Case |
|-------|-----------|-----------|----------|
| `--sh-s` | `0 1px 2px / .06, 0 1px 3px / .04` | `0 1px 2px / .24, 0 2px 6px / .16` | Switch knobs, sliders, preview blocks |
| `--sh-m` | `0 2px 4px / .04, 0 4px 16px / .06` | `0 2px 4px / .20, 0 4px 16px / .24` | Elevated cards, hover states |
| `--sh-l` | `0 4px 8px / .04, 0 12px 40px / .08` | `0 4px 8px / .24, 0 12px 40px / .32` | Dropdowns, menus, tooltips, toasts |
| `--sh-xl` | `0 8px 16px / .06, 0 24px 64px / .12` | `0 8px 16px / .28, 0 24px 64px / .40` | Modals, drawers, floating nav |
| `--sh-ring` | `0 0 0 3px var(--accent-s)` | Same (accent adapts) | Focus rings on inputs, search bars |

---

## Multi-Layer Anatomy

Each elevation level is composed of two shadow layers:

<Preview title="Shadow Layers" compact="true">
    <div style="display: flex; gap: var(--space-8); align-items: flex-start; flex-wrap: wrap; width: 100%;">
        <div style="flex: 1; min-width: 200px;">
            <div style="font-family: var(--ff-m); font-size: .6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-3); margin-bottom: var(--space-3);">Key Light</div>
            <div style="background: var(--bg); border-radius: var(--r-l); padding: var(--space-5); box-shadow: 0 2px 4px oklch(0% 0 0/.08); text-align: center;">
                <div style="font-size: .8125rem; color: var(--fg-2);">Sharp, directional</div>
                <div style="font-size: .75rem; color: var(--fg-4); margin-top: var(--space-1);">Small blur, higher opacity</div>
            </div>
        </div>
        <div style="font-size: 1.5rem; color: var(--fg-4); align-self: center;">+</div>
        <div style="flex: 1; min-width: 200px;">
            <div style="font-family: var(--ff-m); font-size: .6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--fg-3); margin-bottom: var(--space-3);">Ambient Fill</div>
            <div style="background: var(--bg); border-radius: var(--r-l); padding: var(--space-5); box-shadow: 0 4px 16px oklch(0% 0 0/.06); text-align: center;">
                <div style="font-size: .8125rem; color: var(--fg-2);">Soft, diffused</div>
                <div style="font-size: .75rem; color: var(--fg-4); margin-top: var(--space-1);">Large blur, lower opacity</div>
            </div>
        </div>
        <div style="font-size: 1.5rem; color: var(--fg-4); align-self: center;">=</div>
        <div style="flex: 1; min-width: 200px;">
            <div style="font-family: var(--ff-m); font-size: .6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--accent); margin-bottom: var(--space-3);">Composite</div>
            <div style="background: var(--bg); border-radius: var(--r-l); padding: var(--space-5); box-shadow: var(--sh-m); text-align: center;">
                <div style="font-size: .8125rem; color: var(--fg-2);">Natural depth</div>
                <div style="font-size: .75rem; color: var(--fg-4); margin-top: var(--space-1);">Realistic, layered</div>
            </div>
        </div>
    </div>
</Preview>

---

## Elevation Hierarchy

Components map to elevation levels based on their relationship to the page surface:

| Level | Components | Behavior |
|-------|-----------|----------|
| **Ground** (`--sh-s`) | Switch knobs, slider thumbs, preview blocks | Resting on the surface |
| **Raised** (`--sh-m`) | Elevated cards, interactive card hover | Lifted above the surface |
| **Overlay** (`--sh-l`) | Dropdown menus, context menus, tooltips, toasts, search results | Floating above content |
| **Modal** (`--sh-xl`) | Modal dialogs, drawers, floating navigation | Blocking layer above everything |

### Border Ring Pattern

Overlay and modal-level elements use an additional `0 0 0 1px` inset ring shadow to define their edge against complex backgrounds:

```css
/* Overlay with border ring */
box-shadow: var(--sh-xl), 0 0 0 1px oklch(0% 0 0 / .06);

/* Dark mode — white ring for edge definition */
box-shadow: var(--sh-xl), 0 0 0 1px oklch(100% 0 0 / .04);
```

---

## Focus Rings

Interactive elements use `--sh-ring` for consistent focus indication:

<Preview title="Focus Ring" compact="true">
    <div style="display: flex; gap: var(--space-4); align-items: center; flex-wrap: wrap;">
        <input class="Input" type="text" placeholder="Click to focus" style="width: 200px;">
        <select class="Select" style="width: 160px;"><option>Click to focus</option></select>
    </div>
</Preview>

```css
.Input:focus {
  border-color: var(--accent);
  box-shadow: var(--sh-ring);
}
```

The ring uses `--accent-s` (accent at reduced opacity) and adapts to dark mode automatically.

---

## Dark Mode Behavior

Shadows intensify in dark mode because low-lightness backgrounds absorb subtle shadows. The system handles this automatically — shadow tokens override their opacities in `[data-theme="dark"]` and `prefers-color-scheme: dark` contexts.

**Light mode:** Opacities range from `.04` to `.12` — barely-there whispers of depth.
**Dark mode:** Opacities range from `.16` to `.40` — assertive enough to read against dark surfaces.

This isn't a multiplier — each level is tuned independently for its context.

---

## Usage Guidelines

### Do

- Use `--sh-s` for small, grounded elements (knobs, thumbs, inline cards)
- Use `--sh-m` for elevated surfaces and hover states
- Use `--sh-l` for overlays that sit above page content
- Use `--sh-xl` for modal-level UI that demands attention
- Add border rings to overlays on complex backgrounds
- Transition shadows smoothly: `transition: box-shadow var(--dur-n) var(--ease)`

### Don't

- Don't use raw `box-shadow` values — always reference tokens
- Don't skip elevation levels (e.g., ground → modal with nothing between)
- Don't combine multiple elevation tokens on one element
- Don't use elevation shadows for decorative glow effects (those are intentional, separate patterns)
