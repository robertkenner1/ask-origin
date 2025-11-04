import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionAnnouncement = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 24, fill: "none", viewBox: "0 0 25 24", "aria-hidden": "true", "data-icon": "GGOActionAnnouncement", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#E5425C", strokeWidth: 1.5, d: "M15.191 14.683a4 4 0 0 1-7.136 3.616" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-cementa)`, d: "M2.723 18.563s-1.483 1.043.102 2.628 2.628.1 2.628.1z" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-cementb)`, d: "M10.14 3.296 2.726 18.507v.001c-.561.865 1.916 3.346 2.781 2.781l15.2-7.405z" }), /* @__PURE__ */ React.createElement("path", { fill: "#ADB2C3", d: "m21.663 13.006-.675.675c-1.089 1.088-4.354-.416-7.295-3.358S9.247 4.116 10.334 3.03l.676-.675z" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-cementc)`, d: "M18.304 5.712c2.941 2.942 4.446 6.207 3.359 7.294-1.088 1.086-4.353-.418-7.295-3.358-2.942-2.942-4.446-6.208-3.358-7.294 1.087-1.088 4.351.416 7.294 3.358" }), /* @__PURE__ */ React.createElement("path", { fill: "#474B58", d: "M14.365 9.642c2.083 2.084 4.331 3.446 5.85 3.676-.238-1.52-1.596-3.757-3.674-5.834C14.456 5.4 12.21 4.038 10.69 3.81c.239 1.518 1.597 3.756 3.675 5.833" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-cementa`, x1: 2.464, x2: 4.378, y1: 18.818, y2: 22.133, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#99A0B3" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.474, stopColor: "#C2C6D4" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.51, stopColor: "#C2C6D4" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#99A0B3" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-cementb`, x1: -0.984, x2: 12.753, y1: 4, y2: 18.371, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0.078, stopColor: "#FBABB8" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.875, stopColor: "#E2415B" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-cementc`, x1: 12.253, x2: 19.072, y1: 2.02, y2: 13.834, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#99A0B3" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.339, stopColor: "#C2C6D4" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.656, stopColor: "#C2C6D4" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#99A0B3" }))));
});
export {
  GGOActionAnnouncement
};
