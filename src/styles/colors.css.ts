import { createThemeContract } from "@vanilla-extract/css";

type ColorScheme = {
  readonly background: {
    readonly primary: string;
    readonly secondary: string;
    readonly primaryHover: string;
    readonly secondaryHover: string;
  };
  readonly text: {
    readonly primary: string;
    readonly secondary: string;
    readonly dangerous: string;
    readonly link: string;
    readonly linkHover: string;
    readonly linkVisited: string;
    readonly linkVisitedHover: string;
  };
  readonly accent: {
    readonly primary: string;
    readonly textOnPrimary: string;
    readonly primaryTranslucent: string;
  };
  readonly ui: {
    readonly distinguish: string;
    readonly decoration: string;
    readonly backdrop: string;
  };
};

export const lightColors: ColorScheme = {
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
    backdrop: "rgba(0, 0, 0, 0.4)",
  },
};

export const darkColors: ColorScheme = {
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
