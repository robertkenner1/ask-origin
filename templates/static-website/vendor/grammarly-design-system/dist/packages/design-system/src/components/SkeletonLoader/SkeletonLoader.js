import React__default, { useState, useEffect } from "react";
import { makeCompoundComponent } from "../../helpers/compound.js";
import { useTimeout } from "../../hooks/useTimeout.js";
import { SkeletonLoaderButton } from "./SkeletonLoaderButton.js";
import { SkeletonLoaderCircle } from "./SkeletonLoaderCircle.js";
import { SkeletonLoaderHeading } from "./SkeletonLoaderHeading.js";
import { SkeletonLoaderIcon } from "./SkeletonLoaderIcon.js";
import { SkeletonLoaderRectangle } from "./SkeletonLoaderRectangle.js";
import { SkeletonLoaderText } from "./SkeletonLoaderText.js";
/* empty css                   */
import { liveAnnouncer } from "../LiveAnnouncer/liveAnnouncer.js";
import { ScreenReaderOnly } from "../ScreenReaderOnly/ScreenReaderOnly.js";
import { Text } from "../Text/Text.js";
const SkeletonLoader = ({
  accessibilityLabel = "Loading",
  delay = 2500,
  label = "Loading",
  labelOffset = 20,
  width,
  children,
  style,
  ...rest
}) => {
  const [showLabel, setShowLabel] = useState(false);
  const show = () => {
    setShowLabel(true);
  };
  useTimeout(show, delay);
  useEffect(() => {
    return () => {
      liveAnnouncer.clear("assertive");
    };
  }, []);
  useEffect(() => {
    accessibilityLabel && liveAnnouncer.announce(accessibilityLabel, "assertive");
  }, [accessibilityLabel, liveAnnouncer]);
  const computedWidth = typeof width === "number" ? `${width}px` : width;
  const mergedStyle = style == null && computedWidth == null ? void 0 : { width: computedWidth, ...style };
  return /* @__PURE__ */ React__default.createElement(
    "div",
    {
      role: "progressbar",
      "aria-label": accessibilityLabel,
      "aria-valuetext": "In progress",
      className: "gds-skeleton-frame",
      style: mergedStyle,
      ...rest
    },
    /* @__PURE__ */ React__default.createElement(ScreenReaderOnly, null, accessibilityLabel),
    showLabel && /* @__PURE__ */ React__default.createElement("div", { className: "gds-skeleton-label", style: { top: labelOffset } }, /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-xsmall", color: "base-subdued", "aria-hidden": true }, label)),
    children
  );
};
const SkeletonLoaderCompound = makeCompoundComponent(SkeletonLoader, "SkeletonLoader", {
  // primitives
  Circle: SkeletonLoaderCircle,
  Rectangle: SkeletonLoaderRectangle,
  // semantic
  Button: SkeletonLoaderButton,
  Heading: SkeletonLoaderHeading,
  Icon: SkeletonLoaderIcon,
  Text: SkeletonLoaderText
});
export {
  SkeletonLoaderCompound as SkeletonLoader
};
