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
const ConsentTailoredAssistanceOff = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentTailoredAssistanceOff", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#707070", strokeMiterlimit: 10, strokeWidth: 0.7, d: "m6 12 3.6-4.4M13.6 12l-1.2-4M11.6 14.4 6.8 14" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#707070", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, strokeWidth: 0.7, d: "M11.481 8.321a3.137 3.137 0 0 0 3.16-3.16A3.137 3.137 0 0 0 11.482 2a3.137 3.137 0 0 0-3.16 3.16 3.137 3.137 0 0 0 3.16 3.161M14.84 18A3.137 3.137 0 0 0 18 14.84a3.137 3.137 0 0 0-3.16-3.161 3.137 3.137 0 0 0-3.16 3.16A3.137 3.137 0 0 0 14.84 18M4.37 16.222a2.353 2.353 0 0 0 2.37-2.37 2.353 2.353 0 0 0-2.37-2.37A2.353 2.353 0 0 0 2 13.851a2.353 2.353 0 0 0 2.37 2.37" }));
});
exports.ConsentTailoredAssistanceOff = ConsentTailoredAssistanceOff;
