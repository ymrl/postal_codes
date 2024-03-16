import { style } from "@vanilla-extract/css";
import { themeVars } from "../../App.css";

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
