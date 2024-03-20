import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const searchStyle = style({
  display: "flex",
  gap: semanticTokens.spacing.inlineInner,
  alignItems: "center",
  flexShrink: 1,
});

export const searchFormStyle = style({
  display: "flex",
  gap: semanticTokens.spacing.inlineInner,
  alignItems: "center",
});
