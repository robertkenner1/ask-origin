"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { detectContentType } from "@/utils/document/contentTypeDetection";
import { headers } from "next/headers";

// Create server-side document generation function
async function serverGenerateDocument(prompt: string, deepWriter: boolean) {
  try {
    // Get base URL from headers - properly awaited
    const protocol =
      process?.env?.NODE_ENV === "development" ? "http" : "https";

    // Next.js API routes know their own URL
    // In production this would be your domain, in dev it's localhost:port
    const baseUrl = `${protocol}://localhost:2345`; // Hardcoded port from your env config

    // Call API route directly from server
    const response = await fetch(`${baseUrl}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        config: {
          model: "claude-3-7-sonnet-20250219",
          temperature: 0.7,
          llmEnabled: true,
        },
        deepWriter,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Server generation error:", error);
    throw error;
  }
}

export async function createDocumentAction(formData: FormData) {
  const prompt = formData.get("prompt") as string;
  const deepWriter = formData.get("deepWriter") === "true";

  if (!prompt || !prompt.trim()) {
    redirect("/?error=Empty prompt provided");
  }

  try {
    // Get content type for better title
    const detectedType = detectContentType(prompt);
    const initialTitle = `New ${detectedType.type.charAt(0).toUpperCase() + detectedType.type.slice(1)}`;

    // Generate the content first (server-side)
    const response = await serverGenerateDocument(prompt, deepWriter);

    // Pass the necessary data for client-side document creation via URL params
    // Only pass data needed for initial document creation
    const params = new URLSearchParams({
      title: response.title || initialTitle,
      prompt,
      contentType: detectedType.type,
      response: JSON.stringify(response),
      deepWriter: deepWriter.toString(),
    });

    // Redirect to editor with creation params
    // Client-side code will handle document creation with IndexedDB
    revalidatePath("/editor");
    redirect(`/editor/create?${params.toString()}`);
  } catch (error) {
    console.error("Generation error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to generate document";

    // Check for rate limit errors
    const isRateLimit =
      error instanceof Error && "status" in error && error.status === 429;
    const errorParam = isRateLimit
      ? `ratelimit:${encodeURIComponent(errorMessage)}`
      : encodeURIComponent(errorMessage);

    redirect(`/?error=${errorParam}`);
  }
}
