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
const AppsOneDrive = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsOneDrive", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-drivea)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#0364B8", d: "m8.339 8.124 2.939 1.766 1.751-.74a2.8 2.8 0 0 1 1.32-.225 4.4 4.4 0 0 0-1.28-2.144 4.37 4.37 0 0 0-4.71-.79 4.4 4.4 0 0 0-1.904 1.61H6.5c.65-.001 1.286.18 1.839.523" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#0078D4", d: "M8.339 8.124A3.47 3.47 0 0 0 6.5 7.601h-.045a3.49 3.49 0 0 0-3.068 1.906 3.52 3.52 0 0 0 .242 3.613l2.592-1.094 1.152-.487 2.565-1.083 1.34-.566z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1490DF", d: "M14.348 8.925a2.826 2.826 0 0 0-1.32.226l-1.75.74.508.305 1.664 1 .727.437 2.483 1.493a2.863 2.863 0 0 0-.977-3.761 2.84 2.84 0 0 0-1.335-.44" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#28A8EA", d: "m14.177 11.633-.727-.437-1.664-1-.508-.306-1.34.566-2.565 1.083-1.152.487-2.592 1.094A3.5 3.5 0 0 0 6.5 14.625h7.656a2.84 2.84 0 0 0 2.504-1.5z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-drivea` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M3 5.625h14v9H3z" }))));
});
exports.AppsOneDrive = AppsOneDrive;
