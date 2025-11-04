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
const AgentsExpertPanel = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsExpertPanel", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, "Vector graphic: expert panel") : desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M15.242 7.828c-.323-.78.354-2.251-.237-2.833-.59-.59-2.054.086-2.833-.237-.755-.314-1.306-1.841-2.172-1.841S8.583 4.444 7.828 4.758c-.78.323-2.251-.354-2.834.237-.59.59.087 2.054-.236 2.833-.314.755-1.841 1.306-1.841 2.172s1.527 1.417 1.841 2.172c.323.78-.354 2.251.236 2.834.59.59 2.055-.087 2.834.236.755.315 1.306 1.841 2.172 1.841s1.417-1.526 2.172-1.841c.78-.323 2.251.354 2.833-.236.59-.59-.086-2.055.237-2.834.314-.755 1.841-1.306 1.841-2.172s-1.526-1.417-1.841-2.172m-1.92.818-3.597 3.597a.62.62 0 0 1-.45.181.65.65 0 0 1-.448-.18L6.805 10.22a.63.63 0 0 1 0-.889.63.63 0 0 1 .889 0l1.574 1.574 3.156-3.156a.63.63 0 0 1 .89 0 .63.63 0 0 1 0 .89z" }));
});
exports.AgentsExpertPanel = AgentsExpertPanel;
