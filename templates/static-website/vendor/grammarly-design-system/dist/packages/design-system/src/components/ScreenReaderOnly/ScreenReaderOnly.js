import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
/* empty css                     */
const ScreenReaderOnly = /* @__PURE__ */ React__default.forwardRef(function ScreenReaderOnly2(props, forwardedRef) {
  const { className, as: Component = "span", ...rest } = props;
  return /* @__PURE__ */ React__default.createElement(
    Component,
    {
      ref: forwardedRef,
      className: clsx("gds-sr-only", className),
      ...rest
    }
  );
});
export {
  ScreenReaderOnly
};
