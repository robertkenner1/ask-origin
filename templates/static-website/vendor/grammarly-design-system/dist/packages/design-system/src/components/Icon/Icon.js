import * as React from "react";
import { getSvgIconProps, getSvgIconElement } from "./shared.js";
/* empty css         */
const Icon = /* @__PURE__ */ React.forwardRef(
  function Icon2(props, ref) {
    const svgIconProps = getSvgIconProps(props, ref);
    if (props.accessibilityLabel.length === 0) {
      delete svgIconProps["aria-label"];
    }
    const SvgIcon = getSvgIconElement(props.icon);
    return React.createElement(SvgIcon, svgIconProps);
  }
);
export {
  Icon
};
