import { style } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../styles";

export const numberKunStyle = style({
  fill: colorVars.accent.primary,
  width: semanticTokens.ui.control.size,
  height: semanticTokens.ui.control.size,
});
