import { iconFontStyle } from "./IconFont.css";

export const IconFont = ({
  Icon,
  alt,
}: {
  Icon: React.ElementType;
  alt?: string;
}) => (
  <span
    className={iconFontStyle}
    aria-label={alt}
    role="img"
    aria-hidden={!alt}
  >
    <Icon />
  </span>
);
