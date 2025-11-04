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
const AppsMicrosoftWord = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsMicrosoftWord", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#41A5EE", d: "M16.403 3h-9.55a.596.596 0 0 0-.597.596V6.25l5.535 1.625L17 6.25V3.596A.596.596 0 0 0 16.403 3" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#2B7CD3", d: "M17 6.25H6.256V9.5l5.535.975L17 9.5z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#185ABD", d: "M6.256 9.5v3.25l5.21.65L17 12.75V9.5z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#103F91", d: "M6.853 16h9.55c.33 0 .597-.267.597-.596V12.75H6.256v2.654c0 .33.267.596.597.596" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#000", d: "M10.217 5.6H6.256v8.125h3.961a.6.6 0 0 0 .597-.596V6.196a.6.6 0 0 0-.597-.596", opacity: 0.1 }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#000", d: "M9.892 5.925H6.256v8.125h3.636a.6.6 0 0 0 .596-.596V6.521a.6.6 0 0 0-.596-.596", opacity: 0.2 }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#000", d: "M9.892 5.925H6.256V13.4h3.636a.6.6 0 0 0 .596-.596V6.521a.6.6 0 0 0-.596-.596", opacity: 0.2 }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#000", d: "M9.566 5.925h-3.31V13.4h3.31a.6.6 0 0 0 .597-.596V6.521a.6.6 0 0 0-.597-.596", opacity: 0.2 }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-tworda)`, d: "M3.597 5.925h5.969c.33 0 .597.267.597.596v5.958a.596.596 0 0 1-.597.596h-5.97A.596.596 0 0 1 3 12.479V6.521c0-.33.267-.596.597-.596" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M5.45 10.494a3 3 0 0 1 .022.24h.014q.007-.097.033-.235l.044-.232.628-2.704h.812l.65 2.663q.058.248.082.503h.01q.019-.246.068-.488l.52-2.679h.738l-.912 3.874h-.863l-.619-2.565a6 6 0 0 1-.103-.55h-.01a7.351 7.351 0 0 1-.092.556l-.582 2.558h-.878l-.917-3.872h.752l.566 2.71q.018.083.036.22" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-tworda`, x1: 4.244, x2: 8.906, y1: 5.459, y2: 13.547, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#2368C4" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.5, stopColor: "#1A5DBE" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#1146AC" }))));
});
exports.AppsMicrosoftWord = AppsMicrosoftWord;
