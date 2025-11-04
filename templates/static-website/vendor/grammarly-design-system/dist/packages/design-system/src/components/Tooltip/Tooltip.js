import React__default, { useEffect } from "react";
import { useMergeRefs, FloatingPortal, FloatingArrow, useFloating, useTransitionStatus, useHover, useFocus, useDismiss, useRole, useClick, useInteractions } from "../../../../../external/@floating-ui_react@0.26.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react/dist/floating-ui.react.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { usePrevious } from "../../hooks/usePrevious.js";
import { PortalContainerContext } from "../PortalContainerProvider/PortalContainerProvider.js";
/* empty css            */
import { Text } from "../Text/Text.js";
import { offset } from "../../../../../external/@floating-ui_core@1.5.0/external/@floating-ui/core/dist/floating-ui.core.js";
import { flip, shift, autoUpdate } from "../../../../../external/@floating-ui_dom@1.6.3/external/@floating-ui/dom/dist/floating-ui.dom.js";
import { arrow } from "../../../../../external/@floating-ui_react-dom@2.0.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react-dom/dist/floating-ui.react-dom.js";
const ARROW_HEIGHT = 7;
const GAP = 2;
const OPENING_TRANSITION_DURATION_MS = 200;
function useTooltip({
  initialOpen = false,
  placement = "top",
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  openDelay = OPENING_TRANSITION_DURATION_MS,
  annotation = null,
  toggleOnClick = true,
  onShow,
  onHide
} = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React__default.useState(initialOpen);
  const arrowRef = React__default.useRef(null);
  const open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  const setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  const previousOpen = usePrevious(open);
  useEffect(() => {
    if (open && open !== previousOpen) {
      onShow == null ? void 0 : onShow();
    }
    if (!open && open !== previousOpen) {
      onHide == null ? void 0 : onHide();
    }
  }, [open, previousOpen]);
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
  const { isMounted, status } = useTransitionStatus(context, {
    duration: openDelay
  });
  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
    delay: openDelay
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null
  });
  const dismiss = useDismiss(context);
  const userRole = useRole(context, { role: "tooltip" });
  const click = useClick(context, {
    enabled: controlledOpen == null,
    toggle: toggleOnClick,
    ignoreMouse: true
  });
  const interactions = useInteractions([hover, focus, dismiss, userRole, click]);
  return React__default.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      arrowRef,
      isMounted,
      status,
      annotation
    }),
    [open, setOpen, interactions, data, arrowRef, isMounted, status, annotation]
  );
}
const TooltipContext = /* @__PURE__ */ React__default.createContext(null);
const useTooltipContext = () => {
  const context = React__default.useContext(TooltipContext);
  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }
  return context;
};
const Tooltip = ({ children, ...options }) => {
  const tooltip = useTooltip(options);
  return /* @__PURE__ */ React__default.createElement(TooltipContext.Provider, { value: tooltip }, children);
};
const TooltipTrigger = /* @__PURE__ */ React__default.forwardRef(
  function TooltipTrigger2({ children, asChild = false, ...props }, propRef) {
    const context = useTooltipContext();
    const childrenRef = children.ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);
    if (asChild && React__default.isValidElement(children)) {
      return React__default.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.isMounted ? "open" : "closed"
        })
      );
    }
    return /* @__PURE__ */ React__default.createElement(
      "button",
      {
        ref,
        type: "button",
        "data-state": context.isMounted ? "open" : "closed",
        ...context.getReferenceProps(props)
      },
      children
    );
  }
);
const TooltipContent = /* @__PURE__ */ React__default.forwardRef(
  function TooltipContent2(props, propRef) {
    var _a, _b, _c, _d;
    const { children, className, root, style, ...rest } = props;
    const context = useTooltipContext();
    const portalContainer = React__default.useContext(PortalContainerContext);
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    return /* @__PURE__ */ React__default.createElement(FloatingPortal, { root: (_a = root != null ? root : portalContainer.tooltip) != null ? _a : portalContainer.default }, context.isMounted && // for the future: see https://floating-ui.com/docs/FloatingFocusManager
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
          ...style
        },
        ...context.getFloatingProps({
          ...rest,
          className: clsx("gds-tooltip", className),
          children: [
            /* @__PURE__ */ React__default.createElement("div", { className: "gds-tooltip-content", key: "tooltip1", "data-gds-mode": "dark" }, /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-small", className: "gds-tooltip-content-text" }, children), ((_d = context.annotation) != null ? _d : "").length > 0 && /* @__PURE__ */ React__default.createElement(
              Text,
              {
                variant: "text-small",
                as: "label",
                className: "gds-tooltip-content-annotation"
              },
              context.annotation
            )),
            /* @__PURE__ */ React__default.createElement(
              FloatingArrow,
              {
                key: "tooltip2",
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
    ));
  }
);
export {
  Tooltip,
  TooltipContent,
  TooltipTrigger
};
