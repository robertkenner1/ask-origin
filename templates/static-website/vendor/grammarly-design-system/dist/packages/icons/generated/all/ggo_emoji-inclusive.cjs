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
const GGOEmojiInclusive = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOEmojiInclusive", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-usivea)`, d: "M15.96 9.655a9 9 0 0 0-2.993 3.69A12.4 12.4 0 0 0 12 18.35a12.2 12.2 0 0 0-.968-5.006 9 9 0 0 0-2.992-3.69A11.06 11.06 0 0 1 12.01 2.96a11.12 11.12 0 0 1 3.949 6.694" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-usiveb)`, d: "M12 19.825v.01A9.007 9.007 0 0 1 3.45 8.024a8.7 8.7 0 0 1 4.59 1.632c-.1.575-.15 1.159-.146 1.743A10.89 10.89 0 0 0 12 19.825" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-usivec)`, d: "M12 18.351v1.474a10.89 10.89 0 0 1-4.106-8.426 10 10 0 0 1 .146-1.744 9 9 0 0 1 2.992 3.69c.671 1.582 1.001 3.288.968 5.006" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-usived)`, d: "M21 10.825a8.996 8.996 0 0 1-8.989 9.01 10.95 10.95 0 0 0 4.095-8.437 10 10 0 0 0-.146-1.743 8.7 8.7 0 0 1 4.59-1.632c.3.904.451 1.85.45 2.802" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-usivee)`, d: "M16.106 11.399a10.95 10.95 0 0 1-4.095 8.437H12v-1.485a12.4 12.4 0 0 1 .967-5.006 9 9 0 0 1 2.993-3.69q.151.866.146 1.744" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-usivea`, x1: 12, x2: 12, y1: 2.961, y2: 19.836, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.156, stopColor: "#D3A1F7" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.76, stopColor: "#A963DA" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-usiveb`, x1: 7.5, x2: 7.5, y1: 8.023, y2: 19.836, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.12, stopColor: "#FDA8C9" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.922, stopColor: "#EE6C9F" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-usivec`, x1: 9.947, x2: 9.947, y1: 9.655, y2: 19.825, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#BE53B3" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.599, stopColor: "#A12E8C" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-usived`, x1: 16.506, x2: 16.506, y1: 8.023, y2: 19.836, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.12, stopColor: "#87E8D1" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.922, stopColor: "#15C39A" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-usivee`, x1: 14.053, x2: 14.053, y1: 9.655, y2: 19.836, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#5576B6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.594, stopColor: "#134F88" }))));
});
exports.GGOEmojiInclusive = GGOEmojiInclusive;
