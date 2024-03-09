import { IconFont } from ".";
import {
  mobileVisuallyHiddenStyle,
  textWithIconStyle,
} from "./TextWithIcon.css";

export const TextWithIcon = ({
  Icon,
  children,
  iconOnlyOnMobile = false,
}: {
  Icon: React.ElementType;
  children: React.ReactNode;
  iconOnlyOnMobile?: boolean;
}) => (
  <span className={textWithIconStyle}>
    <IconFont Icon={Icon} />
    <span className={iconOnlyOnMobile ? mobileVisuallyHiddenStyle : undefined}>
      {children}
    </span>
  </span>
);
