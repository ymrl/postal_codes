import { style } from "@vanilla-extract/css";
import { themeVars, colorVars } from "../../App.css";

export const searchStyle = style({
  display: "flex",
  gap: themeVars.spacing.normal,
  alignItems: "center",
});

export const searchLabelStyle = style({
  display: "flex",
  gap: themeVars.spacing.small,
  alignItems: "center",
  fontSize: themeVars.font.smallSize,
});

export const inputStyle = style({
  padding: themeVars.spacing.small,
  border: themeVars.border.distinguish,
  background: colorVars.background.primary,
  color: colorVars.text.primary,
  borderRadius: themeVars.borderRadius.small,
  height: themeVars.controls.normal,
  width: "8rem",
  "@media": {
    "screen and (max-width: 48rem)": {
      width: "5rem",
    },
  },
});
