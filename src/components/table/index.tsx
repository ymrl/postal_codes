import React from "react";
import { KenAllContext, SettingsContext } from "../../contexts";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Header } from "./Header";
import { BodyRow } from "./BodyRow";
import { tableBodyStyle, tableStyle } from "./Table.css";

export const Table = () => {
  const { filteredKenAll } = React.useContext(KenAllContext);

  const parentRef = React.useRef<HTMLDivElement>(null);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: filteredKenAll.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 100,
  });

  const { showRuby } = React.useContext(SettingsContext);
  const items = rowVirtualizer.getVirtualItems();
  return (
    <div
      className={tableStyle}
      role="table"
      aria-label="日本の郵便番号"
      aria-colcount={5}
      aria-rowcount={filteredKenAll.length + 1}
    >
      <Header />
      <div className={tableBodyStyle} ref={parentRef}>
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${items[0]?.start ?? 0}px)`,
            }}
          >
            {items.map((virtualItem, i) => (
              <BodyRow
                showRuby={showRuby}
                rowIndex={i + 2}
                row={filteredKenAll[virtualItem.index]}
                key={virtualItem.key}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
