"use client";

import { useCallback, useLayoutEffect, useState } from 'react';

import { DESKTOP, MOBILE, TABLET, LARGE_DESKTOP } from '../utils/constants';

import { BREAKPOINT } from '../utils/window';

// @ts-ignore
const getWidth = (): number => {
  if (typeof window !== "undefined") {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }

  return 0;
}

// @ts-ignore
const getHeight = (): number => {
  if (typeof window !== "undefined") {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }

  return 0;
}

const STATE: {
  width: number;
  height: number;
  callbacks: Array<(width: number, height: number) => void>;
} = {
  callbacks: [],
  width: getWidth(),
  height: getHeight(),
};

if (typeof window !== "undefined") {
  window.addEventListener('resize', () => {
    STATE.width = getWidth();
    STATE.height = getHeight();
    STATE.callbacks.forEach((callback) => {
      callback(STATE.width, STATE.height);
    });
  });
}

const getScreenType = (width: number) => {
  if (width < BREAKPOINT.md) {
    return MOBILE;
  }

  if (width >= BREAKPOINT.md && width < BREAKPOINT.lg) {
    return TABLET;
  }

  if (width >= BREAKPOINT.lg && width < BREAKPOINT.xlg) {
    return DESKTOP;
  }

  return LARGE_DESKTOP;
};

const getWindowResolution = (screenType: string) => ({
  isMobileView: screenType === MOBILE,
  isTabletView: screenType === TABLET,
  isDesktopView: screenType === DESKTOP,
  isLargeDesktopView: screenType === LARGE_DESKTOP,
  isInfiniteDesktopView: screenType === DESKTOP || screenType === LARGE_DESKTOP,
});

interface IUseWindowSizeResult {
  width: number | undefined;
  height: number | undefined;
  isMobileView: boolean;
  isTabletView: boolean;
  isDesktopView: boolean;
  isLargeDesktopView: boolean;
  isInfiniteDesktopView: boolean;
}

/**
 * useWindowSize - common hook
 *
 * @returns Object with props:
 * { width, height, isMobileView, isTabletView, isDesktopView, isLargeDesktopView, isInfiniteDesktopView }
 *
 * general returnProp of this hook (which returned value of width/height)
 * @returnProp width number of width screen;
 * @returnProp height  number of heigh screen;
 *
 * main props of this hook (which returned boolean value)
 * @returnProp isMobileView (boolean) | width < 768
 * @returnProp isTabletView (boolean) | width >= 768 && width < 1025
 * @returnProp isDesktopView (boolean) | width >= 1025 && width < 1440
 * @returnProp isLargeDesktopView (boolean) | width >= 1440
 *
 * Extra props
 * @returnProp isInfiniteDesktopView (boolean) | width >= 1025
 */

export const useWindowSize = (): IUseWindowSizeResult => {
  const [[width, height], setSize] = useState<number[]>([STATE.width, STATE.height]);

  const screenType = getScreenType(width);

  const onResizeHandler = useCallback(() => {
    setSize([STATE.width, STATE.height]);
  }, []);

  useLayoutEffect(() => {
    STATE.callbacks.push(onResizeHandler);

    return () => {
      STATE.callbacks = STATE.callbacks.filter((callback) => callback !== onResizeHandler);
    };
  }, [onResizeHandler]);

  const windowResolution = getWindowResolution(screenType);

  return {
    width,
    height,
    ...windowResolution,
  };
};
