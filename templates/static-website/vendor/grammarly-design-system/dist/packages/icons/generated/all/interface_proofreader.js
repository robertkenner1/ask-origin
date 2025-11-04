import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceProofreader = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceProofreader", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M5 12.864a.5.5 0 1 0 0-1zm-3.5-.5a.5.5 0 1 0 1 0zm4.818-5.182a.5.5 0 0 0-1 0zm.945 4.283a.5.5 0 0 0-.707.707zM9.09 14l-.354.354.354.353.353-.353zm5.263-4.556a.5.5 0 0 0-.708-.707zm-4.102.922a.5.5 0 0 0 .406-.914zM8.5 7.182a.5.5 0 0 0-1 0zM4.355 9.55l-.224-.447zM2 12.364h-.5v.5H2zm1.464-2.369-.224-.447zM5 11.864H2v1h3zm-1.313-1.421.891-.446-.447-.894-.891.445zm2.869 1.729 2.181 2.182.707-.708-2.181-2.181zm2.888 2.182 4.91-4.91-.708-.707-4.909 4.91zm1.214-4.902-.96-.426-.406.914.96.426zm-5.43-4.18v-1.09h-1v1.09zm3.363-1.09v1.09h1v-1.09zm0 1.09c0 .93-.753 1.683-1.682 1.683v1c1.481 0 2.682-1.201 2.682-2.682zM6.909 2.5c.929 0 1.682.753 1.682 1.682h1C9.59 2.7 8.39 1.5 6.909 1.5zM5.227 4.182c0-.929.753-1.682 1.682-1.682v-1a2.68 2.68 0 0 0-2.682 2.682zm-1 1.09c0 1.482 1.201 2.683 2.682 2.683v-1a1.68 1.68 0 0 1-1.682-1.682zm5.471 3.754A2.02 2.02 0 0 1 8.5 7.182h-1c0 1.192.702 2.273 1.792 2.758zm-5.12.971a3.15 3.15 0 0 0 1.74-2.815h-1c0 .813-.46 1.557-1.187 1.92zM2.5 12.364c0-.814.46-1.558 1.187-1.921l-.447-.895a3.15 3.15 0 0 0-1.74 2.816z" }));
});
export {
  InterfaceProofreader
};
