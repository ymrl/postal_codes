import { style } from "@vanilla-extract/css";
import { colorVars } from "../../styles";

export const linkStyle = style({
  selectors: {
    "&:link": {
      color: colorVars.text.link,
    },
    "&:link:hover": {
      color: colorVars.text.linkHover,
    },
    "&:visited": {
      color: colorVars.text.linkVisited,
    },
    "&:visited:hover": {
      color: colorVars.text.linkVisitedHover,
    },
  },
});
