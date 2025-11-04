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
const GGOActionContinueCompleteCategory = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 24, fill: "none", viewBox: "0 0 25 24", "aria-hidden": "true", "data-icon": "GGOActionContinueCompleteCategory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFA600", d: "M4.686 22.744a3.62 3.62 0 0 0-2.398-2.398.362.362 0 0 1 0-.692 3.62 3.62 0 0 0 2.398-2.398.362.362 0 0 1 .692 0 3.62 3.62 0 0 0 2.398 2.398c.341.105.341.587 0 .692a3.62 3.62 0 0 0-2.398 2.398.362.362 0 0 1-.692 0M8.936 6.744a3.62 3.62 0 0 0-2.398-2.398.362.362 0 0 1 0-.692 3.62 3.62 0 0 0 2.398-2.398.362.362 0 0 1 .692 0 3.62 3.62 0 0 0 2.398 2.398.362.362 0 0 1 0 .692 3.62 3.62 0 0 0-2.398 2.398.362.362 0 0 1-.692 0" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ecategorya)`, d: "M4.532 9.5v5l10 .5v4.5l7.5-7.5-7.5-7.5V9z" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ecategorya`, x1: 6.047, x2: 30.024, y1: 9.5, y2: 9.5, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#018374" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#10C097" }))));
});
exports.GGOActionContinueCompleteCategory = GGOActionContinueCompleteCategory;
