// Export document generation prompts
export * from "./types";
export * from "./document";

import { DocumentGenerationPrompt, DocumentPromptVariant } from "./types";
import {
  academicDocumentPrompt,
  deepWriterDocumentPrompt,
  standardDocumentPrompt,
} from "./document";

/**
 * Collection of all document generation prompts
 */
export const documentPrompts: Record<string, DocumentGenerationPrompt> = {
  [standardDocumentPrompt.id]: standardDocumentPrompt,
  [deepWriterDocumentPrompt.id]: deepWriterDocumentPrompt,
  [academicDocumentPrompt.id]: academicDocumentPrompt,
};

/**
 * Get a document generation prompt by variant
 * @param variant The variant to retrieve
 * @returns The corresponding prompt or the default prompt if not found
 */
export function getDocumentPromptByVariant(
  variant: DocumentPromptVariant,
): DocumentGenerationPrompt {
  const prompt = Object.values(documentPrompts).find(
    (p) => p.variant === variant,
  );
  return prompt || standardDocumentPrompt;
}

/**
 * Get a document generation prompt by ID
 * @param id Prompt ID to retrieve
 * @returns The corresponding prompt or the default prompt if not found
 */
export function getDocumentPromptById(id: string): DocumentGenerationPrompt {
  return documentPrompts[id] || standardDocumentPrompt;
}
