import React from "react";
import { City, Town, FilterCondition } from "./types";
import { TownFiles } from "./constants";
import { filter } from "./filter";

export type KenAllState = {
  numbers: string[];
  cities: { [code: string]: City };
  downloadedTownFiles: (typeof TownFiles)[number][];
  towns: { [number: string]: Town };
  timestamp: Date | null;
  filteredNumbers: string[];
  filteredKenAll: string[][];
} & FilterCondition;
type KenAllAction =
  | {
      type: "DOWNLOADED_NUMBERS";
      payload: {
        numbers: string[];
        timestamp: Date | null;
      };
    }
  | {
      type: "DOWNLOADED_CITIES";
      payload: {
        cities: { [code: string]: City };
      };
    }
  | {
      type: "DOWNLOADED_TOWNS";
      payload: {
        towns: { [number: string]: Town };
        file: (typeof TownFiles)[number];
      };
    }
  | {
      type: "DOWNLOADED_TOWNS_ALL";
      payload: {
        towns: { [number: string]: Town };
      };
    }
  | {
      type: "FILTER_KEN_ALL";
      payload: {
        query?: string;
        partOfTown?: boolean;
        spreadAcrossTowns?: boolean;
        koaza?: boolean;
        choume?: boolean;
      };
    };
export type KenAllDispatch = React.Dispatch<KenAllAction>;
export const reducer = (
  state: KenAllState,
  action: KenAllAction,
): KenAllState => {
  switch (action.type) {
    case "DOWNLOADED_NUMBERS": {
      const {
        query,
        partOfTown,
        spreadAcrossTowns,
        koaza,
        choume,
        towns,
        cities,
      } = state;

      return {
        ...state,
        numbers: action.payload.numbers,
        filteredNumbers: filter({
          numbers: action.payload.numbers,
          query,
          partOfTown,
          spreadAcrossTowns,
          koaza,
          choume,
          towns,
          cities,
        }),
        timestamp: action.payload.timestamp,
      };
    }
    case "DOWNLOADED_CITIES":
      return {
        ...state,
        cities: action.payload.cities,
      };
    case "DOWNLOADED_TOWNS": {
      const towns = {
        ...state.towns,
        ...action.payload.towns,
      };

      return {
        ...state,
        towns,
        downloadedTownFiles: [
          ...state.downloadedTownFiles,
          action.payload.file,
        ],
        filteredNumbers: filter({
          numbers: state.numbers,
          towns,
          cities: state.cities,
          query: state.query,
          choume: state.choume,
          koaza: state.koaza,
          partOfTown: state.partOfTown,
          spreadAcrossTowns: state.spreadAcrossTowns,
        }),
      };
    }
    case "FILTER_KEN_ALL": {
      const condition = {
        query: action.payload.query ?? state.query,
        partOfTown: action.payload.partOfTown ?? state.partOfTown,
        spreadAcrossTowns:
          action.payload.spreadAcrossTowns ?? state.spreadAcrossTowns,
        koaza: action.payload.koaza ?? state.koaza,
        choume: action.payload.choume ?? state.choume,
      };
      const filteredNumbers = filter({
        numbers: state.numbers,
        ...condition,
        towns: state.towns,
        cities: state.cities,
      });
      if (condition.query !== undefined) {
        window.history.replaceState(
          null,
          "",
          condition.query ? `?q=${condition.query}` : window.location.pathname,
        );
      }
      return {
        ...state,
        ...condition,
        filteredNumbers,
      };
    }
    default:
      return state;
  }
};
