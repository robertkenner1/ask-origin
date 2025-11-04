import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const EmojiConcerned = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiConcerned", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-erneda)` }, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-ernedb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React.createElement("path", { fill: "#917524", d: "M6.517 8.528c1.639.074 3.504-.617 4.216-1.49.149-.184-.226-.956-.37-.819-1.113 1.056-2.624 1.788-4.14 1.816-.204.004.048.482.294.493M17.482 8.527c-1.638.075-3.503-.616-4.214-1.488-.15-.184.225-.957.37-.82 1.113 1.055 2.624 1.788 4.14 1.816.203.004-.05.482-.296.492" }), /* @__PURE__ */ React.createElement("path", { fill: "#302C3B", d: "M8.875 12.313a1.406 1.406 0 1 0 0-2.813 1.406 1.406 0 0 0 0 2.813M15.125 12.313a1.406 1.406 0 1 0 0-2.813 1.406 1.406 0 0 0 0 2.813M9.116 17.102c1.757-1.456 4.013-1.455 5.77 0 .248.206.279-.016.202-.19-1.3-2.97-4.876-2.969-6.176 0-.077.174-.046.396.204.19" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-ernedb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-erneda` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
export {
  EmojiConcerned
};
