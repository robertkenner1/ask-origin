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
const OutcomeStyleGuidePlaceholder = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "OutcomeStyleGuidePlaceholder", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-oldera)`, fillRule: "evenodd", d: "M11.537 11.537q-2.712.392-4.145-1.04-1.43-1.431-1.04-4.145 2.714-.39 4.145 1.04c.955.955 1.318 2.447 1.04 4.145", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-olderb)`, fillRule: "evenodd", d: "M17.648 6.352q.39 2.713-1.04 4.145-1.433 1.432-4.145 1.04-.393-2.713 1.04-4.145c.954-.954 2.446-1.317 4.145-1.04", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-olderc)`, fillRule: "evenodd", d: "M12.463 12.463q2.712-.392 4.145 1.04 1.43 1.431 1.04 4.145-2.714.39-4.145-1.04c-.955-.955-1.318-2.447-1.04-4.145", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-olderd)`, fillRule: "evenodd", d: "M6.353 17.648q-.393-2.713 1.04-4.145 1.431-1.432 4.145-1.04.39 2.713-1.04 4.145c-.955.954-2.447 1.317-4.145 1.04", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-oldera`, x1: 11.64, x2: 6.24, y1: 9.84, y2: 9.84, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#D2E3FF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#548AFF" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-olderb`, x1: 12.36, x2: 17.76, y1: 8.04, y2: 8.04, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFD0D8" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#EE445F" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-olderc`, x1: 12.36, x2: 17.76, y1: 14.16, y2: 14.16, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#ECD1FF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#BC78ED" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-olderd`, x1: 12, x2: 6.6, y1: 15.96, y2: 15.96, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.196, stopColor: "#CAFAEF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#0FDCAC" }))));
});
exports.OutcomeStyleGuidePlaceholder = OutcomeStyleGuidePlaceholder;
