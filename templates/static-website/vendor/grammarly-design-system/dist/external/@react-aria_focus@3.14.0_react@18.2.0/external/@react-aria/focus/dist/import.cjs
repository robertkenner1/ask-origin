"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import$1 = require("../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const _import = require("../../../../../@react-aria_interactions@3.17.0_react@18.2.0/external/@react-aria/interactions/dist/import.cjs");
function $6a99195332edec8b$export$80f3e147d781571c(element) {
  if (_import.getInteractionModality() === "virtual") {
    let lastFocusedElement = document.activeElement;
    _import$1.runAfterTransition(() => {
      if (document.activeElement === lastFocusedElement && document.contains(element)) _import$1.focusWithoutScrolling(element);
    });
  } else _import$1.focusWithoutScrolling(element);
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
let $e6afbd83fe6ebbd2$var$FocusableContext = /* @__PURE__ */ React.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
  let context = React.useContext($e6afbd83fe6ebbd2$var$FocusableContext) || {};
  _import$1.useSyncRef(context, ref);
  let { ref: _, ...otherProps } = context;
  return otherProps;
}
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = _import.useFocus(props);
  let { keyboardProps } = _import.useKeyboard(props);
  let interactions = _import$1.mergeProps(focusProps, keyboardProps);
  let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = React.useRef(props.autoFocus);
  React.useEffect(() => {
    if (autoFocusRef.current && domRef.current) $6a99195332edec8b$export$80f3e147d781571c(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  return {
    focusableProps: _import$1.mergeProps({
      ...interactions,
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : void 0
    }, interactionProps)
  };
}
exports.focusSafely = $6a99195332edec8b$export$80f3e147d781571c;
exports.isElementInChildOfActiveScope = $9bf71ea28793e738$export$1258395f99bf9cbf;
exports.useFocusable = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c;
