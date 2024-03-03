import { Cell } from "./Cell";
import { Town } from "./Town";
import { Row } from "./Row";
import { Others } from "./Others";

export const BodyRow = ({
  row,
  rowIndex,
  showRuby,
}: {
  row: string[];
  rowIndex: number;
  showRuby: boolean;
}) => (
  <Row 
  rowIndex={rowIndex}>
    {/*
      0: 全国地方公共団体コード（JIS X0401、X0402）………　半角数字
      1: （旧）郵便番号（5桁）………………………………………　半角数字
      2: 郵便番号（7桁）………………………………………　半角数字
      3: 都道府県名　…………　全角カタカナ（コード順に掲載）　（※1）
      4: 市区町村名　…………　全角カタカナ（コード順に掲載）　（※1）
      5: 町域名　………………　全角カタカナ（五十音順に掲載）　（※1）
      6: 都道府県名　…………　漢字（コード順に掲載）　（※1,2）
      7: 市区町村名　…………　漢字（コード順に掲載）　（※1,2）
      8: 町域名　………………　漢字（五十音順に掲載）　（※1,2）
      9: 一町域が二以上の郵便番号で表される場合の表示　（※3）　（「1」は該当、「0」は該当せず）
      10: 小字毎に番地が起番されている町域の表示　（※4）　（「1」は該当、「0」は該当せず）
      11: 丁目を有する町域の場合の表示　（「1」は該当、「0」は該当せず）
      12: 一つの郵便番号で二以上の町域を表す場合の表示　（※5）　（「1」は該当、「0」は該当せず）
      13: 更新の表示（※6）（「0」は変更なし、「1」は変更あり、「2」廃止（廃止データのみ使用））
      14: 変更理由　（「0」は変更なし、「1」市政・区政・町政・分区・政令指定都市施行、「2」住居表示の実施、「3」区画整理、「4」郵便区調整等、「5」訂正、「6」廃止（廃止データのみ使用））
    */}
    {/* 郵便番号（7桁） */}
    <Cell type="postalCode" colindex={1}>
      {row[2].slice(0, 3)}-{row[2].slice(3)}
    </Cell>
    {/* 都道府県名 */}
    <Cell type="prefecture" colindex={2}>
      {showRuby ? (
        <ruby>
          {row[6]}
          <rp>(</rp>
          <rt>{row[3]}</rt>
          <rp>)</rp>
        </ruby>
      ) : (
        row[6]
      )}
    </Cell>
    {/* 市区町村名 */}
    <Cell type="city" colindex={3}>
      {showRuby ? (
        <ruby>
          {row[7]}
          <rp>(</rp>
          <rt>{row[4]}</rt>
          <rp>)</rp>
        </ruby>
      ) : (
        row[7]
      )}
    </Cell>
    {/* 町域名 */}
    <Cell type="town" colindex={4}>
      <Town kanji={row[8]} kana={row[5]} showRuby={showRuby} />
    </Cell>

    <Cell type="others" colindex={5}>
      <Others
        list={[
          /* 一町域が二以上の郵便番号で表される場合の表示 */
          row[9] === "1" && "町域の一部",
          /* 小字毎に番地が起番されている町域の表示 */
          row[10] === "1" && "小字",
          /* 丁目を有する町域の場合の表示 */
          row[11] === "1" && "丁目",
          /* 一つの郵便番号で二以上の町域を表す場合の表示 */
          row[12] === "1" && "複数の町域",
        ]}
      />
    </Cell>
  </Row>
);
