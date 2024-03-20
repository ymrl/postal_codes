import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const fieldStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  minHeight: semanticTokens.ui.control.size,
  gap: semanticTokens.spacing.inlineInner,
  padding: 0,
  margin: 0,
});
export const fieldLabelTextStyle = style({
  display: "inline-flex",
  font: semanticTokens.font.normal,
  paddingTop: `calc((${semanticTokens.ui.control.size} - ${semanticTokens.font.lineHeight} * ${semanticTokens.font.size.normal}) / 2)`,
});
