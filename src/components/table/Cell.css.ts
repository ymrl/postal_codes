import { style, styleVariants } from "@vanilla-extract/css";
import { mediaQueries, themeVars } from "../../App.css";

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
});
export const cellStyle = styleVariants({
  postalCode: [base],
  prefecture: [base],
  city: [base],
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
  townHeader: [
    base,
    {
      wordBreak: "break-all",
      "@media": {
        "screen and (max-width: 48rem)": {
          gridRowStart: 2,
          gridRowEnd: 3,
          gridColumnStart: 1,
          gridColumnEnd: 3,
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
          gridRowStart: 3,
          gridRowEnd: 4,
          gridColumnStart: 1,
          gridColumnEnd: 4,
        },
      },
    },
  ],
  othersHeader: [
    base,
    {
      justifyContent: "flex-end",
      "@media": {
        "screen and (max-width: 48rem)": {
          gridRowStart: 2,
          gridRowEnd: 3,
          gridColumnStart: 3,
          gridColumnEnd: 4,
        },
      },
    },
  ],

  default: [base],
});
