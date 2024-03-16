import { numberCellContentStyle } from "./index.css";

export const NumberCellContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <span className={numberCellContentStyle}>{children}</span>;
};
