import { FilterCondition, City, Town } from "./types";

export const filter = ({
  numbers,
  cities,
  towns,
  query,
  spreadAcrossTowns,
  partOfTown,
  koaza,
  choume,
}: {
  numbers: string[];
  cities: { [code: string]: City };
  towns: { [number: string]: Town };
} & FilterCondition) =>
  numbers.filter((n) => {
    const t = towns[n];
    const c = cities[t?.code];
    return (
      (partOfTown ? t?.part : true) &&
      (spreadAcrossTowns ? t?.spread : true) &&
      (koaza ? t?.koaza : true) &&
      (choume ? t?.chome : true) &&
      (query
        ? query
            .split(/\s/)
            .every(
              (query) =>
                (query.match(/^[0-9]{3}-?[0-9]{1,4}$/) &&
                  n.includes(query.replace("-", ""))) ||
                [
                  t?.number,
                  t?.town,
                  t?.townKana,
                  c?.city,
                  c?.cityKana,
                  c?.pref,
                  c?.prefKana,
                ].some((cell) => cell && cell.includes(query)),
            )
        : true)
    );
  });
