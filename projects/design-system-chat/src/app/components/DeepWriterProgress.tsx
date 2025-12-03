"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/common/cn";
import { type GenerationProgress } from "@/hooks/document/useDeepWriterDocument";
import {
  PenLine,
  FileText,
  BookOpen,
  FileSearch,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface DeepWriterProgressProps {
  progress: GenerationProgress;
  className?: string;
}

export const DeepWriterProgress: React.FC<DeepWriterProgressProps> = ({
  progress,
  className,
}) => {
  // State for dynamic action verb
  const [activeVerb, setActiveVerb] = useState<string>("Creating");

  // Lists of action verbs based on the current step
  const actionVerbs = {
    analyzing: [
      "Analyzing",
      "Processing",
      "Examining",
      "Evaluating",
      "Reviewing",
      "Assessing",
      "Scanning",
      "Inspecting",
      "Studying",
      "Parsing",
    ],
    outline: [
      "Structuring",
      "Organizing",
      "Mapping",
      "Planning",
      "Sketching",
      "Framing",
      "Architecting",
      "Designing",
      "Conceptualizing",
      "Blueprinting",
    ],
    draft: [
      "Drafting",
      "Composing",
      "Developing",
      "Writing",
      "Creating",
      "Producing",
      "Formulating",
      "Generating",
      "Constructing",
      "Crafting",
    ],
    research: [
      "Researching",
      "Investigating",
      "Exploring",
      "Gathering",
      "Collecting",
      "Compiling",
      "Discovering",
      "Uncovering",
      "Sourcing",
      "Mining",
    ],
    processing: [
      "Finalizing",
      "Polishing",
      "Refining",
      "Completing",
      "Assembling",
      "Integrating",
      "Synthesizing",
      "Wrapping up",
      "Arranging",
      "Formatting",
    ],
    complete: ["Completed"],
    error: ["Error"],
  };

  // Update the active verb every 4 seconds
  useEffect(() => {
    // Get the appropriate verb list based on current progress step
    const verbs = actionVerbs[progress.step] || actionVerbs.analyzing;

    // Set initial verb
    setActiveVerb(verbs[0]);

    // Setup interval to change verbs only when we have multiple verbs available
    if (verbs.length > 1) {
      const interval = setInterval(() => {
        setActiveVerb((prevVerb) => {
          const currentIndex = verbs.indexOf(prevVerb);
          const nextIndex = (currentIndex + 1) % verbs.length;
          return verbs[nextIndex];
        });
      }, 4000);

      // Cleanup
      return () => clearInterval(interval);
    }
  }, [progress.step]);

  // Determine the icon for current step
  const getStepIcon = (step: GenerationProgress["step"]) => {
    switch (step) {
      case "analyzing":
        return <FileText className="h-5 w-5 animate-pulse" />;
      case "outline":
        return <FileText className="h-5 w-5 animate-pulse" />;
      case "draft":
        return <PenLine className="h-5 w-5 animate-pulse" />;
      case "research":
        return <BookOpen className="h-5 w-5 animate-pulse" />;
      case "processing":
        return <FileSearch className="h-5 w-5 animate-pulse" />;
      case "complete":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const steps = [
    { key: "analyzing", label: "Analyzing" },
    { key: "outline", label: "Outline" },
    { key: "draft", label: "Draft" },
    { key: "research", label: "Research" },
    { key: "processing", label: "Processing" },
  ];

  // Order of steps for linear progress
  const stepOrder: Record<GenerationProgress["step"], number> = {
    analyzing: 0,
    outline: 1,
    draft: 2,
    research: 3,
    processing: 4,
    complete: 5,
    error: -1,
  };

  const currentStepIndex = stepOrder[progress.step];

  // Generate dynamic message based on the active verb and step
  const getDynamicMessage = () => {
    // For error and complete states, use the progress message directly
    if (progress.step === "error" || progress.step === "complete") {
      return progress.message;
    }

    // Get the current step name
    const stepName =
      steps.find((s) => s.key === progress.step)?.label.toLowerCase() ||
      progress.step;

    // Return a dynamic message with the current verb
    return `${activeVerb} your ${stepName === "processing" ? "document" : stepName}...`;
  };

  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      <div className="flex items-center space-x-2 text-sm">
        {getStepIcon(progress.step)}
        <div className="font-medium transition-all duration-500">
          {getDynamicMessage()}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={cn(
            "h-2.5 rounded-full transition-all duration-500",
            progress.step === "error" ? "bg-red-500" : "bg-blue-600",
          )}
          style={{ width: `${progress.percentage}%` }}
        />
      </div>

      {/* Step indicators */}
      <div className="mt-1 flex items-center justify-between">
        {steps.map((step, index) => (
          <div
            key={step.key}
            className={cn(
              "flex flex-col items-center",
              index <= currentStepIndex ? "text-blue-600" : "text-gray-400",
            )}
          >
            <div
              className={cn(
                "mb-1 h-3 w-3 rounded-full",
                index < currentStepIndex
                  ? "bg-blue-600"
                  : index === currentStepIndex
                    ? "animate-pulse bg-blue-600"
                    : "bg-gray-300",
              )}
            />
            <span className="text-xs">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeepWriterProgress;
