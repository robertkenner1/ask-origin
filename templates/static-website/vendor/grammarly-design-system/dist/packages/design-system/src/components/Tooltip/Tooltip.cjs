"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const floatingUi_react = require("../../../../../external/@floating-ui_react@0.26.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react/dist/floating-ui.react.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const usePrevious = require("../../hooks/usePrevious.cjs");
const PortalContainerProvider = require("../PortalContainerProvider/PortalContainerProvider.cjs");
;/* empty css              */
const Text = require("../Text/Text.cjs");
const floatingUi_core = require("../../../../../external/@floating-ui_core@1.5.0/external/@floating-ui/core/dist/floating-ui.core.cjs");
const floatingUi_dom = require("../../../../../external/@floating-ui_dom@1.6.3/external/@floating-ui/dom/dist/floating-ui.dom.cjs");
const floatingUi_reactDom = require("../../../../../external/@floating-ui_react-dom@2.0.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@floating-ui/react-dom/dist/floating-ui.react-dom.cjs");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
  const arrowRef = React.useRef(null);
  const open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  const setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  const previousOpen = usePrevious.usePrevious(open);
  React.useEffect(() => {
    if (open && open !== previousOpen) {
      onShow == null ? void 0 : onShow();
    }
    if (!open && open !== previousOpen) {
      onHide == null ? void 0 : onHide();
    }
  }, [open, previousOpen]);
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
  const { isMounted, status } = floatingUi_react.useTransitionStatus(context, {
    duration: openDelay
  });
  const hover = floatingUi_react.useHover(context, {
    move: false,
    enabled: controlledOpen == null,
    delay: openDelay
  });
  const focus = floatingUi_react.useFocus(context, {
    enabled: controlledOpen == null
  });
  const dismiss = floatingUi_react.useDismiss(context);
  const userRole = floatingUi_react.useRole(context, { role: "tooltip" });
  const click = floatingUi_react.useClick(context, {
    enabled: controlledOpen == null,
    toggle: toggleOnClick,
    ignoreMouse: true
  });
  const interactions = floatingUi_react.useInteractions([hover, focus, dismiss, userRole, click]);
  return React.useMemo(
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
const TooltipContext = /* @__PURE__ */ React.createContext(null);
const useTooltipContext = () => {
  const context = React.useContext(TooltipContext);
  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }
  return context;
};
const Tooltip = ({ children, ...options }) => {
  const tooltip = useTooltip(options);
  return /* @__PURE__ */ React.createElement(TooltipContext.Provider, { value: tooltip }, children);
};
const TooltipTrigger = /* @__PURE__ */ React.forwardRef(
  function TooltipTrigger2({ children, asChild = false, ...props }, propRef) {
    const context = useTooltipContext();
    const childrenRef = children.ref;
    const ref = floatingUi_react.useMergeRefs([context.refs.setReference, propRef, childrenRef]);
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.isMounted ? "open" : "closed"
        })
      );
    }
    return /* @__PURE__ */ React.createElement(
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
const TooltipContent = /* @__PURE__ */ React.forwardRef(
  function TooltipContent2(props, propRef) {
    var _a, _b, _c, _d;
    const { children, className, root, style, ...rest } = props;
    const context = useTooltipContext();
    const portalContainer = React.useContext(PortalContainerProvider.PortalContainerContext);
    const ref = floatingUi_react.useMergeRefs([context.refs.setFloating, propRef]);
    return /* @__PURE__ */ React.createElement(floatingUi_react.FloatingPortal, { root: (_a = root != null ? root : portalContainer.tooltip) != null ? _a : portalContainer.default }, context.isMounted && // for the future: see https://floating-ui.com/docs/FloatingFocusManager
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
          ...style
        },
        ...context.getFloatingProps({
          ...rest,
          className: clsx_m.clsx("gds-tooltip", className),
          children: [
            /* @__PURE__ */ React.createElement("div", { className: "gds-tooltip-content", key: "tooltip1", "data-gds-mode": "dark" }, /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-small", className: "gds-tooltip-content-text" }, children), ((_d = context.annotation) != null ? _d : "").length > 0 && /* @__PURE__ */ React.createElement(
              Text.Text,
              {
                variant: "text-small",
                as: "label",
                className: "gds-tooltip-content-annotation"
              },
              context.annotation
            )),
            /* @__PURE__ */ React.createElement(
              floatingUi_react.FloatingArrow,
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
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipTrigger = TooltipTrigger;
