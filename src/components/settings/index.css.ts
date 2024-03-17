import { style } from "@vanilla-extract/css";
import { semanticVars } from "../../App.css";

export const settingStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: semanticVars.spacing.inlineInner,
});
