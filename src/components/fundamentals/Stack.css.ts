import { styleVariants, style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

const stackBase = style({
  display: "flex",
});

export const stackStyle = styleVariants({
  inline: [stackBase, { gap: semanticTokens.spacing.inlineInner }],
  block: [stackBase, { gap: semanticTokens.spacing.blockInner }],
  container: [stackBase, { gap: semanticTokens.spacing.containerInner }],
});

export const stackPaddingStyle = styleVariants({
  inline: [style({ padding: semanticTokens.spacing.inlinePadding })],
  block: [style({ padding: semanticTokens.spacing.blockPadding })],
  container: [style({ padding: semanticTokens.spacing.containerPadding })],
});

export const stackFlexDirectionStyle = styleVariants({
  row: [style({ flexDirection: "row" })],
  column: [style({ flexDirection: "column" })],
});

export const stackJustifyContentStyle = styleVariants({
  start: [style({ justifyContent: "flex-start" })],
  center: [style({ justifyContent: "center" })],
  end: [style({ justifyContent: "flex-end" })],
  spaceBetween: [style({ justifyContent: "space-between" })],
});
