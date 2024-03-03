import { style } from "@vanilla-extract/css";
import { themeVars } from "../../App.css";

export const headerContentStyle = style({
  fontSize: themeVars.font.smallSize,
  fontWeight: themeVars.font.normalWeight,
});
