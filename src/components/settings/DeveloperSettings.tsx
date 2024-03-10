import React from "react";
import { Checkbox, Fields } from "../fundamentals";
import { DeveloperSettingsContext } from "../../contexts";
import { dangerousNoticeStyle } from "./DeveloperSettings.css";

export const DeveloperSettings = () => {
  const {
    updateDeveloperSettings,
    useCSSVarForBackdrop,
    useFlexForDialog,
    useDetailsPopupForMobileSafari,
    displayDetailsChildrenClosed,
  } = React.useContext(DeveloperSettingsContext);

  return (
    <details>
      <summary>開発者設定</summary>
      <Fields>
        <Checkbox
          checked={useCSSVarForBackdrop}
          onChange={(e) =>
            updateDeveloperSettings({ useCSSVarForBackdrop: e.target.checked })
          }
        >
          dialog要素の::backdropにCSS変数を使う
          <p className={dangerousNoticeStyle}>
            Safariでdialog要素の::backdropが表示されなくなります
          </p>
        </Checkbox>
        <Checkbox
          checked={useFlexForDialog}
          onChange={(e) =>
            updateDeveloperSettings({ useFlexForDialog: e.target.checked })
          }
        >
          dialog要素にflexboxを使う
          <p className={dangerousNoticeStyle}>
            Firefoxでダイアログを閉じても変な位置に表示されつづけます
          </p>
        </Checkbox>
        <Checkbox
          checked={useDetailsPopupForMobileSafari}
          onChange={(e) =>
            updateDeveloperSettings({
              useDetailsPopupForMobileSafari: e.target.checked,
            })
          }
        >
          モバイルSafariでもポップアップにdetails要素を使う
          <p className={dangerousNoticeStyle}>
            VoiceOverで開閉できなくなる可能性があります
          </p>
        </Checkbox>
        <Checkbox
          checked={displayDetailsChildrenClosed}
          onChange={(e) =>
            updateDeveloperSettings({
              displayDetailsChildrenClosed: e.target.checked,
            })
          }
        >
          details要素が閉じているとき、summary以外の子要素をdisplay:noneにしない
          <p className={dangerousNoticeStyle}>
            Safariで不可視な要素にフォーカスできるようになります
          </p>
        </Checkbox>
      </Fields>
    </details>
  );
};
