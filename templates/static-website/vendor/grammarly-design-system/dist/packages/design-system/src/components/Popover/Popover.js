import React__default, { useContext, useEffect } from "react";
import { useMergeRefs, FloatingPortal, FloatingFocusManager, FloatingArrow, useFloating, useTransitionStatus, useHover, useFocus, useDismiss, useRole, useClick, useInteractions } from "../../../../../external/@floating-ui_react@0.26.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react/dist/floating-ui.react.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { makeCompoundComponent } from "../../helpers/compound.js";
import { usePrevious } from "../../hooks/usePrevious.js";
import { PortalContainerContext } from "../PortalContainerProvider/PortalContainerProvider.js";
/* empty css           */
import { InterfaceClose } from "../../../../icons/generated/all/interface_close.js";
import { Box } from "../Box/Box.js";
import { offset } from "../../../../../external/@floating-ui_core@1.5.0/external/@floating-ui/core/dist/floating-ui.core.js";
import { flip, shift, autoUpdate } from "../../../../../external/@floating-ui_dom@1.6.3/external/@floating-ui/dom/dist/floating-ui.dom.js";
import { arrow } from "../../../../../external/@floating-ui_react-dom@2.0.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react-dom/dist/floating-ui.react-dom.js";
import { IconButton } from "../IconButton/IconButton.js";
import { Heading } from "../Heading/Heading.js";
const ARROW_HEIGHT = 7;
const GAP = 2;
function usePopover({
  initialOpen = false,
  placement = "top",
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  dismissOnOutsideClick = true
} = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React__default.useState(initialOpen);
  const arrowRef = React__default.useRef(null);
  const closeButtonRef = React__default.useRef(null);
  const open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  const setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  const data = useFloating({
    placement,
    open,
    strategy: "absolute",
    onOpenChange: setOpen,
    whileElementsMounted(...args) {
      const cleanup = autoUpdate(...args, {
        animationFrame: true
      });
      return cleanup;
    },
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      flip({
        fallbackAxisSideDirection: "start"
      }),
      shift({ padding: 5 }),
      arrow({
        element: arrowRef
      })
    ]
  });
  const { context } = data;
  const { isMounted, status } = useTransitionStatus(context);
  const hover = useHover(context, {
    move: false,
    enabled: false
  });
  const focus = useFocus(context, {
    enabled: false
  });
  const dismiss = useDismiss(context, {
    outsidePress: dismissOnOutsideClick,
    bubbles: false,
    capture: {
      outsidePress: true
      // required because Button stops click from bubbling
    }
  });
  const userRole = useRole(context, { role: "dialog" });
  const click = useClick(context, {
    enabled: controlledOpen == null,
    toggle: true
  });
  const interactions = useInteractions([hover, focus, dismiss, userRole, click]);
  return React__default.useMemo(
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
const PopoverContext = /* @__PURE__ */ React__default.createContext(null);
const usePopoverContext = () => {
  const context = React__default.useContext(PopoverContext);
  if (context == null) {
    throw new Error("Popover components must be wrapped in <Popover />");
  }
  return context;
};
const Popover = ({ children, onShow, onHide, ...options }) => {
  const popover = usePopover(options);
  const previousOpen = usePrevious(popover.open);
  const currentOpen = popover.open;
  useEffect(() => {
    if (currentOpen && currentOpen !== previousOpen) {
      onShow == null ? void 0 : onShow();
    }
    if (!currentOpen && currentOpen !== previousOpen) {
      onHide == null ? void 0 : onHide();
    }
  }, [popover, previousOpen]);
  return /* @__PURE__ */ React__default.createElement(PopoverContext.Provider, { value: popover }, children);
};
const PopoverAnchor = /* @__PURE__ */ React__default.forwardRef(
  function PopoverAnchor2({ children, ...props }, propRef) {
    const context = usePopoverContext();
    const childrenRef = children.ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);
    if (React__default.isValidElement(children)) {
      return React__default.cloneElement(
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
const PopoverContent = /* @__PURE__ */ React__default.forwardRef(
  function PopoverContent2(props, propRef) {
    var _a, _b, _c;
    const context = usePopoverContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    const portalContainer = useContext(PortalContainerContext);
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
    return /* @__PURE__ */ React__default.createElement(FloatingPortal, { root: (_a = root != null ? root : portalContainer.popover) != null ? _a : portalContainer.default }, /* @__PURE__ */ React__default.createElement(
      FloatingFocusManager,
      {
        context: context.context,
        returnFocus: true,
        initialFocus: context.closeButtonRef
      },
      /* @__PURE__ */ React__default.createElement(
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
            className: clsx("gds-popover", className),
            children: [
              /* @__PURE__ */ React__default.createElement("div", { "data-gds-mode": "dark", className: "gds-popover-content", key: "popover1" }, /* @__PURE__ */ React__default.createElement("span", { className: "gds-popover-close-button" }, /* @__PURE__ */ React__default.createElement(
                IconButton,
                {
                  ref: context.closeButtonRef,
                  accessibilityLabel: "Close popover",
                  variant: "tertiary",
                  tooltipProps: { open: false },
                  icon: InterfaceClose,
                  onClick: () => context.setOpen(false),
                  size: "small"
                }
              )), illustration && /* @__PURE__ */ React__default.createElement(Box, { marginBottom: 4 }, illustration), title && /* @__PURE__ */ React__default.createElement(Heading, { variant: "heading-xxsmall", as: "h3", marginRight: 5 }, title), /* @__PURE__ */ React__default.createElement(Box, { marginTop: title ? 0.5 : 3 }, children)),
              /* @__PURE__ */ React__default.createElement(
                FloatingArrow,
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
const PopoverCompoundComponent = makeCompoundComponent(Popover, "Popover", {
  Anchor: PopoverAnchor,
  Content: PopoverContent
});
export {
  PopoverCompoundComponent as Popover
};
