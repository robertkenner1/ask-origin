import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceFileXls = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFileXls", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M5.68 2.499h-.5v6.586h1V3.499h4.164v3.689H13.9v1.897h1V6.186l-.133-.144-3.133-3.383-.148-.16H5.68m5.664 3.689V3.816l2.196 2.372zM2.58 9.875h-.5v7.75h16.107v-7.75H2.58m.5 6.75v-5.75h14.107v5.75zm9.635-3.98c.323 0 .521.147.546.398h.649c-.01-.57-.478-.964-1.19-.964-.702 0-1.216.388-1.213.97-.002.471.331.741.872.871l.348.088c.348.084.542.184.544.4-.002.234-.224.393-.567.393-.352 0-.605-.162-.627-.483h-.655c.018.693.513 1.05 1.29 1.05.78 0 1.24-.373 1.242-.959-.002-.533-.404-.816-.96-.94l-.287-.07c-.278-.063-.511-.166-.507-.396 0-.207.183-.358.515-.358m-1.505 2.678H9.16v-3.2h.677v2.642h1.372zm-3.783-2.11-.645-1.09h-.767l.983 1.6-1.002 1.6h.775l.656-1.092h.025l.657 1.092h.778l-.999-1.6.977-1.6H8.1l-.649 1.09z", clipRule: "evenodd" }));
});
export {
  InterfaceFileXls
};
