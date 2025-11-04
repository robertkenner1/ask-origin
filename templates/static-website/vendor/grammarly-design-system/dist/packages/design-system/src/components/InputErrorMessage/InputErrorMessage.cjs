"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const Flex = require("../Flex/Flex.cjs");
const interface_error = require("../../../../icons/generated/all/interface_error.cjs");
const Icon = require("../Icon/Icon.cjs");
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
  return /* @__PURE__ */ React__namespace.createElement(Flex.Flex, { gap: 1, align: "center", className: clsx_m.clsx("gds-input-error", className), ...rest }, /* @__PURE__ */ React__namespace.createElement(Flex.Flex, { flex: "0 1 auto" }, /* @__PURE__ */ React__namespace.createElement(
    Icon.Icon,
    {
      icon: interface_error.InterfaceError,
      accessibilityLabel: "Error",
      variant: "critical",
      size: getIconSize(size, component)
    }
  )), /* @__PURE__ */ React__namespace.createElement(
    Text.Text,
    {
      variant: getMessageTextSize(size, component),
      className: "gds-input-error-message",
      color: "critical-default",
      as: "p"
    },
    errorMessage
  ));
};
exports.InputErrorMessage = InputErrorMessage;
