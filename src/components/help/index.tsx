import { SlQuestion } from "react-icons/sl";
import {
  Button,
  Dialog,
  Link,
  Paragraph,
  Stack,
  TextWithIcon,
} from "../fundamentals";
import React from "react";
import { KenAllContext } from "../../contexts";
import {
  helpDDStyle,
  helpDLStyle,
  helpDTStyle,
  helpKbdStyle,
  helpSectionTitleStyle,
} from "./index.css";

const K = ({ children }: { children: React.ReactNode }) => (
  <kbd className={helpKbdStyle}>{children}</kbd>
);

export const Help = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { downloadedAt } = React.useContext(KenAllContext);

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <TextWithIcon hideText="medium" Icon={SlQuestion}>
          ヘルプ
        </TextWithIcon>
      </Button>
      <Dialog
        dialogTitle="ヘルプ"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <Stack size="block" direction="column">
          <Paragraph>
            このページは
            {downloadedAt
              ? `${downloadedAt.getFullYear()}年${downloadedAt.getMonth() + 1}月${downloadedAt.getDate()}日にダウンロードした、`
              : ""}
            日本郵便株式会社の
            <Link href="https://www.post.japanpost.jp/zipcode/dl/utf-zip.html">
              住所の郵便番号（1レコード1行、UTF-8形式）（CSV形式）
            </Link>
            を元にしています。
          </Paragraph>
          <Paragraph>
            当ページ製作者は、ページの利用やデータの正確性に関して一切の責任を負いかねます。
          </Paragraph>
          <h2 className={helpSectionTitleStyle}>キーボードショートカット</h2>
          <Paragraph>
            以下のキーボードショートカットが利用できます。キーボードショートカットは設定でオフにすることができます。
          </Paragraph>
          <dl className={helpDLStyle}>
            <dt className={helpDTStyle}>検索フィールドにフォーカス</dt>
            <dd className={helpDDStyle}>
              <K>Ctrl</K>+<K>F</K>
            </dd>
            <dd className={helpDDStyle}>
              <K>Command</K>+<K>F</K>
            </dd>
            <dt className={helpDTStyle}>テーブル内で、セルを1つずつ移動</dt>
            <dd className={helpDDStyle}>
              <K>↑</K>, <K>↓</K>, <K>←</K>, <K>→</K>
            </dd>
            <dd className={helpDDStyle}>
              <K>K</K>, <K>J</K>, <K>H</K>, <K>L</K>
            </dd>
            <dt className={helpDTStyle}>
              テーブル内で、行の先頭・末尾のセルに移動
            </dt>
            <dd className={helpDDStyle}>
              <K>Ctrl</K>+<K>←</K>, <K>→</K>
            </dd>
            <dd className={helpDDStyle}>
              <K>Command</K>+<K>←</K>, <K>→</K>
            </dd>
            <dd className={helpDDStyle}>
              <K>^</K>, <K>$</K>
            </dd>
            <dt className={helpDTStyle}>
              テーブル内で、テーブルの一番上・一番下に移動
            </dt>
            <dd className={helpDDStyle}>
              <K>Ctrl</K>+<K>↑</K>, <K>↓</K>
            </dd>
            <dd className={helpDDStyle}>
              <K>Command</K>+<K>↑</K>, <K>↓</K>
            </dd>
            <dd className={helpDDStyle}>
              <K>gg</K>（<K>g</K>を2回押す）, <K>Shift</K>+<K>G</K>
            </dd>
          </dl>
        </Stack>
      </Dialog>
    </>
  );
};
