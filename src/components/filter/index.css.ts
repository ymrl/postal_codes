import { style } from "@vanilla-extract/css";
import { themeVars } from "../../App.css";

export const searchStyle = style({
  display: "flex",
  gap: themeVars.spacing.normal,
  alignItems: "center",
});

export const searchFormStyle = style({
  display: "flex",
  gap: themeVars.spacing.normal,
  alignItems: "center",
});
