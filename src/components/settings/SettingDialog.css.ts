import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const dialogContentStyle = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: semanticTokens.spacing.blockInner,
});

export const disclaimerStyle = style({
  font: semanticTokens.font.caption,
  color: semanticTokens.font.color.secondary,
  textAlign: "left",
});
