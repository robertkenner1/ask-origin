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
const GGOActionShorten = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionShorten", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ortena)` }, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ortenb)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#646B81", d: "m10.377 16.59 2.71-.63-.589-2.523-1.633-.103-2.263-.138-.996.398-5.602 2.203v2.716z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D31332", d: "M23.804 13.618c-.38-1.807-2.305-2.921-4.115-2.503l-7.257 1.675a.5.5 0 0 0-.376.603l.623 2.697c.06.262.329.44.602.377 1.218-.281 2.432.146 3.343.979.907.81 2.158 1.192 3.422.9l.87-.201c2.027-.468 3.322-2.493 2.888-4.527m-4.039 2.994a1.95 1.95 0 0 1-2.328-1.464 1.67 1.67 0 0 1 1.252-2.004l1.178-.272a1.67 1.67 0 0 1 2.004 1.252 1.955 1.955 0 0 1-1.462 2.34z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ortenc)`, d: "m13.004 22.016-11-11v11z" }), /* @__PURE__ */ React__namespace.createElement("g", { filter: `url(#${resourcePrefix}-ortend)`, opacity: 0.15 }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#000", d: "M7.326 22.016H4.582l.992-4.274v-.011l.594-2.55 2.76 2.758-.84 2.135z" })), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#ADB2C3", d: "m10.543 16.554.397-1.02-.137-2.262-.065-1.179-.028-.455-2.521-.578-.072.295-.02.117-.527 2.287-.925 3.971v.012l-.992 4.274h2.744l.76-1.942z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D31332", d: "M10.526.341C8.5-.091 6.465 1.208 5.998 3.235l-.192.86c-.295 1.272.088 2.522.89 3.429.84.906 1.267 2.118.983 3.344a.47.47 0 0 0 .096.406.5.5 0 0 0 .287.188l.035.01 1.45.336 1.19.286h.012c.283.06.546-.102.606-.384l1.676-7.248c.416-1.815-.692-3.74-2.505-4.121m.745 3.937-.263 1.178a1.677 1.677 0 0 1-2.013 1.251 1.956 1.956 0 0 1-1.46-2.322l.152-.648a1.945 1.945 0 0 1 2.334-1.461 1.656 1.656 0 0 1 1.25 2.002" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M9.097 15.98a.88.88 0 1 0-.061-1.758.88.88 0 0 0 .061 1.759" }))), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ortena` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.004.016h24v24h-24z" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ortenb` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.004.016h24v24h-24z" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ortenc`, x1: 10.254, x2: 1.087, y1: 12.849, y2: 22.933, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA600" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.818, stopColor: "#FFDD9D" })), /* @__PURE__ */ React__namespace.createElement("filter", { id: `${resourcePrefix}-ortend`, width: 6.345, height: 8.836, x: 3.582, y: 14.18, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { result: "effect1_foregroundBlur_5231_3776", stdDeviation: 0.5 }))));
});
exports.GGOActionShorten = GGOActionShorten;
