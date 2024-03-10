import { globalStyle, style } from "@vanilla-extract/css";
import { checkBoxContainerStyle } from "./Checkbox.css";
import { colorVars, semanticVars, themeVars } from "../../App.css";

export const radioButtonContainerStyle = style([checkBoxContainerStyle]);

export const radioButtonVisualStyle = style({
  flexShrink: 0,
  display: 'inline-block',
  width: semanticVars.ui.check,
  height: semanticVars.ui.check,
  borderRadius: '50%',
  position: 'relative',
  left: 0,
  top: `calc(0.5 * ${semanticVars.ui.check} - 0.4 * 1em)`,
  outlineOffset: '-2px',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: `2px solid ${colorVars.ui.distinguish}`,
      background: colorVars.background.primary,
      width: '50%',
      height: '50%',
      borderRadius: '50%',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      height: '40%',
      borderRadius: '50%',
      background: colorVars.accent.primary,
      opacity: 0,
      transitionProperty: 'opacity, border-color',
      transitionDuration: themeVars.transition.duration
    },
  }
});

globalStyle(`${radioButtonContainerStyle} input:checked + ${radioButtonVisualStyle}::before`, {
  borderColor: colorVars.accent.primary,
});

globalStyle(`${radioButtonContainerStyle} input:checked + ${radioButtonVisualStyle}::after`, {
  opacity: 1
});

globalStyle(`${radioButtonContainerStyle} input:focus-visible + ${radioButtonVisualStyle}`, {
  outline: semanticVars.focus.outline
});
