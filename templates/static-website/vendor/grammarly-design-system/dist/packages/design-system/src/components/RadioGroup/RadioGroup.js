import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { getAriaDescribedBy } from "../../helpers/getAriaDescribedBy.js";
/* empty css               */
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { Flex } from "../Flex/Flex.js";
import { Text } from "../Text/Text.js";
import { InputErrorMessage } from "../InputErrorMessage/InputErrorMessage.js";
const RadioGroupContext = /* @__PURE__ */ React__default.createContext({
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
  const numberCols = React__default.Children.count(children) > MAX_NUM_FOR_ONE_COL ? 2 : 1;
  const maybeName = $bdb11010cef70236$export$f680877a34711e37();
  const name = (_a = props.name) != null ? _a : maybeName;
  const helperMessageId = $bdb11010cef70236$export$f680877a34711e37();
  const errorMessageId = $bdb11010cef70236$export$f680877a34711e37();
  const optionalityIndicator = isOptional ? legendIndicatorForOptional != null ? legendIndicatorForOptional : "(Optional)" : isRequired ? legendIndicatorForRequired != null ? legendIndicatorForRequired : "(Required)" : void 0;
  return /* @__PURE__ */ React__default.createElement(
    "fieldset",
    {
      ...fieldsetProps,
      className: clsx(className, "gds-radio-group"),
      role: role != null ? role : "radiogroup",
      "aria-invalid": ariaInvalid != null ? ariaInvalid : !!errorMessage,
      "aria-describedby": getAriaDescribedBy(
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
    /* @__PURE__ */ React__default.createElement("legend", { className: legendDisplay === "hidden" ? "gds-sr-only" : void 0 }, /* @__PURE__ */ React__default.createElement(Flex, { gap: 2, align: "center" }, /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: LABEL_SIZE_MAP[size], weight: "semibold" }, legend), /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: LABEL_SIZE_MAP[size], color: "base-subdued", "aria-hidden": true }, optionalityIndicator))),
    helperMessage && /* @__PURE__ */ React__default.createElement(
      Text,
      {
        as: "p",
        id: helperMessageId,
        variant: HELPER_MESSAGE_SIZE_MAP[size],
        color: "base-subdued",
        className: clsx(
          "gds-radio-group-helper-message",
          legendDisplay === "hidden" && "gds-sr-only"
        )
      },
      helperMessage
    ),
    /* @__PURE__ */ React__default.createElement(
      RadioGroupContext.Provider,
      {
        value: { name, size, isDisabled, value, defaultValue, isRequired }
      },
      /* @__PURE__ */ React__default.createElement("div", { className: "gds-radio-button-container" }, children)
    ),
    /* @__PURE__ */ React__default.createElement(InputErrorMessage, { errorMessage, size, id: errorMessageId })
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
  const ref = React__default.useRef(null);
  const maybeInputId = $bdb11010cef70236$export$f680877a34711e37();
  const id = _id != null ? _id : maybeInputId;
  const helperId = $bdb11010cef70236$export$f680877a34711e37();
  const radioGroupContext = React__default.useContext(RadioGroupContext);
  const required = _required || radioGroupContext.isRequired;
  const disabled = isDisabled || radioGroupContext.isDisabled;
  const checked = (_checked != null ? _checked : radioGroupContext.value) ? radioGroupContext.value === value : void 0;
  const defaultChecked = (_defaultChecked != null ? _defaultChecked : radioGroupContext.defaultValue) ? radioGroupContext.defaultValue === value : void 0;
  const labelContent = typeof children === "string" ? /* @__PURE__ */ React__default.createElement(Text, { variant: LABEL_SIZE_MAP[radioGroupContext.size], as: "span", weight: "medium" }, children) : children;
  return /* @__PURE__ */ React__default.createElement("div", { className: "gds-radio-button", "data-disabled": disabled ? true : void 0 }, /* @__PURE__ */ React__default.createElement(
    "input",
    {
      ...inputProps,
      id,
      ref,
      type: "radio",
      "aria-describedby": getAriaDescribedBy(ariaDescribedBy, helperMessage ? helperId : void 0),
      required,
      value,
      disabled,
      checked,
      defaultChecked,
      name: radioGroupContext.name,
      tabIndex
    }
  ), /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement("label", { htmlFor: id }, labelContent), helperMessage && /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(
    Text,
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
export {
  RadioButton,
  RadioGroup
};
