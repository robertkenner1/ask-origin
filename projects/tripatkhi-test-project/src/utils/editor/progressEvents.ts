/**
 * Utility functions for managing document generation progress events
 */

// Progress event types
export interface ProgressEvent {
  step:
    | "analyzing"
    | "outline"
    | "draft"
    | "research"
    | "processing"
    | "complete"
    | "error";
  message: string;
  percentage: number;
  timestamp: number;
  documentId?: string;
}

type EventListener = (event: ProgressEvent) => void;

// In-memory event store
const eventStore: Map<
  string,
  {
    events: ProgressEvent[];
    listeners: EventListener[];
    lastEventId: number;
  }
> = new Map();

/**
 * Add a progress event to the store
 */
export function addProgressEvent(sessionId: string, event: ProgressEvent) {
  // Get or create session
  if (!eventStore.has(sessionId)) {
    eventStore.set(sessionId, {
      events: [],
      listeners: [],
      lastEventId: 0,
    });
  }

  const session = eventStore.get(sessionId)!;

  // Add event with timestamp and notify listeners
  const eventWithTimestamp = {
    ...event,
    timestamp: Date.now(),
  };

  session.events.push(eventWithTimestamp);

  // Limit event history (keep last 100 events)
  if (session.events.length > 100) {
    session.events = session.events.slice(-100);
  }

  // Notify all listeners
  for (const listener of session.listeners) {
    listener(eventWithTimestamp);
  }

  // Log event (debug)
  console.log(
    `[SSE] Event added to session ${sessionId}: ${event.step} - ${event.percentage}%`,
  );
}

/**
 * Register a listener for progress events
 */
export function addProgressListener(
  sessionId: string,
  listener: EventListener,
) {
  // Get or create session
  if (!eventStore.has(sessionId)) {
    eventStore.set(sessionId, {
      events: [],
      listeners: [],
      lastEventId: 0,
    });
  }

  const session = eventStore.get(sessionId)!;

  // Add listener if it doesn't exist already
  if (!session.listeners.includes(listener)) {
    session.listeners.push(listener);
  }

  return () => {
    // Return function to remove listener
    const index = session.listeners.indexOf(listener);
    if (index !== -1) {
      session.listeners.splice(index, 1);
    }
  };
}

/**
 * Get the initial progress state for a session
 */
export function getProgressState(sessionId: string): ProgressEvent | null {
  const session = eventStore.get(sessionId);
  if (!session || session.events.length === 0) {
    return null;
  }

  // Return the latest event
  return session.events[session.events.length - 1];
}

/**
 * Clean up old sessions (call this periodically)
 */
export function cleanupOldSessions() {
  const ONE_HOUR = 60 * 60 * 1000;
  const now = Date.now();

  for (const [sessionId, session] of eventStore.entries()) {
    // If the last event is older than 1 hour, remove the session
    const lastEvent = session.events[session.events.length - 1];
    if (lastEvent && now - lastEvent.timestamp > ONE_HOUR) {
      eventStore.delete(sessionId);
    }
  }
}

// Run cleanup every hour
setInterval(cleanupOldSessions, 60 * 60 * 1000);
