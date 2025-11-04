"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
function useTimeout(callback, delay) {
  const savedCallback = React.useRef(callback);
  React.useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    const id = setTimeout(() => {
      savedCallback.current();
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [delay]);
}
exports.useTimeout = useTimeout;
