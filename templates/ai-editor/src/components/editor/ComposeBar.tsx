import React, { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { OrchestraIconAnimated } from "@/app/components/icons/OrchestraIconAnimated";
import type { Suggestion } from "@/hooks/editor/useTextSuggestions";
import useSidebarStore from "@/stores/chat/sidebarStore";
import { useChatStore } from "@/stores/chat/chatStore";

// Simpler Tab indicator component
const TabIndicator = ({ visible }: { visible: boolean }) => (
  <div
    className={`bg-muted absolute left-1/2 z-10 -translate-x-1/2 transform rounded-xl px-3 py-1 shadow-sm transition-all duration-300 ease-in-out ${visible ? "opacity-100" : "pointer-events-none opacity-0"} `}
    style={{ bottom: "calc(100% - 6px)" }}
  >
    <span className="text-muted-foreground text-xs font-semibold">Tab</span>
    <div
      className={`absolute top-0 left-0 -z-10 h-full w-full rounded-xl bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 opacity-[0.08] blur-[2.5px] filter`}
    ></div>
  </div>
);

// Option button component
const ComposeOption = ({
  title,
  active,
  onClick,
  tabIndex,
  hasEnteredComposeBar = false,
  type,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
  tabIndex: number;
  hasEnteredComposeBar?: boolean;
  type?: string;
}) => (
  <div
    tabIndex={tabIndex}
    className={`relative mx-[3px] flex flex-shrink-0 items-center rounded-2xl px-2.5 py-[6px] transition-colors outline-none ${
      active && hasEnteredComposeBar
        ? "bg-muted text-foreground"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    } `}
    onClick={onClick}
    role="button"
    aria-pressed={active && hasEnteredComposeBar}
    style={{ minWidth: "fit-content" }}
    data-type={type}
  >
    <span className="text-sm font-medium whitespace-nowrap">{title}</span>

    {/* Keyboard shortcut indicator - only show for active option */}
    {active && hasEnteredComposeBar && (
      <span className="ml-1.5 inline-flex items-center justify-center rounded-sm bg-blue-500 px-1 text-xs font-bold text-white">
        A
      </span>
    )}
  </div>
);

// Ask button component
const AskButton = ({
  onClick,
  tabIndex,
  loading = false,
}: {
  onClick: () => void;
  tabIndex: number;
  loading?: boolean;
}) => (
  <div
    className={`hover:bg-muted text-muted-foreground hover:text-foreground mx-[3px] flex flex-shrink-0 cursor-pointer items-center rounded-2xl px-2.5 py-[6px] transition-colors outline-none`}
    onClick={onClick}
    role="button"
    tabIndex={tabIndex}
  >
    <OrchestraIconAnimated
      size={18}
    />
    <span className="ml-1 text-sm font-medium whitespace-nowrap">Ask</span>
  </div>
);

// Collapsed pill component
const CollapsedPill = ({
  onClick,
  onAskClick,
  loading = false,
}: {
  onClick: () => void;
  onAskClick: () => void;
  loading?: boolean;
}) => (
  <div
    className={`flex h-9 w-full cursor-pointer items-center px-2 py-2 transition-all duration-300`}
    onClick={onAskClick} // Changed to go directly to ask mode
  >
    <OrchestraIconAnimated
      size={18}
    />
    <span className="text-muted-foreground ml-1 text-sm font-medium whitespace-nowrap">
      Ask anything
    </span>
  </div>
);

// Ask mode input component
const AskMode = ({
  onBack,
  askInput,
  setAskInput,
  handleAskSubmit,
}: {
  onBack: () => void;
  askInput: string;
  setAskInput: (value: string) => void;
  handleAskSubmit: (e: React.FormEvent) => void;
}) => {
  // Handle keyboard events for AskMode
  const handleKeyDown = (e: React.KeyboardEvent) => {
    console.log(`ASK_MODE_INPUT: Key pressed: ${e.key}, shift: ${e.shiftKey}`);

    // Handle Enter key for form submission
    if (e.key === "Enter" && !e.shiftKey) {
      console.log("ASK_MODE_INPUT: Enter pressed, submitting form");
      e.preventDefault();

      // Submit form directly
      handleAskSubmit(e as unknown as React.FormEvent);
    }

    // Handle Shift+Tab to exit AskMode
    if (e.key === "Tab" && e.shiftKey) {
      console.log("ASK_MODE_INPUT: Shift+Tab pressed, going back");
      e.preventDefault();

      // Focus on the document editor first to ensure keyboard events
      // will be properly handled after we exit
      setTimeout(() => {
        console.log("ASK_MODE_INPUT: Focusing editor element");
        const focusEditorEvent = new CustomEvent("focusEditor");
        document.dispatchEvent(focusEditorEvent);
      }, 0);

      // Then go back to the suggestions mode
      onBack();
    }
  };

  return (
    <>
      <button
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-l-2xl rounded-r-[4px] p-[2px] transition-colors hover:bg-[#f5f5f5]"
        onClick={onBack}
        aria-label="Go back to options"
        // Set a lower tabIndex to make it not the first tab target
        tabIndex={1}
      >
        <ArrowLeft className="h-6 w-6 text-[#707070]" />
      </button>

      <form
        onSubmit={handleAskSubmit}
        className="mx-1 flex flex-grow items-center"
      >
        <div className="flex w-full items-center bg-white">
          <OrchestraIconAnimated
            size={18}
          />
          <input
            type="text"
            value={askInput}
            onChange={(e) => setAskInput(e.target.value)}
            className={`ml-1 h-[32px] flex-grow border-none bg-transparent px-1 text-sm text-[#1c1c1c] transition-all outline-none`}
            placeholder="Ask anything..."
            aria-label="Ask anything"
            autoFocus
            // Make this the primary tab target and handle Shift+Tab
            tabIndex={0}
            onKeyDown={handleKeyDown}
          />
        </div>
      </form>
    </>
  );
};

// Main ComposeBar component props
interface ComposeBarProps {
  ui: {
    expanded: boolean;
    tabIndicator: boolean;
    activeIndex: number;
    askMode: boolean;
    hasEnteredComposeBar: boolean;
  };
  suggestions: Suggestion[];
  loading: boolean; // Added loading state
  actions: {
    accept: () => void;
    reject: () => void;
    toggleExpanded: () => void;
    selectOption: (index: number) => void;
    toggleAskMode: () => void;
    handleAskBack: () => void;
  };
  // Optional callback for when a message is submitted in ask mode
  onAskSubmit?: (message: string) => void;
}

export function ComposeBar({
  ui,
  suggestions,
  loading = false,
  actions,
}: ComposeBarProps) {
  // Local state for ask input
  const [askInput, setAskInput] = React.useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Access sidebar store to open orchestra pane
  const openOrchestraPane = useSidebarStore((state) => state.openOrchestraPane);

  // Get addUserMessage function from chat store
  const { addUserMessage } = useChatStore();

  // Handle ask form submission
  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!askInput.trim()) return;

    // Open the orchestra pane
    openOrchestraPane();

    // Add message directly to chat store
    addUserMessage(askInput.trim());

    // Clear input after sending
    setAskInput("");

    // Reset back to default state - exit ask mode and collapse
    actions.handleAskBack(); // Exit ask mode
  };

  // Handle option click - select or accept if already selected
  const handleOptionClick = (index: number) => {
    console.log(
      `COMPOSE_BAR: Option ${index} clicked, activeIndex: ${ui.activeIndex}`,
    );
    if (ui.activeIndex === index) {
      console.log(
        "COMPOSE_BAR: Same option clicked again, accepting suggestion",
      );
      actions.accept();
    } else {
      console.log("COMPOSE_BAR: Different option clicked, selecting it");
      actions.selectOption(index);
    }
  };

  // GRUG VERY SIMPLE VERSION - Just trust the API to give us clean data
  const getSafeOptionTitle = (option: any): string => {
    // Simple direct access - API guarantees clean object structure
    if (
      typeof option === "object" &&
      option !== null &&
      "title" in option &&
      typeof option.title === "string"
    ) {
      return option.title;
    }

    // Default fallback
    return "Continue";
  };

  // GRUG VERY SIMPLE VERSION - Just trust the API to give us clean data
  const getSafeOptionType = (option: any): string => {
    // Simple direct access - API guarantees clean object structure
    if (
      typeof option === "object" &&
      option !== null &&
      "type" in option &&
      typeof option.type === "string"
    ) {
      return option.type;
    }

    // Default fallback
    return "continueText";
  };

  return (
    <div>
      {/* Tab indicator */}
      <TabIndicator visible={ui.tabIndicator} />

      <div
        ref={containerRef}
        style={{
          width: ui.askMode ? "500px" : "auto",
        }}
        className={`bg-card border-border relative flex h-[44px] min-w-[132px] items-center rounded-3xl border p-1 shadow-md transition-all duration-300 ease-in-out ${!ui.expanded ? "cursor-pointer" : ""} `}
      >
        {ui.expanded ? (
          ui.askMode ? (
            // Ask mode with input field
            <AskMode
              onBack={actions.handleAskBack}
              askInput={askInput}
              setAskInput={setAskInput}
              handleAskSubmit={handleAskSubmit}
            />
          ) : (
            // Regular expanded mode with options
            <div
              className={`flex w-full flex-nowrap items-center justify-center transition-all duration-300`}
            >
              {suggestions.map((option, index) => {
                // Safely extract title from suggestion
                const title = getSafeOptionTitle(option);
                const type = getSafeOptionType(option);

                // Generate a reliable key
                const key =
                  typeof option === "object" &&
                  option !== null &&
                  "id" in option
                    ? option.id
                    : `option-${index}`;

                return (
                  <ComposeOption
                    key={key}
                    title={title}
                    type={type}
                    active={ui.activeIndex === index}
                    onClick={() => handleOptionClick(index)}
                    tabIndex={ui.expanded ? 0 : -1}
                    hasEnteredComposeBar={ui.hasEnteredComposeBar}
                  />
                );
              })}

              <AskButton
                onClick={actions.toggleAskMode}
                tabIndex={ui.expanded ? 0 : -1}
                loading={loading}
              />
            </div>
          )
        ) : (
          // Collapsed pill - go directly to ask mode when clicked
          <CollapsedPill
            onClick={actions.toggleExpanded}
            onAskClick={() => {
              console.log(
                "COMPOSE_BAR: Ask anything clicked, going to ask mode",
              );
              actions.toggleExpanded();
              actions.toggleAskMode();
            }}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}
