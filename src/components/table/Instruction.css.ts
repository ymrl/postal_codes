import { style } from "@vanilla-extract/css";
import {
  colorVars,
  keyboardNavigationZIndex,
  semanticTokens,
} from "../../styles";

export const keyboardOnlyStyle = style({
  position: "absolute",
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  width: "1px",
  selectors: {
    "&:focus-within": {
      zIndex: keyboardNavigationZIndex,
      width: "auto",
      height: "auto",
      clip: "auto",
      margin: 0,
    },
  },
});
export const instructionStyle = style({
  background: colorVars.background.primary,
  padding: semanticTokens.spacing.blockPadding,
  border: semanticTokens.border.decoration,
});
