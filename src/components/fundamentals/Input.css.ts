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
  minWidth: `calc(${semanticTokens.ui.control.size} * 2)`,
  flexShrink: 1,
  flexGrow: 1,
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
      flexBasis: "8rem",
      maxWidth: "8rem",
      "@media": {
        [queries.medium]: {
          width: "auto",
          maxWidth: "8rem",
        },
      },
    },
  ],
  full: [inputStyleBase, { width: "100%" }],
});
