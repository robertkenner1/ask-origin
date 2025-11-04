import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AuthorshipFingerprintToggle = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AuthorshipFingerprintToggle", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#707070", strokeLinecap: "round", strokeWidth: 1.25, d: "M8.462 16.667v-6.603a1.538 1.538 0 0 1 3.077 0v1.603m0 2.778v2.222M14.103 15v-4.936a4.103 4.103 0 1 0-8.205 0v1.047m0 4.445v-1.667m-2.564-1.667v-2.158a6.667 6.667 0 0 1 11.2-4.887m2.133 8.156v-3.269c0-.803-.142-1.573-.402-2.286" }));
});
export {
  AuthorshipFingerprintToggle
};
