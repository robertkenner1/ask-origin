"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const MenuSeparator = ({ role = "none" }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ React.createElement(
    "li",
    {
      className: "gds-menu-separator",
      role,
      onClick: (e) => {
        e.stopPropagation();
      }
    }
  )
);
exports.MenuSeparator = MenuSeparator;
