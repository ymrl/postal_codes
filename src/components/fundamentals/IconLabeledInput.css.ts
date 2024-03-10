import { style } from "@vanilla-extract/css";
import { colorVars, semanticVars, themeVars } from "../../App.css";

export const iconLabeledInputStyle = style({
  padding: themeVars.spacing.small,
  border: semanticVars.border.distinguish,
  background: colorVars.background.primary,
  color: colorVars.text.primary,
  borderRadius: semanticVars.borderRadius.control,
  height: semanticVars.ui.control,
  width: "10rem",
  overflow: "hidden",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "stretch",
  flexWrap: "nowrap",
  gap: themeVars.spacing.small,
  selectors: {
    "&:focus-within": {
      outline: semanticVars.focus.outline,
    },
  },
});
export const iconLabeledInputLabelStyle = style({
  flexGrow: 0,
  flexShrink: 0,
  fontSize: themeVars.font.xSmallSize,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const iconLabeledInputLabelTextStyle = style({
  display: "inline-flex",
  maxWidth: "100%",
  transitionProperty: "opacity",
  transitionDuration: themeVars.transition.duration,
  opacity: 1,
  whiteSpace: "nowrap",
});
export const iconLabeledInputLabelTextHiddenStyle = style({
  overflow: "hidden",
  marginLeft: "-1px",
  width: "1px",
  maxWidth: "1px",
  opacity: 0,
});

export const iconLabeledInputInputStyle = style({
  fontSize: themeVars.font.normalSize,
  background: colorVars.background.primary,
  color: colorVars.text.primary,
  padding: 0,
  border: 0,
  flexGrow: 1,
  flexShrink: 1,
  outline: "none",
  width: "1px",
});
