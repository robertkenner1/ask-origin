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
const AppsGiphy = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsGiphy", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 9.966, cy: 10, r: 7, fill: "#000" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M7.64 6.745h4.653v6.51H7.64z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#04FF8E", d: "M6.71 6.513h.93v6.742h-.93z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#8E2EFF", d: "M12.292 8.373h.93v4.882h-.93z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00C5FF", d: "M6.71 13.255h6.513v.93H6.71z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFF152", d: "M6.71 5.815h3.722v.93H6.71z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF5B5B", d: "M12.293 7.675v-.93h-.93v-.93h-.931v2.79h2.79v-.93" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#551C99", d: "M12.292 9.535v-.93h.93" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#999131", fillRule: "evenodd", d: "M10.43 5.815v.93h-.929", clipRule: "evenodd" }));
});
exports.AppsGiphy = AppsGiphy;
