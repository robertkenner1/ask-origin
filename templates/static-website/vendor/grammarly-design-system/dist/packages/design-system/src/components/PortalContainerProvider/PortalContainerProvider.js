import React__default from "react";
const PortalContainerContext = /* @__PURE__ */ React__default.createContext({
  default: typeof document !== "undefined" ? document.body : void 0
});
const PortalContainerProvider = ({
  children,
  ...props
}) => {
  const context = React__default.useContext(PortalContainerContext);
  const value = React__default.useMemo(
    () => {
      var _a, _b, _c, _d;
      return {
        default: (_a = props.default) != null ? _a : context.default,
        modal: (_b = props.modal) != null ? _b : context.modal,
        tooltip: (_c = props.tooltip) != null ? _c : context.tooltip,
        popover: (_d = props.popover) != null ? _d : context.popover
      };
    },
    [context, props.default, props.modal, props.tooltip, props.popover]
  );
  return /* @__PURE__ */ React__default.createElement(PortalContainerContext.Provider, { value }, children);
};
export {
  PortalContainerContext,
  PortalContainerProvider
};
