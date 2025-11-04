"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function useCheckboxGroupItem(props, state) {
  const { value, onChange, isDisabled = false, isReadOnly = false } = props;
  const checked = state.isSelected(value);
  const updateGroupSelection = (nextChecked) => {
    if (nextChecked) {
      state.addValue(value);
    }
    if (!nextChecked) {
      state.removeValue(value);
    }
    onChange == null ? void 0 : onChange(nextChecked);
  };
  const handleChange = (e) => {
    if (isReadOnly) {
      e.preventDefault();
      return;
    }
    updateGroupSelection(e.currentTarget.checked);
  };
  return {
    inputProps: {
      type: "checkbox",
      value,
      checked,
      disabled: isDisabled,
      onChange: handleChange,
      "aria-readonly": isReadOnly || void 0
    }
  };
}
exports.useCheckboxGroupItem = useCheckboxGroupItem;
