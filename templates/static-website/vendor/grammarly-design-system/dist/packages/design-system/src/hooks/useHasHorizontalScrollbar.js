import * as React from "react";
const noop = () => {
};
const useHasHorizontalScrollbar = (ref) => {
  const [hasHiddenRightContent, setHasHiddenRightContent] = React.useState(false);
  const [hasHiddenLeftContent, setHasHiddenLeftContent] = React.useState(false);
  const checkForScrollbar = React.useCallback(() => {
    const target = ref.current;
    if (target !== null) {
      setHasHiddenRightContent(!(target.scrollLeft + target.clientWidth >= target.scrollWidth));
      setHasHiddenLeftContent(target.scrollLeft > 0);
    }
  }, []);
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.ResizeObserver !== void 0) {
      const resizeObserver = new ResizeObserver(checkForScrollbar);
      if (ref.current !== null) {
        resizeObserver.observe(ref.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }
    return noop;
  }, [ref, checkForScrollbar]);
  React.useEffect(() => {
    var _a;
    if (typeof window !== "undefined" && window !== void 0) {
      (_a = ref.current) == null ? void 0 : _a.addEventListener("scroll", checkForScrollbar);
      return () => {
        var _a2;
        (_a2 = ref.current) == null ? void 0 : _a2.removeEventListener("scroll", checkForScrollbar);
      };
    }
    return noop;
  }, [ref]);
  React.useEffect(() => {
    checkForScrollbar();
  }, [checkForScrollbar]);
  return { hasHiddenRightContent, hasHiddenLeftContent };
};
export {
  useHasHorizontalScrollbar
};
