import { StyleRule, style } from "@vanilla-extract/css";

export const visuallyHiddenStyleRule: StyleRule = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
};
export const visuallyHiddenStyle = style(visuallyHiddenStyleRule);
