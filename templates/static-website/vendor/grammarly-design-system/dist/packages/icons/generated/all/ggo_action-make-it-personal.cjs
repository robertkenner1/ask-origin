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
const GGOActionMakeItPersonal = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionMakeItPersonal", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-rsonala)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#B8C8FB", d: "M2.032 1.008h20v20h-20z" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#8CA6F6", d: "M19.032 6.008h-14v-1h14zM19.032 10.508h-14v-1h14zM5.032 15.008h14v-1h-14z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#018374", d: "m15.047 7.24-1.3-.75-5.118 8.865c.298-1.805-.702-3.521-2.805-4.368-2.051 2.439-1.371 5.372 1.5 6.629l-2.327 4.029 1.3.75z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M14.515 3.16a1.75 1.75 0 1 1 3.032 1.75l-.61 1.055h1.219a1.75 1.75 0 1 1 0 3.5h-1.22l.61 1.056a1.75 1.75 0 1 1-3.03 1.75l-.61-1.056-.61 1.056a1.75 1.75 0 0 1-3.03-1.75l.609-1.056h-1.22a1.75 1.75 0 0 1 0-3.5h1.22l-.61-1.056a1.75 1.75 0 1 1 3.031-1.75l.61 1.056z" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-rsonalb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFC444", d: "M16.071 8.965a2.5 2.5 0 1 1-4.33-2.5 2.5 2.5 0 0 1 4.33 2.5" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-rsonala`, width: 20, height: 20, x: 2.032, y: 1.008, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.5 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.54902 0 0 0 0 0.65098 0 0 0 0 0.964706 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3746" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-rsonalb`, width: 5.001, height: 5.001, x: 11.406, y: 5.215, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.966667 0 0 0 0 0.464 0 0 0 0 0 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3746" }))));
});
exports.GGOActionMakeItPersonal = GGOActionMakeItPersonal;
