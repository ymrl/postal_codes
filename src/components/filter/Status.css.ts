import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const statusStyle = style({
  flexShrink: 0,
  font: semanticTokens.font.caption,
  color: semanticTokens.font.color.secondary,
});
