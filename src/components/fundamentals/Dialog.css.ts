import { style } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../../styles";

export const dialogStyle = style({
  display: "none",
  border: semanticTokens.border.decoration,
  borderRadius: semanticTokens.ui.dialog.borderRadius,
  backgroundColor: colorVars.background.primary,
  padding: 0,
  width: "30rem",
  maxWidth: `calc(100vw - ${semanticTokens.spacing.containerPadding} * 2)`,
  position: "relative",
  flexDirection: "column",
  gap: 0,
  justifyContent: "stretch",
  alignItems: "stretch",
  overflow: "hidden",
  selectors: {
    "&::backdrop": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    "&[open]": {
      display: "flex",
    },
  },
});

export const backdropCSSVarStyle = style({
  selectors: {
    "&::backdrop": {
      backgroundColor: colorVars.ui.backdrop,
    },
  },
});

export const dialogHeaderStyle = style({
  borderBottom: semanticTokens.border.accent,
});

export const dialogBodyStyle = style({
  flexShrink: 1,
  overflow: "auto",
  padding: semanticTokens.spacing.containerPadding,
});

export const dialogTitleStyle = style({
  margin: 0,
  padding: 0,
  font: semanticTokens.font.subTitle,
});
