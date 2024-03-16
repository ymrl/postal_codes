import { RubyText } from "./RubyText";
import { prefCellContentStyle } from "./index.css";

export const PrefCellContent = ({
  kana,
  kanji,
}: {
  kana: string;
  kanji: string;
}) => (
  <span className={prefCellContentStyle}>
    <RubyText kana={kana} kanji={kanji} />
  </span>
);
