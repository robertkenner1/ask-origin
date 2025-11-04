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
const GGOActionWriteStory = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionWriteStory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-storya)` }, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-storyb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#878DA2", fillRule: "evenodd", d: "m6.541 21.592-.574.482.966 1.148.573-.482.001-.001.006-.005.026-.021.107-.087a17.755 17.755 0 0 1 1.875-1.288c1.217-.722 2.673-1.366 3.917-1.366.531 0 .819.174 1.003.382.208.234.348.588.422 1.023.072.429.07.872.045 1.22a6 6 0 0 1-.059.518l-.004.025v.004a.75.75 0 0 0 1.311.62l.002-.001.008-.01.037-.043q.05-.058.147-.167c.13-.144.32-.349.555-.587.473-.48 1.12-1.081 1.832-1.597.723-.524 1.454-.916 2.1-1.043.603-.12 1.09-.008 1.504.437l.51.55 1.1-1.02-.511-.55c-.838-.903-1.891-1.087-2.894-.889-.959.19-1.899.727-2.69 1.3a16 16 0 0 0-1.478 1.231 5 5 0 0 0-.036-.248c-.098-.58-.312-1.241-.779-1.768-.491-.555-1.2-.887-2.125-.887-1.67 0-3.42.827-4.683 1.577a19 19 0 0 0-2.166 1.503l-.034.028-.01.008-.002.002z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-storyc)`, d: "M21.791 1.123c.784.784.95 2.15.733 3.393-1.372 7.867-10 14-17.834 13.722-.299.01-.507-.283-.598-.37-.312-.299-.193-2.192.57-4.01 2.105-5.01 5.363-9.642 10.08-12.342 2.524-1.445 5.541-1.901 7.049-.393" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-storyd)`, fillRule: "evenodd", d: "M17.42 5.604 1.158 21.867l-1.06-1.06L16.36 4.542z", clipRule: "evenodd" }))), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-storyc`, x1: 21.257, x2: 3.951, y1: 0.702, y2: 18.008, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#8CA6F6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#DABAF2" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-storyd`, x1: 16.714, x2: 1.511, y1: 5.957, y2: 21.16, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#474B58" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#878DA2" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-storya` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.024.016h24v24h-24z" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-storyb` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.024.073h24v24h-24z" }))));
});
exports.GGOActionWriteStory = GGOActionWriteStory;
