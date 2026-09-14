// Colors extracted from System_design — single source of truth.
// See docs/color.md for contrast ratios and semantic usage.

export const colors = {
  page: {
    primary: '#131517',
    appBackground: '#131416',
  },

  surface: {
    tertiary: '#0f1113',
    primary: '#1c1e20',
    secondary: '#23262a',
    elevated: '#18191c',
    glass: 'rgba(15, 17, 19, 0.88)',
    brand: '#d1fe17',
    brandHover: '#c4ee0b',
    brandEdge: '#829b19',
    brandSecondary: '#ff005b',
  },

  font: {
    primary: '#e1e1e3',
    secondary: '#a1a1a5',
    muted: '#898a8b',
    faint: '#737475',
    onBrand: '#131517',
    reverted: '#060515',
    reverted80: 'rgba(6, 5, 21, 0.8)',
    reverted50: 'rgba(6, 5, 21, 0.5)',
    reverted30: 'rgba(6, 5, 21, 0.3)',
  },

  brand: {
    lime: '#d1fe17',
    limeHover: '#c4ee0b',
    limeEdge: '#829b19',
    pink: '#ff005b',
    pinkLight: '#fb398c',
    pinkDeep: '#ed1572',
    pinkMaroon: '#d1004e',
    pinkBase: '#8b006a',
    blue: '#0256fe',
    blueLight: '#245ef1',
    blueDeep: '#1544ed',
    blueOverlayA: '#1d63ef',
    blueOverlayB: '#5150d0',
    cyan: '#3c8cff',
    cyanSoft: '#9ce6f3',
    cyanGlow: '#3cd8ff',
    violet: '#853cb0',
    violetDeep: '#b02df2',
  },

  separator: {
    card: 'rgba(217, 217, 217, 0.04)',
    strong: 'rgba(255, 255, 255, 0.1)',
  },

  border: {
    soft: 'rgba(255, 255, 255, 0.04)',
    mid: 'rgba(255, 255, 255, 0.05)',
    strong: 'rgba(255, 255, 255, 0.1)',
    ghostLight: 'rgba(6, 5, 21, 0.04)',
  },

  whiteAlpha: {
    4: 'rgba(255, 255, 255, 0.04)',
    5: 'rgba(255, 255, 255, 0.05)',
    8: 'rgba(255, 255, 255, 0.08)',
    10: 'rgba(255, 255, 255, 0.1)',
    15: 'rgba(255, 255, 255, 0.15)',
    20: 'rgba(255, 255, 255, 0.2)',
    30: 'rgba(255, 255, 255, 0.3)',
    50: 'rgba(255, 255, 255, 0.5)',
    70: 'rgba(255, 255, 255, 0.7)',
  },

  blackAlpha: {
    4: 'rgba(0, 0, 0, 0.04)',
    7: 'rgba(0, 0, 0, 0.07)',
    20: 'rgba(0, 0, 0, 0.2)',
    24: 'rgba(0, 0, 0, 0.24)',
  },

  /**
   * Status palette (success/warning/danger/info).
   *
   * Sourced from the reference product, higgsfield.ai (owner-owned sibling
   * brand) — live `--hf-color-*` tokens (2026-09-12 audit). It uses the same
   * design language as System_design: blue-500 == `#0256fe` (== our
   * `brand.blue`), pink-500 == `#ff005b` (== our `brand.pink`), identical
   * spacing/radius/breakpoint/type ladders. Values are namespaced here as the
   * single source of truth; rename `brand.blue`-style, never alter hex.
   *
   * `fg`  = the "X-500/600" main tone (borders, glows, strong states).
   * `fgSoft` = the bright "X-400/500" tone used for TEXT on dark surfaces
   *            (`semantic-colors.ts` points text roles at the AA-passing one;
   *            see docs/color.md §Status for the verified ratios).
   * `bg`  = dark tint for status chips/banners.
   * `glow`= saturated accent for status glows.
   */
  status: {
    danger: {
      fg: '#fa0019', // red-600 (border-danger, error fg)
      fgSoft: '#ff5462', // red-500 (error text/soft fg)
      bg: '#5c000f', // red-1000 error bg
      glow: '#ff1f2e', // red-glow
    },
    warning: {
      fg: '#dfab01', // yellow-700 (text-warning)
      fgSoft: '#ffef33', // yellow-500 (warning soft fg)
      bg: '#523f00', // yellow-1100 warning bg
      glow: '#fff05a', // yellow-glow
    },
    success: {
      fg: '#2eb844', // green-500 (border-success)
      fgSoft: '#4ee466', // green-400 (success text/soft fg)
      bg: '#0d4a17', // green-800 success bg
      glow: '#00e62e', // green-glow
    },
    info: {
      fg: '#0256fe', // blue-500 (== our brand.blue; info anchors)
      fgSoft: '#5b91fe', // blue-400 (info text/soft fg)
      bg: '#000d26', // blue-1100 info bg
      glow: '#3cd8ff', // cyan glow (matches existing brand.cyanGlow)
    },
  },

  /** Product is dark-only per System_design. No light theme exists. */
  theme: 'dark',
} as const;

export type ColorToken = typeof colors;
