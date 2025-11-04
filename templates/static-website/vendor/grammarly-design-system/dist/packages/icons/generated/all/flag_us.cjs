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
const FlagUs = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "FlagUs", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F9FAFF", fillRule: "evenodd", d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EA1537", d: "M12 20a7.97 7.97 0 0 0 5.292-2H6.708A7.97 7.97 0 0 0 12 20M5.07 16h13.86c.358-.619.635-1.29.818-2H4.252c.183.71.46 1.381.818 2M4 12h16c0-.69-.087-1.36-.252-2H4.252A8 8 0 0 0 4 12M5.07 8h13.86a8 8 0 0 0-1.638-2H6.708A8 8 0 0 0 5.07 8" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#006", d: "M12 4a8 8 0 0 0-8 8h8z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F9FAFF", fillRule: "evenodd", d: "m10.272 5.747-.221-.696-.222.69h-.728l.589.424-.228.69.589-.424.588.424-.228-.684.589-.424zm-2.05 1.74L8 6.797l-.228.69h-.721l.582.425-.222.69L8 8.176l.582.43-.221-.695.588-.425zM5.943 8.544l.228.69h.721l-.582.424.222.69-.589-.424-.582.424.221-.696L5 9.228h.722zm4.33.69-.222-.69-.222.684h-.728l.589.424-.228.696.589-.424.588.424-.228-.69.589-.424z", clipRule: "evenodd" }));
});
exports.FlagUs = FlagUs;
