import { style } from "@vanilla-extract/css";
import { themeVars, colorVars } from "../../App.css";

export const advancedSearchDetailsStyle = style({
  position: "relative",
  padding: 0,
  margin: 0,
});
export const advanceSearchSummaryStyle = style({
  listStyle: "none",
  userSelect: "none",
  position: "relative",
  cursor: "pointer",
  padding: `${themeVars.spacing.small} ${themeVars.spacing.normal}`,
  borderRadius: themeVars.borderRadius.small,
  border: themeVars.border.decoration,
  height: themeVars.controls.normal,
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: colorVars.background.secondary,
  fontSize: themeVars.font.normalSize,
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
export const advancedSearchContentStyle = style({
  position: "absolute",
  top: `calc(100% + ${themeVars.spacing.xSmall})`,
  left: 0,
  backgroundColor: colorVars.background.primary,
  border: `1px solid ${colorVars.ui.decoration}`,
  zIndex: 1,
  padding: themeVars.spacing.small,
  borderRadius: themeVars.borderRadius.normal,
  boxShadow: `0 0.25rem 0.5rem rgba(0,0,0,0.2)`,
  "@media": {
    "screen and (max-width: 48rem)": {
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
});
export const advancedSearchListStyle = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  width: "18rem",
  maxWidth: "80vw",
  display: "flex",
  flexDirection: "column",
  gap: themeVars.spacing.small,
});
export const advancedSearchItemStyle = style({});
