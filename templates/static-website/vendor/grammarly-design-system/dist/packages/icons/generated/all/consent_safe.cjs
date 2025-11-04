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
const ConsentSafe = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentSafe", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M10.156 1A3.964 3.964 0 0 0 6.19 4.965v1.884a3.965 3.965 0 1 0 7.93 0V4.965A3.965 3.965 0 0 0 10.155 1m.009 1.697a2.107 2.107 0 0 0-2.107 2.107V6.62a2.107 2.107 0 0 0 4.213 0V4.804a2.107 2.107 0 0 0-2.106-2.107", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1C1C1C", d: "M6.541 4.965a3.614 3.614 0 0 1 3.615-3.615v-.7A4.314 4.314 0 0 0 5.84 4.965zm0 1.884V4.965h-.7v1.884zm3.615 3.614A3.615 3.615 0 0 1 6.54 6.85h-.7a4.315 4.315 0 0 0 4.315 4.314zM13.77 6.85a3.615 3.615 0 0 1-3.614 3.614v.7A4.315 4.315 0 0 0 14.47 6.85zm0-1.884v1.884h.7V4.965zM10.156 1.35a3.615 3.615 0 0 1 3.614 3.615h.7A4.315 4.315 0 0 0 10.156.65zM8.408 4.804c0-.97.786-1.757 1.757-1.757v-.7a2.457 2.457 0 0 0-2.457 2.457zm0 1.817V4.804h-.7V6.62zm1.757 1.757c-.97 0-1.757-.786-1.757-1.757h-.7c0 1.357 1.1 2.457 2.457 2.457zm1.756-1.757c0 .97-.786 1.757-1.756 1.757v.7c1.356 0 2.456-1.1 2.456-2.457zm0-1.817V6.62h.7V4.804zm-1.756-1.757c.97 0 1.756.787 1.756 1.757h.7c0-1.357-1.1-2.457-2.456-2.457z" }), /* @__PURE__ */ React__namespace.createElement("rect", { width: 13.586, height: 11.687, x: 3.35, y: 6.257, fill: "#B3F8F8", stroke: "#1C1C1C", strokeLinecap: "round", strokeWidth: 0.7, rx: 2.416 }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M10.814 12.63c.503-.228.849-.704.849-1.255 0-.772-.68-1.398-1.52-1.398s-1.52.626-1.52 1.398c0 .55.346 1.027.849 1.255v1.523a.671.671 0 0 0 1.342 0z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1C1C1C", d: "m10.814 12.63-.145-.319-.205.094v.225zm-1.342 0h.35v-.225l-.205-.093zm1.84-1.255c0 .397-.249.758-.643.937l.29.637c.611-.277 1.054-.869 1.054-1.574zm-1.169-1.048c.674 0 1.17.496 1.17 1.048h.7c0-.992-.865-1.748-1.87-1.748zm-1.17 1.048c0-.552.496-1.048 1.17-1.048v-.7c-1.004 0-1.87.756-1.87 1.748zm.644.937c-.394-.18-.643-.54-.643-.937h-.7c0 .705.442 1.297 1.053 1.574zm.205 1.842V12.63h-.7v1.523zm.321.32a.32.32 0 0 1-.321-.32h-.7c0 .563.457 1.02 1.021 1.02zm.321-.32a.32.32 0 0 1-.321.32v.7c.564 0 1.021-.457 1.021-1.02zm0-1.524v1.523h.7V12.63z" }));
});
exports.ConsentSafe = ConsentSafe;
