import React__default from "react";
import { useId as $bdb11010cef70236$export$f680877a34711e37, useObjectRef as $df56164dff5785e2$export$4338b53315abf666, mergeProps as $3ef42575df84b30b$export$9d1611c77c2fe928 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
/* empty css             */
import { useCheckbox } from "./hooks/useCheckbox.js";
import { InputLabel } from "../InputLabel/InputLabel.js";
import { InputErrorMessage } from "../InputErrorMessage/InputErrorMessage.js";
import { useCheckboxGroupState as $587d3ad58be6d31f$export$daff6da51032a415 } from "../../../../../external/@react-stately_checkbox@3.4.4_react@18.2.0/external/@react-stately/checkbox/dist/import.js";
import { useCheckboxGroup } from "./hooks/useCheckboxGroup.js";
import { useCheckboxGroupItem } from "./hooks/useCheckboxGroupItem.js";
const MAX_NUM_FOR_ONE_COL = 3;
const Checkbox = /* @__PURE__ */ React__default.forwardRef(function Checkbox2(props, forwardedRef) {
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
  const inputId = $bdb11010cef70236$export$f680877a34711e37(props.id);
  const helperId = $bdb11010cef70236$export$f680877a34711e37();
  const ref = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
  const [selected, setSelected] = React__default.useState(false);
  const inputProps = useCheckbox(
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
  return /* @__PURE__ */ React__default.createElement(
    "div",
    {
      className: clsx(
        "gds-checkbox",
        `gds-checkbox-${size}`,
        isDisabled && "gds-checkbox-disabled"
      )
    },
    /* @__PURE__ */ React__default.createElement(
      InputLabel,
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
      /* @__PURE__ */ React__default.createElement(
        "input",
        {
          ...(_a = props.__inputProps) != null ? _a : inputProps,
          id: inputId,
          ref,
          tabIndex: isDisabled ? -1 : 0,
          "aria-describedby": descriptionId != null ? descriptionId : inputProps["aria-describedby"],
          className: clsx(
            "gds-checkbox-input",
            "gds-sr-only",
            `gds-checkbox-input-${size}`,
            className
          ),
          style
        }
      ),
      /* @__PURE__ */ React__default.createElement(CheckboxSvg, { ...checkboxProps })
    ),
    /* @__PURE__ */ React__default.createElement(
      InputErrorMessage,
      {
        size,
        errorMessage,
        className: "gds-checkbox-label-margin"
      }
    )
  );
});
const CheckboxGroupContext = /* @__PURE__ */ React__default.createContext(
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
  const state = $587d3ad58be6d31f$export$daff6da51032a415(props);
  const extendedState = { ...state, size };
  const { groupProps, labelProps } = useCheckboxGroup({
    ...props,
    validationState: errorMessage != null ? "invalid" : "valid"
  });
  const numberCols = React__default.Children.count(children) > MAX_NUM_FOR_ONE_COL ? 2 : 1;
  return /* @__PURE__ */ React__default.createElement(
    "fieldset",
    {
      ...groupProps,
      className: clsx("gds-checkbox-group", `gds-checkbox-group-${size}`, className),
      style
    },
    /* @__PURE__ */ React__default.createElement(
      InputLabel,
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
    /* @__PURE__ */ React__default.createElement(
      "div",
      {
        className: clsx(
          "gds-checkbox-group-columns",
          errorMessage != null && "gds-checkbox-group-error",
          props.layout === "row" && "gds-checkbox-group-row",
          `gds-checkbox-column-${numberCols}`
        )
      },
      /* @__PURE__ */ React__default.createElement(CheckboxGroupContext.Provider, { value: extendedState }, children)
    ),
    /* @__PURE__ */ React__default.createElement(InputErrorMessage, { errorMessage, size })
  );
};
const CheckboxItem = /* @__PURE__ */ React__default.forwardRef(function CheckboxItem2(props, forwardedRef) {
  var _a;
  const state = React__default.useContext(CheckboxGroupContext);
  if (state == null) throw new Error("CheckboxItem must be used within a CheckboxGroup only");
  const mergedProps = $3ef42575df84b30b$export$9d1611c77c2fe928(props, { value: (_a = props.value) != null ? _a : "" });
  const ref = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
  const { inputProps } = useCheckboxGroupItem(mergedProps, state);
  const isDisabled = state.isDisabled || props.isDisabled;
  const isSelected = state.isSelected(mergedProps.value);
  return /* @__PURE__ */ React__default.createElement(
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
  return /* @__PURE__ */ React__default.createElement(
    "svg",
    {
      className: clsx(
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
    isSelected && !isIndeterminate && /* @__PURE__ */ React__default.createElement(
      "path",
      {
        transform: "translate(2 4)",
        strokeWidth: 0,
        fill: "var(--color-icon-base-inverse)",
        d: "M11.7071 1.41421L4.49995 8.62132L0.292847 4.41421L1.70706 3L4.49995 5.79289L10.2928 0L11.7071 1.41421Z"
      }
    ),
    isIndeterminate && /* @__PURE__ */ React__default.createElement(
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
export {
  Checkbox,
  CheckboxGroup,
  CheckboxItem
};
