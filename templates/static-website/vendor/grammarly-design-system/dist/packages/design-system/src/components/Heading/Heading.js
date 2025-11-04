import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { getMarginCSS } from "../../helpers/space.js";
/* empty css               */
/* empty css            */
const Heading = /* @__PURE__ */ React__default.forwardRef(
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
      ...getMarginCSS({ margin, marginLeft, marginRight, marginTop, marginBottom }),
      ...maxLines && {
        WebkitLineClamp: maxLines
      }
    };
    return /* @__PURE__ */ React__default.createElement(
      Component,
      {
        ref: forwardedRef,
        className: clsx(
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
export {
  Heading
};
