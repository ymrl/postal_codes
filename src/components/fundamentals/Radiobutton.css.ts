import { globalStyle, style } from "@vanilla-extract/css";
import { checkBoxContainerStyle } from "./Checkbox.css";
import { colorVars, semanticVars, themeVars } from "../../App.css";

export const radioButtonContainerStyle = style([checkBoxContainerStyle]);

export const radioButtonVisualStyle = style({
  flexShrink: 0,
  width: semanticVars.ui.check,
  minHeight: semanticVars.ui.check,
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
      width: `calc(${semanticVars.ui.check} * 0.5)`,
      height: `calc(${semanticVars.ui.check} * 0.5)`,
      left: 0,
      right: 0,
      top: `calc((${semanticVars.ui.check} - ${semanticVars.font.normal}) * 0.6)`,
      border: `2px solid ${colorVars.ui.distinguish}`,
      background: colorVars.background.primary,
      borderRadius: "50%",
      boxShadow: `inset 0 0 0 0.125rem ${colorVars.background.primary}`,
      transitionProperty: "opacity, border-color",
      transitionDuration: themeVars.transition.duration,
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
    outline: semanticVars.focus.outline,
  },
);
