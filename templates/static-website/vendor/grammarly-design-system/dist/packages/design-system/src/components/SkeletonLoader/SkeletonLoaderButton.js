import React__default from "react";
import { SkeletonLoaderRectangle } from "./SkeletonLoaderRectangle.js";
const SkeletonLoaderButton = (props) => {
  const { variant = "primary", size = "medium", width } = props;
  const padding = computePadding(variant, size);
  const sizeMap = {
    small: 24,
    medium: 32,
    large: 40,
    xlarge: 48
  };
  return /* @__PURE__ */ React__default.createElement(
    SkeletonLoaderRectangle,
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
export {
  SkeletonLoaderButton
};
