// Typography tokens — combines System_design type ladder with
// the four project fonts (Satoshi/Oddval/Morabba/IRANSans).
// See docs/typography.md for the full mapping table.

export const typography = {
  fontFamily: {
    headingEn: "'Oddval', 'Satoshi', sans-serif",
    headingFa: "'Morabba', sans-serif",
    bodyEn: "'Satoshi', sans-serif",
    bodyFa: "'IRANSans', sans-serif",
    numeral: "'Satoshi', sans-serif",
  },

  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    cta: 510,
    black: 900,
  },

  /** Absolute rem type size ladder (from System_design --lemu-type-size-*). */
  size: {
    50: '.625rem',
    100: '.75rem',
    200: '.875rem',
    300: '1rem',
    400: '1.125rem',
    500: '1.25rem',
    600: '1.5rem',
    700: '1.75rem',
    800: '2rem',
    900: '2.25rem',
    1000: '2.5rem',
    1100: '3rem',
    1200: '3.5rem',
    1300: '4rem',
    1400: '4.5rem',
  },

  /** Absolute rem line-height ladder (from System_design --lemu-type-leading-*). */
  leading: {
    300: '1rem',
    400: '1.125rem',
    500: '1.25rem',
    600: '1.5rem',
    700: '1.75rem',
    800: '2rem',
    900: '2.25rem',
    1000: '2.5rem',
    1100: '2.75rem',
    1200: '3rem',
    1300: '4rem',
    1400: '4.5rem',
  },

  /** Letter spacing ladder (from System_design --lemu-type-track-*). */
  track: {
    none: '0',
    slight: '-0.025rem',
    tight: '-0.075rem',
    loose: '0.00625rem',
    wide: '0.0125rem',
    xxs: '-0.3px',
    '5xl': '-1.2px',
    heading: '-2%',
    caps: '-4%',
    label: '0.2px',
    caption: '0.08rem',
    tableHead: '-0.56px',
  },

  /**
   * Semantic scale mapped from the System_design composite references.
   * values come from the `--lemu-type-size-*` / `--lemu-type-leading-*`
   * entries, not invented. See docs/typography.md §Type Scale.
   */
  scale: {
    /** h-xl hero brand heading */
    display: {
      fontSize: '4rem',
      lineHeight: '4.5rem',
      fontWeight: 700,
      letterSpacing: '-2%',
    },
    /** text-5xl */
    h1: {
      fontSize: '3rem',
      lineHeight: '3.25rem',
      fontWeight: 500,
      letterSpacing: '-1.2px',
    },
    /** text-3xl */
    h2: {
      fontSize: '2.25rem',
      lineHeight: '2.25rem',
      fontWeight: 500,
      letterSpacing: '-2%',
    },
    /** 28px heading slot — confirmed against reference product (brand-h-sm: 1.75rem / LH 2.25rem / ls -2%). */
    h3: {
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
      fontWeight: 500,
      letterSpacing: '-2%',
    },
    /** 24px heading slot — confirmed against reference product (brand-h-xs: 1.5rem / LH 1.875rem / ls -1%). */
    h4: {
      fontSize: '1.5rem',
      lineHeight: '1.875rem',
      fontWeight: 500,
      letterSpacing: '-1%',
    },
    /** text-lg */
    bodyLarge: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 400,
      letterSpacing: '0.00625rem',
    },
    /** body default (text-sm) */
    body: {
      fontSize: '.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
      letterSpacing: '0.00625rem',
    },
    /** text-xs — NO tracking (reference product: text-xs letter-spacing 0%). */
    caption: {
      fontSize: '.75rem',
      lineHeight: '1.125rem',
      fontWeight: 500,
      letterSpacing: '0',
    },
    /** text-xxs */
    small: {
      fontSize: '.625rem',
      lineHeight: '.875rem',
      fontWeight: 600,
      letterSpacing: '-0.3px',
    },
  },
} as const;

export type TypographyToken = typeof typography;
