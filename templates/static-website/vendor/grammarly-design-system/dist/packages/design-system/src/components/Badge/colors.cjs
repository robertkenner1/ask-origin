"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const semantic_colors = require("../../../../tokens/generated/semantic_colors.cjs");
const defaultColor = { backgroundColor: semantic_colors.Color.Background.Neutral.Default };
const variantColorMap = {
  neutral: { backgroundColor: defaultColor.backgroundColor },
  business: { backgroundColor: semantic_colors.Color.Background.Neutral.Default },
  addition: { backgroundColor: semantic_colors.Color.Background.Addition.Default },
  clarity: { backgroundColor: semantic_colors.Color.Background.Clarity.Default },
  correctness: { backgroundColor: semantic_colors.Color.Background.Correctness.Default },
  critical: { backgroundColor: semantic_colors.Color.Background.Critical.Default },
  deletion: { backgroundColor: semantic_colors.Color.Background.Deletion.Default },
  delivery: { backgroundColor: semantic_colors.Color.Background.Delivery.Default },
  engagement: { backgroundColor: semantic_colors.Color.Background.Engagement.Default },
  plagiarism: { backgroundColor: semantic_colors.Color.Background.Plagiarism.Default },
  premium: {
    backgroundColor: semantic_colors.Color.Background.Premium.Default,
    color: semantic_colors.Color.Text.Premium.Default
  },
  pro: {
    backgroundColor: semantic_colors.Color.Background.Pro.Default,
    color: semantic_colors.Color.Text.Pro.Default
  },
  success: { backgroundColor: semantic_colors.Color.Background.Success.Default },
  warning: { backgroundColor: semantic_colors.Color.Background.Warning.Default }
};
const getColor = (variant) => {
  var _a;
  if (variant == null) {
    return defaultColor;
  }
  return (_a = variantColorMap[variant]) != null ? _a : defaultColor;
};
exports.getColor = getColor;
