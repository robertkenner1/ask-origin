'use client';

import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Button, Heading, Text, TextField, Flex, Tokens, Textarea, Tabs } from '@superhuman/origin';
import { generateHTMLExample, findRelevantInfo } from './origin-knowledge';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import * as OriginComponents from '@superhuman/origin';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  htmlExample?: string;
  components?: string[];
  guidelines?: string;
}

export default function OriginAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [streamingContent, setStreamingContent] = useState<string>('');
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(null);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [rotatingText, setRotatingText] = useState('');
  const [rotatingTextIndex, setRotatingTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const conversationContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitialScroll = useRef(true);

  const scrollToBottom = () => {
    if (messagesEndRef.current && conversationContainerRef.current) {
      conversationContainerRef.current.scrollTo({
        top: conversationContainerRef.current.scrollHeight,
        behavior: isInitialScroll.current ? 'auto' : 'smooth'
      });
      isInitialScroll.current = false;
    }
  };

  // Helper to parse LLM responses and extract code blocks and guidelines
  const parseLLMResponse = (content: string) => {
    const codeBlockRegex = /```(?:tsx|jsx|typescript|javascript)?\n([\s\S]*?)```/g;
    const codeBlocks: string[] = [];
    let match;
    
    while ((match = codeBlockRegex.exec(content)) !== null) {
      codeBlocks.push(match[1].trim());
    }
    
    // Extract components mentioned in code
    const components = extractComponentsFromCode(codeBlocks.join('\n'));
    
    // Extract guidelines section (everything after ## Guidelines or ## Detailed Information)
    const guidelinesMatch = content.match(/##\s*(?:Guidelines|Detailed Information)[\s\S]*$/i);
    let guidelines = undefined;
    let text = content;
    
    if (guidelinesMatch) {
      guidelines = guidelinesMatch[0].replace(/^##\s*(?:Guidelines|Detailed Information)\s*/i, '').trim();
      // Remove guidelines section from main text
      text = text.replace(/##\s*(?:Guidelines|Detailed Information)[\s\S]*$/i, '').trim();
    }
    
    // Remove code blocks from text for cleaner display
    codeBlocks.forEach(block => {
      text = text.replace(/```[\s\S]*?```/g, '');
    });
    text = text.trim();
    
    return {
      text: text || content, // Fallback to original if no text left
      code: codeBlocks[0] || undefined,
      components: components.length > 0 ? components : undefined,
      guidelines: guidelines
    };
  };

  const extractComponentsFromCode = (code: string): string[] => {
    const componentMap: { [key: string]: string } = {
      'Button': 'button',
      'ButtonAsLink': 'buttonaslink',
      'IconButton': 'iconbutton',
      'TextField': 'textfield',
      'Textarea': 'textarea',
      'Checkbox': 'checkbox',
      'Form': 'form',
      'Modal': 'modal',
      'Select': 'select',
      'Combobox': 'combobox',
      'Tabs': 'tabs',
      'Badge': 'badge',
      'Tag': 'tag',
      'PlanTag': 'planTag',
      'Switch': 'switch',
      'RadioGroup': 'radiogroup',
      'Toast': 'toast',
      'Tooltip': 'tooltip',
      'OnboardingTooltip': 'onboardingTooltip',
      'Menu': 'menu',
      'SearchField': 'searchfield',
      'Link': 'link',
      'Heading': 'heading',
      'Text': 'text',
      'Flex': 'flex',
      'Box': 'box',
      'Accordion': 'accordion',
      'Rating': 'rating',
      'VerificationCode': 'verificationcode',
      'CircularLoader': 'loaders',
      'SkeletonLoader': 'loaders',
      'BrandedLoader': 'loaders',
      'Popover': 'popover',
      'Sticker': 'sticker',
      'SuggestionToggle': 'suggestionToggle',
    };
    
    const found: string[] = [];
    Object.keys(componentMap).forEach(comp => {
      if (code.includes(comp)) {
        found.push(componentMap[comp]);
      }
    });
    
    return [...new Set(found)]; // Remove duplicates
  };

  // Stream response helper
  const streamResponse = (response: Message) => {
    const messageId = response.id;
    setStreamingMessageId(messageId);
    
    // Split content into chunks (by sentences, paragraphs, or fixed size)
    const text = response.content;
    const chunkSize = 80; // Characters per chunk
    const chunks: string[] = [];
    
    // Try to split by sentences first, then by chunk size
    const sentences = text.split(/(?<=[.!?])\s+|(?<=\n\n)/);
    let currentChunk = '';
    
    for (const sentence of sentences) {
      if ((currentChunk + sentence).length <= chunkSize) {
        currentChunk += (currentChunk ? ' ' : '') + sentence;
      } else {
        if (currentChunk) chunks.push(currentChunk);
        // If sentence is longer than chunkSize, split it
        if (sentence.length > chunkSize) {
          for (let i = 0; i < sentence.length; i += chunkSize) {
            chunks.push(sentence.slice(i, i + chunkSize));
          }
        } else {
          currentChunk = sentence;
        }
      }
    }
    if (currentChunk) chunks.push(currentChunk);
    
    // Stream chunks with fade-in effect
    let displayedContent = '';
    chunks.forEach((chunk, index) => {
      setTimeout(() => {
        displayedContent += (index > 0 && !displayedContent.endsWith(' ') ? ' ' : '') + chunk;
        setStreamingContent(displayedContent);
        
        // After all chunks are displayed, add the full message
        if (index === chunks.length - 1) {
          setTimeout(() => {
            // Clear streaming state first, then add message to prevent flicker
            setStreamingContent('');
            setStreamingMessageId(null);
            // Use requestAnimationFrame to ensure smooth transition
            requestAnimationFrame(() => {
              setMessages((prev) => [...prev, response]);
              setIsTyping(false);
            });
          }, 50);
        }
      }, index * 100); // 100ms delay between chunks
    });
    
    // If no chunks (empty), add immediately
    if (chunks.length === 0) {
      setMessages((prev) => [...prev, response]);
      setStreamingContent('');
      setStreamingMessageId(null);
      setIsTyping(false);
    }
  };

  // Group messages into turns (user message + following AI response)
  const groupMessagesIntoTurns = () => {
    const turns: Array<{ user: Message | null; assistant: Message | null; id: string }> = [];
    let currentTurn: { user: Message | null; assistant: Message | null; id: string } | null = null;

    messages.forEach((message) => {
      if (message.role === 'user') {
        // Start a new turn
        if (currentTurn) {
          turns.push(currentTurn);
        }
        currentTurn = { user: message, assistant: null, id: message.id };
      } else if (message.role === 'assistant') {
        if (currentTurn) {
          // Add assistant response to current turn
          currentTurn.assistant = message;
        } else {
          // Initial assistant message without a user message (welcome message)
          turns.push({ user: null, assistant: message, id: message.id });
        }
      }
    });

    // Add the last turn if it exists
    if (currentTurn) {
      turns.push(currentTurn);
    }

    return turns;
  };

  const formatMarkdownInline = (text: string): string => {
    if (!text) return '';
    
    let formatted = text;
    
    // First, preserve code blocks (triple backticks)
    const codeBlocks: { placeholder: string; content: string }[] = [];
    let codeBlockIndex = 0;
    formatted = formatted.replace(/```[\s\S]*?```/g, (match) => {
      const placeholder = `__CODE_BLOCK_${codeBlockIndex}__`;
      codeBlocks.push({ placeholder, content: match });
      codeBlockIndex++;
      return placeholder;
    });
    
    // Preserve inline code (single backticks)
    const inlineCodeBlocks: { placeholder: string; content: string }[] = [];
    let inlineCodeIndex = 0;
    formatted = formatted.replace(/`([^`\n]+)`/g, (match, code) => {
      const placeholder = `__INLINE_CODE_${inlineCodeIndex}__`;
      inlineCodeBlocks.push({ placeholder, content: code });
      inlineCodeIndex++;
      return placeholder;
    });
    
    // Handle headings (before escaping)
    formatted = formatted.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
    formatted = formatted.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
    formatted = formatted.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');
    
    // Handle lists - process line by line BEFORE escaping
    const lines = formatted.split('\n');
    const processedLines: string[] = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Skip if line is a placeholder
      if (line.includes('__CODE_BLOCK_') || line.includes('__INLINE_CODE_')) {
        processedLines.push(line);
        i++;
        continue;
      }
      
      // Check for ordered list item (1. 2. 3. or 1) 2) 3))
      if (/^\d+[.)]\s+/.test(trimmedLine)) {
        const listItems: string[] = [];
        while (i < lines.length) {
          const currentLine = lines[i].trim();
          if (currentLine.includes('__CODE_BLOCK_') || currentLine.includes('__INLINE_CODE_')) {
            break;
          }
          if (/^\d+[.)]\s+/.test(currentLine)) {
            const cleaned = currentLine.replace(/^\d+[.)]\s+/, '').trim();
            listItems.push(`<li>${cleaned}</li>`);
            i++;
          } else if (currentLine === '' || /^\s*$/.test(currentLine)) {
            i++;
            break;
          } else {
            break;
          }
        }
        if (listItems.length > 0) {
          processedLines.push(`<ol>${listItems.join('')}</ol>`);
        }
        continue;
      }
      
      // Check for unordered list item (- * or •)
      if (/^[-*•]\s+/.test(trimmedLine)) {
        const listItems: string[] = [];
        while (i < lines.length) {
          const currentLine = lines[i].trim();
          if (currentLine.includes('__CODE_BLOCK_') || currentLine.includes('__INLINE_CODE_')) {
            break;
          }
          if (/^[-*•]\s+/.test(currentLine)) {
            const cleaned = currentLine.replace(/^[-*•]\s+/, '').trim();
            listItems.push(`<li>${cleaned}</li>`);
            i++;
          } else if (currentLine === '' || /^\s*$/.test(currentLine)) {
            i++;
            break;
          } else {
            break;
          }
        }
        if (listItems.length > 0) {
          processedLines.push(`<ul>${listItems.join('')}</ul>`);
        }
        continue;
      }
      
      processedLines.push(line);
      i++;
    }
    
    formatted = processedLines.join('\n');
    
    // Protect HTML tags we created before escaping
    const htmlTagPlaceholder = '__HTML_TAG__';
    const htmlTags: { placeholder: string; content: string }[] = [];
    let htmlTagIndex = 0;
    formatted = formatted.replace(/<(ol|ul|li|h[1-3])>[\s\S]*?<\/\1>/g, (match) => {
      const placeholder = `${htmlTagPlaceholder}${htmlTagIndex}__`;
      htmlTags.push({ placeholder, content: match });
      htmlTagIndex++;
      return placeholder;
    });
    
    // Escape HTML
    formatted = formatted
      .replace(/&(?!(?:amp|lt|gt|quot|#\d+);)/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Restore HTML tags
    htmlTags.forEach(({ placeholder, content }) => {
      formatted = formatted.replace(placeholder, content);
    });
    
    // Restore inline code blocks (now escaped, wrap in code tags)
    inlineCodeBlocks.forEach(({ placeholder, content }) => {
      // Escape the content if it wasn't already
      const escapedContent = content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      formatted = formatted.replace(placeholder, `<code>${escapedContent}</code>`);
    });
    
    // Handle markdown formatting (bold, italic) - but not inside code tags
    // Process bold first
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    
    // Then italic (but not if part of bold)
    formatted = formatted.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
    formatted = formatted.replace(/(?<!_)_([^_\n]+)_(?!_)/g, '<em>$1</em>');
    
    // Detect and style component names (but not if already in code tags)
    const parts = formatted.split(/(<code>[\s\S]*?<\/code>)/g);
    const processedParts = parts.map((part) => {
      // Skip code blocks
      if (part.startsWith('<code>') && part.endsWith('</code>')) {
        return part;
      }
      
      // Process component names in this part
      let processed = part;
      const componentPatterns = [
        /\b(Button|TextField|Textarea|Checkbox|Form|Modal|Select|Tabs|Badge|Tag|Switch|RadioGroup|Toast|Tooltip|Menu|SearchField|Link|Heading|Text|Flex|Accordion|Box|ButtonAsLink|IconButton|Combobox|Icon|Illustration|CircularLoader|SkeletonLoader|BrandedLoader|Logo|Popover|Rating|VerificationCode|PlanTag|Sticker|SuggestionToggle|OnboardingTooltip)\b/g,
        /\bTokens\.(Color|Space|Radius|Elevation|BlurRadius)\.[A-Za-z0-9_.]+\b/g,
      ];
      
      componentPatterns.forEach(pattern => {
        processed = processed.replace(pattern, '<code>$&</code>');
      });
      
      return processed;
    });
    
    formatted = processedParts.join('');
    
    // Convert line breaks to <br /> (but preserve list structure)
    formatted = formatted.replace(/\n/g, '<br />');
    
    // Restore code blocks
    codeBlocks.forEach(({ placeholder, content }) => {
      formatted = formatted.replace(placeholder, content);
    });
    
    // Clean up: remove <br /> before and after list/heading tags
    formatted = formatted.replace(/<br \/>\s*<(ul|ol|h[1-3])>/g, '<$1>');
    formatted = formatted.replace(/<\/(ul|ol|h[1-3])>\s*<br \/>/g, '</$1>');
    formatted = formatted.replace(/<br \/>\s*<\/li>/g, '</li>');
    formatted = formatted.replace(/<li>\s*<br \/>/g, '<li>');
    
    return formatted;
  };

  useEffect(() => {
    // Scroll to bottom after messages update to show current turn
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 0);
    return () => clearTimeout(timer);
  }, [messages]);

  useEffect(() => {
    // Scroll to bottom as content streams to keep current turn visible
    if (streamingContent) {
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [streamingContent]);

  useEffect(() => {
    // Enable body scrolling for this page
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    return () => {
      // Restore original styles on unmount if needed
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = input.trim();
    setInput('');
    setIsTyping(true);

    try {
      // Convert messages to API format
      const apiMessages = [
        ...messages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        { role: 'user', content: userInput }
      ];

      // Call LLM API
      let response;
      try {
        response = await fetch('/api/origin-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages })
        });
      } catch (fetchError: any) {
        console.error('Network error:', fetchError);
        throw new Error(`Network error: ${fetchError?.message || 'Failed to connect to server'}`);
      }

      if (!response.ok) {
        let errorData: any = {};
        let errorText = '';
        try {
          errorText = await response.text();
          console.error('API error response text:', errorText);
          try {
            errorData = JSON.parse(errorText);
          } catch {
            errorData = { error: errorText || `HTTP ${response.status}: ${response.statusText}` };
          }
        } catch (e) {
          errorData = { error: `HTTP ${response.status}: ${response.statusText}` };
        }
        console.error('API error response:', {
          status: response.status,
          statusText: response.statusText,
          errorData,
          errorText,
        });
        const errorMessage = errorData.error || errorData.message || errorText || `API request failed with status ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      
      if (!data || !data.content) {
        throw new Error('No content in API response');
      }
      
      // Parse response to extract code examples and guidelines if present
      const parsed = parseLLMResponse(data.content);
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: parsed.text,
        htmlExample: parsed.code,
        components: parsed.components,
        guidelines: parsed.guidelines
      };

      // Stream the response
      streamResponse(assistantMessage);
    } catch (error: any) {
      console.error('Error calling Origin Agent API:', error);
      setIsTyping(false);
      
      // Show user-friendly error message
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: `I encountered an error: ${error?.message || 'Unable to connect to the AI service'}. Falling back to basic responses.\n\n${processUserMessage(userInput).content}`,
      };
      
      // Fallback to original keyword matching
      const fallbackResponse = processUserMessage(userInput);
      streamResponse(fallbackResponse);
    }
  };

  const processUserMessage = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase();

    // Check if user wants to create something
    if (lowerInput.includes('create') || lowerInput.includes('make') || lowerInput.includes('build')) {
      const result = generateHTMLExample(userInput);
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: result.explanation,
        htmlExample: result.html,
        components: result.components,
      };
    }

    // Answer questions about Origin
    const answer = findRelevantInfo(userInput);
    return {
      id: Date.now().toString(),
      role: 'assistant',
      content: answer,
    };
  };

  const clearChat = () => {
    setMessages([]);
  };

  const handleCopyCode = async (code: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCodeId(messageId);
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedCodeId(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Process code for react-live: extract JSX from function or use as-is
  const processCodeForPreview = (code: string): string => {
    if (!code) return '';
    
    // Remove import statements (react-live will use scope instead)
    let processedCode = code.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '').trim();
    
    // If code contains a function definition, extract the return JSX
    const functionMatch = processedCode.match(/function\s+\w+\s*\([^)]*\)\s*\{([\s\S]*)\}/);
    if (functionMatch) {
      const functionBody = functionMatch[1];
      
      // Extract return statement content (handles multi-line)
      const returnMatch = functionBody.match(/return\s*\(([\s\S]*?)\)\s*;?\s*$/m);
      if (returnMatch) {
        return returnMatch[1].trim();
      }
      
      // Try without parentheses
      const returnMatch2 = functionBody.match(/return\s+([\s\S]*?);\s*$/m);
      if (returnMatch2) {
        return returnMatch2[1].trim();
      }
    }
    
    // Check for arrow function with block body
    const arrowFunctionMatch = processedCode.match(/const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{([\s\S]*)\}/);
    if (arrowFunctionMatch) {
      const arrowBody = arrowFunctionMatch[1];
      const returnMatch = arrowBody.match(/return\s*\(([\s\S]*?)\)\s*;?\s*$/m);
      if (returnMatch) {
        return returnMatch[1].trim();
      }
    }
    
    // Check for arrow function with implicit return
    const arrowImplicitMatch = processedCode.match(/const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*(.+)/);
    if (arrowImplicitMatch) {
      return arrowImplicitMatch[1].trim();
    }
    
    // If code is just JSX, use it as-is
    if (processedCode.trim().startsWith('<')) {
      return processedCode.trim();
    }
    
    // Default: return as-is
    return processedCode;
  };

  // Get Origin v7 color tokens - Purple theme
  const purple60 = Tokens.Color.Purple60; // Primary purple for user messages and accents
  const backgroundBaseDefault = Tokens.Color.White;
  const backgroundBaseSubdued = Tokens.Color.NeutralGray10;
  const textBaseDefault = Tokens.Color.NeutralGray100;
  const textBaseSubdued = Tokens.Color.NeutralGray60;
  const borderBaseDefault = Tokens.Color.NeutralGray20;
  
  // Check if we're on landing (no user messages yet)
  const isLanding = !messages.some(msg => msg.role === 'user');
  
  // Rotating prompts for landing state
  const rotatingPrompts = [
    'installation',
    'components',
    'tokens',
    'forms',
    'buttons',
    'modals'
  ];
  
  // Typing/deleting animation for rotating text
  useEffect(() => {
    if (!isLanding) return;
    
    const currentPrompt = rotatingPrompts[rotatingTextIndex];
    const fullText = `about ${currentPrompt}`;
    
    let timeout: NodeJS.Timeout;
    
    if (isDeleting) {
      // Deleting text
      if (rotatingText.length > 0) {
        timeout = setTimeout(() => {
          setRotatingText(rotatingText.slice(0, -1));
        }, 50);
      } else {
        // Move to next prompt
        setIsDeleting(false);
        setRotatingTextIndex((prev) => (prev + 1) % rotatingPrompts.length);
      }
    } else {
      // Typing text
      if (rotatingText.length < fullText.length) {
        timeout = setTimeout(() => {
          setRotatingText(fullText.slice(0, rotatingText.length + 1));
        }, 100);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotatingText, rotatingTextIndex, isDeleting, isLanding]);

  return (
    <>
      <style>{`
        .origin-agent-message code {
          background-color: ${Tokens.Color.NeutralGray10};
          color: ${Tokens.Color.NeutralGray100};
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
          font-size: 0.9em;
          font-weight: 500;
        }
        .origin-agent-message ul,
        .origin-agent-message ol {
          margin: 16px 0;
          padding-left: 24px;
        }
        .origin-agent-message ul {
          list-style-type: disc;
        }
        .origin-agent-message ol {
          list-style-type: decimal;
        }
        .origin-agent-message li {
          margin: 8px 0;
          line-height: 1.6;
          padding-left: 4px;
        }
        .origin-agent-message li:first-child {
          margin-top: 0;
        }
        .origin-agent-message li:last-child {
          margin-bottom: 0;
        }
        .origin-agent-message h1,
        .origin-agent-message h2,
        .origin-agent-message h3 {
          margin: 24px 0 12px 0;
          font-weight: 600;
          line-height: 1.3;
        }
        .origin-agent-message h1:first-child,
        .origin-agent-message h2:first-child,
        .origin-agent-message h3:first-child {
          margin-top: 0;
        }
        .origin-agent-message h1 {
          font-size: 1.5em;
        }
        .origin-agent-message h2 {
          font-size: 1.3em;
        }
        .origin-agent-message h3 {
          font-size: 1.1em;
        }
        .origin-agent-message strong {
          font-weight: 600;
        }
        .origin-agent-message em {
          font-style: italic;
        }
        .origin-agent-message p {
          margin: 12px 0;
          line-height: 1.6;
        }
        .origin-agent-message p:first-child {
          margin-top: 0;
        }
        .origin-agent-message p:last-child {
          margin-bottom: 0;
        }
        pre code,
        pre code * {
          color: ${backgroundBaseDefault} !important;
          background-color: transparent !important;
        }
        pre code span,
        pre code .hljs,
        pre code .hljs-keyword,
        pre code .hljs-string,
        pre code .hljs-comment,
        pre code .hljs-function,
        pre code .hljs-variable,
        pre code .hljs-number,
        pre code .hljs-class,
        pre code .hljs-built_in,
        pre code .hljs-title {
          color: ${backgroundBaseDefault} !important;
        }
        /* Custom tab styles */
        .origin-agent-tabs [role="tablist"] {
          border-bottom: 1px solid ${borderBaseDefault} !important;
          margin-bottom: 0 !important;
          background-color: transparent !important;
        }
        .origin-agent-tabs [role="tab"][aria-selected="true"],
        .origin-agent-tabs [role="tab"][data-state="active"] {
          color: ${purple60} !important;
          border-bottom-color: ${purple60} !important;
        }
        .origin-agent-tabs [role="tab"][aria-selected="false"],
        .origin-agent-tabs [role="tab"][data-state="inactive"] {
          color: ${Tokens.Color.NeutralGray80} !important;
        }
        .origin-agent-tabs [role="tabpanel"] {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        .origin-agent-tabs [role="tabpanel"] > div {
          border-top-left-radius: 0 !important;
          border-top-right-radius: 0 !important;
        }
        /* Transparent checkerboard pattern background */
        .transparent-bg {
          background-image: 
            linear-gradient(45deg, ${Tokens.Color.NeutralGray10} 25%, transparent 25%),
            linear-gradient(-45deg, ${Tokens.Color.NeutralGray10} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${Tokens.Color.NeutralGray10} 75%),
            linear-gradient(-45deg, transparent 75%, ${Tokens.Color.NeutralGray10} 75%);
          background-size: 16px 16px;
          background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
          background-color: ${backgroundBaseDefault};
        }
      `}</style>
      <div 
        className="w-full origin-agent-page"
        style={{ 
          background: `
            radial-gradient(circle at 20% 30%, rgba(245, 240, 255, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 245, 240, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(250, 240, 250, 0.6) 0%, transparent 60%),
            radial-gradient(circle at 10% 80%, rgba(255, 250, 245, 0.7) 0%, transparent 55%),
            radial-gradient(circle at 90% 20%, rgba(240, 245, 255, 0.6) 0%, transparent 50%),
            #fafafa
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%',
          fontFamily: 'var(--font-stack-inter, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, width: '100%' }}>
        {/* Header - Fixed top left when not landing */}
        {!isLanding && (
          <div 
            className="fixed top-0 left-0 p-4 z-10"
            style={{ 
              backgroundColor: 'transparent',
              border: 'none'
            }}
          >
            <Heading 
              as="h1" 
              style={{ 
                fontFamily: 'var(--font-stack-matter, Matter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
                fontSize: '18px',
                fontWeight: 500,
                margin: 0,
                letterSpacing: '-0.03em'
              }}
            >
              Ask Origin
            </Heading>
          </div>
        )}

        {/* Conversation Container - Fixed height, scrollable */}
        <div
          ref={conversationContainerRef}
          className={`origin-agent-conversation ${isLanding ? 'landing-state' : 'pt-20'}`}
          style={{
            flex: 1,
            overflowY: isLanding ? 'hidden' : 'auto',
            overflowX: 'hidden',
            backgroundColor: 'transparent',
            minHeight: 0, // Allow flex to shrink
            height: '100%',
            maxHeight: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isLanding ? 'center' : 'flex-start',
            alignItems: isLanding ? 'center' : 'stretch',
            paddingBottom: isLanding ? 0 : '120px' // Add padding to prevent content from being hidden behind prompt box
          }}
        >
          <div className="px-4" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: isLanding ? 'center' : 'stretch' }}>
            <div className="max-w-4xl" style={{ width: '100%', margin: isLanding ? '0 auto' : '0 auto' }}>
          {groupMessagesIntoTurns()
            .filter(turn => !isLanding || turn.user) // Hide assistant-only messages when landing
            .map((turn, index, turns) => {
            const isCurrentTurn = index === turns.length - 1;
            const hasStreaming = isCurrentTurn && streamingMessageId && streamingContent;
            
            return (
              <div
                key={turn.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingBottom: '2rem',
                  alignItems: isLanding && !turn.user ? 'center' : 'stretch',
                  width: '100%'
                }}
              >
                {/* User Message */}
                {turn.user && (
                  <div className="flex justify-end mb-4">
                    <div
                      className="origin-agent-message max-w-[80%] rounded-lg px-3 py-1.5 border"
                      style={{ 
                        backgroundColor: 'transparent', 
                        color: 'black',
                        borderColor: borderBaseDefault
                      }}
                    >
                      <p 
                        className="whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: formatMarkdownInline(turn.user.content) }}
                        style={{ margin: 0 }}
                      />
                    </div>
                  </div>
                )}
                
                {/* Assistant Response or Streaming */}
                {hasStreaming ? (
                  <div className="flex justify-start">
                    <div
                      className="origin-agent-message w-full"
                      style={{ 
                        backgroundColor: 'transparent', 
                        color: textBaseDefault,
                        border: 'none'
                      }}
                    >
                      <p 
                        className="whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: formatMarkdownInline(streamingContent) }}
                        style={{ margin: 0 }}
                      />
                    </div>
                  </div>
                ) : turn.assistant && (
                  <div className={`flex ${isLanding && !turn.user ? 'justify-center' : 'justify-start'}`}>
                    <div
                      className={`origin-agent-message ${isLanding && !turn.user ? 'text-center' : 'w-full'}`}
                      style={{ 
                        backgroundColor: 'transparent', 
                        color: textBaseDefault,
                        border: 'none',
                        maxWidth: isLanding && !turn.user ? '600px' : '100%'
                      }}
                    >
                      <p 
                        className="whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: formatMarkdownInline(turn.assistant.content) }}
                        style={{ margin: 0 }}
                      />
                      {(turn.assistant.htmlExample || turn.assistant.guidelines) && (
                        <div 
                          className="mt-4 origin-agent-tabs"
                          style={{
                            border: `1px solid ${borderBaseDefault}`,
                            borderRadius: '8px',
                            overflow: 'hidden'
                          }}
                        >
                          <Tabs defaultValue="code">
                            <Tabs.TabList accessibilityLabel="Code, Preview, and Guidelines">
                              {turn.assistant.htmlExample && (
                                <>
                                  <Tabs.Tab id="code" label="Code" />
                                  <Tabs.Tab id="preview" label="Preview" />
                                </>
                              )}
                              {turn.assistant.guidelines && (
                                <Tabs.Tab id="guidelines" label="Guidelines" />
                              )}
                            </Tabs.TabList>
                            {turn.assistant.htmlExample && (
                              <>
                            <Tabs.Panel id="code">
                              <div className="space-y-3">
                                <div style={{ position: 'relative' }}>
                                  <pre className="p-4 overflow-x-auto text-sm max-h-96" style={{ backgroundColor: textBaseDefault, color: backgroundBaseDefault, borderRadius: '0 0 8px 8px' }}>
                                    <code style={{ fontFamily: 'monospace', whiteSpace: 'pre', color: backgroundBaseDefault, backgroundColor: 'transparent' }}>{turn.assistant.htmlExample}</code>
                                  </pre>
                                  <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
                                    <button
                                      onClick={() => handleCopyCode(turn.assistant?.htmlExample || '', turn.id)}
                                      aria-label={copiedCodeId === turn.id ? 'Copied!' : 'Copy code'}
                                      title={copiedCodeId === turn.id ? 'Copied!' : 'Copy code'}
                                      style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        border: 'none',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        color: backgroundBaseDefault,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        padding: 0,
                                        transition: 'background-color 0.2s ease'
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                      }}
                                    >
                                      {copiedCodeId === turn.id ? (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                      ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Tabs.Panel>
                            <Tabs.Panel id="preview">
                              <div className="overflow-hidden p-4 transparent-bg" style={{ borderRadius: '0 0 8px 8px' }}>
                                <LiveProvider 
                                  code={processCodeForPreview(turn.assistant.htmlExample || '')}
                                  scope={{
                                    React,
                                    useState,
                                    ...OriginComponents
                                  }}
                                >
                                  <LiveError style={{ 
                                    color: '#ef4444', 
                                    padding: '12px', 
                                    backgroundColor: '#fee2e2', 
                                    borderRadius: '8px',
                                    marginBottom: '12px',
                                    fontSize: '14px'
                                  }} />
                                  <LivePreview style={{ 
                                    padding: '16px',
                                    minHeight: '100px'
                                  }} />
                                </LiveProvider>
                              </div>
                            </Tabs.Panel>
                            </>
                            )}
                            {turn.assistant.guidelines && (
                              <Tabs.Panel id="guidelines">
                                <div 
                                  className="origin-agent-message p-4"
                                  style={{ 
                                    backgroundColor: backgroundBaseDefault,
                                    color: textBaseDefault
                                  }}
                                >
                                  <div 
                                    dangerouslySetInnerHTML={{ __html: formatMarkdownInline(turn.assistant.guidelines) }}
                                  />
                                </div>
                              </Tabs.Panel>
                            )}
                          </Tabs>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {isTyping && (
            <div className="flex justify-start">
              <div 
                className="w-full px-6 py-4"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: textBaseDefault,
                  border: 'none'
                }}
              >
                <div className="flex space-x-2">
                  <div 
                    className="w-2 h-2 rounded-full animate-bounce" 
                    style={{ backgroundColor: purple60 }}
                  />
                  <div 
                    className="w-2 h-2 rounded-full animate-bounce [animation-delay:0.2s]"
                    style={{ backgroundColor: purple60 }}
                  />
                  <div 
                    className="w-2 h-2 rounded-full animate-bounce [animation-delay:0.4s]"
                    style={{ backgroundColor: purple60 }}
                  />
                </div>
              </div>
            </div>
          )}
          {isLanding && (
            <div className="px-4" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem', gap: '2rem' }}>
              {/* Header - Left aligned above prompt when landing */}
              <div style={{ width: '100%', maxWidth: '650px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Heading 
                  as="h1" 
                  style={{ 
                    fontFamily: 'var(--font-stack-matter, Matter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
                    fontSize: '32px',
                    fontWeight: 600,
                    margin: 0,
                    textAlign: 'left',
                    letterSpacing: '-0.03em'
                  }}
                >
                  Ask Origin {rotatingText && <span style={{ letterSpacing: '-0.03em' }}>{rotatingText}</span>}
                </Heading>
              </div>
              <div 
                className={`rounded-2xl border origin-agent-input ${isLanding ? 'landing-input' : ''}`}
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  borderColor: isTextareaFocused ? Tokens.Color.NeutralGray60 : borderBaseDefault,
                  padding: '12px',
                  width: '100%',
                  maxWidth: '650px'
                }}
              >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            onClick={(e) => {
              // If clicking on a button or inside a button, don't focus textarea
              const target = e.target as HTMLElement;
              if (target.closest('button')) {
                return;
              }
              // Focus the textarea
              const textarea = e.currentTarget.querySelector('textarea');
              if (textarea) {
                textarea.focus();
              }
            }}
            className={`origin-agent-form m-0 p-0 ${isLanding ? 'landing-form' : ''}`}
            style={{ margin: 0, padding: 0 }}
          >
            <Textarea
              label=""
              value={input}
              onChange={setInput}
                placeholder="Ask anything about Origin"
                isDisabled={isTyping}
                onFocus={() => setIsTextareaFocused(true)}
                onBlur={() => setIsTextareaFocused(false)}
                onKeyDown={(e) => {
                  // Enter submits, Control+Shift+Enter adds new line
                  if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
                    e.preventDefault();
                    if (input.trim() && !isTyping) {
                      handleSend();
                    }
                  }
                  // Control+Shift+Enter allows new line (default behavior)
                  // All other cases allow default behavior
                }}
                style={{ 
                  color: 'black', 
                  padding: 0, 
                  border: 'none', 
                  flex: 1,
                  minHeight: isLanding ? '120px' : 'auto'
                }}
              />
            {messages.length > 1 && (
              <button
                onClick={clearChat}
                type="button"
                className="clear-chat-button"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '99999px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: Tokens.Color.NeutralGray60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  opacity: 0.8
                }}
                aria-label="Clear Chat"
                title="Clear Chat"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4H14M5 4V2C5 1.44772 5.44772 1 6 1H10C10.5523 1 11 1.44772 11 2V4M13 4V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V4H13Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 7V11M10 7V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '99999px',
                border: 'none',
                backgroundColor: input.trim() ? purple60 : 'transparent',
                color: input.trim() ? 'white' : Tokens.Color.NeutralGray60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: isTyping || !input.trim() ? 'not-allowed' : 'pointer',
                opacity: isTyping || !input.trim() ? 0.5 : input.trim() ? 1 : 0.8,
                flexShrink: 0
              }}
              aria-label="Send"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.19516 0.195238C4.45551 -0.0650628 4.87753 -0.0650956 5.13786 0.195238L9.13786 4.19524C9.3981 4.45558 9.39813 4.87763 9.13786 5.13795C8.87755 5.39826 8.45551 5.39819 8.19516 5.13795L5.33318 2.27597V9.99993C5.33315 10.368 5.03461 10.6665 4.66651 10.6666C4.29834 10.6666 3.99987 10.3681 3.99984 9.99993V2.27597L1.13786 5.13795L1.08708 5.18352C0.82527 5.39706 0.439239 5.38193 0.195156 5.13795C-0.0489211 4.89387 -0.0639836 4.50787 0.149583 4.24602L0.195156 4.19524L4.19516 0.195238Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
            </div>
          </div>
        </div>

        {/* Input - Fixed at bottom when not landing */}
        {!isLanding && (
          <div 
            className="rounded-2xl border origin-agent-input"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderColor: isTextareaFocused ? Tokens.Color.NeutralGray60 : borderBaseDefault,
              padding: '12px',
              position: 'fixed',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'calc(100% - 32px)',
              maxWidth: '896px',
              zIndex: 20, // Ensure prompt box stays on top when scrolling
              boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.05)' // Subtle shadow to separate from scrolling content
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              onClick={(e) => {
                // If clicking on a button or inside a button, don't focus textarea
                const target = e.target as HTMLElement;
                if (target.closest('button')) {
                  return;
                }
                // Focus the textarea
                const textarea = e.currentTarget.querySelector('textarea');
                if (textarea) {
                  textarea.focus();
                }
              }}
              className="origin-agent-form m-0 p-0"
              style={{ margin: 0, padding: 0 }}
            >
              <Textarea
                label=""
                value={input}
                onChange={setInput}
                placeholder="Ask anything about Origin"
                isDisabled={isTyping}
                onFocus={() => setIsTextareaFocused(true)}
                onBlur={() => setIsTextareaFocused(false)}
                onKeyDown={(e) => {
                  // Enter submits, Control+Shift+Enter adds new line
                  if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
                    e.preventDefault();
                    if (input.trim() && !isTyping) {
                      handleSend();
                    }
                  }
                  // Control+Shift+Enter allows new line (default behavior)
                  // All other cases allow default behavior
                }}
                style={{ color: 'black', padding: 0, border: 'none', flex: 1 }}
              />
              {messages.length > 1 && (
                <button
                  onClick={clearChat}
                  type="button"
                  className="clear-chat-button"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '99999px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: Tokens.Color.NeutralGray60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    opacity: 0.8
                  }}
                  aria-label="Clear Chat"
                  title="Clear Chat"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4H14M5 4V2C5 1.44772 5.44772 1 6 1H10C10.5523 1 11 1.44772 11 2V4M13 4V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V4H13Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 7V11M10 7V11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '99999px',
                border: 'none',
                backgroundColor: input.trim() ? purple60 : 'transparent',
                color: input.trim() ? 'white' : Tokens.Color.NeutralGray60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: isTyping || !input.trim() ? 'not-allowed' : 'pointer',
                opacity: isTyping || !input.trim() ? 0.5 : input.trim() ? 1 : 0.8,
                flexShrink: 0
              }}
              aria-label="Send"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                    d="M4.19516 0.195238C4.45551 -0.0650628 4.87753 -0.0650956 5.13786 0.195238L9.13786 4.19524C9.3981 4.45558 9.39813 4.87763 9.13786 5.13795C8.87755 5.39826 8.45551 5.39819 8.19516 5.13795L5.33318 2.27597V9.99993C5.33315 10.368 5.03461 10.6665 4.66651 10.6666C4.29834 10.6666 3.99987 10.3681 3.99984 9.99993V2.27597L1.13786 5.13795L1.08708 5.18352C0.82527 5.39706 0.439239 5.38193 0.195156 5.13795C-0.0489211 4.89387 -0.0639836 4.50787 0.149583 4.24602L0.195156 4.19524L4.19516 0.195238Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
      
      {/* Footer - Made with Playground */}
      <footer 
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '16px',
          zIndex: 1000,
          pointerEvents: 'auto'
        }}
      >
        <a
          href="https://playground-site-iota.vercel.app/playground"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '12px',
            color: Tokens.Color.NeutralGray60,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'color 0.2s ease',
            fontFamily: 'var(--font-stack-inter, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = Tokens.Color.NeutralGray80;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = Tokens.Color.NeutralGray60;
          }}
        >
          Made with{" "}
          <span style={{ fontWeight: 600, color: Tokens.Color.NeutralGray80 }}>
            Playground
          </span>
        </a>
      </footer>
    </div>
    </>
  );
}

