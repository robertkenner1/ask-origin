import React__default from "react";
function useTruncateText(ref, children, maxLines, adjustTruncationOffset = (index) => index) {
  const truncationEnabled = Boolean(maxLines) && typeof children === "string";
  const childrenAsString = truncationEnabled ? typeof children === "string" ? children : "" : "";
  const [state, setState] = React__default.useState({
    needsRecalculation: true,
    children: childrenAsString,
    overflowText: null,
    childrenBeforeClamping: childrenAsString,
    clientWidthWhenClamped: 0,
    clientHeightWhenClamped: 0
  });
  const onResize = React__default.useCallback(() => {
    if (truncationEnabled) {
      setState(
        (s) => ref.current && ref.current.clientWidth === s.clientWidthWhenClamped && ref.current.clientHeight === s.clientHeightWhenClamped ? s : { ...s, children: s.childrenBeforeClamping, needsRecalculation: true }
      );
    }
  }, [setState, ref, truncationEnabled]);
  React__default.useLayoutEffect(() => {
    setState((s) => s.needsRecalculation ? s : { ...s, needsRecalculation: true });
  }, [maxLines]);
  React__default.useLayoutEffect(() => {
    if (truncationEnabled && children !== state.childrenBeforeClamping && typeof children === "string") {
      setState((s) => ({
        ...s,
        childrenBeforeClamping: children,
        children,
        needsRecalculation: true
      }));
    }
  }, [setState, truncationEnabled, children, state.childrenBeforeClamping]);
  React__default.useLayoutEffect(() => {
    if (truncationEnabled && state.needsRecalculation && ref.current) {
      const overflowIndex = findOverflowIndexOfFirstChild(ref.current);
      const text = state.childrenBeforeClamping;
      const offset = overflowIndex === null ? null : adjustTruncationOffset(overflowIndex, text);
      const truncatedText = offset !== null ? text.slice(0, offset).trimEnd() : text;
      const overflowText = offset !== null ? text.slice(truncatedText.length) : null;
      setState({
        clientHeightWhenClamped: ref.current.clientHeight,
        clientWidthWhenClamped: ref.current.clientWidth,
        childrenBeforeClamping: state.childrenBeforeClamping,
        children: truncatedText,
        overflowText,
        needsRecalculation: false
      });
    }
  }, [ref, setState, truncationEnabled, state.needsRecalculation, state.childrenBeforeClamping]);
  React__default.useEffect(() => {
    if (typeof window !== "undefined" && window.ResizeObserver !== void 0) {
      const resizeObserver = new ResizeObserver(onResize);
      if (ref.current !== null) {
        resizeObserver.observe(ref.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }
    return () => {
    };
  }, [ref, onResize]);
  return {
    overflowText: state.overflowText,
    children: truncationEnabled ? state.children : children
  };
}
function findOverflowIndexOfFirstChild(element) {
  const textNode = element.firstChild;
  if ((textNode == null ? void 0 : textNode.nodeType) !== 3) {
    return null;
  }
  const text = textNode.textContent || "";
  let start = 0;
  let middle = 0;
  let end = text.length;
  const range = new Range();
  range.setStart(textNode, 0);
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (middle === text.length) {
      return null;
    }
    range.setEnd(textNode, middle);
    const rangeRect = range.getBoundingClientRect();
    if (rangeRect.height <= element.clientHeight) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return Math.max(0, middle);
}
export {
  useTruncateText
};
