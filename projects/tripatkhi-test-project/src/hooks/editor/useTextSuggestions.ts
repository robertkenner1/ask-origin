// useTextSuggestions.ts
import { useState, useEffect, useCallback, useRef } from "react";
import debounce from "lodash.debounce";
import { useSuggestionsStore } from "@/stores/editor/suggestionsStore";
import { defaultClaudeConfig } from "@/services/ai/claudeService";
import { getEditorConfig } from "@/config/editorConfig";

/**
 * NOTE FOR FUTURE REFACTORING:
 *
 * This hook currently combines data fetching and UI state management for simplicity.
 * As complexity grows, consider splitting into two exports in same file:
 *
 * 1. useSuggestionData - Core data fetching, validation, and suggestion management
 * 2. useTextSuggestions - UI state wrapper that consumes useSuggestionData
 *
 * Example structure:
 *
 * ```
 * // Data export
 * export function useSuggestionData(text, isAtParagraphStart, onAccept, config) {
 *   // Fetch logic, debouncing, validation
 *   return { suggestions, loading, error, etc. }
 * }
 *
 * // UI wrapper export (same file)
 * export function useTextSuggestions(text, isAtParagraphStart, onAccept, config) {
 *   // Get data
 *   const data = useSuggestionData(text, isAtParagraphStart, onAccept, config)
 *
 *   // Add UI state
 *   const [ui, setUI] = useState(...)
 *
 *   return { ...data, ui, actions }
 * }
 * ```
 *
 * This keeps everything in one file (simple imports) while improving:
 * - Testability of core data logic
 * - Separation of concerns
 * - Ability for components to use just data part if needed
 *
 * For now, one combined export is fine. This note is for future grug when things get complex.
 */

// Types
export type SuggestionType =
  | "continueText"
  | "rewriteStyle"
  | "rewriteAngle"
  | "rewriteTone"
  | "custom";
export type DisplayMode = "inline" | "diff" | "sidebar";

export interface Suggestion {
  id: string;
  title: string;
  text: string;
  type: SuggestionType;
}

interface TextSuggestionsConfig {
  model?: string;
  debounceMs: number;
  maxTokens: number;
  temperature: number;
  paragraphsToInclude: number;
  llmEnabled: boolean;
}

interface UIState {
  expanded: boolean;
  tabIndicator: boolean;
  activeIndex: number;
  askMode: boolean;
  hasEnteredComposeBar: boolean;
  displayMode: DisplayMode;
  previousState: "collapsed" | "tabIndicator" | "expanded";
}

interface TextSuggestionsProps {
  text: string;
  isAtParagraphStart: boolean;
  onAccept: (text: string) => void;
  config?: Partial<TextSuggestionsConfig>;
  isInCodeBlock?: boolean;
  cursorPosition?: number;
}

// Get editor configuration
const editorConfig = getEditorConfig();

// Default configuration (now pulling from central config)
const defaultConfig: TextSuggestionsConfig = {
  model: defaultClaudeConfig.model,
  debounceMs: editorConfig.prediction.debounceMs,
  maxTokens: editorConfig.prediction.maxTokens,
  temperature: editorConfig.prediction.temperature,
  paragraphsToInclude: editorConfig.prediction.paragraphsToInclude,
  llmEnabled: editorConfig.prediction.llmEnabled,
};

/**
 * Extract relevant context from text for prediction
 *
 * NOTE: We're now sending the full text without truncation to ensure
 * the cursor position is respected and all content is considered
 */
function getTextContext(
  inputText: string,
  paragraphsToInclude: number,
): string {
  if (!inputText) return "";

  // Always return the full text
  return inputText;

  /* Disabled context truncation for cursor position accuracy
    // For short text with no paragraphs, just use the whole thing
    if (!inputText.includes('\n\n') || inputText.length < 100) {
        return inputText
    }

    // Split by paragraphs and take the last N based on config
    const paragraphs = inputText.split(/\n\s*\n/)
    const relevantParagraphs = paragraphs.slice(
        Math.max(0, paragraphs.length - paragraphsToInclude)
    )

    // If we don't have enough context from paragraphs, get text from the end
    const context = relevantParagraphs.join('\n\n')
    if (context.length < 20 && inputText.length >= 20) {
        return inputText.slice(-200)
    }

    return context
    */
}

