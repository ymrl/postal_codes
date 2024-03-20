import { style, styleVariants, ComplexStyleRule } from "@vanilla-extract/css";
import { colorVars, queries, semanticTokens } from "../../../styles";
import { ColumnType } from "../types";

export const rowHeight = "3rem";
export const smallRowHeight = "4.5rem";

export const tableLayoutStyle = style({
  display: "block",
  width: "100%",
});
export const tableLayoutDisplayTableStyle = style([
  tableLayoutStyle,
  {
    tableLayout: "fixed",
    borderCollapse: "collapse",
    display: "table",
    minWidth: "40rem",
  },
]);

export const scrollableInnerStyle = style({
  width: "100%",
  position: "relative",
  display: "block",
});
export const scorllableInnerDisplayTableStyle = style([
  scrollableInnerStyle,
  {
    display: "table-row-group",
  },
]);

const rowStyleBase = style({
  display: "grid",
  gridTemplateColumns: "6rem 5rem 8rem 1fr 8rem",
  padding: `0 ${semanticTokens.spacing.inlinePadding}`,
  width: "100%",
  borderBottom: semanticTokens.border.decoration,
  "@media": {
    [queries.medium]: {
      gridTemplateColumns: "5rem 4.5rem 6rem 1fr 5rem",
    },
    [queries.small]: {
      gridTemplateColumns: "5rem 4.5rem 1fr 5rem",
    },
  },
});
export const rowStyle = styleVariants({
  header: [
    rowStyleBase,
    {
      height: "2rem",
      borderTop: `0.125rem solid ${colorVars.accent.primary}`,
    },
  ],
  body: [
    rowStyleBase,
    {
      minHeight: rowHeight,
      "@media": {
        [queries.small]: {
          minHeight: smallRowHeight,
        },
      },
    },
  ],
});
export const rowDisplayTableRowStyle = styleVariants({
  header: [
    rowStyle.header,
    {
      display: "table-row",
      padding: 0,
    },
  ],
  body: [
    rowStyle.body,
    {
      display: "table-row",
      height: rowHeight,
      padding: 0,
      "@media": {
        [queries.small]: {
          height: smallRowHeight,
        },
      },
    },
  ],
});

const base = style({
  padding: semanticTokens.spacing.inlinePadding,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "flex",
  alignItems: "center",
  justifyContent: "stretch",
  minWidth: "2.75rem",
  selectors: {
    "&:focus-visible": {
      outline: semanticTokens.focus.outline,
      outlineOffset: `calc(-1 * ${semanticTokens.focus.outlineWidth})`,
    },
  },
});

export const headerRowGroupStyle = style({
  display: "block",
  backgroundColor: colorVars.background.secondary,
  position: "sticky",
  top: 0,
  zIndex: 1,
  "@media": {
    [queries.smallHeight]: {
      position: "static",
    },
  },
});
export const headerRowGroupDisplayTableStyle = style([
  headerRowGroupStyle,
  {
    display: "table-header-group",
  },
]);

export const cellStyle = styleVariants<{
  [key in ColumnType]: ComplexStyleRule;
}>({
  number: [base],
  pref: [base],
  city: [
    base,
    {
      "@media": {
        [queries.small]: {
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
        [queries.small]: {
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
      alignItems: "flex-end",
      "@media": {
        [queries.small]: {
          gridRowStart: 1,
          gridRowEnd: 3,
          gridColumnStart: 4,
          gridColumnEnd: 5,
        },
      },
    },
  ],
});

export const cellDisplayTableCellStyle = styleVariants({
  number: [
    cellStyle.number,
    {
      display: "table-cell",
      verticalAlign: "middle",
      width: `calc(6rem + ${semanticTokens.spacing.inlinePadding})`,
      paddingLeft: `calc(${semanticTokens.spacing.inlinePadding} * 2)`,
      "@media": {
        [queries.small]: {
          width: `calc(5rem + ${semanticTokens.spacing.inlinePadding})`,
        },
      },
    },
  ],
  pref: [
    cellStyle.pref,
    {
      display: "table-cell",
      verticalAlign: "middle",
      width: "5rem",
      "@media": {
        [queries.small]: {
          width: "4.5rem",
        },
      },
    },
  ],
  city: [
    cellStyle.city,
    {
      display: "table-cell",
      verticalAlign: "middle",
      width: "8rem",
      "@media": {
        [queries.small]: {
          width: "4.5rem",
        },
      },
    },
  ],
  town: [
    cellStyle.town,
    {
      display: "table-cell",
      verticalAlign: "middle",
      width: "auto",
    },
  ],
  others: [
    cellStyle.others,
    {
      display: "table-cell",
      verticalAlign: "bottom",
      width: `calc(8rem + ${semanticTokens.spacing.inlinePadding})`,
      paddingRight: `calc(${semanticTokens.spacing.inlinePadding} * 2)`,
      "@media": {
        [queries.small]: {
          width: "4rem",
        },
      },
    },
  ],
});
