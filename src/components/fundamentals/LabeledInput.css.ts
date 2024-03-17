import { style, styleVariants } from "@vanilla-extract/css";
import { colorVars, semanticVars, themeVars } from "../../App.css";
import { inputStyle } from "./Input.css";

const labeledInputStyleBase = style({
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

export const labeledInputStyle = styleVariants({
  default: [inputStyle.default, labeledInputStyleBase],
  full: [inputStyle.full, labeledInputStyleBase],
});

export const labeledInputInputStyle = style({
  fontSize: themeVars.font.normalSize,
  background: colorVars.background.primary,
  color: colorVars.text.primary,
  padding: 0,
  border: 0,
  flexGrow: 1,
  flexShrink: 1,
  outline: "none",
  width: "1px",
  selectors: {
    "&[type='number']": {
      textAlign: "right",
    },
  },
});

export const labeledInputLabelStyle = style({
  fontSize: themeVars.font.xSmallSize,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
