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
const AppsMonday = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsMonday", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ondaya)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFCB00", d: "M10.022 14.35c-.613-.016-1.118-.296-1.44-.881-.331-.605-.317-1.224.036-1.814.84-1.404 1.69-2.8 2.534-4.2.173-.286.342-.576.523-.857.24-.384.615-.656 1.045-.758s.882-.024 1.259.215a1.77 1.77 0 0 1 .566 2.4 356 356 0 0 1-3.081 5.108c-.32.524-.808.777-1.442.787" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF3D57", d: "M4.763 14.35c-.618-.016-1.12-.309-1.437-.891-.326-.605-.305-1.225.048-1.815q1.355-2.255 2.72-4.502c.116-.194.231-.392.355-.58.25-.376.63-.636 1.062-.725.432-.09.88-.001 1.25.246.37.248.632.635.732 1.08.1.444.028.912-.198 1.303a713 713 0 0 1-3.056 5.059c-.332.545-.821.815-1.476.825" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00D647", d: "M15.315 10.923a1.704 1.704 0 0 1 1.683 1.714c0 .957-.774 1.728-1.714 1.716a1.7 1.7 0 0 1-1.68-1.718 1.694 1.694 0 0 1 1.71-1.712" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ondaya` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M3 5.457h14v9H3z" }))));
});
exports.AppsMonday = AppsMonday;
