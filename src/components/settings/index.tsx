import React from "react";
import { SettingDialog } from "./SettingDialog";
import { Button, TextWithIcon } from "../fundamentals";
import { SlSettings } from "react-icons/sl";

export const Settings = () => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        onClick={() => {
          if (dialogRef.current) {
            dialogRef.current.showModal();
          }
        }}
      >
        <TextWithIcon Icon={SlSettings} iconOnlyOnMobile>
          設定
        </TextWithIcon>
      </Button>
      <SettingDialog
        ref={dialogRef}
        requestClose={() => {
          if (dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      />
    </>
  );
};
