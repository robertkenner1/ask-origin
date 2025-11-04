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
const AppsDeepl = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsDeepl", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 10, cy: 10, r: 7, fill: "#042B48" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "m13.182 7.112-2.866-1.697a.65.65 0 0 0-.633 0L6.817 7.112a.65.65 0 0 0-.317.566v3.467c0 .237.123.456.317.566l4.94 2.956v-2.099l1.425-.857a.65.65 0 0 0 .316-.566V7.678a.61.61 0 0 0-.316-.566M9.56 10.926c0 .347-.264.62-.598.62a.604.604 0 0 1-.598-.62c0-.347.264-.62.598-.62.158 0 .281.054.387.146l1.055-.62c.052.127.123.255.193.364l-1.055.62c.018.037.018.073.018.11m1.828-.821a.604.604 0 0 1-.598-.62c0-.037 0-.074.018-.11l-1.442-.858a.6.6 0 0 1-.387.146.604.604 0 0 1-.597-.62c0-.347.263-.62.597-.62s.598.273.598.62c0 .036 0 .073-.017.11l1.442.857a.63.63 0 0 1 .404-.164c.334 0 .598.274.598.62-.018.347-.281.639-.616.639" }));
});
exports.AppsDeepl = AppsDeepl;
