"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _import = require("../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const React = require("react");
const _import$1 = require("../../../../../@react-aria_interactions@3.17.0_react@18.2.0/external/@react-aria/interactions/dist/import.cjs");
const $5c3e21d68f1c4674$var$styles = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
  let { style, isFocusable } = props;
  let [isFocused, setFocused] = React.useState(false);
  let { focusWithinProps } = _import$1.useFocusWithin({
    isDisabled: !isFocusable,
    onFocusWithinChange: (val) => setFocused(val)
  });
  let combinedStyles = React.useMemo(() => {
    if (isFocused) return style;
    else if (style) return {
      ...$5c3e21d68f1c4674$var$styles,
      ...style
    };
    else return $5c3e21d68f1c4674$var$styles;
  }, [
    isFocused
  ]);
  return {
    visuallyHiddenProps: {
      ...focusWithinProps,
      style: combinedStyles
    }
  };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
  let { children, elementType: Element = "div", isFocusable, style, ...otherProps } = props;
  let { visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
  return /* @__PURE__ */ React.createElement(Element, _import.mergeProps(otherProps, visuallyHiddenProps), children);
}
exports.VisuallyHidden = $5c3e21d68f1c4674$export$439d29a4e110a164;
exports.useVisuallyHidden = $5c3e21d68f1c4674$export$a966af930f325cab;
