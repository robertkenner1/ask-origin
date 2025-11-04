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
const ConsentTransparent = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentTransparent", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", stroke: "#1C1C1C", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, strokeWidth: 0.7, d: "M4.796 2.166h8.118c1.167 0 2.138.993 2.138 2.252v11.164c0 1.26-.971 2.252-2.138 2.252H4.796c-1.167 0-2.138-.992-2.138-2.252V4.418c0-1.26.97-2.252 2.138-2.252" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#1C1C1C", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, strokeWidth: 0.7, d: "M5.081 4.936h5.47M5.081 11.176h7.55M5.081 8.056h7.55" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#B3F8F8", stroke: "#1C1C1C", strokeLinejoin: "round", strokeMiterlimit: 10, strokeWidth: 0.7, d: "M11.81 15.9c2.407 0 4.358-1.969 4.358-4.399s-1.951-4.4-4.358-4.4c-2.408 0-4.359 1.97-4.359 4.4s1.952 4.4 4.359 4.4Z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#1C1C1C", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, strokeWidth: 0.7, d: "M7.854 12.56h1.173M10.628 12.56H13.4M7.854 9.834h2.04M11.668 9.834H13.4" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1C1C1C", d: "M17.445 17.587a.35.35 0 1 0 .495-.495zm-2.697-2.697 2.697 2.697.495-.495-2.697-2.696z" }));
});
exports.ConsentTransparent = ConsentTransparent;
