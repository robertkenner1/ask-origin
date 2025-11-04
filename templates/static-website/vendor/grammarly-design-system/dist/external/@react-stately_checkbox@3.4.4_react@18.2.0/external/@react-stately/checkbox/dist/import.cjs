"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _import = require("../../../../../@react-stately_utils@3.7.0_react@18.2.0/external/@react-stately/utils/dist/import.cjs");
function $587d3ad58be6d31f$export$daff6da51032a415(props = {}) {
  let [selectedValues, setValue] = _import.useControlledState(props.value, props.defaultValue || [], props.onChange);
  const state = {
    value: selectedValues,
    setValue(value) {
      if (props.isReadOnly || props.isDisabled) return;
      setValue(value);
    },
    isDisabled: props.isDisabled || false,
    isReadOnly: props.isReadOnly || false,
    isSelected(value) {
      return selectedValues.includes(value);
    },
    addValue(value) {
      if (props.isReadOnly || props.isDisabled) return;
      if (!selectedValues.includes(value)) setValue(selectedValues.concat(value));
    },
    removeValue(value) {
      if (props.isReadOnly || props.isDisabled) return;
      if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue) => existingValue !== value));
    },
    toggleValue(value) {
      if (props.isReadOnly || props.isDisabled) return;
      if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue) => existingValue !== value));
      else setValue(selectedValues.concat(value));
    },
    validationState: props.validationState
  };
  return state;
}
exports.useCheckboxGroupState = $587d3ad58be6d31f$export$daff6da51032a415;
