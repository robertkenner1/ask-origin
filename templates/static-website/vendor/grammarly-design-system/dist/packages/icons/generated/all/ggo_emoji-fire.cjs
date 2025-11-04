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
const GGOEmojiFire = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOEmojiFire", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ifirea)`, d: "M20.014 7.235c-.452 2.156-2.253 2.696-2.253 2.696S17.31 3.704 12.113.75c.205 3.141-2.763 4.711-4.06 7.358-.35-1.996-1.525-3.719-3.661-4.875.55 2.125-.884 3.795-1.891 7.5C-.056 20.14 5.643 23.25 11.993 23.25c10.835 0 12.031-10.216 8.021-16.015" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ifireb)`, d: "M20.06 10.019c-1.399 2.272-3.298 2.278-3.298 2.278s-.457-4.813-3.77-8.473C12.023 7.959 8.781 8.095 7.294 12c-.559-1.688.241-3.33-1.805-5.923.61 3.312-1.483 4.75-2.007 8.468-.676 4.797 3.836 8.705 8.51 8.705 8.109 0 10.534-7.803 8.068-13.231" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ifirec)`, d: "M11.993 23.25c-4.485 0-9.054-5.828-6.387-11.484.274 2.414 2.169 2.578 2.169 2.578 1.347-4.664 4.423-4.828 5.524-7.765 1.735 2.937 2.463 8.068 2.463 8.068s1.76-.115 3.283-1.678c.99 4.454-1.607 10.281-7.052 10.281" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ifired)`, d: "M12.12 22.5c-3.541 0-5.943-4.242-5.7-6.351 0 0 2.614 2.883 2.675.238.05-2.183 1.237-4.785 4.182-6.73-.617 2.578 1.404 3.98 1.053 7.5 0 0 1.31.648 2.508-.915.91 2.357-.481 6.258-4.718 6.258" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ifirea`, x1: 12, x2: 12, y1: 23.25, y2: 0.75, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FF7B00" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.242, stopColor: "#FB6B00" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.711, stopColor: "#F04200" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#E82500" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ifireb`, x1: 12.198, x2: 12.198, y1: 23.25, y2: 3.824, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FA0" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.175, stopColor: "#FFA400" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.418, stopColor: "#FF9200" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.701, stopColor: "#FF7400" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FF4D00" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ifirec`, x1: 12.033, x2: 12.033, y1: 23.25, y2: 6.579, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFB500" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.087, stopColor: "#FFBA00" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.674, stopColor: "#FFDA00" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE600" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ifired`, x1: 11.754, x2: 11.754, y1: 22.5, y2: 9.657, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.242, stopColor: "#FFF2AB" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.36, stopColor: "#FFF1A5" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.524, stopColor: "#FFEF92" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.715, stopColor: "#FFEC74" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.926, stopColor: "#FFE74B" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE53B" }))));
});
exports.GGOEmojiFire = GGOEmojiFire;
