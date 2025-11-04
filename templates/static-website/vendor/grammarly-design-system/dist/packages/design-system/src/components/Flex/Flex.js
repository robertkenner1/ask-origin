import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { getTokenStringFromNumber } from "../../helpers/space.js";
import { splitUtilityProps, applyUtilityProps } from "../../helpers/utilProps.js";
/* empty css         */
function getFlexClassNames({
  direction,
  wrap,
  elevation,
  className,
  alignSelf
}) {
  return clsx(
    "gds-flex",
    direction === "column" && "gds-flex-direction-column",
    wrap && "gds-flex-wrap",
    elevation && `gds-flex-elevation-${elevation}`,
    alignSelf && `gds-flex-align-self-${alignSelf}`,
    className
  );
}
const Flex = /* @__PURE__ */ React__default.forwardRef(function Flex2(props, forwardedRef) {
  const { utility, other } = splitUtilityProps(props);
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
  const utilityProps = applyUtilityProps(utility);
  const computedStyle = {
    ...getGapCss(gap),
    alignItems: align,
    justifyContent: justify,
    flex,
    ...utilityProps,
    ...style
  };
  const FlexElement = as != null ? as : "div";
  return /* @__PURE__ */ React__default.createElement(
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
    return { gap: `var(--space-${getTokenStringFromNumber(gap)})` };
  }
  const rowGap = gap.row == null ? "normal" : `var(--space-${getTokenStringFromNumber(gap.row)})`;
  const columnGap = gap.column == null ? "normal" : `var(--space-${getTokenStringFromNumber(gap.column)})`;
  return { gap: `${rowGap} ${columnGap}` };
}
export {
  Flex
};
