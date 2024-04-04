import React from "react";
import { KenAllContext } from ".";
import { downloadTowns } from "./api";
import { FilterCondition } from "./types";
import { TownFiles } from "./constants";

export const useFilter = () => {
  const {
    dispatch,
    query,
    spreadAcrossTowns,
    partOfTown,
    koaza,
    choume,
    downloadedTownFiles,
  } = React.useContext(KenAllContext);

  const filter = (condition: Partial<FilterCondition>) => {
    const { query, spreadAcrossTowns, partOfTown, koaza, choume } = condition;
    // ダウンロードが必要
    if (
      [spreadAcrossTowns, partOfTown, koaza, choume].some((v) => v) ||
      !query?.match(/^[0-9]{3}-?[0-9]{1,4}$/)
    ) {
      TownFiles.forEach((file) => {
        downloadedTownFiles.includes(file) || downloadTowns(dispatch, file);
      });
    }
    dispatch({ type: "FILTER_KEN_ALL", payload: condition });
  };

  return { filter, query, spreadAcrossTowns, partOfTown, koaza, choume };
};
