/**
 * Base type for all prompts
 */
export interface BasePrompt<T = Record<string, unknown>> {
  /** Unique identifier for this prompt */
  id: string;

  /** Version of the prompt for tracking changes */
  version: string;

  /** Short description of what this prompt does */
  description: string;

  /** Tags for organizing and filtering prompts */
  tags?: string[];

  /** Prompt template with variable placeholders */
  template: string;

  /** System prompt template for chat-based models */
  systemTemplate?: string;

  /** A/B test variant identifier (if applicable) */
  variant?: string;

  /** Variables that are required for this prompt */
  requiredVars?: (keyof T)[];

  /** Default values for optional variables */
  defaultVars?: Partial<T>;

  /** Configuration for model parameters */
  modelConfig?: {
    /** Default model to use */
    model?: string;

    /** Default temperature (0.0 - 1.0) */
    temperature?: number;

    /** Default maximum tokens to generate */
    maxTokens?: number;

    /** Default top_p value */
    topP?: number;
  };
}

/**
 * Type for conditional sections in prompts
 */
export interface ConditionalSection {
  /** Unique identifier for the section */
  id: string;

  /** Condition that determines if this section should be included */
  condition: string | boolean | (() => boolean);

  /** Content to include if condition is true */
  content: string;
}

/**
 * Error thrown when a required variable is missing
 */
export class MissingVariableError extends Error {
  /** Name of the missing variable */
  variable: string;

  /** ID of the prompt that required this variable */
  promptId: string;

  constructor(variable: string, promptId: string) {
    super(`Missing required variable "${variable}" for prompt "${promptId}"`);
    this.name = "MissingVariableError";
    this.variable = variable;
    this.promptId = promptId;
    Object.setPrototypeOf(this, MissingVariableError.prototype);
  }
}

/**
 * Error thrown when a prompt template has invalid syntax
 */
export class PromptSyntaxError extends Error {
  /** ID of the prompt with invalid syntax */
  promptId: string;

  /** The specific error that occurred */
  syntaxIssue: string;

  constructor(promptId: string, syntaxIssue: string) {
    super(`Syntax error in prompt "${promptId}": ${syntaxIssue}`);
    this.name = "PromptSyntaxError";
    this.promptId = promptId;
    this.syntaxIssue = syntaxIssue;
    Object.setPrototypeOf(this, PromptSyntaxError.prototype);
  }
}
