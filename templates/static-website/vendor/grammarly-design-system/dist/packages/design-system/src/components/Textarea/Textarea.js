import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
/* empty css             */
import { useTextField as $2d73ec29415bd339$export$712718f7aec83d5 } from "../../../../../external/@react-aria_textfield@3.11.0_react@18.2.0/external/@react-aria/textfield/dist/import.js";
import { InputLabel } from "../InputLabel/InputLabel.js";
import { InputErrorMessage } from "../InputErrorMessage/InputErrorMessage.js";
const Textarea = /* @__PURE__ */ React__default.forwardRef(
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
    const textareaRef = React__default.useRef(null);
    React__default.useImperativeHandle(forwardedRef, () => textareaRef.current);
    const { labelProps, inputProps } = $2d73ec29415bd339$export$712718f7aec83d5(
      {
        ...props,
        validationState: errorMessage != null ? "invalid" : "valid",
        inputElementType: "textarea"
      },
      textareaRef
    );
    const genericInputProps = { minLength, maxLength, spellCheck };
    return /* @__PURE__ */ React__default.createElement("div", { className: "gds-text-area" }, /* @__PURE__ */ React__default.createElement(
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
        ...labelProps
      }
    ), /* @__PURE__ */ React__default.createElement("div", { className: "gds-text-area-container" }, /* @__PURE__ */ React__default.createElement(
      "textarea",
      {
        className: clsx(
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
    )), /* @__PURE__ */ React__default.createElement(InputErrorMessage, { errorMessage }));
  }
);
export {
  Textarea
};
