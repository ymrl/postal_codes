import React from "react";
import { reducer, KenAllState, KenAllDispatch } from "./reducer";
import { downloadNumbers, downloadCities } from "./api";

export const KenAllContext = React.createContext<
  KenAllState & {
    dispatch: KenAllDispatch;
  }
>({
  filteredKenAll: [],
  filteredNumbers: [],
  numbers: [],
  cities: {},
  downloadedTownFiles: [],
  towns: {},
  timestamp: null,
  query: "",
  partOfTown: false,
  spreadAcrossTowns: false,
  koaza: false,
  choume: false,
  dispatch: () => {
    /* noop */
  },
});

export const KenAllProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    filteredKenAll: [],
    filteredNumbers: [],
    numbers: [],
    downloadedTownFiles: [],
    cities: {},
    towns: {},
    timestamp: null,
    query: "",
    partOfTown: false,
    spreadAcrossTowns: false,
    koaza: false,
    choume: false,
  });
  React.useEffect(() => {
    downloadNumbers(dispatch);
    downloadCities(dispatch);
  }, []);

  return (
    <KenAllContext.Provider value={{ ...state, dispatch }}>
      {children}
    </KenAllContext.Provider>
  );
};
