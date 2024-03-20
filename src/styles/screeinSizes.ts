import {
  Size0256,
  Size0320,
  Size0480,
  Size0768,
  Size0960,
  size1280,
  size1440,
  size1920,
} from "./sizes";

export const screenWidths = {
  /**
   * 320px - 480px スマートフォン縦持ち想定
   */
  small: { min: Size0320, max: Size0480 },
  /**
   * 480px - 768px スマートフォン横持ち、タブレット縦持ち想定
   */
  medium: { min: Size0480, max: Size0768 },
  /**
   * 768px - 1440px タブレット横持ち、小型〜中型デスクトップ想定
   */
  large: { min: Size0768, max: size1440 },
  /**
   * 1440px - 1920px 大型デスクトップ想定
   */
  xLarge: { min: size1440, max: size1920 },
} as const;

export const screenHeights = {
  /**
   * 256px - 480px スマートフォン横持ち想定
   */
  small: { min: Size0256, max: Size0480 },
  /**
   * 480px - 768px タブレット横持ち、小型デスクトップ想定
   */
  medium: { min: Size0480, max: Size0768 },
  /**
   * 768px - 960px 中型デスクトップ想定
   */
  large: { min: Size0768, max: Size0960 },
  /**
   * 960px - 1280px 大型デスクトップ想定
   */
  xLarge: { min: Size0960, max: size1280 },
} as const;
