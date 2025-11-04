import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceClear = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 18, height: 18, fill: "none", viewBox: "0 0 18 18", "aria-hidden": "true", "data-icon": "InterfaceClear", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M6.902 4.44a.5.5 0 1 0 0 1h3.305l-.57 2.708a.5.5 0 1 0 .978.206l.613-2.914H15.5a.5.5 0 0 0 0-1zM4.854 4.586a.5.5 0 1 0-.708.707l10 10a.5.5 0 0 0 .708-.707zM9.789 12.203a.5.5 0 0 0-.977-.213l-.646 2.968a.5.5 0 1 0 .977.213z" }));
});
export {
  InterfaceClear
};
