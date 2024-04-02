import React from "react";

type FilterCondition = {
  query: string;
  partOfTown: boolean;
  spreadAcrossTowns: boolean;
  koaza: boolean;
  choume: boolean;
};
type KenAllState = {
  kenAll: string[][];
  filteredKenAll: string[][];
  downloadedAt: Date | null;
} & FilterCondition;

type KenAllAction =
  | {
      type: "DOWNLOADED_KEN_ALL";
      payload: {
        kenAll: string[][];
        downloadedAt: Date;
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

const reducer = (state: KenAllState, action: KenAllAction) => {
  switch (action.type) {
    case "DOWNLOADED_KEN_ALL":
      return {
        ...state,
        kenAll: action.payload.kenAll,
        filteredKenAll: filterKenAll(action.payload.kenAll, state),
        downloadedAt: action.payload.downloadedAt,
      };
    case "FILTER_KEN_ALL": {
      const { kenAll } = state;
      const condition = {
        query: action.payload.query ?? state.query,
        partOfTown: action.payload.partOfTown ?? state.partOfTown,
        spreadAcrossTowns:
          action.payload.spreadAcrossTowns ?? state.spreadAcrossTowns,
        koaza: action.payload.koaza ?? state.koaza,
        choume: action.payload.choume ?? state.choume,
      };
      const filteredKenAll = filterKenAll(kenAll, condition);
      if (condition.query) {
        window.history.replaceState(
          null,
          "",
          condition.query ? `?q=${condition.query}` : window.location.pathname,
        );
      }
      return {
        ...state,
        ...condition,
        filteredKenAll,
      };
    }
    default:
      return state;
  }
};

export const KenAllContext = React.createContext<
  KenAllState & {
    dispatch: React.Dispatch<KenAllAction>;
  }
>({
  kenAll: [],
  filteredKenAll: [],
  downloadedAt: null,
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
    kenAll: [],
    filteredKenAll: [],
    downloadedAt: null,
    query: "",
    partOfTown: false,
    spreadAcrossTowns: false,
    koaza: false,
    choume: false,
  });
  React.useEffect(() => {
    const parsedSearch = new URLSearchParams(location.search);
    const q = parsedSearch.get("q");
    if (q) {
      dispatch({ type: "FILTER_KEN_ALL", payload: { query: q } });
    }
  }, []);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("./ken_all.json");
      const text = await res.text();
      const json = JSON.parse(text);
      const jsonArray = json.kenAll;
      const jsonDate = json.downloadedAt;
      const rows: string[][] = [];
      if (jsonArray && Array.isArray(jsonArray)) {
        jsonArray.forEach((row) => {
          if (Array.isArray(row)) {
            rows.push(row.map((cell) => cell.toString()));
          }
        });
      }
      dispatch({
        type: "DOWNLOADED_KEN_ALL",
        payload: {
          kenAll: rows,
          downloadedAt: new Date(Date.parse(jsonDate)),
        },
      });
    })();
  }, []);

  return (
    <KenAllContext.Provider value={{ ...state, dispatch }}>
      {children}
    </KenAllContext.Provider>
  );
};

const filterKenAll = (kenAll: string[][], condition: FilterCondition) => {
  const { query, partOfTown, spreadAcrossTowns, koaza, choume } = condition;
  return kenAll.filter(
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
                [row[2], row[3], row[4], row[5], row[6], row[7], row[8]].some(
                  (cell) => cell.includes(query),
                ),
            )
        : true),
  );
};
