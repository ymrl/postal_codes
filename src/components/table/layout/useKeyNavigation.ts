import React from "react";

const rightCell = (elm: Element) => elm.nextElementSibling;
const leftCell = (elm: Element) => elm.previousElementSibling;
const firstCell = (elm: Element) => elm.parentElement?.firstElementChild;
const lastCell = (elm: Element) => elm.parentElement?.lastElementChild;
const nextRowCell = (elm: Element, colIndex: number) =>
  elm.parentElement?.nextElementSibling?.querySelector(
    `[data-colindex="${colIndex}"]`,
  );
const prevRowCell = (elm: Element, colIndex: number) =>
  elm.parentElement?.previousElementSibling?.querySelector(
    `[data-colindex="${colIndex}"]`,
  );
export const firstRowCellOfTbody = (
  tbody: Element | null | undefined,
  colIndex: number,
) => {
  if (tbody) {
    return tbody.querySelector(`[data-colindex="${colIndex}"]`);
  }
};

const lastRowCellOfTbody = (
  tbody: Element | null | undefined,
  colIndex: number,
) => {
  if (tbody) {
    const cells = tbody.querySelectorAll(`[data-colindex="${colIndex}"]`);
    return cells[cells.length - 1];
  }
};
const scrollToBottom = () => window.scroll(0, document.body.scrollHeight);
const scrollToTop = () => window.scroll(0, 0);

const focusCell = (
  elm: Element | null | undefined,
  event?: React.KeyboardEvent,
) => {
  if (elm) {
    event?.preventDefault();
    (elm as HTMLElement).focus();
  }
};

const focusFirstRowCell = (
  elm: Element,
  colIndex: number,
  event: React.KeyboardEvent,
) => {
  event.preventDefault();
  scrollToTop();
  const tbody = elm.parentElement?.parentElement;
  setTimeout(() => {
    focusCell(firstRowCellOfTbody(tbody, colIndex));
  }, 100);
};
const focusLastRowCell = (
  elm: Element,
  colIndex: number,
  event: React.KeyboardEvent,
) => {
  event.preventDefault();
  scrollToBottom();
  const tbody = elm.parentElement?.parentElement;
  setTimeout(() => {
    focusCell(lastRowCellOfTbody(tbody, colIndex));
  }, 100);
};

export const useKeyNavigationRow = ({ rowIndex }: { rowIndex: number }) => {
  return {
    "data-rowIndex": rowIndex,
  };
};

export const useKeyNavigation = ({
  colIndex,
  tableKeyboardControl,
}: {
  colIndex: number;
  tableKeyboardControl: boolean;
}) => {
  const keyBuffer = React.useRef<string>("");
  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (!tableKeyboardControl) return;
      if (e.key === "ArrowRight") {
        focusCell(
          e.metaKey || e.ctrlKey
            ? lastCell(e.currentTarget)
            : rightCell(e.currentTarget),
          e,
        );
      } else if (e.key === "ArrowLeft") {
        focusCell(
          e.metaKey || e.ctrlKey
            ? firstCell(e.currentTarget)
            : leftCell(e.currentTarget),
          e,
        );
      } else if (e.key === "ArrowDown") {
        if (e.metaKey || e.ctrlKey) {
          focusLastRowCell(e.currentTarget, colIndex, e);
        } else {
          focusCell(nextRowCell(e.currentTarget, colIndex), e);
        }
      } else if (e.key === "ArrowUp") {
        if (e.metaKey || e.ctrlKey) {
          focusFirstRowCell(e.currentTarget, colIndex, e);
        } else {
          focusCell(prevRowCell(e.currentTarget, colIndex), e);
        }
      } else if (e.key === "Home") {
        focusFirstRowCell(e.currentTarget, colIndex, e);
      } else if (e.key === "End") {
        focusLastRowCell(e.currentTarget, colIndex, e);
      } else if (e.key === "k" || e.key === "K") {
        focusCell(prevRowCell(e.currentTarget, colIndex), e);
      } else if (e.key === "j" || e.key === "J") {
        focusCell(nextRowCell(e.currentTarget, colIndex), e);
      } else if (e.key === "h" || e.key === "H") {
        focusCell(leftCell(e.currentTarget), e);
      } else if (e.key === "l" || e.key === "L") {
        focusCell(rightCell(e.currentTarget), e);
      } else if (e.key === "^") {
        focusCell(firstCell(e.currentTarget), e);
      } else if (e.key === "$") {
        focusCell(lastCell(e.currentTarget), e);
      } else if (e.key === "g" && keyBuffer.current === "g") {
        focusFirstRowCell(e.currentTarget, colIndex, e);
      } else if (e.key === "G") {
        focusLastRowCell(e.currentTarget, colIndex, e);
      }
      keyBuffer.current = e.key;
    },
    [colIndex, tableKeyboardControl],
  );

  return {
    onKeyDown,
    cellProps: {
      "data-colindex": colIndex,
    },
  };
};
