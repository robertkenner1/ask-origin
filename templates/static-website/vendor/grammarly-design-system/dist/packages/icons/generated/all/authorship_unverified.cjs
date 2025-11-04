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
const AuthorshipUnverified = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AuthorshipUnverified", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#DDD", d: "M16.708 9.515a7.014 7.014 0 1 0-14.029 0 7.015 7.015 0 1 0 14.03 0" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#707070", strokeLinecap: "round", strokeLinejoin: "round", d: "m14.468 14.653 2.854 2.847M9.66 12.661v.006m-.001-1.838c-.01-.67.6-.953 1.052-1.212.553-.304.926-.788.926-1.46 0-.996-.805-1.795-1.794-1.795-.996 0-1.794.8-1.794 1.795m8.659 1.358a7.014 7.014 0 1 0-14.03 0 7.015 7.015 0 1 0 14.03 0" }));
});
exports.AuthorshipUnverified = AuthorshipUnverified;
