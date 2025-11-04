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
const InterfaceKnowledgeHub = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceKnowledgeHub", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-gehuba)` }, /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#646B81", strokeMiterlimit: 10, d: "m3.748 6.206-1.477.827a.517.517 0 0 0 0 .91l6.102 3.416c.335.188.748.188 1.083 0l4.273-2.392a.517.517 0 0 0 0-.91l-1.443-.808M3.748 8.706l-1.477.827a.517.517 0 0 0 0 .91l6.102 3.416c.335.188.748.188 1.083 0l4.273-2.392a.517.517 0 0 0 0-.91l-1.443-.808m1.443-3.282L9.456 8.859a1.11 1.11 0 0 1-1.083 0L2.271 5.443a.517.517 0 0 1 0-.91l4.273-2.392a1.11 1.11 0 0 1 1.083 0l6.102 3.416c.361.202.361.708 0 .91Z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-gehuba` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" }))));
});
exports.InterfaceKnowledgeHub = InterfaceKnowledgeHub;
