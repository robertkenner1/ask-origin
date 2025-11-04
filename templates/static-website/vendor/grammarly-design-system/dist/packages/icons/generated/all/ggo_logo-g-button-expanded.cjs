"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const createIcon = require("../createIcon.cjs");
const helpers = require("../helpers.cjs");
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
const GGOLogoGButtonExpanded = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 55, height: 30, fill: "none", viewBox: "0 0 55 30", "aria-hidden": "true", "data-icon": "GGOLogoGButtonExpanded", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("rect", { width: 54, height: 29, x: 0.5, y: 0.5, fill: "#fff", rx: 14.5 }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-andeda)`, fillRule: "evenodd", d: "M18.86 20c.175-.783.664-1.472 1.253-2.037 1.32-1.268 2.137-3.023 2.137-4.963 0-3.866-3.246-7-7.25-7s-7.25 3.134-7.25 7c0 1.94.817 3.695 2.137 4.963.589.565 1.078 1.254 1.253 2.037zm-7.568 1.5h7.416l-.055.666A2 2 0 0 1 16.66 24h-3.32a2 2 0 0 1-1.993-1.834z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-andedb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M18.507 13.61a3.84 3.84 0 0 0-2.855 2.828l-.018.074c-.158.652-1.09.65-1.246-.002l-.012-.052a3.84 3.84 0 0 0-2.847-2.836l-.037-.009c-.656-.156-.656-1.085 0-1.242l.037-.008a3.84 3.84 0 0 0 2.847-2.836l.008-.037c.157-.653 1.09-.653 1.247 0l.009.037a3.84 3.84 0 0 0 2.846 2.836l.022.005c.657.156.656 1.087-.002 1.242" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#018374", fillRule: "evenodd", d: "M51 15c0 6.075-4.925 11-11 11s-11-4.925-11-11S33.925 4 40 4s11 4.925 11 11", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M41.437 17.376c.065.36.404.606.77.606h1.152l.668-.093c-1.069 1.568-2.925 2.29-4.954 1.971-1.652-.26-3.07-1.377-3.67-2.938-1.359-3.543 1.229-6.927 4.601-6.927 1.758 0 3.3 1.056 4.184 2.299.234.338.699.435 1.037.2a.737.737 0 0 0 .222-.98 6.45 6.45 0 0 0-5.889-2.963c-3.216.216-5.819 2.848-6.004 6.066-.215 3.745 2.756 6.802 6.45 6.802 1.941 0 3.678-.845 4.862-2.212l-.14.784v.709c0 .365.246.704.607.77a.746.746 0 0 0 .884-.734v-4.245H42.17a.746.746 0 0 0-.733.884", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("rect", { width: 54, height: 29, x: 0.5, y: 0.5, stroke: "#CDD1DC", rx: 14.5 }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-andeda`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(0 9 -10.0074 0 15 13)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.345, stopColor: "#03D2B0" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.893, stopColor: "#02927F" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-andedb`, width: 20, height: 20, x: 5, y: 3, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 3 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.00392157 0 0 0 0 0.513726 0 0 0 0 0.454902 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5231_3840" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5231_3840", result: "shape" }))));
});
exports.GGOLogoGButtonExpanded = GGOLogoGButtonExpanded;
