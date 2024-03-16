import React from "react";
import { Button, TextWithIcon } from "../fundamentals";
import { SlSettings, SlWrench } from "react-icons/sl";
import { SettingDialog } from "./SettingDialog";
import { DeveloperSettingDialog } from "./DeveloperSettingDialog";
import { settingStyle } from "./index.css";

export const Settings = () => {
  const [settingDialogOpen, setSettingDialogOpen] = React.useState(false);
  const [developperSettingDialogOpen, setDeveloperSettingDialogOpen] =
    React.useState(false);
  return (
    <div className={settingStyle}>
      <Button
        onClick={() => {
          setSettingDialogOpen(true);
        }}
      >
        <TextWithIcon Icon={SlSettings} iconOnlyOnMobile>
          設定
        </TextWithIcon>
      </Button>
      <Button
        onClick={() => {
          setDeveloperSettingDialogOpen(true);
        }}
      >
        <TextWithIcon Icon={SlWrench} iconOnlyOnMobile>
          開発者設定
        </TextWithIcon>
      </Button>
      <SettingDialog
        isOpen={settingDialogOpen}
        onRequestClose={() => {
          setSettingDialogOpen(false);
        }}
      />
      <DeveloperSettingDialog
        isOpen={developperSettingDialogOpen}
        onRequestClose={() => {
          setDeveloperSettingDialogOpen(false);
        }}
      />
    </div>
  );
};
