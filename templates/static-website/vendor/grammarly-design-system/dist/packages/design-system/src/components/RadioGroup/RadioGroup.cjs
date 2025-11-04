"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const getAriaDescribedBy = require("../../helpers/getAriaDescribedBy.cjs");
;/* empty css                 */
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const Flex = require("../Flex/Flex.cjs");
const Text = require("../Text/Text.cjs");
const InputErrorMessage = require("../InputErrorMessage/InputErrorMessage.cjs");
const RadioGroupContext = /* @__PURE__ */ React.createContext({
  size: "medium",
  name: ""
});
const MAX_NUM_FOR_ONE_COL = 3;
const LABEL_SIZE_MAP = {
  medium: "text-small",
  large: "text-medium",
  xlarge: "text-large"
};
const HELPER_MESSAGE_SIZE_MAP = {
  medium: "text-xsmall",
  large: "text-small",
  xlarge: "text-medium"
};
const RadioGroup = (props) => {
  var _a;
  const {
    children,
    className,
    errorMessage,
    helperMessage,
    isOptional,
    isRequired,
    layout = "column",
    legend,
    legendDisplay,
    legendIndicatorForOptional,
    legendIndicatorForRequired,
    size = "medium",
    isDisabled,
    defaultValue,
    value,
    onChange,
    role,
    "aria-invalid": ariaInvalid,
    ...fieldsetProps
  } = props;
  const numberCols = React.Children.count(children) > MAX_NUM_FOR_ONE_COL ? 2 : 1;
  const maybeName = _import.useId();
  const name = (_a = props.name) != null ? _a : maybeName;
  const helperMessageId = _import.useId();
  const errorMessageId = _import.useId();
  const optionalityIndicator = isOptional ? legendIndicatorForOptional != null ? legendIndicatorForOptional : "(Optional)" : isRequired ? legendIndicatorForRequired != null ? legendIndicatorForRequired : "(Required)" : void 0;
  return /* @__PURE__ */ React.createElement(
    "fieldset",
    {
      ...fieldsetProps,
      className: clsx_m.clsx(className, "gds-radio-group"),
      role: role != null ? role : "radiogroup",
      "aria-invalid": ariaInvalid != null ? ariaInvalid : !!errorMessage,
      "aria-describedby": getAriaDescribedBy.getAriaDescribedBy(
        props["aria-describedby"],
        helperMessage ? helperMessageId : void 0,
        errorMessage ? errorMessageId : void 0
      ),
      onChange: onChange && ((e) => {
        if (e.target instanceof HTMLInputElement) {
          onChange(e.target.value);
        }
      }),
      "data-size": size,
      "data-layout": layout,
      "data-cols": layout === "column" ? numberCols : void 0,
      "data-error": errorMessage ? true : void 0
    },
    /* @__PURE__ */ React.createElement("legend", { className: legendDisplay === "hidden" ? "gds-sr-only" : void 0 }, /* @__PURE__ */ React.createElement(Flex.Flex, { gap: 2, align: "center" }, /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: LABEL_SIZE_MAP[size], weight: "semibold" }, legend), /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: LABEL_SIZE_MAP[size], color: "base-subdued", "aria-hidden": true }, optionalityIndicator))),
    helperMessage && /* @__PURE__ */ React.createElement(
      Text.Text,
      {
        as: "p",
        id: helperMessageId,
        variant: HELPER_MESSAGE_SIZE_MAP[size],
        color: "base-subdued",
        className: clsx_m.clsx(
          "gds-radio-group-helper-message",
          legendDisplay === "hidden" && "gds-sr-only"
        )
      },
      helperMessage
    ),
    /* @__PURE__ */ React.createElement(
      RadioGroupContext.Provider,
      {
        value: { name, size, isDisabled, value, defaultValue, isRequired }
      },
      /* @__PURE__ */ React.createElement("div", { className: "gds-radio-button-container" }, children)
    ),
    /* @__PURE__ */ React.createElement(InputErrorMessage.InputErrorMessage, { errorMessage, size, id: errorMessageId })
  );
};
const RadioButton = (props) => {
  const {
    children,
    helperMessage,
    isDisabled,
    id: _id,
    "aria-describedby": ariaDescribedBy,
    value,
    defaultChecked: _defaultChecked,
    checked: _checked,
    required: _required,
    // See Safari bug: https://bugs.webkit.org/show_bug.cgi?id=229895
    tabIndex = 0,
    ...inputProps
  } = props;
  const ref = React.useRef(null);
  const maybeInputId = _import.useId();
  const id = _id != null ? _id : maybeInputId;
  const helperId = _import.useId();
  const radioGroupContext = React.useContext(RadioGroupContext);
  const required = _required || radioGroupContext.isRequired;
  const disabled = isDisabled || radioGroupContext.isDisabled;
  const checked = (_checked != null ? _checked : radioGroupContext.value) ? radioGroupContext.value === value : void 0;
  const defaultChecked = (_defaultChecked != null ? _defaultChecked : radioGroupContext.defaultValue) ? radioGroupContext.defaultValue === value : void 0;
  const labelContent = typeof children === "string" ? /* @__PURE__ */ React.createElement(Text.Text, { variant: LABEL_SIZE_MAP[radioGroupContext.size], as: "span", weight: "medium" }, children) : children;
  return /* @__PURE__ */ React.createElement("div", { className: "gds-radio-button", "data-disabled": disabled ? true : void 0 }, /* @__PURE__ */ React.createElement(
    "input",
    {
      ...inputProps,
      id,
      ref,
      type: "radio",
      "aria-describedby": getAriaDescribedBy.getAriaDescribedBy(ariaDescribedBy, helperMessage ? helperId : void 0),
      required,
      value,
      disabled,
      checked,
      defaultChecked,
      name: radioGroupContext.name,
      tabIndex
    }
  ), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { htmlFor: id }, labelContent), helperMessage && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    Text.Text,
    {
      as: "p",
      variant: HELPER_MESSAGE_SIZE_MAP[radioGroupContext.size],
      color: "base-subdued",
      id: helperId,
      className: "gds-radio-button-helper-message"
    },
    helperMessage
  ))));
};
exports.RadioButton = RadioButton;
exports.RadioGroup = RadioGroup;
