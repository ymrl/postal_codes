import { style, assignVars } from "@vanilla-extract/css";
import { themeVars, colorVars, lightColors, darkColors } from "../App.css";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100vw",
  height: "100vh",
});

export const containerStyleLight = style({
  vars: assignVars(colorVars, lightColors),
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
});
export const containerStyleDark = style({
  vars: assignVars(colorVars, darkColors),
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
});

export const headerAreaStyle = style({
  padding: themeVars.spacing.normal,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: themeVars.spacing.large,
  "@media": {
    "screen and (max-width: 48rem)": {
      flexDirection: "column",
      gap: themeVars.spacing.normal,
    },
  },
});
export const headerControlsStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: themeVars.spacing.normal,
  "@media": {
    "screen and (max-width: 48rem)": {
      gap: themeVars.spacing.normal,
    },
  },
});

export const mainAreaStyle = style({
  position: "relative",
  flexGrow: 1,
  flexShrink: 1,
});
