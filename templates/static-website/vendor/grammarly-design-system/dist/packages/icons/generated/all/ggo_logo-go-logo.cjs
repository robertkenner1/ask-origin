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
const GGOLogoGoLogo = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 26, height: 24, fill: "none", viewBox: "0 0 26 24", "aria-hidden": "true", "data-icon": "GGOLogoGoLogo", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#018374", d: "M19.373 6c-3.27 0-5.911 2.687-5.911 6s2.646 6 5.91 6 5.912-2.685 5.912-6-2.647-6-5.911-6m0 9.734c-1.986 0-3.596-1.671-3.596-3.734s1.61-3.734 3.596-3.734S22.969 9.938 22.969 12s-1.61 3.734-3.596 3.734M12.675 12.422H7.393v1.873H8.69q.496.01.984-.066l.017.017c-.607.887-1.702 1.512-2.984 1.512C4.64 15.758 3 14.115 3 11.994 3 9.872 4.64 8.23 6.707 8.23A3.69 3.69 0 0 1 9.74 9.83l1.852-1.272A5.82 5.82 0 0 0 6.71 6a5.947 5.947 0 0 0-5.993 6c0 3.354 2.624 6 5.889 6 1.998 0 3.657-1.134 4.313-2.384l.033.018a4.6 4.6 0 0 0-.148 1.15v.938l1.871-.005z" }));
});
exports.GGOLogoGoLogo = GGOLogoGoLogo;
