# Lemu Design Tokens

Design token files for the **Lemu** product. Every token is written under the Lemu
namespace (`--lemu-*`) — no third-party names, no page-specific names. Values are
evidence-derived from the reverse-engineered system and converted to Lemu's own
vocabulary.

## How to use

- All tokens are CSS custom properties declared on `:root`.
- Import the files in dependency order (a file references tokens from earlier files):
  1. `lemu.colors.css`
  2. `lemu.gradients.css`
  3. `lemu.spacing.css`
  4. `lemu.typography.css`
  5. `lemu.radius.css`
  6. `lemu.strokes.css`
  7. `lemu.sizes.css`
  8. `lemu.breakpoints.css`
  9. `lemu.motion.css`
  10. `lemu.elevation.css`
- Or import everything with: `@import "lemu.tokens.css";`

## Naming conventions

| Pattern | Example | Meaning |
|---|---|---|
| `--lemu-color-*` | `--lemu-color-surface-primary` | colors (page/surface/font/brand/border) |
| `--lemu-gradient-*` | `--lemu-gradient-surface-featured` | gradients (surfaces / rims / pills / offers) |
| `--lemu-space-*` | `--lemu-space-400` | the 4 px spacing ladder (050–2400) |
| `--lemu-gap-*` | `--lemu-gap-2` | gap between elements |
| `--lemu-font-*` / `--lemu-type-*` | `--lemu-font-display` | families / type scale |
| `--lemu-radius-*` | `--lemu-radius-card` | radius set |
| `--lemu-stroke-*` | `--lemu-stroke-thin` | border widths |
| `--lemu-size-*` | `--lemu-size-control-md` | fixed dimensions (controls, icons, header) |
| `--lemu-bp-*` | `--lemu-bp-md` | system breakpoints |
| `--lemu-duration-*` / `--lemu-ease-*` | `--lemu-ease-emphasized` | motion |
| `--lemu-shadow-*` | `--lemu-shadow-card-featured` | elevation / gloss |

## Semantic roles (mapped from the analyzed system)

Reusable, page-type-independent roles — used instead of page names:

| Role | Used for |
|---|---|
| `surface-primary/secondary/tertiary` | page & panel backgrounds |
| `surface-brand` | the single primary-action color |
| `surface-featured` | a highlighted/featured surface |
| `brand-*` | accent palette (lime, pink, blue, cyan, ultraviolet) |
| `font-*` | text steps (primary/secondary/muted/faint/on-brand/reverted) |
| `separator-*` | hairlines & borders |
| containers `copy/content/media/wide` | max-widths |
| `control` heights | buttons, inputs, chips |
| eases/durations | motion |

## File contents (all token values)

| Category | File |
|---|---|
| Colors | [`lemu.colors.css`](lemu.colors.css) |
| Gradients | [`lemu.gradients.css`](lemu.gradients.css) |
| Spacing & rhythm | [`lemu.spacing.css`](lemu.spacing.css) |
| Typography | [`lemu.typography.css`](lemu.typography.css) |
| Radius | [`lemu.radius.css`](lemu.radius.css) |
| Strokes (borders) | [`lemu.strokes.css`](lemu.strokes.css) |
| Sizes & dimensions | [`lemu.sizes.css`](lemu.sizes.css) |
| Breakpoints | [`lemu.breakpoints.css`](lemu.breakpoints.css) |
| Motion | [`lemu.motion.css`](lemu.motion.css) |
| Elevation & gloss | [`lemu.elevation.css`](lemu.elevation.css) |
| Combined entry point | [`lemu.tokens.css`](lemu.tokens.css) |