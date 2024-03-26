import React from "react";
import { Button, TextWithIcon } from "../fundamentals";
import { SlWrench } from "react-icons/sl";
import { DeveloperSettingDialog } from "./DeveloperSettingDialog";

export const DeveloperSettings = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        <TextWithIcon Icon={SlWrench} hideText="medium">
          開発者設定
        </TextWithIcon>
      </Button>
      <DeveloperSettingDialog
        isOpen={isOpen}
        onRequestClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
