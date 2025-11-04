"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const assertNever = require("../../helpers/assertNever.cjs");
const usePrefersReducedMotion = require("../../hooks/usePrefersReducedMotion.cjs");
;/* empty css             */
const ScreenReaderOnly = require("../ScreenReaderOnly/ScreenReaderOnly.cjs");
const Text = require("../Text/Text.cjs");
const Flex = require("../Flex/Flex.cjs");
const InputLabel = require("../InputLabel/InputLabel.cjs");
const semantic_colors = require("../../../../tokens/generated/semantic_colors.cjs");
const Switch = /* @__PURE__ */ React.forwardRef(
  function Switch2(props, forwardedRef) {
    const {
      label,
      labelDisplay = "left",
      isSelected,
      defaultSelected,
      helperMessage,
      isDisabled,
      onChange,
      size = "medium",
      id: _id,
      ...rest
    } = props;
    const hookId = _import.useId();
    const id = _id || hookId;
    const ref = _import.useObjectRef(forwardedRef);
    const isControlled = isSelected !== void 0;
    const [internalSelected, setInternalSelected] = React.useState(defaultSelected || false);
    React.useEffect(() => {
      if (isControlled) {
        setInternalSelected(isSelected);
      }
    }, [isSelected, isControlled]);
    function handleChange(e) {
      const newValue = e.target.checked;
      if (!isControlled) {
        setInternalSelected(newValue);
      }
      if (onChange) {
        onChange(newValue);
      }
    }
    const prefersReducedMotion = usePrefersReducedMotion.usePrefersReducedMotion();
    const helperId = _import.useId();
    const maybeHelperId = helperMessage ? helperId : void 0;
    return /* @__PURE__ */ React.createElement("div", { className: "gds-switch", "data-disabled": isDisabled, "data-label-display": labelDisplay }, /* @__PURE__ */ React.createElement(
      SwitchLabel,
      {
        label,
        labelDisplay,
        helperMessage,
        helperMessageId: maybeHelperId,
        inputId: id,
        size
      }
    ), /* @__PURE__ */ React.createElement(
      SwitchIndicator,
      {
        label: props.label,
        labelDisplay,
        ref,
        size,
        isDisabled: props.isDisabled,
        isSelected: internalSelected,
        onChange: handleChange,
        prefersReducedMotion,
        maybeHelperId,
        inputProps: { id, ...rest }
      }
    ));
  }
);
const HELPER_MESSAGE_SIZE_MAP = {
  small: "text-xsmall",
  medium: "text-xsmall",
  large: "text-small",
  xlarge: "text-medium"
};
function SwitchLabel({
  label,
  labelDisplay,
  inputId,
  helperMessage,
  helperMessageId,
  size
}) {
  if (labelDisplay === "hidden") {
    return /* @__PURE__ */ React.createElement(ScreenReaderOnly.ScreenReaderOnly, null, /* @__PURE__ */ React.createElement("label", { htmlFor: inputId }, /* @__PURE__ */ React.createElement(Text.Text, { as: "span" }, label)), helperMessage && /* @__PURE__ */ React.createElement(Text.Text, { as: "p", id: helperMessageId }, helperMessage));
  }
  let flex;
  if (labelDisplay === "top") {
    flex = "1 1 100%";
  } else if (labelDisplay === "left" || labelDisplay === "right") {
    flex = "1 1 auto";
  } else {
    assertNever.assertNever(labelDisplay);
  }
  return /* @__PURE__ */ React.createElement(Flex.Flex, { direction: "column", gap: 1, flex }, /* @__PURE__ */ React.createElement("label", { htmlFor: inputId, className: "gds-switch-label" }, /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: InputLabel.LABEL_SIZE_MAP[size], weight: "medium" }, label)), helperMessage && /* @__PURE__ */ React.createElement(
    Text.Text,
    {
      as: "p",
      id: helperMessageId,
      variant: HELPER_MESSAGE_SIZE_MAP[size],
      color: "base-subdued"
    },
    helperMessage
  ));
}
const SIZING_DATA = {
  small: {
    height: 18,
    width: 34,
    selectedKnobRadius: 7,
    deselectedKnobRadius: 5,
    rectRadius: 10,
    checkmarkScale: 0.75,
    checkmarkTranslation: "27 6.5"
  },
  medium: {
    height: 21,
    width: 40,
    selectedKnobRadius: 8,
    deselectedKnobRadius: 6,
    rectRadius: 10.5,
    checkmarkScale: 1,
    checkmarkTranslation: "24 5"
  },
  large: {
    height: 24,
    width: 44,
    selectedKnobRadius: 9,
    deselectedKnobRadius: 7,
    rectRadius: 14,
    checkmarkScale: 1.2,
    checkmarkTranslation: "21.5 4.5"
  },
  xlarge: {
    height: 32,
    width: 60,
    selectedKnobRadius: 12,
    deselectedKnobRadius: 10,
    rectRadius: 16,
    checkmarkScale: 1.5,
    checkmarkTranslation: "25 5.5"
  }
};
const SwitchIndicator = React.forwardRef(
  function SwitchIndicator2({
    isDisabled,
    isSelected,
    maybeHelperId,
    prefersReducedMotion,
    size,
    onChange,
    inputProps: { className, "aria-describedby": ariaDescribedBy, tabIndex = 0, ...inputProps }
  }, ref) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        "data-size": size,
        className: clsx_m.clsx("gds-switch-indicator", isSelected && "gds-switch-indicator-selected")
      },
      /* @__PURE__ */ React.createElement(
        "input",
        {
          ...inputProps,
          tabIndex,
          role: "switch",
          ref,
          className: clsx_m.clsx("gds-switch-input", className),
          "aria-describedby": maybeHelperId && ariaDescribedBy ? `${ariaDescribedBy} ${maybeHelperId}` : ariaDescribedBy || maybeHelperId,
          value: isSelected ? "on" : "off",
          type: "checkbox",
          onChange,
          checked: isSelected,
          disabled: isDisabled,
          "data-size": size
        }
      ),
      /* @__PURE__ */ React.createElement(
        "svg",
        {
          width: SIZING_DATA[size].width + 2,
          height: SIZING_DATA[size].height + 2,
          "aria-hidden": "true",
          className: "gds-switch-indicator"
        },
        /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: 1,
            y: 1,
            width: SIZING_DATA[size].width,
            height: SIZING_DATA[size].height,
            rx: SIZING_DATA[size].rectRadius,
            stroke: isSelected ? semantic_colors.Color.Border.Interactive.Default : semantic_colors.Color.Border.Base.Default,
            strokeWidth: "1",
            fill: isSelected ? semantic_colors.Color.Background.Interactive.Default : semantic_colors.Color.Background.Base.Subdued,
            className: clsx_m.clsx(!prefersReducedMotion && "gds-switch-animation")
          }
        ),
        /* @__PURE__ */ React.createElement(
          "circle",
          {
            cx: isSelected ? SIZING_DATA[size].width - SIZING_DATA[size].selectedKnobRadius - 2 : SIZING_DATA[size].deselectedKnobRadius * 2,
            cy: (SIZING_DATA[size].height + 2) / 2,
            r: isSelected ? SIZING_DATA[size].selectedKnobRadius : SIZING_DATA[size].deselectedKnobRadius,
            fill: isSelected ? semantic_colors.Color.Background.Base.Default : semantic_colors.Color.Background.Neutral.Default,
            className: clsx_m.clsx(!prefersReducedMotion && "gds-switch-animation")
          }
        ),
        /* @__PURE__ */ React.createElement(
          "path",
          {
            transform: `scale(${SIZING_DATA[size].checkmarkScale}) translate(${SIZING_DATA[size].checkmarkTranslation})`,
            opacity: isSelected ? "100" : "0",
            fill: "none",
            d: "M1.5 6.83333L4.26923 9.5L10.5 3.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            className: clsx_m.clsx(
              !prefersReducedMotion && `gds-switch-check-animation-turning-${isSelected ? "on" : "off"}`
            )
          }
        )
      )
    );
  }
);
exports.Switch = Switch;
