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
const EmojiConstructive = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiConstructive", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-uctivea)`, d: "M17.62 5.83c-1.855 1.951-.202 3.958-1.19 4.074-.257.028-.99-.813-.99-.813a433 433 0 0 0-5.618-5.765c-1.308-1.327-3.258.645-1.947 1.973L6.867 4.276c-1.309-1.324-3.269.638-1.949 1.973q.527.536 1.01 1.022c-1.308-1.323-3.256.65-1.95 1.973.28.282.921.931 1.678 1.699-1.36-1.262-2.946.401-1.686 1.768 1.434 1.555 4.383 4.684 5.963 6.279 2.265 2.285 5.645 3.077 8.104.49 5.346-5.624.117-8.208 1.462-13.624.166-.671-.954-1-1.88-.026" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#0FB4D4", d: "M15.444 6.869c-1.217-2.46-3.347-3.098-3.368-3.104-.423-.122-.291-.589.132-.465.095.027 2.354.705 3.665 3.352.188.38-.23.62-.429.217M16.076 5.236c-.593-1.494-2.09-2.119-2.105-2.125-.412-.168-.234-.616.179-.45.069.028 1.7.704 2.37 2.395.154.386-.28.596-.444.18M7.313 18.204c-2.365-.341-3.046-2.657-3.074-2.755-.12-.427.338-.56.461-.133.025.086.629 2.113 2.68 2.409.43.061.314.535-.067.479M6.998 19.818c-2.664-.336-3.666-2.63-3.707-2.727-.176-.413.263-.604.44-.19.009.02.942 2.136 3.326 2.437.428.053.32.528-.06.48" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#DB942D", d: "M16.158 9.818c-.926 1.016-.836 4.15 1.017 5.866-1.49-1.743-1.281-4.89-.34-5.818z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#DB942D", d: "M17.444 5.662c-1.758 1.813-.558 3.91-1.015 4.002-.185.036-.609-.623-6.438-6.51-1.143-1.153-2.756-.167-2.79 1.12l-.167-.168C5.497 2.554 3.2 4.858 4.747 6.421l.169.171c-1.253.034-2.258 1.66-1.11 2.823l.827.837c-1.209.009-1.89 1.486-.84 2.624 1.424 1.544 4.37 4.67 5.968 6.285 2.972 3 6.307 2.738 8.45.49 5.47-5.738.196-8.41 1.518-13.737.22-.893-1.108-1.464-2.285-.252m1.82.135c-1.369 5.518 3.857 7.986-1.4 13.516-1.824 1.917-4.807 2.49-7.763-.495-1.595-1.61-4.535-4.73-5.958-6.272-1.057-1.146.223-2.47 1.349-1.425l3.737 3.784.34-.342-5.422-5.49c-.836-.845-.047-1.998.809-1.997.286 0 .562.127.799.366l5.423 5.49.34-.342-6.432-6.511c-1.084-1.095.528-2.722 1.608-1.632l6.432 6.511.34-.342-5.441-5.51C6.953 3.98 8.586 2.423 9.65 3.498c6.019 6.077 6.246 6.717 6.805 6.648 1.348-.17-.48-2.277 1.334-4.147.737-.759 1.574-.61 1.474-.201" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-uctivea`, cx: 0, cy: 0, r: 1, gradientTransform: "rotate(45.36 -4.202 17.858)scale(14.5868 13.449)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.436, stopColor: "#FFC940" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.686, stopColor: "#FFC73E" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.797, stopColor: "#FFC039" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.88, stopColor: "#FFB330" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.903, stopColor: "#FFAE2C" }))));
});
exports.EmojiConstructive = EmojiConstructive;
