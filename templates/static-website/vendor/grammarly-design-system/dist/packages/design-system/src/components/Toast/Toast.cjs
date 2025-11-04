"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
;/* empty css            */
const interface_close = require("../../../../icons/generated/all/interface_close.cjs");
const interface_ok = require("../../../../icons/generated/all/interface_ok.cjs");
const interface_error = require("../../../../icons/generated/all/interface_error.cjs");
const interface_warning = require("../../../../icons/generated/all/interface_warning.cjs");
const interface_spinner = require("../../../../icons/generated/all/interface_spinner.cjs");
const liveAnnouncer = require("../LiveAnnouncer/liveAnnouncer.cjs");
const Flex = require("../Flex/Flex.cjs");
const Text = require("../Text/Text.cjs");
const IconButton = require("../IconButton/IconButton.cjs");
const Icon = require("../Icon/Icon.cjs");
const ToastIcon = ({ variant }) => {
  if (variant === "success")
    return /* @__PURE__ */ React.createElement(
      Icon.Icon,
      {
        icon: interface_ok.InterfaceOk,
        size: "large",
        accessibilityLabel: "success",
        variant
      }
    );
  else if (variant === "critical")
    return /* @__PURE__ */ React.createElement(Icon.Icon, { icon: interface_error.InterfaceError, size: "large", accessibilityLabel: "Error", variant });
  else if (variant === "warning")
    return /* @__PURE__ */ React.createElement(
      Icon.Icon,
      {
        icon: interface_warning.InterfaceWarning,
        size: "large",
        accessibilityLabel: "warning",
        variant
      }
    );
  else if (variant === "loading")
    return /* @__PURE__ */ React.createElement(
      Icon.Icon,
      {
        icon: interface_spinner.InterfaceSpinner,
        size: "large",
        accessibilityLabel: "loading",
        variant: "default"
      }
    );
  return null;
};
const Toast = /* @__PURE__ */ React.forwardRef(
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
    React.useEffect(() => {
      return () => {
        liveAnnouncer.liveAnnouncer.clear();
      };
    }, []);
    React.useEffect(() => {
      const assertiveness = variant === "critical" ? "assertive" : "polite";
      text && liveAnnouncer.liveAnnouncer.announce(text, assertiveness);
    }, []);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: forwardedRef,
        className: clsx_m.clsx("gds-toast", `gds-toast-${variant}`, "inverse", className),
        ...rest
      },
      /* @__PURE__ */ React.createElement(
        Flex.Flex,
        {
          "data-gds-mode": "dark",
          borderRadius: 1,
          padding: 3,
          gap: 3,
          align: "start",
          justify: "space-between",
          bgColor: "background-base-subdued"
        },
        /* @__PURE__ */ React.createElement(Flex.Flex, { marginTop: 1, align: "start", justify: "space-between" }, variant !== "default" && /* @__PURE__ */ React.createElement("span", { className: clsx_m.clsx("gds-toast-icon", `gds-toast-icon-${variant}`) }, /* @__PURE__ */ React.createElement(ToastIcon, { variant })), /* @__PURE__ */ React.createElement(
          Flex.Flex,
          {
            direction: "column",
            gap: 2,
            marginLeft: 2,
            marginTop: 0.5,
            justify: "start",
            flex: "2"
          },
          /* @__PURE__ */ React.createElement(
            Text.Text,
            {
              variant: "text-small",
              as: "span",
              color: "light-default",
              className: "gds-toast-text",
              role: "status"
            },
            text
          ),
          (primaryAction || secondaryAction) && /* @__PURE__ */ React.createElement(Flex.Flex, { gap: 2, marginLeft: -3 }, primaryAction, secondaryAction)
        )),
        /* @__PURE__ */ React.createElement(
          IconButton.IconButton,
          {
            icon: interface_close.InterfaceClose,
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
exports.Toast = Toast;
