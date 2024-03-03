import {
  assignVars,
  globalStyle,
  createGlobalTheme,
  createThemeContract,
} from "@vanilla-extract/css";

export const colorVars = createThemeContract({
  background: {
    primary: null,
    secondary: null,
    primaryHover: null,
    secondaryHover: null,
  },
  text: {
    primary: null,
    secondary: null,
  },
  accent: {
    primary: null,
    textOnPrimary: null,
  },
  ui: {
    distinguish: null,
    decoration: null,
  },
});

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
  },
  accent: {
    primary: "#cc0000",
    textOnPrimary: "#fff",
  },
  ui: {
    distinguish: "#949494",
    decoration: "#d2d2d2",
  },
};

export const darkColors = {
  background: {
    primary: "#1a1a1a",
    secondary: "#2f2f2f",
    primaryHover: "#2a2a2a",
    secondaryHover: "#3f3f3f",
  },
  text: {
    primary: "#f0f0f0",
    secondary: "#828282",
  },
  accent: {
    primary: "#cc0000",
    textOnPrimary: "#fff",
  },
  ui: {
    distinguish: "#6b6b6b",
    decoration: "#404040",
  },
};

export const themeVars = createGlobalTheme(":root", {
  spacing: {
    xSmall: "0.125rem",
    small: "0.25rem",
    normal: "0.5rem",
    large: "1rem",
    xLarge: "2rem",
  },
  font: {
    xSmallSize: "0.625rem",
    smallSize: "0.75rem",
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
  border: {
    distinguish: `1px solid ${colorVars.ui.distinguish}`,
    decoration: `1px solid ${colorVars.ui.decoration}`,
  },
  controls: {
    small: "1.5rem",
    normal: "2rem",
  },
  transition: {
    duration: "0.3s",
  },
  breakpoint: {
    mobile: "48rem",
  },
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.5,
  fontWeight: 400,
  colorScheme: "light dark",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle(":root", {
  vars: assignVars(colorVars, lightColors),
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(colorVars, darkColors),
    },
  },
});
