"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      setPrefersReducedMotion(false);
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    function onChange(event) {
      setPrefersReducedMotion(event.matches);
    }
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", onChange);
      return () => {
        mediaQuery.removeEventListener("change", onChange);
      };
    } else {
      mediaQuery.addListener(onChange);
      return () => {
        mediaQuery.removeListener(onChange);
      };
    }
  }, []);
  return prefersReducedMotion;
}
exports.usePrefersReducedMotion = usePrefersReducedMotion;
