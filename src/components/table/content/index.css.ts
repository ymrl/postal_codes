import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../../styles";

const cellContentBase = style({
  font: semanticTokens.ui.table.font.body,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});
export const numberCellContentStyle = style([
  cellContentBase,
  {
    font: semanticTokens.ui.table.font.rowHeader,
  },
]);

export const prefCellContentStyle = style([cellContentBase]);
export const cityCellContentStyle = style([cellContentBase]);
export const townCellContentStyle = style([cellContentBase]);
