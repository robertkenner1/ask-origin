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
const InterfaceFileHtml = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFileHtml", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M5.18 2.499h6.307l.148.16 3.133 3.383.133.144v2.899h-1V7.188h-3.557v-3.69H6.18v5.587h-1V2.499m6.164 1.317v2.372h2.196zM2.08 9.876h16.107v7.75H2.08v-7.75m1 1v5.75h14.107v-5.75zm11.127 4.447v-3.2h.677v2.642h1.372v.558zm-3.06-3.2h-.834v3.2h.656v-2.09h.027l.828 2.074h.447l.828-2.067h.027v2.083h.656v-3.2h-.835l-.88 2.15h-.038zm-3.763.558v-.558h2.628v.558h-.98v2.642h-.669v-2.642zm-3.029-.558v3.2h.677v-1.322h1.373v1.322h.675v-3.2h-.675v1.32H5.032v-1.32z", clipRule: "evenodd" }));
});
exports.InterfaceFileHtml = InterfaceFileHtml;
