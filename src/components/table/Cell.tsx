import { cellStyle } from "./Cell.css";

type Variant = keyof typeof cellStyle;
export const Cell = ({
  children,
  type = "default",
  header = false,
  colindex,
}: {
  children: React.ReactNode;
  type?: Variant;
  header?: boolean;
  colindex?: number;
}) => {
  return (
    <div
      className={cellStyle[type]}
      role={header ? "columnheader" : "cell"}
      aria-colindex={colindex}
    >
      {children}
    </div>
  );
};
