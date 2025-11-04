import React__default, { useRef } from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { KeyCode } from "./keys.js";
import { Icon } from "../Icon/Icon.js";
import { Text } from "../Text/Text.js";
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
  const listRef = useRef(null);
  return /* @__PURE__ */ React__default.createElement(
    "li",
    {
      ...rest,
      ref: listRef,
      className: clsx("gds-menu-item", isDisabled && "gds-menu-item-disabled", className),
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
        if (e.key === KeyCode.Enter || e.key === KeyCode.Space) {
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
    icon && /* @__PURE__ */ React__default.createElement(Icon, { icon, role: "presentation", accessibilityLabel: "" }),
    href && !isDisabled ? /* @__PURE__ */ React__default.createElement("a", { href, target, className: "gds-menu-item-link" }, /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-small", weight: "medium", marginRight: icon ? 2 : 0 }, children)) : /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-small", weight: "medium", marginRight: icon ? 2 : 0 }, children)
  );
};
export {
  MenuItem
};
