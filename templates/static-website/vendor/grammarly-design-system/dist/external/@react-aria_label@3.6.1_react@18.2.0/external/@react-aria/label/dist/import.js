import { useSlotId as $bdb11010cef70236$export$b4cc09c592e8fdb8, mergeProps as $3ef42575df84b30b$export$9d1611c77c2fe928, useId as $bdb11010cef70236$export$f680877a34711e37, useLabels as $313b98861ee5dd6c$export$d6875122194c7b44 } from "../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
  let { id, label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType = "label" } = props;
  id = $bdb11010cef70236$export$f680877a34711e37(id);
  let labelId = $bdb11010cef70236$export$f680877a34711e37();
  let labelProps = {};
  if (label) {
    ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === "label" ? id : void 0
    };
  } else if (!ariaLabelledby && !ariaLabel) console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let fieldProps = $313b98861ee5dd6c$export$d6875122194c7b44({
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
  let descriptionId = $bdb11010cef70236$export$b4cc09c592e8fdb8([
    Boolean(description),
    Boolean(errorMessage),
    validationState
  ]);
  let errorMessageId = $bdb11010cef70236$export$b4cc09c592e8fdb8([
    Boolean(description),
    Boolean(errorMessage),
    validationState
  ]);
  fieldProps = $3ef42575df84b30b$export$9d1611c77c2fe928(fieldProps, {
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
export {
  $2baaea4c71418dea$export$294aa081a6c6f55d as useField,
  $d191a55c9702f145$export$8467354a121f1b9f as useLabel
};
