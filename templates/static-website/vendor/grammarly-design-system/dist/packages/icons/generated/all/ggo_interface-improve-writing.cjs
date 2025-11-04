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
const GGOInterfaceImproveWriting = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 22, height: 22, fill: "none", viewBox: "0 0 22 22", "aria-hidden": "true", "data-icon": "GGOInterfaceImproveWriting", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#018374", fillRule: "evenodd", d: "M12.866 4.5a1 1 0 0 0-1.366.366l-1.253 2.17 4.33 2.5 1.253-2.17A1 1 0 0 0 15.464 6zm.96 6.338-4.33-2.5-3.248 5.625a2 2 0 0 0-.268.966l-.065 3.735a.5.5 0 0 0 .758.438l3.202-1.924a2 2 0 0 0 .703-.715z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("mask", { id: `${resourcePrefix}-itinga`, width: 11, height: 16, x: 5, y: 4, maskUnits: "userSpaceOnUse", style: {
    maskType: "alpha"
  } }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#018374", d: "M12.867 4.5a1 1 0 0 0-1.366.366l-1.253 2.17 4.33 2.5 1.253-2.17A1 1 0 0 0 15.465 6zM13.826 10.838l-4.33-2.5-3.248 5.626a2 2 0 0 0-.267.965l-.065 3.736a.5.5 0 0 0 .757.437l3.203-1.924c.291-.174.533-.42.702-.714z" })), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-itingb)`, mask: `url(#${resourcePrefix}-itinga)`, opacity: 0.9 }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00FFCE", d: "m12.944 2.366 4.33 2.5-6.598 11.427L4.5 22l1.846-8.207z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#018374", d: "m13.127 3.049 3.464 2-6.31 10.929-4.94 4.565 1.476-6.566z" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#018374", d: "M8.692 4.881A2.4 2.4 0 0 0 6.908 6.65l-.012.046c-.098.407-.68.406-.778-.001L6.11 6.66a2.4 2.4 0 0 0-1.78-1.772l-.023-.006c-.41-.097-.41-.678 0-.776l.024-.005A2.4 2.4 0 0 0 6.11 2.329l.005-.023c.098-.408.681-.408.78 0l.005.023a2.4 2.4 0 0 0 1.78 1.773l.013.003c.41.098.41.68-.001.776M17.692 17.881a2.4 2.4 0 0 0-1.784 1.768l-.011.046c-.1.407-.681.407-.78-.001l-.007-.033a2.4 2.4 0 0 0-1.78-1.772l-.023-.006c-.41-.097-.41-.678 0-.776l.024-.005a2.4 2.4 0 0 0 1.779-1.773l.005-.023c.098-.408.681-.408.78 0l.005.023a2.4 2.4 0 0 0 1.78 1.773l.013.003c.41.098.41.68-.001.776" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-itingb`, width: 24.774, height: 31.634, x: -1.5, y: -3.634, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { result: "effect1_foregroundBlur_5231_3885", stdDeviation: 3 }))));
});
exports.GGOInterfaceImproveWriting = GGOInterfaceImproveWriting;
