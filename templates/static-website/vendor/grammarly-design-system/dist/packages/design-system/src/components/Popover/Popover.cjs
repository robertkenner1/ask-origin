"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const floatingUi_react = require("../../../../../external/@floating-ui_react@0.26.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react/dist/floating-ui.react.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const compound = require("../../helpers/compound.cjs");
const usePrevious = require("../../hooks/usePrevious.cjs");
const PortalContainerProvider = require("../PortalContainerProvider/PortalContainerProvider.cjs");
;/* empty css             */
const interface_close = require("../../../../icons/generated/all/interface_close.cjs");
const Box = require("../Box/Box.cjs");
const floatingUi_core = require("../../../../../external/@floating-ui_core@1.5.0/external/@floating-ui/core/dist/floating-ui.core.cjs");
const floatingUi_dom = require("../../../../../external/@floating-ui_dom@1.6.3/external/@floating-ui/dom/dist/floating-ui.dom.cjs");
const floatingUi_reactDom = require("../../../../../external/@floating-ui_react-dom@2.0.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react-dom/dist/floating-ui.react-dom.cjs");
const IconButton = require("../IconButton/IconButton.cjs");
const Heading = require("../Heading/Heading.cjs");
const ARROW_HEIGHT = 7;
const GAP = 2;
function usePopover({
  initialOpen = false,
  placement = "top",
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  dismissOnOutsideClick = true
} = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
  const arrowRef = React.useRef(null);
  const closeButtonRef = React.useRef(null);
  const open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  const setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  const data = floatingUi_react.useFloating({
    placement,
    open,
    strategy: "absolute",
    onOpenChange: setOpen,
    whileElementsMounted(...args) {
      const cleanup = floatingUi_dom.autoUpdate(...args, {
        animationFrame: true
      });
      return cleanup;
    },
    middleware: [
      floatingUi_core.offset(ARROW_HEIGHT + GAP),
      floatingUi_dom.flip({
        fallbackAxisSideDirection: "start"
      }),
      floatingUi_dom.shift({ padding: 5 }),
      floatingUi_reactDom.arrow({
        element: arrowRef
      })
    ]
  });
  const { context } = data;
  const { isMounted, status } = floatingUi_react.useTransitionStatus(context);
  const hover = floatingUi_react.useHover(context, {
    move: false,
    enabled: false
  });
  const focus = floatingUi_react.useFocus(context, {
    enabled: false
  });
  const dismiss = floatingUi_react.useDismiss(context, {
    outsidePress: dismissOnOutsideClick,
    bubbles: false,
    capture: {
      outsidePress: true
      // required because Button stops click from bubbling
    }
  });
  const userRole = floatingUi_react.useRole(context, { role: "dialog" });
  const click = floatingUi_react.useClick(context, {
    enabled: controlledOpen == null,
    toggle: true
  });
  const interactions = floatingUi_react.useInteractions([hover, focus, dismiss, userRole, click]);
  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      arrowRef,
      closeButtonRef,
      isMounted,
      status
    }),
    [open, setOpen, interactions, data, arrowRef, isMounted, status]
  );
}
const PopoverContext = /* @__PURE__ */ React.createContext(null);
const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);
  if (context == null) {
    throw new Error("Popover components must be wrapped in <Popover />");
  }
  return context;
};
const Popover = ({ children, onShow, onHide, ...options }) => {
  const popover = usePopover(options);
  const previousOpen = usePrevious.usePrevious(popover.open);
  const currentOpen = popover.open;
  React.useEffect(() => {
    if (currentOpen && currentOpen !== previousOpen) {
      onShow == null ? void 0 : onShow();
    }
    if (!currentOpen && currentOpen !== previousOpen) {
      onHide == null ? void 0 : onHide();
    }
  }, [popover, previousOpen]);
  return /* @__PURE__ */ React.createElement(PopoverContext.Provider, { value: popover }, children);
};
const PopoverAnchor = /* @__PURE__ */ React.forwardRef(
  function PopoverAnchor2({ children, ...props }, propRef) {
    const context = usePopoverContext();
    const childrenRef = children.ref;
    const ref = floatingUi_react.useMergeRefs([context.refs.setReference, propRef, childrenRef]);
    if (React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.isMounted ? "open" : "closed",
          "aria-expanded": context.isMounted ? "true" : "false",
          "aria-haspopup": "dialog",
          "aria-controls": context.context.floatingId
        })
      );
    } else return null;
  }
);
const PopoverContent = /* @__PURE__ */ React.forwardRef(
  function PopoverContent2(props, propRef) {
    var _a, _b, _c;
    const context = usePopoverContext();
    const ref = floatingUi_react.useMergeRefs([context.refs.setFloating, propRef]);
    const portalContainer = React.useContext(PortalContainerProvider.PortalContainerContext);
    const {
      accessibilityLabel,
      children,
      className,
      illustration,
      root = null,
      style,
      title,
      width,
      ...rest
    } = props;
    if (!context.open) return null;
    return /* @__PURE__ */ React.createElement(floatingUi_react.FloatingPortal, { root: (_a = root != null ? root : portalContainer.popover) != null ? _a : portalContainer.default }, /* @__PURE__ */ React.createElement(
      floatingUi_react.FloatingFocusManager,
      {
        context: context.context,
        returnFocus: true,
        initialFocus: context.closeButtonRef
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref,
          "data-status": context.status,
          "data-placement": context.placement,
          style: {
            position: context.strategy,
            top: (_b = context.y) != null ? _b : 0,
            left: (_c = context.x) != null ? _c : 0,
            visibility: context.x == null ? "hidden" : "visible",
            width,
            ...style
          },
          ...context.getFloatingProps({
            ...rest,
            "aria-label": accessibilityLabel,
            "aria-modal": true,
            className: clsx_m.clsx("gds-popover", className),
            children: [
              /* @__PURE__ */ React.createElement("div", { "data-gds-mode": "dark", className: "gds-popover-content", key: "popover1" }, /* @__PURE__ */ React.createElement("span", { className: "gds-popover-close-button" }, /* @__PURE__ */ React.createElement(
                IconButton.IconButton,
                {
                  ref: context.closeButtonRef,
                  accessibilityLabel: "Close popover",
                  variant: "tertiary",
                  tooltipProps: { open: false },
                  icon: interface_close.InterfaceClose,
                  onClick: () => context.setOpen(false),
                  size: "small"
                }
              )), illustration && /* @__PURE__ */ React.createElement(Box.Box, { marginBottom: 4 }, illustration), title && /* @__PURE__ */ React.createElement(Heading.Heading, { variant: "heading-xxsmall", as: "h3", marginRight: 5 }, title), /* @__PURE__ */ React.createElement(Box.Box, { marginTop: title ? 0.5 : 3 }, children)),
              /* @__PURE__ */ React.createElement(
                floatingUi_react.FloatingArrow,
                {
                  key: "popover2",
                  className: "gds-arrow",
                  ref: context.arrowRef,
                  context: context.context,
                  stroke: "var(--color-border-elevated-default)",
                  strokeWidth: 0.5
                }
              )
            ]
          })
        }
      )
    ));
  }
);
const PopoverCompoundComponent = compound.makeCompoundComponent(Popover, "Popover", {
  Anchor: PopoverAnchor,
  Content: PopoverContent
});
exports.Popover = PopoverCompoundComponent;
