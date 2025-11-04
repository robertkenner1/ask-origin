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
const EmojiAnalytical = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiAnalytical", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-yticala)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#E6EBEF", d: "M21.375 2.625H2.625v18.75h18.75z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#CFD8DD", d: "M19.621 2.625h-.156v18.75h.156zM17.944 2.625h-.156v18.75h.156zM16.268 2.625h-.156v18.75h.156zM14.592 2.625h-.156v18.75h.156zM12.916 2.625h-.156v18.75h.156zM11.24 2.625h-.156v18.75h.156zM9.564 2.625h-.156v18.75h.156zM7.888 2.625h-.156v18.75h.156zM6.212 2.625h-.156v18.75h.156zM4.535 2.625H4.38v18.75h.156z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#CFD8DD", d: "M21.375 4.379H2.625v.156h18.75zM21.375 6.056H2.625v.156h18.75zM21.375 7.731H2.625v.157h18.75zM21.375 9.408H2.625v.156h18.75zM21.375 11.084H2.625v.156h18.75zM21.375 12.76H2.625v.156h18.75zM21.375 14.436H2.625v.156h18.75zM21.375 16.112H2.625v.157h18.75zM21.375 17.788H2.625v.156h18.75zM21.375 19.465H2.625v.156h18.75z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#CFD8DD", d: "M21.375 2.625h-.312v18.75h.312zM2.938 2.625h-.313v18.75h.313z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#CFD8DD", d: "M21.375 2.625H2.625v.313h18.75zM21.375 21.063H2.625v.312h18.75z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-yticalb)`, d: "M13.875 12.625h-3.75v8.438h3.75z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-yticalc)`, d: "M8.25 8.875H4.5v12.188h3.75z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-yticald)`, d: "M19.5 5.75h-3.75v15.313h3.75z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-yticalb`, x1: 12, x2: 12, y1: 21.063, y2: 12.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#CC0100" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.211, stopColor: "#DF1616" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.479, stopColor: "#F12B2A" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.744, stopColor: "#FB3737" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FF3B3B" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-yticalc`, x1: 6.375, x2: 6.375, y1: 21.063, y2: 8.875, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#69A123" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.237, stopColor: "#7DBB23" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.497, stopColor: "#8ECF22" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.753, stopColor: "#98DC22" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#9BE022" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-yticald`, x1: 17.625, x2: 17.625, y1: 21.063, y2: 5.75, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#009AF7" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.081, stopColor: "#0CA2F4" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.316, stopColor: "#29B5EE" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.549, stopColor: "#3DC3EA" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.778, stopColor: "#4ACBE7" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#4ECEE6" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-yticala` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiAnalytical = EmojiAnalytical;
