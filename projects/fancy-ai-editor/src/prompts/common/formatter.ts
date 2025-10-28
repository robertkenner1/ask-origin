import { BasePrompt, MissingVariableError, PromptSyntaxError } from "./types";

// Regular expression for variable placeholders: {{VARIABLE_NAME}}
const VARIABLE_REGEX = /\{\{([A-Za-z0-9_]+)\}\}/g;

// Regular expression for conditional sections: {{#if CONDITION}}content{{/if}}
const CONDITIONAL_REGEX =
  /\{\{#if\s+([A-Za-z0-9_]+)\}\}([\s\S]*?)\{\{\/if\}\}/g;

// Regular expression for conditional sections with else: {{#if CONDITION}}content{{else}}alternative{{/if}}
const CONDITIONAL_ELSE_REGEX =
  /\{\{#if\s+([A-Za-z0-9_]+)\}\}([\s\S]*?)\{\{else\}\}([\s\S]*?)\{\{\/if\}\}/g;

/**
 * Formats a prompt by substituting variables and processing conditional sections
 *
 * @param prompt The prompt template or prompt object
 * @param variables Variables to substitute into the template
 * @returns Formatted prompt string
 */
export function formatPrompt<T extends Record<string, unknown>>(
  prompt: string | BasePrompt<T>,
  variables: Partial<T> = {},
): string {
  // If prompt is an object, extract the template
  const promptObj: BasePrompt<T> | undefined =
    typeof prompt !== "string" ? prompt : undefined;
  const template = typeof prompt === "string" ? prompt : prompt.template;

  // Check for required variables if this is a prompt object
  if (promptObj?.requiredVars) {
    for (const requiredVar of promptObj.requiredVars) {
      const varName = String(requiredVar);
      if (
        variables[varName as keyof T] === undefined &&
        promptObj.defaultVars?.[varName as keyof T] === undefined
      ) {
        throw new MissingVariableError(varName, promptObj.id);
      }
    }
  }

  // Merge variables with defaults if this is a prompt object
  const mergedVars = {
    ...(promptObj?.defaultVars || {}),
    ...variables,
  };

  try {
    // Process conditional sections with else first (to avoid nested matches issues)
    let processed = template.replace(
      CONDITIONAL_ELSE_REGEX,
      (match, condition, content, alternative) => {
        const conditionValue = mergedVars[condition];
        return conditionValue ? content : alternative;
      },
    );

    // Process regular conditional sections
    processed = processed.replace(
      CONDITIONAL_REGEX,
      (match, condition, content) => {
        const conditionValue = mergedVars[condition];
        return conditionValue ? content : "";
      },
    );

    // Substitute variables
    processed = processed.replace(VARIABLE_REGEX, (match, varName) => {
      const value = mergedVars[varName];
      if (value === undefined) {
        // For non-required vars that aren't provided, just leave the placeholder
        return match;
      }

      return String(value);
    });

    return processed;
  } catch (error) {
    throw new PromptSyntaxError(
      promptObj?.id || "unknown",
      error instanceof Error ? error.message : String(error),
    );
  }
}

/**
 * Creates a complete prompt package including system prompt if applicable
 *
 * @param prompt The prompt object to format
 * @param variables Variables to substitute
 * @returns Object with user and system prompts
 */
export function createPromptPackage<T extends Record<string, unknown>>(
  prompt: BasePrompt<T>,
  variables: Partial<T> = {},
): { prompt: string; systemPrompt?: string } {
  const formattedPrompt = formatPrompt(prompt, variables);

  let systemPrompt: string | undefined;
  if (prompt.systemTemplate) {
    systemPrompt = formatPrompt(prompt.systemTemplate, variables);
  }

  return {
    prompt: formattedPrompt,
    systemPrompt,
  };
}

/**
 * Retrieves variables used in a prompt template
 *
 * @param template The prompt template to analyze
 * @returns Array of variable names found in the template
 */
export function getTemplateVariables(template: string): string[] {
  const variables = new Set<string>();

  // Extract variables from direct substitutions
  let match: RegExpExecArray | null;
  while ((match = VARIABLE_REGEX.exec(template)) !== null) {
    variables.add(match[1]);
  }

  // Extract variables from conditional sections
  VARIABLE_REGEX.lastIndex = 0; // Reset regex state
  while ((match = CONDITIONAL_REGEX.exec(template)) !== null) {
    variables.add(match[1]);
  }

  // Extract variables from conditional-else sections
  VARIABLE_REGEX.lastIndex = 0; // Reset regex state
  while ((match = CONDITIONAL_ELSE_REGEX.exec(template)) !== null) {
    variables.add(match[1]);
  }

  return Array.from(variables);
}
