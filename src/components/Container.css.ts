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
  headerZIndex,
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
  zIndex: headerZIndex,
  background: colorVars.background.primary,
  "@media": {
    [queries.smallHeight]: {
      position: "relative",
    },
  },
});
// Safariのみ、details要素がopenでないときでも、子要素にフォーカスしようとしてしまう
globalStyle(
  `${containerStyle}:not(${containerStyle}--details-children-closed) details:not([open]) > *:not(summary)`,
  {
    display: "none",
  },
);
