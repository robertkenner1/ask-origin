import * as React from "react";
import { clsx } from "../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
const styleTypes = {
  bold: { fontWeight: "bolder" },
  italic: { fontStyle: "italic" },
  strikethrough: { textDecoration: "line-through" }
};
const TextLarge = /* @__PURE__ */ React.forwardRef(
  function TextLarge2(props, ref) {
    return buildTextComponent(props, ref, "large");
  }
);
const TextMedium = /* @__PURE__ */ React.forwardRef(
  function TextMedium2(props, ref) {
    return buildTextComponent(props, ref, "medium");
  }
);
const TextSmall = /* @__PURE__ */ React.forwardRef(
  function TextSmall2(props, ref) {
    return buildTextComponent(props, ref, "small");
  }
);
const TextXSmall = /* @__PURE__ */ React.forwardRef(
  function TextXSmall2(props, ref) {
    return buildTextComponent(props, ref, "x-small");
  }
);
function buildTextComponent(props, ref, size) {
  const { as, className, children, style, bold, italic, strikethrough, ...rest } = props;
  const tagName = as || "span";
  const mergedProps = {
    ref,
    style: {
      ...style,
      ...bold ? styleTypes["bold"] : {},
      ...italic ? styleTypes["italic"] : {},
      ...strikethrough ? styleTypes["strikethrough"] : {}
    },
    className: clsx(`gds-token-typography-text-${size}`, className),
    ...rest
  };
  return React.createElement(tagName, mergedProps, children);
}
export {
  TextLarge,
  TextMedium,
  TextSmall,
  TextXSmall
};
