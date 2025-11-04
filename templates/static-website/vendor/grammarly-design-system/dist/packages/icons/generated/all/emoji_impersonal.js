import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const EmojiImpersonal = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiImpersonal", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-sonala)`, d: "M18.188 17.44c-.588-.318-2.907-1.216-3.69-1.51v-1.12h.003c.663-.54 1.298-1.24 1.564-1.77.164-.327.332-.875.48-1.47 1.032-.159 1.767-3.474.473-3.37-.06-3.285-1.755-5.575-5.018-5.575S7.044 4.915 6.983 8.2c-1.295-.105-.559 3.211.474 3.37.148.595.316 1.143.48 1.47.265.53.9 1.23 1.564 1.772v1.127c-.796.3-3.086 1.188-3.671 1.502-1.088.583-1.33 2.415-1.33 3.172 0 1.016 15 1.016 15 0 0-.755-.228-2.588-1.312-3.173" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-sonala`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#008FE3" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#2BB0FF" }))));
});
export {
  EmojiImpersonal
};
