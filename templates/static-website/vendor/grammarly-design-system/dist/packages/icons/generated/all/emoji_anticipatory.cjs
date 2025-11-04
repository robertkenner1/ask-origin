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
const EmojiAnticipatory = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiAnticipatory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FC6", d: "M12.814 11.584c-.729-1.77-1.392-4.34-2.703-7.67-.718-1.83-3.246-1.082-2.587.768 1.12 3.138 2.024 5.65 2.355 6.902z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M10.12 11.584c-.247-.967-2.375-6.98-2.375-6.98C7.218 3.123 9.26 2.387 9.893 4c.718 1.822 2.35 6.793 2.67 7.584h.504c-.338-.808-1.99-5.931-2.738-7.755-.876-2.139-3.777-1.178-3.026.932 0 0 2.001 5.61 2.336 6.823z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-atorya)`, d: "m17.16 13.076-7.306-1.088c.57-1.695 1.437-3.842 2.272-6.647.559-1.878-1.943-2.696-2.565-.834-1.494 4.477-3.024 8.208-3.32 9.437-1.987 8.249 8.082 8.628 10.575 5.013 1.317-1.909.344-5.881.344-5.881" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "M6.015 13.889c.207-.865 2.657-7.458 3.323-9.456.736-2.2 3.64-1.15 3.012.975-.65 2.199-2.016 5.904-2.183 6.39l7.183 1.069c.046.185 1.068 4.182-.34 6.223-2.66 3.856-13.039 3.28-10.995-5.201M9.783 4.58c-.745 2.234-3.169 8.814-3.313 9.417-1.931 8.013 7.815 8.216 10.153 4.826 1.1-1.595.5-4.805.343-5.54l-7.423-1.105s1.8-5.033 2.358-6.905c.469-1.574-1.592-2.267-2.118-.693" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "m10.914 13.068.523-.06c1.172.72 1.978 3.498.544 5.52 1.066-1.962.097-4.824-1.067-5.46" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-atoryb)`, d: "M18.013 11.755c.026.662-.109 1.942-.294 2.456-.14.39-.412.794-.618.937-.563.388-2.038.267-1.81-1.025.17-.968.333-1.898.513-2.915.202-1.15 2.17-.505 2.208.547" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-atoryc)`, d: "m15.843 10.984-.636 3.611c-.255 1.452-2.93 1.027-2.674-.424l.636-3.611c.257-1.453 2.93-1.028 2.674.424" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "m15.06 14.082.513-2.915c.182-1.368 2.622-.835 2.674.58.027.685-.11 1.995-.306 2.544-.157.434-.454.875-.707 1.05-.753.519-2.438.233-2.175-1.259m.974-2.833-.513 2.914c-.197 1.115 1.102 1.029 1.446.792.15-.104.4-.46.532-.823.173-.48.304-1.742.28-2.368-.033-.87-1.602-1.33-1.745-.515" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "m12.303 14.13.636-3.611c.384-1.8 3.431-1.214 3.135.505l-.636 3.612c-.3 1.759-3.446 1.25-3.135-.506M13.4 10.6l-.636 3.61c-.195 1.109 2 1.518 2.212.345l.636-3.612c.206-1.096-2-1.522-2.212-.343" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FC6", d: "M11.36 10.743c1.95-1.784 3.49.545 1.706 2.547-1.234 1.386-3.39 1.96-3.78 2.478-.283.377-2.497-.203-2.727-.978-.72-2.44 2.981-2.383 4.8-4.047" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D9A640", d: "m9.473 15.9-.374-.28c.46-.612 2.492-1.078 3.792-2.494 1.569-1.708.38-3.82-1.373-2.218-1.896 1.735-4.837 1.164-5.215 3.95l-.464-.063c.417-3.079 3.612-2.632 5.363-4.233 2.11-1.93 4.086.58 2.039 2.876-1.187 1.334-3.462 2.057-3.768 2.463" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-atorya`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(8.43104 0 0 11.5774 10.866 10.432)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.436, stopColor: "#FC6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.686, stopColor: "#FECB64" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.797, stopColor: "#FAC65D" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.88, stopColor: "#F4BD50" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.903, stopColor: "#F2BA4B" })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-atoryb`, cx: 0, cy: 0, r: 1, gradientTransform: "rotate(-80.354 15.808 -3.703)scale(2.16282 1.60992)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.455, stopColor: "#FC6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.661, stopColor: "#FDC961" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.906, stopColor: "#F6BF53" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#F2BA4B" })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-atoryc`, cx: 0, cy: 0, r: 1, gradientTransform: "rotate(-80.354 14.22 -2.49)scale(2.60768 1.94106)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.455, stopColor: "#FC6" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.661, stopColor: "#FDC961" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.906, stopColor: "#F6BF53" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#F2BA4B" }))));
});
exports.EmojiAnticipatory = EmojiAnticipatory;
