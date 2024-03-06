import { style, styleVariants } from "@vanilla-extract/css";
import { mediaQueries, semanticVars, themeVars } from "../../App.css";

const base = style({
  padding: themeVars.spacing.small,
  flex: "0 0 auto",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  "@media": {
    "screen and (max-width: 48rem)": {
      padding: `${themeVars.spacing.small} ${themeVars.spacing.xSmall}`,
    },
  },
  fontSize: semanticVars.font.data
});
export const cellStyle = styleVariants({
  town: [
    base,
    {
      wordBreak: "break-all",
      "@media": {
        [mediaQueries.mobile]: {
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
        "screen and (max-width: 48rem)": {
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
