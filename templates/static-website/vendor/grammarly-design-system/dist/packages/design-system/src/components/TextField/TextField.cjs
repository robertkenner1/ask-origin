"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const shared = require("./shared.cjs");
;/* empty css                */
const _import = require("../../../../../external/@react-aria_textfield@3.11.0_react@18.2.0/external/@react-aria/textfield/dist/import.cjs");
const _import$1 = require("../../../../../external/@react-aria_visually-hidden@3.8.3_react@18.2.0/external/@react-aria/visually-hidden/dist/import.cjs");
const interface_show = require("../../../../icons/generated/all/interface_show.cjs");
const interface_hide = require("../../../../icons/generated/all/interface_hide.cjs");
const InputLabel = require("../InputLabel/InputLabel.cjs");
const Icon = require("../Icon/Icon.cjs");
const InputErrorMessage = require("../InputErrorMessage/InputErrorMessage.cjs");
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
const TextField = /* @__PURE__ */ React__namespace.forwardRef(
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
    const [dynamicType, setDynamicType] = React__namespace.useState(typeProp);
    const inputRef = React__namespace.useRef(null);
    React__namespace.useImperativeHandle(forwardedRef, () => inputRef.current);
    const { labelProps, inputProps } = _import.useTextField(
      { ...props, validationState: errorMessage != null ? "invalid" : "valid", type: dynamicType },
      inputRef
    );
    shared.extendInputProps(inputProps, props);
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
    React__namespace.useEffect(() => {
      const finalType = typeProp === "number" ? "text" : typeProp;
      setDynamicType(finalType);
    }, [typeProp]);
    const isCurrentlyPasswordType = dynamicType === "password";
    const passwordStatus = isCurrentlyPasswordType ? accessibilityLivePasswordIsHidden : accessibilityLivePasswordIsShowing;
    return /* @__PURE__ */ React__namespace.createElement("div", { className: clsx_m.clsx("gds-text-field", `gds-text-field-${size}`) }, /* @__PURE__ */ React__namespace.createElement(
      InputLabel.InputLabel,
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
    ), typeProp === "password" && /* @__PURE__ */ React__namespace.createElement(_import$1.VisuallyHidden, { "aria-live": "polite" }, passwordStatus), /* @__PURE__ */ React__namespace.createElement(
      "div",
      {
        className: `gds-text-field-container ${typeProp === "password" ? "gds-text-field-container-password" : ""}`
      },
      iconStart != null && /* @__PURE__ */ React__namespace.createElement("div", { className: "gds-text-field-icon-start" }, /* @__PURE__ */ React__namespace.createElement(Icon.Icon, { icon: iconStart, accessibilityLabel: "", size: "medium" })),
      /* @__PURE__ */ React__namespace.createElement(
        "input",
        {
          className: clsx_m.clsx("gds-text-field-input", className),
          ...inputProps,
          ...extraInputProps,
          placeholder,
          ref: inputRef
        }
      ),
      typeProp === "password" && /* @__PURE__ */ React__namespace.createElement(
        "button",
        {
          "aria-label": isCurrentlyPasswordType ? accessibilityLabelShowPassword : accessibilityLabelHidePassword,
          "aria-controls": inputProps == null ? void 0 : inputProps.id,
          onClick: () => {
            setDynamicType(isCurrentlyPasswordType ? "text" : "password");
          },
          type: "button"
        },
        /* @__PURE__ */ React__namespace.createElement(
          Icon.Icon,
          {
            icon: isCurrentlyPasswordType ? interface_show.InterfaceShow : interface_hide.InterfaceHide,
            accessibilityLabel: "",
            size: "large"
          }
        )
      )
    ), /* @__PURE__ */ React__namespace.createElement(InputErrorMessage.InputErrorMessage, { size, errorMessage }));
  }
);
exports.TextField = TextField;
