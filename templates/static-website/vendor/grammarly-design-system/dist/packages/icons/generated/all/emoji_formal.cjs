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
const EmojiFormal = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiFormal", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-formala)`, d: "M19.172 21H4.827c-1.236 0-1.236-15.3 0-15.3h14.345c1.237 0 1.237 15.3 0 15.3" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F0F2FC", d: "M6.67 21h-.576a100 100 0 0 1 0-15.3h.575c-.359 5.093-.359 10.208 0 15.3M10.274 21h-.576a299 299 0 0 1-.033-13.898h.584c-.073 4.628-.065 9.273.024 13.898M14.302 21h-.575c.089-4.625.097-9.27.024-13.898h.584c.096 4.628.086 9.273-.033 13.898M17.906 21h-.575c.359-5.092.359-10.207 0-15.3h.575a100 100 0 0 1 0 15.3" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#C6CBDE", d: "M12 7.106c-4.343 0-3.797-3.66-3.797-3.66.652-.601 7.07-.588 7.594 0 0 0 .546 3.66-3.797 3.66" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#6D758D", d: "M15.565 6.296c0 1.83-7.13 1.83-7.13 0-.001-1.22 7.13-1.22 7.13 0" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#6D758D", d: "M8.163 5.7H6.24s1.142 3.574 1.71 6.75L12 7.95V7.5s-3.837.262-3.837-1.8M15.837 5.7h1.923s-1.142 3.309-1.71 6.75L12 7.95V7.5s3.836.262 3.836-1.8" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F9FAFF", d: "M8.203 3.9 6.937 5.703s.633 1.247 1.266 5.162L12 7.56S8.203 6.09 8.203 3.9M15.797 3.9l1.265 1.803s-.633 1.247-1.265 5.162L12 7.56s3.797-1.47 3.797-3.66" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#4D536E", d: "M12.675 9.975a.675.675 0 1 1-1.35 0 .675.675 0 0 1 1.35 0M12.675 14.475a.675.675 0 1 1-1.35 0 .675.675 0 0 1 1.35 0M12.675 18.975a.675.675 0 1 1-1.35 0 .675.675 0 0 1 1.35 0" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-formala`, x1: 12, x2: 12, y1: 21, y2: 5.7, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#9FA6BF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#C6CBDE" }))));
});
exports.EmojiFormal = EmojiFormal;
