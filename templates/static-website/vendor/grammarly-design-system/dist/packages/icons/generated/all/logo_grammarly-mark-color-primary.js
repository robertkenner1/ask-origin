import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoGrammarlyMarkColorPrimary = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, fill: "none", viewBox: "0 0 32 32", "aria-hidden": "true", "data-icon": "LogoGrammarlyMarkColorPrimary", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: grammarly mark color primary") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-grammarly-primary)", d: "M0 16C0 7.164 7.163 0 16 0c8.839 0 16 7.163 16 16 0 7.733-5.482 14.183-12.773 15.676-1.041.214-2.12.324-3.222.324H0z" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-grammarly-light)", d: "m19.862 14.485-1.697 2.94h5.945c-.932 5.116-6.62 8.599-12.305 5.653a6.7 6.7 0 0 1-2.861-2.833c-3.27-6.227 1.197-12.491 7.092-12.491 2.431 0 4.62 1.064 6.124 2.752l1.523-2.64a11.08 11.08 0 0 0-8.433-3.02c-5.562.383-10.07 4.993-10.342 10.56C4.6 21.798 9.71 27.093 16.033 27.093s11.14-4.998 11.14-11.14c0-.5-.038-.989-.101-1.468z" }));
});
export {
  LogoGrammarlyMarkColorPrimary
};
