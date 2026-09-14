// Shadow & elevation tokens from System_design.

export const shadow = {
  cardFeatured: '0 1.5rem 4rem rgba(0, 0, 0, 0.24)',
  cardBase: '10px 34px 24px 0 rgba(0, 0, 0, 0.15)',
  buttonBrandInset:
    'inset 0 0.8px 0 0 #d1fe17, inset 0 -1.6px 0 0 #829b19, inset 0 -2.4px 0 0 #829b19',
  buttonBrand:
    'inset 0 0.8px 0 0 #d1fe17, inset 0 -1.6px 0 0 #829b19, inset 0 -2.4px 0 0 #829b19, 10px 34px 24px 0px rgba(0, 0, 0, 0.15)',
  glossInset:
    'inset 0 -2px 2px 0 rgba(255, 255, 255, 0.4), inset 0 2px 2px 0 rgba(255, 255, 255, 0.4)',
  glowBrand: '0 0 0.4rem color-mix(in srgb, #d1fe17 56%, transparent)',
} as const;

export type ShadowToken = typeof shadow;
