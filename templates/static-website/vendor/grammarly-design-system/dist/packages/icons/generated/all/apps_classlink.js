import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsClasslink = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsClasslink", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#0A4D7F", d: "M6.514 11.21c-.651.736 0 1.09 0 1.09.028.014.042.028.07.028a3 3 0 0 1-.07-1.118M10.745 12.158c-.51.34-1.104 1.5-1.104 1.5H9.33c.198-.438.325-.806.396-1.103l-.127.042a6 6 0 0 1-1.784.325c.58.864 1.642 1.02 1.642 1.02 1.486.198 2.605-.609 3.213-1.203-1.231-.68-1.925-.58-1.925-.58" }), /* @__PURE__ */ React.createElement("path", { fill: "#0A4D7F", d: "M15.544 8.973s.977-2.434-1.26-4.105c0 0-3.58-2.363-5.59 1.586 0 0-1.43-1.43-3.2-.326-1.514.948-1.26 2.237-1.118 2.874 0 0-2.859.835-2.703 3.878.113 2.265 2.293 2.944 3.142 3.128.184.043.382.057.566.057h9.37c.185 0 .369-.015.553-.057.849-.17 3.071-.85 3.029-3.255-.057-2.973-2.789-3.78-2.789-3.78m-6.143 5.45c-1.897-.029-2.576-1.444-2.576-1.444-.042-.07-.07-.156-.099-.226-.524-.199-.835-.567-.75-1.105.07-.552.693-1.09.693-1.09.368-1.118 1.175-1.882 1.175-1.882s.68-.722 1.43-1.104l1.288.198C7.632 8.96 7.49 11.422 7.49 11.422c-.014.368.029.694.114.962.212-.014.382-.042.382-.042a7.7 7.7 0 0 0 1.868-.538c-.014-.481-.24-.609-.24-.609s-.27-.297-1.36-.48l.1-.142s.538.113 1.146 0c.665-.128 1.274-.58 1.954-1.515l.325-.014c-.665.878-.708 1.543-.594 1.982.665-.496.976-.92.976-.92 1.19-1.67-.467-1.416-.467-1.416l.496-.594c2.533.552.212 2.83.212 2.83a7 7 0 0 1-.863.722c.042.043.48.496 1.316.906.226-.24.34-.41.34-.41l.325.056c-1.981 2.407-4.119 2.223-4.119 2.223m.892-4.742a.532.532 0 1 1-.538-.552.516.516 0 0 1 .538.552" }));
});
export {
  AppsClasslink
};
