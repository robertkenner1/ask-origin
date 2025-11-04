import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { makeCompoundComponent } from "../../helpers/compound.js";
import { SelectOption } from "./SelectOption.js";
/* empty css           */
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { InterfaceDown } from "../../../../icons/generated/all/interface_down.js";
import { InputLabel } from "../InputLabel/InputLabel.js";
import { Icon } from "../Icon/Icon.js";
import { InputErrorMessage } from "../InputErrorMessage/InputErrorMessage.js";
const Select = /* @__PURE__ */ React__default.forwardRef(
  function Select2(props, forwardedRef) {
    const selectId = $bdb11010cef70236$export$f680877a34711e37(props.id);
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
    return /* @__PURE__ */ React__default.createElement("div", { className: "gds-select" }, /* @__PURE__ */ React__default.createElement(
      InputLabel,
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
    ), /* @__PURE__ */ React__default.createElement("div", { className: "gds-select-container" }, /* @__PURE__ */ React__default.createElement(
      "select",
      {
        ref: forwardedRef,
        id: selectId,
        className: clsx("gds-select-inner", className),
        disabled: isDisabled,
        required: isRequired,
        "aria-invalid": errorMessage != void 0 ? Boolean(errorMessage) : void 0,
        onChange: onChange != void 0 ? (event) => onChange(event.target.value) : void 0,
        ...rest
      }
    ), /* @__PURE__ */ React__default.createElement(
      Icon,
      {
        accessibilityLabel: "",
        icon: InterfaceDown,
        size: "small",
        className: "gds-select-icon"
      }
    )), /* @__PURE__ */ React__default.createElement(InputErrorMessage, { errorMessage }));
  }
);
const SelectCompoundComponent = makeCompoundComponent(Select, "Select", {
  Option: SelectOption
});
export {
  SelectCompoundComponent as Select
};
