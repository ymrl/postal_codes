import { RubyText } from "./RubyText";
import { townCellContentStyle } from "./index.css";

export const TownCellContent = ({
  kana,
  kanji,
}: {
  kana: string;
  kanji: string;
}) => (
  <span className={townCellContentStyle}>
    <RubyText kana={kana} kanji={kanji} />
  </span>
);
