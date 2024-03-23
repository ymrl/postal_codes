import { style } from "@vanilla-extract/css";
import { queries, semanticTokens } from "../../styles";

export const searchStyle = style({
  flexShrink: 1,
  flexGrow: 1,
});

export const searchFormStyle = style({
  display: "flex",
  gap: semanticTokens.spacing.inlineInner,
  alignItems: "center",
  flexShrink: 1,
  flexGrow: 1,

  "@media": {
    [queries.medium]: {
      flexGrow: 1,
    },
  },
});
