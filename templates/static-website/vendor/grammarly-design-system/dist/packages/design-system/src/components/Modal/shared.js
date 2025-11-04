import * as React from "react";
const ANIMATION_DURATION_MS = 200;
const useExitAnimationState = (isOpen, prefersReducedMotion) => {
  const [exited, setExited] = React.useState(!isOpen);
  React.useEffect(() => {
    let timeoutId = null;
    if (!isOpen && !exited) {
      timeoutId = setTimeout(
        () => {
          setExited(true);
        },
        prefersReducedMotion ? 0 : ANIMATION_DURATION_MS
      );
    } else if (isOpen) {
      setExited(false);
    }
    return () => {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen, exited, prefersReducedMotion]);
  return exited;
};
export {
  useExitAnimationState
};
