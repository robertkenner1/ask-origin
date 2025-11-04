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
const InterfaceUnorderedList = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceUnorderedList", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "M6.696 3H14M6.696 13H14M6.696 8H14m-11.478.5a.51.51 0 0 0 .521-.5c0-.276-.233-.5-.521-.5A.51.51 0 0 0 2 8c0 .276.234.5.522.5Zm0 5a.51.51 0 0 0 .521-.5c0-.276-.233-.5-.521-.5A.51.51 0 0 0 2 13c0 .276.234.5.522.5Zm0-10a.51.51 0 0 0 .521-.5c0-.276-.233-.5-.521-.5A.51.51 0 0 0 2 3c0 .276.234.5.522.5Z" }));
});
exports.InterfaceUnorderedList = InterfaceUnorderedList;
