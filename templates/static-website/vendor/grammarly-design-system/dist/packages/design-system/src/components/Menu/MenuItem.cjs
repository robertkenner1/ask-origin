"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const keys = require("./keys.cjs");
const Icon = require("../Icon/Icon.cjs");
const Text = require("../Text/Text.cjs");
const MenuItem = ({
  children,
  className,
  isDisabled = false,
  icon,
  onClick,
  onKeyDown,
  onMouseDown,
  href,
  target,
  ...rest
}) => {
  const listRef = React.useRef(null);
  return /* @__PURE__ */ React.createElement(
    "li",
    {
      ...rest,
      ref: listRef,
      className: clsx_m.clsx("gds-menu-item", isDisabled && "gds-menu-item-disabled", className),
      onMouseDown: (e) => {
        var _a;
        onMouseDown == null ? void 0 : onMouseDown(e);
        if (!isDisabled) {
          onClick == null ? void 0 : onClick();
          if (((_a = listRef.current) == null ? void 0 : _a.getRootNode()) instanceof ShadowRoot) {
            href && window.open(href, target);
          } else {
            href && e.stopPropagation();
          }
        } else {
          e.stopPropagation();
        }
      },
      onKeyDown: (e) => {
        onKeyDown == null ? void 0 : onKeyDown(e);
        if (e.key === keys.KeyCode.Enter || e.key === keys.KeyCode.Space) {
          if (isDisabled) {
            e.stopPropagation();
          } else {
            onClick == null ? void 0 : onClick();
            href && window.open(href, target);
          }
        }
      },
      tabIndex: isDisabled ? -1 : 0,
      "aria-disabled": isDisabled,
      role: "menuitem"
    },
    icon && /* @__PURE__ */ React.createElement(Icon.Icon, { icon, role: "presentation", accessibilityLabel: "" }),
    href && !isDisabled ? /* @__PURE__ */ React.createElement("a", { href, target, className: "gds-menu-item-link" }, /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-small", weight: "medium", marginRight: icon ? 2 : 0 }, children)) : /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-small", weight: "medium", marginRight: icon ? 2 : 0 }, children)
  );
};
exports.MenuItem = MenuItem;
