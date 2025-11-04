import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionSoundFluent = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionSoundFluent", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-luenta)`, d: "M22.012 2.025a4 4 0 0 0-.25-.009c-1.21 0-1.819.595-2.413 1.176l-.002.001c-.593.58-1.172 1.145-2.334 1.145s-1.742-.565-2.335-1.145l-.002-.001c-.593-.581-1.202-1.176-2.413-1.176s-1.82.595-2.414 1.176l-.002.001c-.593.58-1.172 1.145-2.334 1.145S5.77 3.773 5.178 3.193l-.002-.001c-.594-.581-1.202-1.176-2.414-1.176-.28 0-.527.032-.75.088v19.912h20z" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-luentb)`, d: "M22.012 11.275v10.741h-20V11.354c.223-.056.47-.088.75-.088 1.212 0 1.82.595 2.414 1.175l.002.002c.593.58 1.172 1.145 2.335 1.145 1.162 0 1.741-.565 2.334-1.144l.002-.003c.594-.58 1.203-1.175 2.414-1.175s1.82.595 2.414 1.175l.002.002c.592.58 1.172 1.145 2.334 1.145s1.741-.565 2.334-1.144l.002-.003c.594-.58 1.203-1.175 2.414-1.175q.129 0 .249.009" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-luenta`, x1: 16.748, x2: 16.748, y1: 2.118, y2: 16.016, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#B8C8FB" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.995, stopColor: "#2551DA" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-luentb`, x1: 16.748, x2: 16.748, y1: 11.368, y2: 25.266, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#B8C8FB" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.995, stopColor: "#2551DA" }))));
});
export {
  GGOActionSoundFluent
};
