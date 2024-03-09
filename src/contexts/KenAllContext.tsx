import React from "react";
import { FilterConditionContext } from "./FilterConditionContext";
export const KenAllContext = React.createContext<{
  kenAll: string[][];
  filteredKenAll: string[][];
  downloadedAt: Date | null;
}>({ kenAll: [], filteredKenAll: [], downloadedAt: null });

export const KenAllProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [kenAll, setKenAll] = React.useState<string[][]>([]);
  const [downloadedAt, setDownloadedAt] = React.useState<Date | null>(null);
  const { filterCondition } = React.useContext(FilterConditionContext);
  React.useEffect(() => {
    (async () => {
      const res = await fetch("./ken_all.json");
      const text = await res.text();
      const json = JSON.parse(text);
      const jsonArray = json.kenAll;
      const jsonDate = json.downloadedAt;
      if (jsonArray && Array.isArray(jsonArray)) {
        const rows: string[][] = [];
        jsonArray.forEach((row) => {
          if (Array.isArray(row)) {
            rows.push(row.map((cell) => cell.toString()));
          }
        });
        setKenAll(rows);
      }
      if (jsonDate && typeof jsonDate === "string") {
        setDownloadedAt(new Date(Date.parse(jsonDate)));
      }
    })();
  }, []);

  const { query, partOfTown, spreadAcrossTowns, koaza, choume } =
    filterCondition;
  const filteredKenAll = React.useMemo(
    () =>
      kenAll.filter(
        (row) =>
          (!partOfTown || row[9] === "1") &&
          (!spreadAcrossTowns || row[12] === "1") &&
          (!koaza || row[10] === "1") &&
          (!choume || row[11] === "1") &&
          (query
            ? query
                .split(/\s/)
                .every(
                  (query) =>
                    (query.match(/^[0-9]{3}-?[0-9]{0,4}$/) &&
                      row[2].includes(query.replace("-", ""))) ||
                    [
                      row[2],
                      row[3],
                      row[4],
                      row[5],
                      row[6],
                      row[7],
                      row[8],
                    ].some((cell) => cell.includes(query)),
                )
            : true),
      ),
    [kenAll, query, partOfTown, spreadAcrossTowns, koaza, choume],
  );

  return (
    <KenAllContext.Provider value={{ kenAll, filteredKenAll, downloadedAt }}>
      {children}
    </KenAllContext.Provider>
  );
};
