"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const space = require("../../helpers/space.cjs");
const useTruncateText = require("./useTruncateText.cjs");
;/* empty css           */
const Text = /* @__PURE__ */ React.forwardRef(
  function Text2(props, forwardedRef) {
    const {
      as: Component,
      className,
      variant = "text-medium",
      // choose a default for convenience
      color,
      align,
      weight,
      italic,
      decoration,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      style: manualStyle,
      maxLines,
      children: originalChildren,
      ...rest
    } = props;
    const ref = _import.useObjectRef(forwardedRef);
    const { children, overflowText } = useTruncateText.useTruncateText(
      ref,
      originalChildren,
      // Truncation is only enabled when maxLines is set to a positive non-zero number.
      // Otherwise, children are not modified.
      maxLines,
      // We slice the 3 characters needed to append the ellipsis
      (index) => index - 3
    );
    const style = {
      ...manualStyle,
      ...color != null && { color: `var(--color-text-${color})` },
      ...align != null && { textAlign: align },
      ...getFontWeight(weight),
      ...italic != null && { fontStyle: italic ? "italic" : "normal" },
      ...decoration != null && { textDecoration: decoration },
      ...space.getMarginCSS({ margin, marginLeft, marginRight, marginTop, marginBottom }),
      ...maxLines && {
        maxHeight: `calc(1lh * ${maxLines})`,
        overflow: "hidden"
      }
    };
    return /* @__PURE__ */ React.createElement(
      Component,
      {
        ref,
        className: clsx_m.clsx(
          "gds-typography",
          `gds-${variant.startsWith("heading") ? "heading" : "text"}`,
          `gds-${variant}`,
          className
        ),
        style,
        ...rest
      },
      children,
      overflowText && "…"
    );
  }
);
const weightMap = {
  bold: "bold",
  // 700
  semibold: 600,
  medium: 500,
  normal: "normal"
  // 400
};
function getFontWeight(weight) {
  if (weight != null && weightMap[weight]) {
    return { fontWeight: weightMap[weight] };
  }
  return null;
}
exports.Text = Text;
