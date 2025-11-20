import { BasePrompt } from "../common";

/**
 * Variables for text suggestion prompts
 */
export interface TextSuggestionVars {
  /** The text to generate suggestions for */
  text: string;

  /** Position of the cursor in the text */
  cursorPosition?: number;

  /** Number of suggestions to generate */
  suggestionCount?: number;

  /** Whether to include cursor placeholders */
  includeCursor?: boolean;

  /** Whether to ignore guidance text */
  ignoreGuidance?: boolean;

  /** Specific tone to match (formal, casual, etc.) */
  tone?: string;

  /** Writing style to match (descriptive, concise, etc.) */
  style?: string;

  /** Maximum length of each suggestion */
  maxLength?: number;

  /** Context type (e.g., paragraph, sentence, document) */
  contextType?: string;
}

/**
 * Type for text suggestion prompts
 */
export type TextSuggestionPrompt = BasePrompt<TextSuggestionVars>;

/**
 * Suggestion types that can be requested
 */
export enum SuggestionType {
  CONTINUATION = "continuation",
  REWRITE = "rewrite",
  EXPAND = "expand",
  SUMMARIZE = "summarize",
  CUSTOM = "custom",
}
