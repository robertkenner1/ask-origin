import { NextRequest, NextResponse } from "next/server";
import {
  createRequestContext,
  log,
  logError,
  getAnthropicClient,
  mergeConfig,
  errorResponse,
  parseRequestBody,
  checkLlmEnabled,
} from "@/utils/common/apiUtils";
import { sessionStore } from "@/services/storage/sessionStore";
import { addProgressEvent } from "@/utils/editor/progressEvents";

// Document generation types
interface GenerateDocumentRequest {
  prompt: string;
  config?: any;
  deepWriter?: boolean;
  documentId?: string;
  useSSE?: boolean;
}

interface PageContent {
  type: "outline" | "draft" | "research" | "custom";
  name: string;
  content: string;
  contentType?: "essay" | "prd" | "research" | "resume" | "custom";
}

interface GenerateDocumentResponse {
  documentType: string;
  title: string;
  content: string;
  confidence: number;
  model?: string;
  thinking?: [string: any];
  // For multi-page Deep Writer documents
  pages?: PageContent[];
  deepWriter?: boolean;
}

export async function POST(request: NextRequest) {
  const { requestId, requestStartTime } = createRequestContext();
  log(requestId, "API generate document route called");

  try {
    // Parse the request body
    const body = await parseRequestBody<GenerateDocumentRequest>(
      request,
      requestId,
    );
    if (!body) {
      return errorResponse("Invalid request format", 400);
    }

    const {
      prompt,
      config = {},
      deepWriter = false,
      documentId = null,
      useSSE = false,
    } = body;

    // Create or retrieve a session token if using SSE
    let sessionToken = null;
    if (useSSE && documentId) {
      // Generate or use an existing session token
      sessionToken =
        request.headers.get("X-Session-Token") ||
        `deepwriter_${Date.now()}_${Math.random().toString(36).substring(2, 12)}`;

      // Store session data
      sessionStore.createSession({
        docId: documentId,
        prompt,
        deepWriter,
      });

      // Send initial progress event
      addProgressEvent(sessionToken, {
        step: "analyzing",
        message: "Analyzing your request...",
        percentage: 10,
        timestamp: Date.now(),
        documentId,
      });

      log(requestId, `Created session token for SSE: ${sessionToken}`);
    }

    log(
      requestId,
      `Request received, prompt length: ${prompt?.length || 0}, deepWriter: ${deepWriter}`,
    );

    // Validate input
    if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
      logError(requestId, "Missing required parameter: prompt", null);
      return errorResponse("Missing required parameter: prompt", 400);
    }

    try {
      log(requestId, "Getting Anthropic client...");
      const anthropic = getAnthropicClient(requestId);
      log(requestId, "Anthropic client created successfully");

      // Merge default config with provided config
      const mergedConfig = mergeConfig(config);
      const { model, temperature, llmEnabled, thinking } = mergedConfig;

      // Check if LLM is disabled
      if (!checkLlmEnabled(mergedConfig, requestId)) {
        return NextResponse.json({
          documentType: "empty",
          title: "Document",
          content: "",
          confidence: 0,
        });
      }

      // Use a higher max tokens for document generation
      // Increase the token count for Deep Writer to accommodate multiple pages
      const maxTokens = deepWriter ? 5000 : 1500;

      log(requestId, "Using model config:", {
        model,
        maxTokens,
        temperature,
        llmEnabled,
        thinking,
        deepWriter,
      });

      // Select the appropriate system prompt based on deepWriter mode
      const systemPrompt = deepWriter
        ? `You are Deep Writer, a document creation assistant that specializes in creating multi-page documents with smart structure. You make blank pages go away by creating comprehensive document foundations.

USER REQUEST: "${prompt}"

CONTENT TYPE DETECTION:
First, determine what type of document the user is trying to create. Common types include:
- essay: Academic or personal essays with thesis, arguments, conclusion
- prd: Product requirements document with problem, solution, implementation
- research: Research papers with question, methodology, findings, discussion
- resume: Professional CV with experience, skills, education
- custom: For any other document type

DEEP WRITER FEATURES:
You will create THREE distinct pages:
1. OUTLINE PAGE: Structured document outline with headings, subheadings and key points
2. DRAFT PAGE: Smart draft with guidance notes and placeholder text
3. RESEARCH PAGE: Relevant facts and statistics to support the document

GUIDANCE MARKER FORMAT:
- Add guidance using triple brackets like [[[this is guidance]]]
- Keep guidance brief (1-3 sentences)
- Guidance explains purpose of a section, not what to write

CONTENT RULES FOR ALL PAGES:
- Use appropriate markdown formatting 
- Include triple-bracketed guidance throughout
- Leave room for user creativity
- Never write complete sentences for the user

PAGE 1 - OUTLINE:
- Create a comprehensive outline with hierarchical structure
- Include main sections and subsections with logical flow
- Add brief points explaining what belongs in each section
- Include guidance notes explaining the structure
- Format: Use heading levels (# Main, ## Sub) for structure

PAGE 2 - DRAFT:
- Create a starting draft with smart placeholders
- Include section headings matching the outline
- Add [[[guidance notes]]] explaining what to write in each section
- Include placeholder bullet points (incomplete sentences) that help start writing
- DO NOT write complete paragraphs or finished text

PAGE 3 - RESEARCH:
- Organize facts and references by topic
- Include relevant statistics when available
- Format as bullet points grouped by subject
- Add [[[guidance notes]]] explaining how to use the research

RESPONSE FORMAT - STRICT JSON:
{
  "documentType": "string", // The detected document type: essay, prd, research, resume, custom
  "title": "string", // A short, appropriate title
  "confidence": number, // 0.0-1.0 confidence score
  "deepWriter": true,
  "pages": [
    {
      "type": "outline",
      "name": "Outline",
      "content": "string", // Markdown content with outline structure
      "contentType": "string" // Same as documentType
    },
    {
      "type": "draft",
      "name": "Draft",
      "content": "string", // Markdown content with smart placeholders
      "contentType": "string" // Same as documentType
    },
    {
      "type": "research",
      "name": "Research",
      "content": "string", // Markdown content with facts and references
      "contentType": "string" // Same as documentType
    }
  ]
}

CRITICALLY IMPORTANT INSTRUCTIONS ABOUT FORMAT:
1. Return valid JSON DIRECTLY. Do not add explanations before or after the JSON.
2. DO NOT WRAP YOUR RESPONSE in code blocks or markdown formatting.
3. DO NOT include code fence markers (\`\`\`json) at the beginning or end of your response.
4. Your entire response must be valid parseable JSON with no additional text.
5. Each page's content must include [[[guidance notes]]] throughout.
6. Never write complete content for the user - provide structure and starting points only.
7. KEEP THE CONTENT FIELD SIMPLE - use basic characters only, avoid special characters when possible.
8. ALWAYS ADD COMMAS BETWEEN OBJECTS in arrays - ensure each object in the "pages" array has a comma after it.
9. KEEP CONTENT SHORT - no more than 1-2 paragraphs per page to avoid truncation and JSON parsing errors.
10. DO NOT ADD COMMENTS within the JSON - they will break parsing.
11. USE SIMPLE QUOTES ONLY - Ensure all quotes are properly escaped with \\".
12. AVOID TRUNCATION - Especially in the research section, keep content VERY short to avoid being cut off.
13. NAMES SHOULD BE COMPLETE - Never end content with a partial name like "Nicho" or "Lloy".`
        : `You are a document creation assistant. Analyze user requests and generate document structures.

USER REQUEST: "${prompt}"

DOCUMENT STRUCTURE RULES:
1. Use special markers:
   - GUIDANCE: [[[Instructions in triple square brackets]]]
   
2. For each section:
   - Add guidance [[[like this]]] explaining what goes there
   - Follow with placeholders as list items that can act as a starting point for the section
   - Example:
     # Introduction
     [[[Explain your thesis here]]]
     - As technology evolves...

3. Include BOTH marker types throughout
4. Keep guidance brief (1-2 sentences)
5. Keep placeholders very short (1-5 words or partial phrase with "...")
6. Never nest markers

CONTENT GUIDANCE:
- For essays: Include intro with thesis, body sections, conclusion
- For business docs: Add executive summary, problem, solution, implementation
- For research: Include question, methodology, results, discussion
- For creative: Provide structure but leave creativity to user
- Placeholders should hint at content but not write it:
  GOOD: Our solution addresses...
  BAD: Our solution addresses all customer needs by implementing an AI system
- Balance between structure and creative freedom
- Make placeholders actionable starting points
- Add double line breaks (\\n\\n) between list items

RESPONSE FORMAT - STRICT JSON:
{
  "documentType": "string", // e.g., "PRD", "essay", "research"
  "title": "string", // A short, appropriate title
  "content": "string", // Markdown content with [[[guidance]]]
  "confidence": number // 0.0-1.0 confidence score
}

SUPPORTED MARKDOWN:
- Headers: # H1, ## H2, ### H3
- Lists: - Bullet or 1. Numbered
- Tasks: - [ ] Unchecked or - [x] Checked
- Text: **bold**, *italic*, \`code\`

CRITICALLY IMPORTANT INSTRUCTIONS ABOUT FORMAT:
1. Return valid JSON DIRECTLY. Do not add explanations before or after the JSON.
2. DO NOT WRAP YOUR RESPONSE in code blocks or markdown formatting.
3. DO NOT include code fence markers (\`\`\`json) at the beginning or end of your response.
4. Your entire response must be valid parseable JSON with no additional text.
5. Include [[[guidance]]] markers throughout the content.
6. Never write complete content for the user - provide structure and starting points only.
7. KEEP THE CONTENT FIELD SIMPLE - use basic characters only, avoid special characters when possible.
8. KEEP CONTENT SHORT - no more than 1-2 paragraphs to avoid truncation and JSON parsing errors.
9. DO NOT ADD COMMENTS within the JSON - they will break parsing.
10. USE SIMPLE QUOTES ONLY - Ensure all quotes are properly escaped with \\".
11. AVOID TRUNCATION - Keep content very short to avoid being cut off.
12. NAMES SHOULD BE COMPLETE - Never end content with a partial name like "Nicho" or "Lloy".`;

      // Call the Claude API
      log(requestId, "Making request to Claude API...");
      const apiStartTime = Date.now();

      try {
        const response = await anthropic.messages.create({
          model,
          max_tokens: maxTokens,
          temperature: temperature,
          thinking: thinking
            ? {
                type: "enabled",
                budget_tokens: thinking.budgetTokens,
              }
            : undefined,
          messages: [
            {
              role: "user",
              content: "Generate a document structure based on my request.",
            },
          ],
          system: systemPrompt,
        });

        const apiDuration = Date.now() - apiStartTime;
        log(requestId, `Claude API response received in ${apiDuration}ms`);

        const responseText =
          response.content?.[0]?.type === "text"
            ? (response.content[0] as { type: "text"; text: string }).text
            : "";

        try {
          // Attempt to parse JSON from the response
          // Check if the response contains code blocks which is a common error
          if (responseText.includes("```")) {
            // logError(
            //     requestId,
            //     'Claude returned code blocks in response which is invalid. Attempting to extract JSON content.'
            // )
          }

          // Log the raw response for debugging (truncated in logs but full in console)
          const truncatedText =
            responseText.length > 500
              ? responseText.substring(0, 500) + "... (truncated)"
              : responseText;
          log(requestId, `Raw Claude response (truncated): ${truncatedText}`);

          // Print the full response to the console for debugging
          console.log("FULL CLAUDE RESPONSE:", responseText);

          // First, look for JSON code block
          const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
          let jsonStr = jsonMatch ? jsonMatch[1] : responseText;

          // Clean up any non-JSON text
          jsonStr = jsonStr.replace(/^[^{]*/, "").replace(/[^}]*$/, "");

          try {
            // Parse the JSON
            const documentData = JSON.parse(
              jsonStr,
            ) as GenerateDocumentResponse;

            // Log success
            log(requestId, "Successfully parsed JSON response");
          } catch (jsonParseError) {
            // Enhanced logging for JSON parsing errors
            // logError(requestId, `JSON parse error: ${jsonParseError.message}`)

            // Log the problematic JSON string (truncated for readability)
            const errorMessage =
              jsonParseError instanceof Error
                ? jsonParseError.message
                : String(jsonParseError);
            const problemPosition = (errorMessage.match(/position (\d+)/) || [
              null,
              "unknown",
            ])[1];
            const startPos = Math.max(0, Number(problemPosition) - 50);
            const endPos = Math.min(
              jsonStr.length,
              Number(problemPosition) + 50,
            );
            const problemContext = jsonStr.substring(startPos, endPos);

            // logError(
            //     requestId,
            //     `JSON error context around position ${problemPosition}: ${problemContext}`
            // )

            // Try additional cleanup on the JSON string
            try {
              // Find JSON structure issues by checking for mismatched arrays/objects
              console.log("Attempting advanced JSON repair...");

              // Check for more complex JSON structure issues
              let fixedJson = jsonStr;

              // Try to fix common issues like trailing commas in arrays/objects
              fixedJson = fixedJson
                .replace(/,\s*\]/g, "]") // Remove trailing commas in arrays
                .replace(/,\s*\}/g, "}"); // Remove trailing commas in objects

              // Check if we need to fix missing commas between array elements or objects
              // This specifically targets the error: Expected ',' or ']' after array element
              const missingCommaPattern = /}\s*{/g;
              if (missingCommaPattern.test(fixedJson)) {
                console.log("Found missing commas between objects, fixing...");
                fixedJson = fixedJson.replace(/}\s*{/g, "},{");
              }

              // Check for missing quotes around property names
              const unquotedPropPattern = /{\s*(\w+)\s*:/g;
              let match;
              while ((match = unquotedPropPattern.exec(fixedJson)) !== null) {
                const prop = match[1];
                if (prop && !prop.startsWith('"') && !prop.endsWith('"')) {
                  const original = `{${prop}:`;
                  const fixed = `{"${prop}":`;
                  fixedJson = fixedJson.replace(original, fixed);
                }
              }

              // For the specific issue seen in logs, try to fix array elements without commas
              // Looking at the error context, we often see an issue at position where we have:
              // "content": "text...", "contentType": "research" without a comma between page objects

              // This specific regex targets the common error seen in the logs where
              // we have array objects without commas between them
              fixedJson = fixedJson.replace(
                /"content":\s*"[^"]*"\s*"contentType":/g,
                '"content": "...", "contentType":',
              );

              // More aggressive fix targeting any property pattern without commas between them
              fixedJson = fixedJson.replace(
                /"[^"]+"\s*:\s*"[^"]*"\s*"[^"]+"\s*:/g,
                (match) => {
                  // Add a comma between the end of one property and the start of another
                  return match.replace(/"\s*"/, '", "');
                },
              );

              // Fix for missing commas in the array of pages
              fixedJson = fixedJson.replace(/}\s*{/g, "},{");

              // Specifically look for the error reported in the logs at position ~9103
              // "nalyses...", "contentType": "research" } { - Missing comma between objects
              fixedJson = fixedJson.replace(/}\s*{/g, "}, {");

              // Handle problematic escape sequences in content strings
              // This can happen with triple brackets and other special characters that Claude includes
              // First, we'll identify content fields and make their values safe
              const contentRegex = /"content":\s*"([^"]*)"/g;
              fixedJson = fixedJson.replace(
                contentRegex,
                (match, contentValue) => {
                  // Replace any special characters or sequences that might break JSON
                  const safeContent = contentValue
                    .replace(/\\/g, "\\\\") // Escape backslashes
                    .replace(/"/g, '\\"') // Escape quotes
                    .replace(/\n/g, "\\n") // Escape newlines
                    .replace(/\r/g, "\\r") // Escape carriage returns
                    .replace(/\t/g, "\\t"); // Escape tabs

                  // Create a shorter, safer version if the content is very long
                  if (safeContent.length > 500) {
                    return `"content": "${safeContent.substring(0, 100)}... (truncated for safety)"`;
                  }

                  return `"content": "${safeContent}"`;
                },
              );

              // Recursively check for balanced braces/brackets
              const balanceBraces = (json: string): string => {
                // Count of opening and closing braces/brackets
                let braceCount = 0;
                let bracketCount = 0;

                // Track where any imbalance occurs
                let lastOpenBrace = -1;
                let lastOpenBracket = -1;

                for (let i = 0; i < json.length; i++) {
                  if (json[i] === "{") {
                    braceCount++;
                    lastOpenBrace = i;
                  } else if (json[i] === "}") {
                    braceCount--;
                  } else if (json[i] === "[") {
                    bracketCount++;
                    lastOpenBracket = i;
                  } else if (json[i] === "]") {
                    bracketCount--;
                  }
                }

                // Add missing closing braces/brackets at the end if needed
                let balanced = json;
                for (let i = 0; i < braceCount; i++) {
                  balanced += "}";
                }
                for (let i = 0; i < bracketCount; i++) {
                  balanced += "]";
                }

                return balanced;
              };

              // Check for truncated content - a common issue when Claude hits token limits
              const checkForTruncation = (json: string): string => {
                // Look for content fields that might be truncated
                const contentRegex = /"content":\s*"([^"]*)$/;
                if (contentRegex.test(json)) {
                  console.log("Found potentially truncated content, fixing...");
                  // If we find an unclosed content string, close it
                  return json.replace(contentRegex, '"content": "..."');
                }

                // Look for broken mid-name truncations
                const nameFragments = [
                  "Nicho",
                  "Robe",
                  "Warre",
                  "Lloy",
                  "Lawre",
                ];
                for (const fragment of nameFragments) {
                  if (
                    json.endsWith(fragment) ||
                    json.includes(`${fragment}\n`)
                  ) {
                    console.log(
                      `Found truncated name fragment '${fragment}', fixing...`,
                    );
                    // Replace the fragment with a completed name + closing quote
                    return json.replace(
                      new RegExp(`${fragment}($|\\n)`),
                      `${fragment}... (truncated)"$1`,
                    );
                  }
                }

                return json;
              };

              // Check and fix any truncated content
              fixedJson = checkForTruncation(fixedJson);

              // Balance the JSON and try to parse again
              const balancedJson = balanceBraces(fixedJson);

              // Make one final pass to ensure all JSON is well-formed
              // This adds missing closing braces/brackets and ensures valid JSON structure
              const finalJson = balancedJson
                .replace(/\}\s*\s*\{/g, "}, {")
                .replace(/\]([^,\}\]])/g, "], $1")
                .replace(/\}([^,\}\]])/g, "}, $1");

              console.log("Attempting to parse fixed JSON...");

              // Try parsing again with the cleaned JSON
              const documentData = JSON.parse(
                finalJson,
              ) as GenerateDocumentResponse;
              log(
                requestId,
                "Successfully parsed JSON after advanced cleaning",
              );

              // Continue with the fixed data
              jsonStr = finalJson;
            } catch (retryError) {
              console.log("Advanced JSON repair failed:", retryError);

              // Last resort: try to construct a minimal valid response from the text
              try {
                // Extract just enough information to create a fallback document
                const titleMatch = jsonStr.match(/"title":\s*"([^"]+)"/);
                const documentTypeMatch = jsonStr.match(
                  /"documentType":\s*"([^"]+)"/,
                );

                // Create minimum viable document from the fragments
                const fallbackDocument = {
                  documentType: documentTypeMatch
                    ? documentTypeMatch[1]
                    : "research",
                  title: titleMatch ? titleMatch[1] : "Generated Document",
                  content:
                    "The document could not be fully parsed due to JSON errors.",
                  confidence: 0.5,
                  deepWriter: true,
                  pages: [
                    {
                      type: "outline",
                      name: "Outline",
                      content:
                        "# " +
                        (titleMatch ? titleMatch[1] : "Document") +
                        "\n\n[[[JSON parsing error occurred. Please try generating again.]]]",
                      contentType: documentTypeMatch
                        ? documentTypeMatch[1]
                        : "research",
                    },
                    {
                      type: "draft",
                      name: "Draft",
                      content:
                        "# " +
                        (titleMatch ? titleMatch[1] : "Document") +
                        "\n\n[[[JSON parsing error occurred. Please try generating again.]]]",
                      contentType: documentTypeMatch
                        ? documentTypeMatch[1]
                        : "research",
                    },
                    {
                      type: "research",
                      name: "Research",
                      content:
                        "# Research Notes\n\n[[[JSON parsing error occurred. Please try generating again.]]]",
                      contentType: documentTypeMatch
                        ? documentTypeMatch[1]
                        : "research",
                    },
                  ],
                };

                console.log("Created fallback document from fragments");
                jsonStr = JSON.stringify(fallbackDocument);
              } catch (fallbackError) {
                // If all attempts fail, rethrow the original error
                throw jsonParseError;
              }
            }
          }

          // Parse the JSON (this line will be reached only if parsing succeeded in the try block or the retry)
          const documentData = JSON.parse(jsonStr) as GenerateDocumentResponse;

          // Extract nested content if needed
          let extractedContent = documentData.content || "";
          let extractedTitle = documentData.title || "Generated Document";

          // If content itself seems to be a JSON string, parse it to extract the real content and title
          if (
            extractedContent.includes('"content":') &&
            extractedContent.startsWith("{")
          ) {
            try {
              const nestedData = JSON.parse(extractedContent);
              if (nestedData && typeof nestedData.content === "string") {
                // We found nested content, use it instead
                log(requestId, "Extracted nested content from response");
                extractedContent = nestedData.content;

                // Also get nested title if available
                if (nestedData.title && typeof nestedData.title === "string") {
                  extractedTitle = nestedData.title;
                }
              }
            } catch (e) {
              // If parsing fails, stick with the original content
              log(requestId, "Failed to parse nested content, using as-is");
            }
          }

          // Ensure document has required fields
          const validatedResponse: GenerateDocumentResponse = {
            documentType: documentData.documentType || "generic",
            title: extractedTitle,
            content: extractedContent,
            confidence:
              typeof documentData.confidence === "number"
                ? documentData.confidence
                : 0.8,
            model: model, // Include model information from config
          };

          // Add Deep Writer fields if enabled
          if (deepWriter) {
            validatedResponse.deepWriter = true;

            // If the API returned pages, include them in the response
            if (documentData.pages && Array.isArray(documentData.pages)) {
              validatedResponse.pages = documentData.pages;
            } else {
              // Create fallback pages if the model didn't return them correctly
              log(requestId, "Creating fallback pages for Deep Writer mode");
              validatedResponse.pages = [
                {
                  type: "outline",
                  name: "Outline",
                  content: extractedContent,
                  contentType:
                    documentData.documentType === "essay" ||
                    documentData.documentType === "prd" ||
                    documentData.documentType === "research" ||
                    documentData.documentType === "resume" ||
                    documentData.documentType === "custom"
                      ? documentData.documentType
                      : "custom",
                },
                {
                  type: "draft",
                  name: "Draft",
                  content: `# ${extractedTitle}\n\n[[[Start drafting your content based on the outline.]]]`,
                  contentType:
                    documentData.documentType === "essay" ||
                    documentData.documentType === "prd" ||
                    documentData.documentType === "research" ||
                    documentData.documentType === "resume" ||
                    documentData.documentType === "custom"
                      ? documentData.documentType
                      : "custom",
                },
                {
                  type: "research",
                  name: "Research",
                  content: `# Research for ${extractedTitle}\n\n[[[Add relevant facts and information here to support your document.]]]`,
                  contentType:
                    documentData.documentType === "essay" ||
                    documentData.documentType === "prd" ||
                    documentData.documentType === "research" ||
                    documentData.documentType === "resume" ||
                    documentData.documentType === "custom"
                      ? documentData.documentType
                      : "custom",
                },
              ];
            }
          }

          const totalRequestTime = Date.now() - requestStartTime;
          log(
            requestId,
            `Document generation complete in ${totalRequestTime}ms`,
          );

          // Send completion event if using SSE
          if (useSSE && sessionToken) {
            try {
              // Send processing event
              addProgressEvent(sessionToken, {
                step: "processing",
                message: "Processing document pages...",
                percentage: 80,
                timestamp: Date.now(),
                documentId: documentId || undefined,
              });

              // Send complete event immediately - no need for setTimeout
              // This simplifies the flow and reduces timing issues
              addProgressEvent(sessionToken, {
                step: "complete",
                message: "Document ready!",
                percentage: 100,
                timestamp: Date.now(),
                documentId: documentId || undefined,
              });
            } catch (sseError) {
              // Log but don't throw - the document generation succeeded
              // even if we couldn't send progress events
              console.error("Error sending SSE progress events:", sseError);
            }
          }

          return NextResponse.json(validatedResponse);
        } catch (parseError) {
          logError(requestId, "Error parsing JSON response:", parseError);

          // Return a fallback document with the raw text
          return NextResponse.json({
            documentType: "text",
            title: "Generated Document",
            content: responseText,
            confidence: 0.5,
          });
        }
      } catch (apiError) {
        logError(requestId, "Error during Claude API call:", apiError);

        // Send error event if using SSE
        if (useSSE && sessionToken) {
          const errorMessage =
            apiError instanceof Error
              ? apiError.message
              : "API Error during generation";
          addProgressEvent(sessionToken, {
            step: "error",
            message: errorMessage,
            percentage: 0,
            timestamp: Date.now(),
            documentId: documentId || undefined,
          });
        }

        throw apiError;
      }
    } catch (error) {
      logError(requestId, "Error in document generation API:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";

      // Send error event if using SSE
      if (useSSE && sessionToken) {
        addProgressEvent(sessionToken, {
          step: "error",
          message: errorMessage,
          percentage: 0,
          timestamp: Date.now(),
          documentId: documentId || undefined,
        });
      }

      return errorResponse(errorMessage, 500);
    }
  } catch (error) {
    logError(requestId, "Error parsing request:", error);
    return errorResponse("Invalid request format", 400);
  }
}
