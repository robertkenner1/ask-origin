import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsLegalsifter = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsLegalsifter", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#585291", d: "M17.467 10c0 4.113-3.354 7.467-7.467 7.467A7.45 7.45 0 0 1 2.533 10c0-4.113 3.354-7.467 7.467-7.467S17.467 5.887 17.467 10m-5.947 2.057h2.191c.179.492.67.715 1.162.536s.716-.67.537-1.162-.67-.716-1.162-.537c-.269.09-.448.313-.537.537h-2.46l-2.19 2.548a.89.89 0 0 0-1.162.537.89.89 0 0 0 .536 1.162.89.89 0 0 0 1.163-.536c.089-.269.089-.537-.045-.76zm-.76-2.46L7.273 5.53a.896.896 0 0 0-.403-1.207.896.896 0 0 0-1.207.402.896.896 0 0 0 .402 1.207.77.77 0 0 0 .76 0l3.13 3.622-3.532 4.158c-.492-.179-.983.09-1.162.537-.18.491.09.983.536 1.162.492.179.984-.09 1.163-.537a.9.9 0 0 0-.09-.76zm-2.772 0L5.753 7.005c.134-.313-.045-.626-.313-.76a.617.617 0 0 0-.76.358c-.135.313.044.626.312.76.09.045.18.045.269.045l1.922 2.235-2.593 3.04a.6.6 0 0 0-.67.492.6.6 0 0 0 .491.671.6.6 0 0 0 .67-.492v-.268zm7.198-.312h-1.833L10.76 6.289a.944.944 0 0 0-.358-1.252.944.944 0 0 0-1.251.358c-.269.447 0 1.073.402 1.296.223.135.536.135.76.045l2.727 3.175h2.102c.179.491.67.715 1.162.536s.716-.67.537-1.162c-.18-.492-.67-.716-1.163-.537-.179.09-.402.313-.492.537" }));
});
export {
  AppsLegalsifter
};
