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
const ANIMATION_DURATION_MS = 200;
const useExitAnimationState = (isOpen, prefersReducedMotion) => {
  const [exited, setExited] = React__namespace.useState(!isOpen);
  React__namespace.useEffect(() => {
    let timeoutId = null;
    if (!isOpen && !exited) {
      timeoutId = setTimeout(
        () => {
          setExited(true);
        },
        prefersReducedMotion ? 0 : ANIMATION_DURATION_MS
      );
    } else if (isOpen) {
      setExited(false);
    }
    return () => {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen, exited, prefersReducedMotion]);
  return exited;
};
exports.useExitAnimationState = useExitAnimationState;
