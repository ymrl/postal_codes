import React from "react";

type Query = {
  q: string;
};
export const QueryContext = React.createContext<{
  query: Query;
  updateQuery: (newQuery: Partial<Query>) => void;
}>({ query: { q: "" }, updateQuery: () => {} });

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const parsedSearch = new URLSearchParams(location.search);
  const [query, setQuery] = React.useState<Query>({
    q: parsedSearch.get("q") || "",
  });

  const updateQuery = (partialQuery: Partial<Query>) => {
    const newQuery = { ...query, ...partialQuery };
    setQuery(newQuery);
    const filteredQuery = (Object.keys(newQuery) as (keyof Query)[]).reduce(
      (acc, key) => {
        if (newQuery[key]) {
          acc[key] = newQuery[key];
        }
        return acc;
      },
      {} as Partial<Query>,
    );
    const queryString = new URLSearchParams(filteredQuery).toString();
    window.history.replaceState(
      null,
      "",
      queryString ? `?${queryString}` : window.location.pathname,
    );
  };

  return (
    <QueryContext.Provider value={{ query, updateQuery }}>
      {children}
    </QueryContext.Provider>
  );
};
