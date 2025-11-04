import React__default, { createContext, useContext, useEffect } from "react";
import { makeCompoundComponent } from "../../helpers/compound.js";
import { useHasVerticalScrollbar } from "../../hooks/useHasVerticalScrollbar.js";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";
import { usePrevious } from "../../hooks/usePrevious.js";
import { KeyCode } from "../Menu/keys.js";
import { Overlay } from "./Overlay.js";
import { useExitAnimationState } from "./shared.js";
/* empty css          */
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { createPortal } from "react-dom";
import { useDialog as $40df3f8667284809$export$d55e7ee900f34e93 } from "../../../../../external/@react-aria_dialog@3.5.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@react-aria/dialog/dist/import.js";
import { useOverlay as $a11501f3d1d39e6c$export$ea8f71083e90600f, usePreventScroll as $49c51c25361d4cd2$export$ee0f7cc6afcd1c18 } from "../../../../../external/@react-aria_overlays@3.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@react-aria/overlays/dist/import.js";
import { InterfaceClose } from "../../../../icons/generated/all/interface_close.js";
import { Heading } from "../Heading/Heading.js";
import { Text } from "../Text/Text.js";
import { IconButton } from "../IconButton/IconButton.js";
const ModalContext = createContext(void 0);
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
  const ref = React__default.useRef(null);
  const renderTarget = target != null ? target : useContext(ModalContext);
  const { overlayProps, underlayProps } = $a11501f3d1d39e6c$export$ea8f71083e90600f(
    {
      isDismissable: false,
      isOpen,
      onClose
    },
    ref
  );
  $49c51c25361d4cd2$export$ee0f7cc6afcd1c18({
    isDisabled: !isOpen
  });
  const previousOpen = usePrevious(isOpen);
  useEffect(() => {
    if (isOpen && isOpen !== previousOpen) {
      onShow == null ? void 0 : onShow();
    }
    if (!isOpen && isOpen !== previousOpen) {
      onHide == null ? void 0 : onHide();
    }
  }, [isOpen, previousOpen]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const exited = useExitAnimationState(isOpen, prefersReducedMotion);
  if (exited && !isOpen) {
    return null;
  }
  const overlay = /* @__PURE__ */ React__default.createElement(Overlay, { isOpen, onClose, dismissOnOutsideClick }, /* @__PURE__ */ React__default.createElement(
    "div",
    {
      className: clsx(`gds-modal-container`, !isOpen && "hide", className),
      ...underlayProps,
      ...rest
    },
    /* @__PURE__ */ React__default.createElement(
      "div",
      {
        ...overlayProps,
        ref,
        className: clsx(
          "gds-modal-overlay",
          !isOpen && "hide",
          width === "small" ? "gds-modal-small" : "gds-modal-medium"
        ),
        role: "none",
        onClick: (e) => {
          e.stopPropagation();
        }
      },
      /* @__PURE__ */ React__default.createElement(
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
  return renderTarget ? createPortal(overlay, renderTarget) : overlay;
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
  const ref = React__default.useRef(null);
  const { dialogProps, titleProps } = $40df3f8667284809$export$d55e7ee900f34e93({ ...props, role: props.role }, ref);
  return /* @__PURE__ */ React__default.createElement("div", { className: "gds-modal-content", ...dialogProps, ref, "aria-modal": "true" }, /* @__PURE__ */ React__default.createElement("div", { className: "gds-modal-header" }, /* @__PURE__ */ React__default.createElement("div", { className: "gds-modal-header-title" }, /* @__PURE__ */ React__default.createElement(Heading, { variant: "heading-medium", ...titleProps, as: "h3" }, title)), description != null && /* @__PURE__ */ React__default.createElement("div", { className: "gds-modal-header-description" }, /* @__PURE__ */ React__default.createElement(Text, { variant: "text-small", as: "p" }, description))), hasCloseButton === true && /* @__PURE__ */ React__default.createElement(
    ModalCloseButton,
    {
      accessibilityLabelCloseButton,
      onClick: () => onClose == null ? void 0 : onClose(),
      onKeyDown: (e) => {
        if (e.key === KeyCode.Space) {
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
  return /* @__PURE__ */ React__default.createElement("span", { className: "gds-modal-close-button" }, /* @__PURE__ */ React__default.createElement(
    IconButton,
    {
      accessibilityLabel: accessibilityLabelCloseButton,
      variant: "tertiary",
      tooltipProps: { open: false },
      icon: InterfaceClose,
      onClick,
      onKeyDown
    }
  ));
};
const ModalBody = ({ children }) => {
  const contentRef = React__default.useRef(null);
  const hasVerticalScrollbar = useHasVerticalScrollbar(contentRef);
  const modalBodyClass = `gds-modal-body ${hasVerticalScrollbar ? "gds-modal-body-border-top" : ""}`;
  return /* @__PURE__ */ React__default.createElement(
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
  return /* @__PURE__ */ React__default.createElement("div", { className: "gds-modal-footer" }, children);
};
const ModalCompoundComponent = makeCompoundComponent(Modal, "Modal", {
  Body: ModalBody,
  Footer: ModalFooter,
  Provider: ModalContext.Provider,
  Context: ModalContext
});
export {
  ModalCompoundComponent as Modal,
  ModalBody,
  ModalDialog,
  ModalFooter
};
