import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars, colorVars, mediaQueries } from "../../App.css";

const base = style({
  display: "grid",
  gridTemplateColumns: "6rem 5rem 8rem 1fr 8rem",
  padding: `0 ${themeVars.spacing.small}`,
  width: "100%",
  minHeight: "2rem",
  "@media": {
    [mediaQueries.small]: {
      gridTemplateColumns: "5rem 4.5rem 1fr 5rem",
      minHeight: "3rem",
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
