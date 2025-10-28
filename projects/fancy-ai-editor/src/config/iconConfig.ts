/**
 * Central configuration for icon sizes used throughout the application
 * Based on existing icon sizes in the codebase with slight standardization
 */

export const iconSizes = {
  // Standard icon sizes, based on what's used in the app
  xs: 16, // Used in TipTapBubbleMenu
  sm: 18, // Used in sidebars, AgentBench
  md: 20, // Used for action icons (settings, send)
  lg: 24, // For larger accent icons
  xl: 26, // Used in headers (DocumentListHeader)

  // Component-specific icon sizes (for easier reading)
  menuIcon: 16,
  sidebarIcon: 18,
  actionIcon: 20,
  settingsIcon: 20,
  headerIcon: 26,

  // Default size
  default: 18,
};

// Container size constants (for the containers that hold icons)
export const iconContainerSizes = {
  // Tailwind classes for different container sizes
  sm: "w-6 h-6", // 24px
  md: "w-8 h-8", // 32px - used in AgentBench
  lg: "w-10 h-10", // 40px

  // Component-specific container sizes
  sidebarContainer: "w-8 h-8", // 32px for sidebar icons
  settingsContainer: "w-5 h-5", // 20px for settings

  // Default
  default: "w-8 h-8", // 32px
};

export default { iconSizes, iconContainerSizes };
