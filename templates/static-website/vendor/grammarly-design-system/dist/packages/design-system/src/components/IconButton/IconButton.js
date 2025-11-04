import * as React from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { useGDSButton, getClassName } from "../Button/shared.js";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip/Tooltip.js";
import { Icon } from "../Icon/Icon.js";
const IconButton = /* @__PURE__ */ React.forwardRef(
  function IconButton2(props, forwardedRef) {
    var _a, _b;
    const { buttonProps, isPressed, ref, inProgress } = useGDSButton(props, forwardedRef);
    const iconSizeMap = {
      small: "small",
      medium: "medium",
      large: "large",
      xlarge: "large"
    };
    const tooltipProps = { toggleOnClick: false, ...props.tooltipProps };
    return /* @__PURE__ */ React.createElement(Tooltip, { ...tooltipProps, annotation: props.shortcut }, /* @__PURE__ */ React.createElement(TooltipTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: clsx(
          getClassName(props, isPressed, inProgress, true),
          `gds-icon-button-${props.size || "medium"}`
        ),
        ref,
        ...buttonProps,
        "aria-hidden": props["aria-hidden"],
        tabIndex: props.tabIndex ? props.tabIndex : 0
      },
      /* @__PURE__ */ React.createElement(
        Icon,
        {
          icon: props.icon,
          accessibilityLabel: "",
          variant: "inherit",
          size: iconSizeMap[props.size || "medium"]
        }
      )
    )), /* @__PURE__ */ React.createElement(TooltipContent, { root: (_a = props.tooltipContentProps) == null ? void 0 : _a.root }, ((_b = props.tooltipContentProps) == null ? void 0 : _b.children) || props.accessibilityLabel));
  }
);
export {
  IconButton
};
