"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
;/* empty css                                         */
let liveAnnouncerGDS = null;
const TIMEOUT_DELAY = 7e3;
let gdsLiveAnnouncerClearTimerId;
function announce(message, assertiveness = "polite", timeout = TIMEOUT_DELAY) {
  if (liveAnnouncerGDS) {
    liveAnnouncerGDS.createEmptyNode("polite");
    liveAnnouncerGDS.createEmptyNode("assertive");
  }
  if (!liveAnnouncerGDS) {
    liveAnnouncerGDS = new LiveAnnouncerGDS();
  }
  gdsLiveAnnouncerClearTimerId && clearTimeout(gdsLiveAnnouncerClearTimerId);
  gdsLiveAnnouncerClearTimerId = setTimeout(() => {
    if (liveAnnouncerGDS) {
      liveAnnouncerGDS.announce(message, assertiveness, timeout);
    }
  }, 10);
}
function clear(assertiveness) {
  if (liveAnnouncerGDS) {
    liveAnnouncerGDS.clear(assertiveness);
  }
}
function destroy() {
  if (liveAnnouncerGDS) {
    liveAnnouncerGDS.destroy();
    liveAnnouncerGDS = null;
  }
}
class LiveAnnouncerGDS {
  constructor() {
    const liveAnnouncerAlreadyExists = document.getElementById("gds-liveAnnouncer");
    this.node = document.createElement("div");
    this.node.setAttribute("id", "gds-liveAnnouncer");
    this.node.dataset.liveAnnouncer = "true";
    this.node.setAttribute(
      "style",
      "position: absolute; width: 1px; height: 1px; margin: -1px; border: 0; clip: rect(0, 0, 0, 0); overflow: hidden;"
    );
    this.assertiveLog = this.createLog("assertive");
    this.node.appendChild(this.assertiveLog);
    this.politeLog = this.createLog("polite");
    this.node.appendChild(this.politeLog);
    if (!liveAnnouncerAlreadyExists) {
      document.body.append(this.node);
    }
  }
  createLog(ariaLive) {
    const node = document.createElement("div");
    node.setAttribute("role", "status");
    node.setAttribute("aria-live", ariaLive);
    node.setAttribute("id", `gds-${ariaLive}`);
    return node;
  }
  createEmptyNode(ariaLive) {
    const node = document.getElementById(`gds-${ariaLive}`);
    if (node) {
      node.innerHTML = "<p>&nbsp;</p>";
    }
  }
  destroy() {
    if (!this.node) {
      return;
    }
    document.body.removeChild(this.node);
    this.node = null;
  }
  clearOldMessages(parent) {
    parent && parent.childNodes.forEach((item) => parent.removeChild(item));
  }
  announce(message, assertiveness = "assertive", timeout) {
    if (!this.node) {
      return;
    }
    const node = document.createElement("p");
    node.textContent = message;
    this.clearOldMessages(this.assertiveLog);
    this.clearOldMessages(this.politeLog);
    if (assertiveness === "assertive") {
      this.assertiveLog.appendChild(node);
    } else {
      this.politeLog.appendChild(node);
    }
    if (message !== "") {
      setTimeout(() => {
        node.remove();
      }, timeout);
    }
  }
  clear(assertiveness) {
    if (!this.node) {
      return;
    }
    if (!assertiveness) {
      this.assertiveLog.innerHTML = "";
      this.politeLog.innerHTML = "";
    } else if (assertiveness === "assertive") {
      this.assertiveLog.innerHTML = "";
    } else {
      this.politeLog.innerHTML = "";
    }
  }
}
const liveAnnouncer = {
  announce,
  clear,
  destroy
};
exports.liveAnnouncer = liveAnnouncer;
