import React from "react";
import { DeveloperSettingsContext, SettingsContext } from "../../../contexts";
import {
  scrollableInnerStyle,
  scrollableStyle,
  rowStyle,
  cellStyle,
  headerRowGroupStyle,
  scorllableInnerDisplayTableStyle,
  rowDisplayTableRowStyle,
  headerRowGroupDisplayTableStyle,
  cellDisplayTableCellStyle,
  tablePlayerDisplayTableStyle,
  tablePlayerStyle,
} from "./index.css";
import { ColumnType } from "../types";

const TablePlayer = ({
  children,
  ariaLabel,
  ariaColCount,
  ariaRowCount,
}: {
  children: React.ReactNode;
  ariaLabel: string;
  ariaRowCount: number;
  ariaColCount: number;
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
          ? tablePlayerDisplayTableStyle
          : tablePlayerStyle
      }
      role={role}
      aria-label={ariaLabel}
      aria-colcount={noAriaColCount ? undefined : ariaColCount}
      aria-rowcount={noAriaRowCount ? undefined : ariaRowCount}
    >
      {children}
    </TagName>
  );
};

const ScrollableRenderer = (
  {
    children,
    ariaLabel,
    ariaColCount,
    ariaRowCount,
  }: {
    children: React.ReactNode;
    ariaLabel: string;
    ariaRowCount: number;
    ariaColCount: number;
  },
  ref: React.Ref<HTMLDivElement>,
) => {
  const { tableKeyboardControl } = React.useContext(SettingsContext);
  return (
    <div
      className={scrollableStyle}
      tabIndex={tableKeyboardControl ? undefined : 0}
      ref={ref}
    >
      <TablePlayer
        ariaLabel={ariaLabel}
        ariaColCount={ariaColCount}
        ariaRowCount={ariaRowCount}
      >
        {children}
      </TablePlayer>
    </div>
  );
};
export const Scrollable = React.forwardRef(ScrollableRenderer);

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

export const ContentTop = ({ height }: { height: number }) => {
  const { tableElement, tableRole, cssDisplayMode } = React.useContext(
    DeveloperSettingsContext,
  );
  const TagName = tableElement === "table" ? "tr" : "div";
  const role = tableRole ? "presentation" : undefined;

  return (
    <TagName
      style={{
        height,
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
}: {
  children: React.ReactNode;
  rowIndex: number;
  type?: "header" | "body";
}) => {
  const { tableElement, tableRole, noAriaRowIndex, cssDisplayMode } =
    React.useContext(DeveloperSettingsContext);
  const TagName = tableElement === "table" ? "tr" : "div";
  const role = tableRole ? "row" : undefined;
  return (
    <TagName
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
  return (
    <TagName
      role={role}
      className={
        cssDisplayMode === "table"
          ? headerRowGroupDisplayTableStyle
          : headerRowGroupStyle
      }
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
}: {
  children: React.ReactNode;
  colIndex: number;
  columnType: ColumnType;
  header?: boolean;
}) => {
  const { tableKeyboardControl } = React.useContext(SettingsContext);
  const { tableElement, tableRole, noAriaColIndex, cssDisplayMode } =
    React.useContext(DeveloperSettingsContext);
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
  return (
    <TagName
      scope={
        tableElement === "table" && columnType === "number" ? "row" : undefined
      }
      role={role}
      aria-colindex={noAriaColIndex ? undefined : colIndex}
      className={
        cssDisplayMode === "table"
          ? cellDisplayTableCellStyle[columnType]
          : cellStyle[columnType]
      }
      tabIndex={tableKeyboardControl && !header ? 0 : undefined}
      data-colindex={colIndex}
      onKeyDown={(e) => {
        const next = e.currentTarget.nextElementSibling;
        const prev = e.currentTarget.previousElementSibling;
        const nextRowCell =
          e.currentTarget.parentElement?.nextElementSibling?.querySelector(
            `[data-colindex="${colIndex}"]`,
          );
        const prevRowCell =
          e.currentTarget.parentElement?.previousElementSibling?.querySelector(
            `[data-colindex="${colIndex}"]`,
          );
        if (e.key === "ArrowRight" && next) {
          e.preventDefault();
          (next as HTMLElement).focus();
        } else if (e.key === "ArrowLeft" && prev) {
          e.preventDefault();
          (prev as HTMLElement).focus();
        } else if (e.key === "ArrowDown" && nextRowCell) {
          e.preventDefault();
          (nextRowCell as HTMLElement).focus();
        } else if (e.key === "ArrowUp" && prevRowCell) {
          e.preventDefault();
          (prevRowCell as HTMLElement).focus();
        }
      }}
    >
      {children}
    </TagName>
  );
};
