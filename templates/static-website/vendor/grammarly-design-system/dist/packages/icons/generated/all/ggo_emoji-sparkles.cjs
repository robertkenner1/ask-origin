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
const GGOEmojiSparkles = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOEmojiSparkles", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-arklesa)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-arklesb)`, d: "M9.188 3.25c-.568 6.32-1.721 7.459-6.563 8.125 4.842.666 5.995 1.804 6.563 8.125.567-6.32 1.72-7.459 6.562-8.125-4.842-.666-5.996-1.804-6.562-8.125" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-arklesc)`, d: "M17.625 2.625c-.324 3.16-.983 3.73-3.75 4.063 2.767.332 3.426.902 3.75 4.062.324-3.16.983-3.73 3.75-4.062-2.767-.333-3.426-.903-3.75-4.063" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-arklesd)`, d: "M15.75 13.25c-.324 3.16-.983 3.73-3.75 4.063 2.767.333 3.426.902 3.75 4.062.324-3.16.983-3.73 3.75-4.062-2.767-.334-3.426-.903-3.75-4.063" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-arklesb`, x1: 9.188, x2: 9.188, y1: 19.496, y2: 3.246, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#F90" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.022, stopColor: "#FF9C03" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.274, stopColor: "#FFB91D" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.524, stopColor: "#FFCE31" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.768, stopColor: "#FFDB3C" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFDF40" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-arklesc`, x1: 17.625, x2: 17.625, y1: 10.753, y2: 2.628, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#6FAD00" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.039, stopColor: "#73B202" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.263, stopColor: "#87CC0F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.493, stopColor: "#96DE17" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.734, stopColor: "#9EE91C" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#A1ED1E" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-arklesd`, x1: 15.75, x2: 15.75, y1: 21.378, y2: 13.253, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#7D0C7A" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.094, stopColor: "#930C90" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.254, stopColor: "#B30DAE" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.421, stopColor: "#CC0DC6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.595, stopColor: "#DD0ED8" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.781, stopColor: "#E80EE2" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#EB0EE5" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-arklesa` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.GGOEmojiSparkles = GGOEmojiSparkles;
