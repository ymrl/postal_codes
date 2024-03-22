import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const paragraphStyle = style({
  margin: 0,
  padding: 0,
  font: semanticTokens.font.normal,
  color: semanticTokens.font.color.primary,
});
