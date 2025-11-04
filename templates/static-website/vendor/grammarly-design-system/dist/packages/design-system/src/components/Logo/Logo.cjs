"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const logo_goTypeColorSecondary = require("../../../../icons/generated/all/logo_go-type-color-secondary.cjs");
const logo_goStackedColorSecondary = require("../../../../icons/generated/all/logo_go-stacked-color-secondary.cjs");
const logo_goHorizontalColorSecondary = require("../../../../icons/generated/all/logo_go-horizontal-color-secondary.cjs");
const logo_goMarkColorSecondary = require("../../../../icons/generated/all/logo_go-mark-color-secondary.cjs");
const logo_mailMarkMonoLight = require("../../../../icons/generated/all/logo_mail-mark-mono-light.cjs");
const logo_mailMarkMonoInverse = require("../../../../icons/generated/all/logo_mail-mark-mono-inverse.cjs");
const logo_mailMarkColorPrimary = require("../../../../icons/generated/all/logo_mail-mark-color-primary.cjs");
const logo_superhumanTypeMonoLight = require("../../../../icons/generated/all/logo_superhuman-type-mono-light.cjs");
const logo_superhumanTypeColorSecondary = require("../../../../icons/generated/all/logo_superhuman-type-color-secondary.cjs");
const logo_superhumanStackedMonoLight = require("../../../../icons/generated/all/logo_superhuman-stacked-mono-light.cjs");
const logo_superhumanStackedColorSecondary = require("../../../../icons/generated/all/logo_superhuman-stacked-color-secondary.cjs");
const logo_superhumanStackedColorPrimary = require("../../../../icons/generated/all/logo_superhuman-stacked-color-primary.cjs");
const logo_superhumanHorizontalMonoLight = require("../../../../icons/generated/all/logo_superhuman-horizontal-mono-light.cjs");
const logo_superhumanHorizontalColorSecondary = require("../../../../icons/generated/all/logo_superhuman-horizontal-color-secondary.cjs");
const logo_superhumanHorizontalColorPrimary = require("../../../../icons/generated/all/logo_superhuman-horizontal-color-primary.cjs");
const logo_superhumanMarkMonoLight = require("../../../../icons/generated/all/logo_superhuman-mark-mono-light.cjs");
const logo_superhumanMarkColorSecondary = require("../../../../icons/generated/all/logo_superhuman-mark-color-secondary.cjs");
const logo_superhumanMarkColorPrimary = require("../../../../icons/generated/all/logo_superhuman-mark-color-primary.cjs");
const logo_codaTypeMonoLight = require("../../../../icons/generated/all/logo_coda-type-mono-light.cjs");
const logo_codaTypeMonoInverse = require("../../../../icons/generated/all/logo_coda-type-mono-inverse.cjs");
const logo_codaTypeColorSecondary = require("../../../../icons/generated/all/logo_coda-type-color-secondary.cjs");
const logo_codaTypeColorPrimary = require("../../../../icons/generated/all/logo_coda-type-color-primary.cjs");
const logo_codaMarkMonoLight = require("../../../../icons/generated/all/logo_coda-mark-mono-light.cjs");
const logo_codaMarkMonoInverse = require("../../../../icons/generated/all/logo_coda-mark-mono-inverse.cjs");
const logo_codaMarkColorSecondary = require("../../../../icons/generated/all/logo_coda-mark-color-secondary.cjs");
const logo_codaMarkColorPrimary = require("../../../../icons/generated/all/logo_coda-mark-color-primary.cjs");
const logo_grammarlyStackedMonoLight = require("../../../../icons/generated/all/logo_grammarly-stacked-mono-light.cjs");
const logo_grammarlyStackedMonoInverse = require("../../../../icons/generated/all/logo_grammarly-stacked-mono-inverse.cjs");
const logo_grammarlyStackedColorPrimary = require("../../../../icons/generated/all/logo_grammarly-stacked-color-primary.cjs");
const logo_grammarlyHorizontalMonoLight = require("../../../../icons/generated/all/logo_grammarly-horizontal-mono-light.cjs");
const logo_grammarlyHorizontalMonoInverse = require("../../../../icons/generated/all/logo_grammarly-horizontal-mono-inverse.cjs");
const logo_grammarlyHorizontalColorPrimary = require("../../../../icons/generated/all/logo_grammarly-horizontal-color-primary.cjs");
const logo_grammarlyMarkMonoLight = require("../../../../icons/generated/all/logo_grammarly-mark-mono-light.cjs");
const logo_grammarlyMarkMonoInverse = require("../../../../icons/generated/all/logo_grammarly-mark-mono-inverse.cjs");
const logo_grammarlyMarkColorPrimary = require("../../../../icons/generated/all/logo_grammarly-mark-color-primary.cjs");
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
      "color-primary": logo_grammarlyMarkColorPrimary.LogoGrammarlyMarkColorPrimary,
      "mono-inverse": logo_grammarlyMarkMonoInverse.LogoGrammarlyMarkMonoInverse,
      "mono-light": logo_grammarlyMarkMonoLight.LogoGrammarlyMarkMonoLight
    },
    "lockup:horizontal": {
      "color-primary": logo_grammarlyHorizontalColorPrimary.LogoGrammarlyHorizontalColorPrimary,
      "mono-inverse": logo_grammarlyHorizontalMonoInverse.LogoGrammarlyHorizontalMonoInverse,
      "mono-light": logo_grammarlyHorizontalMonoLight.LogoGrammarlyHorizontalMonoLight
    },
    "lockup:stacked": {
      "color-primary": logo_grammarlyStackedColorPrimary.LogoGrammarlyStackedColorPrimary,
      "mono-inverse": logo_grammarlyStackedMonoInverse.LogoGrammarlyStackedMonoInverse,
      "mono-light": logo_grammarlyStackedMonoLight.LogoGrammarlyStackedMonoLight
    }
  },
  coda: {
    mark: {
      "color-primary": logo_codaMarkColorPrimary.LogoCodaMarkColorPrimary,
      "color-secondary": logo_codaMarkColorSecondary.LogoCodaMarkColorSecondary,
      "mono-inverse": logo_codaMarkMonoInverse.LogoCodaMarkMonoInverse,
      "mono-light": logo_codaMarkMonoLight.LogoCodaMarkMonoLight
    },
    type: {
      "color-primary": logo_codaTypeColorPrimary.LogoCodaTypeColorPrimary,
      "color-secondary": logo_codaTypeColorSecondary.LogoCodaTypeColorSecondary,
      "mono-inverse": logo_codaTypeMonoInverse.LogoCodaTypeMonoInverse,
      "mono-light": logo_codaTypeMonoLight.LogoCodaTypeMonoLight
    }
  },
  superhuman: {
    // Superhuman allows composition: "mark" | "lockup" (not "type" for some variants).
    mark: {
      "color-primary": logo_superhumanMarkColorPrimary.LogoSuperhumanMarkColorPrimary,
      "color-secondary": logo_superhumanMarkColorSecondary.LogoSuperhumanMarkColorSecondary,
      "mono-light": logo_superhumanMarkMonoLight.LogoSuperhumanMarkMonoLight
    },
    "lockup:horizontal": {
      "color-primary": logo_superhumanHorizontalColorPrimary.LogoSuperhumanHorizontalColorPrimary,
      "color-secondary": logo_superhumanHorizontalColorSecondary.LogoSuperhumanHorizontalColorSecondary,
      "mono-light": logo_superhumanHorizontalMonoLight.LogoSuperhumanHorizontalMonoLight
    },
    "lockup:stacked": {
      "color-primary": logo_superhumanStackedColorPrimary.LogoSuperhumanStackedColorPrimary,
      "color-secondary": logo_superhumanStackedColorSecondary.LogoSuperhumanStackedColorSecondary,
      "mono-light": logo_superhumanStackedMonoLight.LogoSuperhumanStackedMonoLight
    },
    // limited "type" support present in your imports
    type: {
      "color-secondary": logo_superhumanTypeColorSecondary.LogoSuperhumanTypeColorSecondary,
      "mono-light": logo_superhumanTypeMonoLight.LogoSuperhumanTypeMonoLight
    }
  },
  mail: {
    mark: {
      "color-primary": logo_mailMarkColorPrimary.LogoMailMarkColorPrimary,
      "mono-inverse": logo_mailMarkMonoInverse.LogoMailMarkMonoInverse,
      "mono-light": logo_mailMarkMonoLight.LogoMailMarkMonoLight
    }
  },
  go: {
    mark: {
      "color-secondary": logo_goMarkColorSecondary.LogoGoMarkColorSecondary
    },
    "lockup:horizontal": {
      "color-secondary": logo_goHorizontalColorSecondary.LogoGoHorizontalColorSecondary
    },
    "lockup:stacked": {
      "color-secondary": logo_goStackedColorSecondary.LogoGoStackedColorSecondary
    },
    type: {
      "color-secondary": logo_goTypeColorSecondary.LogoGoTypeColorSecondary
    }
  }
};
const Logo = /* @__PURE__ */ React.forwardRef(
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
    return /* @__PURE__ */ React.createElement("div", { ref, ...rest }, Icon ? (
      // Skip the `Icon` component here because it enforces a square frame,
      // which prevents logos from maintaining their natural proportions.
      /* @__PURE__ */ React.createElement(
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
exports.Logo = Logo;
