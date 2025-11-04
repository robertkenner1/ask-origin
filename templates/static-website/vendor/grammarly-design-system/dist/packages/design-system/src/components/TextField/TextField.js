import * as React from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { extendInputProps } from "./shared.js";
/* empty css              */
import { useTextField as $2d73ec29415bd339$export$712718f7aec83d5 } from "../../../../../external/@react-aria_textfield@3.11.0_react@18.2.0/external/@react-aria/textfield/dist/import.js";
import { VisuallyHidden as $5c3e21d68f1c4674$export$439d29a4e110a164 } from "../../../../../external/@react-aria_visually-hidden@3.8.3_react@18.2.0/external/@react-aria/visually-hidden/dist/import.js";
import { InterfaceShow } from "../../../../icons/generated/all/interface_show.js";
import { InterfaceHide } from "../../../../icons/generated/all/interface_hide.js";
import { InputLabel } from "../InputLabel/InputLabel.js";
import { Icon } from "../Icon/Icon.js";
import { InputErrorMessage } from "../InputErrorMessage/InputErrorMessage.js";
const TextField = /* @__PURE__ */ React.forwardRef(
  function TextField2(props, forwardedRef) {
    var _a;
    const {
      accessibilityLabelHidePassword = "Hide password",
      accessibilityLabelShowPassword = "Show password",
      accessibilityLivePasswordIsShowing = "Your password is now showing",
      accessibilityLivePasswordIsHidden = "Your password is now hidden",
      className,
      label,
      helperMessage,
      errorMessage,
      isRequired,
      isOptional,
      iconStart,
      placeholder,
      labelDisplay = "visible",
      labelIndicatorForOptional,
      labelIndicatorForRequired,
      type: typeProp = "text",
      min,
      max,
      step,
      pattern,
      spellCheck,
      size = "medium",
      style
    } = props;
    const [dynamicType, setDynamicType] = React.useState(typeProp);
    const inputRef = React.useRef(null);
    React.useImperativeHandle(forwardedRef, () => inputRef.current);
    const { labelProps, inputProps } = $2d73ec29415bd339$export$712718f7aec83d5(
      { ...props, validationState: errorMessage != null ? "invalid" : "valid", type: dynamicType },
      inputRef
    );
    extendInputProps(inputProps, props);
    const extraInputProps = {
      min,
      max,
      step,
      pattern,
      spellCheck,
      style
    };
    if (typeProp === "number") {
      extraInputProps.inputMode = (_a = extraInputProps.inputMode) != null ? _a : "numeric";
    }
    React.useEffect(() => {
      const finalType = typeProp === "number" ? "text" : typeProp;
      setDynamicType(finalType);
    }, [typeProp]);
    const isCurrentlyPasswordType = dynamicType === "password";
    const passwordStatus = isCurrentlyPasswordType ? accessibilityLivePasswordIsHidden : accessibilityLivePasswordIsShowing;
    return /* @__PURE__ */ React.createElement("div", { className: clsx("gds-text-field", `gds-text-field-${size}`) }, /* @__PURE__ */ React.createElement(
      InputLabel,
      {
        label,
        labelDisplay,
        helperMessage,
        isRequired,
        isOptional,
        labelIndicatorForRequired,
        labelIndicatorForOptional,
        errorMessage,
        size,
        ...labelProps
      }
    ), typeProp === "password" && /* @__PURE__ */ React.createElement($5c3e21d68f1c4674$export$439d29a4e110a164, { "aria-live": "polite" }, passwordStatus), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `gds-text-field-container ${typeProp === "password" ? "gds-text-field-container-password" : ""}`
      },
      iconStart != null && /* @__PURE__ */ React.createElement("div", { className: "gds-text-field-icon-start" }, /* @__PURE__ */ React.createElement(Icon, { icon: iconStart, accessibilityLabel: "", size: "medium" })),
      /* @__PURE__ */ React.createElement(
        "input",
        {
          className: clsx("gds-text-field-input", className),
          ...inputProps,
          ...extraInputProps,
          placeholder,
          ref: inputRef
        }
      ),
      typeProp === "password" && /* @__PURE__ */ React.createElement(
        "button",
        {
          "aria-label": isCurrentlyPasswordType ? accessibilityLabelShowPassword : accessibilityLabelHidePassword,
          "aria-controls": inputProps == null ? void 0 : inputProps.id,
          onClick: () => {
            setDynamicType(isCurrentlyPasswordType ? "text" : "password");
          },
          type: "button"
        },
        /* @__PURE__ */ React.createElement(
          Icon,
          {
            icon: isCurrentlyPasswordType ? InterfaceShow : InterfaceHide,
            accessibilityLabel: "",
            size: "large"
          }
        )
      )
    ), /* @__PURE__ */ React.createElement(InputErrorMessage, { size, errorMessage }));
  }
);
export {
  TextField
};
