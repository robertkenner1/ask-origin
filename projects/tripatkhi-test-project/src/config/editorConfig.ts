/**
 * Configuration for the text editor and prediction features
 */
export interface EditorConfig {
  // Prediction settings
  prediction: {
    enabled: boolean;
    llmEnabled: boolean; // Whether to use LLM for suggestions or provide mocks
    debounceMs: number; // Time to wait after typing stops before calling API
    paragraphsToInclude: number; // Number of paragraphs to include for context
    maxTokens: number; // Maximum tokens for prediction response
    temperature: number; // Temperature setting for API (0.0-1.0)
  };

  // UI settings
  ui: {
    predictionTextColor: string; // Color for predicted text
    cursorBlinkRate: number; // Blink rate for cursor in ms
  };
}

/**
 * Default editor configuration
 */
export const defaultEditorConfig: EditorConfig = {
  prediction: {
    enabled: true,
    llmEnabled: true, // Set to false to disable LLM API calls
    debounceMs: 1250, // 1.25s debounce
    paragraphsToInclude: 2,
    maxTokens: 2000, // Increased from 100 to ensure complete JSON responses
    temperature: 0.7,
  },
  ui: {
    predictionTextColor: "text-muted-foreground",
    cursorBlinkRate: 500,
  },
};

/**
 * Get current editor configuration
 * @returns Editor configuration
 */
export function getEditorConfig(): EditorConfig {
  // In the future, this could be extended to load from local storage or user preferences
  return defaultEditorConfig;
}
