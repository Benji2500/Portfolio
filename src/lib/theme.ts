/**
 * Centralized design tokens for the portfolio's dark editorial theme.
 * Tailwind v4 accepts arbitrary values like `bg-[#090b10]`; these constants
 * keep the palette defined in one place instead of scattered hex literals.
 */
export const COLORS = {
  /** Page background */
  page: '#090b10',
  /** Deep panels (footer, architecture section background) */
  deep: '#07090e',
  /** Standard card / panel surface */
  card: '#0c1018',
  /** Raised panel surface (modals) */
  panel: '#0e121c',
  /** Inset / code surfaces */
  inset: '#0a0d14',
  /** Simulator container */
  simulator: '#0b0e16',
  /** Topology sub-panel */
  topology: '#080b11',
  /** Terminal display surface */
  terminal: '#06080d',
  /** Terminal output surface */
  terminalOutput: '#05070a',
  /** Header bars inside modals */
  headerBar: '#090c13',
  /** Filter tab bar */
  tabBar: '#10141f',
} as const;
