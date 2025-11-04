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
const EmojiBored = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiBored", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-boreda)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-boredb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-boredc)`, d: "M10.43 8.639c-.067-.126-.215-.174-.332-.11l-.625.364.208-1.555a.3.3 0 0 0-.03-.168l-.2-.377a.26.26 0 0 0-.147-.127.22.22 0 0 0-.183.019l-1.544.895a.24.24 0 0 0-.113.153.3.3 0 0 0 .025.199l.21.397c.068.127.215.175.33.109l.584-.339-.206 1.526a.3.3 0 0 0 .03.169l.21.396c.057.107.17.159.276.131a.2.2 0 0 0 .054-.023l1.574-.91a.25.25 0 0 0 .112-.154.28.28 0 0 0-.024-.198z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-boredd)`, d: "M14.703 4.508a.25.25 0 0 0-.153-.116l-2.46-.618c-.13-.033-.257.053-.284.19l-.118.61a.27.27 0 0 0 .034.193c.036.06.091.1.153.116l1.13.284-1.71 1.48a.25.25 0 0 0-.082.141l-.118.608a.28.28 0 0 0 .035.195c.036.058.09.099.153.114l2.505.631a.23.23 0 0 0 .182-.031.25.25 0 0 0 .102-.16l.119-.608a.27.27 0 0 0-.189-.31l-1.196-.3 1.737-1.507a.25.25 0 0 0 .081-.142l.113-.576a.27.27 0 0 0-.034-.194" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-borede)`, d: "M19.18 9.005a.24.24 0 0 0 .134-.121l.36-.77a.236.236 0 0 0-.113-.315l-1.823-.86 3.164-1.573a.24.24 0 0 0 .108-.11l.343-.732a.236.236 0 0 0-.114-.314l-3.306-1.562a.236.236 0 0 0-.315.112l-.362.771a.235.235 0 0 0 .113.315l1.732.819-3.116 1.545a.23.23 0 0 0-.108.11l-.361.769a.24.24 0 0 0-.007.18.23.23 0 0 0 .121.134L19 8.995c.056.028.122.031.18.01" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M10.484 18.55c0 .864.7 1.25 1.562 1.25s1.563-.386 1.563-1.25c0-.863-.7-1.875-1.563-1.875-.862 0-1.562 1.012-1.562 1.875M10.512 12.951c-1.338 1.022-3.416 1.022-4.754 0-.205-.157-.327.013-.262.146 1.3 2.638 3.978 2.638 5.277 0 .066-.133-.056-.303-.261-.146M18.242 12.951c-1.338 1.022-3.416 1.022-4.754 0-.204-.157-.326.013-.262.146 1.3 2.638 3.978 2.638 5.277 0 .066-.133-.056-.303-.26-.146" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-boredb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-boredc`, x1: 9.064, x2: 9.064, y1: 10.328, y2: 6.654, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#005B91" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#007EC9" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-boredd`, x1: 12.916, x2: 12.916, y1: 8.343, y2: 3.767, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#005B91" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#007EC9" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-borede`, x1: 18.435, x2: 18.435, y1: 9.019, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#005B91" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#007EC9" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-boreda` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiBored = EmojiBored;
