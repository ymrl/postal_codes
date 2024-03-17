import React, { useContext } from "react";
import { dialogContentStyle, disclaimerStyle } from "./SettingDialog.css";
import { KenAllContext, SettingsContext } from "../../contexts";
import {
  Checkbox,
  Dialog,
  Fields,
  Fieldset,
  Link,
  Radiobutton,
} from "../fundamentals";

type Props = Pick<
  React.ComponentPropsWithoutRef<typeof Dialog>,
  "isOpen" | "onRequestClose"
>;

export const SettingDialog = ({ isOpen, onRequestClose }: Props) => {
  const {
    showRuby,
    shortcutKey,
    colorScheme,
    tableKeyboardControl,
    updateSettings,
  } = React.useContext(SettingsContext);
  const downloadedAt = useContext(KenAllContext).downloadedAt;
  return (
    <Dialog
      dialogTitle="表示設定"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className={dialogContentStyle}>
        <Fields>
          <Checkbox
            checked={showRuby}
            onChange={(e) => updateSettings({ showRuby: e.target.checked })}
          >
            ルビを表示
          </Checkbox>
          <Checkbox
            checked={shortcutKey}
            onChange={(e) => updateSettings({ shortcutKey: e.target.checked })}
          >
            Ctrl+F または Command+F で検索にフォーカス
          </Checkbox>
          <Checkbox
            checked={tableKeyboardControl}
            onChange={(e) =>
              updateSettings({ tableKeyboardControl: e.target.checked })
            }
          >
            テーブル内のキーボードで操作を有効にする
          </Checkbox>
        </Fields>
        <Fieldset legend="テーマ">
          <Fields horizontal>
            <Radiobutton
              name="theme"
              value="auto"
              checked={colorScheme === "auto"}
              onChange={() => updateSettings({ colorScheme: "auto" })}
            >
              自動
            </Radiobutton>
            <Radiobutton
              name="theme"
              value="light"
              checked={colorScheme === "light"}
              onChange={() => updateSettings({ colorScheme: "light" })}
            >
              ライト
            </Radiobutton>
            <Radiobutton
              name="theme"
              value="dark"
              checked={colorScheme === "dark"}
              onChange={() => updateSettings({ colorScheme: "dark" })}
            >
              ダーク
            </Radiobutton>
          </Fields>
        </Fieldset>
        <div className={disclaimerStyle}>
          <p>
            このページの情報は
            {downloadedAt
              ? `${downloadedAt.getFullYear()}年${downloadedAt.getMonth() + 1}月${downloadedAt.getDate()}日にダウンロードした、`
              : ""}
            日本郵便株式会社の
            <Link href="https://www.post.japanpost.jp/zipcode/dl/utf-zip.html">
              住所の郵便番号（1レコード1行、UTF-8形式）（CSV形式）
            </Link>
            を元にしています。
          </p>
          <p>
            当ページ製作者は、ページの利用やデータの正確性に関して一切の責任を負いかねます。
          </p>
        </div>
      </div>
    </Dialog>
  );
};
