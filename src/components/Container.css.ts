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
  position: "sticky",
  top: 0,
  background: colorVars.background.primary,
  zIndex: 2,
  padding: semanticTokens.spacing.blockPadding,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: semanticTokens.spacing.blockInner,
  "@media": {
    [queries.smallHeight]: {
      position: "relative",
    },
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
  gap: semanticTokens.spacing.blockInner,
});

// Safariのみ、details要素がopenでないときでも、子要素にフォーカスしようとしてしまう
globalStyle(
  `${containerStyle}:not(${containerStyle}--details-children-closed) details:not([open]) > *:not(summary)`,
  {
    display: "none",
  },
);
