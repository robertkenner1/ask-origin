import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const EmojiRead = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiRead", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-ireada)`, d: "M2.625 11.821c0 2.75 1.09 6.741 4.375 6.741s4.375-3.99 4.375-6.74c0-8.512-8.75-8.512-8.75 0" }), /* @__PURE__ */ React.createElement("path", { fill: "#302C3B", d: "M3.15 12.051c0 3.83 4.083 3.83 4.083 0 0-3.67-4.083-3.67-4.083 0" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M5.483 10.536a.586.586 0 0 0 1.167 0c0-.816-1.167-.816-1.167 0" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-ireadb)`, d: "M12.625 11.821c0 2.75 1.09 6.741 4.375 6.741s4.375-3.99 4.375-6.74c0-8.512-8.75-8.512-8.75 0" }), /* @__PURE__ */ React.createElement("path", { fill: "#302C3B", d: "M13.15 12.051c0 3.83 4.083 3.83 4.083 0 0-3.67-4.083-3.67-4.083 0" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M15.483 10.536a.586.586 0 0 0 1.167 0c0-.816-1.167-.816-1.167 0" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("radialGradient", { id: `${resourcePrefix}-ireada`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(4.08339 0 0 6.52844 6.562 11.843)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#fff" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.794, stopColor: "#fff" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.859, stopColor: "#F7F9FA" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.959, stopColor: "#E2E8ED" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#D7E0E6" })), /* @__PURE__ */ React.createElement("radialGradient", { id: `${resourcePrefix}-ireadb`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(4.08339 0 0 6.52844 16.562 11.843)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#fff" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.794, stopColor: "#fff" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.859, stopColor: "#F7F9FA" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.959, stopColor: "#E2E8ED" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#D7E0E6" }))));
});
export {
  EmojiRead
};
