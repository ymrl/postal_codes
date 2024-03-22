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
import { helpSectionTitleStyle, helpULStyle } from "./index.css";

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
          <ul className={helpULStyle}>
            <li>
              <kbd>Ctrl</kbd>/<kbd>Command</kbd> + <kbd>F</kbd>
              ：検索フィールドにフォーカス
            </li>
            <li>
              <kbd>↑</kbd>, <kbd>↓</kbd>, <kbd>←</kbd>, <kbd>→</kbd>
              ：テーブル内のセルを1つずつ移動
            </li>
            <li>
              <kbd>Ctrl</kbd>/<kbd>Command</kbd> + <kbd>←</kbd>, <kbd>→</kbd>
              ：テーブルの行の先頭・末尾のセルへ移動
            </li>
            <li>
              <kbd>Ctrl</kbd>/<kbd>Command</kbd> + <kbd>↑</kbd>, <kbd>↓</kbd>
              ：テーブル内の一番上・一番下へ移動
            </li>
          </ul>
        </Stack>
      </Dialog>
    </>
  );
};
