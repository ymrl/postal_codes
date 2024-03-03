import { style } from "@vanilla-extract/css";

export const tableStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexShrink: 1,
  position: "absolute",
  inset: 0,
});
export const tableBodyStyle = style({
  flexShrink: 1,
  overflow: "auto",
});
