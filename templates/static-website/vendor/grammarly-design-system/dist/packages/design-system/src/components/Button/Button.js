import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { useGDSButton, getClassName, getButtonIconStart, getButtonContent, getButtonIconEnd, textVariantMap } from "./shared.js";
/* empty css           */
import { Loader as LoaderComponentCompound } from "../Loader/Loader.js";
import { Text } from "../Text/Text.js";
const Button = /* @__PURE__ */ React__default.forwardRef(
  function Button2(props, forwardedRef) {
    const { size = "medium", children, iconEnd, iconStart, text, tabIndex, shortcut, form } = props;
    const { buttonProps, isPressed, ref, inProgress, variant } = useGDSButton(props, forwardedRef);
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
    return /* @__PURE__ */ React__default.createElement(
      "button",
      {
        className: clsx(
          getClassName(props, isPressed, inProgress, false),
          isLoading && "gds-button-loading"
        ),
        ref,
        "aria-disabled": isLoading,
        form,
        ...buttonProps,
        tabIndex: tabIndex != null ? tabIndex : 0
      },
      /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, isLoading ? /* @__PURE__ */ React__default.createElement(LoaderComponentCompound, { accessibilityLabel: "Loading", style: { position: "absolute" } }, /* @__PURE__ */ React__default.createElement(
        LoaderComponentCompound.Circular,
        {
          variant: "inherit",
          className: "gds-button-loader",
          size: loaderSizeMap[size]
        }
      )) : null, getButtonIconStart(variant, iconStart, size), getButtonContent(label, children, textVariantMap[size], variant), getButtonIconEnd(variant, iconEnd, size), shortcut != null && !["premium", "critical", "pro", "enterprise"].includes(variant) && /* @__PURE__ */ React__default.createElement(Text, { variant: textVariantMap[size], className: "gds-button-shortcut", as: "kbd" }, shortcut))
    );
  }
);
export {
  Button
};
