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
const AgentsAudienceReactions = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsAudienceReactions", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, "Vector graphic: audience reactions") : desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M16.084 8.585a.82.82 0 0 1-.815-.816V4.548H4.756v3.221a.82.82 0 0 1-.816.816.82.82 0 0 1-.815-.816V4.548c0-.897.734-1.631 1.631-1.631H15.27c.897 0 1.631.734 1.631 1.63V7.77a.82.82 0 0 1-.816.816" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M10.01 11.652a1.802 1.802 0 1 0 0-3.605 1.802 1.802 0 0 0 0 3.605M14.413 12.557a1.802 1.802 0 1 0 0-3.605 1.802 1.802 0 0 0 0 3.605M5.613 12.557a1.802 1.802 0 1 0 0-3.605 1.802 1.802 0 0 0 0 3.605M9.707 12.46h.604c1.19 0 2.16.97 2.16 2.16v2.464H7.547V14.62c0-1.191.97-2.162 2.161-2.162" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M5.31 13.364h.604c1.191 0 2.162.97 2.162 2.161v1.55h-4.11a.82.82 0 0 1-.817-.816v-.734c0-1.19.971-2.161 2.162-2.161M14.111 13.364h.604c1.19 0 2.161.97 2.161 2.161v.734a.82.82 0 0 1-.816.816h-4.11v-1.55c0-1.19.97-2.161 2.161-2.161" }));
});
exports.AgentsAudienceReactions = AgentsAudienceReactions;
