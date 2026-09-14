// Breakpoint tokens — rem scale from System_design.

export const breakpoints = {
  base: '20rem',
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
  '2xl': '120rem',
  '3xl': '158rem',
} as const;

export const breakpointsSemantic = {
  tablet: breakpoints.md,
  desktop: breakpoints.xl,
  wide: breakpoints['2xl'],
} as const;

export type BreakpointToken = typeof breakpoints;
