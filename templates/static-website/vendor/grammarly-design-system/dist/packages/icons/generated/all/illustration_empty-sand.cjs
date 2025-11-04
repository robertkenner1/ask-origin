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
const IllustrationEmptySand = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationEmptySand", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ysanda)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EBEBEB", stroke: "var(--color-illustration-stroke-default)", d: "m63.941 13.2-4.646-1.847-6.646 16.721 4.647 1.847z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E6E6", stroke: "var(--color-illustration-stroke-default)", d: "m61.61 39.375-18.586-7.387 2.41-6.065a6 6 0 0 1 7.792-3.36l7.434 2.954a6 6 0 0 1 3.36 7.792z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E6E6", fillRule: "evenodd", stroke: "var(--color-illustration-stroke-default)", d: "M70.453 8.846a3.093 3.093 0 0 0-1.465-4.539l-7.26-2.885a3.093 3.093 0 0 0-4.18 2.295l-1.179 6.188a3.09 3.09 0 0 0 1.896 3.453l5.049 2.006c1.378.547 2.95.04 3.748-1.21zM66.95 7.4l-2.625 4.466-4.396-1.747 1.157-5.05z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFEBB8", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M3.697 68.366C-6.026 64.358 9 35.44 34.5 27.5s50.475 33.866 42.869 40.008c-7.606 6.141-25.894 6.858-40.894 6.358s-23.055-1.491-32.778-5.5Z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EBEBEB", stroke: "var(--color-illustration-stroke-default)", d: "m14.364 30.608 4.24-2.65 9.535 15.26-4.24 2.65z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E0AC", stroke: "var(--color-illustration-stroke-default)", d: "m21.35 55.942 16.962-10.598-3.46-5.536a6 6 0 0 0-8.267-1.908l-6.784 4.239a6 6 0 0 0-1.91 8.268z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E0AC", fillRule: "evenodd", stroke: "var(--color-illustration-stroke-default)", d: "M7.178 27.493a3.093 3.093 0 0 1 .627-4.728l6.625-4.14a3.093 3.093 0 0 1 4.524 1.51l2.269 5.875a3.09 3.09 0 0 1-1.247 3.737l-4.606 2.879a3.09 3.09 0 0 1-3.905-.518zm3.187-2.05 3.383 3.924 4.011-2.507-2.043-4.76z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFEBB8", d: "M24.182 49.207c-5.208 3.66-6.208 9.16-6.208 9.16l12 2.5 18.5-12.5-8.5-8.5c-5.325 6.904-10.584 5.68-15.792 9.34" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M18.5 55.5s.949-3.267 5.474-6.134C28.5 46.5 33.5 47 39 41.5" }), /* @__PURE__ */ React__namespace.createElement("ellipse", { cx: 53.435, cy: 52.636, fill: "#FF4D45", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", rx: 13.115, ry: 4.769 }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFEBB8", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", d: "M48.287 51.062c-4.179.473-6.526 3.132-6.268 4.735.259 1.602 3.656 5.208 3.656 5.208h12.013S65 60.058 65 57.217s-2.09-4.143-4.7-4.735c-2.612-.592-5.3.523-5.3.523s-2.535-2.417-6.713-1.944" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF4D45", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "m40.37 53.059 2.731 22.707c0 1.713 4.627 3.1 10.334 3.1s10.333-1.388 10.333-3.1l2.731-22.707c-.588 2.436-6.213 4.346-13.064 4.346-6.852 0-12.476-1.91-13.065-4.346Z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "M52.264 58.846c.501.797 1.055 1.596 1.658 2.387 4.766 6.245 10.847 9.615 13.582 7.527 2.28-1.74 1.515-6.724-1.564-11.951" }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 52.242, cy: 58.803, r: 2.385, fill: "#FF4D45", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ysanda` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h80v80H0z" }))));
});
exports.IllustrationEmptySand = IllustrationEmptySand;
