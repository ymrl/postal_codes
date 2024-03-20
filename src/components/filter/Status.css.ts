import { style } from "@vanilla-extract/css";
import { queries, semanticTokens } from "../../styles";

export const statusStyle = style({
  flexShrink: 1,
  font: semanticTokens.font.caption,
  color: semanticTokens.font.color.secondary,
  "@media": {
    [queries.small]: {
      position: "absolute",
      top: semanticTokens.spacing.blockPadding,
      right: semanticTokens.spacing.blockPadding,
    },
  },
});
