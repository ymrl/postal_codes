const mediumBreakpoint = "48rem";
const smallBreakpoint = "30rem";
export const queries = {
  medium: `(max-width: ${mediumBreakpoint})`,
  small: `(max-width: ${smallBreakpoint})`,
  dark: "(prefers-color-scheme: dark)",
} as const;
