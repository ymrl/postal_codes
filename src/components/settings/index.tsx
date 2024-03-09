import React from "react";
import { SettingDialog } from "./SettingDialog";
import { Button } from "../fundamentals";

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
        表示設定
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
