import React from "react";
import { SettingsContext } from ".";
import {
  dialogContentStyle,
  dialogTitleStyle,
  settingDialogStyle,
} from "./SettingDialog.css";
import { buttonStyle } from "./Settings.css";

const SettingDialogRenderer: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  { requestClose: () => void }
> = ({ requestClose }, ref) => {
  const { showRuby, shortcutKey, colorScheme, updateSettings } =
    React.useContext(SettingsContext);
  return (
    <dialog className={settingDialogStyle} ref={ref}>
      <div className={dialogContentStyle}>
        <h2 className={dialogTitleStyle}>表示設定</h2>

        <label>
          <input
            type="checkbox"
            checked={showRuby}
            onChange={(e) => updateSettings({ showRuby: e.target.checked })}
          />
          ルビを表示
        </label>
        <label>
          <input
            type="checkbox"
            checked={shortcutKey}
            onChange={(e) => updateSettings({ shortcutKey: e.target.checked })}
          />
          Ctrl+F または Command+F で検索にフォーカス
        </label>

        <fieldset>
          <legend>テーマ</legend>
          <label>
            <input
              type="radio"
              name="theme"
              value="auto"
              checked={colorScheme === "auto"}
              onChange={() => {
                console.log("auto");
                updateSettings({ colorScheme: "auto" });
              }}
            />
            自動
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={colorScheme === "light"}
              onChange={() => {
                console.log("light");
                updateSettings({ colorScheme: "light" });
              }}
            />
            ライト
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={colorScheme === "dark"}
              onChange={() => {
                console.log("dark");
                updateSettings({ colorScheme: "dark" });
              }}
            />
            ダーク
          </label>
        </fieldset>
        <button type="button" onClick={requestClose} className={buttonStyle}>
          閉じる
        </button>
      </div>
    </dialog>
  );
};
export const SettingDialog = React.forwardRef(SettingDialogRenderer);
