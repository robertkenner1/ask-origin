import { useId as $bdb11010cef70236$export$f680877a34711e37, filterDOMProps as $65484d02dcb7eb3e$export$457c3d6518dd4c6f } from "../../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
function useCheckboxGroup(props) {
  const { labelId = $bdb11010cef70236$export$f680877a34711e37(), validationState, isReadOnly } = props;
  const groupProps = {
    ...$65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { labelable: true }),
    "aria-labelledby": labelId,
    "aria-invalid": validationState === "invalid" || void 0,
    "aria-readonly": isReadOnly || void 0
  };
  const labelProps = {
    id: labelId
  };
  return { groupProps, labelProps };
}
export {
  useCheckboxGroup
};
