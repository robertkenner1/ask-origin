import { useRef, useEffect } from "react";
function usePrevious(value) {
  const previous = useRef();
  useEffect(() => {
    previous.current = value;
    return () => {
      previous.current = void 0;
    };
  });
  return previous.current;
}
export {
  usePrevious
};
