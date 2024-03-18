import { style } from "@vanilla-extract/css";
import { colorVars } from "../../styles";
import { themeVars } from "../../App.css";

export const dangerousNoticeStyle = style({
  color: colorVars.text.dangerous,
  fontSize: themeVars.font.smallSize,
  fontWeight: themeVars.font.strongWeight,
  margin: 0,
});
