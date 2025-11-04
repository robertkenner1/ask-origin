import { filterDOMProps as $65484d02dcb7eb3e$export$457c3d6518dd4c6f, useFormReset as $99facab73266f662$export$5add1d006293d136, mergeProps as $3ef42575df84b30b$export$9d1611c77c2fe928 } from "../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { useField as $2baaea4c71418dea$export$294aa081a6c6f55d } from "../../../../../@react-aria_label@3.6.1_react@18.2.0/external/@react-aria/label/dist/import.js";
import { useFocusable as $e6afbd83fe6ebbd2$export$4c014de7c8940b4c } from "../../../../../@react-aria_focus@3.14.0_react@18.2.0/external/@react-aria/focus/dist/import.js";
import "react";
function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
  let { inputElementType = "input", isDisabled = false, isRequired = false, isReadOnly = false, validationState, type = "text", value, defaultValue, onChange = () => {
  } } = props;
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
  let { labelProps, fieldProps, descriptionProps, errorMessageProps } = $2baaea4c71418dea$export$294aa081a6c6f55d(props);
  let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
    labelable: true
  });
  const inputOnlyProps = {
    type,
    pattern: props.pattern
  };
  var _ref;
  $99facab73266f662$export$5add1d006293d136(ref, (_ref = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref !== void 0 ? _ref : "", onChange);
  return {
    labelProps,
    inputProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, inputElementType === "input" && inputOnlyProps, {
      disabled: isDisabled,
      readOnly: isReadOnly,
      "aria-required": isRequired || void 0,
      "aria-invalid": validationState === "invalid" || void 0,
      "aria-errormessage": props["aria-errormessage"],
      "aria-activedescendant": props["aria-activedescendant"],
      "aria-autocomplete": props["aria-autocomplete"],
      "aria-haspopup": props["aria-haspopup"],
      value: props.value,
      defaultValue: props.value ? void 0 : props.defaultValue,
      onChange: (e) => onChange(e.target.value),
      autoComplete: props.autoComplete,
      maxLength: props.maxLength,
      minLength: props.minLength,
      name: props.name,
      placeholder: props.placeholder,
      inputMode: props.inputMode,
      // Clipboard events
      onCopy: props.onCopy,
      onCut: props.onCut,
      onPaste: props.onPaste,
      // Composition events
      onCompositionEnd: props.onCompositionEnd,
      onCompositionStart: props.onCompositionStart,
      onCompositionUpdate: props.onCompositionUpdate,
      // Selection events
      onSelect: props.onSelect,
      // Input events
      onBeforeInput: props.onBeforeInput,
      onInput: props.onInput,
      ...focusableProps,
      ...fieldProps
    }),
    descriptionProps,
    errorMessageProps
  };
}
export {
  $2d73ec29415bd339$export$712718f7aec83d5 as useTextField
};
