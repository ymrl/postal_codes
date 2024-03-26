import { style, styleVariants } from "@vanilla-extract/css";
import { colorVars, queries, semanticTokens } from "../styles";

export const helpAndSettingsStyle = style({
  position: "relative",
});
export const menuButtonStyle = style({
  display: "none",
  "@media": {
    [queries.small]: {
      display: "block",
    },
  },
});
export const closeButtonStyle = style([menuButtonStyle]);

const menuStyleBase = style({
  display: "block",
  "@media": {
    [queries.small]: {
      display: "none",
      translate: `calc(100%) 0`,
      transitionDuration: semanticTokens.transition.duration,
      padding: semanticTokens.spacing.blockPadding,
      transitionProperty: "translate, opacity",
      position: "absolute",
      top: `calc(-1 * ${semanticTokens.spacing.blockPadding})`,
      right: `calc(-1 * ${semanticTokens.spacing.blockPadding})`,
      width: `calc(100vw - ${semanticTokens.ui.control.size} - ${semanticTokens.spacing.blockPadding} * 2)`,
      borderLeft: semanticTokens.border.accent,
      background: colorVars.background.primary,
    },
  },
});
const visible = {
  display: "block",
  opacity: 1,
  translate: "0 0",
};
const hidden = {
  display: "block",
  opacity: 0,
  translate: `calc(100%) 0`,
};
export const menuStyle = styleVariants({
  open: [
    menuStyleBase,
    {
      "@media": {
        [queries.small]: visible,
      },
    },
  ],
  openIn: [
    menuStyleBase,
    {
      "@media": {
        [queries.small]: hidden,
      },
    },
  ],
  openOut: [
    menuStyleBase,
    {
      "@media": {
        [queries.small]: visible,
      },
    },
  ],
  closedIn: [
    menuStyleBase,
    {
      "@media": {
        [queries.small]: visible,
      },
    },
  ],
  closedOut: [
    menuStyleBase,
    {
      "@media": {
        [queries.small]: hidden,
      },
    },
  ],
  closed: [menuStyleBase],
});
