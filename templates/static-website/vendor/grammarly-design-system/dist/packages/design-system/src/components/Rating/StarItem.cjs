"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const interface_star = require("../../../../icons/generated/all/interface_star.cjs");
const ScreenReaderOnly = require("../ScreenReaderOnly/ScreenReaderOnly.cjs");
const Text = require("../Text/Text.cjs");
const Icon = require("../Icon/Icon.cjs");
const StarItem = (props) => {
  const { checked, value, filled, label, onSelect, onMouseEnter, onMouseLeave, name } = props;
  const id = _import.useId();
  const labelId = `${id}-label`;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "gds-rating-star",
      onMouseEnter: () => onMouseEnter(value),
      onMouseLeave: () => onMouseLeave(value)
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "radio",
        className: "gds-sr-only",
        name,
        id,
        value,
        onChange: () => onSelect(value),
        checked,
        "aria-labelledby": labelId
      }
    ),
    /* @__PURE__ */ React.createElement("label", { htmlFor: id }, /* @__PURE__ */ React.createElement(ScreenReaderOnly.ScreenReaderOnly, null, /* @__PURE__ */ React.createElement(Text.Text, { as: "span", id: labelId }, label)), /* @__PURE__ */ React.createElement(
      Icon.Icon,
      {
        "aria-hidden": true,
        accessibilityLabel: label,
        icon: interface_star.InterfaceStar,
        className: clsx_m.clsx("gds-rating-star-icon", filled && "filled")
      }
    ))
  );
};
exports.StarItem = StarItem;
