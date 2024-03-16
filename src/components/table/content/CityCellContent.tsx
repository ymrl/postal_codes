import { RubyText } from "./RubyText";
import { cityCellContentStyle } from "./index.css";

export const CityCellContent = ({
  kana,
  kanji,
}: {
  kana: string;
  kanji: string;
}) => (
  <span className={cityCellContentStyle}>
    <RubyText kana={kana} kanji={kanji} />
  </span>
);
