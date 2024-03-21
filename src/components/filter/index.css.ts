import { style } from "@vanilla-extract/css";
import { queries, semanticTokens } from "../../styles";

export const searchStyle = style({
  "@media": {
    [queries.medium]: {
      flexShrink: 1,
      flexGrow: 1,
    },
  },
});

export const searchFormStyle = style({
  display: "flex",
  gap: semanticTokens.spacing.inlineInner,
  alignItems: "center",

  "@media": {
    [queries.medium]: {
      flexShrink: 1,
      flexGrow: 1,
    },
  },
});
