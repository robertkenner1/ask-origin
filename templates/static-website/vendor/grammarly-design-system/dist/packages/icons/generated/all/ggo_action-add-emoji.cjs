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
const GGOActionAddEmoji = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOActionAddEmoji", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-emojia)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFC444", d: "M9.5 23.158a8.657 8.657 0 1 0 0-17.315 8.657 8.657 0 0 0 0 17.315" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M6.557 15.108a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M12.441 15.108a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M14.018 17.436a.6.6 0 0 0 .069-.217.36.36 0 0 0-.05-.24.27.27 0 0 0-.269-.114.7.7 0 0 0-.285.126c-2.427 1.684-5.542 1.683-7.968 0a.7.7 0 0 0-.284-.125.27.27 0 0 0-.27.114.36.36 0 0 0-.048.24.6.6 0 0 0 .069.216c1.902 3.637 7.134 3.636 9.036 0" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-emojib)` }, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 17, cy: 7, r: 6, fill: "#0A9A78" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M17.75 3.5h-1.5v2.75H13.5v1.5h2.75v2.75h1.5V7.75h2.75v-1.5h-2.75z" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-emojia`, width: 17.315, height: 17.315, x: 0.842, y: 5.843, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2.125 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.933333 0 0 0 0 0.504 0 0 0 0 0 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3626" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-emojib`, width: 12, height: 12, x: 11, y: 1, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.5 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.0196078 0 0 0 0 0.45098 0 0 0 0 0.352941 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3626" }))));
});
exports.GGOActionAddEmoji = GGOActionAddEmoji;
