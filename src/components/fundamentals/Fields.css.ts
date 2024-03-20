import { style, styleVariants } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

const fieldsStyleBase = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  listStyle: "none",
  padding: 0,
  margin: 0,
});
export const fieldsStyle = styleVariants({
  normal: [
    fieldsStyleBase,
    {
      gap: semanticTokens.spacing.blockInner,
    },
  ],
  small: [
    fieldsStyleBase,
    {
      gap: semanticTokens.spacing.inlineInner,
    },
  ],
  none: [fieldsStyleBase, { gap: 0 }],
});

export const fieldsStyleHorizontal = style({
  flexDirection: "row",
});
