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
const AgentsHumanizer = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsHumanizer", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, "Vector graphic: humanizer") : desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M9.606 8.711a2.939 2.939 0 1 0 0-5.878 2.939 2.939 0 0 0 0 5.878" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-icon-agent-default)", fillRule: "evenodd", d: "M7.441 9.768c1-.108 3.33-.108 4.33 0 1.577.167 2.952 1.368 3.322 2.983h-.015c.181.774.37 2.208.514 3.446a.715.715 0 0 1-.716.803H4.32a.715.715 0 0 1-.716-.803c.152-1.231.34-2.665.514-3.446.362-1.615 1.744-2.816 3.322-2.983m4.452 1.976c-.615-.593-1.803-.072-2.28.79-.478-.855-1.658-1.383-2.28-.79-.666.645-.247 1.687.607 2.512a11 11 0 0 0 1.47 1.216.35.35 0 0 0 .405 0c.283-.188.818-.593 1.47-1.216.854-.825 1.274-1.867.608-2.512", clipRule: "evenodd" }));
});
exports.AgentsHumanizer = AgentsHumanizer;
