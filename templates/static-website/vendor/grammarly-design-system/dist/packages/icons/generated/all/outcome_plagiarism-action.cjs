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
const OutcomePlagiarismAction = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 21, height: 20, fill: "none", viewBox: "0 0 21 20", "aria-hidden": "true", "data-icon": "OutcomePlagiarismAction", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ctiona)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#BCBCBC", d: "M1.667 2.501H15v16.664H1.667z" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-ctionb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F5F5F5", d: "M3.333.834h13.333v16.664H3.333z" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#027E6F", d: "M13.71 13.298c1.358-.289 2.098-1.026 2.45-2.155-1.476 0-2.673-1.15-2.673-2.571C13.487 7.152 14.684 6 16.16 6s2.673 1.078 2.673 2.57c0 1.494-.297 5.268-5.124 6.43zM7.056 13.298c1.359-.289 2.099-1.026 2.45-2.155-1.476 0-2.673-1.15-2.673-2.571C6.833 7.152 8.03 6 9.507 6s2.673 1.078 2.673 2.57c0 1.494-.297 5.268-5.124 6.43z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ctiona` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.833 0h20v20h-20z" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-ctionb`, width: 15.333, height: 18.664, x: 1.333, y: 0.834, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", { dx: -2, dy: 2 }), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.760784 0 0 0 0 0.776471 0 0 0 0 0.831373 0 0 0 0.4 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_627_5614" }))));
});
exports.OutcomePlagiarismAction = OutcomePlagiarismAction;
