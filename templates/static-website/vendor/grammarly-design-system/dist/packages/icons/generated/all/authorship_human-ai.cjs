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
const AuthorshipHumanAi = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AuthorshipHumanAi", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EAFAF9", fillRule: "evenodd", d: "M6.468 16.875h7.056c2.448 0 3.976-1.37 3.976-3.886V7.082c0-2.556-1.528-3.957-3.976-3.957H6.475C4.02 3.125 2.5 4.502 2.5 7.019v5.97c-.008 2.516 1.513 3.886 3.968 3.886", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#027E6F", strokeLinecap: "round", strokeLinejoin: "round", d: "M17.5 9.89v3.1c0 2.515-1.528 3.885-3.976 3.885H6.468c-2.455 0-3.976-1.37-3.968-3.886V7.02c0-2.517 1.52-3.894 3.975-3.894h3.521m2.231 10.327H7.773M11.38 7.18v-.018M8.61 7.18v-.018m-2.767.018v-.018m4.152 2.842v-.018m-2.77.018v-.018m5.54.018v-.018M11.38 7.067a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.769 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.767 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m4.152 2.824a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.77 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m5.54 0a.094.094 0 1 0-.001.188.094.094 0 0 0 0-.188" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EAFAF9", stroke: "#027E6F", strokeLinecap: "round", strokeLinejoin: "round", d: "m15.5 1-1.119 2.381L12 4.5l2.381 1.119L15.5 8l1.119-2.381L19 4.5l-2.381-1.119z" }));
});
exports.AuthorshipHumanAi = AuthorshipHumanAi;
