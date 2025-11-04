"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const compound = require("../../helpers/compound.cjs");
const useTimeout = require("../../hooks/useTimeout.cjs");
const SkeletonLoaderButton = require("./SkeletonLoaderButton.cjs");
const SkeletonLoaderCircle = require("./SkeletonLoaderCircle.cjs");
const SkeletonLoaderHeading = require("./SkeletonLoaderHeading.cjs");
const SkeletonLoaderIcon = require("./SkeletonLoaderIcon.cjs");
const SkeletonLoaderRectangle = require("./SkeletonLoaderRectangle.cjs");
const SkeletonLoaderText = require("./SkeletonLoaderText.cjs");
;/* empty css                     */
const liveAnnouncer = require("../LiveAnnouncer/liveAnnouncer.cjs");
const ScreenReaderOnly = require("../ScreenReaderOnly/ScreenReaderOnly.cjs");
const Text = require("../Text/Text.cjs");
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
  const [showLabel, setShowLabel] = React.useState(false);
  const show = () => {
    setShowLabel(true);
  };
  useTimeout.useTimeout(show, delay);
  React.useEffect(() => {
    return () => {
      liveAnnouncer.liveAnnouncer.clear("assertive");
    };
  }, []);
  React.useEffect(() => {
    accessibilityLabel && liveAnnouncer.liveAnnouncer.announce(accessibilityLabel, "assertive");
  }, [accessibilityLabel, liveAnnouncer.liveAnnouncer]);
  const computedWidth = typeof width === "number" ? `${width}px` : width;
  const mergedStyle = style == null && computedWidth == null ? void 0 : { width: computedWidth, ...style };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "progressbar",
      "aria-label": accessibilityLabel,
      "aria-valuetext": "In progress",
      className: "gds-skeleton-frame",
      style: mergedStyle,
      ...rest
    },
    /* @__PURE__ */ React.createElement(ScreenReaderOnly.ScreenReaderOnly, null, accessibilityLabel),
    showLabel && /* @__PURE__ */ React.createElement("div", { className: "gds-skeleton-label", style: { top: labelOffset } }, /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-xsmall", color: "base-subdued", "aria-hidden": true }, label)),
    children
  );
};
const SkeletonLoaderCompound = compound.makeCompoundComponent(SkeletonLoader, "SkeletonLoader", {
  // primitives
  Circle: SkeletonLoaderCircle.SkeletonLoaderCircle,
  Rectangle: SkeletonLoaderRectangle.SkeletonLoaderRectangle,
  // semantic
  Button: SkeletonLoaderButton.SkeletonLoaderButton,
  Heading: SkeletonLoaderHeading.SkeletonLoaderHeading,
  Icon: SkeletonLoaderIcon.SkeletonLoaderIcon,
  Text: SkeletonLoaderText.SkeletonLoaderText
});
exports.SkeletonLoader = SkeletonLoaderCompound;
