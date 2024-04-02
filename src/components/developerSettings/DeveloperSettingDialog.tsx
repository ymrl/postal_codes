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

export const DeveloperSettingDialog = (
  props: Pick<
    React.ComponentPropsWithoutRef<typeof Dialog>,
    "onRequestClose" | "isOpen"
  >,
) => {
  const {
    updateDeveloperSettings,
    useCSSVarForBackdrop,
    useDetailsPopupForMobileSafari,
    displayDetailsChildrenClosed,
    disableVirtualScroll,
    virutalPositioning,
    tableElement,
    tableRole,
    tableOverscan,
    noAriaColCount,
    noAriaColIndex,
    noAriaRowCount,
    noAriaRowIndex,
    noAriaDescribedby,
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
        <Fieldset legend="仮想スクロールの位置指定">
          <Fields gap="small">
            <Radiobutton
              name="virtualPositioning"
              checked={virutalPositioning === "translate"}
              onChange={() =>
                updateDeveloperSettings({
                  virutalPositioning: "translate",
                })
              }
            >
              translateで指定
            </Radiobutton>
            <Radiobutton
              name="virtualPositioning"
              checked={virutalPositioning === "dummy-element"}
              onChange={() =>
                updateDeveloperSettings({
                  virutalPositioning: "dummy-element",
                })
              }
            >
              ダミー要素で指定
            </Radiobutton>
          </Fields>
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
            <Checkbox
              checked={noAriaDescribedby}
              onChange={(e) =>
                updateDeveloperSettings({ noAriaDescribedby: e.target.checked })
              }
            >
              aria-describedby を使用しない
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
              caption={
                <strong className={dangerousNoticeStyle}>
                  Safariでdialog要素の::backdropが表示されなくなります
                </strong>
              }
            >
              dialog要素の::backdropにCSS変数を使う
            </Checkbox>
            <Checkbox
              checked={useDetailsPopupForMobileSafari}
              onChange={(e) =>
                updateDeveloperSettings({
                  useDetailsPopupForMobileSafari: e.target.checked,
                })
              }
              caption={
                <strong className={dangerousNoticeStyle}>
                  VoiceOverの挙動が不安定になる可能性があります
                </strong>
              }
            >
              モバイルSafariでもポップアップにdetails要素を使う
            </Checkbox>
            <Checkbox
              checked={displayDetailsChildrenClosed}
              onChange={(e) =>
                updateDeveloperSettings({
                  displayDetailsChildrenClosed: e.target.checked,
                })
              }
              caption={
                <strong className={dangerousNoticeStyle}>
                  Safariで不可視な要素にフォーカスしてしまうようになります
                </strong>
              }
            >
              details要素が閉じているとき、summary以外の子要素をdisplay:noneにしない
            </Checkbox>
            <Checkbox
              checked={disableVirtualScroll}
              onChange={(e) =>
                updateDeveloperSettings({
                  disableVirtualScroll: e.target.checked,
                })
              }
              caption={
                <strong className={dangerousNoticeStyle}>
                  絞り込みの件数によってはブラウザがフリーズする可能性があります
                </strong>
              }
            >
              仮想スクロールを無効にする
            </Checkbox>
          </Fields>
        </Fieldset>
      </Fields>
    </Dialog>
  );
};
