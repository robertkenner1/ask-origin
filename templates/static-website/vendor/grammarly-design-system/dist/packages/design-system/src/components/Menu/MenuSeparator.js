import React__default from "react";
const MenuSeparator = ({ role = "none" }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ React__default.createElement(
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
export {
  MenuSeparator
};
