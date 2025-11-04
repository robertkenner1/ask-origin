"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const Flex = require("../Flex/Flex.cjs");
const ScreenReaderOnly = require("../ScreenReaderOnly/ScreenReaderOnly.cjs");
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
const LABEL_SIZE_MAP = {
  small: "text-xsmall",
  medium: "text-small",
  large: "text-medium",
  xlarge: "text-large"
};
const InputLabel = ({
  as = "label",
  label,
  labelDisplay = "visible",
  helperMessage,
  isRequired = false,
  isOptional = false,
  labelIndicatorForRequired = "(Required)",
  labelIndicatorForOptional = "(Optional)",
  errorMessage,
  children,
  size,
  ...rest
}) => {
  if (labelDisplay === "hidden") {
    const style = React__namespace.Children.count(children) === 0 ? { position: "absolute" } : void 0;
    return /* @__PURE__ */ React__namespace.createElement(Flex.Flex, { as, style, ...rest }, children, /* @__PURE__ */ React__namespace.createElement(ScreenReaderOnly.ScreenReaderOnly, null, label, /* @__PURE__ */ React__namespace.createElement(ErrorMessageAnnouncer, { errorMessage }), /* @__PURE__ */ React__namespace.createElement(InputLabelHelperMessage, { message: helperMessage })));
  }
  const labelWeight = as === "legend" ? "semibold" : "medium";
  return /* @__PURE__ */ React__namespace.createElement(Flex.Flex, { as, direction: "column", gap: 1, color: "base-default", ...rest }, /* @__PURE__ */ React__namespace.createElement(Flex.Flex, { gap: 2, align: "center", direction: "row" }, children, /* @__PURE__ */ React__namespace.createElement(
    Text.Text,
    {
      as: "span",
      variant: LABEL_SIZE_MAP[size || "medium"],
      weight: labelWeight,
      className: clsx_m.clsx("gds-input-label")
    },
    label
  ), (isRequired === true || isOptional === true) && // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  /* @__PURE__ */ React__namespace.createElement("div", { className: "gds-input-label-optionality", onClick: doNotFocusInput }, /* @__PURE__ */ React__namespace.createElement("span", { "aria-hidden": isRequired === true ? "true" : void 0 }, /* @__PURE__ */ React__namespace.createElement(ScreenReaderOnly.ScreenReaderOnly, null, ": "), /* @__PURE__ */ React__namespace.createElement(Text.Text, { as: "span", color: "base-subdued", variant: LABEL_SIZE_MAP[size || "medium"] }, isRequired === true ? labelIndicatorForRequired : labelIndicatorForOptional))), /* @__PURE__ */ React__namespace.createElement(ErrorMessageAnnouncer, { errorMessage })), /* @__PURE__ */ React__namespace.createElement(InputLabelHelperMessage, { message: helperMessage, size }));
};
const InputLabelHelperMessage = (props) => {
  const { message, size, ...rest } = props;
  if (message == void 0) return null;
  const helperSizeMap = {
    medium: "text-xsmall",
    large: "text-small",
    xlarge: "text-medium"
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ React__namespace.createElement("div", { className: "gds-input-label-helper", onClick: doNotFocusInput }, /* @__PURE__ */ React__namespace.createElement(ScreenReaderOnly.ScreenReaderOnly, null, ":"), /* @__PURE__ */ React__namespace.createElement(Text.Text, { as: "p", variant: helperSizeMap[size || "medium"], color: "base-subdued", ...rest }, message))
  );
};
const ErrorMessageAnnouncer = (props) => {
  const { errorMessage } = props;
  return errorMessage != null ? /* @__PURE__ */ React__namespace.createElement(ScreenReaderOnly.ScreenReaderOnly, null, " - error: ", errorMessage) : null;
};
function doNotFocusInput(event) {
  event.preventDefault();
}
exports.InputLabel = InputLabel;
exports.InputLabelHelperMessage = InputLabelHelperMessage;
exports.LABEL_SIZE_MAP = LABEL_SIZE_MAP;
