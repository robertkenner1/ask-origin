import React__default, { useMemo } from "react";
import { StarItem } from "./StarItem.js";
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { Flex } from "../Flex/Flex.js";
import { Text } from "../Text/Text.js";
const UNSELECTED = -1;
const UNHOVERED = -1;
const StarList = (props) => {
  const { labels, onSelect, selectedValue = UNSELECTED } = props;
  const id = $bdb11010cef70236$export$f680877a34711e37();
  const itemName = `rating-${id}`;
  const [hoveredValue, setHoveredValue] = React__default.useState(UNHOVERED);
  const currentIndex = hoveredValue > -1 ? hoveredValue : selectedValue;
  const maxLabelLength = useMemo(() => {
    const lengths = labels.map((label) => label.length);
    return Math.max(...lengths);
  }, [labels]);
  const labelStyle = {
    width: `${maxLabelLength}ch`
  };
  return /* @__PURE__ */ React__default.createElement(Flex, { gap: { row: 1, column: 2 }, wrap: true, align: "center" }, /* @__PURE__ */ React__default.createElement(Flex, { className: "gds-rating-star-list" }, labels.map((label, index) => /* @__PURE__ */ React__default.createElement(
    StarItem,
    {
      name: itemName,
      key: index,
      value: index,
      checked: selectedValue === index,
      filled: hoveredValue > -1 ? hoveredValue >= index : selectedValue >= index,
      label,
      onSelect,
      onMouseEnter: setHoveredValue,
      onMouseLeave: () => setHoveredValue(UNHOVERED)
    }
  ))), /* @__PURE__ */ React__default.createElement(
    Text,
    {
      className: "gds-star-label",
      style: labelStyle,
      as: "span",
      id: "gds-star-label",
      variant: "text-xsmall",
      color: "base-subdued",
      "aria-hidden": true
    },
    labels[currentIndex]
  ));
};
export {
  StarList
};
