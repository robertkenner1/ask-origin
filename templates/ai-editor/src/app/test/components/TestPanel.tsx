"use client";

import React from "react";

interface TestPanelProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable panel component for test pages
 */
export function TestPanel({ title, children, className = "" }: TestPanelProps) {
  return (
    <div
      className={`rounded-lg border border-neutral-200 bg-gray-50 p-6 ${className}`}
    >
      {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}
      {children}
    </div>
  );
}

interface TestPanelGroupProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container for multiple test panels
 */
export function TestPanelGroup({
  children,
  className = "",
}: TestPanelGroupProps) {
  return (
    <div className={`flex flex-col gap-8 lg:flex-row ${className}`}>
      {children}
    </div>
  );
}

/**
 * Left panel for config/input in test pages
 */
export function TestConfigPanel({
  children,
  className = "",
}: TestPanelGroupProps) {
  return <div className={`w-full lg:w-1/3 ${className}`}>{children}</div>;
}

/**
 * Right panel for results/output in test pages
 */
export function TestResultPanel({
  children,
  className = "",
}: TestPanelGroupProps) {
  return <div className={`w-full lg:w-2/3 ${className}`}>{children}</div>;
}
