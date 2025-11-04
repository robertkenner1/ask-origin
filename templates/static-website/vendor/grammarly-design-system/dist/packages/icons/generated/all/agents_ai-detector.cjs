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
const AgentsAiDetector = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsAiDetector", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, "Vector graphic: ai detector") : desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ectorclip0_20094_1666)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-icon-agent-default)", fillRule: "evenodd", d: "M9.018 2.918a6.1 6.1 0 0 1 5.186 9.31.53.53 0 0 0 .077.669l2.448 2.272a1.105 1.105 0 1 1-1.56 1.561L12.9 14.28a.53.53 0 0 0-.67-.078A6.1 6.1 0 1 1 9.018 2.918m.261 2.94c-.073-.232-.455-.232-.527.001-.22.706-.53 1.374-1.03 1.865-.497.49-1.161.805-1.865 1.026-.232.073-.232.455.001.527.707.219 1.374.53 1.865 1.03.49.498.805 1.167 1.026 1.87.073.233.454.232.526 0 .219-.709.53-1.379 1.03-1.87.499-.491 1.168-.806 1.872-1.027.232-.073.232-.454-.001-.526-.709-.219-1.379-.53-1.87-1.03-.491-.499-.806-1.163-1.027-1.866", clipRule: "evenodd" })));
});
exports.AgentsAiDetector = AgentsAiDetector;
