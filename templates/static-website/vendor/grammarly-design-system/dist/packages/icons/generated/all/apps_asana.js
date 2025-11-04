import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsAsana = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsAsana", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-asanaa)` }, /* @__PURE__ */ React.createElement("path", { fill: "#F06A6A", d: "M13.48 5.53c0 1.948-1.558 3.53-3.48 3.53S6.52 7.48 6.52 5.53 8.079 2 10 2s3.48 1.58 3.48 3.53m-8 4.41C3.559 9.94 2 11.52 2 13.47c0 1.948 1.558 3.529 3.48 3.529s3.48-1.58 3.48-3.53c0-1.948-1.558-3.528-3.48-3.528m9.04 0c-1.922 0-3.48 1.58-3.48 3.53S12.598 17 14.52 17 18 15.42 18 13.47s-1.558-3.53-3.48-3.53" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-asanaa` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M1.667 1.667h16.667v16.667H1.667z" }))));
});
export {
  AppsAsana
};
