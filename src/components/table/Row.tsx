import { rowStyle } from "./Row.css";

export const Row = ({
  children,
  rowIndex,
  header,
}: {
  children: React.ReactNode;
  rowIndex?: number;
  header?: boolean;
}) => (
  <div
    className={rowStyle[header ? "header" : "body"]}
    role="row"
    aria-rowindex={rowIndex}
  >
    {children}
  </div>
);
