import { ApiClient } from "./ApiClient";
import {
  ApiClientConfig,
  RequestOptions,
  GenerateDocumentRequest,
  GenerateDocumentResponse,
} from "./types";
import prompts, {
  DocumentGenerationVars,
  DocumentPromptVariant,
  TextSuggestionVars,
  SuggestionType,
  ChatMessage,
  ChatRoleType,
  ChatPromptVars,
} from "@/prompts";

/**
 * Enhanced API client that integrates with the prompt management system
 * Extends the base ApiClient with prompt-aware methods
 */
export class PromptApiClient extends ApiClient {
  /**
   * Create a new prompt-enabled API client instance
   * @param config - Client configuration options
   */
  constructor(config: ApiClientConfig = {}) {
    // Ensure we have a valid baseUrl
    const validatedConfig = {
      ...config,
      baseUrl: config.baseUrl || "/api",
    };
    super(validatedConfig);
  }

  /**
   * Generate document using structured prompts
   * @param generateRequest Document generation parameters or variables
   * @param options Request options
   * @param variant Optional prompt variant to use
   * @returns Generated document response
   */
  async generateDocument(
    generateRequest: { prompt?: string } & Partial<DocumentGenerationVars>,
    options?: RequestOptions,
    variant?: DocumentPromptVariant,
  ): Promise<GenerateDocumentResponse> {
    // If it looks like we're using the new interface with DocumentGenerationVars
    if (!generateRequest.prompt && "topic" in generateRequest) {
      const vars = generateRequest as DocumentGenerationVars;
      const promptVariant = variant || DocumentPromptVariant.DEFAULT;

      // Get the appropriate prompt
      const promptTemplate = prompts.getDocumentPromptByVariant(promptVariant);

      // Format the prompt with variables - cast to any to work around the type constraint
      const { prompt, systemPrompt } = prompts.createPromptPackage(
        promptTemplate,
        vars as any,
      );

      // Get model config from the prompt template
      const modelConfig = promptTemplate.modelConfig || {};

      // Call the API with the formatted prompt
      return super.generateDocument(
        {
          prompt,
          deepWriter:
            vars.deepWriter ||
            promptVariant === DocumentPromptVariant.DEEP_WRITER,
          model: modelConfig.model,
          temperature: modelConfig.temperature,
        },
        options,
      );
    }

    // Otherwise, just pass through to the parent class
    return super.generateDocument(
      generateRequest as GenerateDocumentRequest,
      options,
    );
  }

  /**
   * Get text suggestions using structured prompts
   * @param vars Text suggestion variables
   * @param type Optional suggestion type
   * @returns Array of suggestion options
   */
  async getSuggestions(
    vars: TextSuggestionVars,
    type: SuggestionType = SuggestionType.CONTINUATION,
  ) {
    // Get the appropriate prompt based on params
    const promptTemplate = prompts.getSuggestionPrompt({
      cursorPosition: vars.cursorPosition,
      type,
    });

    // Format the prompt with variables - cast to any to work around the type constraint
    const { prompt, systemPrompt } = prompts.createPromptPackage(
      promptTemplate,
      vars as any,
    );

    // Get model config from the prompt template
    const modelConfig = promptTemplate.modelConfig || {};

    // Call the API with the formatted prompt and system prompt
    return super.suggest({
      text: prompt,
      cursorPosition: vars.cursorPosition,
      model: modelConfig.model,
      temperature: modelConfig.temperature,
      maxTokens: modelConfig.maxTokens,
    });
  }

  /**
   * Send chat message using structured prompts
   * @param vars Chat prompt variables
   * @param role Optional chat role type
   * @returns The assistant's response message
   */
  async sendChatMessage(
    vars: ChatPromptVars,
    role: ChatRoleType = ChatRoleType.ASSISTANT,
  ) {
    // Get the appropriate prompt
    const promptTemplate = prompts.getChatPromptByRole(role);

    // Format the prompt with variables - cast to any to work around the type constraint
    const { prompt, systemPrompt } = prompts.createPromptPackage(
      promptTemplate,
      vars as any,
    );

    // Get model config from the prompt template
    const modelConfig = promptTemplate.modelConfig || {};

    // For chat, we need to add a final user message with the formatted prompt
    // if there's content from the template
    const messages = [...vars.messages];

    // Only add the formatted prompt as a message if it has content
    // (beyond what's already in the messages array)
    if (prompt.trim().length > 0) {
      messages.push({
        type: "user",
        content: prompt,
        id: Date.now().toString(),
        timestamp: new Date(),
      });
    }

    // Call the API with the messages and system prompt in config
    return super.chat(
      {
        messages,
        model: modelConfig.model,
        temperature: modelConfig.temperature,
        maxTokens: modelConfig.maxTokens,
        // Include config with system prompt directly in request
        config: {
          systemPrompt: systemPrompt,
        },
      },
      {
        headers: {},
      },
    );
  }

  /**
   * Create a cancellable document generation operation
   * @param vars Document generation variables
   * @param variant Optional prompt variant
   * @returns Cancellable operation
   */
  createCancellableDocumentGeneration(
    vars: DocumentGenerationVars,
    variant: DocumentPromptVariant = DocumentPromptVariant.DEFAULT,
  ) {
    return super.createCancellableOperation(() =>
      this.generateDocument(vars, undefined, variant),
    );
  }

  /**
   * Create a cancellable suggestion operation
   * @param vars Text suggestion variables
   * @param type Optional suggestion type
   * @returns Cancellable operation
   */
  createCancellableSuggestions(
    vars: TextSuggestionVars,
    type: SuggestionType = SuggestionType.CONTINUATION,
  ) {
    return super.createCancellableOperation(() =>
      this.getSuggestions(vars, type),
    );
  }

  /**
   * Create a cancellable chat operation
   * @param vars Chat prompt variables
   * @param role Optional chat role type
   * @returns Cancellable operation
   */
  createCancellableChatMessage(
    vars: ChatPromptVars,
    role: ChatRoleType = ChatRoleType.ASSISTANT,
  ) {
    return super.createCancellableOperation(() =>
      this.sendChatMessage(vars, role),
    );
  }
}
