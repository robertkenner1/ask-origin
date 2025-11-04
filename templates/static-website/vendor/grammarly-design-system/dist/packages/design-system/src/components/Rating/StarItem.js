import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { InterfaceStar } from "../../../../icons/generated/all/interface_star.js";
import { ScreenReaderOnly } from "../ScreenReaderOnly/ScreenReaderOnly.js";
import { Text } from "../Text/Text.js";
import { Icon } from "../Icon/Icon.js";
const StarItem = (props) => {
  const { checked, value, filled, label, onSelect, onMouseEnter, onMouseLeave, name } = props;
  const id = $bdb11010cef70236$export$f680877a34711e37();
  const labelId = `${id}-label`;
  return /* @__PURE__ */ React__default.createElement(
    "div",
    {
      className: "gds-rating-star",
      onMouseEnter: () => onMouseEnter(value),
      onMouseLeave: () => onMouseLeave(value)
    },
    /* @__PURE__ */ React__default.createElement(
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
    /* @__PURE__ */ React__default.createElement("label", { htmlFor: id }, /* @__PURE__ */ React__default.createElement(ScreenReaderOnly, null, /* @__PURE__ */ React__default.createElement(Text, { as: "span", id: labelId }, label)), /* @__PURE__ */ React__default.createElement(
      Icon,
      {
        "aria-hidden": true,
        accessibilityLabel: label,
        icon: InterfaceStar,
        className: clsx("gds-rating-star-icon", filled && "filled")
      }
    ))
  );
};
export {
  StarItem
};
