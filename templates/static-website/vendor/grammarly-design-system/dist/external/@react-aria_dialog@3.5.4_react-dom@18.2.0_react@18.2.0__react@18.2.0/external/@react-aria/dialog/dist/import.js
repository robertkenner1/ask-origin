import { useSlotId as $bdb11010cef70236$export$b4cc09c592e8fdb8, filterDOMProps as $65484d02dcb7eb3e$export$457c3d6518dd4c6f } from "../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { focusSafely as $6a99195332edec8b$export$80f3e147d781571c } from "../../../../../@react-aria_focus@3.14.0_react@18.2.0/external/@react-aria/focus/dist/import.js";
import { useRef, useEffect } from "react";
import { useOverlayFocusContain as $337b884510726a0d$export$14c98a7594375490 } from "../../../../../@react-aria_overlays@3.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/external/@react-aria/overlays/dist/import.js";
function $40df3f8667284809$export$d55e7ee900f34e93(props, ref) {
  let { role = "dialog" } = props;
  let titleId = $bdb11010cef70236$export$b4cc09c592e8fdb8();
  titleId = props["aria-label"] ? void 0 : titleId;
  let isRefocusing = useRef(false);
  useEffect(() => {
    if (ref.current && !ref.current.contains(document.activeElement)) {
      $6a99195332edec8b$export$80f3e147d781571c(ref.current);
      let timeout = setTimeout(() => {
        if (document.activeElement === ref.current) {
          isRefocusing.current = true;
          ref.current.blur();
          $6a99195332edec8b$export$80f3e147d781571c(ref.current);
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
  $337b884510726a0d$export$14c98a7594375490();
  return {
    dialogProps: {
      ...$65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
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
export {
  $40df3f8667284809$export$d55e7ee900f34e93 as useDialog
};
