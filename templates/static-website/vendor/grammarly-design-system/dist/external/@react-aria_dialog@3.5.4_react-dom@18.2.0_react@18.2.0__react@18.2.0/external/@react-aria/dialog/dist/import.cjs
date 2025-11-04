"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _import = require("../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const _import$1 = require("../../../../../@react-aria_focus@3.14.0_react@18.2.0/external/@react-aria/focus/dist/import.cjs");
const React = require("react");
const _import$2 = require("../../../../../@react-aria_overlays@3.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@react-aria/overlays/dist/import.cjs");
function $40df3f8667284809$export$d55e7ee900f34e93(props, ref) {
  let { role = "dialog" } = props;
  let titleId = _import.useSlotId();
  titleId = props["aria-label"] ? void 0 : titleId;
  let isRefocusing = React.useRef(false);
  React.useEffect(() => {
    if (ref.current && !ref.current.contains(document.activeElement)) {
      _import$1.focusSafely(ref.current);
      let timeout = setTimeout(() => {
        if (document.activeElement === ref.current) {
          isRefocusing.current = true;
          ref.current.blur();
          _import$1.focusSafely(ref.current);
          isRefocusing.current = false;
        }
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [
    ref
  ]);
  _import$2.useOverlayFocusContain();
  return {
    dialogProps: {
      ..._import.filterDOMProps(props, {
        labelable: true
      }),
      role,
      tabIndex: -1,
      "aria-labelledby": props["aria-labelledby"] || titleId,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (e) => {
        if (isRefocusing.current) e.stopPropagation();
      }
    },
    titleProps: {
      id: titleId
    }
  };
}
exports.useDialog = $40df3f8667284809$export$d55e7ee900f34e93;
