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
const GGOActionInspireMe = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionInspireMe", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-iremea)` }, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-iremeb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-iremec)`, fillRule: "evenodd", d: "M12.597 24.008a11 11 0 0 1-1.302-5.2A11.02 11.02 0 0 1 17.55 8.87a16 16 0 0 0-2.066-.137C7.007 8.732.122 15.554.021 24.008z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-iremed)`, d: "M14.96.515a.5.5 0 0 1 .919-.247l2.5 3.851a.5.5 0 0 0 .55.21l4.434-1.188a.5.5 0 0 1 .518.798l-2.89 3.568a.5.5 0 0 0-.03.587l2.5 3.85a.5.5 0 0 1-.598.74l-4.286-1.646a.5.5 0 0 0-.568.152l-2.89 3.569a.5.5 0 0 1-.887-.341l.24-4.585a.5.5 0 0 0-.32-.493L9.865 7.694a.5.5 0 0 1 .05-.95l4.435-1.188a.5.5 0 0 0 .37-.456z" }))), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-iremec`, x1: 13.799, x2: 13.785, y1: 12.826, y2: 23.555, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#5679E8" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#5679E8", stopOpacity: 0 })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-iremed`, x1: 18.483, x2: 13.787, y1: 4.321, y2: 10.373, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFC444" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#F90" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-iremea` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.02.008h24v24h-24z" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-iremeb` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.02.008h24v24h-24z" }))));
});
exports.GGOActionInspireMe = GGOActionInspireMe;
