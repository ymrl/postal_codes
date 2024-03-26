import {
  Size0001,
  Size0002,
  Size0004,
  Size0008,
  Size0010,
  Size0012,
  Size0014,
  Size0016,
  Size0020,
  Size0024,
  Size0032,
  Size0036,
  Size0044,
} from "./sizes";
import { colorVars } from "./colors.css";
import {
  LineHeight15,
  WeightBold,
  WeightNormal,
  normalFont,
  strongFont,
} from "./fonts";
import { createThemeContract } from "@vanilla-extract/css";

type SemanticTokens = {
  readonly font: {
    readonly title: string;
    readonly subTitle: string;
    readonly normal: string;
    readonly caption: string;
    readonly size: {
      readonly title: string;
      readonly subTitle: string;
      readonly normal: string;
      readonly caption: string;
    };
    readonly weight: {
      readonly normal: string;
      readonly strong: string;
    };
    readonly lineHeight: string;
    readonly color: {
      readonly primary: string;
      readonly secondary: string;
      readonly dangerous: string;
    };
  };
  readonly ui: {
    readonly table: {
      readonly font: {
        readonly colHeader: string;
        readonly body: string;
        readonly aside: string;
        readonly rowHeader: string;
      };
    };
    readonly control: {
      readonly size: string;
      readonly padding: string;
      readonly borderRadius: string;
    };
    readonly check: {
      readonly size: string;
      readonly borderRadius: string;
    };
    readonly dialog: {
      readonly borderRadius: string;
    };
    readonly popup: {
      readonly borderRadius: string;
    };
    readonly legend: {
      readonly font: string;
    };
    readonly badge: {
      readonly font: string;
      readonly size: string;
      readonly background: string;
      readonly color: string;
      readonly padding: string;
    };
    readonly input: {
      readonly font: string;
    };
    readonly button: {
      readonly font: string;
    };
    readonly link: {
      readonly borderRadius: string;
      readonly color: {
        readonly link: string;
        readonly visited: string;
      };
      readonly hover: {
        readonly link: string;
        readonly visited: string;
      };
    };
  };
  readonly border: {
    readonly distinguish: string;
    readonly decoration: string;
    readonly accent: string;
  };
  readonly spacing: {
    readonly containerPadding: string;
    readonly containerInner: string;
    readonly blockPadding: string;
    readonly blockInner: string;
    readonly inlinePadding: string;
    readonly inlineInner: string;
  };
  readonly transition: {
    readonly duration: string;
  };
  readonly focus: {
    readonly outline: string;
    readonly outlineWidth: string;
  };
};

export const semanticTokensLarge: SemanticTokens = {
  font: {
    title: strongFont(Size0020),
    subTitle: strongFont(Size0020),
    normal: normalFont(Size0016),
    caption: normalFont(Size0012),
    lineHeight: LineHeight15,
    size: {
      title: Size0024,
      subTitle: Size0016,
      normal: Size0016,
      caption: Size0012,
    },
    weight: {
      normal: WeightNormal,
      strong: WeightBold,
    },
    color: {
      primary: colorVars.text.primary,
      secondary: colorVars.text.secondary,
      dangerous: colorVars.text.dangerous,
    },
  },
  ui: {
    table: {
      font: {
        colHeader: normalFont(Size0012),
        body: normalFont(Size0016),
        aside: normalFont(Size0012),
        rowHeader: strongFont(Size0016),
      },
    },
    control: {
      size: Size0032,
      padding: `${Size0004} ${Size0008}`,
      borderRadius: Size0008,
    },
    check: {
      size: Size0024,
      borderRadius: Size0004,
    },
    dialog: {
      borderRadius: Size0008,
    },
    popup: {
      borderRadius: Size0008,
    },
    legend: {
      font: strongFont(Size0016),
    },
    badge: {
      font: strongFont(Size0012),
      size: Size0020,
      background: colorVars.accent.primary,
      color: colorVars.accent.textOnPrimary,
      padding: Size0002,
    },
    button: {
      font: normalFont(Size0014),
    },
    input: {
      font: normalFont(Size0016),
    },
    link: {
      borderRadius: Size0004,
      color: {
        link: colorVars.text.link,
        visited: colorVars.text.linkVisited,
      },
      hover: {
        link: colorVars.text.linkHover,
        visited: colorVars.text.linkVisitedHover,
      },
    },
  },
  border: {
    distinguish: `${Size0001} solid ${colorVars.ui.distinguish}`,
    decoration: `${Size0001} solid ${colorVars.ui.decoration}`,
    accent: `${Size0002} solid ${colorVars.accent.primary}`,
  },
  spacing: {
    containerPadding: Size0012,
    containerInner: Size0012,
    blockPadding: Size0008,
    blockInner: Size0016,
    inlinePadding: Size0002,
    inlineInner: Size0008,
  },
  transition: {
    duration: "0.3s",
  },
  focus: {
    outline: `${Size0002} solid ${colorVars.accent.primaryTranslucent}`,
    outlineWidth: Size0002,
  },
};

export const semanticTokensMedium: SemanticTokens = {
  ...semanticTokensLarge,
  font: {
    ...semanticTokensLarge.font,
    title: strongFont(Size0016),
    size: {
      ...semanticTokensLarge.font.size,
      title: Size0016,
    },
  },
  spacing: {
    ...semanticTokensLarge.spacing,
    blockPadding: Size0004,
    blockInner: Size0008,
    inlinePadding: Size0002,
    inlineInner: Size0004,
  },
  ui: {
    ...semanticTokensLarge.ui,
    table: {
      ...semanticTokensLarge.ui.table,
      font: {
        ...semanticTokensLarge.ui.table.font,
        colHeader: normalFont(Size0010),
        body: normalFont(Size0014),
        rowHeader: strongFont(Size0014),
        aside: normalFont(Size0010),
      },
    },
    control: {
      ...semanticTokensLarge.ui.control,
      size: Size0036,
    },
  },
};
export const semanticTokensSmall: SemanticTokens = {
  ...semanticTokensLarge,
  font: {
    ...semanticTokensLarge.font,
    title: strongFont(Size0016),
    subTitle: strongFont(Size0016),
    size: {
      ...semanticTokensLarge.font.size,
      title: Size0016,
      subTitle: Size0016,
    },
  },
  spacing: {
    ...semanticTokensLarge.spacing,
    containerPadding: Size0008,
    containerInner: Size0008,
    blockPadding: Size0004,
    blockInner: Size0008,
    inlinePadding: Size0002,
    inlineInner: Size0004,
  },
  ui: {
    ...semanticTokensLarge.ui,
    table: {
      ...semanticTokensLarge.ui.table,
      font: {
        ...semanticTokensLarge.ui.table.font,
        colHeader: normalFont(Size0010),
        body: normalFont(Size0012),
        aside: normalFont(Size0010),
        rowHeader: strongFont(Size0012),
      },
    },
    control: {
      ...semanticTokensLarge.ui.control,
      size: Size0044,
    },
    button: {
      ...semanticTokensLarge.ui.button,
      font: normalFont(Size0020),
    },
  },
};

export const semanticTokens = createThemeContract(semanticTokensLarge);
