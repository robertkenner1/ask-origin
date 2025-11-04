import React__default, { useEffect } from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
/* empty css          */
import { InterfaceClose } from "../../../../icons/generated/all/interface_close.js";
import { InterfaceOk } from "../../../../icons/generated/all/interface_ok.js";
import { InterfaceError } from "../../../../icons/generated/all/interface_error.js";
import { InterfaceWarning } from "../../../../icons/generated/all/interface_warning.js";
import { InterfaceSpinner } from "../../../../icons/generated/all/interface_spinner.js";
import { liveAnnouncer } from "../LiveAnnouncer/liveAnnouncer.js";
import { Flex } from "../Flex/Flex.js";
import { Text } from "../Text/Text.js";
import { IconButton } from "../IconButton/IconButton.js";
import { Icon } from "../Icon/Icon.js";
const ToastIcon = ({ variant }) => {
  if (variant === "success")
    return /* @__PURE__ */ React__default.createElement(
      Icon,
      {
        icon: InterfaceOk,
        size: "large",
        accessibilityLabel: "success",
        variant
      }
    );
  else if (variant === "critical")
    return /* @__PURE__ */ React__default.createElement(Icon, { icon: InterfaceError, size: "large", accessibilityLabel: "Error", variant });
  else if (variant === "warning")
    return /* @__PURE__ */ React__default.createElement(
      Icon,
      {
        icon: InterfaceWarning,
        size: "large",
        accessibilityLabel: "warning",
        variant
      }
    );
  else if (variant === "loading")
    return /* @__PURE__ */ React__default.createElement(
      Icon,
      {
        icon: InterfaceSpinner,
        size: "large",
        accessibilityLabel: "loading",
        variant: "default"
      }
    );
  return null;
};
const Toast = /* @__PURE__ */ React__default.forwardRef(
  function Toast2(props, forwardedRef) {
    const {
      text,
      variant = "default",
      primaryAction,
      secondaryAction,
      onClose,
      className,
      ...rest
    } = props;
    useEffect(() => {
      return () => {
        liveAnnouncer.clear();
      };
    }, []);
    useEffect(() => {
      const assertiveness = variant === "critical" ? "assertive" : "polite";
      text && liveAnnouncer.announce(text, assertiveness);
    }, []);
    return /* @__PURE__ */ React__default.createElement(
      "div",
      {
        ref: forwardedRef,
        className: clsx("gds-toast", `gds-toast-${variant}`, "inverse", className),
        ...rest
      },
      /* @__PURE__ */ React__default.createElement(
        Flex,
        {
          "data-gds-mode": "dark",
          borderRadius: 1,
          padding: 3,
          gap: 3,
          align: "start",
          justify: "space-between",
          bgColor: "background-base-subdued"
        },
        /* @__PURE__ */ React__default.createElement(Flex, { marginTop: 1, align: "start", justify: "space-between" }, variant !== "default" && /* @__PURE__ */ React__default.createElement("span", { className: clsx("gds-toast-icon", `gds-toast-icon-${variant}`) }, /* @__PURE__ */ React__default.createElement(ToastIcon, { variant })), /* @__PURE__ */ React__default.createElement(
          Flex,
          {
            direction: "column",
            gap: 2,
            marginLeft: 2,
            marginTop: 0.5,
            justify: "start",
            flex: "2"
          },
          /* @__PURE__ */ React__default.createElement(
            Text,
            {
              variant: "text-small",
              as: "span",
              color: "light-default",
              className: "gds-toast-text",
              role: "status"
            },
            text
          ),
          (primaryAction || secondaryAction) && /* @__PURE__ */ React__default.createElement(Flex, { gap: 2, marginLeft: -3 }, primaryAction, secondaryAction)
        )),
        /* @__PURE__ */ React__default.createElement(
          IconButton,
          {
            icon: InterfaceClose,
            accessibilityLabel: "Close",
            onClick: onClose,
            size: "medium",
            variant: "tertiary"
          }
        )
      )
    );
  }
);
export {
  Toast
};
