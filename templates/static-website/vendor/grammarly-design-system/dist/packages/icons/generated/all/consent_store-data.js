import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const ConsentStoreData = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentStoreData", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#fff", stroke: "#1C1C1C", strokeLinecap: "round", strokeWidth: 0.7, d: "M4.4 4.437h1.418c.585 0 1.117.339 1.365.869a2.21 2.21 0 0 0 1.999 1.271H15.6a2.05 2.05 0 0 1 2.05 2.05v6.974a2.05 2.05 0 0 1-2.05 2.05H4.399a2.05 2.05 0 0 1-2.05-2.05V6.486a2.05 2.05 0 0 1 2.05-2.05Z" }), /* @__PURE__ */ React.createElement("path", { fill: "#B3F8F8", stroke: "#1C1C1C", strokeLinecap: "round", strokeWidth: 0.7, d: "M13.702 8.684c.37.387.37.997-.001 1.383l-2.765 2.884a.993.993 0 0 1-1.433 0l-2.766-2.886A1 1 0 1 1 8.18 8.683l1.032 1.075v-7.1a1.008 1.008 0 1 1 2.016 0v7.098l1.028-1.073a1 1 0 0 1 1.446 0Z" }));
});
export {
  ConsentStoreData
};
