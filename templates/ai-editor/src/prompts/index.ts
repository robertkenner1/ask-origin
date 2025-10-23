// Main entry point for the prompt management system
import { formatPrompt, createPromptPackage } from "./common";
import {
  getDocumentPromptByVariant,
  getDocumentPromptById,
  DocumentPromptVariant,
} from "./generate";
import {
  getSuggestionPrompt,
  getSuggestionPromptById,
  SuggestionType,
} from "./suggest";
import { getChatPromptByRole, getChatPromptById, ChatRoleType } from "./chat";

// Export utility functions
export const prompts = {
  // Formatters
  formatPrompt,
  createPromptPackage,

  // Document prompts
  getDocumentPromptByVariant,
  getDocumentPromptById,

  // Suggestion prompts
  getSuggestionPrompt,
  getSuggestionPromptById,

  // Chat prompts
  getChatPromptByRole,
  getChatPromptById,
};

// Export types
export type { BasePrompt, ConditionalSection } from "./common/types";

export { MissingVariableError, PromptSyntaxError } from "./common/types";

// Export types from generate module
export type {
  DocumentGenerationPrompt,
  DocumentGenerationVars,
} from "./generate/types";
export { DocumentPromptVariant } from "./generate";

// Export types from suggest module
export type { TextSuggestionPrompt, TextSuggestionVars } from "./suggest/types";
export { SuggestionType } from "./suggest";

// Export types from chat module
export type { ChatPrompt, ChatPromptVars, ChatMessage } from "./chat/types";
export { ChatRoleType } from "./chat";

export default prompts;
