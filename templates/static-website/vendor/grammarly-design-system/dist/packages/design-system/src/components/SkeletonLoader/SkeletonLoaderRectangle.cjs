"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
;/* empty css                              */
const Box = require("../Box/Box.cjs");
const SkeletonLoaderRectangle = (props) => {
  const { width, height = 12, className, ...rest } = props;
  return /* @__PURE__ */ React.createElement(
    Box.Box,
    {
      className: "gds-skeleton-item gds-skeleton-rectangle",
      width,
      height,
      ...rest
    },
    /* @__PURE__ */ React.createElement(Box.Box, { width: "100%", height: "100%", className: clsx_m.clsx("gds-skeleton-item-inner", className) })
  );
};
exports.SkeletonLoaderRectangle = SkeletonLoaderRectangle;
