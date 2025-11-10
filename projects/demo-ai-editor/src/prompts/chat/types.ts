import { BasePrompt } from "../common";

/**
 * Message format for chat context
 */
export interface ChatMessage {
  /** Message role (user or assistant) */
  type: "user" | "assistant";

  /** Message content */
  content: string;

  /** Unique message identifier */
  id: string;

  /** Timestamp of when the message was created */
  timestamp: Date;
}

/**
 * Variables for chat prompts
 */
export interface ChatPromptVars {
  /** Array of messages in the conversation history */
  messages: ChatMessage[];

  /** Current context or document being worked on */
  context?: string;

  /** Feature or mode being used (e.g., editing, brainstorming) */
  mode?: string;

  /** Whether to include formatting instructions */
  includeFormatting?: boolean;

  /** Custom instructions from the user */
  customInstructions?: string;

  /** Maximum response length */
  maxResponseLength?: number;

  /** Specific domain or knowledge area to focus on */
  domain?: string;
}

/**
 * Type for chat prompts
 */
export type ChatPrompt = BasePrompt<ChatPromptVars>;

/**
 * Chat role types
 */
export enum ChatRoleType {
  EDITOR = "editor",
  ASSISTANT = "assistant",
  TUTOR = "tutor",
  EXPERT = "expert",
}
