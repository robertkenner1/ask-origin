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
const AppsPomodoro = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsPomodoro", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 10, cy: 10, r: 8.333, fill: "#fff" }), /* @__PURE__ */ React__namespace.createElement("ellipse", { cx: 9.418, cy: 12.068, fill: "#F16357", rx: 7.582, ry: 6.203 }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#0CAA12", d: "M6.152 3.342 8.11 7.387A29 29 0 0 0 6.422 8c-.68.281-.43 1.172-.27 1.242.161.07 2.538.703 3.173.75s1.18-.117 1.678-.562c.5-.445 4.99-3.914 5.67-4.383s.226-1.312-.68-1.195c-.726.094-3.819.598-5.274.838L7.457 1.993c-.652-.674-1.957 0-1.305 1.349" }));
});
exports.AppsPomodoro = AppsPomodoro;
