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
const GGOActionIdentifyGaps = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionIdentifyGaps", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ygapsa)`, d: "M10.945 6.502q.049-.232.05-.478a2.306 2.306 0 0 0-4.237-1.261L1.14 12.458l8.36 3.6z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#10C097", d: "M4.767 20.3a4.758 4.758 0 1 0 0-9.513 4.758 4.758 0 1 0 0 9.513" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ygapsb)`, d: "M4.752 18.78a3.25 3.25 0 1 0-.001-6.502 3.25 3.25 0 0 0 .001 6.501" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ygapsc)`, d: "M13.07 6.502a2.306 2.306 0 0 1 4.187-1.74l5.617 7.696-8.36 3.6z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#10C097", d: "M19.25 20.3a4.758 4.758 0 1 1 0-9.513 4.758 4.758 0 1 1 0 9.513" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ygapsd)`, d: "M19.263 18.78a3.25 3.25 0 1 1 .001-6.502 3.25 3.25 0 0 1-.001 6.501" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#018374", d: "M10.637 8.536h-.002l-.57 3.687h3.892l-.573-3.654a1.382 1.382 0 0 0-2.747-.033" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#10C097", d: "M12.01 14.424a1.944 1.944 0 1 0 0-3.889 1.944 1.944 0 0 0 0 3.889" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ygapsa`, x1: 9.694, x2: 4.786, y1: 3.215, y2: 11.719, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.198, stopColor: "#0A9A78" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#018374" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ygapsb`, x1: 4.752, x2: 4.752, y1: 12.276, y2: 18.556, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.218, stopColor: "#fff" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#B2F4FA" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ygapsc`, x1: 14.322, x2: 19.23, y1: 3.215, y2: 11.719, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.198, stopColor: "#0A9A78" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#018374" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ygapsd`, x1: 19.263, x2: 19.263, y1: 12.276, y2: 18.556, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.218, stopColor: "#fff" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#B2F4FA" }))));
});
exports.GGOActionIdentifyGaps = GGOActionIdentifyGaps;
