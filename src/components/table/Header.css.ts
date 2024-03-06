import { style } from "@vanilla-extract/css";
import { themeVars } from "../../App.css";

export const headerContentStyle = style({
  fontSize: themeVars.font.xSmallSize,
  fontWeight: themeVars.font.normalWeight,
});
