import { style } from "@vanilla-extract/css";
import { semanticTokens } from "../../styles";

export const linkStyle = style({
  borderRadius: semanticTokens.ui.link.borderRadius,
  selectors: {
    "&:link": {
      color: semanticTokens.ui.link.color.link,
    },
    "&:link:hover": {
      color: semanticTokens.ui.link.hover.link,
    },
    "&:visited": {
      color: semanticTokens.ui.link.color.visited,
    },
    "&:visited:hover": {
      color: semanticTokens.ui.link.hover.visited,
    },
    "&:focus-visible": {
      outline: semanticTokens.focus.outline,
    },
  },
});
