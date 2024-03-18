import { style } from "@vanilla-extract/css";
import { colorVars } from "../../styles";
import { themeVars, semanticVars } from "../../App.css";

export const dialogContentStyle = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: semanticVars.spacing.areaInner,
});

export const disclaimerStyle = style({
  fontSize: themeVars.font.smallSize,
  color: colorVars.text.secondary,
  textAlign: "left",
});
