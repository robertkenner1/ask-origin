"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const shared = require("../Button/shared.cjs");
const Tooltip = require("../Tooltip/Tooltip.cjs");
const Icon = require("../Icon/Icon.cjs");
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
const IconButton = /* @__PURE__ */ React__namespace.forwardRef(
  function IconButton2(props, forwardedRef) {
    var _a, _b;
    const { buttonProps, isPressed, ref, inProgress } = shared.useGDSButton(props, forwardedRef);
    const iconSizeMap = {
      small: "small",
      medium: "medium",
      large: "large",
      xlarge: "large"
    };
    const tooltipProps = { toggleOnClick: false, ...props.tooltipProps };
    return /* @__PURE__ */ React__namespace.createElement(Tooltip.Tooltip, { ...tooltipProps, annotation: props.shortcut }, /* @__PURE__ */ React__namespace.createElement(Tooltip.TooltipTrigger, { asChild: true }, /* @__PURE__ */ React__namespace.createElement(
      "button",
      {
        className: clsx_m.clsx(
          shared.getClassName(props, isPressed, inProgress, true),
          `gds-icon-button-${props.size || "medium"}`
        ),
        ref,
        ...buttonProps,
        "aria-hidden": props["aria-hidden"],
        tabIndex: props.tabIndex ? props.tabIndex : 0
      },
      /* @__PURE__ */ React__namespace.createElement(
        Icon.Icon,
        {
          icon: props.icon,
          accessibilityLabel: "",
          variant: "inherit",
          size: iconSizeMap[props.size || "medium"]
        }
      )
    )), /* @__PURE__ */ React__namespace.createElement(Tooltip.TooltipContent, { root: (_a = props.tooltipContentProps) == null ? void 0 : _a.root }, ((_b = props.tooltipContentProps) == null ? void 0 : _b.children) || props.accessibilityLabel));
  }
);
exports.IconButton = IconButton;
