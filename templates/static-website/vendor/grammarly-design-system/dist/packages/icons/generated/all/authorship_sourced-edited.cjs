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
const AuthorshipSourcedEdited = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AuthorshipSourcedEdited", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F6E4F6", fillRule: "evenodd", d: "M6.934 3.828V3.63c0-.624.506-1.13 1.13-1.13h3.872c.624 0 1.13.506 1.13 1.13v.198h.001a3.13 3.13 0 0 1 3.129 3.129v7.414a3.13 3.13 0 0 1-3.129 3.13H6.934a3.13 3.13 0 0 1-3.128-3.13V6.958a3.13 3.13 0 0 1 3.128-3.129", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F6E4F6", stroke: "#9B469B", strokeLinecap: "round", strokeLinejoin: "round", d: "M15.894 11.837c.282-.49.908-.658 1.398-.375l.755.436c.49.282.657.908.374 1.398L16.07 17.37a1.86 1.86 0 0 1-1.013.831l-1.472.397-.256-1.394a1.86 1.86 0 0 1 .214-1.293z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#9B469B", strokeLinecap: "round", strokeLinejoin: "round", d: "M13.067 3.828a3.13 3.13 0 0 1 3.129 3.129V9.37m-5.129 8.13H6.934a3.13 3.13 0 0 1-3.128-3.13V6.958a3.13 3.13 0 0 1 3.128-3.129m5.58 9.035H7.485m5.029-3.735H7.485m4.451-3.89H8.064a1.13 1.13 0 0 1-1.13-1.13V3.63c0-.624.506-1.13 1.13-1.13h3.872c.624 0 1.13.506 1.13 1.13v.478a1.13 1.13 0 0 1-1.13 1.13" }));
});
exports.AuthorshipSourcedEdited = AuthorshipSourcedEdited;
