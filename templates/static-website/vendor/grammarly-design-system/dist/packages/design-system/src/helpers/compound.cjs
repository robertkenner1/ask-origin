"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
// @__NO_SIDE_EFFECTS__
function makeCompoundComponent(parent, parentDisplayName, childrenComponents) {
  const compound = parent;
  compound.displayName = parentDisplayName;
  for (const name of Object.keys(childrenComponents)) {
    const child = childrenComponents[name];
    child.displayName = `${parentDisplayName}${String(name)}`;
    compound[name] = child;
  }
  return compound;
}
exports.makeCompoundComponent = makeCompoundComponent;
