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
const AppsWrike = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsWrike", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { fill: "#08CF65", clipPath: `url(#${resourcePrefix}-wrikea)` }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M5.658 8.701c.775 0 1.14.143 1.7.706l3.01 3.022c.09.09.107.125.125.179.009.018.009.044.009.062s0 .045-.01.063c-.017.053-.035.09-.124.179l-2.057 2.074c-.089.09-.124.107-.178.125-.018.009-.044.009-.062.009s-.045 0-.062-.01c-.054-.017-.09-.035-.179-.124L1.998 9.13c-.169-.17-.107-.429.178-.429zM14.152 5.009c-.774 0-1.14.143-1.7.706l-3.01 3.022c-.089.09-.107.125-.125.179-.008.018-.008.044-.008.062s0 .045.008.063c.018.053.036.09.125.179l2.057 2.065c.089.09.125.107.178.125a.2.2 0 0 0 .062.009c.018 0 .045 0 .063-.01.053-.017.089-.035.178-.124l5.832-5.856c.17-.17.107-.429-.178-.429h-3.482z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-wrikea` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M1.905 5h16v10.12h-16z" }))));
});
exports.AppsWrike = AppsWrike;
