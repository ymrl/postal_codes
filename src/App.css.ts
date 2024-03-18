import {
  assignVars,
  globalStyle,
  createGlobalTheme,
  createThemeContract,
} from "@vanilla-extract/css";
import { lightColors, darkColors, colorVars } from "./styles";

const mediumBreakpoint = "48rem";
const smallBreakpoint = "30rem";
export const themeVars = createGlobalTheme(":root", {
  spacing: {
    xSmall: "0.125rem",
    small: "0.25rem",
    normal: "0.5rem",
    large: "1rem",
    xLarge: "2rem",
  },
  font: {
    xxSmallSize: "0.625rem",
    xSmallSize: "0.75rem",
    smallSize: "0.875rem",
    normalSize: "1rem",
    largeSize: "1.25rem",
    xLargeSize: "1.5rem",
    normalWeight: "400",
    strongWeight: "700",
    lineHeight: "1.5",
  },
  borderRadius: {
    small: "0.25rem",
    normal: "0.5rem",
    large: "1rem",
  },
  controls: {
    small: "1.5rem",
    normal: "2rem",
  },
  transition: {
    duration: "0.3s",
  },
  breakpoint: {
    small: smallBreakpoint,
    medium: mediumBreakpoint,
  },
});

export const largeSemanticVars = {
  font: {
    title: themeVars.font.xLargeSize,
    subTitle: themeVars.font.largeSize,
    normal: themeVars.font.normalSize,
    data: themeVars.font.normalSize,
    dataHeading: themeVars.font.smallSize,
    aside: themeVars.font.smallSize,
    button: themeVars.font.smallSize,
    input: themeVars.font.normalSize,
  },
  border: {
    distinguish: `1px solid ${colorVars.ui.distinguish}`,
    decoration: `1px solid ${colorVars.ui.decoration}`,
  },
  focus: {
    outline: `0.125rem solid ${colorVars.accent.primaryTranslucent}`,
    outlineWidth: "0.125rem",
  },
  spacing: {
    containerPadding: themeVars.spacing.large,
    containerInner: themeVars.spacing.normal,
    areaPadding: themeVars.spacing.normal,
    areaInner: themeVars.spacing.large,
    inlinePadding: themeVars.spacing.small,
    inlineInner: themeVars.spacing.normal,
  },
  borderRadius: {
    dialog: themeVars.borderRadius.normal,
    control: themeVars.borderRadius.normal,
  },
  ui: {
    control: "2rem",
    check: "1.5rem",
  },
};
export const mediumSemanticVars: typeof largeSemanticVars = {
  ...largeSemanticVars,
  font: {
    ...largeSemanticVars.font,
    title: themeVars.font.normalSize,
    data: themeVars.font.smallSize,
    dataHeading: themeVars.font.xxSmallSize,
  },
  spacing: {
    ...largeSemanticVars.spacing,
    areaPadding: themeVars.spacing.small,
    areaInner: themeVars.spacing.small,
    inlinePadding: themeVars.spacing.xSmall,
    inlineInner: themeVars.spacing.small,
  },
  ui: {
    ...largeSemanticVars.ui,
    control: "2.25rem",
  },
};

export const smallSemanticVars: typeof largeSemanticVars = {
  ...largeSemanticVars,
  font: {
    ...largeSemanticVars.font,
    title: themeVars.font.normalSize,
    subTitle: themeVars.font.normalSize,
    data: themeVars.font.smallSize,
    dataHeading: themeVars.font.xxSmallSize,
    aside: themeVars.font.xSmallSize,
    button: themeVars.font.largeSize,
  },
  spacing: {
    ...largeSemanticVars.spacing,
    containerPadding: themeVars.spacing.normal,
    containerInner: themeVars.spacing.small,
    areaPadding: themeVars.spacing.small,
    areaInner: themeVars.spacing.small,
    inlinePadding: themeVars.spacing.xSmall,
    inlineInner: themeVars.spacing.small,
  },
  ui: {
    ...largeSemanticVars.ui,
    control: "2.75rem",
  },
};

export const semanticVars = createThemeContract(largeSemanticVars);

export const mediaQueries = {
  medium: `screen and (max-width: ${mediumBreakpoint})`,
  small: `screen and (max-width: ${smallBreakpoint})`,
  dark: "(prefers-color-scheme: dark)",
};

globalStyle("body", {
  margin: 0,
  padding: 0,
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.5,
  fontWeight: 400,
  colorScheme: "light dark",
  vars: assignVars(semanticVars, largeSemanticVars),
  overflow: "hidden",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle(":root", {
  vars: assignVars(colorVars, lightColors),
  "@media": {
    [mediaQueries.dark]: {
      vars: assignVars(colorVars, darkColors),
    },
  },
});
