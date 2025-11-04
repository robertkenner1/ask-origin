"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const utilProps = require("../../helpers/utilProps.cjs");
;/* empty css          */
const Box = /* @__PURE__ */ React.forwardRef(
  function Box2(props, forwardedRef) {
    const { utility, other } = utilProps.splitUtilityProps(props);
    const { accessibilityLabel, as, children, className, elevation, style = {}, ...rest } = other;
    const utilityStyle = utilProps.applyUtilityProps(utility);
    const computedStyle = {
      ...utilityStyle,
      ...style
    };
    const BoxElement = as != null ? as : "div";
    return /* @__PURE__ */ React.createElement(
      BoxElement,
      {
        ref: forwardedRef,
        "aria-label": accessibilityLabel,
        className: getBoxClassNames({ elevation, className }),
        style: computedStyle,
        ...rest
      },
      children
    );
  }
);
function getBoxClassNames({ elevation, className }) {
  return clsx_m.clsx("gds-box", elevation && `gds-box-elevation-${elevation}`, className);
}
exports.Box = Box;
