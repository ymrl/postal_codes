import React from "react";
import { DeveloperSettingsContext, KenAllContext } from "../../contexts";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Header } from "./Header";
import { BodyRow } from "./BodyRow";
import { tableStyle } from "./index.css";
import {
  ContentBottom,
  ContentTop,
  Scrollable,
  ScrollableInner,
} from "./layout";

export const Table = () => {
  const { filteredKenAll } = React.useContext(KenAllContext);
  const { disableVirtualScroll, tableOverscanScreens } = React.useContext(
    DeveloperSettingsContext,
  );
  const parentRef = React.useRef<HTMLDivElement>(null);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: filteredKenAll.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => (window.outerWidth >= 640 ? 48 : 72),
    overscan: Math.min(
      1000,
      Math.max(
        10,
        Math.floor(
          tableOverscanScreens *
            (window.outerHeight / (window.outerWidth >= 640 ? 40 : 52)),
        ),
      ),
    ),
  });
  const id = React.useId();

  const items = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  return (
    <div className={tableStyle} id={id}>
      <Scrollable
        ref={parentRef}
        ariaLabel="日本の郵便番号"
        ariaColCount={5}
        ariaRowCount={filteredKenAll.length + 1}
      >
        <Header
          columns={[
            { type: "number", label: "郵便番号", id: `${id}__postalCode` },
            { type: "pref", label: "都道府県", id: `${id}__prefecture` },
            { type: "city", label: "市区町村", id: `${id}__city` },
            { type: "town", label: "町域", id: `${id}__town` },
            { type: "others", label: "その他の情報", id: `${id}__others` },
          ]}
        />
        {disableVirtualScroll ? (
          filteredKenAll.map((row, i) => (
            <BodyRow rowIndex={i + 2} row={row} key={i} />
          ))
        ) : (
          <ScrollableInner height={totalSize}>
            <ContentTop height={items[0]?.start ?? 0} />
            {items.map((virtualItem) => (
              <BodyRow
                rowIndex={virtualItem.index + 1}
                row={filteredKenAll[virtualItem.index]}
                key={virtualItem.key}
              />
            ))}
            <ContentBottom
              totalHeight={rowVirtualizer.getTotalSize()}
              endPosition={items[items.length - 1]?.end ?? 0}
            />
          </ScrollableInner>
        )}
      </Scrollable>
    </div>
  );
};
