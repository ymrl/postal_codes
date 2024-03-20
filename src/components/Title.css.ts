import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../styles";

export const titleStyle = style({
  font: semanticTokens.font.title,
  color: semanticTokens.font.color.primary,
  margin: 0,
});
