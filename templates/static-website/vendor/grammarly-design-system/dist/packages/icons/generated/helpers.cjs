"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const generateId = () => {
  return Math.random().toString(36).slice(2, 9);
};
exports.generateId = generateId;
