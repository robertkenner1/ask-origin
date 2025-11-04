"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
;/* empty css                           */
;/* empty css                  */
const InputLabel = require("../InputLabel/InputLabel.cjs");
const interface_search = require("../../../../icons/generated/all/interface_search.cjs");
const interface_remove = require("../../../../icons/generated/all/interface_remove.cjs");
const Text = require("../Text/Text.cjs");
const Icon = require("../Icon/Icon.cjs");
const SearchField = /* @__PURE__ */ React.forwardRef(
  function SearchField2(props, forwardedRef) {
    const {
      labelDisplay = "hidden",
      accessibilityLabelClearButton = "Clear search",
      className,
      label,
      onClear,
      defaultValue,
      size = "medium",
      spellCheck = false,
      onSubmit,
      onChange,
      onKeyUp,
      isDisabled,
      id: _id,
      value: _value,
      ...inputProps
    } = props;
    const maybeId = _import.useId();
    const id = _id || maybeId;
    const inputRef = React.useRef(null);
    React.useImperativeHandle(forwardedRef, () => inputRef.current);
    const [value, setValue] = React.useState(defaultValue || "");
    const showClearButton = (
      // If the value is controlled, only show the clear button if onClear is also specified
      // TODO: Specify via types that onClear is required if value is controlled
      _value !== void 0 && onClear !== void 0 && _value !== "" || value !== ""
    );
    return /* @__PURE__ */ React.createElement("div", { className: clsx_m.clsx("gds-text-field", `gds-text-field-${size}`) }, /* @__PURE__ */ React.createElement("label", { htmlFor: id, className: clsx_m.clsx(labelDisplay === "hidden" && "gds-sr-only") }, /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: InputLabel.LABEL_SIZE_MAP[size], weight: "medium" }, label)), /* @__PURE__ */ React.createElement("div", { className: "gds-text-field-container" }, /* @__PURE__ */ React.createElement("div", { className: "gds-text-field-icon-start" }, /* @__PURE__ */ React.createElement(Icon.Icon, { icon: interface_search.InterfaceSearch, accessibilityLabel: "" })), /* @__PURE__ */ React.createElement(
      "input",
      {
        ...inputProps,
        id,
        ref: inputRef,
        className: clsx_m.clsx("gds-text-field-input", className),
        disabled: isDisabled,
        spellCheck,
        value: _value || value,
        onChange: (e) => {
          const newValue = e.target.value;
          setValue(newValue);
          onChange == null ? void 0 : onChange(newValue);
        },
        onKeyUp: (e) => {
          if (e.key === "Enter") {
            onSubmit == null ? void 0 : onSubmit(_value || value);
          }
          onKeyUp == null ? void 0 : onKeyUp(e);
        },
        type: "search"
      }
    ), showClearButton && /* @__PURE__ */ React.createElement(
      ClearButton,
      {
        accessibilityLabel: accessibilityLabelClearButton,
        size,
        onClick: () => {
          var _a;
          setValue("");
          (_a = inputRef.current) == null ? void 0 : _a.focus();
          onClear == null ? void 0 : onClear();
        }
      }
    )));
  }
);
const ClearButton = ({ size, onClick, accessibilityLabel }) => {
  return /* @__PURE__ */ React.createElement("button", { onClick }, /* @__PURE__ */ React.createElement(
    Icon.Icon,
    {
      icon: interface_remove.InterfaceRemove,
      accessibilityLabel,
      size: size === "medium" ? "small" : "medium"
    }
  ));
};
exports.SearchField = SearchField;
