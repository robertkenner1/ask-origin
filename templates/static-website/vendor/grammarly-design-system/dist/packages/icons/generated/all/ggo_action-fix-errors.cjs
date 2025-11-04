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
const GGOActionFixErrors = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 25, fill: "none", viewBox: "0 0 24 25", "aria-hidden": "true", "data-icon": "GGOActionFixErrors", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-rrorsa)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-rrorsb)`, fillRule: "evenodd", d: "M19.477 2.762a6.502 6.502 0 0 0-8.676 7.969l-6.486 6.486a3 3 0 1 0 4.243 4.242l6.486-6.486a6.502 6.502 0 0 0 7.969-8.676l-4.598 4.598-3.535-3.536zM5.376 20.398a1.5 1.5 0 1 0 2.121-2.12 1.5 1.5 0 0 0-2.121 2.12", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFA600", d: "M5.963 3.296a3.02 3.02 0 0 1 1.999 1.999c.087.284.49.284.576 0a3.02 3.02 0 0 1 1.999-1.999.302.302 0 0 0 0-.577A3.02 3.02 0 0 1 8.538.721a.302.302 0 0 0-.576 0 3.02 3.02 0 0 1-1.999 1.998.302.302 0 0 0 0 .577M.548 10.412a4.23 4.23 0 0 1 2.798 2.797.422.422 0 0 0 .808 0 4.23 4.23 0 0 1 2.798-2.797.422.422 0 0 0 0-.808 4.23 4.23 0 0 1-2.798-2.798.422.422 0 0 0-.808 0A4.23 4.23 0 0 1 .548 9.604a.422.422 0 0 0 0 .808" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-rrorsb`, x1: 7.675, x2: 15.565, y1: 10.231, y2: 19.035, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#C2C6D4" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#757C92" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-rrorsa` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 .008h24v24H0z" }))));
});
exports.GGOActionFixErrors = GGOActionFixErrors;
