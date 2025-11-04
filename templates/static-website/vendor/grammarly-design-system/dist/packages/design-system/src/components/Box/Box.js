import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { splitUtilityProps, applyUtilityProps } from "../../helpers/utilProps.js";
/* empty css        */
const Box = /* @__PURE__ */ React__default.forwardRef(
  function Box2(props, forwardedRef) {
    const { utility, other } = splitUtilityProps(props);
    const { accessibilityLabel, as, children, className, elevation, style = {}, ...rest } = other;
    const utilityStyle = applyUtilityProps(utility);
    const computedStyle = {
      ...utilityStyle,
      ...style
    };
    const BoxElement = as != null ? as : "div";
    return /* @__PURE__ */ React__default.createElement(
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
  return clsx("gds-box", elevation && `gds-box-elevation-${elevation}`, className);
}
export {
  Box
};
