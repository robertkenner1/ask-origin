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
const InterfaceClear = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 18, height: 18, fill: "none", viewBox: "0 0 18 18", "aria-hidden": "true", "data-icon": "InterfaceClear", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#646B81", d: "M6.902 4.44a.5.5 0 1 0 0 1h3.305l-.57 2.708a.5.5 0 1 0 .978.206l.613-2.914H15.5a.5.5 0 0 0 0-1zM4.854 4.586a.5.5 0 1 0-.708.707l10 10a.5.5 0 0 0 .708-.707zM9.789 12.203a.5.5 0 0 0-.977-.213l-.646 2.968a.5.5 0 1 0 .977.213z" }));
});
exports.InterfaceClear = InterfaceClear;
