"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
;/* empty css               */
const useCheckbox = require("./hooks/useCheckbox.cjs");
const InputLabel = require("../InputLabel/InputLabel.cjs");
const InputErrorMessage = require("../InputErrorMessage/InputErrorMessage.cjs");
const _import$1 = require("../../../../../external/@react-stately_checkbox@3.4.4_react@18.2.0/external/@react-stately/checkbox/dist/import.cjs");
const useCheckboxGroup = require("./hooks/useCheckboxGroup.cjs");
const useCheckboxGroupItem = require("./hooks/useCheckboxGroupItem.cjs");
const MAX_NUM_FOR_ONE_COL = 3;
const Checkbox = /* @__PURE__ */ React.forwardRef(function Checkbox2(props, forwardedRef) {
  var _a;
  const {
    helperMessage,
    labelDisplay = "visible",
    errorMessage,
    isOptional,
    isRequired,
    labelIndicatorForRequired = "(Required)",
    labelIndicatorForOptional = "(Optional)",
    className,
    style,
    size = "medium",
    isDisabled,
    isIndeterminate
  } = props;
  const inputId = _import.useId(props.id);
  const helperId = _import.useId();
  const ref = _import.useObjectRef(forwardedRef);
  const [selected, setSelected] = React.useState(false);
  const inputProps = useCheckbox.useCheckbox(
    props,
    {
      selected,
      setSelected
    },
    ref
  );
  const isSelected = selected || isIndeterminate;
  const descriptionId = helperMessage != null ? helperId : void 0;
  const checkboxProps = {
    labelDisplay,
    isDisabled,
    isSelected,
    isIndeterminate,
    errorMessage,
    size
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: clsx_m.clsx(
        "gds-checkbox",
        `gds-checkbox-${size}`,
        isDisabled && "gds-checkbox-disabled"
      )
    },
    /* @__PURE__ */ React.createElement(
      InputLabel.InputLabel,
      {
        label: props.children,
        labelDisplay,
        htmlFor: inputId,
        helperMessage,
        errorMessage,
        isOptional,
        isRequired,
        labelIndicatorForOptional,
        labelIndicatorForRequired,
        size
      },
      /* @__PURE__ */ React.createElement(
        "input",
        {
          ...(_a = props.__inputProps) != null ? _a : inputProps,
          id: inputId,
          ref,
          tabIndex: isDisabled ? -1 : 0,
          "aria-describedby": descriptionId != null ? descriptionId : inputProps["aria-describedby"],
          className: clsx_m.clsx(
            "gds-checkbox-input",
            "gds-sr-only",
            `gds-checkbox-input-${size}`,
            className
          ),
          style
        }
      ),
      /* @__PURE__ */ React.createElement(CheckboxSvg, { ...checkboxProps })
    ),
    /* @__PURE__ */ React.createElement(
      InputErrorMessage.InputErrorMessage,
      {
        size,
        errorMessage,
        className: "gds-checkbox-label-margin"
      }
    )
  );
});
const CheckboxGroupContext = /* @__PURE__ */ React.createContext(
  null
);
const CheckboxGroup = (props) => {
  const {
    children,
    className,
    legend,
    errorMessage,
    helperMessage,
    legendDisplay,
    isRequired,
    isOptional,
    legendIndicatorForOptional,
    legendIndicatorForRequired,
    style,
    size = "medium"
  } = props;
  const state = _import$1.useCheckboxGroupState(props);
  const extendedState = { ...state, size };
  const { groupProps, labelProps } = useCheckboxGroup.useCheckboxGroup({
    ...props,
    validationState: errorMessage != null ? "invalid" : "valid"
  });
  const numberCols = React.Children.count(children) > MAX_NUM_FOR_ONE_COL ? 2 : 1;
  return /* @__PURE__ */ React.createElement(
    "fieldset",
    {
      ...groupProps,
      className: clsx_m.clsx("gds-checkbox-group", `gds-checkbox-group-${size}`, className),
      style
    },
    /* @__PURE__ */ React.createElement(
      InputLabel.InputLabel,
      {
        as: "legend",
        label: legend,
        labelDisplay: legendDisplay,
        helperMessage,
        isRequired,
        isOptional,
        labelIndicatorForRequired: legendIndicatorForRequired,
        labelIndicatorForOptional: legendIndicatorForOptional,
        errorMessage,
        size,
        ...labelProps
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: clsx_m.clsx(
          "gds-checkbox-group-columns",
          errorMessage != null && "gds-checkbox-group-error",
          props.layout === "row" && "gds-checkbox-group-row",
          `gds-checkbox-column-${numberCols}`
        )
      },
      /* @__PURE__ */ React.createElement(CheckboxGroupContext.Provider, { value: extendedState }, children)
    ),
    /* @__PURE__ */ React.createElement(InputErrorMessage.InputErrorMessage, { errorMessage, size })
  );
};
const CheckboxItem = /* @__PURE__ */ React.forwardRef(function CheckboxItem2(props, forwardedRef) {
  var _a;
  const state = React.useContext(CheckboxGroupContext);
  if (state == null) throw new Error("CheckboxItem must be used within a CheckboxGroup only");
  const mergedProps = _import.mergeProps(props, { value: (_a = props.value) != null ? _a : "" });
  const ref = _import.useObjectRef(forwardedRef);
  const { inputProps } = useCheckboxGroupItem.useCheckboxGroupItem(mergedProps, state);
  const isDisabled = state.isDisabled || props.isDisabled;
  const isSelected = state.isSelected(mergedProps.value);
  return /* @__PURE__ */ React.createElement(
    Checkbox,
    {
      ref,
      isDisabled,
      isSelected,
      helperMessage: mergedProps.helperMessage,
      size: state.size,
      __inputProps: inputProps
    },
    mergedProps.children
  );
});
const CheckboxSvg = (props) => {
  const {
    labelDisplay,
    isDisabled,
    isSelected,
    isIndeterminate,
    errorMessage,
    size = "medium"
  } = props;
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: clsx_m.clsx(
        "gds-checkbox-icon",
        `gds-checkbox-icon-${size}`,
        labelDisplay === "visible" && "gds-checkbox-icon-label",
        isDisabled && "gds-checkbox-element-disabled",
        isSelected && "gds-checkbox-element-selected",
        errorMessage && "gds-checkbox-element-error"
      ),
      viewBox: "0 0 16 16",
      "aria-hidden": true
    },
    isSelected && !isIndeterminate && /* @__PURE__ */ React.createElement(
      "path",
      {
        transform: "translate(2 4)",
        strokeWidth: 0,
        fill: "var(--color-icon-base-inverse)",
        d: "M11.7071 1.41421L4.49995 8.62132L0.292847 4.41421L1.70706 3L4.49995 5.79289L10.2928 0L11.7071 1.41421Z"
      }
    ),
    isIndeterminate && /* @__PURE__ */ React.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        transform: "translate(2.5 7)",
        d: "M10.5 2H0.5V0H10.5V2Z",
        fill: "white"
      }
    )
  );
};
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxItem = CheckboxItem;
