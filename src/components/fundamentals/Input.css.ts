import { style, styleVariants } from "@vanilla-extract/css";
import { colorVars, queries } from "../../styles";
import { semanticVars, themeVars } from "../../App.css";

const inputStyleBase = style({
  padding: semanticVars.spacing.inlinePadding,
  border: semanticVars.border.distinguish,
  background: colorVars.background.primary,
  color: colorVars.text.primary,
  fontSize: themeVars.font.normalSize,
  borderRadius: semanticVars.borderRadius.control,
  height: semanticVars.ui.control,
  selectors: {
    "&:focus-visible": {
      outline: semanticVars.focus.outline,
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
