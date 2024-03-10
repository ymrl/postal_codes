import { style } from "@vanilla-extract/css";
import { semanticVars, themeVars } from "../../App.css";

export const headerContentStyle = style({
  fontSize: semanticVars.font.dataHeading,
  fontWeight: themeVars.font.normalWeight,
});
