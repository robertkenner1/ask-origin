import React__default, { useRef, useEffect, useContext } from "react";
import { runAfterTransition as $bbed8b41f857bcc0$export$24490316f764c430, focusWithoutScrolling as $7215afc6de606d6b$export$de79e2c695e052f3, mergeProps as $3ef42575df84b30b$export$9d1611c77c2fe928, useSyncRef as $e7801be82b4b2a53$export$4debdb1a3f0fa79e } from "../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { getInteractionModality as $507fabe10e71c6fb$export$630ff653c5ada6a9, useFocus as $a1ea59d68270f0dd$export$f8168d8dd8fd66e6, useKeyboard as $46d819fcbaf35654$export$8f71654801c2f7cd } from "../../../../../@react-aria_interactions@3.17.0_react@18.2.0/external/@react-aria/interactions/dist/import.js";
function $6a99195332edec8b$export$80f3e147d781571c(element) {
  if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === "virtual") {
    let lastFocusedElement = document.activeElement;
    $bbed8b41f857bcc0$export$24490316f764c430(() => {
      if (document.activeElement === lastFocusedElement && document.contains(element)) $7215afc6de606d6b$export$de79e2c695e052f3(element);
    });
  } else $7215afc6de606d6b$export$de79e2c695e052f3(element);
}
let $9bf71ea28793e738$var$activeScope = null;
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  return scope.some((node) => node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
  if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
  for (let { scopeRef: s } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))) {
    if ($9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
  }
  return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
  return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
class $9bf71ea28793e738$var$Tree {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore) node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null) return;
    let node = this.fastMap.get(scopeRef);
    let parentNode = node.parent;
    for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    parentNode.removeChild(node);
    if (children.size > 0) children.forEach((child) => parentNode.addChild(child));
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null) yield node;
    if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
  }
  clone() {
    let newTree = new $9bf71ea28793e738$var$Tree();
    for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, node.parent.scopeRef, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
}
class $9bf71ea28793e738$var$TreeNode {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
}
let $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();
let $e6afbd83fe6ebbd2$var$FocusableContext = /* @__PURE__ */ React__default.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
  let context = useContext($e6afbd83fe6ebbd2$var$FocusableContext) || {};
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref);
  let { ref: _, ...otherProps } = context;
  return otherProps;
}
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
  let { keyboardProps } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
  let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, keyboardProps);
  let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = useRef(props.autoFocus);
  useEffect(() => {
    if (autoFocusRef.current && domRef.current) $6a99195332edec8b$export$80f3e147d781571c(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  return {
    focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928({
      ...interactions,
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : void 0
    }, interactionProps)
  };
}
export {
  $6a99195332edec8b$export$80f3e147d781571c as focusSafely,
  $9bf71ea28793e738$export$1258395f99bf9cbf as isElementInChildOfActiveScope,
  $e6afbd83fe6ebbd2$export$4c014de7c8940b4c as useFocusable
};
