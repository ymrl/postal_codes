import { style } from "@vanilla-extract/css";
import { semanticVars, themeVars } from "../../App.css";

export const fieldStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  minHeight: semanticVars.ui.control,
  gap: semanticVars.spacing.inlineInner,
  padding: 0,
  margin: 0,
});
export const fieldLabelTextStyle = style({
  display: "inline-flex",
  fontSize: semanticVars.font.normal,
  paddingTop: `calc((${semanticVars.ui.control} - ${themeVars.font.lineHeight} * ${semanticVars.font.normal}) / 2)`,
});
