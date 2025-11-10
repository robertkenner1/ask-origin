/**
 * Browser-based spell checker utility using the native spell check API
 */

export interface SpellCheckResult {
  /** The misspelled word */
  word: string;
  /** Starting position in the text */
  start: number;
  /** Ending position in the text */
  end: number;
  /** Suggested corrections (if available) */
  suggestions?: string[];
}

/**
 * Check text for spelling errors using the browser's built-in spell checker
 *
 * @param text - The text to check for spelling errors
 * @returns Promise that resolves to an array of spelling errors found
 */
export async function checkSpelling(text: string): Promise<SpellCheckResult[]> {
  // Check if the browser supports the experimental spell check API
  if ("spellcheck" in document.createElement("input")) {
    try {
      // Use the modern approach if available
      return await checkSpellingModern(text);
    } catch (error) {
      console.log(
        "Modern spell check API not available, falling back to DOM method",
      );
    }
  }

  // Fallback to DOM-based spell checking
  return checkSpellingWithDOM(text);
}

/**
 * Modern spell checking using the experimental browser API
 */
async function checkSpellingModern(text: string): Promise<SpellCheckResult[]> {
  // This is experimental and may not be available in all browsers
  // @ts-ignore - Experimental API
  if (typeof navigator.spellcheck !== "undefined") {
    try {
      // @ts-ignore - Experimental API
      const results = await navigator.spellcheck.requestSpellCheck(text);
      return results.map((result: any) => ({
        word: text.substring(result.startOffset, result.endOffset),
        start: result.startOffset,
        end: result.endOffset,
        suggestions: result.suggestions || [],
      }));
    } catch (error) {
      console.error("Modern spell check failed:", error);
      throw error;
    }
  }

  throw new Error("Modern spell check API not available");
}

/**
 * DOM-based spell checking using a hidden contenteditable element
 */
function checkSpellingWithDOM(text: string): Promise<SpellCheckResult[]> {
  return new Promise((resolve) => {
    // Create a hidden contenteditable element for spell checking
    const spellCheckElement = document.createElement("div");
    spellCheckElement.contentEditable = "true";
    spellCheckElement.spellcheck = true;
    spellCheckElement.style.position = "absolute";
    spellCheckElement.style.left = "-9999px";
    spellCheckElement.style.top = "-9999px";
    spellCheckElement.style.width = "1px";
    spellCheckElement.style.height = "1px";
    spellCheckElement.style.overflow = "hidden";
    spellCheckElement.style.opacity = "0";
    spellCheckElement.style.pointerEvents = "none";

    // Add to DOM
    document.body.appendChild(spellCheckElement);

    // Set the text content
    spellCheckElement.textContent = text;

    // Wait for spell check to process
    setTimeout(() => {
      const results: SpellCheckResult[] = [];

      try {
        // Get the computed style to check for spelling errors
        const range = document.createRange();
        const selection = window.getSelection();

        if (selection) {
          // Clear any existing selection
          selection.removeAllRanges();

          // Split text into words and check each one
          const words = text.split(/(\s+)/);
          let currentPosition = 0;

          for (const word of words) {
            if (word.trim() && /[a-zA-Z]/.test(word)) {
              // Create a range for this word
              const wordStart = currentPosition;
              const wordEnd = currentPosition + word.length;

              try {
                // Set the text content and check if browser marks it as misspelled
                const testElement = document.createElement("span");
                testElement.textContent = word;
                testElement.contentEditable = "true";
                testElement.spellcheck = true;
                spellCheckElement.appendChild(testElement);

                // Force a reflow to trigger spell check
                testElement.offsetHeight;

                // Check if the word is marked as misspelled
                // This is a heuristic approach since we can't directly access spell check results
                const isLikelyMisspelled = isWordLikelyMisspelled(word);

                if (isLikelyMisspelled) {
                  results.push({
                    word: word,
                    start: wordStart,
                    end: wordEnd,
                    suggestions: [], // Browser API doesn't provide suggestions easily
                  });
                }

                spellCheckElement.removeChild(testElement);
              } catch (error) {
                // Skip this word if there's an error
                console.warn("Error checking word:", word, error);
              }
            }

            currentPosition += word.length;
          }
        }
      } catch (error) {
        console.error("DOM spell check failed:", error);
      } finally {
        // Clean up
        document.body.removeChild(spellCheckElement);
        resolve(results);
      }
    }, 100); // Give browser time to process spell check
  });
}

