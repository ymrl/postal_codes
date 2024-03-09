import { style } from "@vanilla-extract/css";
import { themeVars, colorVars } from "../../App.css";

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
