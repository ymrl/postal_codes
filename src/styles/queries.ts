import { screenWidths } from "./screeinSizes";

export const queries = {
  medium: `(max-width: ${screenWidths.medium.max})`,
  small: `(max-width: ${screenWidths.small.max})`,
  dark: "(prefers-color-scheme: dark)",
} as const;
