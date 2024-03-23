import React from "react";
import { DeveloperSettingsContext, SettingsContext } from "../../../contexts";
import {
  scrollableInnerStyle,
  rowStyle,
  cellStyle,
  headerRowGroupStyle,
  scorllableInnerDisplayTableStyle,
  rowDisplayTableRowStyle,
  headerRowGroupDisplayTableStyle,
  cellDisplayTableCellStyle,
  tableLayoutDisplayTableStyle,
  tableLayoutStyle,
} from "./index.css";
import { Column, ColumnType } from "../types";
import { useKeyNavigation } from "./useKeyNavigation";

export const TableLayout = ({
  children,
  ariaLabel,
  ariaColCount,
  ariaRowCount,
  id,
}: {
  children: React.ReactNode;
  ariaLabel: string;
  ariaRowCount: number;
  ariaColCount: number;
  id?: string;
}) => {
  const {
    tableElement,
    tableRole,
    noAriaColCount,
    noAriaRowCount,
    cssDisplayMode,
  } = React.useContext(DeveloperSettingsContext);
  const TagName = tableElement;
  const role = tableRole;
  return (
    <TagName
      className={
        cssDisplayMode === "table"
          ? tableLayoutDisplayTableStyle
          : tableLayoutStyle
      }
      role={role}
      aria-label={ariaLabel}
      aria-colcount={noAriaColCount ? undefined : ariaColCount}
      aria-rowcount={noAriaRowCount ? undefined : ariaRowCount}
      id={id}
    >
      {children}
    </TagName>
  );
};

export const ScrollableInner = ({
  children,
  height,
}: {
  children: React.ReactNode;
  height: number;
}) => {
  const { tableElement, tableRole, cssDisplayMode } = React.useContext(
    DeveloperSettingsContext,
  );
  const TagName = tableElement === "table" ? "tbody" : "div";
  const role = tableRole === "table" ? "rowgroup" : undefined;
  return (
    <TagName
      className={
        cssDisplayMode === "table"
          ? scorllableInnerDisplayTableStyle
          : scrollableInnerStyle
      }
      role={role}
      style={{ height: `${height}px` }}
    >
      {children}
    </TagName>
  );
};

export const ContentTop = ({ firstRowTop }: { firstRowTop: number }) => {
  const { tableElement, tableRole, cssDisplayMode } = React.useContext(
    DeveloperSettingsContext,
  );
  const TagName = tableElement === "table" ? "tr" : "div";
  const role = tableRole ? "row" : undefined;

  return (
    <TagName
      style={{
        height: firstRowTop,
        display: cssDisplayMode === "table" ? "table-row" : "block",
      }}
      role={role}
      aria-hidden="true"
    ></TagName>
  );
};
export const ContentBottom = ({
  totalHeight,
  endPosition,
}: {
  totalHeight: number;
  endPosition: number;
}) => {
  const { tableElement, tableRole, cssDisplayMode } = React.useContext(
    DeveloperSettingsContext,
  );
  if (cssDisplayMode === "table") {
    const TagName = tableElement === "table" ? "tr" : "div";
    const role = tableRole ? "presentation" : undefined;
    return (
      <TagName
        style={{
          height: totalHeight - endPosition,
          display: cssDisplayMode === "table" ? "table-row" : "block",
        }}
        role={role}
        aria-hidden="true"
      ></TagName>
    );
  } else {
    return null;
  }
};

export const Row = ({
  children,
  rowIndex,
  type = "body",
  id,
}: {
  children: React.ReactNode;
  rowIndex: number;
  type?: "header" | "body";
  id?: string;
}) => {
  const { tableElement, tableRole, noAriaRowIndex, cssDisplayMode } =
    React.useContext(DeveloperSettingsContext);
  const TagName = tableElement === "table" ? "tr" : "div";
  const role = tableRole ? "row" : undefined;
  return (
    <TagName
      id={id}
      role={role}
      aria-rowindex={noAriaRowIndex ? undefined : rowIndex}
      className={
        cssDisplayMode === "table"
          ? rowDisplayTableRowStyle[type]
          : rowStyle[type]
      }
    >
      {children}
    </TagName>
  );
};

export const HeaderRowGroup = ({ children }: { children: React.ReactNode }) => {
  const { tableElement, tableRole, cssDisplayMode } = React.useContext(
    DeveloperSettingsContext,
  );
  const TagName = tableElement === "table" ? "thead" : "div";
  const role = tableRole === "table" ? "rowgroup" : undefined;
  const ref = React.useRef<HTMLTableSectionElement>(null);
  React.useLayoutEffect(() => {
    const adjustPosition = () => {
      if (ref.current) {
        const parent = ref.current.parentElement;
        if (!parent) return;
        const box = parent.getBoundingClientRect();
        ref.current.style.top = `${window.scrollY + box.top}px`;
      }
    };
    adjustPosition();
    window.addEventListener("resize", adjustPosition);
    return () => {
      window.removeEventListener("resize", adjustPosition);
    };
  }, []);
  return (
    <TagName
      role={role}
      className={
        cssDisplayMode === "table"
          ? headerRowGroupDisplayTableStyle
          : headerRowGroupStyle
      }
      ref={ref}
    >
      {children}
    </TagName>
  );
};

