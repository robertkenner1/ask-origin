import { Color } from "../../../../tokens/generated/semantic_colors.js";
const defaultColor = { backgroundColor: Color.Background.Neutral.Default };
const variantColorMap = {
  neutral: { backgroundColor: defaultColor.backgroundColor },
  business: { backgroundColor: Color.Background.Neutral.Default },
  addition: { backgroundColor: Color.Background.Addition.Default },
  clarity: { backgroundColor: Color.Background.Clarity.Default },
  correctness: { backgroundColor: Color.Background.Correctness.Default },
  critical: { backgroundColor: Color.Background.Critical.Default },
  deletion: { backgroundColor: Color.Background.Deletion.Default },
  delivery: { backgroundColor: Color.Background.Delivery.Default },
  engagement: { backgroundColor: Color.Background.Engagement.Default },
  plagiarism: { backgroundColor: Color.Background.Plagiarism.Default },
  premium: {
    backgroundColor: Color.Background.Premium.Default,
    color: Color.Text.Premium.Default
  },
  pro: {
    backgroundColor: Color.Background.Pro.Default,
    color: Color.Text.Pro.Default
  },
  success: { backgroundColor: Color.Background.Success.Default },
  warning: { backgroundColor: Color.Background.Warning.Default }
};
const getColor = (variant) => {
  var _a;
  if (variant == null) {
    return defaultColor;
  }
  return (_a = variantColorMap[variant]) != null ? _a : defaultColor;
};
export {
  getColor
};
