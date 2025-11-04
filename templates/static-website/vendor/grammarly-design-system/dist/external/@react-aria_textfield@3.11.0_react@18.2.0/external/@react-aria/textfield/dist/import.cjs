"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _import$2 = require("../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const _import$1 = require("../../../../../@react-aria_label@3.6.1_react@18.2.0/external/@react-aria/label/dist/import.cjs");
const _import = require("../../../../../@react-aria_focus@3.14.0_react@18.2.0/external/@react-aria/focus/dist/import.cjs");
require("react");
function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
  let { inputElementType = "input", isDisabled = false, isRequired = false, isReadOnly = false, validationState, type = "text", value, defaultValue, onChange = () => {
  } } = props;
  let { focusableProps } = _import.useFocusable(props, ref);
  let { labelProps, fieldProps, descriptionProps, errorMessageProps } = _import$1.useField(props);
  let domProps = _import$2.filterDOMProps(props, {
    labelable: true
  });
  const inputOnlyProps = {
    type,
    pattern: props.pattern
  };
  var _ref;
  _import$2.useFormReset(ref, (_ref = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref !== void 0 ? _ref : "", onChange);
  return {
    labelProps,
    inputProps: _import$2.mergeProps(domProps, inputElementType === "input" && inputOnlyProps, {
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
exports.useTextField = $2d73ec29415bd339$export$712718f7aec83d5;
