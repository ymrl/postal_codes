import { style, globalStyle } from "@vanilla-extract/css";
import { colorVars, semanticVars, themeVars } from "../../App.css";

export const checkBoxContainerStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  fontSize: semanticVars.font.normal,
});

export const checkBoxVisualStyle = style({
  flexShrink: 0,
  width: semanticVars.ui.check,
  minHeight: semanticVars.ui.check,
  borderRadius: themeVars.borderRadius.small,
  position: "relative",
  left: 0,
  top: 0,
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
      borderRadius: themeVars.borderRadius.small,
      transitionProperty: "background-color",
      transitionDuration: themeVars.transition.duration,
      outlineOffset: "0.125rem",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      margin: "auto",
      top: `calc((${semanticVars.ui.check} - ${semanticVars.font.normal}) * 0.6 + 0.125rem)`,
      left: 0,
      right: 0,
      transform: "rotate(-50deg)",
      width: `calc(${semanticVars.ui.check} * 0.4)`,
      height: `calc(${semanticVars.ui.check} * 0.2)`,
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
  `${checkBoxContainerStyle} input:focus-visible + ${checkBoxVisualStyle}::before`,
  {
    outline: semanticVars.focus.outline,
  },
);
