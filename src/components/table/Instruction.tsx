import React from "react";
import { Button } from "../fundamentals";
import { instructionStyle, keyboardOnlyStyle } from "./Instruction.css";
import { firstRowCellOfTbody } from "./layout/useKeyNavigation";
import { SettingsContext } from "../../contexts";

export const Instruction = ({
  tableBodyRef,
}: {
  tableBodyRef: React.RefObject<HTMLTableSectionElement>;
}) => {
  const { tableKeyboardControl } = React.useContext(SettingsContext);
  return (
    <div className={keyboardOnlyStyle}>
      <div className={instructionStyle}>
        <p>
          {!tableKeyboardControl &&
            "「テーブル内のキーボードで操作を有効にする」設定をオンにすると、"}
          一覧表ををキーボードで操作できます
        </p>
        {tableKeyboardControl && (
          <Button
            onClick={() => {
              const firstCell = firstRowCellOfTbody(tableBodyRef.current, 1);
              console.log(tableBodyRef.current, firstCell);
              if (firstCell) {
                (firstCell as HTMLElement).focus();
              }
            }}
          >
            表に移動
          </Button>
        )}
      </div>
    </div>
  );
};
