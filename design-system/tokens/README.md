# Lemmo Design Tokens

Design token files for the **Lemmo** product. Every token is written under the Lemmo
namespace (`--lemmo-*`) with backwards compatibility aliases (`--lemu-*`). No third-party names, no page-specific names. Values are
derived directly from the design system specifications.

## How to use

- All tokens are CSS custom properties declared on `:root`.
- Import the files in dependency order (a file references tokens from earlier files):
  1. `lemmo.colors.css`
  2. `lemmo.gradients.css`
  3. `lemmo.spacing.css`
  4. `lemmo.typography.css`
  5. `lemmo.radius.css`
  6. `lemmo.strokes.css`
  7. `lemmo.sizes.css`
  8. `lemmo.breakpoints.css`
  9. `lemmo.motion.css`
  10. `lemmo.elevation.css`
- Or import everything with: `@import "lemmo.tokens.css";` (or `@import "lemu.tokens.css";` for legacy projects)

## Naming conventions

| Pattern | Example | Meaning |
|---|---|---|
| `--lemmo-color-*` | `--lemmo-color-surface-primary` | colors (page/surface/font/brand/border) |
| `--lemmo-gradient-*` | `--lemmo-gradient-surface-featured` | gradients (surfaces / rims / pills / offers) |
| `--lemmo-space-*` | `--lemmo-space-400` | the 4 px spacing ladder (050–2400) |
| `--lemmo-gap-*` | `--lemmo-gap-2` | gap between elements |
| `--lemmo-font-*` / `--lemmo-type-*` | `--lemmo-font-display` | families / type scale |
| `--lemmo-radius-*` | `--lemmo-radius-card` | radius set |
| `--lemmo-stroke-*` | `--lemmo-stroke-thin` | border widths |
| `--lemmo-size-*` | `--lemmo-size-control-md` | fixed dimensions (controls, icons, header) |
| `--lemmo-bp-*` | `--lemmo-bp-md` | system breakpoints |
| `--lemmo-duration-*` / `--lemmo-ease-*` | `--lemmo-ease-emphasized` | motion |
| `--lemmo-shadow-*` | `--lemmo-shadow-card-featured` | elevation / gloss |

## File contents (all token values)

| Category | File |
|---|---|
| Colors | [`lemmo.colors.css`](lemmo.colors.css) |
| Gradients | [`lemmo.gradients.css`](lemmo.gradients.css) |
| Spacing & rhythm | [`lemmo.spacing.css`](lemmo.spacing.css) |
| Typography | [`lemmo.typography.css`](lemmo.typography.css) |
| Radius | [`lemmo.radius.css`](lemmo.radius.css) |
| Strokes (borders) | [`lemmo.strokes.css`](lemmo.strokes.css) |
| Sizes & dimensions | [`lemmo.sizes.css`](lemmo.sizes.css) |
| Breakpoints | [`lemmo.breakpoints.css`](lemmo.breakpoints.css) |
| Motion | [`lemmo.motion.css`](lemmo.motion.css) |
| Elevation & gloss | [`lemmo.elevation.css`](lemmo.elevation.css) |
| Combined entry point | [`lemmo.tokens.css`](lemmo.tokens.css) |
| TypeScript tokens | [`index.ts`](index.ts) |