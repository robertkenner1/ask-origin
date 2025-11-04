"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const compound = require("../../helpers/compound.cjs");
const SelectOption = require("./SelectOption.cjs");
;/* empty css             */
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const interface_down = require("../../../../icons/generated/all/interface_down.cjs");
const InputLabel = require("../InputLabel/InputLabel.cjs");
const Icon = require("../Icon/Icon.cjs");
const InputErrorMessage = require("../InputErrorMessage/InputErrorMessage.cjs");
const Select = /* @__PURE__ */ React.forwardRef(
  function Select2(props, forwardedRef) {
    const selectId = _import.useId(props.id);
    const {
      label,
      labelIndicatorForOptional,
      labelIndicatorForRequired,
      labelDisplay = "visible",
      errorMessage,
      helperMessage,
      isOptional,
      isRequired,
      isDisabled,
      className,
      onChange,
      ...rest
    } = props;
    return /* @__PURE__ */ React.createElement("div", { className: "gds-select" }, /* @__PURE__ */ React.createElement(
      InputLabel.InputLabel,
      {
        label,
        labelDisplay,
        htmlFor: selectId,
        className: "gds-select-label",
        helperMessage,
        errorMessage,
        isOptional,
        isRequired,
        labelIndicatorForOptional,
        labelIndicatorForRequired
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "gds-select-container" }, /* @__PURE__ */ React.createElement(
      "select",
      {
        ref: forwardedRef,
        id: selectId,
        className: clsx_m.clsx("gds-select-inner", className),
        disabled: isDisabled,
        required: isRequired,
        "aria-invalid": errorMessage != void 0 ? Boolean(errorMessage) : void 0,
        onChange: onChange != void 0 ? (event) => onChange(event.target.value) : void 0,
        ...rest
      }
    ), /* @__PURE__ */ React.createElement(
      Icon.Icon,
      {
        accessibilityLabel: "",
        icon: interface_down.InterfaceDown,
        size: "small",
        className: "gds-select-icon"
      }
    )), /* @__PURE__ */ React.createElement(InputErrorMessage.InputErrorMessage, { errorMessage }));
  }
);
const SelectCompoundComponent = compound.makeCompoundComponent(Select, "Select", {
  Option: SelectOption.SelectOption
});
exports.Select = SelectCompoundComponent;
