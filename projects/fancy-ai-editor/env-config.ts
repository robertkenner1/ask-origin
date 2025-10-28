// TypeScript declaration for the window object with our environment variables
declare global {
  interface Window {
    // No longer exposing API keys to the client
  }
}

// Initialize environment variables for client-side
const initializeEnvVars = (): void => {
  try {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // No environment variables with sensitive data are exposed to the client
      // API keys are now only accessed server-side

      // Log if in development mode that we're using server-side auth
      if (process.env.NODE_ENV === "development") {
        console.info("Using server-side authentication for external APIs");
      }
    }
  } catch (error) {
    console.error("Error initializing environment variables:", error);
  }
};

export default initializeEnvVars;
