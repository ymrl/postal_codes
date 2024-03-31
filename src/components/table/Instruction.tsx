import React from "react";
import { Button, Paragraph, Stack, TextWithIcon } from "../fundamentals";
import { instructionStyle, keyboardOnlyStyle } from "./Instruction.css";
import { firstRowCellOfTbody } from "./layout/useKeyNavigation";
import { SettingsContext, UIContext } from "../../contexts";
import { SlQuestion } from "react-icons/sl";

export const Instruction = ({
  tableBodyRef,
}: {
  tableBodyRef: React.RefObject<HTMLTableSectionElement>;
}) => {
  const { tableKeyboardControl } = React.useContext(SettingsContext);
  const { dispatch } = React.useContext(UIContext);
  return (
    <div className={keyboardOnlyStyle}>
      <div className={instructionStyle}>
        <Stack direction="column" size="block" padding>
          <Paragraph>
            {!tableKeyboardControl &&
              "「テーブル内のキーボードで操作を有効にする」設定をオンにすると、"}
            一覧表ををキーボードで操作できます
          </Paragraph>
          <Stack direction="row" size="inline">
            {tableKeyboardControl && (
              <Button
                border
                onClick={() => {
                  const firstCell = firstRowCellOfTbody(
                    tableBodyRef.current,
                    1,
                  );
                  console.log(tableBodyRef.current, firstCell);
                  if (firstCell) {
                    (firstCell as HTMLElement).focus();
                  }
                }}
              >
                表に移動
              </Button>
            )}
            <Button
              border
              onClick={() => dispatch({ type: "OPEN_HELP_DIALOG" })}
            >
              <TextWithIcon Icon={SlQuestion}>ヘルプを表示</TextWithIcon>
            </Button>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};
