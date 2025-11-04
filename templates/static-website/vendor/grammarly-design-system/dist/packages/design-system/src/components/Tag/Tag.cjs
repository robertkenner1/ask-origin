"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const types = require("./types.cjs");
;/* empty css          */
const interface_tip = require("../../../../icons/generated/all/interface_tip.cjs");
const interface_starFilled = require("../../../../icons/generated/all/interface_star-filled.cjs");
const interface_premium = require("../../../../icons/generated/all/interface_premium.cjs");
const _import = require("../../../../../external/@react-aria_visually-hidden@3.8.3_react@18.2.0/external/@react-aria/visually-hidden/dist/import.cjs");
const Icon = require("../Icon/Icon.cjs");
const Text = require("../Text/Text.cjs");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
const Tag = (props) => {
  const {
    variant = "neutral",
    showIcon = true,
    iconStart,
    inline = false,
    label,
    accessibilityLabel,
    className,
    ...rest
  } = props;
  const isVariantWithIcon = types.variantsWithIcon.includes(variant);
  const hasIcon = showIcon && (isVariantWithIcon || iconStart != null);
  React__namespace.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      if (variant in types.deprecatedMap) {
        console.warn(
          `The Tag variant "${variant}" is deprecated. Please use "${types.deprecatedMap[variant]}" instead.`
        );
      }
    }
  }, [variant]);
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      className: clsx_m.clsx(
        "gds-tag",
        `gds-tag-${variant}`,
        inline && "gds-tag-inline",
        hasIcon && "gds-tag-with-icon",
        !hasIcon && "gds-tag-no-icon",
        className
      ),
      ...rest
    },
    showIcon ? /* @__PURE__ */ React__namespace.createElement(TagIcon, { variant, iconStart }) : null,
    /* @__PURE__ */ React__namespace.createElement(TagContent, { label, accessibilityLabel })
  );
};
const TagIcon = ({ variant, iconStart }) => {
  switch (variant) {
    case "premium":
      return /* @__PURE__ */ React__namespace.createElement(
        Icon.Icon,
        {
          className: "gds-tag-icon",
          icon: interface_premium.InterfacePremium,
          variant: "premium",
          accessibilityLabel: "Premium feature",
          size: "small"
        }
      );
    case "pro":
      return /* @__PURE__ */ React__namespace.createElement(
        Icon.Icon,
        {
          className: "gds-tag-icon",
          icon: interface_starFilled.InterfaceStarFilled,
          variant: "pro",
          accessibilityLabel: "Pro feature",
          size: "small"
        }
      );
    case "tip":
      return /* @__PURE__ */ React__namespace.createElement(
        Icon.Icon,
        {
          className: "gds-tag-icon",
          variant: "inherit",
          icon: interface_tip.InterfaceTip,
          accessibilityLabel: "Tip:",
          size: "small"
        }
      );
    default:
      return iconStart ? /* @__PURE__ */ React__namespace.createElement(
        Icon.Icon,
        {
          variant: "inherit",
          accessibilityLabel: "",
          className: "gds-tag-icon",
          icon: iconStart,
          size: "small"
        }
      ) : null;
  }
};
const TagContent = ({ label, accessibilityLabel }) => /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, accessibilityLabel != null ? /* @__PURE__ */ React__namespace.createElement(_import.VisuallyHidden, null, accessibilityLabel) : null, /* @__PURE__ */ React__namespace.createElement(
  Text.Text,
  {
    variant: "text-xsmall",
    as: "span",
    className: "gds-tag-label",
    "aria-hidden": accessibilityLabel != null
  },
  label
));
exports.Tag = Tag;
