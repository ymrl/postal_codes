import { style } from "@vanilla-extract/css";
import { colorVars, themeVars } from "../../App.css";

export const badgeStyle = style({
  backgroundColor: colorVars.accent.primary,
  color: colorVars.accent.textOnPrimary,
  fontSize: themeVars.font.xSmallSize,
  fontWeight: themeVars.font.strongWeight,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${themeVars.spacing.xSmall} ${themeVars.spacing.xSmall}`,
  borderRadius: themeVars.borderRadius.large,
  width: "1.25rem",
  position: "absolute",
  right: "-0.5rem",
  top: "-0.5rem",
});
