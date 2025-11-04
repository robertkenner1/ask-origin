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
const OutcomeDelivery = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "OutcomeDelivery", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#E8C7FF", fillRule: "evenodd", d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-iverya)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D29CFA", fillRule: "evenodd", d: "M12 18a4.494 4.494 0 0 0 4.488-4.5c0-2.485-2.01-4.5-4.488-4.5a4.494 4.494 0 0 0-4.487 4.5c0 2.485 2.009 4.5 4.487 4.5", clipRule: "evenodd" })), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-iveryb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#BC78ED", fillRule: "evenodd", d: "M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6", clipRule: "evenodd" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-iverya`, width: 18.975, height: 19, x: 2.513, y: 4, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.934441 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5231_1816" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5231_1816", result: "shape" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-iveryb`, width: 16, height: 16, x: 4, y: 7, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5231_1816" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5231_1816", result: "shape" }))));
});
exports.OutcomeDelivery = OutcomeDelivery;
