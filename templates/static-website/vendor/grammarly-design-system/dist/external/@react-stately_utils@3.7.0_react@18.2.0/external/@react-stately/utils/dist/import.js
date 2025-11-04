import { useState, useRef, useEffect, useCallback } from "react";
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
  let [stateValue, setStateValue] = useState(value || defaultValue);
  let isControlledRef = useRef(value !== void 0);
  let isControlled = value !== void 0;
  useEffect(() => {
    let wasControlled = isControlledRef.current;
    if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
    isControlledRef.current = isControlled;
  }, [
    isControlled
  ]);
  let currentValue = isControlled ? value : stateValue;
  let setValue = useCallback((value2, ...args) => {
    let onChangeCaller = (value3, ...onChangeArgs) => {
      if (onChange) {
        if (!Object.is(currentValue, value3)) onChange(value3, ...onChangeArgs);
      }
      if (!isControlled)
        currentValue = value3;
    };
    if (typeof value2 === "function") {
      console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
      let updateFunction = (oldValue, ...functionArgs) => {
        let interceptedValue = value2(isControlled ? currentValue : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);
        if (!isControlled) return interceptedValue;
        return oldValue;
      };
      setStateValue(updateFunction);
    } else {
      if (!isControlled) setStateValue(value2);
      onChangeCaller(value2, ...args);
    }
  }, [
    isControlled,
    currentValue,
    onChange
  ]);
  return [
    currentValue,
    setValue
  ];
}
export {
  $458b0a5536c1a7cf$export$40bfa8c7b0832715 as useControlledState
};
