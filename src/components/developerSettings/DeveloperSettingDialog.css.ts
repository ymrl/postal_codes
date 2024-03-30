import { style } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../../styles";

export const dangerousNoticeStyle = style({
  color: colorVars.text.dangerous,
  font: semanticTokens.font.caption,
  fontWeight: semanticTokens.font.weight.strong,
});
