import { IconFont } from ".";
import {
  textWithIconStyle,
  visuallyHidableTextStyle,
} from "./TextWithIcon.css";

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
    <span className={visuallyHidableTextStyle[hideText]}>{children}</span>
  </span>
);
