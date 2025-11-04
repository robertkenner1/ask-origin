"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _import = require("../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
  let { id, label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType = "label" } = props;
  id = _import.useId(id);
  let labelId = _import.useId();
  let labelProps = {};
  if (label) {
    ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === "label" ? id : void 0
    };
  } else if (!ariaLabelledby && !ariaLabel) console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let fieldProps = _import.useLabels({
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby
  });
  return {
    labelProps,
    fieldProps
  };
}
function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
  let { description, errorMessage, validationState } = props;
  let { labelProps, fieldProps } = $d191a55c9702f145$export$8467354a121f1b9f(props);
  let descriptionId = _import.useSlotId([
    Boolean(description),
    Boolean(errorMessage),
    validationState
  ]);
  let errorMessageId = _import.useSlotId([
    Boolean(description),
    Boolean(errorMessage),
    validationState
  ]);
  fieldProps = _import.mergeProps(fieldProps, {
    "aria-describedby": [
      descriptionId,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      errorMessageId,
      props["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  });
  return {
    labelProps,
    fieldProps,
    descriptionProps: {
      id: descriptionId
    },
    errorMessageProps: {
      id: errorMessageId
    }
  };
}
exports.useField = $2baaea4c71418dea$export$294aa081a6c6f55d;
exports.useLabel = $d191a55c9702f145$export$8467354a121f1b9f;
