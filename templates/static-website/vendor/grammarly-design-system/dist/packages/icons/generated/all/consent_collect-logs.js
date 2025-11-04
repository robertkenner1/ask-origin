import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const ConsentCollectLogs = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentCollectLogs", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("rect", { width: 15.3, height: 17.3, x: 2.35, y: 1.35, stroke: "#1C1C1C", strokeLinecap: "round", strokeWidth: 0.7, rx: 2.203 }), /* @__PURE__ */ React.createElement("path", { fill: "#B3F8F8", stroke: "#1C1C1C", strokeLinecap: "round", strokeWidth: 0.5, d: "M10.73 5.75c.44 0 .77.405.682.838l-1.459 7.105a.697.697 0 0 1-1.366-.28l1.459-7.106a.7.7 0 0 1 .684-.557ZM7.03 7.999a.816.816 0 1 1 .788 1.429l-1.7.894 1.7.897a.816.816 0 1 1-.788 1.428L4.872 11.4a1.244 1.244 0 0 1 0-2.155zm4.714.707c0-.628.68-1.02 1.224-.707l2.159 1.246a1.245 1.245 0 0 1 0 2.155l-2.16 1.246a.816.816 0 1 1-.787-1.427l1.7-.897-1.7-.894a.82.82 0 0 1-.436-.722Z" }));
});
export {
  ConsentCollectLogs
};
