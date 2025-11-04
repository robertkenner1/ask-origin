import React__default, { useCallback } from "react";
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { Text } from "../Text/Text.js";
const MenuSection = ({
  children,
  label,
  labelDisplay = "visible"
}) => {
  const handleLabelClick = useCallback(
    (e) => e.stopPropagation(),
    []
  );
  const sectionId = $bdb11010cef70236$export$f680877a34711e37();
  return /* @__PURE__ */ React__default.createElement("li", { className: "gds-menu-section", role: "none" }, labelDisplay === "visible" && label && /* @__PURE__ */ React__default.createElement(
    Text,
    {
      as: "span",
      variant: "text-xsmall",
      color: "base-subdued",
      className: "gds-menu-section-label",
      onClick: handleLabelClick,
      id: sectionId
    },
    label
  ), /* @__PURE__ */ React__default.createElement(
    "ul",
    {
      className: "gds-menu-group",
      role: "group",
      "aria-labelledby": labelDisplay === "visible" ? sectionId : "",
      "aria-label": labelDisplay === "hidden" ? label : ""
    },
    children
  ));
};
export {
  MenuSection
};
