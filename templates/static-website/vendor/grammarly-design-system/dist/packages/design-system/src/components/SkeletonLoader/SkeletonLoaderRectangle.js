import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
/* empty css                            */
import { Box } from "../Box/Box.js";
const SkeletonLoaderRectangle = (props) => {
  const { width, height = 12, className, ...rest } = props;
  return /* @__PURE__ */ React__default.createElement(
    Box,
    {
      className: "gds-skeleton-item gds-skeleton-rectangle",
      width,
      height,
      ...rest
    },
    /* @__PURE__ */ React__default.createElement(Box, { width: "100%", height: "100%", className: clsx("gds-skeleton-item-inner", className) })
  );
};
export {
  SkeletonLoaderRectangle
};
