import { globalStyle, style } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../../styles";
import { checkBoxContainerStyle } from "./Checkbox.css";

export const radioButtonContainerStyle = style([checkBoxContainerStyle]);

export const radioButtonVisualStyle = style({
  flexShrink: 0,
  width: semanticTokens.ui.check.size,
  minHeight: semanticTokens.ui.check.size,
  borderRadius: "50%",
  position: "relative",
  left: 0,
  top: 0,
  display: "inline-block",
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      margin: "auto",
      width: `calc(${semanticTokens.ui.check.size} * 0.5)`,
      height: `calc(${semanticTokens.ui.check.size} * 0.5)`,
      left: 0,
      right: 0,
      top: `calc((${semanticTokens.ui.check.size} - ${semanticTokens.font.size.normal}) * 0.5)`,
      border: `2px solid ${colorVars.ui.distinguish}`,
      background: colorVars.background.primary,
      borderRadius: "50%",
      boxShadow: `inset 0 0 0 0.125rem ${colorVars.background.primary}`,
      transitionProperty: "opacity, border-color",
      transitionDuration: semanticTokens.transition.duration,
      outlineOffset: "0.0625rem",
    },
  },
});

globalStyle(
  `${radioButtonContainerStyle} input:checked + ${radioButtonVisualStyle}::before`,
  {
    background: colorVars.accent.primary,
    borderColor: colorVars.accent.primary,
  },
);

globalStyle(
  `${radioButtonContainerStyle} input:focus-visible + ${radioButtonVisualStyle}::before`,
  {
    outline: semanticTokens.focus.outline,
  },
);
