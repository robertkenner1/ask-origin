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
const AppsGoogleCalendar = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsGoogleCalendar", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "m13.728 6.272-3.355-.373-4.101.373L5.899 10l.373 3.728 3.728.466 3.728-.466.373-3.821z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1A73E8", d: "M7.801 12.056q-.417-.281-.577-.827l.647-.266a1 1 0 0 0 .308.52.8.8 0 0 0 .53.183.82.82 0 0 0 .544-.193.62.62 0 0 0 .229-.49.61.61 0 0 0-.24-.498.93.93 0 0 0-.603-.193h-.373v-.64H8.6a.82.82 0 0 0 .523-.168.55.55 0 0 0 .212-.46.5.5 0 0 0-.19-.414.74.74 0 0 0-.482-.156q-.284 0-.453.152a.9.9 0 0 0-.244.374l-.64-.267q.127-.36.469-.637.343-.275.874-.275.393 0 .707.151.312.153.49.422t.178.605a1 1 0 0 1-.165.58q-.165.237-.406.364v.038q.317.133.52.405.204.273.204.653t-.193.678a1.34 1.34 0 0 1-.533.47q-.339.17-.763.17a1.6 1.6 0 0 1-.908-.28M11.77 8.846l-.706.514-.355-.539 1.274-.919h.489v4.335h-.701z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EA4335", d: "m13.728 17.083 3.355-3.355-1.677-.745-1.678.745-.745 1.678z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#34A853", d: "m5.526 15.406.746 1.677h7.456v-3.355H6.272z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#4285F4", d: "M4.035 2.917c-.618 0-1.118.5-1.118 1.118v9.693l1.677.746 1.678-.746V6.272h7.456l.746-1.678-.746-1.677z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#188038", d: "M2.917 13.728v2.237c0 .618.5 1.118 1.118 1.118h2.237v-3.355z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FBBC04", d: "M13.728 6.272v7.456h3.355V6.272l-1.677-.746z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1967D2", d: "M17.083 6.272V4.035c0-.618-.5-1.118-1.118-1.118h-2.237v3.355z" }));
});
exports.AppsGoogleCalendar = AppsGoogleCalendar;
