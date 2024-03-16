import { style } from "@vanilla-extract/css";
import { colorVars, semanticVars, themeVars } from "../../App.css";

export const othersStyle = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  gap: themeVars.spacing.small,
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  margin: 0,
  padding: 0,
});

export const othersItemStyle = style({
  fontSize: semanticVars.font.aside,
  color: colorVars.text.secondary,
});
