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
const GGOActionBrainstorm = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 24, fill: "none", viewBox: "0 0 25 24", "aria-hidden": "true", "data-icon": "GGOActionBrainstorm", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-storma)` }, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-stormb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#E2E4E9", d: "M24.02 10c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-7.836-3.786 5.854 5.854 0 1 1-.529-11.696A9.99 9.99 0 0 1 14.02 0c5.523 0 10 4.477 10 10" }), /* @__PURE__ */ React__namespace.createElement("g", { fill: "#fff", filter: `url(#${resourcePrefix}-stormc)` }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M24.02 10c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-7.836-3.786 5.854 5.854 0 1 1-.529-11.696A9.99 9.99 0 0 1 14.02 0c5.523 0 10 4.477 10 10" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M24.02 10c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-7.836-3.786 5.854 5.854 0 1 1-.529-11.696A9.99 9.99 0 0 1 14.02 0c5.523 0 10 4.477 10 10" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#CDD1DC", d: "M4.058 24a2.863 2.863 0 1 0 0-5.725 2.863 2.863 0 0 0 0 5.725" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-stormd)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFA600", fillRule: "evenodd", d: "M12.773 11.241H9.02l6.76-9V8.22h3.75l-6.757 9z", clipRule: "evenodd" })))), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-storma` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.02 0h24v24h-24z" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-stormb` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.02 0h24v24h-24z" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-stormc`, width: 24, height: 20, x: 0.02, y: 0, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 4 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.678431 0 0 0 0 0.698039 0 0 0 0 0.764706 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3656" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-stormd`, width: 10.51, height: 14.977, x: 9.02, y: 2.241, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.5 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.883333 0 0 0 0 0.509804 0 0 0 0 0 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3656" }))));
});
exports.GGOActionBrainstorm = GGOActionBrainstorm;
