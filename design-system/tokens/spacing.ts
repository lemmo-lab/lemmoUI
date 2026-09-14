// Spacing tokens — the 4 px ladder from System_design.
// Every margin/padding in the product must come from this table.

export const spacing = {
  0: '0',
  50: '.125rem',
  100: '.25rem',
  150: '.375rem',
  200: '.5rem',
  250: '.625rem',
  300: '.75rem',
  400: '1rem',
  500: '1.25rem',
  600: '1.5rem',
  700: '1.75rem',
  800: '2rem',
  1000: '2.5rem',
  1200: '3rem',
  1400: '3.5rem',
  1600: '4rem',
  2000: '5rem',
  2400: '6rem',
} as const;

export const gap = {
  '0-5': '.125rem',
  1: '.25rem',
  '1-5': '.375rem',
  2: '.5rem',
  '2-5': '.625rem',
  3: '.75rem',
  4: '1rem',
  cardGrid: '.5rem',
  cardInner: '.5rem',
  sectionSm: '2.5rem',
  sectionLg: '5rem',
} as const;

export type SpacingToken = typeof spacing;
export type GapToken = typeof gap;
