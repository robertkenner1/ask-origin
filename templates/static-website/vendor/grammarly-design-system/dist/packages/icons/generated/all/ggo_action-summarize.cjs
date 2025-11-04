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
const GGOActionSummarize = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionSummarize", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-arizea)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#ADB2C3", d: "M3.016 3.016h16v20h-16z" })), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-arizeb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F4F4F6", d: "M5.016 1.016h16v20h-16z" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#018374", d: "M9.016 7.016a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12.016 6.516h6v-1h-6zM10.016 11.016a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18.016 11.516h-6v-1h6zM10.016 16.016a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18.016 16.516h-6v-1h6z" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-arizea`, width: 16, height: 20, x: 3.016, y: 3.016, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.5 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.529412 0 0 0 0 0.552941 0 0 0 0 0.635294 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3794" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-arizeb`, width: 16, height: 20, x: 5.016, y: 1.016, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.5 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.803922 0 0 0 0 0.819608 0 0 0 0 0.862745 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3794" }))));
});
exports.GGOActionSummarize = GGOActionSummarize;
