import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceSuicidePrevention = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceSuicidePrevention", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#8943BC", fillRule: "evenodd", d: "M1.6 5.917c0-3.641 4.7-4.773 6.4-1.874 1.699-2.9 6.4-1.767 6.4 1.874 0 2.253-1.845 3.818-5.452 6.877l-.949.806-.944-.803C3.445 9.736 1.6 8.17 1.6 5.917m6.797 3.28H7.328V9.1c.003-.987.268-1.289.742-1.588.346-.22.614-.465.614-.834 0-.392-.307-.646-.688-.646-.37 0-.71.245-.727.705h-1.15c.025-1.128.86-1.664 1.883-1.664 1.12 0 1.914.576 1.914 1.562 0 .663-.344 1.077-.87 1.39-.446.268-.644.525-.65 1.075zm.163 1.127a.686.686 0 0 1-.677.677.675.675 0 1 1 0-1.348c.361 0 .674.302.677.671", clipRule: "evenodd" }));
});
export {
  InterfaceSuicidePrevention
};
