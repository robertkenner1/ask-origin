import * as React from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { calculateBadgeProps } from "./textFormatting.js";
/* empty css          */
import { ScreenReaderOnly } from "../ScreenReaderOnly/ScreenReaderOnly.js";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip/Tooltip.js";
import { Text } from "../Text/Text.js";
const alignScreenReaderVirtualCursor = {
  width: "auto",
  height: "auto",
  transform: "scaleX(0.3)"
};
const Badge = /* @__PURE__ */ React.forwardRef(
  function Badge2(props, ref) {
    const { screenReaderText, style, displayText, className, ...rest } = calculateBadgeProps(props);
    return /* @__PURE__ */ React.createElement(
      Text,
      {
        ref,
        as: "span",
        variant: "text-xsmall",
        weight: "bold",
        className: clsx("gds-badge", className),
        style,
        ...rest
      },
      /* @__PURE__ */ React.createElement("span", { "aria-hidden": true }, displayText),
      /* @__PURE__ */ React.createElement(ScreenReaderOnly, { style: alignScreenReaderVirtualCursor }, screenReaderText)
    );
  }
);
const BadgeWithTooltip = /* @__PURE__ */ React.forwardRef(function BadgeWithTooltip2(props, ref) {
  var _a, _b, _c;
  const { screenReaderText, style, displayText } = calculateBadgeProps(props);
  const tooltipText = (_a = props.getTooltipText) == null ? void 0 : _a.call(
    props,
    props.count,
    props.specialCharBefore,
    props.specialCharAfter
  );
  const mergedScreenReaderText = screenReaderText + ". " + tooltipText;
  return /* @__PURE__ */ React.createElement(Tooltip, { ...props.tooltipProps }, /* @__PURE__ */ React.createElement(TooltipTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(
    Text,
    {
      ref,
      as: "span",
      variant: "text-xsmall",
      weight: "bold",
      className: clsx("gds-badge gds-badge-tooltip", props.className),
      tabIndex: (_b = props.tabIndex) != null ? _b : 0,
      style
    },
    /* @__PURE__ */ React.createElement("span", { "aria-hidden": true }, displayText),
    /* @__PURE__ */ React.createElement(ScreenReaderOnly, { style: alignScreenReaderVirtualCursor }, mergedScreenReaderText)
  )), /* @__PURE__ */ React.createElement(TooltipContent, { root: (_c = props.tooltipContentProps) == null ? void 0 : _c.root }, tooltipText));
});
export {
  Badge,
  BadgeWithTooltip
};
