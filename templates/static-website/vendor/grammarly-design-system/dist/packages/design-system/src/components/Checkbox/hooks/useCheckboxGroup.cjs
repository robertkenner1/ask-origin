"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _import = require("../../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
function useCheckboxGroup(props) {
  const { labelId = _import.useId(), validationState, isReadOnly } = props;
  const groupProps = {
    ..._import.filterDOMProps(props, { labelable: true }),
    "aria-labelledby": labelId,
    "aria-invalid": validationState === "invalid" || void 0,
    "aria-readonly": isReadOnly || void 0
  };
  const labelProps = {
    id: labelId
  };
  return { groupProps, labelProps };
}
exports.useCheckboxGroup = useCheckboxGroup;
