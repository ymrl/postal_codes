import { Cell } from "./Cell";
import { headerContentStyle } from "./Header.css";
import { Row } from "./Row";
export const Header = () => {
  return (
    <Row rowIndex={1} header>
      <Cell type="postalCode" header colindex={1}>
        <div className={headerContentStyle}>郵便番号</div>
      </Cell>
      <Cell type="prefecture" header colindex={2}>
        <div className={headerContentStyle}>都道府県名</div>
      </Cell>
      <Cell type="city" header colindex={3}>
        <div className={headerContentStyle}>市区町村名</div>
      </Cell>
      <Cell type="townHeader" header colindex={4}>
        <div className={headerContentStyle}>町域名</div>
      </Cell>
      <Cell type="othersHeader" header colindex={5}>
        <div className={headerContentStyle}>その他の情報</div>
      </Cell>
    </Row>
  );
};
