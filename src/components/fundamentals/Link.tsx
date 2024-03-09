import { linkStyle } from "./Link.css";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a className={linkStyle} href={href}>
    {children}
  </a>
);
