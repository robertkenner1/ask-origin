import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceTip = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceTip", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "M6 13.25h4" }), /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "m10.66 11.102.465.184zm0 0-.465-.185zm-2.663.652H10.4v-1H7.997zm3.693-2.9c0-1.54-1.308-3.617-3.692-3.617v1c1.718 0 2.692 1.508 2.692 2.616zm-1.291 2.9a.7.7 0 0 0 .207-.034 1 1 0 0 0 .328-.175.66.66 0 0 0 .191-.26l-.93-.368a.35.35 0 0 1 .096-.139q.026-.018.021-.014h-.002l.017-.003a.4.4 0 0 1 .072-.007zm.726-.468c.21-.53.565-1.597.565-2.433h-1c0 .634-.29 1.55-.495 2.064zm-3.128.468H10.4v-1H7.997zm3.693-2.9c0-1.54-1.308-3.617-3.692-3.617v1c1.718 0 2.692 1.508 2.692 2.616zm-1.291 2.9a.7.7 0 0 0 .207-.034 1 1 0 0 0 .328-.175.66.66 0 0 0 .191-.26l-.93-.368a.35.35 0 0 1 .096-.139q.026-.018.021-.014h-.002l.017-.003a.4.4 0 0 1 .072-.007zm.726-.468c.21-.53.565-1.597.565-2.433h-1c0 .634-.29 1.55-.495 2.064z" }), /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "m5.337 11.102-.465.184zm0 0 .465-.185zM8 11.754H5.6v-1H8zm-3.692-2.9c0-1.54 1.308-3.617 3.692-3.617v1c-1.719 0-2.692 1.508-2.692 2.616zm1.291 2.9a.7.7 0 0 1-.207-.034 1 1 0 0 1-.328-.175.66.66 0 0 1-.192-.26l.93-.368a.35.35 0 0 0-.096-.139q-.025-.018-.02-.014h.002l-.018-.003a.4.4 0 0 0-.071-.007zm-.727-.468c-.21-.53-.564-1.597-.564-2.433h1c0 .634.29 1.55.494 2.064zM8 11.754H5.6v-1H8zm-3.692-2.9c0-1.54 1.308-3.617 3.692-3.617v1c-1.719 0-2.692 1.508-2.692 2.616zm1.291 2.9a.7.7 0 0 1-.207-.034 1 1 0 0 1-.328-.175.66.66 0 0 1-.192-.26l.93-.368a.35.35 0 0 0-.096-.139q-.025-.018-.02-.014h.002l-.018-.003a.4.4 0 0 0-.071-.007zm-.727-.468c-.21-.53-.564-1.597-.564-2.433h1c0 .634.29 1.55.494 2.064zM13.5 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M10.5 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M4 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" }));
});
export {
  InterfaceTip
};
