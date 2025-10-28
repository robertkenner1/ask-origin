// Export text suggestion prompts
export * from "./types";
export * from "./suggestions";

import { TextSuggestionPrompt, SuggestionType } from "./types";
import {
  textCompletionPrompt,
  cursorAwareSuggestionPrompt,
  rewriteSuggestionPrompt,
} from "./suggestions";

/**
 * Collection of all text suggestion prompts
 */
export const suggestionPrompts: Record<string, TextSuggestionPrompt> = {
  [textCompletionPrompt.id]: textCompletionPrompt,
  [cursorAwareSuggestionPrompt.id]: cursorAwareSuggestionPrompt,
  [rewriteSuggestionPrompt.id]: rewriteSuggestionPrompt,
};

/**
 * Get a text suggestion prompt by ID
 * @param id Prompt ID to retrieve
 * @returns The corresponding prompt or the default prompt if not found
 */
export function getSuggestionPromptById(id: string): TextSuggestionPrompt {
  return suggestionPrompts[id] || textCompletionPrompt;
}

/**
 * Get the most appropriate suggestion prompt based on parameters
 * @param params Parameters to determine the appropriate prompt
 * @returns The most appropriate prompt for the given parameters
 */
export function getSuggestionPrompt(params: {
  cursorPosition?: number;
  type?: SuggestionType;
}): TextSuggestionPrompt {
  const { cursorPosition, type } = params;

  // If cursor position is provided, use cursor-aware prompt
  if (cursorPosition !== undefined) {
    return cursorAwareSuggestionPrompt;
  }

  // If type is specified, choose accordingly
  if (type === SuggestionType.REWRITE) {
    return rewriteSuggestionPrompt;
  }

  // Default to standard completion prompt
  return textCompletionPrompt;
}
