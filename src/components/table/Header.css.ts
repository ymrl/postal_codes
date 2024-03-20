import { ComplexStyleRule, styleVariants, style } from "@vanilla-extract/css";
import { ColumnType } from "./types";
import { semanticTokens } from "../../styles";

const headerContentStyleBase = style({
  font: semanticTokens.ui.table.font.colHeader,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});
export const headerContentStyle = styleVariants<{
  [key in ColumnType]: ComplexStyleRule;
}>({
  number: [headerContentStyleBase],
  pref: [headerContentStyleBase],
  city: [headerContentStyleBase],
  town: [headerContentStyleBase],
  others: [headerContentStyleBase, { justifyContent: "flex-end" }],
});
