import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsHubspot = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsHubspot", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-bspota)` }, /* @__PURE__ */ React.createElement("path", { fill: "#FF7A59", d: "M13.515 7.524V5.888a1.26 1.26 0 0 0 .726-1.136v-.037a1.26 1.26 0 0 0-1.26-1.26h-.037a1.26 1.26 0 0 0-1.26 1.26v.037a1.26 1.26 0 0 0 .726 1.136v1.636a3.57 3.57 0 0 0-1.696.747L6.226 4.776q.048-.175.05-.354a1.42 1.42 0 1 0-1.42 1.417c.245-.001.486-.067.698-.19l4.42 3.438a3.58 3.58 0 0 0 .054 4.031l-1.344 1.344a1.2 1.2 0 0 0-.336-.054 1.166 1.166 0 1 0 1.167 1.166 1.2 1.2 0 0 0-.055-.336l1.33-1.33a3.586 3.586 0 1 0 2.725-6.384m-.551 5.38a1.84 1.84 0 0 1-1.333-3.156 1.84 1.84 0 0 1 1.333-.52 1.84 1.84 0 0 1 .002 3.676" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-bspota` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M3 3h14v14H3z" }))));
});
export {
  AppsHubspot
};
