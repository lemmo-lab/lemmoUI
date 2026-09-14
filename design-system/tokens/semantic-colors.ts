import { colors } from './colors';

/**
 * Semantic color roles — review-approved naming layer over the raw `colors`.
 *
 * The product is DARK-ONLY (System_design); these roles alias the raw tokens so
 * a future palette change (or a light theme, only after QA approval) never
 * touches UI code.
 *
 * Status colors: shipped now, sourced from the reference product
 * higgsfield.ai (owner-owned sibling brand, live `--hf-color-*` tokens,
 * audited 2026-09-12) — see `colors.status` and `docs/color.md` §Status.
 * `text.danger` etc. point at the AA-passing bright (soft) tone on dark.
 *
 * `interactive.primary` aliases the brand CTA accent (lime), NOT the blue
 * accent. Re-map here only with designer sign-off.
 */
export const semanticColors = {
  text: {
    primary: colors.font.primary,
    secondary: colors.font.secondary,
    muted: colors.font.muted,
    faint: colors.font.faint,
    onBrand: colors.font.onBrand,
    reverted: colors.font.reverted,
  },

  surface: {
    primary: colors.surface.primary,
    secondary: colors.surface.secondary,
    tertiary: colors.surface.tertiary,
    elevated: colors.surface.elevated,
    glass: colors.surface.glass,
  },

  border: {
    default: colors.border.strong,
    subtle: colors.border.soft,
  },

  /**
   * Status roles (dark-only). Text roles use the bright AA-passing tone
   * (`fgSoft` for danger/success/info, `fg` for warning per product text
   * warning = yellow-700). `surface.*` and `border.*` mirror the raw status
   * tokens; components may choose the main tone for borders/glows.
   * Never the only signal — pair with an icon or text (a11y, STYLEGUIDE §6).
   */
  status: {
    text: {
      danger: colors.status.danger.fgSoft,
      warning: colors.status.warning.fg,
      success: colors.status.success.fgSoft,
      info: colors.status.info.fgSoft,
    },
    surface: {
      danger: colors.status.danger.bg,
      warning: colors.status.warning.bg,
      success: colors.status.success.bg,
      info: colors.status.info.bg,
    },
    border: {
      danger: colors.status.danger.fg,
      warning: colors.status.warning.fg,
      success: colors.status.success.fg,
      info: colors.status.info.fg,
    },
  },

  interactive: {
    primary: colors.surface.brand,
    primaryHover: colors.surface.brandHover,
    secondary: colors.brand.blue,
  },
} as const;

export type SemanticColorToken = typeof semanticColors;
