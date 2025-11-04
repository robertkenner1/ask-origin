import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceHelp = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceHelp", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-.96 3.448c-.22.239-.34.568-.34.91h-1c0-.566.196-1.146.605-1.589.417-.45 1.026-.73 1.785-.73 1.06 0 2.39.75 2.39 2.32 0 1.096-.684 1.656-1.184 2.066l-.017.013c-.528.433-.834.703-.834 1.256l-.001.27v.013l-.001.323h-1v-.343l.002-.263c0-1.048.668-1.594 1.155-1.992l.046-.037c.516-.423.834-.713.834-1.306 0-.856-.705-1.32-1.39-1.32-.5 0-.836.177-1.05.409M8.8 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0", clipRule: "evenodd" }));
});
export {
  InterfaceHelp
};
