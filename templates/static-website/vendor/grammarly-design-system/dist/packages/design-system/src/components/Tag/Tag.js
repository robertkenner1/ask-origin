import * as React from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { deprecatedMap, variantsWithIcon } from "./types.js";
/* empty css        */
import { InterfaceTip } from "../../../../icons/generated/all/interface_tip.js";
import { InterfaceStarFilled } from "../../../../icons/generated/all/interface_star-filled.js";
import { InterfacePremium } from "../../../../icons/generated/all/interface_premium.js";
import { VisuallyHidden as $5c3e21d68f1c4674$export$439d29a4e110a164 } from "../../../../../external/@react-aria_visually-hidden@3.8.3_react@18.2.0/external/@react-aria/visually-hidden/dist/import.js";
import { Icon } from "../Icon/Icon.js";
import { Text } from "../Text/Text.js";
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
  const isVariantWithIcon = variantsWithIcon.includes(variant);
  const hasIcon = showIcon && (isVariantWithIcon || iconStart != null);
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      if (variant in deprecatedMap) {
        console.warn(
          `The Tag variant "${variant}" is deprecated. Please use "${deprecatedMap[variant]}" instead.`
        );
      }
    }
  }, [variant]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: clsx(
        "gds-tag",
        `gds-tag-${variant}`,
        inline && "gds-tag-inline",
        hasIcon && "gds-tag-with-icon",
        !hasIcon && "gds-tag-no-icon",
        className
      ),
      ...rest
    },
    showIcon ? /* @__PURE__ */ React.createElement(TagIcon, { variant, iconStart }) : null,
    /* @__PURE__ */ React.createElement(TagContent, { label, accessibilityLabel })
  );
};
const TagIcon = ({ variant, iconStart }) => {
  switch (variant) {
    case "premium":
      return /* @__PURE__ */ React.createElement(
        Icon,
        {
          className: "gds-tag-icon",
          icon: InterfacePremium,
          variant: "premium",
          accessibilityLabel: "Premium feature",
          size: "small"
        }
      );
    case "pro":
      return /* @__PURE__ */ React.createElement(
        Icon,
        {
          className: "gds-tag-icon",
          icon: InterfaceStarFilled,
          variant: "pro",
          accessibilityLabel: "Pro feature",
          size: "small"
        }
      );
    case "tip":
      return /* @__PURE__ */ React.createElement(
        Icon,
        {
          className: "gds-tag-icon",
          variant: "inherit",
          icon: InterfaceTip,
          accessibilityLabel: "Tip:",
          size: "small"
        }
      );
    default:
      return iconStart ? /* @__PURE__ */ React.createElement(
        Icon,
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
const TagContent = ({ label, accessibilityLabel }) => /* @__PURE__ */ React.createElement(React.Fragment, null, accessibilityLabel != null ? /* @__PURE__ */ React.createElement($5c3e21d68f1c4674$export$439d29a4e110a164, null, accessibilityLabel) : null, /* @__PURE__ */ React.createElement(
  Text,
  {
    variant: "text-xsmall",
    as: "span",
    className: "gds-tag-label",
    "aria-hidden": accessibilityLabel != null
  },
  label
));
export {
  Tag
};
