import { style, styleVariants } from "@vanilla-extract/css";
import { mediaQueries, semanticVars, themeVars } from "../../App.css";

const base = style({
  padding: semanticVars.spacing.inlinePadding,
  flex: "0 0 auto",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  minWidth: "2.75rem",
  fontSize: semanticVars.font.data,
});
export const cellStyle = styleVariants({
  number: [base, { fontWeight: themeVars.font.strongWeight }],
  town: [
    base,
    {
      wordBreak: "break-all",
      "@media": {
        [mediaQueries.small]: {
          gridRowStart: 2,
          gridRowEnd: 3,
          gridColumnStart: 1,
          gridColumnEnd: 4,
        },
      },
    },
  ],
  others: [
    base,
    {
      justifyContent: "flex-end",
      "@media": {
        [mediaQueries.small]: {
          gridRowStart: 1,
          gridRowEnd: 3,
          gridColumnStart: 4,
          gridColumnEnd: 5,
        },
      },
    },
  ],
  default: [base],
});
