import { style, styleVariants } from "@vanilla-extract/css";
import {
  visuallyHiddenStyleRule,
  visuallyHiddenStyle,
} from "./VisuallyHidden.css";
import { queries } from "../../styles";

export const textWithIconStyle = style({
  display: "inline-flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "start",
  gap: "0.15em",
});

export const visuallyHidableTextStyle = styleVariants({
  never: {},
  always: [visuallyHiddenStyle],
  small: {
    "@media": {
      [queries.small]: visuallyHiddenStyleRule,
    },
  },
  medium: {
    "@media": {
      [queries.medium]: visuallyHiddenStyleRule,
    },
  },
});
