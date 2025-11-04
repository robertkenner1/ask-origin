import React__default from "react";
/* empty css         */
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { Heading } from "../Heading/Heading.js";
import { VisuallyHidden as $5c3e21d68f1c4674$export$439d29a4e110a164 } from "../../../../../external/@react-aria_visually-hidden@3.8.3_react@18.2.0/external/@react-aria/visually-hidden/dist/import.js";
import { Text } from "../Text/Text.js";
import { Flex } from "../Flex/Flex.js";
const DEFAULT_MAX_WIDTH = 650;
const FormContext = /* @__PURE__ */ React__default.createContext("");
const Form = /* @__PURE__ */ React__default.forwardRef(
  function Form2(props, forwardedRef) {
    const {
      children,
      onSubmit,
      maxWidth = DEFAULT_MAX_WIDTH,
      spacing = "standard",
      ...rest
    } = props;
    const headingId = $bdb11010cef70236$export$f680877a34711e37();
    function handleSubmit(e) {
      e.preventDefault();
      onSubmit(e);
    }
    return /* @__PURE__ */ React__default.createElement(
      "form",
      {
        ref: forwardedRef,
        className: `gds-form gds-form-${spacing}`,
        style: { maxWidth: `${maxWidth}px` },
        "aria-labelledby": headingId,
        onSubmit: handleSubmit,
        ...rest
      },
      /* @__PURE__ */ React__default.createElement(FormContext.Provider, { value: headingId }, children)
    );
  }
);
const FormHeader = (props) => {
  const { children, heading, headingSize = "large", headingLevel = "h2", description } = props;
  const headingId = React__default.useContext(FormContext);
  return /* @__PURE__ */ React__default.createElement("div", { id: headingId, className: "gds-form-header" }, /* @__PURE__ */ React__default.createElement(
    Heading,
    {
      variant: `heading-${headingSize}`,
      as: headingLevel,
      marginBottom: headingSize === "large" ? 1 : void 0
    },
    heading
  ), Boolean(description) && /* @__PURE__ */ React__default.createElement(Text, { as: "span" }, description), children);
};
const FormRow = ({ children }) => {
  return /* @__PURE__ */ React__default.createElement("div", { className: "gds-form-row" }, children);
};
const FormFieldset = /* @__PURE__ */ React__default.forwardRef(
  function FormFieldset2(props, forwardedRef) {
    const {
      children,
      legend,
      description,
      isRequired,
      isOptional,
      legendIndicatorForRequired = "(Required)",
      legendIndicatorForOptional = "(Optional)"
    } = props;
    const legendContent = /* @__PURE__ */ React__default.createElement("legend", null, /* @__PURE__ */ React__default.createElement(Flex, null, /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-medium", weight: "semibold" }, legend), (isRequired === true || isOptional === true) && /* @__PURE__ */ React__default.createElement(Text, { className: "gds-form-legend-indicator", as: "p", variant: "text-medium" }, /* @__PURE__ */ React__default.createElement("span", { "aria-hidden": isRequired === true ? "true" : "false" }, isOptional === true && /* @__PURE__ */ React__default.createElement($5c3e21d68f1c4674$export$439d29a4e110a164, null, ": "), isRequired === true ? legendIndicatorForRequired : legendIndicatorForOptional))), Boolean(description) && /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-xsmall" }, description));
    return /* @__PURE__ */ React__default.createElement("fieldset", { ref: forwardedRef, className: "gds-form-fieldset", "aria-required": isRequired }, legendContent, children);
  }
);
const FormFooter = ({ children }) => {
  return /* @__PURE__ */ React__default.createElement("div", { className: "gds-form-footer" }, children);
};
export {
  Form,
  FormFieldset,
  FormFooter,
  FormHeader,
  FormRow
};
