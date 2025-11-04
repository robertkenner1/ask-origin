import React__default from "react";
import { LogoGoTypeColorSecondary } from "../../../../icons/generated/all/logo_go-type-color-secondary.js";
import { LogoGoStackedColorSecondary } from "../../../../icons/generated/all/logo_go-stacked-color-secondary.js";
import { LogoGoHorizontalColorSecondary } from "../../../../icons/generated/all/logo_go-horizontal-color-secondary.js";
import { LogoGoMarkColorSecondary } from "../../../../icons/generated/all/logo_go-mark-color-secondary.js";
import { LogoMailMarkMonoLight } from "../../../../icons/generated/all/logo_mail-mark-mono-light.js";
import { LogoMailMarkMonoInverse } from "../../../../icons/generated/all/logo_mail-mark-mono-inverse.js";
import { LogoMailMarkColorPrimary } from "../../../../icons/generated/all/logo_mail-mark-color-primary.js";
import { LogoSuperhumanTypeMonoLight } from "../../../../icons/generated/all/logo_superhuman-type-mono-light.js";
import { LogoSuperhumanTypeColorSecondary } from "../../../../icons/generated/all/logo_superhuman-type-color-secondary.js";
import { LogoSuperhumanStackedMonoLight } from "../../../../icons/generated/all/logo_superhuman-stacked-mono-light.js";
import { LogoSuperhumanStackedColorSecondary } from "../../../../icons/generated/all/logo_superhuman-stacked-color-secondary.js";
import { LogoSuperhumanStackedColorPrimary } from "../../../../icons/generated/all/logo_superhuman-stacked-color-primary.js";
import { LogoSuperhumanHorizontalMonoLight } from "../../../../icons/generated/all/logo_superhuman-horizontal-mono-light.js";
import { LogoSuperhumanHorizontalColorSecondary } from "../../../../icons/generated/all/logo_superhuman-horizontal-color-secondary.js";
import { LogoSuperhumanHorizontalColorPrimary } from "../../../../icons/generated/all/logo_superhuman-horizontal-color-primary.js";
import { LogoSuperhumanMarkMonoLight } from "../../../../icons/generated/all/logo_superhuman-mark-mono-light.js";
import { LogoSuperhumanMarkColorSecondary } from "../../../../icons/generated/all/logo_superhuman-mark-color-secondary.js";
import { LogoSuperhumanMarkColorPrimary } from "../../../../icons/generated/all/logo_superhuman-mark-color-primary.js";
import { LogoCodaTypeMonoLight } from "../../../../icons/generated/all/logo_coda-type-mono-light.js";
import { LogoCodaTypeMonoInverse } from "../../../../icons/generated/all/logo_coda-type-mono-inverse.js";
import { LogoCodaTypeColorSecondary } from "../../../../icons/generated/all/logo_coda-type-color-secondary.js";
import { LogoCodaTypeColorPrimary } from "../../../../icons/generated/all/logo_coda-type-color-primary.js";
import { LogoCodaMarkMonoLight } from "../../../../icons/generated/all/logo_coda-mark-mono-light.js";
import { LogoCodaMarkMonoInverse } from "../../../../icons/generated/all/logo_coda-mark-mono-inverse.js";
import { LogoCodaMarkColorSecondary } from "../../../../icons/generated/all/logo_coda-mark-color-secondary.js";
import { LogoCodaMarkColorPrimary } from "../../../../icons/generated/all/logo_coda-mark-color-primary.js";
import { LogoGrammarlyStackedMonoLight } from "../../../../icons/generated/all/logo_grammarly-stacked-mono-light.js";
import { LogoGrammarlyStackedMonoInverse } from "../../../../icons/generated/all/logo_grammarly-stacked-mono-inverse.js";
import { LogoGrammarlyStackedColorPrimary } from "../../../../icons/generated/all/logo_grammarly-stacked-color-primary.js";
import { LogoGrammarlyHorizontalMonoLight } from "../../../../icons/generated/all/logo_grammarly-horizontal-mono-light.js";
import { LogoGrammarlyHorizontalMonoInverse } from "../../../../icons/generated/all/logo_grammarly-horizontal-mono-inverse.js";
import { LogoGrammarlyHorizontalColorPrimary } from "../../../../icons/generated/all/logo_grammarly-horizontal-color-primary.js";
import { LogoGrammarlyMarkMonoLight } from "../../../../icons/generated/all/logo_grammarly-mark-mono-light.js";
import { LogoGrammarlyMarkMonoInverse } from "../../../../icons/generated/all/logo_grammarly-mark-mono-inverse.js";
import { LogoGrammarlyMarkColorPrimary } from "../../../../icons/generated/all/logo_grammarly-mark-color-primary.js";
function toKey(composition, orientation) {
  return composition === "lockup" ? `lockup:${orientation != null ? orientation : "horizontal"}` : composition;
}
function pickLogo(matrix, brand, variant, composition, orientation) {
  var _a;
  const key = toKey(composition, orientation);
  const byComp = (_a = matrix[brand]) == null ? void 0 : _a[key];
  let Icon = byComp == null ? void 0 : byComp[variant];
  if (!Icon && variant !== "color-primary") {
    Icon = byComp == null ? void 0 : byComp["color-primary"];
  }
  return Icon;
}
const LOGOS = {
  grammarly: {
    mark: {
      "color-primary": LogoGrammarlyMarkColorPrimary,
      "mono-inverse": LogoGrammarlyMarkMonoInverse,
      "mono-light": LogoGrammarlyMarkMonoLight
    },
    "lockup:horizontal": {
      "color-primary": LogoGrammarlyHorizontalColorPrimary,
      "mono-inverse": LogoGrammarlyHorizontalMonoInverse,
      "mono-light": LogoGrammarlyHorizontalMonoLight
    },
    "lockup:stacked": {
      "color-primary": LogoGrammarlyStackedColorPrimary,
      "mono-inverse": LogoGrammarlyStackedMonoInverse,
      "mono-light": LogoGrammarlyStackedMonoLight
    }
  },
  coda: {
    mark: {
      "color-primary": LogoCodaMarkColorPrimary,
      "color-secondary": LogoCodaMarkColorSecondary,
      "mono-inverse": LogoCodaMarkMonoInverse,
      "mono-light": LogoCodaMarkMonoLight
    },
    type: {
      "color-primary": LogoCodaTypeColorPrimary,
      "color-secondary": LogoCodaTypeColorSecondary,
      "mono-inverse": LogoCodaTypeMonoInverse,
      "mono-light": LogoCodaTypeMonoLight
    }
  },
  superhuman: {
    // Superhuman allows composition: "mark" | "lockup" (not "type" for some variants).
    mark: {
      "color-primary": LogoSuperhumanMarkColorPrimary,
      "color-secondary": LogoSuperhumanMarkColorSecondary,
      "mono-light": LogoSuperhumanMarkMonoLight
    },
    "lockup:horizontal": {
      "color-primary": LogoSuperhumanHorizontalColorPrimary,
      "color-secondary": LogoSuperhumanHorizontalColorSecondary,
      "mono-light": LogoSuperhumanHorizontalMonoLight
    },
    "lockup:stacked": {
      "color-primary": LogoSuperhumanStackedColorPrimary,
      "color-secondary": LogoSuperhumanStackedColorSecondary,
      "mono-light": LogoSuperhumanStackedMonoLight
    },
    // limited "type" support present in your imports
    type: {
      "color-secondary": LogoSuperhumanTypeColorSecondary,
      "mono-light": LogoSuperhumanTypeMonoLight
    }
  },
  mail: {
    mark: {
      "color-primary": LogoMailMarkColorPrimary,
      "mono-inverse": LogoMailMarkMonoInverse,
      "mono-light": LogoMailMarkMonoLight
    }
  },
  go: {
    mark: {
      "color-secondary": LogoGoMarkColorSecondary
    },
    "lockup:horizontal": {
      "color-secondary": LogoGoHorizontalColorSecondary
    },
    "lockup:stacked": {
      "color-secondary": LogoGoStackedColorSecondary
    },
    type: {
      "color-secondary": LogoGoTypeColorSecondary
    }
  }
};
const Logo = /* @__PURE__ */ React__default.forwardRef(
  function Logo2(props, ref) {
    const {
      brand = "superhuman",
      variant = brand === "go" ? "color-secondary" : "color-primary",
      composition = "mark",
      width,
      height,
      orientation = composition === "lockup" ? "horizontal" : void 0,
      accessibilityLabel,
      ...rest
    } = props;
    const Icon = pickLogo(LOGOS, brand, variant, composition, orientation);
    return /* @__PURE__ */ React__default.createElement("div", { ref, ...rest }, Icon ? (
      // Skip the `Icon` component here because it enforces a square frame,
      // which prevents logos from maintaining their natural proportions.
      /* @__PURE__ */ React__default.createElement(
        Icon,
        {
          style: {
            width: width ? `${width}px` : height ? `auto` : void 0,
            height: height ? `${height}px` : width ? `auto` : void 0
          },
          "aria-label": accessibilityLabel,
          "aria-hidden": "false"
        }
      )
    ) : null);
  }
);
export {
  Logo
};
