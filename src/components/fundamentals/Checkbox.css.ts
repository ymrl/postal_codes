import { style, globalStyle } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../../styles";

export const checkBoxContainerStyle = style({
  display: "grid",
  gridTemplateColumns: `${semanticTokens.ui.check.size} 1fr`,
  position: "relative",
});

export const checkBoxTextStyle = style({
  font: semanticTokens.font.normal,
});

export const checkBoxLabelStyle = style({
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridRowStart: 1,
  gridRowEnd: 2,
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
});

export const checkBoxCaptionStyle = style({
  font: semanticTokens.font.caption,
  color: colorVars.text.secondary,
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRowStart: 2,
  gridRowEnd: 3,
});

export const checkBoxVisualStyle = style({
  flexShrink: 0,
  width: semanticTokens.ui.check.size,
  minHeight: semanticTokens.ui.check.size,
  borderRadius: semanticTokens.ui.check.borderRadius,
  position: "relative",
  left: 0,
  top: 0,
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
      borderRadius: semanticTokens.ui.check.borderRadius,
      transitionProperty: "background-color",
      transitionDuration: semanticTokens.transition.duration,
      outlineOffset: "0.125rem",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      margin: "auto",
      top: `calc((${semanticTokens.ui.check.size} - ${semanticTokens.font.size.normal}) * 0.5 + ${semanticTokens.ui.check.size} * 0.125)`,
      left: 0,
      right: 0,
      transform: "rotate(-50deg)",
      width: `calc(${semanticTokens.ui.check.size} * 0.4)`,
      height: `calc(${semanticTokens.ui.check.size} * 0.2)`,
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
    outline: semanticTokens.focus.outline,
  },
);
