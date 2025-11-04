"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
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
function buildHeadingComponent(size) {
  const headingClassName = `gds-token-typography-heading-${size}`;
  return /* @__PURE__ */ React__namespace.forwardRef(
    function Heading(props, ref) {
      const { as: Component, className, ...rest } = props;
      return /* @__PURE__ */ React__namespace.createElement(Component, { ref, className: clsx_m.clsx(headingClassName, className), ...rest });
    }
  );
}
const HeadingLarge = /* @__PURE__ */ buildHeadingComponent("large");
const HeadingMedium = /* @__PURE__ */ buildHeadingComponent("medium");
const HeadingSmall = /* @__PURE__ */ buildHeadingComponent("small");
const HeadingXSmall = /* @__PURE__ */ buildHeadingComponent("x-small");
exports.HeadingLarge = HeadingLarge;
exports.HeadingMedium = HeadingMedium;
exports.HeadingSmall = HeadingSmall;
exports.HeadingXSmall = HeadingXSmall;
