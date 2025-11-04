"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const space = require("../../helpers/space.cjs");
;/* empty css                 */
;/* empty css              */
const Heading = /* @__PURE__ */ React.forwardRef(
  function Heading2(props, forwardedRef) {
    const {
      as: Component,
      className,
      variant = "heading-medium",
      // choose a default for convenience
      color,
      align,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      style: manualStyle,
      maxLines,
      ...rest
    } = props;
    const style = {
      ...manualStyle,
      ...color != null && { color: `var(--color-text-${color})` },
      ...align != null && { textAlign: align },
      ...space.getMarginCSS({ margin, marginLeft, marginRight, marginTop, marginBottom }),
      ...maxLines && {
        WebkitLineClamp: maxLines
      }
    };
    return /* @__PURE__ */ React.createElement(
      Component,
      {
        ref: forwardedRef,
        className: clsx_m.clsx(
          "gds-typography",
          `gds-${variant.startsWith("heading") ? "heading" : "text"}`,
          `gds-${variant}`,
          maxLines && "gds-multiline-ellipsis",
          className
        ),
        style,
        ...rest
      }
    );
  }
);
exports.Heading = Heading;