export function useTextSuggestions({
  text,
  isAtParagraphStart,
  onAccept,
  config = {},
  isInCodeBlock = false,
  cursorPosition = undefined,
}: TextSuggestionsProps) {
  // Get suggestions enabled state from store
  const { enabled: suggestionsEnabled } = useSuggestionsStore();

  // Reference to previous enabled state for detecting changes
  const previousEnabledRef = useRef(suggestionsEnabled);

  // Merged configuration
  const mergedConfig = {
    ...defaultConfig,
    ...config,
    // Override llmEnabled based on suggestionsEnabled toggle
    llmEnabled:
      suggestionsEnabled && (config.llmEnabled ?? defaultConfig.llmEnabled),
  };

  // Suggestions state
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // UI state - consolidated into a single object
  const [ui, setUI] = useState<UIState>({
    expanded: false,
    tabIndicator: false,
    activeIndex: 0,
    askMode: false,
    hasEnteredComposeBar: false,
    displayMode: "inline",
    previousState: "collapsed",
  });

  // Internal state for tracking
  const lastTextRef = useRef<string>("");
  const lastPredictionTextRef = useRef<string>("");
  const justAcceptedRef = useRef<boolean>(false);
  const acceptanceTimestampRef = useRef<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  // Fetch suggestions from unified API
  const fetchSuggestions = useCallback(
    async (textToFetch: string) => {
      if (!textToFetch || textToFetch.trim() === "") {
        setSuggestions([]);
        return;
      }

      // If LLM is disabled, don't fetch suggestions
      if (mergedConfig.llmEnabled === false) {
        setSuggestions([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Store this as the last text we predicted for
        lastPredictionTextRef.current = textToFetch;

        // Extract relevant context to send to API
        const context = getTextContext(
          textToFetch,
          mergedConfig.paragraphsToInclude,
        );

        // If cursor position is defined, insert cursor placemark
        let textWithCursor = context;
        if (cursorPosition !== undefined) {
          // Since we're now using the full text, we can use the cursor position directly
          // Just ensure it doesn't exceed the text length
          const actualPosition = Math.min(cursorPosition, context.length);

          // Insert [CURSOR] marker at the cursor position
          textWithCursor = `${context.slice(
            0,
            actualPosition,
          )}[CURSOR]${context.slice(actualPosition)}`;
        }

        // Always log the full text being sent to the LLM
        console.log("=== TEXT SENT TO LLM ===");
        console.log("Original text length:", textToFetch.length);
        console.log("Context text length:", context.length);
        console.log("Text with cursor length:", textWithCursor.length);
        console.log("Cursor position:", cursorPosition);
        console.log("Full text being sent:");
        console.log(textWithCursor);
        console.log("=== END TEXT SENT TO LLM ===");

        // Simple fetch - no excessive logging
        const response = await fetch("/api/suggest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: textWithCursor,
            cursorPosition: cursorPosition,
            config: {
              model: mergedConfig.model,
              maxTokens: mergedConfig.maxTokens,
              temperature: mergedConfig.temperature,
              llmEnabled: mergedConfig.llmEnabled,
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch suggestions: ${response.status}`);
        }

        const data = await response.json();

        // Handle API errors
        if (data.error) {
          setError(data.error);
        }

        if (data.suggestions && Array.isArray(data.suggestions)) {
          // Grug simple validation - API now gives clean data
          const validSuggestions = data.suggestions
            .filter(
              (suggestion: any) =>
                suggestion && typeof suggestion.text === "string",
            )
            .map((suggestion: any) => ({
              id: suggestion.id || `suggestion-${Date.now()}`,
              title: suggestion.title || "Continue",
              text: suggestion.text,
              type: suggestion.type || "continueText",
            }));

          // Don't show error suggestions in the UI
          const displaySuggestions = validSuggestions.filter(
            (s: Suggestion) => s.id !== "error-details" && s.id !== "api-error",
          );

          // If we have only error suggestions, set the error message
          if (displaySuggestions.length === 0 && validSuggestions.length > 0) {
            const errorSuggestion = validSuggestions.find(
              (s: Suggestion) =>
                s.id === "error-details" || s.id === "api-error",
            );
            if (errorSuggestion) {
              setError(errorSuggestion.text);
            }
          }

          setSuggestions(displaySuggestions as Suggestion[]);

          // Show tab indicator if we got suggestions and aren't in entered mode
          if (displaySuggestions.length > 0 && !ui.hasEnteredComposeBar) {
            setUI((prev) => ({
              ...prev,
              tabIndicator: true,
              expanded: true,
            }));
          }
        } else {
          setSuggestions([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    },
    [
      mergedConfig.maxTokens,
      mergedConfig.temperature,
      mergedConfig.paragraphsToInclude,
      mergedConfig.llmEnabled,
      ui.hasEnteredComposeBar,
    ],
  );

  // Debounced fetch suggestions
  const debouncedFetchRef = useRef(
    debounce((innerText: string) => {
      setIsTyping(false);
      if (suggestionsEnabled) {
        fetchSuggestions(innerText);
      }
    }, mergedConfig.debounceMs),
  );

  // Clear debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedFetchRef.current.cancel();
    };
  }, []);

  // Watch for changes in the suggestionsEnabled state
  useEffect(() => {
    // If suggestions were just disabled (was enabled before, now disabled)
    if (previousEnabledRef.current && !suggestionsEnabled) {
      // Clear any pending suggestions
      setSuggestions([]);
      setLoading(false);
      setUI((prev) => ({
        ...prev,
        expanded: false,
        tabIndicator: false,
        hasEnteredComposeBar: false,
      }));

      // Cancel any pending fetch
      debouncedFetchRef.current.cancel();
    }

    // Update the ref to the current value for future comparison
    previousEnabledRef.current = suggestionsEnabled;
  }, [suggestionsEnabled]);

  // Process text changes and decide whether to trigger suggestions
  useEffect(() => {
    // Skip if suggestions are disabled, empty text, no change, at paragraph start, or inside a code block
    if (
      !suggestionsEnabled ||
      !text ||
      text === lastTextRef.current ||
      isAtParagraphStart ||
      isInCodeBlock
    ) {
      return;
    }

    // Skip if we just accepted a suggestion and not enough time passed
    if (justAcceptedRef.current) {
      const currentTime = Date.now();
      const timeElapsed = currentTime - acceptanceTimestampRef.current;

      // Either 2 seconds passed or user typed new content
      const userHasTypedNewContent =
        timeElapsed > 2000 ||
        (timeElapsed > 1500 &&
          text !== lastTextRef.current &&
          text.length > lastTextRef.current.length);

      if (userHasTypedNewContent) {
        // Reset the accepted state
        justAcceptedRef.current = false;
        acceptanceTimestampRef.current = 0;
      } else {
        return;
      }
    }

    // Skip if already generated suggestions for this text
    if (text === lastPredictionTextRef.current) {
      return;
    }

    // Skip if in code block
    if (isInCodeBlock) {
      // Clear any existing suggestions without using clearSuggestions function
      // to avoid the reference error
      setSuggestions([]);
      setUI((prev) => ({
        ...prev,
        expanded: false,
        tabIndicator: false,
        hasEnteredComposeBar: false,
      }));
      return;
    }

    // Update tracking refs
    lastTextRef.current = text;

    // Mark as typing (for UI state)
    setIsTyping(true);

    // Schedule the debounced fetch
    debouncedFetchRef.current(text);
  }, [text, isAtParagraphStart, isInCodeBlock, suggestionsEnabled]);

  // Get current active suggestion with safety checks
  const getActiveSuggestion = useCallback((): Suggestion | null => {
    if (suggestions.length === 0) {
      return null;
    }

    const activeSuggestion = suggestions[ui.activeIndex] || suggestions[0];

    // Handle potential JSON string
    if (typeof activeSuggestion === "string") {
      try {
        return JSON.parse(activeSuggestion);
      } catch (e) {
        // If parsing fails, construct a basic suggestion object
        return {
          id: "fallback",
          title: "Continue",
          text: activeSuggestion,
          type: "continueText",
        };
      }
    }

    return activeSuggestion;
  }, [suggestions, ui.activeIndex]);

  // Action: Accept the current suggestion
  const acceptSuggestion = useCallback(() => {
    const suggestion = getActiveSuggestion();

    if (!suggestion) {
      return;
    }

    // Mark as just accepted
    justAcceptedRef.current = true;
    acceptanceTimestampRef.current = Date.now();

    // Reset UI state
    setUI((prev) => ({
      ...prev,
      expanded: false,
      tabIndicator: false,
      hasEnteredComposeBar: false,
    }));

    // Get suggestion text safely
    let suggestionText = "";
    if (typeof suggestion === "object" && "text" in suggestion) {
      suggestionText = suggestion.text;
    } else if (typeof suggestion === "string") {
      suggestionText = suggestion;
    }

    // Call the accept callback
    onAccept(suggestionText);

    // Clear suggestions
    setSuggestions([]);

    // Update tracking data
    const expectedNewText = text + suggestionText;
    lastTextRef.current = expectedNewText;

    return suggestionText;
  }, [getActiveSuggestion, onAccept, text]);

  // Action: Reject the current suggestion
  const rejectSuggestion = useCallback(() => {
    // Reset UI state
    setUI((prev) => ({
      ...prev,
      expanded: false,
      tabIndicator: false,
      hasEnteredComposeBar: false,
    }));

    // Clear suggestions
    setSuggestions([]);
  }, []);

  // Action: Toggle expanded state
  const toggleExpanded = useCallback(() => {
    console.log("TOGGLE_EXPANDED called");
    setUI((prev) => {
      const newState = {
        ...prev,
        expanded: !prev.expanded,
        // Reset active index when expanding
        activeIndex: prev.expanded ? prev.activeIndex : 0,
      };
      console.log("TOGGLE_EXPANDED new state:", newState);
      return newState;
    });
  }, []);

  // Action: Select an option
  const selectOption = useCallback((index: number) => {
    setUI((prev) => ({
      ...prev,
      activeIndex: index,
      hasEnteredComposeBar: true,
      tabIndicator: false,
    }));
  }, []);

  // Action: Toggle ask mode
  const toggleAskMode = useCallback(() => {
    console.log("TOGGLE_ASK_MODE called");
    setUI((prev) => {
      // When entering ask mode, remember previous state
      const newPreviousState = !prev.askMode
        ? prev.expanded
          ? prev.tabIndicator
            ? "tabIndicator"
            : "expanded"
          : "collapsed"
        : prev.previousState;

      const newState = {
        ...prev,
        askMode: !prev.askMode,
        expanded: true, // Always ensure it's expanded when toggling
        hasEnteredComposeBar: true, // Maintain entered state
        previousState: newPreviousState,
      };
      console.log("TOGGLE_ASK_MODE new state:", newState);
      return newState;
    });
  }, []);

  // Action: Clear suggestions on cursor move
  const clearSuggestions = useCallback(() => {
    console.log("CLEAR_SUGGESTIONS called");
    setSuggestions([]);
    setUI((prev) => {
      const newState = {
        ...prev,
        expanded: false,
        tabIndicator: false,
        hasEnteredComposeBar: false,
      };
      console.log("CLEAR_SUGGESTIONS new state:", newState);
      return newState;
    });
  }, []);

  // Action: Enter the compose bar (for keyboard navigation)
  const enterPillBar = useCallback(() => {
    setUI((prev) => ({
      ...prev,
      hasEnteredComposeBar: true,
      tabIndicator: false,
      expanded: true,
    }));
  }, []);

  // Action: Exit the compose bar
  const exitPillBar = useCallback(() => {
    setUI((prev) => ({
      ...prev,
      hasEnteredComposeBar: false,
      expanded: true,
      tabIndicator: true,
    }));
  }, []);

  // Action: Set display mode
  const setDisplayMode = useCallback((mode: DisplayMode) => {
    setUI((prev) => ({
      ...prev,
      displayMode: mode,
    }));
  }, []);

  // Handle back from ask mode
  const handleAskBack = useCallback(() => {
    console.log(
      "HANDLE_ASK_BACK called, suggestions.length:",
      suggestions.length,
    );
    setUI((prev) => {
      let newState;

      // If we have suggestions, go to expanded state
      if (suggestions.length > 0) {
        // Keep the current suggestions and go back to expanded state with last suggestion active
        const lastIndex = suggestions.length - 1;
        newState = {
          ...prev,
          askMode: false,
          expanded: true,
          tabIndicator: false,
          hasEnteredComposeBar: true, // Ensure we're in entered mode
          activeIndex: lastIndex, // Explicitly set to last suggestion
        };
        console.log(`HANDLE_ASK_BACK: Setting activeIndex to ${lastIndex}`);
      } else {
        // If we don't have suggestions, go back to collapsed "Ask anything" state
        newState = {
          ...prev,
          askMode: false,
          expanded: false,
          tabIndicator: false,
          hasEnteredComposeBar: false,
        };
      }

      console.log("HANDLE_ASK_BACK new state:", newState);
      return newState;
    });
  }, [suggestions.length]);

  // Keyboard handler for all suggestion-related shortcuts
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      console.log(
        `KEY PRESS: ${e.key}, shift: ${e.shiftKey}, ctrl: ${e.ctrlKey}, alt: ${e.altKey}`,
      );
      console.log(
        `STATE: expanded: ${ui.expanded}, askMode: ${ui.askMode}, hasEnteredComposeBar: ${ui.hasEnteredComposeBar}, tabIndicator: ${ui.tabIndicator}, activeIndex: ${ui.activeIndex}, suggestions.length: ${suggestions.length}`,
      );

      // Skip if no suggestions, BUT special case for Shift+Tab on first option
      if (suggestions.length === 0) {
        // This code is executed when suggestions are unexpectedly cleared
        console.log(
          "SKIPPED: No suggestions available, key:",
          e.key,
          "shift:",
          e.shiftKey,
        );

        // This is a safeguard - when suggestions get unexpectedly cleared
        // after Shift+Tab on the first option, restore a stable state
        if (
          e.key === "Tab" &&
          e.shiftKey &&
          ui.expanded &&
          ui.hasEnteredComposeBar
        ) {
          console.log(
            "RESTORING: Suggestions were unexpectedly cleared during Shift+Tab",
          );
          e.preventDefault();

          // This is a safety mechanism to ensure we return to a stable state
          setUI((prev) => ({
            ...prev,
            expanded: false, // Revert to collapsed state as fallback
            tabIndicator: false,
            hasEnteredComposeBar: false,
          }));
        }
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();

        if (ui.tabIndicator || (ui.expanded && !ui.hasEnteredComposeBar)) {
          // First Tab press enters the ComposeBar and selects first option
          enterPillBar();
          selectOption(0);
        } else if (ui.expanded && ui.hasEnteredComposeBar && !ui.askMode) {
          if (e.shiftKey) {
            // Move backward (Shift+Tab)
            if (ui.activeIndex > 0) {
              // Move to previous suggestion
              selectOption(ui.activeIndex - 1);
            } else {
              // At first option with Shift+Tab
              // Important: Just prevent default behavior and stay on the first option
              // Don't trigger any state changes that might cause the suggestions to disappear
              console.log(
                "FIRST_OPTION_SHIFT_TAB: Already on first option, not moving",
              );

              // DO NOT reset or change state here as it's causing the bug
              // Just ensure we maintain the current state
              // This needs to be a no-op for Shift+Tab on first option
            }
          } else {
            // Move forward (Tab)
            if (ui.activeIndex < suggestions.length - 1) {
              // Move to next suggestion
              selectOption(ui.activeIndex + 1);
            } else {
              // After last suggestion, go to ask mode
              toggleAskMode();
            }
          }
        } else if (ui.askMode && e.shiftKey) {
          // If we're in ask mode and Shift+Tab is pressed, go back to the last suggestion
          e.preventDefault();
          console.log("ASK_MODE_EXIT_VIA_SHIFT_TAB: Exiting Ask Mode");

          // Rather than calling handleAskBack, directly update state for better control
          if (suggestions.length > 0) {
            const lastIndex = suggestions.length - 1;
            console.log(`ASK_MODE_EXIT: Setting activeIndex to ${lastIndex}`);

            // Important: Update all state in a single setState call
            setUI((prev) => ({
              ...prev,
              askMode: false,
              expanded: true,
              hasEnteredComposeBar: true,
              activeIndex: lastIndex,
              tabIndicator: false,
            }));

            // We don't need to call selectOption since we set activeIndex directly
          } else {
            // If no suggestions, collapse to Ask Anything
            setUI((prev) => ({
              ...prev,
              askMode: false,
              expanded: false,
              hasEnteredComposeBar: false,
              tabIndicator: false,
            }));
          }
        }
      } else if (e.key === "Enter" && ui.hasEnteredComposeBar && !ui.askMode) {
        e.preventDefault();
        console.log("Selected option:", suggestions[ui.activeIndex]);
        acceptSuggestion();
      } else if (ui.expanded) {
        if (ui.askMode) {
          // Ask mode keyboard handling
          if (e.key === "Escape") {
            e.preventDefault();
            handleAskBack();
          }
        } else {
          // Normal expanded mode keyboard handling
          if (e.key === "Escape") {
            e.preventDefault();
            // If we're in the pill bar (hasEnteredComposeBar), just exit the pill bar
            // Otherwise, clear suggestions completely and reset to Ask Anything state
            if (ui.hasEnteredComposeBar) {
              exitPillBar();
              clearSuggestions();
            } else {
              // Reset to Ask Anything state
              clearSuggestions();
            }

            // Signal to focus editor
            const focusEditorEvent = new CustomEvent("focusEditor");
            document.dispatchEvent(focusEditorEvent);
          } else if (e.key === "a" || e.key === "A") {
            e.preventDefault();
            acceptSuggestion();
          } else if (e.key === "q" || e.key === "Q") {
            e.preventDefault();
            rejectSuggestion();
          }
          // Removed arrow key navigation - no longer needed
        }
      }
    },
    [
      ui,
      suggestions.length,
      enterPillBar,
      exitPillBar,
      acceptSuggestion,
      rejectSuggestion,
      selectOption,
      handleAskBack,
      toggleAskMode,
    ],
  );

  // Return everything needed for components
  return {
    // Data
    suggestions,
    activeSuggestion: getActiveSuggestion(),
    loading,
    error,
    isTyping,
    suggestionsEnabled,

    // UI state
    ui,

    // Actions
    actions: {
      accept: acceptSuggestion,
      reject: rejectSuggestion,
      toggleExpanded,
      selectOption,
      toggleAskMode,
      handleAskBack,
      clearSuggestions,
      enterPillBar,
      exitPillBar,
      setDisplayMode,
      handleKeyDown,
    },

    // Internal setters (only for testing purposes)
    _internal: {
      setSuggestions,
      setUI,
    },
  };
}
