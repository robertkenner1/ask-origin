import * as React from "react";
const noop = () => {
};
const useHasVerticalScrollbar = (ref) => {
  const [isScrollbarPresent, setScrollbarPresent] = React.useState(false);
  const checkForScrollbar = React.useCallback(() => {
    const target = ref.current;
    if (target !== null) {
      setScrollbarPresent(target.clientHeight < target.scrollHeight);
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
    checkForScrollbar();
  }, [checkForScrollbar]);
  return isScrollbarPresent;
};
export {
  useHasVerticalScrollbar
};
