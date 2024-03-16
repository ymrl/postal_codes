import { style, styleVariants, ComplexStyleRule } from "@vanilla-extract/css";
import {
  colorVars,
  mediaQueries,
  semanticVars,
  themeVars,
} from "../../../App.css";
import { ColumnType } from "../types";

export const scrollableStyle = style({
  overflow: "auto",
  tableLayout: "fixed",
  borderCollapse: "collapse",
  selectors: {
    "&:focus-visible": {
      outline: semanticVars.focus.outline,
      outlineOffset: "-2px",
    },
  },
});

export const scrollableInnerStyle = style({
  width: "100%",
  position: "relative",
  display: "block",
});

const rowStyleBase = style({
  display: "grid",
  gridTemplateColumns: "6rem 5rem 8rem 1fr 8rem",
  padding: `0 ${themeVars.spacing.small}`,
  width: "100%",
  borderBottom: semanticVars.border.decoration,
  "@media": {
    [mediaQueries.small]: {
      gridTemplateColumns: "5rem 4.5rem 1fr 8rem",
    },
  },
});
export const rowStyle = styleVariants({
  header: [
    rowStyleBase,
    {
      height: "2rem",
    },
  ],
  body: [
    rowStyleBase,
    {
      minHeight: "3rem",
      "@media": {
        [mediaQueries.small]: {
          minHeight: "4.5rem",
        },
      },
    },
  ],
});

const base = style({
  padding: semanticVars.spacing.inlinePadding,
  flex: "0 0 auto",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "flex",
  alignItems: "center",
  justifyContent: "stretch",
  minWidth: "2.75rem",
  "@media": {
    [mediaQueries.small]: {
      padding: semanticVars.spacing.inlinePadding,
    },
  },
});

export const headerRowGroupStyle = style({
  display: "block",
  backgroundColor: colorVars.background.secondary,
  position: "sticky",
  top: 0,
  zIndex: 1,
});

export const cellStyle = styleVariants<{
  [key in ColumnType]: ComplexStyleRule;
}>({
  number: [base],
  pref: [base],
  city: [
    base,
    {
      "@media": {
        [mediaQueries.small]: {
          gridRowStart: 1,
          gridRowEnd: 2,
          gridColumnStart: 3,
          gridColumnEnd: 5,
        },
      },
    },
  ],
  town: [
    base,
    {
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
          gridRowStart: 2,
          gridRowEnd: 3,
          gridColumnStart: 4,
          gridColumnEnd: 5,
        },
      },
    },
  ],
});
