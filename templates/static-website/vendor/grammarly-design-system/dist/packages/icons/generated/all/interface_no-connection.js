import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceNoConnection = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceNoConnection", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M10 2.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5m4.92 10.08c.23.23.23.61 0 .85-.12.12-.27.18-.42.18s-.31-.06-.42-.18l-.83-.83-.83.83c-.12.12-.27.18-.42.18s-.31-.06-.42-.18a.61.61 0 0 1 0-.85l.83-.83-.83-.83a.61.61 0 0 1 0-.85.6.6 0 0 1 .85 0l.83.83.83-.83a.61.61 0 0 1 .85 0 .6.6 0 0 1 0 .85l-.83.83.83.83zm-.08-3.78c-.31.19-.71.09-.89-.21-.05-.08-1.25-1.94-3.95-1.94-2.01 0-3.19 1.03-3.68 1.6.9 1.15 3.5 4.48 4.19 5.33.23.28.18.69-.1.91a.62.62 0 0 1-.41.14c-.19 0-.38-.08-.51-.24-.83-1.03-4.51-5.74-4.51-5.74a.65.65 0 0 1-.04-.74c.06-.1 1.61-2.56 5.05-2.56s4.99 2.46 5.05 2.56c.19.31.09.71-.21.89z", clipRule: "evenodd" }));
});
export {
  InterfaceNoConnection
};
