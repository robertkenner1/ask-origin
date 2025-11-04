import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
/* empty css                   */
const CircularLoader = ({
  size = "medium",
  variant = "default",
  className,
  ...rest
}) => /* @__PURE__ */ React__default.createElement(
  "div",
  {
    className: clsx(
      "gds-circular-loader-container",
      `gds-circular-loader-container-size-${size.toLowerCase()}`,
      className
    ),
    ...rest
  },
  /* @__PURE__ */ React__default.createElement("svg", { viewBox: "25 25 50 50", width: "100%", "aria-hidden": "true" }, /* @__PURE__ */ React__default.createElement(
    "circle",
    {
      className: clsx(
        "gds-circular-loader",
        `gds-circular-loader-${size.toLowerCase()}`,
        `gds-circular-loader-variant-${variant.toLowerCase()}`
      ),
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none",
      strokeMiterlimit: "1"
    }
  ))
);
export {
  CircularLoader
};
