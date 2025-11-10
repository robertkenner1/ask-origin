/**
 * Simple in-memory session store for API requests
 * In a production environment, this would be replaced with Redis or another distributed store
 */

interface Session {
  docId: string;
  prompt: string;
  deepWriter: boolean;
  createdAt: number;
  expiresAt: number;
}

/**
 * Session store for streaming requests
 * Basic in-memory implementation with expiration
 */
class SessionStore {
  private sessions: Map<string, Session> = new Map();
  private cleanupInterval: NodeJS.Timeout | null = null;
  private readonly DEFAULT_EXPIRY = 30 * 60 * 1000; // 30 minutes

  constructor() {
    // Set up cleanup interval to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.cleanup(), 5 * 60 * 1000); // Every 5 minutes
  }

  /**
   * Create a new session with the given data
   * @param data Session data
   * @param expiryMs Time in milliseconds until session expires (default 30 minutes)
   * @returns The generated session token
   */
  createSession(
    data: Omit<Session, "createdAt" | "expiresAt">,
    expiryMs?: number,
  ): string {
    // Generate a unique session token
    const token = `token_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;

    // Calculate expiration time
    const createdAt = Date.now();
    const expiresAt = createdAt + (expiryMs || this.DEFAULT_EXPIRY);

    // Store session data
    this.sessions.set(token, {
      ...data,
      createdAt,
      expiresAt,
    });

    return token;
  }

  /**
   * Get session data by token
   * @param token Session token
   * @returns Session data or null if not found or expired
   */
  getSession(token: string): Session | null {
    const session = this.sessions.get(token);

    // Check if session exists and is not expired
    if (!session) {
      return null;
    }

    // Check if session is expired
    if (session.expiresAt < Date.now()) {
      this.sessions.delete(token);
      return null;
    }

    return session;
  }

  /**
   * Delete a session by token
   * @param token Session token
   * @returns true if session was found and deleted, false otherwise
   */
  deleteSession(token: string): boolean {
    if (this.sessions.has(token)) {
      this.sessions.delete(token);
      return true;
    }
    return false;
  }

  /**
   * Cleanup expired sessions
   */
  private cleanup() {
    const now = Date.now();

    for (const [token, session] of this.sessions.entries()) {
      if (session.expiresAt < now) {
        this.sessions.delete(token);
      }
    }
  }

  /**
   * Clean up resources
   */
  dispose() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
  }
}

// Export a singleton instance
export const sessionStore = new SessionStore();
