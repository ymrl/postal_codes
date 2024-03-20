import { style, styleVariants } from "@vanilla-extract/css";
import { colorVars, queries, semanticTokens } from "../../styles";

const inputStyleBase = style({
  padding: semanticTokens.spacing.inlinePadding,
  border: semanticTokens.border.distinguish,
  background: colorVars.background.primary,
  color: semanticTokens.font.color.primary,
  fontSize: semanticTokens.ui.input.font,
  borderRadius: semanticTokens.ui.control.borderRadius,
  height: semanticTokens.ui.control.size,
  selectors: {
    "&:focus-visible": {
      outline: semanticTokens.focus.outline,
    },
    "&[type=number]": {
      textAlign: "right",
    },
  },
});

export const inputStyle = styleVariants({
  default: [
    inputStyleBase,
    {
      width: "10rem",
      "@media": {
        [queries.medium]: {
          width: "8rem",
        },
      },
    },
  ],
  full: [inputStyleBase, { width: "100%" }],
});
