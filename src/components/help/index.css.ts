import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const helpSectionTitleStyle = style({
  font: semanticTokens.font.subTitle,
  color: semanticTokens.font.color.primary,
  margin: 0,
  borderBottom: semanticTokens.border.accent,
});

export const helpULStyle = style({
  margin: 0,
  padding: "0 0 0 1em",
  font: semanticTokens.font.normal,
  color: semanticTokens.font.color.primary,
  display: "flex",
  flexDirection: "column",
  gap: "0.5em",
});

export const helpLIStyle = style({});
