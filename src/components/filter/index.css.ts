import { style } from "@vanilla-extract/css";
import { semanticVars, themeVars } from "../../App.css";

export const searchStyle = style({
  display: "flex",
  gap: themeVars.spacing.normal,
  alignItems: "center",
  flexShrink: 1,
});

export const searchFormStyle = style({
  display: "flex",
  gap: semanticVars.spacing.inlineInner,
  alignItems: "center",
});
