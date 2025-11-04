import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AuthorshipHumanProofreading = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AuthorshipHumanProofreading", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#EAFAF9", fillRule: "evenodd", d: "M6.468 16.875h7.056c2.448 0 3.976-1.37 3.976-3.886V7.082c0-2.556-1.528-3.957-3.976-3.957H6.475C4.02 3.125 2.5 4.502 2.5 7.019v5.97c-.008 2.516 1.513 3.886 3.968 3.886", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { stroke: "#027E6F", strokeLinecap: "round", strokeLinejoin: "round", d: "M17.5 9.89v3.1c0 2.515-1.528 3.885-3.976 3.885H6.468c-2.455 0-3.976-1.37-3.968-3.886V7.02c0-2.517 1.52-3.894 3.975-3.894h4.522m1.23 10.327H7.773m.838-6.272v-.018m-2.767.018v-.018m4.152 2.842v-.018m-2.77.018v-.018m1.385-2.919a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.767 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m4.152 2.824a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.77 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188" }), /* @__PURE__ */ React.createElement("path", { fill: "#EAFAF9", stroke: "#027E6F", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.894 2.837c.282-.49.908-.658 1.398-.375l.755.436c.49.282.657.908.374 1.398L15.07 8.37a1.86 1.86 0 0 1-1.013.831l-1.472.397-.256-1.394a1.86 1.86 0 0 1 .214-1.294z" }));
});
export {
  AuthorshipHumanProofreading
};
