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
const EmojiFrank = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiFrank", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-franka)`, d: "M10.853 8.84c-1.128 1.002-.322 2.182-.873 2.204-.143.005-.502-.493-.502-.493a232 232 0 0 0-2.786-3.435c-.65-.79-1.83.218-1.179 1.01q-.245-.297-.5-.61c-.65-.79-1.836.213-1.18 1.01l.5.61c-.648-.79-1.829.22-1.18 1.009.14.168.458.555.834 1.012-.682-.758-1.646.096-1.025.908.707.922 2.165 2.783 2.95 3.734 1.125 1.364 2.947 1.945 4.442.617 3.25-2.887.503-4.54 1.535-7.484.127-.364-.475-.593-1.037-.093" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M9.834 10.985c-.565.523-.683 2.263.246 3.293-.728-1.03-.443-2.764.125-3.238z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M10.762 8.73c-1.085.966-.519 2.217-.775 2.172-.074-.014-.248-.23-.398-.44-.657-.83-1.542-1.922-2.788-3.436-.564-.687-1.51-.228-1.61.486l-.07-.086c-.776-.93-2.177.254-1.397 1.19l.075.092c-.694-.025-1.326.833-.754 1.527l.402.489c-.668-.036-1.114.752-.596 1.428.7.914 2.154 2.771 2.952 3.738.872 1.058 2.746 2.237 4.641.636 3.314-2.944.565-4.658 1.578-7.546.164-.469-.513-.88-1.26-.25m.994.155c-1.073 3.058 1.701 4.585-1.493 7.423-1.606 1.358-3.291.556-4.244-.6a171 171 0 0 1-2.946-3.73c-.515-.673.254-1.338.807-.728l1.857 2.259.216-.18-1.859-2.261-.832-1.014c-.538-.644.432-1.464.962-.828L6.917 12.5l.216-.181L4.29 8.86l-.35-.425c-.548-.667.45-1.453.964-.829l.5.61h.001l2.692 3.274.216-.181-2.695-3.278c-.534-.64.436-1.46.966-.825a161 161 0 0 1 2.78 3.428q.402.558.621.552c.777-.03-.144-1.259.958-2.238.475-.403.883-.262.813-.063" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-frankb)`, d: "M13.148 8.843c1.127 1.002.32 2.183.872 2.204.143.006.502-.493.502-.493.622-.788 1.493-1.863 2.786-3.435.65-.79 1.83.219 1.18 1.01q.244-.297.5-.61c.65-.789 1.835.214 1.179 1.01l-.5.61c.648-.79 1.829.22 1.18 1.009l-.834 1.013c.682-.758 1.645.096 1.024.907a173 173 0 0 1-2.949 3.735c-1.125 1.364-2.947 1.944-4.442.616-3.25-2.886-.504-4.54-1.536-7.483-.127-.365.475-.593 1.038-.093" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M14.166 10.988c.565.523.683 2.263-.246 3.293.728-1.03.443-2.764-.125-3.238z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M11.979 8.983c1.012 2.887-1.737 4.602 1.577 7.545 1.894 1.602 3.769.423 4.642-.635.797-.967 2.251-2.824 2.951-3.738.518-.676.072-1.465-.596-1.428l.402-.489c.571-.694-.06-1.552-.754-1.527l.075-.092c.78-.937-.621-2.12-1.396-1.19l-.072.086c-.1-.714-1.045-1.173-1.61-.487a240 240 0 0 0-2.787 3.437c-.15.209-.324.426-.398.44-.256.045.31-1.206-.775-2.172-.747-.63-1.424-.219-1.26.25m1.078-.032c1.102.979.18 2.207.958 2.238q.218.007.62-.552c.65-.824 1.527-1.922 2.78-3.428.53-.635 1.5.185.967.825l-2.696 3.278.217.18 2.692-3.273.502-.61c.514-.624 1.511.162.962.83l-.349.424-2.844 3.459.217.18 2.693-3.274c.529-.636 1.499.184.962.829l-.833 1.013-1.86 2.26.217.18 1.858-2.258c.553-.61 1.321.055.807.729-.7.912-2.15 2.765-2.947 3.73-.953 1.155-2.638 1.957-4.244.6-3.194-2.839-.42-4.366-1.493-7.424-.069-.198.338-.339.814.064" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-franka`, cx: 0, cy: 0, r: 1, gradientTransform: "rotate(50.565 -7.416 11.515)scale(8.01359 6.3427)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.436, stopColor: "#FC6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.686, stopColor: "#FECB64" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.797, stopColor: "#FAC65D" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.88, stopColor: "#F4BD50" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.903, stopColor: "#F2BA4B" })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-frankb`, cx: 0, cy: 0, r: 1, gradientTransform: "rotate(129.435 6.562 9.173)scale(8.01359 6.3427)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.436, stopColor: "#FC6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.686, stopColor: "#FECB64" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.797, stopColor: "#FAC65D" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.88, stopColor: "#F4BD50" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.903, stopColor: "#F2BA4B" }))));
});
exports.EmojiFrank = EmojiFrank;
