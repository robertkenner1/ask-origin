import * as React from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { Flex } from "../Flex/Flex.js";
import { InterfaceError } from "../../../../icons/generated/all/interface_error.js";
import { Icon } from "../Icon/Icon.js";
import { Text } from "../Text/Text.js";
const getIconSize = (size, component) => {
  let iconSizeMap;
  if (component === "VerificationCode") {
    iconSizeMap = {
      small: "medium",
      medium: "large",
      large: "large"
    };
  } else {
    iconSizeMap = {
      medium: "small",
      large: "medium",
      xlarge: "large"
    };
  }
  return iconSizeMap[size || "medium"];
};
const getMessageTextSize = (size, component) => {
  let messageTextSizeMap;
  if (component === "VerificationCode") {
    messageTextSizeMap = {
      small: "text-small",
      medium: "text-medium",
      large: "text-medium"
    };
  } else {
    messageTextSizeMap = {
      medium: "text-xsmall",
      large: "text-small",
      xlarge: "text-medium"
    };
  }
  return messageTextSizeMap[size || "medium"];
};
const InputErrorMessage = ({
  errorMessage,
  className,
  component,
  size = "medium",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color,
  ...rest
}) => {
  if (errorMessage == null || errorMessage.trim().length == 0) return null;
  return /* @__PURE__ */ React.createElement(Flex, { gap: 1, align: "center", className: clsx("gds-input-error", className), ...rest }, /* @__PURE__ */ React.createElement(Flex, { flex: "0 1 auto" }, /* @__PURE__ */ React.createElement(
    Icon,
    {
      icon: InterfaceError,
      accessibilityLabel: "Error",
      variant: "critical",
      size: getIconSize(size, component)
    }
  )), /* @__PURE__ */ React.createElement(
    Text,
    {
      variant: getMessageTextSize(size, component),
      className: "gds-input-error-message",
      color: "critical-default",
      as: "p"
    },
    errorMessage
  ));
};
export {
  InputErrorMessage
};
