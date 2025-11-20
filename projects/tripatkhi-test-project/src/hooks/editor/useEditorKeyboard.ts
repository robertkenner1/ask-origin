import { useCallback } from "react";
import { SuggestionOption } from "@/services/ai/claudeService";

interface UseEditorKeyboardProps {
  expanded: boolean;
  showTabIndicator: boolean;
  askMode: boolean;
  isTyping: boolean;
  suggestions: SuggestionOption[];
  activeOptionIndex: number;
  previousState: "collapsed" | "tabIndicator" | "expanded";
  hasEnteredPillBar?: boolean;

  // Callbacks
  handleTypingStart: () => void;
  setExpanded: (expanded: boolean) => void;
  setShowTabIndicator: (show: boolean) => void;
  setActiveOptionIndex: (index: number) => void;
  setAskMode: (askMode: boolean) => void;
  handleAcceptSuggestion: () => void;
  handleRejectSuggestion: () => void;
  handleTabKeyPressed?: () => void;
  resetPillBarFocus?: () => void;
}

export function useEditorKeyboard({
  expanded,
  showTabIndicator,
  askMode,
  isTyping,
  suggestions,
  activeOptionIndex,
  previousState,
  hasEnteredPillBar,
  handleTypingStart,
  setExpanded,
  setShowTabIndicator,
  setActiveOptionIndex,
  setAskMode,
  handleAcceptSuggestion,
  handleRejectSuggestion,
  handleTabKeyPressed,
  resetPillBarFocus,
}: UseEditorKeyboardProps) {
  // Handle keyboard events
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Tab") {
        // If there are suggestions available (Tab indicator or expanded PillBar)
        if (suggestions.length > 0) {
          e.preventDefault();

          // Check if we should be entering the PillBar
          // This happens if the TabIndicator is showing OR
          // if the PillBar is expanded but not yet entered (Escape was pressed)
          if (showTabIndicator || (expanded && !hasEnteredPillBar)) {
            // Use the dedicated Tab key handler
            if (handleTabKeyPressed) {
              handleTabKeyPressed();
            } else {
              // Fallback if handler not provided
              setActiveOptionIndex(0);
              setExpanded(true);
              setShowTabIndicator(false);
            }
          }
        }
        // When no suggestions are available
        else {
          // Prevent default to avoid browser's native Tab behavior
          e.preventDefault();
        }
      } else if (expanded) {
        if (askMode) {
          // Handle keyboard events in ask mode
          if (e.key === "Escape") {
            e.preventDefault();
            setAskMode(false);

            if (previousState === "collapsed") {
              // Return to collapsed state
              setExpanded(false);
              setShowTabIndicator(false);
            } else if (previousState === "tabIndicator") {
              // Return to tab indicator state, but only if we have suggestions
              setExpanded(false);
              if (suggestions.length > 0) {
                setTimeout(() => {
                  setShowTabIndicator(true);
                }, 10);
              }
            } else {
              // Return to expanded state with the last option selected (not the first)
              const lastIndex = Math.max(0, suggestions.length - 1);
              setActiveOptionIndex(lastIndex);
            }
          }
        } else {
          // Handle global keyboard shortcuts in regular expanded mode
          if (e.key === "Escape") {
            e.preventDefault();

            // Use resetPillBarFocus if available, otherwise fall back to our previous implementation
            if (resetPillBarFocus) {
              resetPillBarFocus();

              // Return focus to editor - blurring is not enough
              // We need to send a custom event that the container will listen for
              const focusEditorEvent = new CustomEvent("focusEditor");
              document.dispatchEvent(focusEditorEvent);
            } else {
              // Fallback implementation
              // Reset entered state to remove selection highlighting
              setExpanded(true); // Ensure it stays expanded
              setShowTabIndicator(true);

              // Return focus to editor with custom event
              const focusEditorEvent = new CustomEvent("focusEditor");
              document.dispatchEvent(focusEditorEvent);
            }
          } else if (e.key === "a" || e.key === "A") {
            e.preventDefault();
            handleAcceptSuggestion();
          } else if (e.key === "w" || e.key === "W") {
            e.preventDefault();
            // Rewrite logic would go here
            console.log("Rewrite option selected");
          } else if (e.key === "q" || e.key === "Q") {
            e.preventDefault();
            handleRejectSuggestion();
          }
        }
      } else {
        // Any other key press while not expanded should hide the tab indicator and show typing state
        if (e.key !== "Tab" && !isTyping) {
          handleTypingStart();
        }
      }
    },
    [
      expanded,
      showTabIndicator,
      isTyping,
      askMode,
      previousState,
      suggestions,
      activeOptionIndex,
      hasEnteredPillBar,
      handleTypingStart,
      handleAcceptSuggestion,
      handleRejectSuggestion,
      setExpanded,
      setShowTabIndicator,
      setActiveOptionIndex,
      setAskMode,
      handleTabKeyPressed,
      resetPillBarFocus,
    ],
  );

  return {
    handleKeyDown,
  };
}
