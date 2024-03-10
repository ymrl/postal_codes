import { style } from "@vanilla-extract/css";
import { themeVars, colorVars, semanticVars } from "../../App.css";

export const advancedSearchContentStyle = style({
  position: "absolute",
  top: `calc(100% + ${themeVars.spacing.xSmall})`,
  left: 0,
  backgroundColor: colorVars.background.primary,
  border: `1px solid ${colorVars.ui.decoration}`,
  zIndex: 1,
  padding: semanticVars.spacing.areaPadding,
  borderRadius: themeVars.borderRadius.normal,
  width: "19rem",
  maxWidth: "100dvw",
  boxShadow: `0 0.25rem 0.5rem rgba(0,0,0,0.2)`,
});
