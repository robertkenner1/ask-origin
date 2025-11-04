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
const AppsTranslate = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsTranslate", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#027E6F", fillRule: "evenodd", d: "M8.072 11.86c1.964-.418 3.478-2.238 3.478-4.46 0-2.544-1.977-4.55-4.35-4.55S2.85 4.856 2.85 7.4v4.55h4.352q.449 0 .87-.09M7.2 2C4.328 2 2 4.417 2 7.4v5.4h5.202q.538 0 1.047-.11c2.37-.503 4.151-2.68 4.151-5.29 0-2.983-2.327-5.4-5.2-5.4", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#027E6F", d: "M5.88 9.8h-.76L6.828 5h.828l1.708 4.8h-.76L7.261 5.872h-.038zm.128-1.88h2.466v.61H6.008z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#027E6F", d: "M18 12.742c0-2.905-2.328-5.259-5.2-5.259s-5.2 2.354-5.2 5.259c0 2.54 1.782 4.66 4.151 5.151q.51.106 1.047.107H18z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "m13.832 11.231.7.204c-.689 1.987-1.961 3.147-3.917 3.765a4 4 0 0 0-.415-.646c1.89-.502 3.064-1.523 3.632-3.323m-2.108.044c.552 1.634 1.732 2.81 3.676 3.252-.158.154-.371.469-.475.662-2.049-.541-3.174-1.805-3.857-3.715zm-1.426-.403h5.004v.652h-5.004zM12.445 10h.677v1.27h-.677z" }));
});
exports.AppsTranslate = AppsTranslate;
