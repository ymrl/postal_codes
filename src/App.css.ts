import { assignVars, globalStyle } from "@vanilla-extract/css";
import {
  lightColors,
  darkColors,
  colorVars,
  queries,
  semanticTokens,
  semanticTokensLarge,
} from "./styles";

globalStyle("body", {
  margin: 0,
  padding: 0,
  backgroundColor: colorVars.background.primary,
  color: colorVars.text.primary,
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.5,
  fontWeight: 400,
  colorScheme: "light dark",
  vars: assignVars(semanticTokens, semanticTokensLarge),
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle(":root", {
  vars: assignVars(colorVars, lightColors),
  "@media": {
    [queries.dark]: {
      vars: assignVars(colorVars, darkColors),
    },
  },
});
