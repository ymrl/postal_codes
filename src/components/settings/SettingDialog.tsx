import React from "react";
import { SettingsContext } from "../../contexts";
import {
  Checkbox,
  Dialog,
  Fields,
  Fieldset,
  Radiobutton,
  Stack,
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
  return (
    <Dialog
      dialogTitle="表示設定"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Stack size="block" direction="column">
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
      </Stack>
    </Dialog>
  );
};
