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
const ConsentPersonalizedInsights = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentPersonalizedInsights", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ightsa)` }, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.349, cy: 8.848, r: 1.5, fill: "#73E1D4" }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 3.521, cy: 15.098, r: 1.65, stroke: "#1C1C1C", strokeWidth: 0.7 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.349, cy: 8.848, r: 1.65, stroke: "#1C1C1C", strokeWidth: 0.7 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12.848, r: 1.65, stroke: "#1C1C1C", strokeWidth: 0.7 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 16.465, cy: 4.848, r: 1.65, stroke: "#1C1C1C", strokeWidth: 0.7 }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#1C1C1C", strokeWidth: 0.7, d: "m4.366 13.918 2.412-3.759M8.388 9.746l2.348 2.227M12.704 11.515l3.161-5.28" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ightsa` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" }))));
});
exports.ConsentPersonalizedInsights = ConsentPersonalizedInsights;
