import React__default from "react";
import { SkeletonLoaderRectangle } from "./SkeletonLoaderRectangle.js";
const heightMap = {
  // TODO: ideally these would be based on typography tokens, but we don't actually declare any (yet)
  "heading-large": { height: 32, padding: 6 },
  "heading-medium": { height: 32, padding: 6 },
  "heading-small": { height: 24, padding: 4 },
  "heading-xsmall": { height: 24, padding: 4 },
  "heading-xxsmall": { height: 21, padding: 4.5 }
};
const SkeletonLoaderHeading = (props) => {
  const { variant = "heading-medium", width } = props;
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
  SkeletonLoaderHeading
};
