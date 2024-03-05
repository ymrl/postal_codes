import { style } from "@vanilla-extract/css";
import { themeVars } from "../../App.css";

export const checkBoxContainerStyle = style({
  display: 'inline-flex',
  alignItems: 'baseline',
  gap: themeVars.spacing.small,
})