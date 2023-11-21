import { useBreakpoints as _useBreakpoints } from '@vueuse/core';

function useBreakpoints() {
  return _useBreakpoints({ tablet: 640, laptop: 1024, desktop: 1280 });
}

export function useIsMobile() {
  const breakpoints = useBreakpoints();
  return breakpoints.smaller('tablet');
}

export function useIsTablet() {
  const breakpoints = useBreakpoints();
  return breakpoints.tablet;
}
