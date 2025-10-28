import { BasePrompt } from "../common";

/**
 * Variables for document generation prompts
 */
export interface DocumentGenerationVars {
  /** Topic or subject of the document */
  topic: string;

  /** Writing style to use (e.g. formal, casual, technical) */
  style?: string;

  /** Approximate target word count */
  length?: number | string;

  /** Specific domain or field of expertise */
  domain?: string;

  /** Sections to include in the document */
  sections?: string[];

  /** Whether to use DeepWriter mode for multi-page documents */
  deepWriter?: boolean;

  /** Target audience for the document */
  audience?: string;

  /** Document format (e.g. essay, report, blog post) */
  format?: string;

  /** User-defined custom instructions */
  customInstructions?: string;
}

/**
 * Type for document generation prompts
 */
export type DocumentGenerationPrompt = BasePrompt<DocumentGenerationVars>;

/**
 * Prompt variant types
 */
export enum DocumentPromptVariant {
  DEFAULT = "default",
  DEEP_WRITER = "deep-writer",
  ACADEMIC = "academic",
  TECHNICAL = "technical",
  CREATIVE = "creative",
}
