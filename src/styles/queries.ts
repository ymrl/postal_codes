import { screenWidths, screenHeights } from "./screeinSizes";

export const queries = {
  medium: `(max-width: ${screenWidths.medium.max})`,
  small: `(max-width: ${screenWidths.small.max})`,
  smallHeight: `(max-height: ${screenHeights.small.max})`,
  dark: "(prefers-color-scheme: dark)",
} as const;
