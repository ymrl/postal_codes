import { style } from "@vanilla-extract/css";
import { colorVars, themeVars, semanticVars } from "../../App.css";

export const settingDialogStyle = style({
  border: 0,
  borderRadius: themeVars.borderRadius.large,
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
  padding: 0,
  width: "30rem",
  maxWidth: `calc(100vw - ${themeVars.spacing.large})`,
  position: "relative",
  selectors: {
    "&::backdrop": {
      backgroundColor: colorVars.ui.backdrop,
    },
  },
});
export const dialogInnerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: 0,
  alignItems: "stretch",
  justifyContent: "stretch",
  height: "100%",
  maxHeight: "100%",
});
export const dialogHeaderStyle = style({
  position: "sticky",
  top: 0,
  padding: themeVars.spacing.large,
  backgroundColor: colorVars.background.secondary,
  display: "flex",
  justifyContent: "space-between",
});

export const dialogBodyStyle = style({
  padding: themeVars.spacing.large,
  overflow: "auto",
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

export const disclaimerStyle = style({
  fontSize: themeVars.font.smallSize,
  color: colorVars.text.secondary,
  textAlign: "left",
});

export const dialogCloseButtonStyle = style({
  width: themeVars.controls.normal,
  height: themeVars.controls.normal,
  borderRadius: "50%",
  border: 0,
  padding: 0,
  backgroundColor: "transparent",
  color: colorVars.ui.distinguish,
  fontSize: themeVars.font.normalSize,
  cursor: "pointer",
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
