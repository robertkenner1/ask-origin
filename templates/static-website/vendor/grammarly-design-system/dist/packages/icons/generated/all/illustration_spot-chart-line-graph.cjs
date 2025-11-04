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
const IllustrationSpotChartLineGraph = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 56, height: 56, fill: "none", viewBox: "0 0 56 56", "aria-hidden": "true", "data-icon": "IllustrationSpotChartLineGraph", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M40.155 6.16H16.072C10.29 6.16 5.6 10.85 5.6 16.634V39.41c0 5.784 4.689 10.472 10.472 10.472h24.083c5.783 0 10.472-4.688 10.472-10.472V16.633c0-5.784-4.689-10.472-10.473-10.472Z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "m12 35.95 4.058-7.497c1.728-3.193 5.79-3.617 8.047-.84l2.292 2.818c2.061 2.536 5.7 2.441 7.64-.198L41.6 19.95" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--teal-30)", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M42.071 20.905c1.245 0 2.253-.98 2.253-2.19s-1.008-2.19-2.253-2.19c-1.244 0-2.253.981-2.253 2.19s1.009 2.19 2.253 2.19Z" }));
});
exports.IllustrationSpotChartLineGraph = IllustrationSpotChartLineGraph;
