"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const space = require("../../helpers/space.cjs");
const utilProps = require("../../helpers/utilProps.cjs");
;/* empty css           */
function getFlexClassNames({
  direction,
  wrap,
  elevation,
  className,
  alignSelf
}) {
  return clsx_m.clsx(
    "gds-flex",
    direction === "column" && "gds-flex-direction-column",
    wrap && "gds-flex-wrap",
    elevation && `gds-flex-elevation-${elevation}`,
    alignSelf && `gds-flex-align-self-${alignSelf}`,
    className
  );
}
const Flex = /* @__PURE__ */ React.forwardRef(function Flex2(props, forwardedRef) {
  const { utility, other } = utilProps.splitUtilityProps(props);
  const {
    accessibilityLabel,
    align,
    alignSelf,
    as,
    children,
    className,
    direction = "row",
    elevation,
    flex,
    gap = 0,
    justify,
    wrap = false,
    style = {},
    ...rest
  } = other;
  const computedClasses = getFlexClassNames({
    direction,
    wrap,
    elevation,
    className,
    alignSelf
  });
  const utilityProps = utilProps.applyUtilityProps(utility);
  const computedStyle = {
    ...getGapCss(gap),
    alignItems: align,
    justifyContent: justify,
    flex,
    ...utilityProps,
    ...style
  };
  const FlexElement = as != null ? as : "div";
  return /* @__PURE__ */ React.createElement(
    FlexElement,
    {
      "aria-label": accessibilityLabel,
      ref: forwardedRef,
      className: computedClasses,
      style: computedStyle,
      ...rest
    },
    children
  );
});
function getGapCss(gap) {
  if (gap == null) return {};
  if (typeof gap === "number") {
    return { gap: `var(--space-${space.getTokenStringFromNumber(gap)})` };
  }
  const rowGap = gap.row == null ? "normal" : `var(--space-${space.getTokenStringFromNumber(gap.row)})`;
  const columnGap = gap.column == null ? "normal" : `var(--space-${space.getTokenStringFromNumber(gap.column)})`;
  return { gap: `${rowGap} ${columnGap}` };
}
exports.Flex = Flex;
