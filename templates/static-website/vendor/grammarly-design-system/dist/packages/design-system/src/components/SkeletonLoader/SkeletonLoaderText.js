import React__default from "react";
import { SkeletonLoaderRectangle } from "./SkeletonLoaderRectangle.js";
const heightMap = {
  // TODO: ideally these would be based on typography tokens, but we don't actually declare any (yet)
  "text-xsmall": { height: 18, padding: 5 },
  "text-small": { height: 21, padding: 6.5 },
  "text-medium": { height: 24, padding: 6 },
  "text-large": { height: 32, padding: 10 }
};
const SkeletonLoaderText = (props) => {
  const { variant = "text-medium", width } = props;
  const height = heightMap[variant].height;
  return /* @__PURE__ */ React__default.createElement(
    SkeletonLoaderRectangle,
    {
      width,
      height,
      style: {
        padding: `${heightMap[variant].padding}px 0`
      }
    }
  );
};
export {
  SkeletonLoaderText
};
