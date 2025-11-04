"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
function usePrevious(value) {
  const previous = React.useRef();
  React.useEffect(() => {
    previous.current = value;
    return () => {
      previous.current = void 0;
    };
  });
  return previous.current;
}
exports.usePrevious = usePrevious;
