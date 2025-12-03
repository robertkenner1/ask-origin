import { Anthropic } from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { ClaudeConfig, defaultClaudeConfig } from "@/services/ai/claudeService";
import { NextRequest, NextResponse } from "next/server";

/**
 * Create a standardized request ID and timestamp for API logging
 */
export function createRequestContext() {
  const timestamp = new Date().toISOString();
  const requestId = Math.random().toString(36).substring(2, 10);
  const requestStartTime = Date.now();

  return { timestamp, requestId, requestStartTime };
}

/**
 * Standardized logging
 */
export function log(requestId: string, message: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${requestId}] ${message}`, data || "");
}

export function logError(requestId: string, message: string, error: any) {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] [${requestId}] ${message}`, error);
}

/**
 * Create Anthropic client for server-side use only
 */
export const getAnthropicClient = (requestId: string = "unknown") => {
  const timestamp = new Date().toISOString();
  const apiKey =
    process.env.CLAUDE_API_KEY || process.env.NEXT_PUBLIC_CLAUDE_API_KEY;

  if (!apiKey) {
    console.error(
      `[${timestamp}] [${requestId}] Missing Claude API key in server environment`,
    );
    throw new Error("Missing Claude API key in server environment");
  }

  return new Anthropic({ apiKey });
};

/**
 * Create OpenAI client for server-side use only
 */
export const getOpenAIClient = (requestId: string = "unknown") => {
  const timestamp = new Date().toISOString();
  const apiKey =
    process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  if (!apiKey) {
    console.error(
      `[${timestamp}] [${requestId}] Missing OpenAI API key in server environment`,
    );
    throw new Error("Missing OpenAI API key in server environment");
  }

  return new OpenAI({ apiKey });
};

/**
 * Merge config with defaults
 */
export function mergeConfig(config: Partial<ClaudeConfig> = {}): ClaudeConfig {
  return { ...defaultClaudeConfig, ...config };
}

/**
 * Standard error response for API routes
 */
export function errorResponse(message: string, status: number = 500) {
  return NextResponse.json({ error: message }, { status });
}

/**
 * Parse request body with error handling
 */
export async function parseRequestBody<T>(
  request: NextRequest,
  requestId: string,
): Promise<T | null> {
  try {
    return (await request.json()) as T;
  } catch (error) {
    logError(requestId, "Error parsing request:", error);
    return null;
  }
}

/**
 * Check if LLM is enabled and return appropriate response if disabled
 */
export function checkLlmEnabled(config: ClaudeConfig, requestId: string) {
  if (config.llmEnabled === false) {
    log(requestId, "LLM responses disabled");
    return false;
  }
  return true;
}
