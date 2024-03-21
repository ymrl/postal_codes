import { style } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../../styles";

export const buttonStyle = style({
  cursor: "pointer",
  padding: semanticTokens.ui.control.padding,
  borderRadius: semanticTokens.ui.control.borderRadius,
  border: semanticTokens.border.decoration,
  height: semanticTokens.ui.control.size,
  minWidth: semanticTokens.ui.control.size,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colorVars.background.secondary,
  color: semanticTokens.font.color.primary,
  font: semanticTokens.ui.button.font,
  transitionDuration: semanticTokens.transition.duration,
  transitionProperty: "background-color",
  flexShrink: 0,
  selectors: {
    "&:hover": {
      backgroundColor: colorVars.background.secondaryHover,
    },
    "&:focus-visible": {
      outline: semanticTokens.focus.outline,
    },
  },
});
