import { NextRequest, NextResponse } from "next/server";
import { getAnthropicClient, getOpenAIClient, createRequestContext, log, logError } from "@/utils/common/apiUtils";
import { originKnowledgeBase } from "@/app/origin-agent/origin-knowledge";

export async function POST(request: NextRequest) {
  const { requestId, requestStartTime } = createRequestContext();
  log(requestId, "Origin Agent API route called");

  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError: any) {
      logError(requestId, "Failed to parse request body", parseError);
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      logError(requestId, "Missing or invalid messages", { messages });
      return NextResponse.json({ error: "Missing messages" }, { status: 400 });
    }

    log(requestId, `Processing ${messages.length} messages`);

    // Try OpenAI first, then fall back to Anthropic
    const useOpenAI = !!(process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY);
    let openai: any = null;
    let anthropic: any = null;

    if (useOpenAI) {
      try {
        openai = getOpenAIClient(requestId);
        log(requestId, "Using OpenAI API");
      } catch (clientError: any) {
        logError(requestId, "Failed to create OpenAI client", clientError);
        // Fall back to Anthropic
        try {
          anthropic = getAnthropicClient(requestId);
          log(requestId, "Falling back to Anthropic API");
        } catch (anthropicError: any) {
          const errorMsg = anthropicError?.message || "Unknown error";
          return NextResponse.json(
            { 
              error: "No AI service configured. Please set OPENAI_API_KEY or CLAUDE_API_KEY in your .env.local file.",
            },
            { status: 500 }
          );
        }
      }
    } else {
      try {
        anthropic = getAnthropicClient(requestId);
        log(requestId, "Using Anthropic API");
      } catch (clientError: any) {
        logError(requestId, "Failed to create Anthropic client", clientError);
        const errorMsg = clientError?.message || "Unknown error";
        return NextResponse.json(
          { 
            error: errorMsg.includes("API key") 
              ? "No AI service configured. Please set OPENAI_API_KEY or CLAUDE_API_KEY in your .env.local file."
              : `Failed to initialize AI service: ${errorMsg}`,
          },
          { status: 500 }
        );
      }
    }

    // Build comprehensive system prompt with Origin knowledge
    // Use a concise summary to avoid token limit issues
    let knowledgeBaseStr = '';
    try {
      if (!originKnowledgeBase) {
        throw new Error("Knowledge base not loaded");
      }
      
      const kb = originKnowledgeBase;
      const components = (kb.components || {}) as Record<string, any>;
      const componentNames = Object.keys(components);
      const componentList = componentNames.join(', ');
      
      // Build component summaries safely
      const componentSummaries = componentNames.slice(0, 10).map(name => {
        const comp = components[name];
        if (!comp) return '';
        const desc = comp.description || '';
        const imp = comp.import || '';
        const ex = comp.example || '';
        return `- ${name}: ${desc} | Import: ${imp} | Example: ${ex}`;
      }).filter(Boolean).join('\n');
      
      const installation = kb.installation || {};
      const tokens = kb.tokens || {};
      
      // Build comprehensive token information
      const tokenInfo = [];
      
      if (tokens.colors) {
        const colors = tokens.colors;
        tokenInfo.push(`**Colors:**`);
        if (colors.semantic?.allSemanticTokens) {
          const semantic = colors.semantic.allSemanticTokens;
          tokenInfo.push(`- Semantic Tokens (50+ tokens):`);
          if (semantic.background) {
            tokenInfo.push(`  - Background tokens: ${semantic.background.join(', ')}`);
          }
          if (semantic.text) {
            tokenInfo.push(`  - Text tokens: ${semantic.text.join(', ')}`);
          }
          if (semantic.border) {
            tokenInfo.push(`  - Border tokens: ${semantic.border.join(', ')}`);
          }
          if (semantic.icon) {
            tokenInfo.push(`  - Icon tokens: ${semantic.icon.join(', ')}`);
          }
        }
        if (colors.primitive?.allPrimitiveTokens) {
          tokenInfo.push(`- Primitive Tokens (70+ tokens):`);
          tokenInfo.push(`  All primitive tokens: ${colors.primitive.allPrimitiveTokens.join(', ')}`);
          if (colors.primitive.brand) {
            tokenInfo.push(`  - Brand color: Green60 (${colors.primitive.brand.green60})`);
          }
        }
      }
      
      if (tokens.spacing?.allSpacingTokens) {
        tokenInfo.push(`**Spacing:** 4px base unit scale`);
        tokenInfo.push(`- All 12 values: Space0 (0px), Space0_25 (1px), Space0_5 (2px), Space1 (4px), Space2 (8px), Space3 (12px), Space4 (16px), Space5 (20px), Space6 (24px), Space8 (32px), Space10 (40px), Space12 (48px)`);
      }
      
      if (tokens.typography) {
        const typo = tokens.typography;
        tokenInfo.push(`**Typography:**`);
        tokenInfo.push(`- Fonts: ${typo.fonts?.matter || 'Matter'} (headings), ${typo.fonts?.inter || 'Inter'} (body), ${typo.fonts?.glyph || 'Glyph'} (brand)`);
        if (typo.heading?.variants) {
          tokenInfo.push(`- Heading variants: ${typo.heading.variants.join(', ')}`);
        }
        if (typo.text?.variants) {
          tokenInfo.push(`- Text variants: ${typo.text.variants.join(', ')}`);
        }
      }
      
      if (tokens.elevation?.levels) {
        tokenInfo.push(`**Elevation:** ${tokens.elevation.levels.join(', ')}`);
      }
      
      if (tokens.borderRadius?.allBorderRadiusTokens) {
        tokenInfo.push(`**Border Radius:** ${tokens.borderRadius.allBorderRadiusTokens.join(', ')}`);
      }
      
      if (tokens.blurRadius) {
        tokenInfo.push(`**Blur Radius:** Available for backdrop filters`);
      }
      
      const tokenSection = tokenInfo.length > 0 ? tokenInfo.join('\n') : 'Design tokens available for colors, spacing, typography, elevation, border radius, and blur radius';
      
      // Build additional assets information
      const patterns = kb.patterns || {};
      const contentGuidelines = kb.contentGuidelines || {};
      const iconography = kb.iconography || {};
      const illustrations = kb.illustrations || {};
      const animation = kb.animation || {};
      const accessibility = kb.accessibility || {};
      
      const additionalAssets = [];
      
      if (patterns.emptyState || patterns.forms || patterns.disabledState || patterns.feedbackPattern || patterns.transforms) {
        additionalAssets.push(`**UI Patterns:** Empty states, Forms (with error handling), Disabled states, Feedback surveys, Text transforms/underlines/highlights`);
      }
      
      if (contentGuidelines.voiceAndTone || contentGuidelines.terminology || contentGuidelines.style || contentGuidelines.accessibility) {
        additionalAssets.push(`**Content Guidelines:** Voice and tone (bold, empowering, warm), Terminology guide, Style guidelines, Accessibility in content`);
      }
      
      if (iconography.categories) {
        additionalAssets.push(`**Iconography:** Logos, Interface icons, Agents icons, Apps icons, Authorship icons, Consent icons, Emoji, Flag icons, Outcome icons, Social icons`);
      }
      
      if (illustrations.categories) {
        additionalAssets.push(`**Illustrations:** Empty/Success state illustrations (used in pairs), Spot illustrations`);
      }
      
      if (animation.prefersReducedMotion) {
        additionalAssets.push(`**Animation:** All animations respect prefers-reduced-motion setting`);
      }
      
      if (accessibility.wcag || accessibility.keyboardNavigation || accessibility.screenReaders) {
        additionalAssets.push(`**Accessibility:** WCAG compliance, Keyboard navigation, Screen reader support, ARIA patterns`);
      }
      
      const additionalAssetsSection = additionalAssets.length > 0 ? '\n\n' + additionalAssets.join('\n') : '';
      
      knowledgeBaseStr = `**Installation:**
- Package: ${installation.package || '@superhuman/origin'}
- Install: ${installation.installCommand || 'npm install @superhuman/origin'}
- CSS: ${installation.cssImport || "@import '@superhuman/origin'"}
- Fonts: ${installation.fontsImport || "import '@superhuman/origin/dist/fonts.css'"}

**Available Components:** ${componentList || 'button, textfield, form, modal, select, tabs, badge, tag, switch, radiogroup, toast, tooltip, menu, searchfield, link, heading, text, flex'}

**Key Components:**
${componentSummaries || '- button, textfield, form, modal, select, tabs'}

${tokenSection}${additionalAssetsSection}`;

      log(requestId, `Knowledge base summary created: ${knowledgeBaseStr.length} characters`);
    } catch (kbError: any) {
      logError(requestId, "Failed to build knowledge base summary", kbError);
      console.error("Knowledge base error details:", {
        error: kbError,
        message: kbError?.message,
        stack: kbError?.stack,
      });
      // Fallback to minimal knowledge base
      knowledgeBaseStr = `Origin Design System (@superhuman/origin) - React component library.

**Installation:** npm install @superhuman/origin
**Components:** button, textfield, textarea, form, modal, select, tabs, badge, tag, switch, radiogroup, toast, tooltip, menu, searchfield, link, heading, text, flex
**Design Tokens:** Colors (semantic and primitive), Spacing (4px base), Typography (Matter/Inter), Elevation`;
    }

    const systemPrompt = `You are an expert assistant for the Origin Design System by Superhuman.

You help developers understand and use Origin React components effectively. You can:
1. Answer questions about components, their props, variants, and usage
2. Generate complete, working React code examples using @superhuman/origin
3. Provide design guidance and best practices
4. Help with installation and setup
5. Explain design tokens (colors, spacing, typography, elevation)
6. Guide on UI patterns (empty states, forms, disabled states, feedback, transforms)
7. Provide content guidelines (voice, tone, terminology, style, accessibility)
8. Help with iconography and illustrations
9. Explain animation and motion guidelines
10. Provide accessibility best practices

**Origin Knowledge Base Summary:**
${knowledgeBaseStr}

**CRITICAL: When users ask about design tokens, especially "list all tokens" or "what tokens are available":**
- You have access to comprehensive token data in the knowledge base
- Provide COMPLETE, DETAILED lists - do NOT summarize
- For colors: List ALL semantic tokens (all property/concept/variant combinations) AND all primitive tokens (all color families with all shades)
- For spacing: List ALL 12 values (Space0, Space0_25, Space0_5, Space1, Space2, Space3, Space4, Space5, Space6, Space8, Space10, Space12)
- For typography: List ALL heading variants (heading-large, heading-medium, heading-small, heading-xsmall, heading-xxsmall) AND all text variants (text-large, text-medium, text-small, text-xsmall)
- Include border radius tokens (RadiusHalf, Radius1, Radius2, Radius3)
- Include blur radius tokens
- Organize by category with clear sections
- Use bullet points or formatted lists for easy scanning

**Important:** You have access to the full knowledge base. When users ask about specific components, provide detailed information including:
- All available props and variants
- Usage guidelines and best practices
- Complete code examples with proper imports
- Design token usage when relevant

**When generating code:**
- Always use real @superhuman/origin components
- Include proper imports
- Provide complete, runnable examples
- Use TypeScript/React best practices
- Format code with proper indentation
- Include all necessary props

**When answering questions:**
- Be concise and helpful
- Provide code examples when relevant
- Reference specific component props and variants
- Use markdown formatting
- Link related concepts

**When users ask about design tokens (especially "list all tokens" or "what tokens are available"):**
- Provide COMPREHENSIVE lists, not summaries
- List ALL semantic color tokens (all combinations of property/concept/variant)
- List ALL primitive color tokens (all color families with all shades)
- List ALL spacing values (all 12 values: Space0, Space0_25, Space0_5, Space1-Space12)
- List ALL typography variants (all 5 heading + all 4 text variants)
- Include border radius tokens (RadiusHalf, Radius1, Radius2, Radius3)
- Include blur radius tokens
- Organize tokens by category with clear sections
- Use bullet points or tables for easy scanning
- Do NOT summarize - provide the complete catalog when asked for "all tokens"

**Response format:**
- Keep the main response VERY SIMPLE and concise (1-2 sentences max)
- Acknowledge the user's question briefly
- List key variations/options if applicable (e.g., "Button has primary, secondary, tertiary variants")
- Put detailed explanations, guidelines, and best practices in a separate section marked with "## Guidelines" or "## Detailed Information"
- Use \`\`\`tsx code blocks for React examples
- Use \`\`\`bash for installation commands
- Use **bold** for emphasis
- Use bullet points for lists

**Example response structure:**
"Button supports primary, secondary, tertiary, ghost, and danger variants. Here's an example:

\`\`\`tsx
[code example]
\`\`\`

## Guidelines
[Detailed explanation, best practices, usage guidelines, etc.]"

Always format your responses clearly with markdown. Keep the main response brief - users can read detailed guidelines in the Guidelines tab.`;

    log(requestId, `Calling ${useOpenAI ? 'OpenAI' : 'Claude'} API...`);
    log(requestId, `System prompt length: ${systemPrompt.length} characters`);
    log(requestId, `Messages count: ${messages.length}`);
    
    let content = "";
    
    try {
      if (openai) {
        // OpenAI API call
        const response = await openai.chat.completions.create({
          model: "gpt-4o",
          max_tokens: 4000,
          temperature: 0.7,
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map((msg: any) => ({
              role: msg.role === "assistant" ? "assistant" : "user",
              content: msg.content,
            })),
          ],
        });

        log(requestId, "OpenAI API response received");
        
        if (!response.choices || response.choices.length === 0) {
          logError(requestId, "Empty response from OpenAI API", response);
          return NextResponse.json(
            { error: "Empty response from AI service" },
            { status: 500 }
          );
        }

        content = response.choices[0]?.message?.content || "";
      } else if (anthropic) {
        // Anthropic API call
        const response = await anthropic.messages.create({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 4000,
          temperature: 0.7,
          messages: messages.map((msg: any) => ({
            role: msg.role,
            content: msg.content,
          })),
          system: systemPrompt,
        });

        log(requestId, "Claude API response received");

        if (!response.content || response.content.length === 0) {
          logError(requestId, "Empty response from Claude API", response);
          return NextResponse.json(
            { error: "Empty response from AI service" },
            { status: 500 }
          );
        }

        content =
          response.content[0].type === "text"
            ? response.content[0].text
            : "";
      }
    } catch (apiError: any) {
      logError(requestId, `${useOpenAI ? 'OpenAI' : 'Claude'} API call failed`, apiError);
      console.error("API error details:", {
        message: apiError?.message,
        status: apiError?.status,
        error: apiError,
      });
      return NextResponse.json(
        { 
          error: `${useOpenAI ? 'OpenAI' : 'Claude'} API error: ${apiError?.message || 'Unknown error'}`,
          details: process.env.NODE_ENV === 'development' ? {
            status: apiError?.status,
            type: apiError?.type,
          } : undefined,
        },
        { status: 500 }
      );
    }

    if (!content) {
      logError(requestId, "No text content in response", { content });
      return NextResponse.json(
        { error: "No content in AI response" },
        { status: 500 }
      );
    }

    log(requestId, `Origin Agent response generated in ${Date.now() - requestStartTime}ms`);

    return NextResponse.json({ content });
  } catch (error: any) {
    logError(requestId, "Error in Origin Agent API:", error);
    console.error("Full error details:", {
      message: error?.message,
      stack: error?.stack,
      name: error?.name,
      error: error,
    });
    
    // Ensure we always return a proper error message
    let errorMessage = "Unknown error occurred";
    if (error?.message) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error?.toString) {
      errorMessage = error.toString();
    }
    
    const errorResponse: any = { 
      error: `Failed to process request: ${errorMessage}`,
    };
    
    if (process.env.NODE_ENV === 'development') {
      errorResponse.details = {
        message: error?.message,
        name: error?.name,
        type: error?.constructor?.name,
      };
    }
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

