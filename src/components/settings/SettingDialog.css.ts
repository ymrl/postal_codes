import { style } from "@vanilla-extract/css";
import { colorVars, themeVars } from "../../App.css";

export const settingDialogStyle = style({
  border: themeVars.border.distinguish,
  borderRadius: themeVars.borderRadius.large,
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
  padding: themeVars.spacing.normal,
  maxWidth: `calc(100vw - ${themeVars.spacing.large})`,
});
export const dialogContentStyle = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: themeVars.spacing.normal,
});

export const dialogTitleStyle = style({
  margin: 0,
  padding: 0,
  fontSize: themeVars.font.largeSize,
  fontWeight: themeVars.font.strongWeight,
});
