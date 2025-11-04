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
const ConsentStoreData = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentStoreData", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", stroke: "#1C1C1C", strokeLinecap: "round", strokeWidth: 0.7, d: "M4.4 4.437h1.418c.585 0 1.117.339 1.365.869a2.21 2.21 0 0 0 1.999 1.271H15.6a2.05 2.05 0 0 1 2.05 2.05v6.974a2.05 2.05 0 0 1-2.05 2.05H4.399a2.05 2.05 0 0 1-2.05-2.05V6.486a2.05 2.05 0 0 1 2.05-2.05Z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#B3F8F8", stroke: "#1C1C1C", strokeLinecap: "round", strokeWidth: 0.7, d: "M13.702 8.684c.37.387.37.997-.001 1.383l-2.765 2.884a.993.993 0 0 1-1.433 0l-2.766-2.886A1 1 0 1 1 8.18 8.683l1.032 1.075v-7.1a1.008 1.008 0 1 1 2.016 0v7.098l1.028-1.073a1 1 0 0 1 1.446 0Z" }));
});
exports.ConsentStoreData = ConsentStoreData;
