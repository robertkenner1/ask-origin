import * as React from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
/* empty css                     */
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { InputLabel } from "../InputLabel/InputLabel.js";
import { Flex } from "../Flex/Flex.js";
import { InputErrorMessage } from "../InputErrorMessage/InputErrorMessage.js";
const VerificationCode = (props) => {
  const {
    className,
    errorMessage,
    isDisabled = false,
    legend,
    name,
    numberOfDigits = 6,
    size = "large",
    style,
    onChange,
    onFocus,
    type = "number",
    value,
    ...rest
  } = props;
  const fieldsetId = $bdb11010cef70236$export$f680877a34711e37();
  const fieldsetRef = React.useRef(null);
  const [allInputs, setAllInputs] = React.useState([]);
  function handleOnChange() {
    if (onChange != void 0 && fieldsetRef.current !== null) {
      const currentCode = allInputs.map(({ value: value2 }) => value2).join("");
      onChange(currentCode);
    }
  }
  function getInputs() {
    const inputs = [];
    const presetValue = value;
    for (let i = 0; i < numberOfDigits; i++) {
      inputs.push(
        /* @__PURE__ */ React.createElement(
          "input",
          {
            key: `input-${i}`,
            className: "gds-verification-code-input",
            "aria-required": true,
            disabled: isDisabled,
            "aria-label": `${type === "number" ? "Digit" : "Character"} ${i + 1} of ${numberOfDigits}`,
            "aria-invalid": errorMessage !== void 0 && true,
            defaultValue: presetValue !== void 0 ? presetValue.split("")[i] : void 0,
            type,
            onKeyUp: handleOnChange,
            onFocus
          }
        )
      );
    }
    return inputs;
  }
  React.useEffect(() => {
    if (!fieldsetRef.current) return;
    const inputElements = [
      ...fieldsetRef.current.getElementsByTagName("input")
    ];
    setAllInputs(inputElements);
    inputElements.forEach((input, index) => {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && e.target.value === "") {
          inputElements[Math.max(0, index - 1)].focus();
        }
      });
      input.addEventListener("input", (e) => {
        if (e.target !== null && e.target.value !== null) {
          const [first, ...rest2] = e.target.value;
          e.target.value = first !== void 0 ? first : "";
          const lastInputBox = index === inputElements.length - 1;
          const didInsertContent = first !== void 0;
          if (didInsertContent && !lastInputBox) {
            inputElements[index + 1].focus();
            inputElements[index + 1].value = rest2.join("");
            inputElements[index + 1].dispatchEvent(new Event("input"));
          }
        }
      });
    });
  }, []);
  React.useEffect(() => {
    if (value != void 0) {
      allInputs.forEach((input, idx) => {
        input.value = value.split("")[idx] || "";
      });
    }
  }, [value]);
  return /* @__PURE__ */ React.createElement(
    "fieldset",
    {
      id: fieldsetId,
      className: clsx("gds-verification-code", `gds-verification-code-${size}`, className),
      style,
      name,
      ref: fieldsetRef,
      ...rest
    },
    /* @__PURE__ */ React.createElement(InputLabel, { as: "legend", label: legend, labelDisplay: "hidden", errorMessage }),
    /* @__PURE__ */ React.createElement(Flex, { gap: size === "small" ? 2 : 3, marginBottom: 2 }, getInputs()),
    /* @__PURE__ */ React.createElement(InputErrorMessage, { size, errorMessage, component: "VerificationCode" })
  );
};
export {
  VerificationCode
};
