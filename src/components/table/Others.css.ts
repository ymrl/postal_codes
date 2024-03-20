import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const othersStyle = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  gap: semanticTokens.spacing.inlineInner,
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  margin: 0,
  padding: 0,
});

export const othersItemStyle = style({
  font: semanticTokens.ui.table.font.aside,
  color: semanticTokens.font.color.secondary,
});
