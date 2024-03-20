import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const settingStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: semanticTokens.spacing.inlineInner,
});
