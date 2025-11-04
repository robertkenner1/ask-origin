"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const useButton = require("./hooks/useButton.cjs");
const Icon = require("../Icon/Icon.cjs");
const interface_starFilled = require("../../../../icons/generated/all/interface_star-filled.cjs");
const interface_premium = require("../../../../icons/generated/all/interface_premium.cjs");
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
const isPromise = (value) => value != null && typeof value === "object" && "then" in value && typeof value.then === "function";
const iconSizeMap = {
  small: "small",
  medium: "medium",
  large: "large",
  xlarge: "large",
  "2xlarge": "large",
  "3xlarge": "large",
  "4xlarge": "large"
};
const textVariantMap = {
  small: "text-xsmall",
  medium: "text-small",
  large: "text-medium",
  xlarge: "text-large",
  "2xlarge": "text-large",
  "3xlarge": "text-large",
  "4xlarge": "text-large"
};
function getVariant(variant) {
  return variant != null ? variant : "primary";
}
function getClassName(props, isPressed, inProgress, isIconButton) {
  var _a, _b;
  return clsx_m.clsx(
    "gds-button",
    `gds-button-${getVariant(props.variant)}`,
    isIconButton ? null : `gds-button-${props.size || "medium"}`,
    ((_b = (_a = props.isDisabled) != null ? _a : inProgress) != null ? _b : false) && "gds-button-disabled",
    props.width === "full" && "gds-button-full",
    // see https://react-spectrum.adobe.com/blog/building-a-button-part-1.html on why we custom class for pressed events
    isPressed && "gds-button-pressed",
    props.className
  );
}
const createPressEvent = (e, pointerType) => ({
  type: "press",
  pointerType,
  target: e.currentTarget,
  shiftKey: e.shiftKey,
  ctrlKey: e.ctrlKey,
  metaKey: e.metaKey,
  altKey: e.altKey,
  continuePropagation: () => {
  }
});
function useGDSButton(props, forwardedRef) {
  var _a;
  const ref = _import.useObjectRef(forwardedRef);
  const { onClick, isLoading, onKeyDown, onKeyUp, ...rest } = props;
  const mounted = React__namespace.useRef(false);
  const [inProgress, setInProgress] = React__namespace.useState(false);
  React__namespace.useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  React__namespace.useEffect(() => {
    var _a2;
    if (props.isDisabled && document.activeElement === ref.current) {
      (_a2 = ref.current) == null ? void 0 : _a2.blur();
    }
  }, [props.isDisabled]);
  const { buttonProps, isPressed } = useButton.useButton({
    ...rest,
    onKeyDown,
    onKeyUp,
    inProgress,
    isLoading,
    type: (_a = props.type) != null ? _a : "button",
    onPress: React__namespace.useCallback(
      (event) => {
        if (isLoading || inProgress) return;
        const result = onClick == null ? void 0 : onClick(event);
        if (isPromise(result)) {
          setInProgress(true);
          result.finally(() => {
            if (mounted.current) {
              setInProgress(false);
            }
          });
        }
      },
      [onClick, inProgress, isLoading, mounted]
    )
  });
  if (buttonProps.style == null && props.style != null) {
    buttonProps.style = props.style;
  }
  return {
    ref,
    isPressed,
    buttonProps,
    inProgress,
    variant: getVariant(props.variant)
  };
}
function getButtonIconStart(variant, iconStart, size) {
  let adjustedIconStart = iconStart;
  if (iconStart != null) {
    switch (variant) {
      case "premium":
        adjustedIconStart = interface_premium.InterfacePremium;
        break;
      case "pro":
        adjustedIconStart = interface_starFilled.InterfaceStarFilled;
        break;
      case "enterprise":
        adjustedIconStart = void 0;
        break;
    }
  }
  return adjustedIconStart != null ? /* @__PURE__ */ React__namespace.createElement(
    Icon.Icon,
    {
      icon: adjustedIconStart,
      accessibilityLabel: "",
      variant: "inherit",
      size: iconSizeMap[size || "medium"]
    }
  ) : null;
}
function getButtonIconEnd(variant, iconEnd, size) {
  let adjustedIconEnd = iconEnd;
  if (iconEnd != null) {
    switch (variant) {
      case "premium":
        adjustedIconEnd = interface_premium.InterfacePremium;
        break;
      case "pro":
        adjustedIconEnd = void 0;
        break;
      case "enterprise":
        adjustedIconEnd = void 0;
        break;
    }
  }
  return adjustedIconEnd != null ? /* @__PURE__ */ React__namespace.createElement(
    Icon.Icon,
    {
      icon: adjustedIconEnd,
      accessibilityLabel: "",
      variant: "inherit",
      size: iconSizeMap[size || "medium"]
    }
  ) : null;
}
const getButtonContent = (label, children, textVariant, buttonVariant) => {
  if (buttonVariant === void 0) return;
  return label == null ? children : /* @__PURE__ */ React__namespace.createElement(
    Text.Text,
    {
      as: "span",
      variant: textVariant,
      weight: ["primary", "ghost", "premium", "pro", "enterprise", "critical"].includes(buttonVariant) ? "semibold" : "normal"
    },
    label
  );
};
exports.createPressEvent = createPressEvent;
exports.getButtonContent = getButtonContent;
exports.getButtonIconEnd = getButtonIconEnd;
exports.getButtonIconStart = getButtonIconStart;
exports.getClassName = getClassName;
exports.getVariant = getVariant;
exports.textVariantMap = textVariantMap;
exports.useGDSButton = useGDSButton;
