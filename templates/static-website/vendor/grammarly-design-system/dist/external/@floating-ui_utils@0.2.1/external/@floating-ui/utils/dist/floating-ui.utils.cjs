"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
exports.createCoords = createCoords;
exports.floor = floor;
exports.max = max;
exports.min = min;
exports.round = round;
