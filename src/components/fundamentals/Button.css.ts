import { style } from "@vanilla-extract/css";
import { colorVars } from "../../styles";
import { themeVars, semanticVars } from "../../App.css";

export const buttonStyle = style({
  cursor: "pointer",
  padding: `${themeVars.spacing.small} ${themeVars.spacing.small}`,
  borderRadius: semanticVars.borderRadius.control,
  border: semanticVars.border.decoration,
  height: semanticVars.ui.control,
  minWidth: semanticVars.ui.control,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colorVars.background.secondary,
  color: colorVars.text.primary,
  fontSize: semanticVars.font.button,
  lineHeight: themeVars.font.lineHeight,
  transitionDuration: themeVars.transition.duration,
  transitionProperty: "background-color",
  selectors: {
    "&:hover": {
      backgroundColor: colorVars.background.secondaryHover,
    },
    "&:focus-visible": {
      outline: semanticVars.focus.outline,
    },
  },
});
