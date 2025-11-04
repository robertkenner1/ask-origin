"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const shared = require("./shared.cjs");
;/* empty css             */
const Loader = require("../Loader/Loader.cjs");
const Text = require("../Text/Text.cjs");
const Button = /* @__PURE__ */ React.forwardRef(
  function Button2(props, forwardedRef) {
    const { size = "medium", children, iconEnd, iconStart, text, tabIndex, shortcut, form } = props;
    const { buttonProps, isPressed, ref, inProgress, variant } = shared.useGDSButton(props, forwardedRef);
    const { isLoading } = props;
    const label = text != null ? text : typeof children === "string" ? children : void 0;
    const loaderSizeMap = {
      small: "small",
      medium: "small",
      large: "medium",
      xlarge: "medium",
      "2xlarge": "large",
      "3xlarge": "large",
      "4xlarge": "large"
    };
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        className: clsx_m.clsx(
          shared.getClassName(props, isPressed, inProgress, false),
          isLoading && "gds-button-loading"
        ),
        ref,
        "aria-disabled": isLoading,
        form,
        ...buttonProps,
        tabIndex: tabIndex != null ? tabIndex : 0
      },
      /* @__PURE__ */ React.createElement(React.Fragment, null, isLoading ? /* @__PURE__ */ React.createElement(Loader.Loader, { accessibilityLabel: "Loading", style: { position: "absolute" } }, /* @__PURE__ */ React.createElement(
        Loader.Loader.Circular,
        {
          variant: "inherit",
          className: "gds-button-loader",
          size: loaderSizeMap[size]
        }
      )) : null, shared.getButtonIconStart(variant, iconStart, size), shared.getButtonContent(label, children, shared.textVariantMap[size], variant), shared.getButtonIconEnd(variant, iconEnd, size), shortcut != null && !["premium", "critical", "pro", "enterprise"].includes(variant) && /* @__PURE__ */ React.createElement(Text.Text, { variant: shared.textVariantMap[size], className: "gds-button-shortcut", as: "kbd" }, shortcut))
    );
  }
);
exports.Button = Button;
