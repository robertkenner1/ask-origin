"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const compound = require("../../helpers/compound.cjs");
;/* empty css                */
const interface_down = require("../../../../icons/generated/all/interface_down.cjs");
const Flex = require("../Flex/Flex.cjs");
const Icon = require("../Icon/Icon.cjs");
const Text = require("../Text/Text.cjs");
const AccordionContext = /* @__PURE__ */ React.createContext(
  void 0
);
const Accordion = /* @__PURE__ */ React.forwardRef(
  function Accordion2(props, forwardedRef) {
    const {
      children,
      accessibilityLabelledBy,
      bgColor = "base-default",
      size = "medium",
      hasSeparators = true,
      onExpandedChange,
      ...rest
    } = props;
    const accordionRef = _import.useObjectRef(forwardedRef);
    React.useEffect(() => {
      if (!accordionRef.current) return;
      accordionRef.current.addEventListener("click", (event) => {
        var _a, _b;
        const trigger = (_a = event == null ? void 0 : event.target) == null ? void 0 : _a.closest("summary");
        if (!trigger) return;
        const openAccordions = [];
        (_b = accordionRef.current) == null ? void 0 : _b.querySelectorAll(".gds-accordion-list-item").forEach((detail, idx) => {
          if (detail.hasAttribute("open") && detail !== trigger.parentElement) {
            openAccordions.push(idx);
          }
          if (detail === trigger.parentElement && !detail.hasAttribute("open")) {
            openAccordions.push(idx);
          }
        });
        onExpandedChange == null ? void 0 : onExpandedChange(openAccordions);
      });
    }, []);
    return /* @__PURE__ */ React.createElement(
      Flex.Flex,
      {
        ref: accordionRef,
        className: "gds-accordion",
        borderColor: "base-subdued",
        bgColor: `background-${bgColor}`,
        borderRadius: 2,
        width: "100%",
        role: "group",
        "aria-labelledby": accessibilityLabelledBy,
        ...rest
      },
      /* @__PURE__ */ React.createElement(AccordionContext.Provider, { value: { size } }, /* @__PURE__ */ React.createElement(
        Flex.Flex,
        {
          className: clsx_m.clsx("gds-accordion-list", hasSeparators && "gds-accordion-list-separators"),
          width: "100%",
          direction: "column"
        },
        children
      ))
    );
  }
);
const AccordionItem = /* @__PURE__ */ React.forwardRef(
  function AccordionItem2(props, forwardedRef) {
    const { children, title, arrowPosition = "end", iconStart, isExpanded, ...rest } = props;
    const context = React.useContext(AccordionContext);
    const contentRef = React.useRef(null);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(isExpanded);
    if (!context) {
      throw new Error("Accordion.Item must be used within an Accordion");
    }
    const { size } = context;
    React.useEffect(() => {
      if (contentRef.current) {
        const resizeObserver = new ResizeObserver(() => {
        });
        resizeObserver.observe(contentRef.current);
        return () => resizeObserver.disconnect();
      }
    }, [isOpen]);
    React.useEffect(() => {
      if (isExpanded !== void 0 && isExpanded !== isOpen) {
        setIsOpen(isExpanded);
      }
    }, [isExpanded]);
    const handleToggle = (e) => {
      e.preventDefault();
      const newIsOpen = !isOpen;
      setIsAnimating(true);
      setIsOpen(newIsOpen);
      if (newIsOpen) {
        if (contentRef.current) {
          contentRef.current.style.height = "0px";
          void contentRef.current.offsetHeight;
          setTimeout(() => {
            if (contentRef.current) {
              const targetHeight = contentRef.current.scrollHeight;
              contentRef.current.style.height = `${targetHeight}px`;
            }
          }, 10);
        }
      } else {
        if (contentRef.current) {
          const currentHeight = contentRef.current.scrollHeight;
          contentRef.current.style.height = `${currentHeight}px`;
          void contentRef.current.offsetHeight;
          setTimeout(() => {
            if (contentRef.current) {
              contentRef.current.style.height = "0px";
            }
          }, 10);
        }
      }
      setTimeout(() => {
        setIsAnimating(false);
        if (contentRef.current) {
          contentRef.current.style.height = newIsOpen ? "auto" : "0px";
        }
      }, 350);
    };
    const textSizeMap = {
      small: "text-small",
      medium: "text-medium",
      large: "text-large"
    };
    const iconSizeMap = {
      small: "small",
      medium: "medium",
      large: "large"
    };
    return /* @__PURE__ */ React.createElement(
      "details",
      {
        className: "gds-accordion-list-item",
        open: isOpen || isAnimating,
        ref: forwardedRef,
        ...rest
      },
      /* @__PURE__ */ React.createElement("summary", { onClick: handleToggle }, /* @__PURE__ */ React.createElement(
        Flex.Flex,
        {
          className: "gds-accordion-list-item-summary",
          padding: size === "large" ? 4 : 3,
          justify: arrowPosition === "end" ? "space-between" : "start",
          align: "start",
          gap: 3,
          borderRadius: 2
        },
        /* @__PURE__ */ React.createElement(Flex.Flex, { gap: 2, align: "start", justify: "start" }, iconStart && /* @__PURE__ */ React.createElement(Flex.Flex, { flex: "0 0 auto", marginTop: size === "large" ? 1 : 0 }, /* @__PURE__ */ React.createElement(Icon.Icon, { size: iconSizeMap[size], icon: iconStart, accessibilityLabel: "" })), /* @__PURE__ */ React.createElement(Flex.Flex, { flex: "0 1 auto" }, /* @__PURE__ */ React.createElement(Text.Text, { as: "p", variant: textSizeMap[size], weight: "medium" }, title))),
        /* @__PURE__ */ React.createElement(Flex.Flex, { flex: "0 0 auto", marginTop: size === "large" ? 2 : 1 }, /* @__PURE__ */ React.createElement(
          Icon.Icon,
          {
            className: `gds-accordion-arrow-icon ${isOpen ? "gds-accordion-arrow-expanded" : ""}`,
            size: "small",
            icon: interface_down.InterfaceDown,
            accessibilityLabel: ""
          }
        ))
      )),
      /* @__PURE__ */ React.createElement("div", { ref: contentRef, className: "gds-accordion-content" }, /* @__PURE__ */ React.createElement(
        Flex.Flex,
        {
          paddingLeft: size === "large" ? 4 : 3,
          paddingBottom: 2,
          paddingRight: 2,
          paddingTop: 1
        },
        children
      ))
    );
  }
);
const AccordionCompoundComponent = compound.makeCompoundComponent(Accordion, "Accordion", {
  Item: AccordionItem
});
exports.Accordion = AccordionCompoundComponent;
