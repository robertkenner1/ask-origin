import React__default from "react";
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
/* empty css                         */
/* empty css                */
import { LABEL_SIZE_MAP } from "../InputLabel/InputLabel.js";
import { InterfaceSearch } from "../../../../icons/generated/all/interface_search.js";
import { InterfaceRemove } from "../../../../icons/generated/all/interface_remove.js";
import { Text } from "../Text/Text.js";
import { Icon } from "../Icon/Icon.js";
const SearchField = /* @__PURE__ */ React__default.forwardRef(
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
    const maybeId = $bdb11010cef70236$export$f680877a34711e37();
    const id = _id || maybeId;
    const inputRef = React__default.useRef(null);
    React__default.useImperativeHandle(forwardedRef, () => inputRef.current);
    const [value, setValue] = React__default.useState(defaultValue || "");
    const showClearButton = (
      // If the value is controlled, only show the clear button if onClear is also specified
      // TODO: Specify via types that onClear is required if value is controlled
      _value !== void 0 && onClear !== void 0 && _value !== "" || value !== ""
    );
    return /* @__PURE__ */ React__default.createElement("div", { className: clsx("gds-text-field", `gds-text-field-${size}`) }, /* @__PURE__ */ React__default.createElement("label", { htmlFor: id, className: clsx(labelDisplay === "hidden" && "gds-sr-only") }, /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: LABEL_SIZE_MAP[size], weight: "medium" }, label)), /* @__PURE__ */ React__default.createElement("div", { className: "gds-text-field-container" }, /* @__PURE__ */ React__default.createElement("div", { className: "gds-text-field-icon-start" }, /* @__PURE__ */ React__default.createElement(Icon, { icon: InterfaceSearch, accessibilityLabel: "" })), /* @__PURE__ */ React__default.createElement(
      "input",
      {
        ...inputProps,
        id,
        ref: inputRef,
        className: clsx("gds-text-field-input", className),
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
    ), showClearButton && /* @__PURE__ */ React__default.createElement(
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
  return /* @__PURE__ */ React__default.createElement("button", { onClick }, /* @__PURE__ */ React__default.createElement(
    Icon,
    {
      icon: InterfaceRemove,
      accessibilityLabel,
      size: size === "medium" ? "small" : "medium"
    }
  ));
};
export {
  SearchField
};
