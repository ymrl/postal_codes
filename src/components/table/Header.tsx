import { Row, Cell, HeaderRowGroup } from "./layout";
import { headerContentStyle } from "./Header.css";
import { Column } from "./types";
export const Header = ({ columns }: { columns: Column[] }) => {
  return (
    <HeaderRowGroup>
      <Row rowIndex={1} type="header">
        {columns.map((column, i) => (
          <Cell
            columnType={column.type}
            colIndex={i + 1}
            header
            key={column.id}
          >
            <div className={headerContentStyle[column.type]}>
              {column.label}
            </div>
          </Cell>
        ))}
      </Row>
    </HeaderRowGroup>
  );
};
