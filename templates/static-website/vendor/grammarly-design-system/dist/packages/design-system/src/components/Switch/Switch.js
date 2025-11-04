import React__default from "react";
import { useId as $bdb11010cef70236$export$f680877a34711e37, useObjectRef as $df56164dff5785e2$export$4338b53315abf666 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { assertNever } from "../../helpers/assertNever.js";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";
/* empty css           */
import { ScreenReaderOnly } from "../ScreenReaderOnly/ScreenReaderOnly.js";
import { Text } from "../Text/Text.js";
import { Flex } from "../Flex/Flex.js";
import { LABEL_SIZE_MAP } from "../InputLabel/InputLabel.js";
import { Color } from "../../../../tokens/generated/semantic_colors.js";
const Switch = /* @__PURE__ */ React__default.forwardRef(
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
    const hookId = $bdb11010cef70236$export$f680877a34711e37();
    const id = _id || hookId;
    const ref = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
    const isControlled = isSelected !== void 0;
    const [internalSelected, setInternalSelected] = React__default.useState(defaultSelected || false);
    React__default.useEffect(() => {
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
    const prefersReducedMotion = usePrefersReducedMotion();
    const helperId = $bdb11010cef70236$export$f680877a34711e37();
    const maybeHelperId = helperMessage ? helperId : void 0;
    return /* @__PURE__ */ React__default.createElement("div", { className: "gds-switch", "data-disabled": isDisabled, "data-label-display": labelDisplay }, /* @__PURE__ */ React__default.createElement(
      SwitchLabel,
      {
        label,
        labelDisplay,
        helperMessage,
        helperMessageId: maybeHelperId,
        inputId: id,
        size
      }
    ), /* @__PURE__ */ React__default.createElement(
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
    return /* @__PURE__ */ React__default.createElement(ScreenReaderOnly, null, /* @__PURE__ */ React__default.createElement("label", { htmlFor: inputId }, /* @__PURE__ */ React__default.createElement(Text, { as: "span" }, label)), helperMessage && /* @__PURE__ */ React__default.createElement(Text, { as: "p", id: helperMessageId }, helperMessage));
  }
  let flex;
  if (labelDisplay === "top") {
    flex = "1 1 100%";
  } else if (labelDisplay === "left" || labelDisplay === "right") {
    flex = "1 1 auto";
  } else {
    assertNever(labelDisplay);
  }
  return /* @__PURE__ */ React__default.createElement(Flex, { direction: "column", gap: 1, flex }, /* @__PURE__ */ React__default.createElement("label", { htmlFor: inputId, className: "gds-switch-label" }, /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: LABEL_SIZE_MAP[size], weight: "medium" }, label)), helperMessage && /* @__PURE__ */ React__default.createElement(
    Text,
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
const SwitchIndicator = React__default.forwardRef(
  function SwitchIndicator2({
    isDisabled,
    isSelected,
    maybeHelperId,
    prefersReducedMotion,
    size,
    onChange,
    inputProps: { className, "aria-describedby": ariaDescribedBy, tabIndex = 0, ...inputProps }
  }, ref) {
    return /* @__PURE__ */ React__default.createElement(
      "div",
      {
        "data-size": size,
        className: clsx("gds-switch-indicator", isSelected && "gds-switch-indicator-selected")
      },
      /* @__PURE__ */ React__default.createElement(
        "input",
        {
          ...inputProps,
          tabIndex,
          role: "switch",
          ref,
          className: clsx("gds-switch-input", className),
          "aria-describedby": maybeHelperId && ariaDescribedBy ? `${ariaDescribedBy} ${maybeHelperId}` : ariaDescribedBy || maybeHelperId,
          value: isSelected ? "on" : "off",
          type: "checkbox",
          onChange,
          checked: isSelected,
          disabled: isDisabled,
          "data-size": size
        }
      ),
      /* @__PURE__ */ React__default.createElement(
        "svg",
        {
          width: SIZING_DATA[size].width + 2,
          height: SIZING_DATA[size].height + 2,
          "aria-hidden": "true",
          className: "gds-switch-indicator"
        },
        /* @__PURE__ */ React__default.createElement(
          "rect",
          {
            x: 1,
            y: 1,
            width: SIZING_DATA[size].width,
            height: SIZING_DATA[size].height,
            rx: SIZING_DATA[size].rectRadius,
            stroke: isSelected ? Color.Border.Interactive.Default : Color.Border.Base.Default,
            strokeWidth: "1",
            fill: isSelected ? Color.Background.Interactive.Default : Color.Background.Base.Subdued,
            className: clsx(!prefersReducedMotion && "gds-switch-animation")
          }
        ),
        /* @__PURE__ */ React__default.createElement(
          "circle",
          {
            cx: isSelected ? SIZING_DATA[size].width - SIZING_DATA[size].selectedKnobRadius - 2 : SIZING_DATA[size].deselectedKnobRadius * 2,
            cy: (SIZING_DATA[size].height + 2) / 2,
            r: isSelected ? SIZING_DATA[size].selectedKnobRadius : SIZING_DATA[size].deselectedKnobRadius,
            fill: isSelected ? Color.Background.Base.Default : Color.Background.Neutral.Default,
            className: clsx(!prefersReducedMotion && "gds-switch-animation")
          }
        ),
        /* @__PURE__ */ React__default.createElement(
          "path",
          {
            transform: `scale(${SIZING_DATA[size].checkmarkScale}) translate(${SIZING_DATA[size].checkmarkTranslation})`,
            opacity: isSelected ? "100" : "0",
            fill: "none",
            d: "M1.5 6.83333L4.26923 9.5L10.5 3.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            className: clsx(
              !prefersReducedMotion && `gds-switch-check-animation-turning-${isSelected ? "on" : "off"}`
            )
          }
        )
      )
    );
  }
);
export {
  Switch
};
