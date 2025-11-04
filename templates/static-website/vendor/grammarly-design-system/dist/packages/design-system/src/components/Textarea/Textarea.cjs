"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
;/* empty css               */
const _import = require("../../../../../external/@react-aria_textfield@3.11.0_react@18.2.0/external/@react-aria/textfield/dist/import.cjs");
const InputLabel = require("../InputLabel/InputLabel.cjs");
const InputErrorMessage = require("../InputErrorMessage/InputErrorMessage.cjs");
const Textarea = /* @__PURE__ */ React.forwardRef(
  function Textarea2(props, forwardedRef) {
    const {
      label,
      className,
      helperMessage,
      errorMessage,
      isRequired,
      isOptional,
      placeholder,
      labelDisplay = "visible",
      labelIndicatorForOptional,
      labelIndicatorForRequired,
      rows = 3,
      resizable = "on",
      minLength,
      maxLength,
      spellCheck
    } = props;
    const textareaRef = React.useRef(null);
    React.useImperativeHandle(forwardedRef, () => textareaRef.current);
    const { labelProps, inputProps } = _import.useTextField(
      {
        ...props,
        validationState: errorMessage != null ? "invalid" : "valid",
        inputElementType: "textarea"
      },
      textareaRef
    );
    const genericInputProps = { minLength, maxLength, spellCheck };
    return /* @__PURE__ */ React.createElement("div", { className: "gds-text-area" }, /* @__PURE__ */ React.createElement(
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
        ...labelProps
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "gds-text-area-container" }, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        className: clsx_m.clsx(
          "gds-text-area-input",
          inputProps.disabled === true ? "" : `gds-text-area-resize-${resizable}`,
          className
        ),
        ...genericInputProps,
        ...inputProps,
        placeholder,
        ref: textareaRef,
        rows,
        style: props.style
      }
    )), /* @__PURE__ */ React.createElement(InputErrorMessage.InputErrorMessage, { errorMessage }));
  }
);
exports.Textarea = Textarea;
