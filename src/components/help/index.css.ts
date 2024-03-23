import { style } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../../styles";

export const helpSectionTitleStyle = style({
  font: semanticTokens.font.subTitle,
  color: semanticTokens.font.color.primary,
  margin: 0,
  borderBottom: semanticTokens.border.accent,
});

export const helpDLStyle = style({
  margin: 0,
  padding: 0,
  font: semanticTokens.font.normal,
  color: semanticTokens.font.color.primary,
  display: "flex",
  flexDirection: "column",
  gap: "0.5em",
});

export const helpDTStyle = style({
  fontSize: semanticTokens.font.size.normal,
  fontWeight: semanticTokens.font.weight.strong,
  lineHeight: semanticTokens.font.lineHeight,
});

export const helpDDStyle = style({
  font: semanticTokens.font.normal,
  margin: "0 0 0 1em",
  padding: 0,
});

export const helpKbdStyle = style({
  font: semanticTokens.font.normal,
  fontSize: "0.8em",
  padding: "0.1em 0.3em",
  backgroundColor: colorVars.background.secondary,
  borderRadius: "0.2em",
});
