"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const StarItem = require("./StarItem.cjs");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const Flex = require("../Flex/Flex.cjs");
const Text = require("../Text/Text.cjs");
const UNSELECTED = -1;
const UNHOVERED = -1;
const StarList = (props) => {
  const { labels, onSelect, selectedValue = UNSELECTED } = props;
  const id = _import.useId();
  const itemName = `rating-${id}`;
  const [hoveredValue, setHoveredValue] = React.useState(UNHOVERED);
  const currentIndex = hoveredValue > -1 ? hoveredValue : selectedValue;
  const maxLabelLength = React.useMemo(() => {
    const lengths = labels.map((label) => label.length);
    return Math.max(...lengths);
  }, [labels]);
  const labelStyle = {
    width: `${maxLabelLength}ch`
  };
  return /* @__PURE__ */ React.createElement(Flex.Flex, { gap: { row: 1, column: 2 }, wrap: true, align: "center" }, /* @__PURE__ */ React.createElement(Flex.Flex, { className: "gds-rating-star-list" }, labels.map((label, index) => /* @__PURE__ */ React.createElement(
    StarItem.StarItem,
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
  ))), /* @__PURE__ */ React.createElement(
    Text.Text,
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
exports.StarList = StarList;
