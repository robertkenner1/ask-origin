"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
;/* empty css                     */
const CircularLoader = ({
  size = "medium",
  variant = "default",
  className,
  ...rest
}) => /* @__PURE__ */ React.createElement(
  "div",
  {
    className: clsx_m.clsx(
      "gds-circular-loader-container",
      `gds-circular-loader-container-size-${size.toLowerCase()}`,
      className
    ),
    ...rest
  },
  /* @__PURE__ */ React.createElement("svg", { viewBox: "25 25 50 50", width: "100%", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
    "circle",
    {
      className: clsx_m.clsx(
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
exports.CircularLoader = CircularLoader;
