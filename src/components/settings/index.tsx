import React from "react";
import { Button, TextWithIcon } from "../fundamentals";
import { SlSettings } from "react-icons/sl";
import { SettingDialog } from "./SettingDialog";

export const Settings = () => {
  const [settingDialogOpen, setSettingDialogOpen] = React.useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setSettingDialogOpen(true);
        }}
      >
        <TextWithIcon Icon={SlSettings} hideText="medium">
          設定
        </TextWithIcon>
      </Button>
      <SettingDialog
        isOpen={settingDialogOpen}
        onRequestClose={() => {
          setSettingDialogOpen(false);
        }}
      />
    </>
  );
};
