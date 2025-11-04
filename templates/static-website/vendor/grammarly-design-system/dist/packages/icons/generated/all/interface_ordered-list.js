import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceOrderedList = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceOrderedList", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M2.48 13h-.5v.5h.5zm.175-.59-.308-.395zm1.739-1.36.307.394zM3.44 6.637h-.5v.5h.5zM3.44 3h.5v-.5h-.5zm3.84.41a.5.5 0 0 0 0 1zm6.72 1a.5.5 0 0 0 0-1zM7.28 12.5a.5.5 0 0 0 0 1zm6.72 1a.5.5 0 0 0 0-1zM7.28 7.955a.5.5 0 1 0 0 1zm6.72 1a.5.5 0 0 0 0-1zM2.98 10.727v-.454h-1v.454zm.92-.454v.765h1v-.765zm.186.383-1.74 1.36.616.787 1.74-1.359zM1.98 12.76V13h1v-.24zm.5.74h2.4v-1h-2.4zm-.133-1.485a.95.95 0 0 0-.367.745h1a.06.06 0 0 1-.018.043zm1.553-.977c0-.155.073-.294.186-.382l.615.788a.52.52 0 0 0 .199-.406zm-.46-1.174c.28 0 .46.208.46.409h1c0-.804-.68-1.41-1.46-1.41zm-.46.409c0-.2.18-.41.46-.41v-1c-.78 0-1.46.606-1.46 1.41zM2 7.136h2.88v-1H2zm2.88-1H3.44v1h1.44zm-.94.5V3h-1v3.636zM3.44 2.5H2v1h1.44zm3.84 1.91H14v-1H7.28zm0 9.09H14v-1H7.28zm0-4.545H14v-1H7.28z" }));
});
export {
  InterfaceOrderedList
};
