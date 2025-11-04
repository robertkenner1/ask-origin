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
const GGOActionEvaluateCategory = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 24, fill: "none", viewBox: "0 0 25 24", "aria-hidden": "true", "data-icon": "GGOActionEvaluateCategory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-categorya)`, d: "M9.976 16.761a8.5 8.5 0 1 0-2.551-2.551l-3.817 3.163a2.277 2.277 0 1 0 3.206 3.205z" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-categoryb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M19.172 5.015a6.5 6.5 0 1 1-9.193 9.192 6.5 6.5 0 0 1 9.193-9.192" })), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#2551DA", strokeLinecap: "square", strokeMiterlimit: 10, strokeWidth: 1.5, d: "m17.79 7.317-4.733 4.732-1.768-1.768" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-categorya`, x1: 8.04, x2: 16.54, y1: 3, y2: 16.5, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#DABAF2" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#8943BC" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-categoryb`, width: 14.182, height: 15.364, x: 6.894, y: 0.747, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", { dx: -1.182, dy: -2.364 }), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2.364 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.721569 0 0 0 0 0.784314 0 0 0 0 0.984314 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3686" }))));
});
exports.GGOActionEvaluateCategory = GGOActionEvaluateCategory;
