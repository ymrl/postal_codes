import { style } from "@vanilla-extract/css";
import { colorVars } from "../../styles";
import { themeVars } from "../../App.css";

export const fieldsetStyle = style({
  border: "0",
  padding: "0",
});

export const legendStyle = style({
  fontSize: themeVars.font.normalSize,
  fontWeight: "bold",
  color: colorVars.text.primary,
});
