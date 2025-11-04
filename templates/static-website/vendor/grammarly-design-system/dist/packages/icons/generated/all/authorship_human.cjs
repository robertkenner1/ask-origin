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
const AuthorshipHuman = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AuthorshipHuman", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EAFAF9", fillRule: "evenodd", d: "M6.468 16.875h7.056c2.448 0 3.976-1.37 3.976-3.886V7.082c0-2.556-1.528-3.957-3.976-3.957H6.475C4.02 3.125 2.5 4.502 2.5 7.019v5.97c-.008 2.516 1.513 3.886 3.968 3.886", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#027E6F", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.227 13.452H7.773M11.38 7.18v-.018M8.61 7.18v-.018m-2.767.018v-.018m8.306.018v-.018m-4.154 2.842v-.018m-2.77.018v-.018m5.54.018v-.018m-6.298 6.889h7.056c2.448 0 3.976-1.37 3.976-3.886V7.082c0-2.556-1.528-3.957-3.976-3.957H6.475C4.02 3.125 2.5 4.502 2.5 7.019v5.97c-.008 2.516 1.513 3.886 3.968 3.886m4.912-9.808a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.769 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.767 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m8.306 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188M9.996 9.891a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.77 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m5.54 0a.094.094 0 1 0-.001.188.094.094 0 0 0 0-.188" }));
});
exports.AuthorshipHuman = AuthorshipHuman;
