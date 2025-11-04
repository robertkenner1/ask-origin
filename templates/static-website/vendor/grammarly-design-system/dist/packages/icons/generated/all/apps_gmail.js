import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsGmail = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsGmail", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#4285F4", d: "M6.136 15.225V9.84L4.44 8.31l-1.522-.848v6.813c0 .526.433.95.966.95z" }), /* @__PURE__ */ React.createElement("path", { fill: "#34A853", d: "M13.864 15.225h2.253a.96.96 0 0 0 .966-.95V7.462l-1.724.972-1.495 1.405z" }), /* @__PURE__ */ React.createElement("path", { fill: "#EA4335", d: "m6.137 9.839-.231-2.105.23-2.014L10 8.57l3.864-2.851.258 1.905-.258 2.214L10 12.69z" }), /* @__PURE__ */ React.createElement("path", { fill: "#FBBC04", d: "M13.864 5.72v4.118l3.22-2.376V6.195c0-1.176-1.364-1.846-2.319-1.141z" }), /* @__PURE__ */ React.createElement("path", { fill: "#C5221F", d: "m2.917 7.462 1.48 1.093 1.74 1.283V5.72l-.902-.665c-.956-.705-2.318-.035-2.318 1.14z" }));
});
export {
  AppsGmail
};
