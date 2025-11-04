"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const shared = require("../shared.cjs");
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
function useButton(props) {
  const {
    onPress,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    isDisabled = false,
    isLoading = false,
    inProgress = false,
    type = "button",
    ...rest
  } = props;
  const [isPressed, setIsPressed] = React__namespace.useState(false);
  const keyPressedRef = React__namespace.useRef(null);
  const isInteractionDisabled = isDisabled || isLoading || inProgress;
  const handleClick = (e) => {
    var _a;
    if (isInteractionDisabled) return;
    if (e.detail === 0) return;
    (_a = e.stopPropagation) == null ? void 0 : _a.call(e);
    const pressEvent = shared.createPressEvent(e, "mouse");
    onPress == null ? void 0 : onPress(pressEvent);
  };
  const handleKeyDown = (e) => {
    if (isInteractionDisabled) {
      e.preventDefault();
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      setIsPressed(true);
      keyPressedRef.current = e.key;
    }
    onKeyDown == null ? void 0 : onKeyDown(e);
  };
  const handleKeyUp = (e) => {
    if (isInteractionDisabled) return;
    if (e.key === "Enter" || e.key === " ") {
      setIsPressed(false);
      if (keyPressedRef.current === e.key) {
        const pressEvent = shared.createPressEvent(e, "keyboard");
        onPress == null ? void 0 : onPress(pressEvent);
      }
      keyPressedRef.current = null;
    }
    onKeyUp == null ? void 0 : onKeyUp(e);
  };
  const handlePointerDown = (e) => {
    if (e.button === 0 && !isInteractionDisabled) {
      setIsPressed(true);
    }
  };
  const handlePointerUp = () => {
    setIsPressed(false);
  };
  const handleBlur = () => {
    setIsPressed(false);
    keyPressedRef.current = null;
  };
  const buttonProps = {
    ..._import.filterDOMProps(rest),
    type,
    disabled: isDisabled,
    onClick: handleClick,
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerCancel: handlePointerUp,
    onPointerLeave: handlePointerUp,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseEnter,
    onMouseLeave,
    onBlur: handleBlur,
    "aria-controls": props.accessibilityControls || props["aria-controls"],
    "aria-haspopup": props.accessibilityHasPopup || props["aria-haspopup"],
    "aria-label": props.accessibilityLabel || props["aria-label"],
    "aria-expanded": props.accessibilityExpanded || props["aria-expanded"]
  };
  return { buttonProps, isPressed };
}
exports.useButton = useButton;
