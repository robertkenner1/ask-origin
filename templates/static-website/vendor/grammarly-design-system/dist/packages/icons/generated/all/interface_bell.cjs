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
const InterfaceBell = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceBell", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#646B81", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 3.2a2.78 2.78 0 0 0-2.778 2.778v1.809c0 .531-.148 1.053-.427 1.505l-1.137 1.841a.7.7 0 0 0 .596 1.067h7.492a.7.7 0 0 0 .595-1.067l-1.136-1.84a2.87 2.87 0 0 1-.427-1.506v-1.81A2.78 2.78 0 0 0 8 3.2m0 0V2m-.833 10.6v.567c0 .46.373.833.833.833v0c.46 0 .833-.373.833-.833V12.6" }));
});
exports.InterfaceBell = InterfaceBell;
