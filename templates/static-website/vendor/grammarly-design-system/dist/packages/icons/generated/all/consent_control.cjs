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
const ConsentControl = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentControl", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("rect", { width: 15.917, height: 5.311, x: 2.375, y: 2.375, fill: "#B3F8F8", stroke: "#1C1C1C", strokeWidth: 0.75, rx: 2.655 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 15.636, cy: 5.03, r: 2.655, fill: "#fff", stroke: "#1C1C1C", strokeWidth: 0.75 }), /* @__PURE__ */ React__namespace.createElement("rect", { width: 15.917, height: 5.311, x: -0.375, y: 0.375, fill: "#fff", stroke: "#1C1C1C", strokeWidth: 0.75, rx: 2.655, transform: "matrix(-1 0 0 1 17.916 11.09)" }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 3.03, cy: 3.03, r: 2.655, fill: "#fff", stroke: "#1C1C1C", strokeWidth: 0.75, transform: "matrix(-1 0 0 1 8.06 11.09)" }));
});
exports.ConsentControl = ConsentControl;
