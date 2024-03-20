import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const badgeStyle = style({
  background: semanticTokens.ui.badge.background,
  color: semanticTokens.ui.badge.color,
  font: semanticTokens.ui.badge.font,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: semanticTokens.ui.badge.padding,
  borderRadius: `calc(0.5 * ${semanticTokens.ui.badge.size})`,
  width: semanticTokens.ui.badge.size,
  height: semanticTokens.ui.badge.size,
  position: "absolute",
  right: `calc(-0.25 * ${semanticTokens.ui.badge.size})`,
  top: `calc(-0.25 * ${semanticTokens.ui.badge.size})`,
});
