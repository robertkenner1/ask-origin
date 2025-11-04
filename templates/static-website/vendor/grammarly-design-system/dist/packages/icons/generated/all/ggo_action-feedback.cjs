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
const GGOActionFeedback = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 24, fill: "none", viewBox: "0 0 25 24", "aria-hidden": "true", "data-icon": "GGOActionFeedback", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-dbacka)` }, /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-dbackb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#E14683", d: "M8.184 6.501a9.5 9.5 0 0 1 9.359 9.359A8 8 0 1 0 8.184 6.5" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M18.152 5q.28 0 .561.075c1.622.424 2.134 2.47.924 3.618l-2.234 2.134-.894.857a9.54 9.54 0 0 0-4.452-4.297c-.11-.993.479-2.025 1.578-2.312q.28-.075.561-.075c.861 0 1.647.774 1.984 1.585C16.504 5.774 17.29 5 18.152 5" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-dbackc)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#5679E8", d: "M8.044 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M9.945 14.867h2.5c.33 0 .599.269.599.598v.748c0 .103-.02.21-.059.31l-1.359 2.585a.9.9 0 0 1-.825.545H7.36a.9.9 0 0 1-.897-.898v-3.29c0-.235.096-.466.262-.633l2.745-2.744a.3.3 0 0 1 .422 0l.259.258a.7.7 0 0 1 .2.46l-.01.14zM3.642 14.868h.598c.33 0 .598.267.598.598v3.589c0 .33-.267.598-.598.598h-.598a.6.6 0 0 1-.598-.598v-3.59c0-.33.268-.598.598-.598" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-dbackb`, width: 15.86, height: 15.86, x: 8.184, y: 0, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.823529 0 0 0 0 0.0941176 0 0 0 0 0.380392 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3692" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-dbackc`, width: 16, height: 16, x: 0.044, y: 8, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React__namespace.createElement("feOffset", null), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2 }), /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0.145098 0 0 0 0 0.317647 0 0 0 0 0.854902 0 0 0 1 0" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3692" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-dbacka` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.044 0h24v24h-24z" }))));
});
exports.GGOActionFeedback = GGOActionFeedback;
