"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const Text = require("../Text/Text.cjs");
const MenuSection = ({
  children,
  label,
  labelDisplay = "visible"
}) => {
  const handleLabelClick = React.useCallback(
    (e) => e.stopPropagation(),
    []
  );
  const sectionId = _import.useId();
  return /* @__PURE__ */ React.createElement("li", { className: "gds-menu-section", role: "none" }, labelDisplay === "visible" && label && /* @__PURE__ */ React.createElement(
    Text.Text,
    {
      as: "span",
      variant: "text-xsmall",
      color: "base-subdued",
      className: "gds-menu-section-label",
      onClick: handleLabelClick,
      id: sectionId
    },
    label
  ), /* @__PURE__ */ React.createElement(
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
exports.MenuSection = MenuSection;
