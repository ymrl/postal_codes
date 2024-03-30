import React from "react";
import { Button } from "../fundamentals";
import { instructionStyle, keyboardOnlyStyle } from "./Instruction.css";
import { firstRowCellOfTbody } from "./layout/useKeyNavigation";

export const Instruction = ({
  tableBodyRef,
}: {
  tableBodyRef: React.RefObject<HTMLTableSectionElement>;
}) => (
  <div className={keyboardOnlyStyle}>
    <div className={instructionStyle}>
      <p>キーボードで操作できます</p>
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
    </div>
  </div>
);
