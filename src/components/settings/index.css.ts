import { style } from "@vanilla-extract/css";
import { themeVars } from "../../App.css";

export const settingStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: themeVars.spacing.normal,
});
