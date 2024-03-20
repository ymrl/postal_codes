import { style, assignVars, globalStyle } from "@vanilla-extract/css";
import {
  lightColors,
  darkColors,
  colorVars,
  queries,
  semanticTokens,
  semanticTokensLarge,
  semanticTokensMedium,
  semanticTokensSmall,
} from "../styles";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100dvw",
  height: "100dvh",

  vars: assignVars(semanticTokens, semanticTokensLarge),
  "@media": {
    [queries.medium]: {
      vars: assignVars(semanticTokens, semanticTokensMedium),
    },
    [queries.small]: {
      vars: assignVars(semanticTokens, semanticTokensSmall),
    },
  },
});

export const containerStyleLight = style({
  vars: assignVars(colorVars, lightColors),
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
  colorScheme: "light",
});
export const containerStyleDark = style({
  vars: assignVars(colorVars, darkColors),
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
  colorScheme: "dark",
});

export const headerAreaStyle = style({
  padding: semanticTokens.spacing.blockPadding,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: semanticTokens.spacing.blockInner,
  "@media": {
    [queries.small]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },
});
export const headerControlsStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
  gap: semanticTokens.spacing.inlineInner,
});

export const mainAreaStyle = style({
  position: "relative",
  flexGrow: 1,
  flexShrink: 1,
  display: "flex",
  flexDirection: "column",
});

// Safariのみ、details要素がopenでないときでも、子要素にフォーカスしようとしてしまう
globalStyle(
  `${containerStyle}:not(${containerStyle}--details-children-closed) details:not([open]) > *:not(summary)`,
  {
    display: "none",
  },
);
