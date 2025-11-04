"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const SkeletonLoaderRectangle = require("./SkeletonLoaderRectangle.cjs");
const SkeletonLoaderButton = (props) => {
  const { variant = "primary", size = "medium", width } = props;
  const padding = computePadding(variant, size);
  const sizeMap = {
    small: 24,
    medium: 32,
    large: 40,
    xlarge: 48
  };
  return /* @__PURE__ */ React.createElement(
    SkeletonLoaderRectangle.SkeletonLoaderRectangle,
    {
      width,
      height: sizeMap[size],
      style: padding ? { padding } : void 0
    }
  );
};
function computePadding(variant, size) {
  if (variant === "primary" || variant === "secondary" || variant === "premium") {
    return;
  }
  return size === "small" ? "8px" : "12px 8px";
}
exports.SkeletonLoaderButton = SkeletonLoaderButton;
