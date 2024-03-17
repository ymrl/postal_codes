import { style, styleVariants } from "@vanilla-extract/css";
import { semanticVars } from "../../App.css";

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
      gap: semanticVars.spacing.areaInner,
    },
  ],
  small: [
    fieldsStyleBase,
    {
      gap: semanticVars.spacing.inlineInner,
    },
  ],
  none: [fieldsStyleBase, { gap: 0 }],
});

export const fieldsStyleHorizontal = style({
  flexDirection: "row",
});
