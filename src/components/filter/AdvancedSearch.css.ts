import { style } from "@vanilla-extract/css";
import { themeVars, colorVars } from "../../App.css";
import { buttonStyle } from "../fundamentals/index.css";

export const advancedSearchDetailsStyle = style({
  position: "relative",
  padding: 0,
  margin: 0,
});
export const advanceSearchSummaryStyle = style([
  buttonStyle,
  {
    listStyle: "none",
    userSelect: "none",
    position: "relative",
    selectors: {
      "&::-webkit-details-marker": {
        display: "none",
      },
    },
  },
]);
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
  width: "19rem",
  boxShadow: `0 0.25rem 0.5rem rgba(0,0,0,0.2)`,
  "@media": {
    "screen and (max-width: 48rem)": {
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
});
