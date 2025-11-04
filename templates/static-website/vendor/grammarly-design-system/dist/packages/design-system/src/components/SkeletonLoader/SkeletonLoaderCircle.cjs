"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
;/* empty css                           */
const Box = require("../Box/Box.cjs");
const SkeletonLoaderCircle = (props) => {
  const { width } = props;
  return /* @__PURE__ */ React.createElement(Box.Box, { className: "gds-skeleton-item gds-skeleton-circle", width, height: width }, /* @__PURE__ */ React.createElement(Box.Box, { width: "100%", height: "100%", className: clsx_m.clsx("gds-skeleton-item-inner") }));
};
exports.SkeletonLoaderCircle = SkeletonLoaderCircle;
