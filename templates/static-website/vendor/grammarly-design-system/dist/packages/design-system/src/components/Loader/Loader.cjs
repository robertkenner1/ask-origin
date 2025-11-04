"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const compound = require("../../helpers/compound.cjs");
const BrandedLoader = require("./BrandedLoader.cjs");
const CircularLoader = require("./CircularLoader.cjs");
const liveAnnouncer = require("../LiveAnnouncer/liveAnnouncer.cjs");
const Loader = ({
  accessibilityLabel = "Loading",
  shouldFocus = false,
  onLoaded,
  children,
  ...rest
}) => {
  const loaderRef = React.useRef(null);
  React.useEffect(() => {
    var _a;
    if (shouldFocus) {
      (_a = loaderRef.current) == null ? void 0 : _a.focus();
    }
    return () => {
      onLoaded == null ? void 0 : onLoaded();
      liveAnnouncer.liveAnnouncer.clear("polite");
    };
  }, []);
  React.useEffect(() => {
    accessibilityLabel && liveAnnouncer.liveAnnouncer.announce(accessibilityLabel, "polite");
  }, [accessibilityLabel, liveAnnouncer.liveAnnouncer]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: loaderRef,
      role: "progressbar",
      "aria-label": accessibilityLabel,
      "aria-valuetext": "In progress",
      ...rest
    },
    children
  );
};
const LoaderComponentCompound = compound.makeCompoundComponent(Loader, "Loader", {
  Circular: CircularLoader.CircularLoader,
  Branded: BrandedLoader.BrandedLoader
});
exports.Loader = LoaderComponentCompound;
