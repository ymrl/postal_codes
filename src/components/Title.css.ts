import { style } from "@vanilla-extract/css";
import { themeVars } from "../App.css";

export const titleStyle = style({
  fontSize: themeVars.font.xLargeSize,
  fontWeight: themeVars.font.strongWeight,
  margin: 0,
  "@media": {
    "screen and (max-width: 48rem)": {
      fontSize: themeVars.font.largeSize,
    },
  },
});
