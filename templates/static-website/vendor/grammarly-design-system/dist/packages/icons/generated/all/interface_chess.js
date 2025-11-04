import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceChess = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 21, fill: "none", viewBox: "0 0 20 21", "aria-hidden": "true", "data-icon": "InterfaceChess", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#707070", d: "M8.5 4.375v1h-1v-1zm4 0v1h-1v-1zm-2 0v-.5a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1v-1.5a1.5 1.5 0 1 1 3 0v1.5l-.102-.005a1 1 0 0 1-.898-.995m-4 0v-.5a.5.5 0 0 0-1 0v.85l.009.153c.04.353.217.678.498.902l1.445 1.157a2 2 0 0 0 1.08.431l.17.007h2.597l.169-.007a2 2 0 0 0 .943-.33l.137-.101 1.445-1.157c.28-.224.458-.55.498-.902l.009-.152v-.851a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1v-1.5a1.5 1.5 0 0 1 3 0v.85c0 .67-.285 1.306-.78 1.75l-.102.087-1.445 1.156a3 3 0 0 1-1.874.657H8.7a3 3 0 0 1-1.668-.507l-.206-.15-1.445-1.156A2.35 2.35 0 0 1 4.5 4.726v-.851a1.5 1.5 0 1 1 3 0v1.5l-.103-.005a1 1 0 0 1-.897-.995" }), /* @__PURE__ */ React.createElement("path", { fill: "#707070", d: "M13.52 13.375H15a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h1.48l1.2-6h4.64zm-8.52 1-.1.01a.5.5 0 0 0-.4.49v1a.5.5 0 0 0 .4.49l.1.01h10l.1-.01a.5.5 0 0 0 .39-.39l.01-.1v-1a.5.5 0 0 0-.4-.49l-.1-.01zm2.5-1h5l-1-5h-3z" }));
});
export {
  InterfaceChess
};
