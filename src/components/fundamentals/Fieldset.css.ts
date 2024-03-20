import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const fieldsetStyle = style({
  border: "0",
  padding: "0",
});

export const legendStyle = style({
  font: semanticTokens.ui.legend.font,
  color: semanticTokens.font.color.primary,
});
