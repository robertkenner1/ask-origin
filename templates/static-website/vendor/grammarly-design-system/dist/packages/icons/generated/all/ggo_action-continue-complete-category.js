import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionContinueCompleteCategory = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 24, fill: "none", viewBox: "0 0 25 24", "aria-hidden": "true", "data-icon": "GGOActionContinueCompleteCategory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#FFA600", d: "M4.686 22.744a3.62 3.62 0 0 0-2.398-2.398.362.362 0 0 1 0-.692 3.62 3.62 0 0 0 2.398-2.398.362.362 0 0 1 .692 0 3.62 3.62 0 0 0 2.398 2.398c.341.105.341.587 0 .692a3.62 3.62 0 0 0-2.398 2.398.362.362 0 0 1-.692 0M8.936 6.744a3.62 3.62 0 0 0-2.398-2.398.362.362 0 0 1 0-.692 3.62 3.62 0 0 0 2.398-2.398.362.362 0 0 1 .692 0 3.62 3.62 0 0 0 2.398 2.398.362.362 0 0 1 0 .692 3.62 3.62 0 0 0-2.398 2.398.362.362 0 0 1-.692 0" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-ecategorya)`, d: "M4.532 9.5v5l10 .5v4.5l7.5-7.5-7.5-7.5V9z" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-ecategorya`, x1: 6.047, x2: 30.024, y1: 9.5, y2: 9.5, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#018374" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#10C097" }))));
});
export {
  GGOActionContinueCompleteCategory
};
