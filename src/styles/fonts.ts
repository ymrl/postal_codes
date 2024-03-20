export const LineHeight15 = "1.5";
export const WeightNormal = "400";
export const WeightBold = "700";
export const FontFamily = "system-ui, sans-serif";

export const normalFont = (size: string) =>
  [WeightNormal, `${size}/${LineHeight15}`, FontFamily].join(" ");
export const strongFont = (size: string) =>
  [WeightBold, `${size}/${LineHeight15}`, FontFamily].join(" ");
