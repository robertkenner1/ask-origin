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
const AppsSemrush = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsSemrush", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 10, cy: 10, r: 8, fill: "#FF642D" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M13.501 9.954c0 .184-.101.207-.355.207-.28 0-.33-.046-.356-.23-.051-.485-.407-.9-1.016-.923-.178-.023-.229-.07-.229-.3 0-.208.025-.3.203-.3 1.016.023 1.753.784 1.753 1.546m1.499 0C15 8.524 13.933 7 11.443 7H6.54c-.101 0-.177.046-.177.138 0 .047.025.093.076.116.178.138.432.277.787.438.33.162.61.254.864.346q.152.07.152.139c0 .07-.05.138-.177.138H4.178C4.05 8.292 4 8.362 4 8.431s.025.115.076.161c.305.3.813.67 1.55 1.085.635.37 1.448.761 2.083 1.038.102.046.152.093.152.162 0 .07-.05.115-.177.115H5.88c-.102 0-.153.046-.153.116q0 .069.077.138c.406.346 1.067.692 1.93 1.039 1.169.438 2.338.715 3.659.715C13.908 13 15 11.292 15 9.954m-3.277 2.054c-1.22 0-2.261-.9-2.261-2.054 0-1.108 1.016-2.008 2.26-2.008 1.271 0 2.262.9 2.262 2.008 0 1.13-.99 2.054-2.261 2.054" }));
});
exports.AppsSemrush = AppsSemrush;
