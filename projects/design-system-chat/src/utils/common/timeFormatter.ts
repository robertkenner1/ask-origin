import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

// Initialize the time-ago library with English locale
TimeAgo.addDefaultLocale(en);

// Create a single instance of TimeAgo for reuse
const timeAgo = new TimeAgo("en-US");

/**
 * Formats a timestamp into a human-readable "time ago" string
 * @param timestamp - Timestamp in milliseconds
 * @returns Formatted "time ago" string (e.g., "5 minutes ago", "2 hours ago")
 */
export function formatTimeAgo(timestamp?: number): string {
  if (!timestamp) return "just now";
  return timeAgo.format(timestamp);
}
