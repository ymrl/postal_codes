import { style } from "@vanilla-extract/css";
import { colorVars, themeVars, semanticVars } from "../../App.css";

export const settingDialogStyle = style({
  display: "none",
  border: semanticVars.border.decoration,
  borderRadius: semanticVars.borderRadius.dialog,
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
  padding: 0,
  width: "30rem",
  maxWidth: `calc(100vw - ${themeVars.spacing.large})`,
  position: "relative",
  flexDirection: "column",
  gap: 0,
  justifyContent: "stretch",
  alignItems: "stretch",
  selectors: {
    "&::backdrop": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    "&[open]": {
      display: "flex",
    },
  },
});

export const backdropCSSVarStyle = style({
  selectors: {
    "&::backdrop": {
      backgroundColor: colorVars.ui.backdrop,
    },
  },
});

export const dialogHeaderStyle = style({
  padding: semanticVars.spacing.areaPadding,
  backgroundColor: colorVars.background.secondary,
  display: "flex",
  justifyContent: "space-between",
});

export const dialogBodyStyle = style({
  flexShrink: 1,
  overflow: "auto",
});

export const dialogContentStyle = style({
  padding: semanticVars.spacing.areaPadding,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: semanticVars.spacing.areaInner,
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
