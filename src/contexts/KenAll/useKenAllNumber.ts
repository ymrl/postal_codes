import React from "react";
import { City, Town } from "./types";
import { TownFiles } from "./constants";
import { KenAllContext } from ".";
import { downloadTowns } from "./api";

export const useKenAllNumber = (
  n: string,
): { city: City | undefined; town: Town | undefined } => {
  const { towns, cities, dispatch } = React.useContext(KenAllContext);
  const town: Town | undefined = towns[n];
  const file = `${n.slice(0, 1)}00` as (typeof TownFiles)[number];
  if (!town && TownFiles.includes(file)) {
    downloadTowns(dispatch, file);
  }
  const city: City | undefined = town ? cities[town.code] : undefined;
  return { town, city };
};
