"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const floatingUi_react = require("../../../../../external/@floating-ui_react@0.26.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react/dist/floating-ui.react.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const compound = require("../../helpers/compound.cjs");
const MenuItem = require("./MenuItem.cjs");
const MenuSection = require("./MenuSection.cjs");
const MenuSeparator = require("./MenuSeparator.cjs");
const keys = require("./keys.cjs");
;/* empty css           */
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const _import$1 = require("../../../../../external/@react-aria_interactions@3.17.0_react@18.2.0/external/@react-aria/interactions/dist/import.cjs");
const IconButton = require("../IconButton/IconButton.cjs");
const interface_moreVertical = require("../../../../icons/generated/all/interface_more-vertical.cjs");
const interface_more = require("../../../../icons/generated/all/interface_more.cjs");
const floatingUi_core = require("../../../../../external/@floating-ui_core@1.5.0/external/@floating-ui/core/dist/floating-ui.core.cjs");
const floatingUi_dom = require("../../../../../external/@floating-ui_dom@1.6.3/external/@floating-ui/dom/dist/floating-ui.dom.cjs");
const GAP = 4;
const Menu = (props) => {
  const activatorId = _import.useId(props.id);
  const menuListId = _import.useId(props.id);
  const {
    children,
    activator,
    onClose,
    accessibilityLabel = "More",
    initialOpen = false,
    ...rest
  } = props;
  const [open, setOpen] = React.useState(initialOpen);
  const [isPressed, setIsPressed] = React.useState(false);
  const activatorRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const listRef = React.useRef(null);
  const closeMenu = React.useCallback(() => {
    setOpen(false);
    onClose == null ? void 0 : onClose();
  }, [onClose]);
  _import$1.useInteractOutside({
    ref: menuRef,
    isDisabled: !open,
    onInteractOutside: React.useCallback((event) => {
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
  const { refs, floatingStyles } = floatingUi_react.useFloating({
    open,
    onOpenChange: setOpen,
    strategy: "absolute",
    placement: "bottom-start",
    middleware: [floatingUi_core.offset(GAP), floatingUi_dom.flip({ fallbackAxisSideDirection: "start" }), floatingUi_dom.shift({ padding: 5 })],
    whileElementsMounted: floatingUi_dom.autoUpdate
  });
  React.useEffect(() => {
    if (activatorRef.current) refs.setReference(activatorRef.current);
    if (menuRef.current) {
      refs.setFloating(menuRef.current);
    }
  }, [refs, open]);
  React.useEffect(() => {
    if (open && isPressed && listRef.current) {
      const firstItem = listRef.current.querySelector(".gds-menu-item");
      firstItem == null ? void 0 : firstItem.focus({ preventScroll: true });
    }
  }, [open, isPressed]);
  const handleMenuKeyDown = React.useCallback(
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
        case keys.KeyCode.Enter:
        case keys.KeyCode.Space: {
          e.preventDefault();
          const currentItem = items[currentIndex];
          currentItem == null ? void 0 : currentItem.click();
          closeMenu();
          (_c = activatorRef.current) == null ? void 0 : _c.focus({ preventScroll: true });
          break;
        }
        case keys.KeyCode.ArrowDown: {
          e.preventDefault();
          nextIndex = (currentIndex + 1) % items.length;
          (_d = items[nextIndex]) == null ? void 0 : _d.focus({ preventScroll: true });
          break;
        }
        case keys.KeyCode.ArrowUp: {
          e.preventDefault();
          nextIndex = (currentIndex - 1 + items.length) % items.length;
          (_e = items[nextIndex]) == null ? void 0 : _e.focus({ preventScroll: true });
          break;
        }
        case keys.KeyCode.Escape:
        case keys.KeyCode.Tab: {
          closeMenu();
          (_f = activatorRef.current) == null ? void 0 : _f.focus({ preventScroll: true });
          break;
        }
      }
    },
    [setOpen]
  );
  const hideToolTipWhenMenuIsOpened = React.useCallback(
    () => open ? {
      open: !open
    } : {},
    [open]
  );
  const renderMenuActivator = React.useCallback(() => {
    const clickHandler = () => {
      setOpen((prev) => !prev);
      if (open) {
        onClose == null ? void 0 : onClose();
      }
    };
    const handleActivatorKeyDown = (e) => {
      var _a;
      switch (e.key) {
        case keys.KeyCode.Enter:
        case keys.KeyCode.Space:
          setIsPressed(true);
          break;
        case keys.KeyCode.Escape:
        case keys.KeyCode.Tab:
          setIsPressed(false);
          closeMenu();
          break;
        case keys.KeyCode.ArrowDown:
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
      return /* @__PURE__ */ React.createElement(
        IconButton.IconButton,
        {
          id: activatorId,
          icon: activator === "more-vertical" ? interface_moreVertical.InterfaceMoreVertical : interface_more.InterfaceMore,
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
    } else if (React.isValidElement(activator)) {
      return React.cloneElement(activator, {
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
  const renderMenuList = React.useCallback(
    () => open && /* @__PURE__ */ React.createElement("div", { className: "gds-menu-dropdown", ref: menuRef, style: floatingStyles }, /* @__PURE__ */ React.createElement(
      "ul",
      {
        ref: listRef,
        onKeyDown: handleMenuKeyDown,
        onMouseDown: closeMenu,
        className: clsx_m.clsx(
          "gds-menu-list",
          isPressed ? "gds-menu-item-pressed" : "gds-menu-item-container"
        ),
        id: menuListId,
        role: "menu",
        "aria-labelledby": activatorId
      },
      React.Children.map(
        children,
        (child) => React.isValidElement(child) ? React.cloneElement(child) : child
      )
    )),
    [open, floatingStyles, handleMenuKeyDown, isPressed, accessibilityLabel, children]
  );
  return /* @__PURE__ */ React.createElement("div", { className: "gds-menu-container", ...rest }, renderMenuActivator(), renderMenuList());
};
const MenuComponentCompound = compound.makeCompoundComponent(Menu, "Menu", {
  Item: MenuItem.MenuItem,
  Separator: MenuSeparator.MenuSeparator,
  Section: MenuSection.MenuSection
});
exports.Menu = MenuComponentCompound;
