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
const GGOActionGenerateIdeasCategory = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionGenerateIdeasCategory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ategorya)` }, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ategoryb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFF4E0", d: "M12.004 24.008c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12s-12 5.372-12 12c0 6.627 5.373 12 12 12" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-ategoryc)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFCD62", d: "M8.507 18.089c-.06-.985-.414-1.945-1.079-2.674-1.481-1.623-2.424-3.882-2.424-5.994a7 7 0 0 1 14 0c0 2.112-.943 4.371-2.424 5.994-.665.729-1.019 1.69-1.08 2.674z" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D67400", fillRule: "evenodd", d: "M8.838 10.74h6.332l-1.59 7.898-1.47-.296 1.228-6.102H10.67l1.228 6.102-1.47.296z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#27282E", d: "m8.622 19.008.203 2h6.354l.205-2z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#CDD1DC", d: "M7.754 17.508h8.5v1.5h-8.5z" }))), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ategorya` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.004.008h24v24h-24z" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ategoryb` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.004.008h24v24h-24z" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-ategoryc`, width: 14, height: 15.668, x: 5.004, y: 2.421, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.829167 0 0 0 0 0.4975 0 0 0 0 0 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3704" }))));
});
exports.GGOActionGenerateIdeasCategory = GGOActionGenerateIdeasCategory;
