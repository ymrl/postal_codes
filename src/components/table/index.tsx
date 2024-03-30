import React from "react";
import { DeveloperSettingsContext, KenAllContext } from "../../contexts";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { Header } from "./Header";
import { BodyRow } from "./BodyRow";
import { ContentBottom, ContentTop, TableBody, TableLayout } from "./layout";
import { screenWidths, sizeRemToPx } from "../../styles";
import { rowHeight, smallRowHeight } from "./layout/index.css";
import { Column } from "./types";
import { Instruction } from "./Instruction";

export const Table = () => {
  const { filteredKenAll } = React.useContext(KenAllContext);
  const { disableVirtualScroll, tableOverscan } = React.useContext(
    DeveloperSettingsContext,
  );
  const rowVirtualizer = useWindowVirtualizer({
    count: filteredKenAll.length,
    estimateSize: () =>
      window.outerWidth <= sizeRemToPx(screenWidths.small.max)
        ? sizeRemToPx(smallRowHeight)
        : sizeRemToPx(rowHeight),
    overscan: tableOverscan,
  });
  const id = React.useId();

  const items = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();
  const columns: Column[] = [
    { type: "number", label: "郵便番号", id: `${id}__postalCode` },
    { type: "pref", label: "都道府県", id: `${id}__prefecture` },
    { type: "city", label: "市区町村", id: `${id}__city` },
    { type: "town", label: "町域", id: `${id}__town` },
    { type: "others", label: "その他の情報", id: `${id}__others` },
  ];
  const tableBodyRef = React.useRef<HTMLTableSectionElement>(null);

  return (
    <>
      <Instruction tableBodyRef={tableBodyRef} />
      <TableLayout
        id={id}
        ariaLabel="日本の郵便番号"
        ariaColCount={5}
        ariaRowCount={filteredKenAll.length + 1}
        virtualHeight={totalSize}
      >
        <Header columns={columns} />
        {disableVirtualScroll ? (
          <>
            <ContentTop firstRowTop={0} colCount={5} />
            {filteredKenAll.map((row, i) => (
              <BodyRow
                rowIndex={i + 2}
                row={row}
                key={i}
                columns={columns}
                id={`${id}__${i}`}
              />
            ))}
          </>
        ) : (
          <TableBody
            height={totalSize}
            firstItemTop={items[0]?.start ?? 0}
            ref={tableBodyRef}
          >
            <ContentTop firstRowTop={items[0]?.start ?? 0} colCount={5} />
            {items.map((virtualItem) => (
              <BodyRow
                rowIndex={virtualItem.index + 2}
                row={filteredKenAll[virtualItem.index]}
                key={virtualItem.key}
                columns={columns}
                id={`${id}__${virtualItem.index}`}
              />
            ))}
            <ContentBottom
              colCount={5}
              totalHeight={rowVirtualizer.getTotalSize()}
              endPosition={items[items.length - 1]?.end ?? 0}
            />
          </TableBody>
        )}
      </TableLayout>
    </>
  );
};
