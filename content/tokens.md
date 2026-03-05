# *Tokens*

The foundation layer. Design tokens define colors, typography, spacing, elevation, and animation — every component inherits from these primitives.

---

## Foundation

- [Colors](./tokens/colors.html) — OKLCH palette, grayscale, accent, status, semantic mapping
- [Typography](./tokens/typography.html) — Font stacks, scale, weights, line heights
- [Spacing](./tokens/spacing.html) — 4px base grid, spacing tokens

## Systems

- [Elevation](./tokens/elevation.html) — Shadow system, multi-layer composites
- [Export](./tokens/export.html) — Copy all tokens as CSS, JSON, or SCSS
- [Playground](./tokens/playground.html) — Interactive OKLCH explorer, contrast checker, scale generator

---

## Quick Reference

| Category | Token Pattern | Example |
|----------|--------------|---------|
| Colors | `--fg`, `--bg`, `--accent`, `--ok`, `--warn`, `--err` | `color: var(--fg-2)` |
| Spacing | `--space-1` through `--space-12` | `padding: var(--space-4)` |
| Typography | `--ff-b`, `--ff-d`, `--ff-m`, `--fs-*` | `font-size: var(--fs-xl)` |
| Radii | `--r-s`, `--r-m`, `--r-l`, `--r-xl`, `--r-f` | `border-radius: var(--r-m)` |
| Shadows | `--sh-s`, `--sh-m`, `--sh-l`, `--sh-xl` | `box-shadow: var(--sh-m)` |
| Animation | `--ease`, `--dur-f`, `--dur-n`, `--dur-s` | `transition: color var(--dur-n)` |
