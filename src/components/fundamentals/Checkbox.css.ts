import { style, globalStyle } from "@vanilla-extract/css";
import { colorVars, semanticVars, themeVars } from "../../App.css";

export const checkBoxContainerStyle = style({
  display: "inline-flex",
  alignItems: "baseline",
  fontSize: themeVars.font.normalSize,
});

export const checkBoxVisualStyle = style({
  flexShrink: 0,
  display: "inline-block",
  width: semanticVars.ui.check,
  height: semanticVars.ui.check,
  borderRadius: themeVars.borderRadius.small,
  position: "relative",
  left: 0,
  top: `calc(0.5 * ${semanticVars.ui.check} - 0.4 * 1em)`,
  outlineOffset: "-2px",
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: `2px solid ${colorVars.ui.distinguish}`,
      background: colorVars.background.primary,
      width: "50%",
      height: "50%",
      borderRadius: themeVars.borderRadius.small,
      transitionProperty: "background-color",
      transitionDuration: themeVars.transition.duration,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "42%",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(-50deg)",
      width: "40%",
      height: "20%",
      borderLeft: `2px solid ${colorVars.background.primary}`,
      borderBottom: `2px solid ${colorVars.background.primary}`,
    },
  },
});

globalStyle(
  `${checkBoxContainerStyle} input:checked + ${checkBoxVisualStyle}::before`,
  {
    background: colorVars.accent.primary,
    borderColor: colorVars.accent.primary,
  },
);

globalStyle(
  `${checkBoxContainerStyle} input:focus-visible + ${checkBoxVisualStyle}`,
  {
    outline: semanticVars.focus.outline,
  },
);
