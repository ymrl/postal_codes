import { visuallyHiddenStyle } from "./VisuallyHidden.css";

export const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span className={visuallyHiddenStyle}>{children}</span>
);
