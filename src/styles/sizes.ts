export const Size0001 = "0.0625rem";
export const Size0002 = "0.125rem";
export const Size0004 = "0.25rem";
export const Size0008 = "0.5rem";
export const Size0010 = "0.625rem";
export const Size0012 = "0.75rem";
export const Size0014 = "0.875rem";
export const Size0016 = "1rem";
export const Size0020 = "1.25rem";
export const Size0024 = "1.5rem";
export const Size0032 = "2rem";
export const Size0036 = "2.25rem";
export const Size0040 = "2.5rem";
export const Size0044 = "2.75rem";
export const Size0048 = "3rem";
export const Size0256 = "16rem";
export const Size0320 = "20rem";
export const Size0480 = "30rem";
export const Size0768 = "48rem";
export const Size0960 = "60rem";
export const size1280 = "80rem";
export const size1440 = "90rem";
export const size1920 = "120rem";

export const sizeRemToPx = (size: string): number => {
  return (
    parseFloat(size) *
    (parseInt(window.getComputedStyle(document.documentElement).fontSize) || 16)
  );
};