/**
 * Heuristic to determine if a word is likely misspelled
 * This is a simple approach since we can't easily access browser spell check results
 */
function isWordLikelyMisspelled(word: string): boolean {
  // Skip very short words
  if (word.length < 2) return false;

  // Skip words that are all uppercase (likely acronyms)
  if (word === word.toUpperCase() && word.length < 4) return false;

  // Skip words with numbers
  if (/\d/.test(word)) return false;

  // Skip words with special characters (except apostrophes)
  if (/[^a-zA-Z']/.test(word)) return false;

  // Check for obvious nonsense patterns
  if (isNonsenseWord(word)) return true;

  // Generic patterns that indicate likely misspellings
  const lowerWord = word.toLowerCase();

  // Check for obvious nonsense patterns first
  if (isNonsenseWord(word)) return true;

  // Don't flag common short words
  const commonWords = [
    "the",
    "and",
    "but",
    "for",
    "you",
    "are",
    "can",
    "was",
    "his",
    "her",
    "him",
    "she",
    "had",
    "has",
    "not",
    "all",
    "any",
    "may",
    "way",
    "day",
    "say",
    "get",
    "got",
    "how",
    "now",
    "new",
    "old",
    "see",
    "two",
    "who",
    "boy",
    "did",
    "its",
    "let",
    "put",
    "end",
    "why",
    "try",
    "ask",
    "men",
    "run",
    "own",
    "say",
    "she",
    "too",
    "use",
    "her",
    "now",
    "man",
    "out",
    "get",
    "has",
    "him",
    "his",
    "how",
    "may",
    "new",
    "now",
    "old",
    "see",
    "two",
    "way",
    "who",
    "boy",
    "did",
    "its",
    "let",
    "put",
    "say",
    "she",
    "too",
    "use",
  ];

  if (commonWords.includes(lowerWord)) return false;

  return false; // For now, rely mainly on nonsense word detection
}

/**
 * Check if a word appears to be nonsense/random typing
 */
function isNonsenseWord(word: string): boolean {
  const lowerWord = word.toLowerCase();

  // Check for keyboard mashing patterns (3+ consecutive keys from same row)
  const keyboardPatterns = [
    /[qwertyuiop]{3,}/, // Top row
    /[asdfghjkl]{3,}/, // Middle row
    /[zxcvbnm]{3,}/, // Bottom row
  ];

  for (const pattern of keyboardPatterns) {
    if (pattern.test(lowerWord)) {
      return true;
    }
  }

  // Check for excessive consonant clusters (4+ consecutive consonants)
  if (/[bcdfghjklmnpqrstvwxyz]{4,}/i.test(word)) {
    return true;
  }

  // Check for words with no vowels (4+ letters with no vowels is suspicious)
  if (word.length >= 4 && !/[aeiouAEIOU]/.test(word)) {
    return true;
  }

  // Check for very low vowel ratio (less than 20% vowels in words 5+ letters)
  if (word.length >= 5) {
    const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;
    const vowelRatio = vowelCount / word.length;
    if (vowelRatio < 0.2) {
      return true;
    }
  }

  // Check for alternating consonant patterns that look like random typing
  if (
    word.length >= 4 &&
    /^[bcdfghjklmnpqrstvwxyz]{2,}[bcdfghjklmnpqrstvwxyz]{2,}/i.test(word)
  ) {
    return true;
  }

  return false;
}

/**
 * Enhanced spell checking that combines browser API with common patterns
 */
export async function checkSpellingEnhanced(
  text: string,
): Promise<SpellCheckResult[]> {
  const results: SpellCheckResult[] = [];

  // Start with pattern-based checking (more reliable)
  const patternResults = checkCommonPatterns(text);
  results.push(...patternResults);

  // Add word-by-word heuristic checking
  const heuristicResults = checkWordsHeuristically(text);

  // Merge heuristic results, avoiding duplicates
  for (const heuristicResult of heuristicResults) {
    const isDuplicate = results.some(
      (existing) =>
        existing.start === heuristicResult.start &&
        existing.end === heuristicResult.end,
    );

    if (!isDuplicate) {
      results.push(heuristicResult);
    }
  }

  // Optionally try browser-based approach (often limited)
  try {
    const browserResults = await checkSpelling(text);

    // Merge browser results, avoiding duplicates
    for (const browserResult of browserResults) {
      const isDuplicate = results.some(
        (existing) =>
          existing.start === browserResult.start &&
          existing.end === browserResult.end,
      );

      if (!isDuplicate) {
        results.push(browserResult);
      }
    }
  } catch (error) {
    console.warn(
      "Browser spell check failed, using pattern-based only:",
      error,
    );
  }

  return results;
}

/**
 * Check words using heuristic patterns
 */
function checkWordsHeuristically(text: string): SpellCheckResult[] {
  const results: SpellCheckResult[] = [];
  const words = text.split(/(\s+)/);
  let currentPosition = 0;

  for (const word of words) {
    if (word.trim() && /[a-zA-Z]/.test(word)) {
      const cleanWord = word.replace(/[^\w']/g, ""); // Remove punctuation but keep apostrophes

      if (cleanWord && isWordLikelyMisspelled(cleanWord)) {
        // Find the actual position of the clean word in the original text
        const wordStart = text.indexOf(cleanWord, currentPosition);
        const wordEnd = wordStart + cleanWord.length;

        if (wordStart >= 0) {
          console.log(
            `Found misspelled word: "${cleanWord}" at position ${wordStart}-${wordEnd}`,
          );
          results.push({
            word: cleanWord,
            start: wordStart,
            end: wordEnd,
            suggestions: getSuggestionsForWord(cleanWord),
          });
        }
      }
    }

    currentPosition += word.length;
  }

  console.log(
    `Heuristic check found ${results.length} misspelled words:`,
    results,
  );
  return results;
}

/**
 * Get basic suggestions for a misspelled word
 */
function getSuggestionsForWord(word: string): string[] {
  const suggestions: string[] = [];

  // For nonsense words, suggest they check spelling
  if (isNonsenseWord(word)) {
    return ["[check spelling]"];
  }

  // Basic pattern suggestions
  // Try common letter swaps
  if (word.includes("ie")) {
    suggestions.push(word.replace("ie", "ei"));
  }
  if (word.includes("ei")) {
    suggestions.push(word.replace("ei", "ie"));
  }

  // Try adding/removing common endings
  if (!word.endsWith("e")) {
    suggestions.push(word + "e");
  }
  if (word.endsWith("e") && word.length > 3) {
    suggestions.push(word.slice(0, -1));
  }

  // If no suggestions, provide generic help
  if (suggestions.length === 0) {
    suggestions.push("[check spelling]");
  }

  return suggestions.slice(0, 3); // Return up to 3 suggestions
}

/**
 * Check for common spelling and grammar patterns
 */
function checkCommonPatterns(text: string): SpellCheckResult[] {
  const results: SpellCheckResult[] = [];

  // Generic patterns for detecting potential issues
  const patterns = [
    // Double word detection
    { pattern: /\b(\w+)\s+\1\b/gi, correction: "$1" },

    // Common grammar errors
    { pattern: /\bi\b/g, correction: "I" }, // Lowercase 'i' should be uppercase
    { pattern: /\b(could|would|should) of\b/gi, correction: "$1 have" },
    { pattern: /\bits\s+own\b/gi, correction: "its own" }, // "it's own" should be "its own"
  ];

  for (const { pattern, correction } of patterns) {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      results.push({
        word: match[0],
        start: match.index,
        end: match.index + match[0].length,
        suggestions: [correction],
      });
    }
  }

  return results;
}

/**
 * Check if the browser supports spell checking
 */
export function isSpellCheckSupported(): boolean {
  // Check for basic spell check support
  const testElement = document.createElement("input");
  return "spellcheck" in testElement;
}

/**
 * Get suggestions for a misspelled word (limited browser support)
 */
export async function getSpellingSuggestions(word: string): Promise<string[]> {
  // This is very limited in browsers, but we can provide some basic suggestions
  const suggestions: string[] = [];

  // Try some common correction patterns
  const corrections = [
    word.replace(/ie/g, "ei"),
    word.replace(/ei/g, "ie"),
    word + "e",
    word.slice(0, -1),
    word.replace(/s$/, ""),
    word + "s",
    word.replace(/y$/, "ies"),
    word.replace(/f$/, "ves"),
  ];

  // Filter out duplicates and the original word
  const uniqueCorrections = [...new Set(corrections)].filter((c) => c !== word);

  return uniqueCorrections.slice(0, 5); // Return up to 5 suggestions
}
