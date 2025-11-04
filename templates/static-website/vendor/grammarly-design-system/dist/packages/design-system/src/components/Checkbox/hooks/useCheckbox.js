import * as React from "react";
const OWN_KEYS = [
  "isSelected",
  "defaultSelected",
  "isDisabled",
  "isReadOnly",
  "isRequired",
  "isIndeterminate",
  "errorMessage",
  "onChange",
  "children",
  "helperMessage",
  "labelDisplay",
  "labelIndicatorForRequired",
  "labelIndicatorForOptional",
  "isOptional",
  "size"
];
const OWN_KEYS_SET = new Set(OWN_KEYS);
function stripOwnProps(obj) {
  const entries = Object.entries(obj).filter(([key]) => !OWN_KEYS_SET.has(key));
  return Object.fromEntries(entries);
}
function useCheckbox(props, state, inputRef) {
  const {
    isSelected: controlledSelected,
    defaultSelected,
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    isIndeterminate = false,
    errorMessage,
    onChange: onSelectionChange,
    ...otherProps
  } = props;
  const { selected: stateSelected, setSelected } = state;
  const isControlled = controlledSelected !== void 0;
  React.useEffect(() => {
    if (!isControlled && defaultSelected !== void 0 && stateSelected !== !!defaultSelected) {
      setSelected(!!defaultSelected);
    }
  }, []);
  React.useEffect(() => {
    if (isControlled) {
      const next = !!controlledSelected;
      if (stateSelected !== next) {
        setSelected(next);
      }
    }
  }, [isControlled, controlledSelected, stateSelected, setSelected]);
  React.useEffect(() => {
    if (inputRef == null ? void 0 : inputRef.current) inputRef.current.indeterminate = !!isIndeterminate;
  }, [inputRef, isIndeterminate]);
  React.useEffect(() => {
    var _a;
    if (isControlled) return;
    const el = inputRef == null ? void 0 : inputRef.current;
    if (!el) return;
    const form = (_a = el.form) != null ? _a : el.closest("form");
    if (!form) return;
    const onReset = () => {
      if (defaultSelected !== void 0) {
        setSelected(!!defaultSelected);
      }
    };
    form.addEventListener("reset", onReset);
    return () => form.removeEventListener("reset", onReset);
  }, [isControlled, inputRef, defaultSelected, setSelected]);
  const passthroughProps = stripOwnProps(otherProps);
  const handleChange = React.useCallback(
    (e) => {
      if (isReadOnly) {
        e.preventDefault();
        return;
      }
      const next = e.currentTarget.checked;
      if (!isControlled) {
        setSelected(next);
      }
      onSelectionChange == null ? void 0 : onSelectionChange(next);
    },
    [isReadOnly, isControlled, setSelected, onSelectionChange]
  );
  const checked = isControlled ? !!controlledSelected : stateSelected;
  return {
    ...passthroughProps,
    type: "checkbox",
    checked,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    onChange: handleChange,
    "aria-checked": isIndeterminate ? "mixed" : void 0,
    "aria-invalid": errorMessage != null || void 0,
    "aria-readonly": isReadOnly || void 0
  };
}
export {
  useCheckbox
};
