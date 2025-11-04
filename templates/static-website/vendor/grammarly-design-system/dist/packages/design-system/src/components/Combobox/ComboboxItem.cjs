"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const ComboboxContext = require("./ComboboxContext.cjs");
const interface_checkmark = require("../../../../icons/generated/all/interface_checkmark.cjs");
const Text = require("../Text/Text.cjs");
const Icon = require("../Icon/Icon.cjs");
const ComboboxItem = /* @__PURE__ */ React.forwardRef(
  function ComboboxItem2({
    id: _id,
    value,
    accessibilityLabel,
    children,
    className,
    onMouseEnter,
    onClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    textValue,
    // used by Combobox, but should not be passed to the <li>
    ...rest
  }, forwardedRef) {
    var _a;
    const comboboxContext = React.useContext(ComboboxContext.ComboboxContext);
    const optionRef = _import.useObjectRef(forwardedRef);
    const maybeId = _import.useId();
    const id = _id || maybeId;
    const isActive = comboboxContext.activeElementValue === value;
    const isSelected = comboboxContext.selectedElementValue === value;
    const isDisabled = (_a = comboboxContext.disabledItems) == null ? void 0 : _a.includes(value);
    return (
      // NOTE: keyboard events are handled by the Combobox component
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      /* @__PURE__ */ React.createElement(
        "li",
        {
          ...rest,
          id,
          ref: optionRef,
          className: clsx_m.clsx("gds-combobox-item", className),
          role: "option",
          "aria-selected": isSelected,
          "aria-disabled": isDisabled,
          "aria-label": accessibilityLabel,
          "data-active": isActive ? "true" : void 0,
          onMouseEnter: (e) => {
            if (isDisabled) {
              return;
            }
            comboboxContext.setActiveElementValue(value);
            onMouseEnter == null ? void 0 : onMouseEnter(e);
          },
          onClick: (e) => {
            if (isDisabled) {
              return;
            }
            comboboxContext.setSelectedElementValue(value);
            onClick == null ? void 0 : onClick(e);
          }
        },
        /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-small" }, children),
        isSelected && /* @__PURE__ */ React.createElement(
          Icon.Icon,
          {
            icon: interface_checkmark.InterfaceCheckmark,
            accessibilityLabel: "",
            variant: isActive ? "inverse" : "default",
            size: "small"
          }
        )
      )
    );
  }
);
exports.ComboboxItem = ComboboxItem;
