import { style } from "@vanilla-extract/css";
import {
  colorVars,
  mediaQueries,
  semanticVars,
  themeVars,
} from "../../App.css";

export const statusStyle = style({
  flexShrink: 1,
  color: colorVars.text.secondary,
  fontSize: themeVars.font.smallSize,
  "@media": {
    [mediaQueries.small]: {
      position: "absolute",
      top: semanticVars.spacing.areaPadding,
      right: semanticVars.spacing.areaPadding,
    },
  },
});
