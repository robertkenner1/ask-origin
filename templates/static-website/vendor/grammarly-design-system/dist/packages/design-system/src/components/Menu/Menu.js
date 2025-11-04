import React__default, { useState, useRef, useCallback, useEffect } from "react";
import { useFloating } from "../../../../../external/@floating-ui_react@0.26.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react/dist/floating-ui.react.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { makeCompoundComponent } from "../../helpers/compound.js";
import { MenuItem } from "./MenuItem.js";
import { MenuSection } from "./MenuSection.js";
import { MenuSeparator } from "./MenuSeparator.js";
import { KeyCode } from "./keys.js";
/* empty css         */
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { useInteractOutside as $e0b6e0b68ec7f50f$export$872b660ac5a1ff98 } from "../../../../../external/@react-aria_interactions@3.17.0_react@18.2.0/external/@react-aria/interactions/dist/import.js";
import { IconButton } from "../IconButton/IconButton.js";
import { InterfaceMoreVertical } from "../../../../icons/generated/all/interface_more-vertical.js";
import { InterfaceMore } from "../../../../icons/generated/all/interface_more.js";
import { offset } from "../../../../../external/@floating-ui_core@1.5.0/external/@floating-ui/core/dist/floating-ui.core.js";
import { flip, shift, autoUpdate } from "../../../../../external/@floating-ui_dom@1.6.3/external/@floating-ui/dom/dist/floating-ui.dom.js";
const GAP = 4;
const Menu = (props) => {
  const activatorId = $bdb11010cef70236$export$f680877a34711e37(props.id);
  const menuListId = $bdb11010cef70236$export$f680877a34711e37(props.id);
  const {
    children,
    activator,
    onClose,
    accessibilityLabel = "More",
    initialOpen = false,
    ...rest
  } = props;
  const [open, setOpen] = useState(initialOpen);
  const [isPressed, setIsPressed] = useState(false);
  const activatorRef = useRef(null);
  const menuRef = useRef(null);
  const listRef = useRef(null);
  const closeMenu = useCallback(() => {
    setOpen(false);
    onClose == null ? void 0 : onClose();
  }, [onClose]);
  $e0b6e0b68ec7f50f$export$872b660ac5a1ff98({
    ref: menuRef,
    isDisabled: !open,
    onInteractOutside: useCallback((event) => {
      var _a, _b;
      const target = event.target;
      const rootNode = (_a = menuRef.current) == null ? void 0 : _a.getRootNode();
      const isInShadowDOM = rootNode instanceof ShadowRoot;
      if (isInShadowDOM && event.composedPath().includes(menuRef.current)) {
        return;
      }
      if (menuRef.current && !((_b = activatorRef.current) == null ? void 0 : _b.contains(target))) {
        closeMenu();
        setIsPressed(false);
      }
    }, [])
  });
  const { refs, floatingStyles } = useFloating({
    open,
    onOpenChange: setOpen,
    strategy: "absolute",
    placement: "bottom-start",
    middleware: [offset(GAP), flip({ fallbackAxisSideDirection: "start" }), shift({ padding: 5 })],
    whileElementsMounted: autoUpdate
  });
  useEffect(() => {
    if (activatorRef.current) refs.setReference(activatorRef.current);
    if (menuRef.current) {
      refs.setFloating(menuRef.current);
    }
  }, [refs, open]);
  useEffect(() => {
    if (open && isPressed && listRef.current) {
      const firstItem = listRef.current.querySelector(".gds-menu-item");
      firstItem == null ? void 0 : firstItem.focus({ preventScroll: true });
    }
  }, [open, isPressed]);
  const handleMenuKeyDown = useCallback(
    (e) => {
      var _a, _b, _c, _d, _e, _f;
      const rootNode = (_a = listRef.current) == null ? void 0 : _a.getRootNode();
      const items = Array.from(
        ((_b = listRef.current) == null ? void 0 : _b.querySelectorAll(".gds-menu-item")) || []
      );
      if (!items || items.length === 0) return;
      const activeElement = rootNode.activeElement;
      const currentIndex = items.indexOf(activeElement);
      let nextIndex = 0;
      switch (e.key) {
        case KeyCode.Enter:
        case KeyCode.Space: {
          e.preventDefault();
          const currentItem = items[currentIndex];
          currentItem == null ? void 0 : currentItem.click();
          closeMenu();
          (_c = activatorRef.current) == null ? void 0 : _c.focus({ preventScroll: true });
          break;
        }
        case KeyCode.ArrowDown: {
          e.preventDefault();
          nextIndex = (currentIndex + 1) % items.length;
          (_d = items[nextIndex]) == null ? void 0 : _d.focus({ preventScroll: true });
          break;
        }
        case KeyCode.ArrowUp: {
          e.preventDefault();
          nextIndex = (currentIndex - 1 + items.length) % items.length;
          (_e = items[nextIndex]) == null ? void 0 : _e.focus({ preventScroll: true });
          break;
        }
        case KeyCode.Escape:
        case KeyCode.Tab: {
          closeMenu();
          (_f = activatorRef.current) == null ? void 0 : _f.focus({ preventScroll: true });
          break;
        }
      }
    },
    [setOpen]
  );
  const hideToolTipWhenMenuIsOpened = useCallback(
    () => open ? {
      open: !open
    } : {},
    [open]
  );
  const renderMenuActivator = useCallback(() => {
    const clickHandler = () => {
      setOpen((prev) => !prev);
      if (open) {
        onClose == null ? void 0 : onClose();
      }
    };
    const handleActivatorKeyDown = (e) => {
      var _a;
      switch (e.key) {
        case KeyCode.Enter:
        case KeyCode.Space:
          setIsPressed(true);
          break;
        case KeyCode.Escape:
        case KeyCode.Tab:
          setIsPressed(false);
          closeMenu();
          break;
        case KeyCode.ArrowDown:
          e.preventDefault();
          if (!open) {
            setIsPressed(true);
            setOpen(true);
          } else {
            const firstItem = (_a = listRef.current) == null ? void 0 : _a.querySelector(".gds-menu-item");
            firstItem == null ? void 0 : firstItem.focus();
          }
          break;
      }
    };
    if (typeof activator === "string") {
      return /* @__PURE__ */ React__default.createElement(
        IconButton,
        {
          id: activatorId,
          icon: activator === "more-vertical" ? InterfaceMoreVertical : InterfaceMore,
          variant: "tertiary",
          accessibilityLabel,
          onClick: clickHandler,
          ref: activatorRef,
          onKeyDown: handleActivatorKeyDown,
          "aria-haspopup": "true",
          "aria-expanded": open,
          "aria-controls": menuListId,
          tooltipProps: hideToolTipWhenMenuIsOpened()
        }
      );
    } else if (React__default.isValidElement(activator)) {
      return React__default.cloneElement(activator, {
        id: activatorId,
        onClick: clickHandler,
        ref: activatorRef,
        onKeyDown: handleActivatorKeyDown,
        "aria-label": accessibilityLabel,
        "aria-haspopup": "true",
        "aria-expanded": open,
        "aria-controls": menuListId,
        tooltipProps: hideToolTipWhenMenuIsOpened()
      });
    }
    return null;
  }, [activator, open, accessibilityLabel]);
  const renderMenuList = useCallback(
    () => open && /* @__PURE__ */ React__default.createElement("div", { className: "gds-menu-dropdown", ref: menuRef, style: floatingStyles }, /* @__PURE__ */ React__default.createElement(
      "ul",
      {
        ref: listRef,
        onKeyDown: handleMenuKeyDown,
        onMouseDown: closeMenu,
        className: clsx(
          "gds-menu-list",
          isPressed ? "gds-menu-item-pressed" : "gds-menu-item-container"
        ),
        id: menuListId,
        role: "menu",
        "aria-labelledby": activatorId
      },
      React__default.Children.map(
        children,
        (child) => React__default.isValidElement(child) ? React__default.cloneElement(child) : child
      )
    )),
    [open, floatingStyles, handleMenuKeyDown, isPressed, accessibilityLabel, children]
  );
  return /* @__PURE__ */ React__default.createElement("div", { className: "gds-menu-container", ...rest }, renderMenuActivator(), renderMenuList());
};
const MenuComponentCompound = makeCompoundComponent(Menu, "Menu", {
  Item: MenuItem,
  Separator: MenuSeparator,
  Section: MenuSection
});
export {
  MenuComponentCompound as Menu
};
