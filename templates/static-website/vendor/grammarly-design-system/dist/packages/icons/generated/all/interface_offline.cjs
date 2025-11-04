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
const InterfaceOffline = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceOffline", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#CD0800", fillRule: "evenodd", d: "M3.311 2.928a.583.583 0 0 0-.848-.025.643.643 0 0 0-.024.884l1.904 2.098A9.3 9.3 0 0 0 2.354 7.89a1.69 1.69 0 0 0 .121 2.121l6.015 6.627c.3.331.707.515 1.147.515.432 0 .85-.188 1.149-.515l1.656-1.825 2.051 2.26a.586.586 0 0 0 .848.025.643.643 0 0 0 .024-.884zM16.92 7.877c-1.748-2.388-4.403-3.758-7.284-3.758-.287 0-.576.015-.856.046a.4.4 0 0 0-.333.27.43.43 0 0 0 .084.43l6.174 6.804c.076.084.181.131.29.131.11 0 .216-.047.291-.13l1.516-1.665a1.69 1.69 0 0 0 .118-2.128", clipRule: "evenodd" }));
});
exports.InterfaceOffline = InterfaceOffline;
