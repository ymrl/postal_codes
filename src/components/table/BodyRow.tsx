import { Cell, Row } from "./layout";
import { Others } from "./Others";
import {
  CityCellContent,
  NumberCellContent,
  PrefCellContent,
  TownCellContent,
} from "./content";
import { Column } from "./types";

export const BodyRow = ({
  row,
  rowIndex,
  columns,
  id,
}: {
  row: string[];
  rowIndex: number;
  columns: Column[];
  id: string;
}) => {
  const rowHeaderId = `${id}__${row[2]}`;
  return (
    <Row rowIndex={rowIndex} type="body" id={id}>
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
      <Cell
        columnType="number"
        colIndex={1}
        column={columns?.[0]}
        id={rowHeaderId}
      >
        <NumberCellContent>
          {row[2].slice(0, 3)}-{row[2].slice(3)}
        </NumberCellContent>
      </Cell>
      {/* 都道府県名 */}
      <Cell
        columnType="pref"
        colIndex={2}
        column={columns?.[1]}
        rowHeaderId={rowHeaderId}
      >
        <PrefCellContent kanji={row[6]} kana={row[3]} />
      </Cell>
      {/* 市区町村名 */}
      <Cell
        columnType="city"
        colIndex={3}
        column={columns?.[2]}
        rowHeaderId={rowHeaderId}
      >
        <CityCellContent kanji={row[7]} kana={row[4]} />
      </Cell>
      {/* 町域名 */}
      <Cell
        columnType="town"
        colIndex={4}
        column={columns?.[3]}
        rowHeaderId={rowHeaderId}
      >
        <TownCellContent kanji={row[8]} kana={row[5]} />
      </Cell>
      <Cell
        columnType="others"
        colIndex={5}
        column={columns?.[4]}
        rowHeaderId={rowHeaderId}
      >
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
};
