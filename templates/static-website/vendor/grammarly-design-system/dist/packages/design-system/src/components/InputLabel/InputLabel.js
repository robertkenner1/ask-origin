import * as React from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { Flex } from "../Flex/Flex.js";
import { ScreenReaderOnly } from "../ScreenReaderOnly/ScreenReaderOnly.js";
import { Text } from "../Text/Text.js";
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
    const style = React.Children.count(children) === 0 ? { position: "absolute" } : void 0;
    return /* @__PURE__ */ React.createElement(Flex, { as, style, ...rest }, children, /* @__PURE__ */ React.createElement(ScreenReaderOnly, null, label, /* @__PURE__ */ React.createElement(ErrorMessageAnnouncer, { errorMessage }), /* @__PURE__ */ React.createElement(InputLabelHelperMessage, { message: helperMessage })));
  }
  const labelWeight = as === "legend" ? "semibold" : "medium";
  return /* @__PURE__ */ React.createElement(Flex, { as, direction: "column", gap: 1, color: "base-default", ...rest }, /* @__PURE__ */ React.createElement(Flex, { gap: 2, align: "center", direction: "row" }, children, /* @__PURE__ */ React.createElement(
    Text,
    {
      as: "span",
      variant: LABEL_SIZE_MAP[size || "medium"],
      weight: labelWeight,
      className: clsx("gds-input-label")
    },
    label
  ), (isRequired === true || isOptional === true) && // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  /* @__PURE__ */ React.createElement("div", { className: "gds-input-label-optionality", onClick: doNotFocusInput }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": isRequired === true ? "true" : void 0 }, /* @__PURE__ */ React.createElement(ScreenReaderOnly, null, ": "), /* @__PURE__ */ React.createElement(Text, { as: "span", color: "base-subdued", variant: LABEL_SIZE_MAP[size || "medium"] }, isRequired === true ? labelIndicatorForRequired : labelIndicatorForOptional))), /* @__PURE__ */ React.createElement(ErrorMessageAnnouncer, { errorMessage })), /* @__PURE__ */ React.createElement(InputLabelHelperMessage, { message: helperMessage, size }));
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
    /* @__PURE__ */ React.createElement("div", { className: "gds-input-label-helper", onClick: doNotFocusInput }, /* @__PURE__ */ React.createElement(ScreenReaderOnly, null, ":"), /* @__PURE__ */ React.createElement(Text, { as: "p", variant: helperSizeMap[size || "medium"], color: "base-subdued", ...rest }, message))
  );
};
const ErrorMessageAnnouncer = (props) => {
  const { errorMessage } = props;
  return errorMessage != null ? /* @__PURE__ */ React.createElement(ScreenReaderOnly, null, " - error: ", errorMessage) : null;
};
function doNotFocusInput(event) {
  event.preventDefault();
}
export {
  InputLabel,
  InputLabelHelperMessage,
  LABEL_SIZE_MAP
};
