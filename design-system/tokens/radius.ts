// Radius tokens — quarter-rem ladder from System_design.

export const radius = {
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
  full: '9999px',
} as const;

export const radiusSemantic = {
  control: radius[200],
  card: radius[300],
  badge: radius[150],
  featuredCard: radius[500],
  media: radius[400],
  mediaLg: radius[600],
  pill: radius.full,
} as const;

export type RadiusToken = typeof radius;
export type RadiusSemanticToken = typeof radiusSemantic;
