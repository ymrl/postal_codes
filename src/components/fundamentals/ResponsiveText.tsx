import { responsiveTextStyle } from "./ResponsiveText.css";

export const ResponsiveText = ({
  hideText = "never",
  children,
}: {
  hideText?: "small" | "medium" | "always" | "never";
  children: React.ReactNode;
}) => <span className={responsiveTextStyle[hideText]}>{children}</span>;
