/**
 * Content type detection utilities for Deep Writer
 */

export type ContentType = "essay" | "prd" | "research" | "resume" | "custom";

interface ContentTypeMatch {
  type: ContentType;
  confidence: number;
}

/**
 * Detects the most likely content type from a user prompt
 * @param prompt The user's input prompt
 * @returns The detected content type and confidence score
 */
export function detectContentType(prompt: string): ContentTypeMatch {
  const normalizedPrompt = prompt.toLowerCase();

  // Keywords for different content types
  const typeKeywords: Record<ContentType, string[]> = {
    essay: [
      "essay",
      "thesis",
      "argument",
      "introduction",
      "conclusion",
      "academic",
      "paragraph",
      "topic sentence",
      "college",
      "university",
      "school",
      "assignment",
      "persuasive",
      "analytical",
      "narrative",
      "compare and contrast",
    ],
    prd: [
      "product",
      "requirements",
      "spec",
      "specification",
      "feature",
      "user story",
      "user flow",
      "problem statement",
      "solution",
      "implementation",
      "market",
      "customer",
      "business",
      "stakeholder",
      "roadmap",
      "milestone",
      "sprint",
      "development",
      "product manager",
      "prd",
    ],
    research: [
      "research",
      "study",
      "findings",
      "data",
      "analysis",
      "hypothesis",
      "experiment",
      "methodology",
      "results",
      "abstract",
      "literature review",
      "discussion",
      "paper",
      "journal",
      "investigation",
      "statistical",
      "science",
      "survey",
      "qualitative",
      "quantitative",
      "sample size",
    ],
    resume: [
      "resume",
      "cv",
      "curriculum vitae",
      "job",
      "career",
      "work history",
      "experience",
      "employment",
      "skills",
      "qualifications",
      "education",
      "professional",
      "hire",
      "hiring",
      "position",
      "application",
      "cover letter",
      "interview",
    ],
    custom: [], // Empty defaults - this is a fallback
  };

  // Calculate match counts for each content type
  const matchCounts: Record<ContentType, number> = {
    essay: 0,
    prd: 0,
    research: 0,
    resume: 0,
    custom: 0,
  };

  // Count keyword matches
  Object.entries(typeKeywords).forEach(([type, keywords]) => {
    keywords.forEach((keyword) => {
      // Check for whole word matches
      const regex = new RegExp(`\\b${keyword}\\b`, "i");
      if (normalizedPrompt.match(regex)) {
        matchCounts[type as ContentType] += 1;
      }
    });
  });

  // Get the type with the most matches
  let maxType: ContentType = "custom";
  let maxCount = 0;

  Object.entries(matchCounts).forEach(([type, count]) => {
    if (count > maxCount) {
      maxCount = count;
      maxType = type as ContentType;
    }
  });

  // Calculate confidence based on the difference between this type and others
  let totalMatches = Object.values(matchCounts).reduce(
    (sum, count) => sum + count,
    0,
  );

  // Default confidence
  let confidence = 0.5;

  if (totalMatches > 0) {
    // Calculate relative strength of the match
    confidence = Math.min(0.95, Math.max(0.5, (maxCount / totalMatches) * 1.5));

    // If no keywords matched or very low confidence, use custom
    if (maxCount === 0 || confidence < 0.4) {
      maxType = "custom";
      confidence = 0.5;
    }
  }

  return {
    type: maxType,
    confidence,
  };
}

/**
 * Estimates if a prompt is requesting certain types of content
 */
export function estimateContentRequirements(prompt: string): {
  needsResearch: boolean;
  needsStructure: boolean;
  needsGuidance: boolean;
} {
  const normalizedPrompt = prompt.toLowerCase();

  // Research signals
  const researchKeywords = [
    "research",
    "facts",
    "data",
    "statistics",
    "evidence",
    "findings",
    "sources",
    "information",
    "background",
    "study",
    "reference",
  ];

  // Structure signals
  const structureKeywords = [
    "outline",
    "structure",
    "organize",
    "framework",
    "format",
    "sections",
    "headings",
    "parts",
    "layout",
    "template",
  ];

  // Guidance signals
  const guidanceKeywords = [
    "guide",
    "help",
    "advice",
    "explain",
    "tips",
    "examples",
    "suggestions",
    "instructions",
    "guidance",
    "direction",
    "steps",
  ];

  const needsResearch = researchKeywords.some((keyword) =>
    normalizedPrompt.includes(keyword),
  );

  const needsStructure = structureKeywords.some((keyword) =>
    normalizedPrompt.includes(keyword),
  );

  const needsGuidance = guidanceKeywords.some((keyword) =>
    normalizedPrompt.includes(keyword),
  );

  return {
    needsResearch,
    needsStructure,
    needsGuidance,
  };
}
