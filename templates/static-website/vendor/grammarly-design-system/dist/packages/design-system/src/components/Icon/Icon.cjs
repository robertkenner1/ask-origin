"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const shared = require("./shared.cjs");
;/* empty css           */
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
const Icon = /* @__PURE__ */ React__namespace.forwardRef(
  function Icon2(props, ref) {
    const svgIconProps = shared.getSvgIconProps(props, ref);
    if (props.accessibilityLabel.length === 0) {
      delete svgIconProps["aria-label"];
    }
    const SvgIcon = shared.getSvgIconElement(props.icon);
    return React__namespace.createElement(SvgIcon, svgIconProps);
  }
);
exports.Icon = Icon;
