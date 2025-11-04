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
const InterfaceTryGrammarlyBusiness = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "InterfaceTryGrammarlyBusiness", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M4.848 9.544c0-.216.175-.392.391-.392h.783c.216 0 .39.176.39.392v.782a.39.39 0 0 1-.39.392h-.783a.39.39 0 0 1-.391-.392zm3.521 0c0-.216.176-.392.392-.392h.782c.216 0 .392.176.392.392v.782a.39.39 0 0 1-.392.392h-.782a.39.39 0 0 1-.392-.392zm-3.521 3.13c0-.216.175-.391.391-.391h.783c.216 0 .39.175.39.391v.783a.39.39 0 0 1-.39.391h-.783a.39.39 0 0 1-.391-.391zm3.521 0c0-.216.176-.391.392-.391h.782c.216 0 .392.175.392.391v.783a.39.39 0 0 1-.392.391h-.782a.39.39 0 0 1-.392-.391z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#646B81", strokeLinejoin: "round", d: "M10.834 7.226H2.5v14.176h10.74v-9.021" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#646B81", strokeLinejoin: "round", d: "M6.152 17.106h3.437v4.296H6.152zM15.603 2.5l1.636 3.547 3.88.46L18.25 9.16l.762 3.831-3.41-1.908-3.408 1.908.761-3.831-2.868-2.653 3.88-.46z" }));
});
exports.InterfaceTryGrammarlyBusiness = InterfaceTryGrammarlyBusiness;
