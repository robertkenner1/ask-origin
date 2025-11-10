import { TextSuggestionPrompt, SuggestionType } from "./types";

/**
 * Standard text completion prompt
 */
export const textCompletionPrompt: TextSuggestionPrompt = {
  id: "text-completion",
  version: "1.0.0",
  description: "Generate continuation suggestions for text",
  tags: ["text", "completion", "suggestion"],

  requiredVars: ["text"],
  defaultVars: {
    suggestionCount: 4,
    includeCursor: false,
    ignoreGuidance: true,
  },

  modelConfig: {
    model: "claude-3-7-sonnet-20250219",
    temperature: 0.7,
    maxTokens: 100,
  },

  template: `I need multiple different ways to continue the following text.
The user is writing something and I need to offer them different options for how to proceed.

{{#if includeCursor}}IMPORTANT: The [CURSOR] placemark shows exactly where the user's cursor is positioned. This is where any new text will be inserted. You MUST generate text specifically for this position.{{/if}}

{{#if ignoreGuidance}}IMPORTANT PREPROCESSING INSTRUCTION:
The text may contain instructional content wrapped in triple square brackets like [[[this is an instruction]]]. When generating suggestions, you MUST completely IGNORE any text wrapped in these [[[triple square brackets]]]. These are just guidelines for the user and should NOT influence your text completion in any way. Treat them as if they don't exist in the original text.{{/if}}

Please provide the following options:

1. "Finish Paragraph" - A natural continuation that {{#if includeCursor}}completes the thought starting from the cursor position{{else}}simply completes the current thought{{/if}}. This should be a smooth, direct continuation but ONLY include the new text I should add, NOT the original text the user wrote.

2. {{#if suggestionCount}}{{suggestionCount}}{{else}}Three{{/if}} alternate versions that REWRITE the {{#if includeCursor}}text around the cursor{{else}}last paragraph{{/if}} with different tones, styles, or angles. Examples might include:
   - Changing the tone (more formal, more casual, more technical, etc.)
   - Changing the perspective (from a specific viewpoint like "as a product manager" or "from a critical angle")
   - Changing the style (more descriptive, more concise, more narrative, etc.)

{{#if tone}}The suggestions should match this tone: {{tone}}{{/if}}
{{#if style}}The suggestions should match this style: {{style}}{{/if}}
{{#if maxLength}}Each suggestion should be no longer than {{maxLength}} characters.{{/if}}

For each of the rewrite options (not the continuation), provide:
- A very short title (maximum 3 words) that describes the style/tone/angle
- ONLY include the new text to add {{#if includeCursor}}at the cursor position marked by [CURSOR]{{else}}after the user's current text{{/if}}, NOT the complete paragraph including the user's text

IMPORTANT:
- Do NOT repeat the user's existing text in any of your suggestions.
- Only provide the continuation text that would be {{#if includeCursor}}inserted at the [CURSOR] position{{else}}appended to what the user has already written{{/if}}.
- {{#if includeCursor}}DO NOT include the [CURSOR] marker itself in your suggestions.{{/if}}
{{#if ignoreGuidance}}- COMPLETELY IGNORE any text wrapped in [[[triple square brackets]]] when generating suggestions. These are instructions to the user, not actual content.
- Your suggestions should continue naturally as if the instructions in [[[triple square brackets]]] were not present.
- NEVER output any text in triple square brackets in your suggestions.{{/if}}

The user's current text is:
---
{{text}}
---

Format your response as a JSON array with these fields:
- id: a unique string identifier for each option
- title: the short title (3 words or less) describing the option
- text: the suggested text
- type: either "continueText" (for option 1) or one of "rewriteStyle", "rewriteAngle", "rewriteTone" (for options 2-4)`,

  systemTemplate: `You are a helpful writing assistant that provides multiple continuation options for text. You MUST only output valid JSON that can be parsed. Your entire response MUST be a JSON array with no other text before or after. Never include explanatory text or any other content outside of the JSON structure. Remember to completely ignore any text wrapped in {{{triple angle brackets}}} when generating suggestions, as these are instructions to the user and not actual content.`,
};

/**
 * Cursor-aware text suggestion prompt
 */
