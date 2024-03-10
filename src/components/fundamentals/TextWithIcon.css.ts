import { style } from "@vanilla-extract/css";
import { mediaQueries } from "../../App.css";
import { visuallyHiddenStyleRule } from "./VisuallyHidden.css";

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
