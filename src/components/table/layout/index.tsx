import React from "react";
import { DeveloperSettingsContext } from "../../../contexts";
import {
  scrollableInnerStyle,
  scrollableStyle,
  rowStyle,
  cellStyle,
  headerRowGroupStyle,
} from "./index.css";
import { ColumnType } from "../types";

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
  ref: React.Ref<HTMLTableElement>,
) => {
  const { tableElement, tableRole } = React.useContext(
    DeveloperSettingsContext,
  );
  const TagName = tableElement;
  const role = tableRole;

  return (
    <TagName
      className={scrollableStyle}
      role={role}
      aria-label={ariaLabel}
      aria-colcount={ariaColCount}
      aria-rowcount={ariaRowCount}
      tabIndex={0}
      ref={ref}
    >
      {children}
    </TagName>
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
  const { tableElement, tableRole } = React.useContext(
    DeveloperSettingsContext,
  );
  const TagName = tableElement === "table" ? "tbody" : "div";
  const role = tableRole === "table" ? "rowgroup" : undefined;
  return (
    <TagName
      className={scrollableInnerStyle}
      role={role}
      style={{ height: `max(${height}px, 100% - 2rem)` }}
    >
      {children}
    </TagName>
  );
};

export const ContentTop = ({ height }: { height: number }) => {
  const { tableElement, tableRole } = React.useContext(
    DeveloperSettingsContext,
  );
  const TagName = tableElement === "table" ? "tr" : "div";
  const role = tableRole ? "presentation" : undefined;

  return <TagName style={{ height }} role={role} aria-hidden="true"></TagName>;
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
  const { tableElement, tableRole } = React.useContext(
    DeveloperSettingsContext,
  );
  const TagName = tableElement === "table" ? "tr" : "div";
  const role = tableRole ? "row" : undefined;
  return (
    <TagName role={role} aria-rowindex={rowIndex} className={rowStyle[type]}>
      {children}
    </TagName>
  );
};

export const HeaderRowGroup = ({ children }: { children: React.ReactNode }) => {
  const { tableElement, tableRole } = React.useContext(
    DeveloperSettingsContext,
  );
  const TagName = tableElement === "table" ? "thead" : "div";
  const role = tableRole === "table" ? "rowgroup" : undefined;
  return (
    <TagName role={role} className={headerRowGroupStyle}>
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
  const { tableElement, tableRole } = React.useContext(
    DeveloperSettingsContext,
  );
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
      role={role}
      aria-colindex={colIndex}
      className={cellStyle[columnType]}
    >
      {children}
    </TagName>
  );
};
