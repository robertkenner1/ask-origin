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
const EmojiWorried = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiWorried", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-rrieda)`, d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M17.225 16c-.571-1.198-1.96-2-5.225-2s-4.653.802-5.225 2c-.306.64.131 1.667.131 1.667.546 1.294.47 1.666 5.095 1.666 4.619 0 4.547-.372 5.093-1.666 0 0 .436-1.027.131-1.667" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-rriedb)`, d: "M15.788 15.655a.26.26 0 0 0-.073-.266s-.848-.723-3.715-.723-3.715.723-3.715.723a.26.26 0 0 0-.073.266l.065.188c.03.086.13.157.222.157H15.5a.25.25 0 0 0 .222-.158z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#014D87", d: "M18.781 6.251c-1.386-1.067-3.438-1.605-4.593-1.277-.244.069-.389.973-.178.942 1.618-.242 3.386.043 4.728.946.18.12.252-.45.043-.61M5.219 6.252c1.385-1.067 3.437-1.605 4.593-1.278.243.07.388.974.177.942-1.618-.24-3.386.044-4.727.946-.18.122-.252-.45-.043-.61" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M8.667 12.167c.828 0 1.5-.896 1.5-2s-.672-2-1.5-2c-.829 0-1.5.895-1.5 2s.671 2 1.5 2M15.333 12.167c.829 0 1.5-.896 1.5-2s-.671-2-1.5-2c-.828 0-1.5.895-1.5 2s.672 2 1.5 2" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-rriedc)`, d: "M9.667 18.596c.313.163 4.353.163 4.666 0 0 0-1.166-1.027-2.334-.36-1.166-.667-2.332.36-2.332.36" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-rrieda`, x1: 12, x2: 12, y1: 22, y2: 2, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.436, stopColor: "#FFC548" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#61B3FF" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-rriedb`, x1: 8.201, x2: 15.799, y1: 15.333, y2: 15.333, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#CFD7E6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.037, stopColor: "#DAE0EC" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.126, stopColor: "#EEF1F6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.215, stopColor: "#FBFCFD" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.3, stopColor: "#fff" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.7, stopColor: "#fff" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.785, stopColor: "#FBFCFD" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.874, stopColor: "#EEF1F6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.963, stopColor: "#DAE0EC" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#CFD7E6" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-rriedc`, x1: 12, x2: 12, y1: 18.718, y2: 18.011, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#D63324" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.08, stopColor: "#DC3F31" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.247, stopColor: "#E75346" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.435, stopColor: "#EE6155" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.657, stopColor: "#F3695D" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#F46C60" }))));
});
exports.EmojiWorried = EmojiWorried;
