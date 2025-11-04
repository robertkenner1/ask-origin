import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const FlagGb = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "FlagGb", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#006", fillRule: "evenodd", d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#F9FAFF", d: "M14 4.252A8 8 0 0 0 12 4c-.69 0-1.36.088-2 .252v4.127L7.212 5.59a8 8 0 0 0-2.026 2.216L7.379 10H4.252A8 8 0 0 0 4 12c0 .69.088 1.36.252 2h4.127L5.59 16.788a8 8 0 0 0 2.216 2.026L10 16.621v3.127c.64.165 1.31.252 2 .252s1.36-.087 2-.252v-3.127l2.193 2.193a8 8 0 0 0 2.217-2.026L15.62 14h4.127c.165-.64.252-1.31.252-2s-.087-1.36-.252-2h-3.127l2.193-2.193a8 8 0 0 0-2.026-2.216L14 8.379z" }), /* @__PURE__ */ React.createElement("path", { fill: "#EA1537", d: "M5.467 7.38q.438-.616.981-1.14L10 9.792V10H8.087z" }), /* @__PURE__ */ React.createElement("path", { fill: "#EA1537", d: "M4.062 11H11V4.062a8 8 0 0 1 2 0V11h6.938a8 8 0 0 1 0 2H13v6.938a8 8 0 0 1-2 0V13H4.062a8 8 0 0 1 0-2" }), /* @__PURE__ */ React.createElement("path", { fill: "#EA1537", d: "M7.388 18.538a8 8 0 0 1-1.142-.98L9.805 14H10v1.926zM18.106 17.17a8 8 0 0 1-1.072 1.048L14 15.185V14h.937zM17.19 5.911q.571.49 1.045 1.076L15.222 10H14v-.899z" }));
});
export {
  FlagGb
};
