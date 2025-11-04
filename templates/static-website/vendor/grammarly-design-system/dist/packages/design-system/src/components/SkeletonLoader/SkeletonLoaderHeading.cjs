"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const SkeletonLoaderRectangle = require("./SkeletonLoaderRectangle.cjs");
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
  return /* @__PURE__ */ React.createElement(
    SkeletonLoaderRectangle.SkeletonLoaderRectangle,
    {
      width,
      height,
      style: {
        padding: `${heightMap[variant].padding}px 0`
      }
    }
  );
};
exports.SkeletonLoaderHeading = SkeletonLoaderHeading;
