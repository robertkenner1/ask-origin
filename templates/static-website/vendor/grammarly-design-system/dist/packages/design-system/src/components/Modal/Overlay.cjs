"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
;/* empty css              */
const Overlay = ({
  children,
  isOpen,
  dismissOnOutsideClick,
  onClose
}) => {
  const modalRef = React.useRef(null);
  const firstFocusableElementRef = React.useRef(null);
  const lastFocusableElementRef = React.useRef(null);
  const previousElementRef = React.useRef(null);
  React.useLayoutEffect(() => {
    previousElementRef.current = document.activeElement;
  }, []);
  React.useEffect(() => {
    return () => {
      var _a;
      (_a = previousElementRef.current) == null ? void 0 : _a.focus();
    };
  }, []);
  const getFocusableElements = (node) => {
    if (!node) return [];
    const focusableElements = Array.from(
      node.querySelectorAll("button, [href], input, select, textarea, [tabindex]")
    ).filter(
      (el) => el instanceof HTMLElement && !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden") && (!el.tabIndex || el.tabIndex >= 0)
    );
    node.querySelectorAll("*").forEach((element) => {
      if (element.shadowRoot) {
        focusableElements.push(...getFocusableElements(element.shadowRoot));
      }
    });
    return focusableElements;
  };
  const findActiveElement = (root = document) => {
    if (root.activeElement && root.activeElement.shadowRoot) {
      return findActiveElement(root.activeElement.shadowRoot);
    } else {
      return root.activeElement;
    }
  };
  React.useEffect(() => {
    var _a;
    if (isOpen && modalRef.current) {
      let focusableElements = getFocusableElements(modalRef.current);
      let activeElementIndex = -1;
      const mutationObserver = new MutationObserver((mutationList) => {
        for (const mutation of mutationList.filter((m) => m.type === "childList")) {
          const { addedNodes, removedNodes } = mutation;
          if (addedNodes || removedNodes) {
            const activeElement = findActiveElement();
            focusableElements = getFocusableElements(modalRef.current);
            activeElementIndex = focusableElements.indexOf(activeElement);
            break;
          }
        }
      });
      if (focusableElements.length > 0) {
        firstFocusableElementRef.current = focusableElements[0];
        lastFocusableElementRef.current = focusableElements[focusableElements.length - 1];
        const handleKeyDown = (e) => {
          var _a2, _b;
          if (e.key === "Tab") {
            e.preventDefault();
            if (e.shiftKey) {
              activeElementIndex--;
              if (activeElementIndex < 0) {
                activeElementIndex = focusableElements.length - 1;
              }
              while (!((_a2 = modalRef.current) == null ? void 0 : _a2.contains(focusableElements[activeElementIndex])) && activeElementIndex >= 0) {
                activeElementIndex--;
              }
              if (activeElementIndex < 0) {
                activeElementIndex = focusableElements.length - 1;
              }
            } else {
              activeElementIndex++;
              if (activeElementIndex >= focusableElements.length) {
                activeElementIndex = 0;
              }
              while (!((_b = modalRef.current) == null ? void 0 : _b.contains(focusableElements[activeElementIndex])) && activeElementIndex < focusableElements.length) {
                activeElementIndex++;
              }
              if (activeElementIndex >= focusableElements.length) {
                activeElementIndex = 0;
              }
            }
            focusableElements[activeElementIndex].focus();
          }
        };
        (_a = modalRef.current) == null ? void 0 : _a.addEventListener("keydown", handleKeyDown);
        mutationObserver.observe(modalRef.current, { childList: true, subtree: true });
        return () => {
          var _a2;
          (_a2 = modalRef.current) == null ? void 0 : _a2.removeEventListener("keydown", handleKeyDown);
          mutationObserver.disconnect();
        };
      }
    }
  }, [isOpen]);
  return (
    // eslint-disable-next-line
    /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: modalRef,
        className: `gds-modal-backdrop ${isOpen ? "gds-modal-backdrop-active" : ""}`,
        onClick: (e) => {
          dismissOnOutsideClick && isOpen && (onClose == null ? void 0 : onClose());
          e.stopPropagation();
          e.preventDefault();
        }
      },
      children
    )
  );
};
exports.Overlay = Overlay;
