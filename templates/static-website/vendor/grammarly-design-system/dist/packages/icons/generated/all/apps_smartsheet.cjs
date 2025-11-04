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
const AppsSmartsheet = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsSmartsheet", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#003059", d: "M6.078 8.615s.644-.976 1.522-.976c1.327-.039 2.42 2.459 2.615 2.81 1.483-3.434 3.941-6.342 5.931-8.273H3.854V16.36a8.5 8.5 0 0 1-.156 1.58c1.6-.273 3.18-.663 4.702-1.21 3.727-1.385 5.19-2.848 5.19-2.848l.098-.098.058.117c.234.586.586 1.113.937 1.64.507.643.78.702.976.643.214-.058.331-.429.39-.995.058-.585.097-1.853.097-3.434V3.268c-3.57 4.586-6.244 11.454-6.244 11.454S8.127 8.595 6.078 8.615" }));
});
exports.AppsSmartsheet = AppsSmartsheet;
