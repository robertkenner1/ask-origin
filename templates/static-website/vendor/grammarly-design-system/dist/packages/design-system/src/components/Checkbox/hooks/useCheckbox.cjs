"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
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
  React__namespace.useEffect(() => {
    if (!isControlled && defaultSelected !== void 0 && stateSelected !== !!defaultSelected) {
      setSelected(!!defaultSelected);
    }
  }, []);
  React__namespace.useEffect(() => {
    if (isControlled) {
      const next = !!controlledSelected;
      if (stateSelected !== next) {
        setSelected(next);
      }
    }
  }, [isControlled, controlledSelected, stateSelected, setSelected]);
  React__namespace.useEffect(() => {
    if (inputRef == null ? void 0 : inputRef.current) inputRef.current.indeterminate = !!isIndeterminate;
  }, [inputRef, isIndeterminate]);
  React__namespace.useEffect(() => {
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
  const handleChange = React__namespace.useCallback(
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
exports.useCheckbox = useCheckbox;
