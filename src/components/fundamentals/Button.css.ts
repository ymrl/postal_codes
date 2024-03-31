import { style } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../../styles";

export const buttonStyle = style({
  cursor: "pointer",
  padding: semanticTokens.ui.control.padding,
  borderRadius: `calc(${semanticTokens.ui.control.size} * 0.5)`,
  border: 0,
  height: semanticTokens.ui.control.size,
  minWidth: semanticTokens.ui.control.size,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colorVars.background.primary,
  color: semanticTokens.font.color.primary,
  font: semanticTokens.ui.button.font,
  transitionDuration: semanticTokens.transition.duration,
  transitionProperty: "background-color",
  flexShrink: 0,
  selectors: {
    "&:hover": {
      backgroundColor: colorVars.background.primaryHover,
    },
    "&:focus-visible": {
      outline: semanticTokens.focus.outline,
    },
  },
});

export const buttonWithBorderStyle = style([
  buttonStyle,
  { border: semanticTokens.border.decoration },
]);
