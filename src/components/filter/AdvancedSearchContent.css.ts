import { style } from "@vanilla-extract/css";
import { colorVars, semanticTokens } from "../../styles";

export const advancedSearchContentStyle = style({
  position: "absolute",
  top: `calc(100% + ${semanticTokens.spacing.inlinePadding})`,
  left: 0,
  backgroundColor: colorVars.background.primary,
  border: `1px solid ${colorVars.ui.decoration}`,
  padding: semanticTokens.spacing.blockPadding,
  borderRadius: semanticTokens.ui.popup.borderRadius,
  width: "19rem",
  maxWidth: "100dvw",
  boxShadow: `0 0.25rem 0.5rem rgba(0,0,0,0.2)`,
});
