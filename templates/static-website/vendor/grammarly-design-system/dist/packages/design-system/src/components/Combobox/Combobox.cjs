"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const getAriaDescribedBy = require("../../helpers/getAriaDescribedBy.cjs");
const ComboboxContext = require("./ComboboxContext.cjs");
;/* empty css               */
const interface_down = require("../../../../icons/generated/all/interface_down.cjs");
const Flex = require("../Flex/Flex.cjs");
const Text = require("../Text/Text.cjs");
const Icon = require("../Icon/Icon.cjs");
const InputErrorMessage = require("../InputErrorMessage/InputErrorMessage.cjs");
const Combobox = /* @__PURE__ */ React.forwardRef(
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
    const maybeInputId = _import.useId();
    const id = props.id || maybeInputId;
    const helperId = _import.useId();
    const errorId = _import.useId();
    const listboxId = _import.useId();
    const buttonRef = React.useRef(null);
    const inputRef = _import.useObjectRef(forwardedRef);
    const listBoxRef = React.useRef(null);
    const statusRef = React.useRef(null);
    const didMount = React.useRef(false);
    const skipExpandRef = React.useRef(false);
    const skipNumOptionsRef = React.useRef(false);
    const disableMouseTimeout = React.useRef(null);
    const getItemTextValue = React.useCallback(
      (child, i) => {
        var _a2;
        return child.props.textValue || // Hack to keep support for defaultItems with name property
        ((_a2 = defaultItems == null ? void 0 : defaultItems[i]) == null ? void 0 : _a2.name) || React.Children.toArray(child.props.children).join("");
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
    const [value, setValue] = React.useState(inputValue || defaultSelectedValue || "");
    const [expanded, setExpanded] = React.useState(false);
    const [activeItemValue, setActiveItemValue] = React.useState(void 0);
    const [selectedItemValue, setSelectedItemValue] = React.useState(void 0);
    const [itemsMapUpdated, setItemsMapUpdated] = React.useState(0);
    const valueToIdSuffixCounter = React.useRef(0);
    const valueToIdSuffix = React.useRef(/* @__PURE__ */ new Map());
    const childArray = React.useMemo(() => {
      if (defaultItems) {
        return defaultItems.map(children).filter(
          React.isValidElement
        );
      }
      return React.Children.toArray(children).filter(
        React.isValidElement
      );
    }, [children, defaultItems]);
    const getItemId = React.useCallback(
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
    const itemsMap = React.useRef(
      /* @__PURE__ */ new Map()
    );
    const filteredItems = React.useMemo(
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
    React.useEffect(() => {
      childArray.forEach((child, i) => {
        var _a2;
        const textValue = getItemTextValue(child, i);
        const id2 = getItemId(child.props.value, child.props.id);
        const ref = ((_a2 = itemsMap.current.get(child.props.value)) == null ? void 0 : _a2.ref) || React.createRef();
        itemsMap.current.set(child.props.value, { id: id2, ref, textValue });
        return child.props.value;
      });
      setItemsMapUpdated((v) => v + 1);
    }, [childArray]);
    React.useEffect(() => {
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
    React.useEffect(() => {
      var _a2;
      if (selectedItemValue !== void 0) {
        if (inputValue === void 0) {
          setValue(((_a2 = itemsMap.current.get(selectedItemValue)) == null ? void 0 : _a2.textValue) || "");
        }
        onSelection == null ? void 0 : onSelection(selectedItemValue);
        setExpanded(false);
      }
    }, [selectedItemValue]);
    React.useEffect(() => {
      if (inputValue) {
        setValue(inputValue);
      }
    }, [inputValue]);
    React.useEffect(() => {
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
    React.useEffect(() => {
      if (!didMount.current) {
        didMount.current = true;
      }
    }, []);
    const contextValue = React.useMemo(
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
    return /* @__PURE__ */ React.createElement("div", { className: "gds-combobox", "data-expanded": expanded }, /* @__PURE__ */ React.createElement("div", { className: "gds-text-field gds-text-field-medium" }, /* @__PURE__ */ React.createElement(Flex.Flex, { gap: 2 }, /* @__PURE__ */ React.createElement(
      "label",
      {
        htmlFor: id,
        className: clsx_m.clsx({
          "gds-sr-only": labelDisplay === "hidden"
        })
      },
      /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-small", weight: "medium" }, label)
    ), isOptional && /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-small", color: "base-subdued" }, labelIndicatorForOptional), isRequired && /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-small", color: "base-subdued" }, labelIndicatorForRequired)), helperMessage && /* @__PURE__ */ React.createElement(Text.Text, { as: "p", variant: "text-xsmall", color: "base-subdued", id: helperId }, helperMessage), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "gds-text-field-container" }, inputDecoration && /* @__PURE__ */ React.createElement("div", { className: "gds-input-decoration" }, inputDecoration), /* @__PURE__ */ React.createElement(
      "input",
      {
        ...rest,
        id,
        type: "text",
        role: "combobox",
        className: clsx_m.clsx("gds-text-field-input", className),
        disabled: isDisabled,
        "aria-invalid": !!errorMessage,
        "aria-required": isRequired,
        "aria-controls": listboxId,
        "aria-expanded": expanded,
        "aria-activedescendant": activeItemValue === void 0 ? void 0 : (_a = itemsMap.current.get(activeItemValue)) == null ? void 0 : _a.id,
        "aria-autocomplete": "list",
        "aria-describedby": getAriaDescribedBy.getAriaDescribedBy(
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
    ), /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement("div", { className: "gds-sr-only" }, "Show suggestions ", label),
      /* @__PURE__ */ React.createElement(
        Icon.Icon,
        {
          icon: interface_down.InterfaceDown,
          accessibilityLabel: "",
          size: "small",
          "aria-hidden": true
        }
      )
    )), /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement(ComboboxContext.ComboboxContext.Provider, { value: contextValue }, filteredItems.map((child) => {
        const item = itemsMap.current.get(child.props.value);
        return React.cloneElement(child, {
          ...child.props,
          id: item.id,
          ref: _import.mergeRefs(item.ref, child.props.ref)
        });
      }), filteredItems.length === 0 && /* @__PURE__ */ React.createElement("li", { className: "gds-combobox-no-results" }, /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-small", color: "base-subdued" }, noResultsMessage)))
    ), /* @__PURE__ */ React.createElement(InputErrorMessage.InputErrorMessage, { id: errorId, errorMessage }), /* @__PURE__ */ React.createElement("div", { className: "gds-sr-only", role: "status", ref: statusRef }))));
  }
);
exports.Combobox = Combobox;
