import * as React from "react";
import { filterDOMProps as $65484d02dcb7eb3e$export$457c3d6518dd4c6f } from "../../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { createPressEvent } from "../shared.js";
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
  const [isPressed, setIsPressed] = React.useState(false);
  const keyPressedRef = React.useRef(null);
  const isInteractionDisabled = isDisabled || isLoading || inProgress;
  const handleClick = (e) => {
    var _a;
    if (isInteractionDisabled) return;
    if (e.detail === 0) return;
    (_a = e.stopPropagation) == null ? void 0 : _a.call(e);
    const pressEvent = createPressEvent(e, "mouse");
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
        const pressEvent = createPressEvent(e, "keyboard");
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
    ...$65484d02dcb7eb3e$export$457c3d6518dd4c6f(rest),
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
export {
  useButton
};
