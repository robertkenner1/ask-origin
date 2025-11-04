"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const compound = require("../../helpers/compound.cjs");
const useHasVerticalScrollbar = require("../../hooks/useHasVerticalScrollbar.cjs");
const usePrefersReducedMotion = require("../../hooks/usePrefersReducedMotion.cjs");
const usePrevious = require("../../hooks/usePrevious.cjs");
const keys = require("../Menu/keys.cjs");
const Overlay = require("./Overlay.cjs");
const shared = require("./shared.cjs");
;/* empty css            */
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const $k7QOs$reactdom = require("react-dom");
const _import = require("../../../../../external/@react-aria_dialog@3.5.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@react-aria/dialog/dist/import.cjs");
const _import$1 = require("../../../../../external/@react-aria_overlays@3.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@react-aria/overlays/dist/import.cjs");
const interface_close = require("../../../../icons/generated/all/interface_close.cjs");
const Heading = require("../Heading/Heading.cjs");
const Text = require("../Text/Text.cjs");
const IconButton = require("../IconButton/IconButton.cjs");
const ModalContext = React.createContext(void 0);
const Modal = (props) => {
  const {
    children,
    title,
    description,
    width = "medium",
    dismissOnOutsideClick = true,
    onClose,
    onHide,
    onShow,
    hasCloseButton = true,
    isOpen = false,
    role = "dialog",
    accessibilityLabelCloseButton = "Close",
    className,
    target,
    ...rest
  } = props;
  const ref = React.useRef(null);
  const renderTarget = target != null ? target : React.useContext(ModalContext);
  const { overlayProps, underlayProps } = _import$1.useOverlay(
    {
      isDismissable: false,
      isOpen,
      onClose
    },
    ref
  );
  _import$1.usePreventScroll({
    isDisabled: !isOpen
  });
  const previousOpen = usePrevious.usePrevious(isOpen);
  React.useEffect(() => {
    if (isOpen && isOpen !== previousOpen) {
      onShow == null ? void 0 : onShow();
    }
    if (!isOpen && isOpen !== previousOpen) {
      onHide == null ? void 0 : onHide();
    }
  }, [isOpen, previousOpen]);
  const prefersReducedMotion = usePrefersReducedMotion.usePrefersReducedMotion();
  const exited = shared.useExitAnimationState(isOpen, prefersReducedMotion);
  if (exited && !isOpen) {
    return null;
  }
  const overlay = /* @__PURE__ */ React.createElement(Overlay.Overlay, { isOpen, onClose, dismissOnOutsideClick }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: clsx_m.clsx(`gds-modal-container`, !isOpen && "hide", className),
      ...underlayProps,
      ...rest
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        ...overlayProps,
        ref,
        className: clsx_m.clsx(
          "gds-modal-overlay",
          !isOpen && "hide",
          width === "small" ? "gds-modal-small" : "gds-modal-medium"
        ),
        role: "none",
        onClick: (e) => {
          e.stopPropagation();
        }
      },
      /* @__PURE__ */ React.createElement(
        ModalDialog,
        {
          role,
          title,
          description,
          hasCloseButton,
          onClose,
          accessibilityLabelCloseButton
        },
        children
      )
    )
  ));
  return renderTarget ? $k7QOs$reactdom.createPortal(overlay, renderTarget) : overlay;
};
const ModalDialog = ({
  children,
  title,
  description,
  hasCloseButton,
  onClose,
  accessibilityLabelCloseButton,
  ...props
}) => {
  const ref = React.useRef(null);
  const { dialogProps, titleProps } = _import.useDialog({ ...props, role: props.role }, ref);
  return /* @__PURE__ */ React.createElement("div", { className: "gds-modal-content", ...dialogProps, ref, "aria-modal": "true" }, /* @__PURE__ */ React.createElement("div", { className: "gds-modal-header" }, /* @__PURE__ */ React.createElement("div", { className: "gds-modal-header-title" }, /* @__PURE__ */ React.createElement(Heading.Heading, { variant: "heading-medium", ...titleProps, as: "h3" }, title)), description != null && /* @__PURE__ */ React.createElement("div", { className: "gds-modal-header-description" }, /* @__PURE__ */ React.createElement(Text.Text, { variant: "text-small", as: "p" }, description))), hasCloseButton === true && /* @__PURE__ */ React.createElement(
    ModalCloseButton,
    {
      accessibilityLabelCloseButton,
      onClick: () => onClose == null ? void 0 : onClose(),
      onKeyDown: (e) => {
        if (e.key === keys.KeyCode.Space) {
          onClose == null ? void 0 : onClose();
        }
      }
    }
  ), children);
};
const ModalCloseButton = ({
  accessibilityLabelCloseButton = "Close",
  onClick,
  onKeyDown
}) => {
  return /* @__PURE__ */ React.createElement("span", { className: "gds-modal-close-button" }, /* @__PURE__ */ React.createElement(
    IconButton.IconButton,
    {
      accessibilityLabel: accessibilityLabelCloseButton,
      variant: "tertiary",
      tooltipProps: { open: false },
      icon: interface_close.InterfaceClose,
      onClick,
      onKeyDown
    }
  ));
};
const ModalBody = ({ children }) => {
  const contentRef = React.useRef(null);
  const hasVerticalScrollbar = useHasVerticalScrollbar.useHasVerticalScrollbar(contentRef);
  const modalBodyClass = `gds-modal-body ${hasVerticalScrollbar ? "gds-modal-body-border-top" : ""}`;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: modalBodyClass,
      ref: contentRef,
      ...hasVerticalScrollbar ? { tabIndex: 0 } : {}
    },
    children
  );
};
const ModalFooter = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "gds-modal-footer" }, children);
};
const ModalCompoundComponent = compound.makeCompoundComponent(Modal, "Modal", {
  Body: ModalBody,
  Footer: ModalFooter,
  Provider: ModalContext.Provider,
  Context: ModalContext
});
exports.Modal = ModalCompoundComponent;
exports.ModalBody = ModalBody;
exports.ModalDialog = ModalDialog;
exports.ModalFooter = ModalFooter;
