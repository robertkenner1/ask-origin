import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AgentsPlagiarism = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsPlagiarism", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: plagiarism") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M13.725 4.375c1.892 0 3.15 1.408 3.15 3.483 0 1.434-.333 2.934-1.083 4.259-1.134 1.991-2.842 3.508-3.85 3.508-.584 0-1-.4-1-.958 0-.392.216-.742.575-.95 1.041-.592 1.9-1.4 2.366-2.709.1-.283-.116-.558-.416-.6-1.692-.225-2.875-1.433-2.875-2.966 0-1.675 1.458-3.067 3.133-3.067M6.258 4.375c1.892 0 3.15 1.408 3.15 3.483 0 1.434-.333 2.934-1.083 4.259-1.133 1.991-2.842 3.508-3.85 3.508-.583 0-1-.4-1-.958 0-.392.217-.742.575-.95 1.042-.592 1.9-1.4 2.367-2.709.1-.283-.117-.558-.417-.6-1.692-.225-2.875-1.433-2.875-2.966 0-1.684 1.458-3.067 3.133-3.067" }));
});
export {
  AgentsPlagiarism
};
