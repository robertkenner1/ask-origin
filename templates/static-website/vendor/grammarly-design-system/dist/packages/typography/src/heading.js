import * as React from "react";
import { clsx } from "../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
function buildHeadingComponent(size) {
  const headingClassName = `gds-token-typography-heading-${size}`;
  return /* @__PURE__ */ React.forwardRef(
    function Heading(props, ref) {
      const { as: Component, className, ...rest } = props;
      return /* @__PURE__ */ React.createElement(Component, { ref, className: clsx(headingClassName, className), ...rest });
    }
  );
}
const HeadingLarge = /* @__PURE__ */ buildHeadingComponent("large");
const HeadingMedium = /* @__PURE__ */ buildHeadingComponent("medium");
const HeadingSmall = /* @__PURE__ */ buildHeadingComponent("small");
const HeadingXSmall = /* @__PURE__ */ buildHeadingComponent("x-small");
export {
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall
};
