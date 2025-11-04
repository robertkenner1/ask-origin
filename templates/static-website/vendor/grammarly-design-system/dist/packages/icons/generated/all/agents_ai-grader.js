import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AgentsAiGrader = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsAiGrader", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: ai grader") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", d: "m15.677 14.048-.173-.598a2.27 2.27 0 0 0-2.184-1.644h-1.385a.357.357 0 0 1-.288-.57l1.514-2.083c1.86-2.552.1-6.258-3.05-6.236-3.15.021-4.931 3.576-3.085 6.113l1.6 2.2c.173.237 0 .569-.288.569H6.954c-1.017 0-1.904.67-2.185 1.644l-.173.598c-.13.454-.043.93.245 1.312.289.382.721.598 1.197.598h.065v.39c0 .41.331.742.742.742h6.59a.74.74 0 0 0 .742-.742v-.39h.065c.476 0 .909-.216 1.197-.598a1.48 1.48 0 0 0 .245-1.312zm-7.685-7.31c.483-.152.944-.368 1.29-.714.346-.339.563-.8.714-1.29.05-.159.317-.159.368 0 .151.483.367.944.713 1.29.34.346.8.562 1.29.714.16.05.16.31 0 .36-.49.152-.95.375-1.297.714-.346.339-.562.8-.714 1.29-.05.16-.31.16-.36 0-.151-.482-.368-.951-.714-1.297-.339-.346-.8-.562-1.29-.714-.159-.05-.159-.317 0-.368zm6.25 7.772H6.031l-.05-.065.172-.599a.83.83 0 0 1 .793-.598h3.144l.043.065.043-.065h3.143c.368 0 .693.245.793.598l.166.65s-.036.02-.043.02z" }));
});
export {
  AgentsAiGrader
};
