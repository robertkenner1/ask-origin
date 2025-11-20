import React, { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { OrchestraIcon } from "@/app/components/icons/OrchestraIcon";
import type { Suggestion } from "@/hooks/editor/useTextSuggestions";

// Simpler Tab indicator component
const TabIndicator = ({ visible }: { visible: boolean }) => (
  <div
    className={`bg-muted absolute left-1/2 z-10 -translate-x-1/2 transform rounded-xl px-3 py-1 shadow-sm transition-all duration-300 ease-in-out ${visible ? "opacity-100" : "pointer-events-none opacity-0"} `}
    style={{ bottom: "calc(100% - 6px)" }}
  >
    <span className="text-muted-foreground text-xs font-semibold">Tab</span>
    <div
      className={
        "absolute top-0 left-0 -z-10 h-full w-full rounded-xl bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 opacity-[0.08] blur-[2.5px] filter"
      }
    ></div>
  </div>
);

// Option button component
const Option = ({
  title,
  active,
  onClick,
  tabIndex,
  hasEnteredPillBar = false,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
  tabIndex: number;
  hasEnteredPillBar?: boolean;
}) => (
  <div
    tabIndex={tabIndex}
    className={`relative mx-[3px] flex flex-shrink-0 items-center rounded-2xl px-2.5 py-[6px] transition-colors outline-none ${
      active && hasEnteredPillBar
        ? "bg-muted text-foreground"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    } `}
    onClick={onClick}
    role="button"
    aria-pressed={active && hasEnteredPillBar}
    style={{ minWidth: "fit-content" }}
  >
    <span className="text-sm font-medium whitespace-nowrap">{title}</span>
  </div>
);

// Ask button component
const AskButton = ({
  onClick,
  tabIndex,
}: {
  onClick: () => void;
  tabIndex: number;
}) => (
  <div
    className={
      "hover:bg-muted text-muted-foreground hover:text-foreground mx-[3px] flex flex-shrink-0 cursor-pointer items-center rounded-2xl px-2.5 py-[6px] transition-colors outline-none"
    }
    onClick={onClick}
    role="button"
    tabIndex={tabIndex}
  >
    <OrchestraIcon size={18} />
    <span className="ml-1 text-sm font-medium whitespace-nowrap">Ask</span>
  </div>
);

// Collapsed pill component
const CollapsedPill = ({ onClick }: { onClick: () => void }) => (
  <div
    className={
      "flex h-9 w-full cursor-pointer items-center px-2 py-2 transition-all duration-300"
    }
    onClick={onClick}
  >
    <OrchestraIcon size={18} />
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
}) => (
  <>
    <button
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-l-2xl p-[2px] transition-colors hover:bg-[#f5f5f5]"
      onClick={onBack}
      aria-label="Go back to options"
    >
      <ArrowLeft className="h-6 w-6 text-[#707070]" />
    </button>

    <form
      onSubmit={handleAskSubmit}
      className="mx-1 flex flex-grow items-center"
    >
      <div className="flex w-full items-center bg-white">
        <OrchestraIcon />
        <input
          type="text"
          value={askInput}
          onChange={(e) => setAskInput(e.target.value)}
          className={
            "ml-1 h-[32px] flex-grow border-none bg-transparent px-1 text-sm text-[#1c1c1c] transition-all outline-none"
          }
          placeholder="Ask anything..."
          aria-label="Ask anything"
          autoFocus
        />
      </div>
    </form>
  </>
);

// Main PillBar component props
interface PillBarProps {
  ui: {
    expanded: boolean;
    tabIndicator: boolean;
    activeIndex: number;
    askMode: boolean;
    hasEnteredPillBar: boolean;
  };
  suggestions: Suggestion[];
  actions: {
    accept: () => void;
    reject: () => void;
    toggleExpanded: () => void;
    selectOption: (index: number) => void;
    toggleAskMode: () => void;
    handleAskBack: () => void;
  };
}

export function PillBar({ ui, suggestions, actions }: PillBarProps) {
  // Local state for ask input
  const [askInput, setAskInput] = React.useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle ask form submission
  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process ask query here
    setAskInput("");
  };

  // Handle option click - select or accept if already selected
  const handleOptionClick = (index: number) => {
    if (ui.activeIndex === index) {
      actions.accept();
    } else {
      actions.selectOption(index);
    }
  };

  // Helper function to safely extract title
  const getSafeOptionTitle = (option: any): string => {
    if (typeof option === "object" && option !== null && "title" in option) {
      return option.title;
    }

    if (typeof option === "string") {
      try {
        const parsed = JSON.parse(option);
        if (
          typeof parsed === "object" &&
          parsed !== null &&
          "title" in parsed
        ) {
          return parsed.title;
        }
      } catch (e) {
        // Not JSON, use as is if short
        if (option.length < 15) return option;
      }
    }

    return "Continue";
  };

  return (
    <div>
      {/* Tab indicator */}
      <TabIndicator visible={ui.tabIndicator} />

      <div
        ref={containerRef}
        className={`bg-card border-border relative flex h-[44px] w-auto min-w-[132px] items-center rounded-3xl border p-1 shadow-md transition-all duration-300 ease-in-out ${!ui.expanded ? "cursor-pointer" : ""} `}
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
              className={
                "flex w-full flex-nowrap items-center justify-center transition-all duration-300"
              }
            >
              {suggestions.map((option, index) => {
                // Safely extract title from suggestion
                const title = getSafeOptionTitle(option);

                // Generate a reliable key
                const key =
                  typeof option === "object" &&
                  option !== null &&
                  "id" in option
                    ? option.id
                    : `option-${index}`;

                return (
                  <Option
                    key={key}
                    title={title}
                    active={ui.activeIndex === index}
                    onClick={() => handleOptionClick(index)}
                    tabIndex={ui.expanded ? 0 : -1}
                    hasEnteredPillBar={ui.hasEnteredPillBar}
                  />
                );
              })}

              <AskButton
                onClick={actions.toggleAskMode}
                tabIndex={ui.expanded ? 0 : -1}
              />
            </div>
          )
        ) : (
          // Collapsed pill
          <CollapsedPill onClick={actions.toggleExpanded} />
        )}
      </div>
    </div>
  );
}