export const cursorAwareSuggestionPrompt: TextSuggestionPrompt = {
  id: "cursor-aware-suggestion",
  version: "1.0.0",
  description: "Generate text suggestions based on cursor position",
  tags: ["text", "cursor", "suggestion"],

  requiredVars: ["text", "cursorPosition"],
  defaultVars: {
    suggestionCount: 4,
    includeCursor: true,
    ignoreGuidance: true,
  },

  modelConfig: {
    model: "claude-3-7-sonnet-20250219",
    temperature: 0.7,
    maxTokens: 100,
  },

  // Inherit from the text completion prompt but add cursor position
  template: `I need multiple different ways to continue the following text.
The user is writing something and I need to offer them different options for how to proceed.

IMPORTANT: The cursor is at position {{cursorPosition}} in the text. This is where any new text will be inserted. You MUST generate text specifically for this position.

{{#if ignoreGuidance}}IMPORTANT PREPROCESSING INSTRUCTION:
The text may contain instructional content wrapped in triple square brackets like [[[this is an instruction]]]. When generating suggestions, you MUST completely IGNORE any text wrapped in these [[[triple square brackets]]]. These are just guidelines for the user and should NOT influence your text completion in any way. Treat them as if they don't exist in the original text.{{/if}}

Please provide the following options:

1. "Finish Thought" - A natural continuation that completes the thought starting from the cursor position. This should be a smooth, direct continuation but ONLY include the new text I should add, NOT the original text the user wrote.

2. {{#if suggestionCount}}{{suggestionCount}}{{else}}Three{{/if}} alternate versions that REWRITE or EXPAND the text around the cursor with different tones, styles, or angles. Examples might include:
   - Changing the tone (more formal, more casual, more technical, etc.)
   - Changing the perspective (from a specific viewpoint like "as a product manager" or "from a critical angle")
   - Changing the style (more descriptive, more concise, more narrative, etc.)

{{#if tone}}The suggestions should match this tone: {{tone}}{{/if}}
{{#if style}}The suggestions should match this style: {{style}}{{/if}}
{{#if maxLength}}Each suggestion should be no longer than {{maxLength}} characters.{{/if}}

For each of the rewrite options (not the continuation), provide:
- A very short title (maximum 3 words) that describes the style/tone/angle
- ONLY include the new text to add at the cursor position, NOT the complete paragraph including the user's text

IMPORTANT:
- Do NOT repeat the user's existing text in any of your suggestions.
- Only provide the continuation text that would be inserted at the cursor position.
{{#if ignoreGuidance}}- COMPLETELY IGNORE any text wrapped in [[[triple square brackets]]] when generating suggestions. These are instructions to the user, not actual content.
- Your suggestions should continue naturally as if the instructions in [[[triple square brackets]]] were not present.
- NEVER output any text in triple square brackets in your suggestions.{{/if}}

The user's current text is:
---
{{text}}
---

Format your response as a JSON array with these fields:
- id: a unique string identifier for each option
- title: the short title (3 words or less) describing the option
- text: the suggested text
- type: either "continueText" (for option 1) or one of "rewriteStyle", "rewriteAngle", "rewriteTone" (for options 2-4)`,

  systemTemplate: `You are a helpful writing assistant that provides multiple text suggestions based on cursor position. You MUST only output valid JSON that can be parsed. Your entire response MUST be a JSON array with no other text before or after.`,
};

/**
 * Rewrite-focused suggestion prompt
 */
export const rewriteSuggestionPrompt: TextSuggestionPrompt = {
  id: "rewrite-suggestion",
  version: "1.0.0",
  description: "Generate rewrite suggestions for text",
  tags: ["text", "rewrite", "suggestion"],

  requiredVars: ["text"],
  defaultVars: {
    suggestionCount: 4,
    includeCursor: false,
    ignoreGuidance: true,
  },

  modelConfig: {
    model: "claude-3-7-sonnet-20250219",
    temperature: 0.8, // Slightly higher for more creativity
    maxTokens: 150,
  },

  template: `I need multiple different ways to rewrite the following text.
The user wants to improve their writing with different styles, tones, and approaches.

{{#if includeCursor}}IMPORTANT: The [CURSOR] placemark shows exactly where the user's cursor is positioned. Focus your rewrites on the text around this position.{{/if}}

{{#if ignoreGuidance}}IMPORTANT PREPROCESSING INSTRUCTION:
The text may contain instructional content wrapped in triple square brackets like [[[this is an instruction]]]. When generating suggestions, you MUST completely IGNORE any text wrapped in these [[[triple square brackets]]]. These are just guidelines for the user and should NOT influence your rewrite in any way. Treat them as if they don't exist in the original text.{{/if}}

Please provide {{#if suggestionCount}}{{suggestionCount}}{{else}}four{{/if}} completely different rewrites with the following variations:

1. "Formal" - A more professional, academic, or business-appropriate version
2. "Concise" - A shorter, more direct version that maintains the key points
3. "Descriptive" - A more detailed, vivid version with richer language
4. "Persuasive" - A version that's more convincing or compelling

{{#if tone}}The suggestions should match this overall tone: {{tone}}{{/if}}
{{#if style}}The suggestions should match this overall style: {{style}}{{/if}}
{{#if maxLength}}Each suggestion should be no longer than {{maxLength}} characters.{{/if}}

For each rewrite option, provide:
- A very short title (maximum 3 words) that describes the style/tone
- The complete rewritten text

IMPORTANT:
- Each rewrite should maintain the same core message and meaning as the original
- Don't introduce new facts or substantially different content
- Keep the same general structure but improve the expression
{{#if ignoreGuidance}}- COMPLETELY IGNORE any text wrapped in [[[triple square brackets]]] when rewriting. These are instructions to the user, not actual content.
- NEVER output any text in triple square brackets in your suggestions.{{/if}}

The user's current text is:
---
{{text}}
---

Format your response as a JSON array with these fields:
- id: a unique string identifier for each option
- title: the short title (3 words or less) describing the option
- text: the rewritten text
- type: one of "rewriteStyle", "rewriteAngle", "rewriteTone", or "rewriteStructure"`,

  systemTemplate: `You are a helpful writing assistant that provides multiple rewrite options for text. You MUST only output valid JSON that can be parsed. Your entire response MUST be a JSON array with no other text before or after.`,
};
