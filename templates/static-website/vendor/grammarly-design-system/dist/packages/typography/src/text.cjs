"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
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
const styleTypes = {
  bold: { fontWeight: "bolder" },
  italic: { fontStyle: "italic" },
  strikethrough: { textDecoration: "line-through" }
};
const TextLarge = /* @__PURE__ */ React__namespace.forwardRef(
  function TextLarge2(props, ref) {
    return buildTextComponent(props, ref, "large");
  }
);
const TextMedium = /* @__PURE__ */ React__namespace.forwardRef(
  function TextMedium2(props, ref) {
    return buildTextComponent(props, ref, "medium");
  }
);
const TextSmall = /* @__PURE__ */ React__namespace.forwardRef(
  function TextSmall2(props, ref) {
    return buildTextComponent(props, ref, "small");
  }
);
const TextXSmall = /* @__PURE__ */ React__namespace.forwardRef(
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
    className: clsx_m.clsx(`gds-token-typography-text-${size}`, className),
    ...rest
  };
  return React__namespace.createElement(tagName, mergedProps, children);
}
exports.TextLarge = TextLarge;
exports.TextMedium = TextMedium;
exports.TextSmall = TextSmall;
exports.TextXSmall = TextXSmall;
