import React__default from "react";
import { useObjectRef as $df56164dff5785e2$export$4338b53315abf666 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { makeCompoundComponent } from "../../helpers/compound.js";
/* empty css              */
import { InterfaceDown } from "../../../../icons/generated/all/interface_down.js";
import { Flex } from "../Flex/Flex.js";
import { Icon } from "../Icon/Icon.js";
import { Text } from "../Text/Text.js";
const AccordionContext = /* @__PURE__ */ React__default.createContext(
  void 0
);
const Accordion = /* @__PURE__ */ React__default.forwardRef(
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
    const accordionRef = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
    React__default.useEffect(() => {
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
    return /* @__PURE__ */ React__default.createElement(
      Flex,
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
      /* @__PURE__ */ React__default.createElement(AccordionContext.Provider, { value: { size } }, /* @__PURE__ */ React__default.createElement(
        Flex,
        {
          className: clsx("gds-accordion-list", hasSeparators && "gds-accordion-list-separators"),
          width: "100%",
          direction: "column"
        },
        children
      ))
    );
  }
);
const AccordionItem = /* @__PURE__ */ React__default.forwardRef(
  function AccordionItem2(props, forwardedRef) {
    const { children, title, arrowPosition = "end", iconStart, isExpanded, ...rest } = props;
    const context = React__default.useContext(AccordionContext);
    const contentRef = React__default.useRef(null);
    const [isAnimating, setIsAnimating] = React__default.useState(false);
    const [isOpen, setIsOpen] = React__default.useState(isExpanded);
    if (!context) {
      throw new Error("Accordion.Item must be used within an Accordion");
    }
    const { size } = context;
    React__default.useEffect(() => {
      if (contentRef.current) {
        const resizeObserver = new ResizeObserver(() => {
        });
        resizeObserver.observe(contentRef.current);
        return () => resizeObserver.disconnect();
      }
    }, [isOpen]);
    React__default.useEffect(() => {
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
    return /* @__PURE__ */ React__default.createElement(
      "details",
      {
        className: "gds-accordion-list-item",
        open: isOpen || isAnimating,
        ref: forwardedRef,
        ...rest
      },
      /* @__PURE__ */ React__default.createElement("summary", { onClick: handleToggle }, /* @__PURE__ */ React__default.createElement(
        Flex,
        {
          className: "gds-accordion-list-item-summary",
          padding: size === "large" ? 4 : 3,
          justify: arrowPosition === "end" ? "space-between" : "start",
          align: "start",
          gap: 3,
          borderRadius: 2
        },
        /* @__PURE__ */ React__default.createElement(Flex, { gap: 2, align: "start", justify: "start" }, iconStart && /* @__PURE__ */ React__default.createElement(Flex, { flex: "0 0 auto", marginTop: size === "large" ? 1 : 0 }, /* @__PURE__ */ React__default.createElement(Icon, { size: iconSizeMap[size], icon: iconStart, accessibilityLabel: "" })), /* @__PURE__ */ React__default.createElement(Flex, { flex: "0 1 auto" }, /* @__PURE__ */ React__default.createElement(Text, { as: "p", variant: textSizeMap[size], weight: "medium" }, title))),
        /* @__PURE__ */ React__default.createElement(Flex, { flex: "0 0 auto", marginTop: size === "large" ? 2 : 1 }, /* @__PURE__ */ React__default.createElement(
          Icon,
          {
            className: `gds-accordion-arrow-icon ${isOpen ? "gds-accordion-arrow-expanded" : ""}`,
            size: "small",
            icon: InterfaceDown,
            accessibilityLabel: ""
          }
        ))
      )),
      /* @__PURE__ */ React__default.createElement("div", { ref: contentRef, className: "gds-accordion-content" }, /* @__PURE__ */ React__default.createElement(
        Flex,
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
const AccordionCompoundComponent = makeCompoundComponent(Accordion, "Accordion", {
  Item: AccordionItem
});
export {
  AccordionCompoundComponent as Accordion
};
