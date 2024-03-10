import {
  assignVars,
  globalStyle,
  createGlobalTheme,
  createThemeContract,
} from "@vanilla-extract/css";

export const lightColors = {
  background: {
    primary: "#fff",
    secondary: "#f0f0f0",
    primaryHover: "#f5f5f5",
    secondaryHover: "#e0e0e0",
  },
  text: {
    primary: "#333",
    secondary: "#707070",
    dangerous: "#C7371C",
    link: "#0000CC",
    linkHover: "#0000BF",
    linkVisited: "#6600CC",
    linkVisitedHover: "#5F00BF",
  },
  accent: {
    primary: "#cc0000",
    textOnPrimary: "#fff",
    primaryTranslucent: "rgba(204, 0, 0, 0.65)",
  },
  ui: {
    distinguish: "#949494",
    decoration: "#d2d2d2",
  },
};

export const darkColors: typeof lightColors = {
  ...lightColors,
  background: {
    ...lightColors.background,
    primary: "#1a1a1a",
    secondary: "#2f2f2f",
    primaryHover: "#2a2a2a",
    secondaryHover: "#3f3f3f",
  },
  text: {
    ...lightColors.text,
    primary: "#f0f0f0",
    secondary: "#828282",
    dangerous: "#F0715A",
    link: "#9191F2",
    linkHover: "#9999FF",
    linkVisited: "#C191F2",
    linkVisitedHover: "#CB98FF",
  },
  accent: {
    ...lightColors.accent,
    primary: "#E67375",
    textOnPrimary: "#2E2E2E",
    primaryTranslucent: "rgba(230, 115, 117, 0.9)",
  },
  ui: {
    ...lightColors.ui,
    distinguish: "#6b6b6b",
    decoration: "#404040",
  },
};
export const colorVars = createThemeContract(lightColors);

const smallBreakpoint = "40rem";
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
  },
});

export const largeSemanticVars = {
  font: {
    title: themeVars.font.xLargeSize,
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
    outline: `2px solid ${colorVars.accent.primaryTranslucent}`,
  },
  spacing: {
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
  },
};
export const smallSemanticVars: typeof largeSemanticVars = {
  ...largeSemanticVars,
  font: {
    ...largeSemanticVars.font,
    title: themeVars.font.normalSize,
    data: themeVars.font.smallSize,
    dataHeading: themeVars.font.xxSmallSize,
    aside: themeVars.font.xSmallSize,
    button: themeVars.font.largeSize,
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
    control: "2.75rem",
  },
};
export const semanticVars = createThemeContract(largeSemanticVars);

export const mediaQueries = {
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
  "@media": {
    [mediaQueries.small]: {
      vars: assignVars(semanticVars, largeSemanticVars),
    },
  },
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
