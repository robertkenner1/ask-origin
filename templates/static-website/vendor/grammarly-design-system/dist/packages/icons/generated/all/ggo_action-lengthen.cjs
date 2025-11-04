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
const GGOActionLengthen = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOActionLengthen", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-gthena)`, d: "M14.981 1H23v18.041a4.01 4.01 0 0 1-8.018 0z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D67400", d: "M18.99 17.037a2.005 2.005 0 1 1 0 4.01 2.005 2.005 0 0 1 0-4.01M20.995 8.016h2.004V9.52h-2.004zM18.99 4.508H23v1.504h-4.01zM20.995 1h2.004v1.504h-2.004zM18.99 11.524H23v1.504h-4.01zM20.995 15.033h2.004v1.503h-2.004z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-gthenb)`, d: "M4.508 7.516 1 14.726l16.223 7.893a4.01 4.01 0 1 0 3.508-7.21z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D67400", d: "m4.153 16.26 1.758-3.604 1.35.66-1.757 3.603zM7.3 17.793l.885-1.797 1.351.659-.884 1.797zM1.879 12.92 1 14.722l1.351.659.879-1.802zM10.465 19.325l1.752-3.593 1.351.66-1.752 3.592zM14.512 19.072l-.879 1.801 1.351.66.88-1.802zM18.765 20.598a1.504 1.504 0 1 1 1.318-2.702 1.504 1.504 0 0 1-1.318 2.702" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-gthena`, x1: 11.431, x2: 22.956, y1: 6.011, y2: 6.131, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFC444" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFA600" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-gthenb`, x1: 9.014, x2: 5.6, y1: 9.709, y2: 16.916, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.016, stopColor: "#FFDC9C" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFBD42" }))));
});
exports.GGOActionLengthen = GGOActionLengthen;
