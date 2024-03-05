import { style } from "@vanilla-extract/css";
import { themeVars } from "../../App.css";

export const fieldsStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.small,
  alignItems: 'stretch',
  listStyle: "none",
  padding: 0,
  margin: 0,
})
