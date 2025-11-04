"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const textFormatting = require("./textFormatting.cjs");
;/* empty css            */
const ScreenReaderOnly = require("../ScreenReaderOnly/ScreenReaderOnly.cjs");
const Tooltip = require("../Tooltip/Tooltip.cjs");
const Text = require("../Text/Text.cjs");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
const alignScreenReaderVirtualCursor = {
  width: "auto",
  height: "auto",
  transform: "scaleX(0.3)"
};
const Badge = /* @__PURE__ */ React__namespace.forwardRef(
  function Badge2(props, ref) {
    const { screenReaderText, style, displayText, className, ...rest } = textFormatting.calculateBadgeProps(props);
    return /* @__PURE__ */ React__namespace.createElement(
      Text.Text,
      {
        ref,
        as: "span",
        variant: "text-xsmall",
        weight: "bold",
        className: clsx_m.clsx("gds-badge", className),
        style,
        ...rest
      },
      /* @__PURE__ */ React__namespace.createElement("span", { "aria-hidden": true }, displayText),
      /* @__PURE__ */ React__namespace.createElement(ScreenReaderOnly.ScreenReaderOnly, { style: alignScreenReaderVirtualCursor }, screenReaderText)
    );
  }
);
const BadgeWithTooltip = /* @__PURE__ */ React__namespace.forwardRef(function BadgeWithTooltip2(props, ref) {
  var _a, _b, _c;
  const { screenReaderText, style, displayText } = textFormatting.calculateBadgeProps(props);
  const tooltipText = (_a = props.getTooltipText) == null ? void 0 : _a.call(
    props,
    props.count,
    props.specialCharBefore,
    props.specialCharAfter
  );
  const mergedScreenReaderText = screenReaderText + ". " + tooltipText;
  return /* @__PURE__ */ React__namespace.createElement(Tooltip.Tooltip, { ...props.tooltipProps }, /* @__PURE__ */ React__namespace.createElement(Tooltip.TooltipTrigger, { asChild: true }, /* @__PURE__ */ React__namespace.createElement(
    Text.Text,
    {
      ref,
      as: "span",
      variant: "text-xsmall",
      weight: "bold",
      className: clsx_m.clsx("gds-badge gds-badge-tooltip", props.className),
      tabIndex: (_b = props.tabIndex) != null ? _b : 0,
      style
    },
    /* @__PURE__ */ React__namespace.createElement("span", { "aria-hidden": true }, displayText),
    /* @__PURE__ */ React__namespace.createElement(ScreenReaderOnly.ScreenReaderOnly, { style: alignScreenReaderVirtualCursor }, mergedScreenReaderText)
  )), /* @__PURE__ */ React__namespace.createElement(Tooltip.TooltipContent, { root: (_c = props.tooltipContentProps) == null ? void 0 : _c.root }, tooltipText));
});
exports.Badge = Badge;
exports.BadgeWithTooltip = BadgeWithTooltip;
