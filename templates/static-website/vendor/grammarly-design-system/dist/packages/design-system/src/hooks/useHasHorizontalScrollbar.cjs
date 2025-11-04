"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
const noop = () => {
};
const useHasHorizontalScrollbar = (ref) => {
  const [hasHiddenRightContent, setHasHiddenRightContent] = React__namespace.useState(false);
  const [hasHiddenLeftContent, setHasHiddenLeftContent] = React__namespace.useState(false);
  const checkForScrollbar = React__namespace.useCallback(() => {
    const target = ref.current;
    if (target !== null) {
      setHasHiddenRightContent(!(target.scrollLeft + target.clientWidth >= target.scrollWidth));
      setHasHiddenLeftContent(target.scrollLeft > 0);
    }
  }, []);
  React__namespace.useEffect(() => {
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
  React__namespace.useEffect(() => {
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
  React__namespace.useEffect(() => {
    checkForScrollbar();
  }, [checkForScrollbar]);
  return { hasHiddenRightContent, hasHiddenLeftContent };
};
exports.useHasHorizontalScrollbar = useHasHorizontalScrollbar;
