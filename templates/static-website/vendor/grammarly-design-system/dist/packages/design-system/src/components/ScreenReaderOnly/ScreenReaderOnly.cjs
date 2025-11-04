"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
;/* empty css                       */
const ScreenReaderOnly = /* @__PURE__ */ React.forwardRef(function ScreenReaderOnly2(props, forwardedRef) {
  const { className, as: Component = "span", ...rest } = props;
  return /* @__PURE__ */ React.createElement(
    Component,
    {
      ref: forwardedRef,
      className: clsx_m.clsx("gds-sr-only", className),
      ...rest
    }
  );
});
exports.ScreenReaderOnly = ScreenReaderOnly;
