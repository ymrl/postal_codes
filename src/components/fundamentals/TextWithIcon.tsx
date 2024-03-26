import { IconFont, ResponsiveText } from ".";
import { textWithIconStyle } from "./TextWithIcon.css";

export const TextWithIcon = ({
  Icon,
  children,
  hideText = "never",
}: {
  Icon: React.ElementType;
  children: React.ReactNode;
  hideText?: "small" | "medium" | "always" | "never";
}) => (
  <span className={textWithIconStyle}>
    <IconFont Icon={Icon} />
    <ResponsiveText hideText={hideText}>{children}</ResponsiveText>
  </span>
);
