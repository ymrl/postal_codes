import { style } from "@vanilla-extract/css";
import { colorVars, themeVars } from "../../App.css";

export const statusStyle = style({
  color: colorVars.text.secondary,
  fontSize: themeVars.font.smallSize,
});
