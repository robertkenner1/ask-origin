import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsOnelogin = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsOnelogin", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#1C1F2A", d: "M10 3.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 6.5-6.503A6.5 6.5 0 0 0 10 3.5" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M10.969 12.3q-.001.184-.187.186H9.614q-.186-.001-.187-.187V9.483h-.893q-.186-.001-.187-.187V8.127c0-.122.064-.187.187-.187h2.277c.123 0 .152.065.152.152V12.3z" }));
});
export {
  AppsOnelogin
};
