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
const AgentsProofreader = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsProofreader", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, "Vector graphic: proofreader") : desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-icon-agent-default)", fillRule: "evenodd", d: "M10 3a7 7 0 0 1 7 7 7 7 0 0 1-5.588 6.858 7 7 0 0 1-1.41.142H3v-7a7 7 0 0 1 7-7m-.328 2.12c-2.433.167-4.406 2.184-4.525 4.62a4.88 4.88 0 0 0 4.867 5.113c2.766 0 4.874-2.187 4.874-4.874a5 5 0 0 0-.044-.642h-3.149l-.781 1.286h2.634c-.408 2.238-2.897 3.761-5.383 2.473a2.93 2.93 0 0 1-1.252-1.24c-1.43-2.724.523-5.464 3.102-5.465 1.082 0 2.055.482 2.713 1.243l.69-1.137a4.85 4.85 0 0 0-3.746-1.378", clipRule: "evenodd" }));
});
exports.AgentsProofreader = AgentsProofreader;
