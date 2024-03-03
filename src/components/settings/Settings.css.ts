import { style } from "@vanilla-extract/css";
import { themeVars, colorVars } from "../../App.css";

export const buttonStyle = style({
  cursor: "pointer",
  padding: `${themeVars.spacing.small} ${themeVars.spacing.normal}`,
  borderRadius: themeVars.borderRadius.small,
  border: themeVars.border.decoration,
  height: themeVars.controls.normal,
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: colorVars.background.secondary,
  color: colorVars.text.primary,
  fontSize: themeVars.font.normalSize,
  lineHeight: themeVars.font.lineHeight,
  transitionDuration: themeVars.transition.duration,
  transitionProperty: "background-color",
  selectors: {
    "&:hover": {
      backgroundColor: colorVars.background.secondaryHover,
    },
  },
  "@media": {
    "screen and (max-width: 48rem)": {
      fontSize: themeVars.font.smallSize,
    },
  },
});
