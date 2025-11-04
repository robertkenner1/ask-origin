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
const LogoLogomarkCodaInverse = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 31, height: 32, fill: "none", viewBox: "0 0 31 32", "aria-hidden": "true", "data-icon": "LogoLogomarkCodaInverse", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-nversea)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M24 23.373a7.377 7.377 0 0 1 0-14.75 7.15 7.15 0 0 1 4.693 1.757 1.25 1.25 0 0 0 2.057-.96V2.5a2.5 2.5 0 0 0-2.5-2.5h-25a2.5 2.5 0 0 0-2.5 2.5v27a2.5 2.5 0 0 0 2.5 2.5h25a2.5 2.5 0 0 0 2.5-2.5v-6.92a1.25 1.25 0 0 0-2.057-.96A7.15 7.15 0 0 1 24 23.373" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-nversea` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.75 0h30v32h-30z" }))));
});
exports.LogoLogomarkCodaInverse = LogoLogomarkCodaInverse;
