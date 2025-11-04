import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceFolderRename = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceFolderRename", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "m7.121 3.22-.414.28zm.925 1.36.413-.28zM2.5 8.4a.5.5 0 0 0 1 0zm4.167 3.1a.5.5 0 0 0 0 1zM2 13l-.49-.098-.147.735.735-.147zm.3-1.5-.354-.354a.5.5 0 0 0-.136.256zm1.2 1.2.098.49a.5.5 0 0 0 .256-.136zM8 8.2l.354.354a.5.5 0 0 0 0-.708zM6.8 7l.354-.354a.5.5 0 0 0-.708 0zM3.5 3.5h3.207v-1H3.5zm3.207 0 .925 1.362.827-.562-.924-1.362zM8.46 5.3H13.5v-1H8.46zm5.041 0v6.2h1V5.3zm-10 3.1V3.5h-1v4.9zm10 3.1H6.667v1H13.5zm0 0v1a1 1 0 0 0 1-1zm0-6.2h1a1 1 0 0 0-1-1zm-5.868-.438a1 1 0 0 0 .827.438v-1zM6.707 3.5l.828-.562a1 1 0 0 0-.828-.438zM3.5 2.5a1 1 0 0 0-1 1h1zM2.49 13.098l.3-1.5-.98-.196-.3 1.5zm-.392.392 1.5-.3-.196-.98-1.5.3zm6.256-5.644-1.2-1.2-.708.708 1.2 1.2zm-5.7 4.008 4.5-4.5-.708-.708-4.5 4.5zm1.2 1.2 4.5-4.5-.708-.708-4.5 4.5z" }));
});
export {
  InterfaceFolderRename
};
