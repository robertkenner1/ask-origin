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
const EmojiOptimistic = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiOptimistic", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-istica)`, d: "M6.202 13.339c-.903 6.37 3.505 7.778 5.853 7.801 2.032.02 4.936-.81 5.8-4.407 1.643-6.848-10.211-5.752-11.653-3.395" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M5.972 13.306c-.926 6.338 3.371 8.042 6.084 8.07 1.461 0 5.035-.448 6.029-4.59 1.798-7.493-11.75-5.97-12.113-3.48m11.657 3.372c-.916 3.816-4.223 4.228-5.573 4.228-2.777-.027-6.414-1.772-5.628-7.484 1.444-2.145 12.755-3.221 11.2 3.256" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "m15.294 14.873-.316-.395c-1.318-.265-3.842 1.2-4.29 3.626.659-2.134 3.355-3.552 4.606-3.23M18.517 4.71c.455-2.044-2.612-2.768-3.116-.622-.62 2.635-1.33 5.419-1.604 5.925-.25-.548-.82-3.499-1.19-6.084-.29-2.036-3.393-1.571-3.122.587a99 99 0 0 0 1.168 6.975c1.157.926 3.638-.559 6.418 1.477-.146-2.354.491-3.975 1.446-8.258" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-isticb)`, d: "M15.82 4.225c-.62 2.635-1.398 6.414-2.037 6.41-.303-.002-.768-.71-1.6-6.507-.235-1.644-2.444-1.247-2.237.4.439 3.498 1.265 7.387 1.265 7.387.111.568 1.722-.992 5.374.697-.075-2.356.604-3.973 1.464-7.945.341-1.578-1.86-2.013-2.23-.442" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M5.452 11.91c-.259-2.286 2.931-2.583 3.165-.303l.221 1.914c.257 2.263-2.93 2.55-3.167.291z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-isticc)`, d: "M5.919 11.85c-.183-1.642 2.052-1.858 2.237-.214l.216 1.937c.185 1.636-2.054 1.843-2.239.206z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M8.05 10.779c-.259-2.287 2.932-2.585 3.165-.304l.221 1.914c.257 2.263-2.93 2.55-3.167.29z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-isticd)`, d: "M8.516 10.718c-.183-1.643 2.053-1.859 2.238-.215l.216 1.937c.184 1.636-2.053 1.844-2.238.206z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FC6", d: "M13.208 11.87c-.537-.003-1.81.486-3.615.54-.791.022-.922 1.352.275 1.938 1.667.814 4.24-.249 5.011 1.543.19.441 2.973-.708 2.644-1.557-.829-2.14-3.94-2.462-4.315-2.464" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M14.67 15.987c-.718-1.67-3.327-.66-4.9-1.427-1.468-.72-1.232-2.354-.183-2.384 1.113-.033 2.676-.603 3.631-.603 1.055 0 2.95.252 4.156 1.521.514.542-.047.663-.419.255-.885-.971-2.702-1.35-3.737-1.35-1.043 0-2.463.61-3.619.645-.47.013-.696.972.367 1.492 1.617.79 4.267-.324 5.122 1.66z" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-istica`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(7.17157 0 0 7.15625 13.664 14.75)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.449, stopColor: "#FC6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.733, stopColor: "#FECB64" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.87, stopColor: "#FAC65C" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.975, stopColor: "#F4BD4F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#F2BA4B" })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-isticc`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(1.45208 -.14907 .21268 2.07168 7.31 11.856)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.455, stopColor: "#FC6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.661, stopColor: "#FDC961" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.906, stopColor: "#F6BF53" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#F2BA4B" })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-isticd`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(1.45216 -.14908 .21269 2.0718 9.909 10.723)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.455, stopColor: "#FC6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.661, stopColor: "#FDC961" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.906, stopColor: "#F6BF53" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#F2BA4B" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-isticb`, x1: 13.758, x2: 14.183, y1: 12.77, y2: -1.551, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#F2BA4B" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.038, stopColor: "#F4BD4F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.202, stopColor: "#FAC55C" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.415, stopColor: "#FECB64" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.855, stopColor: "#FC6" }))));
});
exports.EmojiOptimistic = EmojiOptimistic;
