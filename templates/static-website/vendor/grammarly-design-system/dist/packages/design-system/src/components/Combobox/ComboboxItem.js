import React__default from "react";
import { useObjectRef as $df56164dff5785e2$export$4338b53315abf666, useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { ComboboxContext } from "./ComboboxContext.js";
import { InterfaceCheckmark } from "../../../../icons/generated/all/interface_checkmark.js";
import { Text } from "../Text/Text.js";
import { Icon } from "../Icon/Icon.js";
const ComboboxItem = /* @__PURE__ */ React__default.forwardRef(
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
    const comboboxContext = React__default.useContext(ComboboxContext);
    const optionRef = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
    const maybeId = $bdb11010cef70236$export$f680877a34711e37();
    const id = _id || maybeId;
    const isActive = comboboxContext.activeElementValue === value;
    const isSelected = comboboxContext.selectedElementValue === value;
    const isDisabled = (_a = comboboxContext.disabledItems) == null ? void 0 : _a.includes(value);
    return (
      // NOTE: keyboard events are handled by the Combobox component
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      /* @__PURE__ */ React__default.createElement(
        "li",
        {
          ...rest,
          id,
          ref: optionRef,
          className: clsx("gds-combobox-item", className),
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
        /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-small" }, children),
        isSelected && /* @__PURE__ */ React__default.createElement(
          Icon,
          {
            icon: InterfaceCheckmark,
            accessibilityLabel: "",
            variant: isActive ? "inverse" : "default",
            size: "small"
          }
        )
      )
    );
  }
);
export {
  ComboboxItem
};
