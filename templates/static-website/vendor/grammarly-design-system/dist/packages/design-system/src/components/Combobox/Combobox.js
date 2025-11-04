import React__default from "react";
import { useId as $bdb11010cef70236$export$f680877a34711e37, useObjectRef as $df56164dff5785e2$export$4338b53315abf666, mergeRefs as $5dc95899b306f630$export$c9058316764c140e } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { getAriaDescribedBy } from "../../helpers/getAriaDescribedBy.js";
import { ComboboxContext } from "./ComboboxContext.js";
/* empty css             */
import { InterfaceDown } from "../../../../icons/generated/all/interface_down.js";
import { Flex } from "../Flex/Flex.js";
import { Text } from "../Text/Text.js";
import { Icon } from "../Icon/Icon.js";
import { InputErrorMessage } from "../InputErrorMessage/InputErrorMessage.js";
const Combobox = /* @__PURE__ */ React__default.forwardRef(
  function Combobox2(props, forwardedRef) {
    var _a;
    const {
      children,
      className,
      allowsCustomValue,
      defaultSelectedItem,
      defaultItems,
      disabledItems,
      errorMessage,
      helperMessage,
      inputDecoration,
      inputValue,
      isDisabled,
      isOptional,
      isRequired,
      label,
      labelDisplay = "visible",
      labelIndicatorForOptional = "(Optional)",
      labelIndicatorForRequired = "(Required)",
      listboxDisplay = "bottom",
      noResultsMessage = "No matching results",
      onSelection,
      onOpenChange,
      onKeyDown,
      onChange,
      onInputChange,
      onFocus,
      onBlur,
      ...rest
    } = props;
    const maybeInputId = $bdb11010cef70236$export$f680877a34711e37();
    const id = props.id || maybeInputId;
    const helperId = $bdb11010cef70236$export$f680877a34711e37();
    const errorId = $bdb11010cef70236$export$f680877a34711e37();
    const listboxId = $bdb11010cef70236$export$f680877a34711e37();
    const buttonRef = React__default.useRef(null);
    const inputRef = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
    const listBoxRef = React__default.useRef(null);
    const statusRef = React__default.useRef(null);
    const didMount = React__default.useRef(false);
    const skipExpandRef = React__default.useRef(false);
    const skipNumOptionsRef = React__default.useRef(false);
    const disableMouseTimeout = React__default.useRef(null);
    const getItemTextValue = React__default.useCallback(
      (child, i) => {
        var _a2;
        return child.props.textValue || // Hack to keep support for defaultItems with name property
        ((_a2 = defaultItems == null ? void 0 : defaultItems[i]) == null ? void 0 : _a2.name) || React__default.Children.toArray(child.props.children).join("");
      },
      [defaultItems]
    );
    let defaultSelectedValue = void 0;
    if (defaultSelectedItem && defaultItems) {
      const defaultSelectedItemIndex = defaultItems.findIndex(
        (item) => item.id === defaultSelectedItem
      );
      if (defaultSelectedItemIndex !== -1) {
        const child = children(
          defaultItems[defaultSelectedItemIndex]
        );
        defaultSelectedValue = getItemTextValue(child, defaultSelectedItemIndex);
      }
    }
    const [value, setValue] = React__default.useState(inputValue || defaultSelectedValue || "");
    const [expanded, setExpanded] = React__default.useState(false);
    const [activeItemValue, setActiveItemValue] = React__default.useState(void 0);
    const [selectedItemValue, setSelectedItemValue] = React__default.useState(void 0);
    const [itemsMapUpdated, setItemsMapUpdated] = React__default.useState(0);
    const valueToIdSuffixCounter = React__default.useRef(0);
    const valueToIdSuffix = React__default.useRef(/* @__PURE__ */ new Map());
    const childArray = React__default.useMemo(() => {
      if (defaultItems) {
        return defaultItems.map(children).filter(
          React__default.isValidElement
        );
      }
      return React__default.Children.toArray(children).filter(
        React__default.isValidElement
      );
    }, [children, defaultItems]);
    const getItemId = React__default.useCallback(
      (itemValue, id2) => {
        if (id2) {
          return id2;
        }
        if (!valueToIdSuffix.current.has(itemValue)) {
          valueToIdSuffix.current.set(itemValue, valueToIdSuffixCounter.current++);
        }
        return `gds-combobox-item-${maybeInputId}-${valueToIdSuffix.current.get(itemValue)}`;
      },
      [maybeInputId]
    );
    const itemsMap = React__default.useRef(
      /* @__PURE__ */ new Map()
    );
    const filteredItems = React__default.useMemo(
      () => childArray.filter((child) => {
        var _a2;
        if (selectedItemValue && ((_a2 = itemsMap.current.get(selectedItemValue)) == null ? void 0 : _a2.textValue) === value) {
          return true;
        }
        if (!itemsMap.current.has(child.props.value)) {
          return false;
        }
        return itemsMap.current.get(child.props.value).textValue.toLowerCase().includes(value.toLowerCase());
      }),
      [childArray, value, itemsMapUpdated]
    );
    React__default.useEffect(() => {
      childArray.forEach((child, i) => {
        var _a2;
        const textValue = getItemTextValue(child, i);
        const id2 = getItemId(child.props.value, child.props.id);
        const ref = ((_a2 = itemsMap.current.get(child.props.value)) == null ? void 0 : _a2.ref) || React__default.createRef();
        itemsMap.current.set(child.props.value, { id: id2, ref, textValue });
        return child.props.value;
      });
      setItemsMapUpdated((v) => v + 1);
    }, [childArray]);
    React__default.useEffect(() => {
      var _a2, _b, _c, _d, _e, _f;
      if (didMount.current) {
        onOpenChange == null ? void 0 : onOpenChange(expanded);
      }
      if (!activeItemValue) {
        return;
      }
      if (((_a2 = filteredItems[0]) == null ? void 0 : _a2.props.value) === activeItemValue) {
        (_b = listBoxRef.current) == null ? void 0 : _b.scrollTo({ top: 0, behavior: "instant" });
      } else {
        (_f = (_e = (_d = (_c = itemsMap.current.get(activeItemValue)) == null ? void 0 : _c.ref) == null ? void 0 : _d.current) == null ? void 0 : _e.scrollIntoView) == null ? void 0 : _f.call(_e, { behavior: "instant", block: "nearest" });
      }
    }, [expanded]);
    React__default.useEffect(() => {
      var _a2;
      if (selectedItemValue !== void 0) {
        if (inputValue === void 0) {
          setValue(((_a2 = itemsMap.current.get(selectedItemValue)) == null ? void 0 : _a2.textValue) || "");
        }
        onSelection == null ? void 0 : onSelection(selectedItemValue);
        setExpanded(false);
      }
    }, [selectedItemValue]);
    React__default.useEffect(() => {
      if (inputValue) {
        setValue(inputValue);
      }
    }, [inputValue]);
    React__default.useEffect(() => {
      if (!didMount.current) {
        return;
      }
      if (skipNumOptionsRef.current) {
        skipNumOptionsRef.current = false;
        return;
      }
      if (statusRef.current) {
        statusRef.current.textContent = `${filteredItems.length} option${filteredItems.length === 1 ? "" : "s"} available`;
      }
      const timeoutId = setTimeout(() => {
        if (statusRef.current) {
          statusRef.current.textContent = "";
        }
      }, 1e3);
      return () => clearTimeout(timeoutId);
    }, [value]);
    React__default.useEffect(() => {
      if (!didMount.current) {
        didMount.current = true;
      }
    }, []);
    const contextValue = React__default.useMemo(
      () => ({
        activeElementValue: activeItemValue,
        setActiveElementValue: (v) => {
          if (disableMouseTimeout.current === null) {
            setActiveItemValue(v);
          }
        },
        selectedElementValue: selectedItemValue,
        setSelectedElementValue: (itemValue) => {
          var _a2;
          setSelectedItemValue(itemValue);
          if (itemValue === void 0) {
            return;
          }
          skipNumOptionsRef.current = true;
          (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
          setExpanded(false);
        },
        disabledItems
      }),
      [filteredItems, activeItemValue, disabledItems]
    );
    const handleKeyDown = (e) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (filteredItems.length === 0) {
          return;
        }
        const increment = e.key === "ArrowDown" ? 1 : -1;
        let newActiveValue = void 0;
        if (selectedItemValue === void 0 && activeItemValue === void 0) {
          const start = e.key === "ArrowDown" ? 0 : filteredItems.length - 1;
          for (let i = start; i >= 0; i += increment) {
            const v = filteredItems[i].props.value;
            if (!((_a2 = props.disabledItems) == null ? void 0 : _a2.includes(v))) {
              newActiveValue = v;
              break;
            }
          }
        } else if (activeItemValue === void 0) {
          newActiveValue = selectedItemValue;
        } else {
          const idx = filteredItems.findIndex((item) => item.props.value === activeItemValue);
          for (let i = idx + increment; i >= 0 && i < filteredItems.length; i += increment) {
            const v = filteredItems[i].props.value;
            if (!((_b = props.disabledItems) == null ? void 0 : _b.includes(v))) {
              newActiveValue = v;
              break;
            }
          }
        }
        if (!expanded) {
          setActiveItemValue(newActiveValue);
          setExpanded(true);
        } else {
          if (newActiveValue === void 0) {
            return;
          }
          setActiveItemValue(newActiveValue);
          if (newActiveValue !== void 0) {
            if (disableMouseTimeout.current) {
              clearTimeout(disableMouseTimeout.current);
            }
            disableMouseTimeout.current = setTimeout(() => {
              disableMouseTimeout.current = null;
            }, 50);
            (_f = (_e = (_d = (_c = itemsMap.current.get(newActiveValue)) == null ? void 0 : _c.ref) == null ? void 0 : _d.current) == null ? void 0 : _e.scrollIntoView) == null ? void 0 : _f.call(_e, {
              behavior: "instant",
              block: "nearest"
            });
          }
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (activeItemValue === void 0 && !allowsCustomValue && inputValue === void 0) {
          setValue("");
        }
        if (activeItemValue !== void 0) {
          skipNumOptionsRef.current = true;
        }
        setSelectedItemValue(activeItemValue);
        setExpanded(false);
        setActiveItemValue(void 0);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setExpanded(false);
        setActiveItemValue(void 0);
        if (!allowsCustomValue && inputValue === void 0) {
          setValue(
            selectedItemValue ? ((_g = itemsMap.current.get(selectedItemValue)) == null ? void 0 : _g.textValue) || "" : ""
          );
        }
      } else if (e.key === "Home" || e.key === "End") {
        if (expanded) {
          e.preventDefault();
          const increment = e.key === "Home" ? 1 : -1;
          const idx = e.key === "Home" ? 0 : filteredItems.length - 1;
          let newActiveValue = void 0;
          for (let i = idx; i >= 0 && i < filteredItems.length; i += increment) {
            const v = filteredItems[i].props.value;
            if (!((_h = props.disabledItems) == null ? void 0 : _h.includes(v))) {
              newActiveValue = v;
              break;
            }
          }
          setActiveItemValue(newActiveValue);
        }
      }
      onKeyDown == null ? void 0 : onKeyDown(e);
    };
    return /* @__PURE__ */ React__default.createElement("div", { className: "gds-combobox", "data-expanded": expanded }, /* @__PURE__ */ React__default.createElement("div", { className: "gds-text-field gds-text-field-medium" }, /* @__PURE__ */ React__default.createElement(Flex, { gap: 2 }, /* @__PURE__ */ React__default.createElement(
      "label",
      {
        htmlFor: id,
        className: clsx({
          "gds-sr-only": labelDisplay === "hidden"
        })
      },
      /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-small", weight: "medium" }, label)
    ), isOptional && /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-small", color: "base-subdued" }, labelIndicatorForOptional), isRequired && /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-small", color: "base-subdued" }, labelIndicatorForRequired)), helperMessage && /* @__PURE__ */ React__default.createElement(Text, { as: "p", variant: "text-xsmall", color: "base-subdued", id: helperId }, helperMessage), /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement("div", { className: "gds-text-field-container" }, inputDecoration && /* @__PURE__ */ React__default.createElement("div", { className: "gds-input-decoration" }, inputDecoration), /* @__PURE__ */ React__default.createElement(
      "input",
      {
        ...rest,
        id,
        type: "text",
        role: "combobox",
        className: clsx("gds-text-field-input", className),
        disabled: isDisabled,
        "aria-invalid": !!errorMessage,
        "aria-required": isRequired,
        "aria-controls": listboxId,
        "aria-expanded": expanded,
        "aria-activedescendant": activeItemValue === void 0 ? void 0 : (_a = itemsMap.current.get(activeItemValue)) == null ? void 0 : _a.id,
        "aria-autocomplete": "list",
        "aria-describedby": getAriaDescribedBy(
          props["aria-describedby"],
          helperMessage ? helperId : void 0,
          errorMessage ? errorId : void 0
        ),
        value,
        onChange: (e) => {
          const newVal = e.target.value;
          if (newVal === "") {
            setSelectedItemValue(void 0);
          }
          if (inputValue === void 0) {
            setValue(newVal);
          }
          setActiveItemValue(void 0);
          setExpanded(true);
          onChange == null ? void 0 : onChange(e);
          onInputChange == null ? void 0 : onInputChange(e.target.value);
        },
        onFocus: (e) => {
          if (!skipExpandRef.current) {
            setExpanded(true);
          }
          skipExpandRef.current = false;
          setActiveItemValue(selectedItemValue);
          onFocus == null ? void 0 : onFocus(e);
        },
        onBlur: (e) => {
          var _a2;
          setExpanded(false);
          setActiveItemValue(void 0);
          if (!allowsCustomValue && inputValue === void 0) {
            setValue(
              selectedItemValue ? ((_a2 = itemsMap.current.get(selectedItemValue)) == null ? void 0 : _a2.textValue) || "" : ""
            );
          }
          onBlur == null ? void 0 : onBlur(e);
        },
        onKeyDown: handleKeyDown,
        ref: inputRef
      }
    ), /* @__PURE__ */ React__default.createElement(
      "button",
      {
        tabIndex: -1,
        ref: buttonRef,
        onMouseDown: (e) => {
          e.preventDefault();
        },
        onClick: () => {
          skipExpandRef.current = true;
          inputRef.current.focus();
          setExpanded(!expanded);
        },
        "aria-hidden": expanded,
        disabled: isDisabled
      },
      /* @__PURE__ */ React__default.createElement("div", { className: "gds-sr-only" }, "Show suggestions ", label),
      /* @__PURE__ */ React__default.createElement(
        Icon,
        {
          icon: InterfaceDown,
          accessibilityLabel: "",
          size: "small",
          "aria-hidden": true
        }
      )
    )), /* @__PURE__ */ React__default.createElement(
      "ul",
      {
        role: "listbox",
        id: listboxId,
        ref: listBoxRef,
        className: "gds-combobox-listbox",
        onMouseDown: (e) => {
          e.preventDefault();
        },
        "aria-label": `Suggestions ${label}`,
        "data-display": listboxDisplay === "top" ? "top" : void 0
      },
      /* @__PURE__ */ React__default.createElement(ComboboxContext.Provider, { value: contextValue }, filteredItems.map((child) => {
        const item = itemsMap.current.get(child.props.value);
        return React__default.cloneElement(child, {
          ...child.props,
          id: item.id,
          ref: $5dc95899b306f630$export$c9058316764c140e(item.ref, child.props.ref)
        });
      }), filteredItems.length === 0 && /* @__PURE__ */ React__default.createElement("li", { className: "gds-combobox-no-results" }, /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-small", color: "base-subdued" }, noResultsMessage)))
    ), /* @__PURE__ */ React__default.createElement(InputErrorMessage, { id: errorId, errorMessage }), /* @__PURE__ */ React__default.createElement("div", { className: "gds-sr-only", role: "status", ref: statusRef }))));
  }
);
export {
  Combobox
};
