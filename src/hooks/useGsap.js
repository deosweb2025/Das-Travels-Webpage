import { useLayoutEffect, useEffect } from "react";
import { gsap, ScrollTrigger } from "../animations/gsapConfig";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Custom hook to safely run GSAP animations with proper cleanup in React.
 * Correctly extracts DOM element from React ref objects, registers ScrollTriggers,
 * and refreshes triggers to ensure accurate viewport coordinates.
 */
export function useGsap(callback, scopeRef, deps = []) {
  useIsomorphicLayoutEffect(() => {
    // Respect user's reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Safely unpack React ref ({ current: Element }) or DOM Element
    const scopeElement =
      scopeRef && typeof scopeRef === "object" && "current" in scopeRef
        ? scopeRef.current
        : scopeRef instanceof Element
        ? scopeRef
        : undefined;

    const ctx = gsap.context(callback, scopeElement || undefined);

    // Refresh ScrollTrigger after DOM measurement
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => ctx.revert();
  }, deps);
}

export default useGsap;
