import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceUnorderedList = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceUnorderedList", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "M6.696 3H14M6.696 13H14M6.696 8H14m-11.478.5a.51.51 0 0 0 .521-.5c0-.276-.233-.5-.521-.5A.51.51 0 0 0 2 8c0 .276.234.5.522.5Zm0 5a.51.51 0 0 0 .521-.5c0-.276-.233-.5-.521-.5A.51.51 0 0 0 2 13c0 .276.234.5.522.5Zm0-10a.51.51 0 0 0 .521-.5c0-.276-.233-.5-.521-.5A.51.51 0 0 0 2 3c0 .276.234.5.522.5Z" }));
});
export {
  InterfaceUnorderedList
};
