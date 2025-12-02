// Export chat prompts
export * from "./types";
export * from "./conversations";

import { ChatPrompt, ChatRoleType } from "./types";
import {
  writingAssistantPrompt,
  domainExpertPrompt,
  writingTutorPrompt,
} from "./conversations";

/**
 * Collection of all chat prompts
 */
export const chatPrompts: Record<string, ChatPrompt> = {
  [writingAssistantPrompt.id]: writingAssistantPrompt,
  [domainExpertPrompt.id]: domainExpertPrompt,
  [writingTutorPrompt.id]: writingTutorPrompt,
};

/**
 * Get a chat prompt by role type
 * @param role The role type to retrieve a prompt for
 * @returns The corresponding prompt or the default prompt if not found
 */
export function getChatPromptByRole(role: ChatRoleType): ChatPrompt {
  switch (role) {
    case ChatRoleType.EXPERT:
      return domainExpertPrompt;
    case ChatRoleType.TUTOR:
      return writingTutorPrompt;
    case ChatRoleType.EDITOR:
    case ChatRoleType.ASSISTANT:
    default:
      return writingAssistantPrompt;
  }
}

/**
 * Get a chat prompt by ID
 * @param id Prompt ID to retrieve
 * @returns The corresponding prompt or the default prompt if not found
 */
export function getChatPromptById(id: string): ChatPrompt {
  return chatPrompts[id] || writingAssistantPrompt;
}
