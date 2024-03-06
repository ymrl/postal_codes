import { style } from "@vanilla-extract/css";
import { themeVars, semanticVars } from "../App.css";

export const titleStyle = style({
  fontSize: semanticVars.font.title,
  fontWeight: themeVars.font.strongWeight,
  margin: 0,
});
