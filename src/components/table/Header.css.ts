import { ComplexStyleRule, styleVariants, style } from "@vanilla-extract/css";
import { semanticVars, themeVars } from "../../App.css";
import { ColumnType } from "./types";

const headerContentStyleBase = style({
  fontSize: semanticVars.font.dataHeading,
  fontWeight: themeVars.font.normalWeight,
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
