import { style, styleVariants } from "@vanilla-extract/css";
import { mediaQueries } from "../../App.css";
import {
  visuallyHiddenStyleRule,
  visuallyHiddenStyle,
} from "./VisuallyHidden.css";

export const textWithIconStyle = style({
  display: "inline-flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "start",
  gap: "0.15em",
});

export const mobileVisuallyHiddenStyle = style({
  "@media": {
    [mediaQueries.small]: visuallyHiddenStyleRule,
  },
});

export const visuallyHidableTextStyle = styleVariants({
  never: {},
  always: [visuallyHiddenStyle],
  small: {
    "@media": {
      [mediaQueries.small]: visuallyHiddenStyleRule,
    },
  },
  medium: {
    "@media": {
      [mediaQueries.medium]: visuallyHiddenStyleRule,
    },
  },
});
