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
const GGOInterfaceStyleFormal = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOInterfaceStyleFormal", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#646B81", d: "M12 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12.5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M12 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M8.05 7.5H8A1.5 1.5 0 0 0 6.5 9v8A1.5 1.5 0 0 0 8 18.5h8a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 16 7.5h-.05a2.5 2.5 0 0 0-2.45-2h-3a2.5 2.5 0 0 0-2.45 2m1.698 2.662-.746-2.238c.011-.226.072-.438.173-.627l2.034 1.695zM12 8.349 9.92 6.616q.27-.114.58-.116h3c.205 0 .401.041.58.116zm.79.643 2.035-1.696c.1.19.162.402.173.628l-.746 2.238zm1.958 2.846-2.742-2.193-.006.006-.007-.005-2.74 2.192L8.14 8.5H8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5h-.14z", clipRule: "evenodd" }));
});
exports.GGOInterfaceStyleFormal = GGOInterfaceStyleFormal;
