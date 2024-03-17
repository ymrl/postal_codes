import React from "react";
import {
  Checkbox,
  Dialog,
  Field,
  Fields,
  Fieldset,
  Input,
  Radiobutton,
} from "../fundamentals";
import { DeveloperSettingsContext } from "../../contexts";
import { dangerousNoticeStyle } from "./DeveloperSettingDialog.css";

export const DeveloperSettingDialogRenderer: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  Pick<
    React.ComponentPropsWithoutRef<typeof Dialog>,
    "onRequestClose" | "isOpen"
  >
> = (props) => {
  const {
    updateDeveloperSettings,
    useCSSVarForBackdrop,
    useDetailsPopupForMobileSafari,
    displayDetailsChildrenClosed,
    disableVirtualScroll,
    tableElement,
    tableRole,
    tableOverscan,
    noAriaColCount,
    noAriaColIndex,
    noAriaRowCount,
    noAriaRowIndex,
    cssDisplayMode,
  } = React.useContext(DeveloperSettingsContext);
  const id = React.useId();

  return (
    <Dialog dialogTitle="開発者設定" {...props}>
      <Fields>
        <Fieldset legend="表の描画に使う要素">
          <Fields horizontal>
            <Radiobutton
              name="tableElement"
              checked={tableElement === "div"}
              onChange={() => updateDeveloperSettings({ tableElement: "div" })}
            >
              div
            </Radiobutton>
            <Radiobutton
              name="tableElement"
              checked={tableElement === "table"}
              onChange={() =>
                updateDeveloperSettings({ tableElement: "table" })
              }
            >
              table
            </Radiobutton>
          </Fields>
        </Fieldset>
        <Fieldset legend="表のrole属性">
          <Fields gap="small">
            <Radiobutton
              name="tableRole"
              checked={tableRole === "table"}
              onChange={() => updateDeveloperSettings({ tableRole: "table" })}
            >
              table &gt; rowgroup &gt; row &gt; cell, columnheader, rowheader
            </Radiobutton>
            <Radiobutton
              name="tableRole"
              checked={tableRole === "grid"}
              onChange={() => updateDeveloperSettings({ tableRole: "grid" })}
            >
              grid &gt; rowgroup &gt; row &gt; gridcell, columnheader, rowheader
            </Radiobutton>
            <Radiobutton
              name="tableRole"
              checked={tableRole === undefined}
              onChange={() => updateDeveloperSettings({ tableRole: undefined })}
            >
              role属性を指定しない
            </Radiobutton>
          </Fields>
        </Fieldset>
        <Fieldset legend="表のCSS指定方法">
          <Fields gap="small">
            <Radiobutton
              name="cssDisplayMode"
              checked={cssDisplayMode === "row-grid"}
              onChange={() =>
                updateDeveloperSettings({ cssDisplayMode: "row-grid" })
              }
            >
              行ごとに display: grid; を指定する
            </Radiobutton>
            <Radiobutton
              name="cssDisplayMode"
              checked={cssDisplayMode === "table"}
              onChange={() =>
                updateDeveloperSettings({ cssDisplayMode: "table" })
              }
            >
              表すべてに display: table; を指定する
            </Radiobutton>
          </Fields>
        </Fieldset>
        <Fieldset legend="仮想スクロールの設定">
          <Field labelText="オーバースキャン" htmlFor={`${id}-tableOverscan`}>
            <Input
              id={`${id}-tableOverscan`}
              type="number"
              value={tableOverscan}
              onChange={(e) =>
                updateDeveloperSettings({
                  tableOverscan: Number(e.target.value),
                })
              }
            />
          </Field>
        </Fieldset>
        <Fieldset legend="WAI-ARIA属性の設定">
          <Fields gap="small">
            <Checkbox
              checked={noAriaColIndex}
              onChange={(e) =>
                updateDeveloperSettings({ noAriaColIndex: e.target.checked })
              }
            >
              aria-colindex を使用しない
            </Checkbox>
            <Checkbox
              checked={noAriaRowIndex}
              onChange={(e) =>
                updateDeveloperSettings({ noAriaRowIndex: e.target.checked })
              }
            >
              aria-rowindex を使用しない
            </Checkbox>
            <Checkbox
              checked={noAriaColCount}
              onChange={(e) =>
                updateDeveloperSettings({ noAriaColCount: e.target.checked })
              }
            >
              aria-colcount を使用しない
            </Checkbox>
            <Checkbox
              checked={noAriaRowCount}
              onChange={(e) =>
                updateDeveloperSettings({ noAriaRowCount: e.target.checked })
              }
            >
              aria-rowcount を使用しない
            </Checkbox>
          </Fields>
        </Fieldset>
        <Fieldset legend="その他の設定">
          <Fields gap="small">
            <Checkbox
              checked={useCSSVarForBackdrop}
              onChange={(e) =>
                updateDeveloperSettings({
                  useCSSVarForBackdrop: e.target.checked,
                })
              }
            >
              dialog要素の::backdropにCSS変数を使う
              <p className={dangerousNoticeStyle}>
                Safariでdialog要素の::backdropが表示されなくなります
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
                VoiceOverの挙動が不安定になる可能性があります
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
                Safariで不可視な要素にフォーカスしてしまうようになります
              </p>
            </Checkbox>
            <Checkbox
              checked={disableVirtualScroll}
              onChange={(e) =>
                updateDeveloperSettings({
                  disableVirtualScroll: e.target.checked,
                })
              }
            >
              仮想スクロールを無効にする
              <p className={dangerousNoticeStyle}>
                絞り込みの件数によってはブラウザがフリーズする可能性があります
              </p>
            </Checkbox>
          </Fields>
        </Fieldset>
      </Fields>
    </Dialog>
  );
};

export const DeveloperSettingDialog = React.forwardRef(
  DeveloperSettingDialogRenderer,
);
