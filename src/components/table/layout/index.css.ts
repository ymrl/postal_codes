import { style, styleVariants, ComplexStyleRule } from "@vanilla-extract/css";
import { colorVars, queries, semanticTokens } from "../../../styles";
import { ColumnType } from "../types";

export const scrollableStyle = style({
  display: "block",
  overflow: "auto",
  flexGrow: 1,
  selectors: {
    "&:focus-visible": {
      outline: semanticTokens.focus.outline,
      outlineOffset: `calc(-1 * ${semanticTokens.focus.outlineWidth})`,
    },
  },
});

export const tablePlayerStyle = style({
  display: "flex",
  flexDirection: "column",
  tableLayout: "fixed",
  borderCollapse: "collapse",
});
export const tablePlayerDisplayTableStyle = style([
  tablePlayerStyle,
  {
    display: "table",
    width: "100%",
    minWidth: "40rem",
  },
]);

export const scrollableInnerStyle = style({
  width: "100%",
  position: "relative",
  display: "block",
  flexGrow: 1,
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
    },
  ],
  body: [
    rowStyleBase,
    {
      minHeight: "3rem",
      "@media": {
        [queries.small]: {
          minHeight: "4.5rem",
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
      height: "3rem",
      padding: 0,
      "@media": {
        [queries.small]: {
          height: "4.5rem",
        },
      },
    },
  ],
});

const base = style({
  padding: semanticTokens.spacing.inlinePadding,
  flex: "0 0 auto",
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
