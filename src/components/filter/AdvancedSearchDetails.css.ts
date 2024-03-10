import { style } from "@vanilla-extract/css";
import { buttonStyle } from "../fundamentals/index.css";

export const advancedSearchDetailsStyle = style({
  position: "relative",
  padding: 0,
  margin: 0,
});

export const advancedSearchSummaryStyle = style([
  buttonStyle,
  {
    listStyle: "none",
    userSelect: "none",
    position: "relative",
    selectors: {
      "&::-webkit-details-marker": {
        display: "none",
      },
    },
  },
]);
