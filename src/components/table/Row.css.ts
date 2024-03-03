import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars, colorVars } from "../../App.css";

const base = style({
  display: "grid",
  gridTemplateColumns: "6rem 5rem 8rem 1fr 8rem",
  padding: `0 ${themeVars.spacing.small}`,
  width: "100%",
  minHeight: "2rem",
  "@media": {
    "screen and (max-width: 48rem)": {
      gridTemplateColumns: "6rem 5rem 1fr",
      minHeight: "4rem",
    },
  },
});
export const rowStyle = styleVariants({
  body: [
    base,
    {
      borderBottom: `1px solid ${colorVars.ui.decoration}`,
    },
  ],
  header: [
    base,
    {
      backgroundColor: colorVars.background.secondary,
      borderTop: `2px solid ${colorVars.accent.primary}`,
    },
  ],
});
