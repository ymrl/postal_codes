import { style } from "@vanilla-extract/css";
import { colorVars } from "../../styles";

export const tableStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexShrink: 1,
  flexGrow: 1,
  height: "1px",
  borderTop: `0.125rem solid ${colorVars.accent.primary}`,
});
