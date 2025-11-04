"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
;/* empty css           */
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const Heading = require("../Heading/Heading.cjs");
const _import$1 = require("../../../../../external/@react-aria_visually-hidden@3.8.3_react@18.2.0/external/@react-aria/visually-hidden/dist/import.cjs");
const Text = require("../Text/Text.cjs");
const Flex = require("../Flex/Flex.cjs");
const DEFAULT_MAX_WIDTH = 650;
const FormContext = /* @__PURE__ */ React.createContext("");
const Form = /* @__PURE__ */ React.forwardRef(
  function Form2(props, forwardedRef) {
    const {
      children,
      onSubmit,
      maxWidth = DEFAULT_MAX_WIDTH,
      spacing = "standard",
      ...rest
    } = props;
    const headingId = _import.useId();
    function handleSubmit(e) {
      e.preventDefault();
      onSubmit(e);
    }
    return /* @__PURE__ */ React.createElement(
      "form",
      {
        ref: forwardedRef,
        className: `gds-form gds-form-${spacing}`,
        style: { maxWidth: `${maxWidth}px` },
        "aria-labelledby": headingId,
        onSubmit: handleSubmit,
        ...rest
      },
      /* @__PURE__ */ React.createElement(FormContext.Provider, { value: headingId }, children)
    );
  }
);
const FormHeader = (props) => {
  const { children, heading, headingSize = "large", headingLevel = "h2", description } = props;
  const headingId = React.useContext(FormContext);
  return /* @__PURE__ */ React.createElement("div", { id: headingId, className: "gds-form-header" }, /* @__PURE__ */ React.createElement(
    Heading.Heading,
    {
      variant: `heading-${headingSize}`,
      as: headingLevel,
      marginBottom: headingSize === "large" ? 1 : void 0
    },
    heading
  ), Boolean(description) && /* @__PURE__ */ React.createElement(Text.Text, { as: "span" }, description), children);
};
const FormRow = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "gds-form-row" }, children);
};
const FormFieldset = /* @__PURE__ */ React.forwardRef(
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
    const legendContent = /* @__PURE__ */ React.createElement("legend", null, /* @__PURE__ */ React.createElement(Flex.Flex, null, /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-medium", weight: "semibold" }, legend), (isRequired === true || isOptional === true) && /* @__PURE__ */ React.createElement(Text.Text, { className: "gds-form-legend-indicator", as: "p", variant: "text-medium" }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": isRequired === true ? "true" : "false" }, isOptional === true && /* @__PURE__ */ React.createElement(_import$1.VisuallyHidden, null, ": "), isRequired === true ? legendIndicatorForRequired : legendIndicatorForOptional))), Boolean(description) && /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-xsmall" }, description));
    return /* @__PURE__ */ React.createElement("fieldset", { ref: forwardedRef, className: "gds-form-fieldset", "aria-required": isRequired }, legendContent, children);
  }
);
const FormFooter = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "gds-form-footer" }, children);
};
exports.Form = Form;
exports.FormFieldset = FormFieldset;
exports.FormFooter = FormFooter;
exports.FormHeader = FormHeader;
exports.FormRow = FormRow;