export const Cell = ({
  children,
  colIndex,
  columnType,
  header,
  column,
  id,
  rowHeaderId,
}: {
  children: React.ReactNode;
  colIndex: number;
  columnType: ColumnType;
  header?: boolean;
  column: Column;
  id?: string;
  rowHeaderId?: string;
}) => {
  const { tableKeyboardControl } = React.useContext(SettingsContext);
  const {
    tableElement,
    tableRole,
    noAriaColIndex,
    noAriaDescribedby,
    cssDisplayMode,
  } = React.useContext(DeveloperSettingsContext);
  const TagName = tableElement === "table" ? (header ? "th" : "td") : "div";
  const role =
    tableRole && header
      ? "columnheader"
      : tableRole && columnType === "number"
        ? "rowheader"
        : tableRole === "table"
          ? "cell"
          : tableRole === "grid"
            ? "gridcell"
            : undefined;
  const { cellProps, onKeyDown } = useKeyNavigation({
    colIndex,
    tableKeyboardControl,
  });
  return (
    <TagName
      scope={
        tableElement === "table" && columnType === "number" ? "row" : undefined
      }
      role={role}
      aria-colindex={noAriaColIndex ? undefined : colIndex}
      aria-describedby={
        noAriaDescribedby ? undefined : `${column?.id} ${rowHeaderId || ""}`
      }
      id={id}
      className={
        cssDisplayMode === "table"
          ? cellDisplayTableCellStyle[columnType]
          : cellStyle[columnType]
      }
      tabIndex={tableKeyboardControl && !header ? 0 : undefined}
      {...cellProps}
      onKeyDown={header ? undefined : onKeyDown}
      // data-colindex={colIndex}
      // onKeyDown={(e) => {
      //   if (!tableKeyboardControl) return;
      //   switch (e.key) {
      //     case "ArrowRight": {
      //       const target =
      //         e.metaKey || e.ctrlKey
      //           ? e.currentTarget.parentElement?.lastElementChild
      //           : e.currentTarget.nextElementSibling;
      //       if (target) {
      //         e.preventDefault();
      //         (target as HTMLElement).focus();
      //       }
      //       break;
      //     }
      //     case "ArrowLeft": {
      //       const target =
      //         e.metaKey || e.ctrlKey
      //           ? e.currentTarget.parentElement?.firstElementChild
      //           : e.currentTarget.previousElementSibling;
      //       if (target) {
      //         e.preventDefault();
      //         (target as HTMLElement).focus();
      //       }
      //       break;
      //     }
      //     case "ArrowDown": {
      //       if (e.metaKey || e.ctrlKey) {
      //         e.preventDefault();
      //         window.scroll(0, document.body.scrollHeight);
      //         const tbody = e.currentTarget.parentElement?.parentElement;
      //         setTimeout(() => {
      //           const lastRow = tbody?.lastElementChild;
      //           const lastRowCell = lastRow?.querySelector(
      //             `[data-colindex="${colIndex}"]`,
      //           );
      //           if (lastRowCell) {
      //             (lastRowCell as HTMLElement).focus();
      //           }
      //         }, 100);
      //         break;
      //       } else {
      //         const target =
      //           e.currentTarget.parentElement?.nextElementSibling?.querySelector(
      //             `[data-colindex="${colIndex}"]`,
      //           );
      //         if (target) {
      //           e.preventDefault();
      //           (target as HTMLElement).focus();
      //         }
      //         break;
      //       }
      //     }
      //     case "ArrowUp": {
      //       if (e.metaKey || e.ctrlKey) {
      //         e.preventDefault();
      //         window.scroll(0, 0);
      //         const tbody = e.currentTarget.parentElement?.parentElement;
      //         setTimeout(() => {
      //           const hiddenRow = tbody?.firstElementChild;
      //           const firstRow = hiddenRow?.nextElementSibling;
      //           const firstRowCell = firstRow?.querySelector(
      //             `[data-colindex="${colIndex}"]`,
      //           );
      //           if (firstRowCell) {
      //             (firstRowCell as HTMLElement).focus();
      //           }
      //         }, 100);
      //         break;
      //       } else {
      //         const target =
      //           e.currentTarget.parentElement?.previousElementSibling?.querySelector(
      //             `[data-colindex="${colIndex}"]`,
      //           );
      //         if (target) {
      //           e.preventDefault();
      //           (target as HTMLElement).focus();
      //         }
      //         break;
      //       }
      //     }
      //   }
      // }}
    >
      {children}
    </TagName>
  );
};
