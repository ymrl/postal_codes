import { style, styleVariants } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../../styles";
import { inputStyle } from "./Input.css";

const labeledInputStyleBase = style({
  overflow: "hidden",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "stretch",
  flexWrap: "nowrap",
  gap: semanticTokens.spacing.inlineInner,
  selectors: {
    "&:focus-within": {
      outline: semanticTokens.focus.outline,
    },
  },
});

export const labeledInputStyle = styleVariants({
  default: [inputStyle.default, labeledInputStyleBase],
  full: [inputStyle.full, labeledInputStyleBase],
});

export const labeledInputInputStyle = style({
  fontSize: semanticTokens.ui.input.font,
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
  font: semanticTokens.font.caption,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
