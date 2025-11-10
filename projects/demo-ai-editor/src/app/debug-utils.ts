export function logServerEnv(prefix: string = "SERVER_ENV") {
  console.log(`${prefix} Check | API Keys:`, {
    NEXT_PUBLIC_CLAUDE_API_KEY: process.env.NEXT_PUBLIC_CLAUDE_API_KEY
      ? `Set (length: ${process.env.NEXT_PUBLIC_CLAUDE_API_KEY.length})`
      : "Not set",
    CLAUDE_API_KEY: process.env.CLAUDE_API_KEY
      ? `Set (length: ${process.env.CLAUDE_API_KEY.length})`
      : "Not set",
  });

  // Creating a more accurate status for troubleshooting
  const hasApiKey = !!(
    process.env.CLAUDE_API_KEY || process.env.NEXT_PUBLIC_CLAUDE_API_KEY
  );
  console.log(
    `${prefix} Check | API Status: ${hasApiKey ? "API key available" : "NO API KEY FOUND - SUGGESTIONS WILL FAIL"}`,
  );
}
