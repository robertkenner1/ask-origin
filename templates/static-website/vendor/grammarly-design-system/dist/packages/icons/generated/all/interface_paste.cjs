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
const InterfacePaste = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfacePaste", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#646B81", strokeLinecap: "round", strokeLinejoin: "round", d: "M10.118 4.62v-.727a.6.6 0 0 0-.6-.6H7.54m-2.965 0L2.61 3.26a.6.6 0 0 0-.61.6v7.975a.6.6 0 0 0 .6.6h2.835m3.736-3.449H12m-2.83 2.576H12M4.576 4.338V3.2a1.2 1.2 0 0 1 1.2-1.2h.565a1.2 1.2 0 0 1 1.2 1.2v1.137zM7.771 14H13.4a.6.6 0 0 0 .6-.6V7.1a.6.6 0 0 0-.6-.6H7.77a.6.6 0 0 0-.6.6v6.3a.6.6 0 0 0 .6.6" }));
});
exports.InterfacePaste = InterfacePaste;
