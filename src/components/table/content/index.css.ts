import { style } from "@vanilla-extract/css";
import { themeVars, semanticVars } from "../../../App.css";

const cellContentBase = style({
  fontSize: semanticVars.font.data,
  fontWeight: themeVars.font.normalWeight,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});
export const numberCellContentStyle = style([
  cellContentBase,
  {
    fontWeight: themeVars.font.strongWeight,
  },
]);

export const prefCellContentStyle = style([cellContentBase]);
export const cityCellContentStyle = style([cellContentBase]);
export const townCellContentStyle = style([cellContentBase]);
