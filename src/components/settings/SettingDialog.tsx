import React, { useContext } from "react";
import { SettingsContext } from ".";
import {
  dialogContentStyle,
  dialogTitleStyle,
  disclaimerStyle,
  settingDialogStyle,
} from "./SettingDialog.css";
import { KenAllContext } from "../../KenAllContext";
import {
  Button,
  Checkbox,
  Fields,
  Fieldset,
  Radiobutton,
} from "../fundamentals";

const SettingDialogRenderer: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  { requestClose: () => void }
> = ({ requestClose }, ref) => {
  const { showRuby, shortcutKey, colorScheme, updateSettings } =
    React.useContext(SettingsContext);
  const downloadedAt = useContext(KenAllContext).downloadedAt;
  return (
    <dialog className={settingDialogStyle} ref={ref}>
      <div className={dialogContentStyle}>
        <h2 className={dialogTitleStyle} tabIndex={-1}>表示設定</h2>
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
        </Fields>
        <Fieldset legend="テーマ">
          <Fields>
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
            <a href="https://www.post.japanpost.jp/zipcode/dl/utf-zip.html">
              住所の郵便番号（1レコード1行、UTF-8形式）（CSV形式）
            </a>
            を元にしています。
          </p>
          <p>
            当ページ製作者は、ページの利用やデータの正確性に関して一切の責任を負いかねます。
          </p>
        </div>
        <Button onClick={requestClose}>閉じる</Button>
      </div>
    </dialog>
  );
};
export const SettingDialog = React.forwardRef(SettingDialogRenderer);
