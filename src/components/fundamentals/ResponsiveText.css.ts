import { styleVariants } from "@vanilla-extract/css";
import {
  visuallyHiddenStyle,
  visuallyHiddenStyleRule,
} from "./VisuallyHidden.css";
import { queries } from "../../styles";

const baseTextStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export const responsiveTextStyle = styleVariants({
  never: [baseTextStyle],
  always: [visuallyHiddenStyle],
  small: [
    baseTextStyle,
    {
      "@media": {
        [queries.small]: visuallyHiddenStyleRule,
      },
    },
  ],
  medium: [
    baseTextStyle,
    {
      "@media": {
        [queries.medium]: visuallyHiddenStyleRule,
      },
    },
  ],
});
