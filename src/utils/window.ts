import { Nullable } from '@/types/common';

/**
 * @param sm - small | Mobile: (360px - 767px)
 * @param md - medium | Tablet: (768px - 1024px)
 * @param lg - large | Desktop: (1025px+) -> Default option for desktop
 */
type TGridNameBreakpoints = 'sm' | 'md' | 'lg';

/**
 * @param xs - extra small | Mobile: >= 320
 * @param sm - small | Mobile: (360px - 767px) | from TGridNameBreakpoints type
 * @param md - medium | Tablet: (768px - 1024px) | from TGridNameBreakpoints type
 * @param lg - large | Desktop: (1025px+) -> Default option for desktop | from TGridNameBreakpoints type
 * @param xlg - extra large | Desktop: <= 1440px
 */
type TAliasBreakpoints = TGridNameBreakpoints | 'xs' | 'xlg';

type TSizesBreakpoints = 320 | 360 | 768 | 1025 | 1440;

export const BREAKPOINT: Record<TAliasBreakpoints, TSizesBreakpoints> = {
  xs: 320,
  sm: 360,
  md: 768,
  lg: 1025,
  xlg: 1440,
};

type TAdaptiveKeys = 'minWidth' | 'maxWidth';
type TAdaptiveCommonOptions = 'mobileXs' | 'mobile' | 'tablet' | 'desktop';

type TAdaptiveOptionsMinWidth = TAdaptiveCommonOptions | 'desktopLg';

/**
 * _Mobile First_ - ADAPTIVE.minWidth
 * @param mobileXs  min-width = 320
 * @param mobile  min-width = 360
 * @param tablet  min-width = 768
 * @param desktop  min-width = 1025
 * @param desktopLg  min-width = 1440
 *
 * _Desktop First_ - ADAPTIVE.maxWidth
 * @param mobileXs  max-width = 359
 * @param mobile  max-width = 767
 * @param tablet  max-width = 1024
 * @param desktop  max-width = 1439
 */
export const ADAPTIVE: Record<TAdaptiveKeys, { [K in TAdaptiveOptionsMinWidth]?: string }> = {
  minWidth: {
    mobileXs: `@media only screen and (min-width: ${BREAKPOINT.xs}px)`,
    mobile: `@media only screen and (min-width: ${BREAKPOINT.sm}px)`,
    tablet: `@media only screen and (min-width: ${BREAKPOINT.md}px)`,
    desktop: `@media only screen and (min-width: ${BREAKPOINT.lg}px)`,
    desktopLg: `@media only screen and (min-width: ${BREAKPOINT.xlg}px)`,
  },
  maxWidth: {
    mobileXs: `@media only screen and (max-width: ${BREAKPOINT.sm - 1}px)`,
    mobile: `@media only screen and (max-width: ${BREAKPOINT.md - 1}px)`,
    tablet: `@media only screen and (max-width: ${BREAKPOINT.lg - 1}px)`,
    desktop: `@media only screen and (max-width: ${BREAKPOINT.xlg - 1}px)`,
  },
};

const aspectRatios = {
  '16:9': '16/9',
  '21:9': '21/9',
  '32:9': '32/9',
} as const;

type AspectRatioKeys = keyof typeof aspectRatios;

export const mediaQuery = (
  minAspectRatio: Nullable<AspectRatioKeys>,
  maxAspectRatio: Nullable<AspectRatioKeys>,
  styles: string,
) => {
  const minQuery = minAspectRatio ? `(min-aspect-ratio: ${aspectRatios[minAspectRatio]})` : '';
  const maxQuery = maxAspectRatio ? `(max-aspect-ratio: ${aspectRatios[maxAspectRatio]})` : '';
  const and = minAspectRatio && maxAspectRatio ? 'and' : '';

  return `
    @media ${minQuery} ${and} ${maxQuery} {
      ${styles}
    }
  `;
};
