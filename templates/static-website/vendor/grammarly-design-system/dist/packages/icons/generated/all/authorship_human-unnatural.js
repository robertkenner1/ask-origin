import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AuthorshipHumanUnnatural = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 22, height: 22, fill: "none", viewBox: "0 0 22 22", "aria-hidden": "true", "data-icon": "AuthorshipHumanUnnatural", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#EAFAF9", fillRule: "evenodd", d: "M6.468 18.875h7.056c2.448 0 3.976-1.37 3.976-3.886V9.082c0-2.556-1.528-3.957-3.976-3.957H6.475C4.02 5.125 2.5 6.502 2.5 9.019v5.97c-.008 2.516 1.513 3.886 3.968 3.886", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { stroke: "#027E6F", strokeLinecap: "round", strokeLinejoin: "round", d: "M17.5 11.89v3.1c0 2.515-1.528 3.885-3.976 3.885H6.468c-2.455 0-3.976-1.37-3.968-3.886V9.02c0-2.517 1.52-3.894 3.975-3.894h4.522m1.23 10.327H7.773m.838-6.272v-.018m-2.767.018v-.018m4.152 2.842v-.018m-2.77.018v-.018m1.385-2.919a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.767 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m4.152 2.824a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188m-2.77 0a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188" }), /* @__PURE__ */ React.createElement("path", { fill: "#FFF6E0", d: "M15.08 3.611h1.846v5.265H15.08z" }), /* @__PURE__ */ React.createElement("path", { fill: "#E57300", fillRule: "evenodd", d: "M15.204 1.971a.907.907 0 0 1 1.592 0l3.58 6.365c.353.628-.089 1.414-.796 1.414h-7.16c-.707 0-1.15-.786-.796-1.414zM16 3.75c.31 0 .563.252.563.563v1.875a.562.562 0 1 1-1.125 0V4.313c0-.311.251-.563.562-.563m.563 4.313a.562.562 0 1 1-1.125 0 .562.562 0 0 1 1.124 0", clipRule: "evenodd" }));
});
export {
  AuthorshipHumanUnnatural
};
