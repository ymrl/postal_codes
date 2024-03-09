import React from "react";
import { QueryContext } from "./QueryContext";
export type FilterCondition = {
  query: string;
  partOfTown: boolean;
  spreadAcrossTowns: boolean;
  koaza: boolean;
  choume: boolean;
};

export const FilterConditionContext = React.createContext<{
  filterCondition: FilterCondition;
  updateFilterCondition: (newCondition: Partial<FilterCondition>) => void;
}>({
  filterCondition: {
    query: "",
    choume: false,
    koaza: false,
    partOfTown: false,
    spreadAcrossTowns: false,
  },
  updateFilterCondition: () => {},
});

export const FilterConditionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { updateQuery, query } = React.useContext(QueryContext);

  const [filterCondition, setFilterCondition] = React.useState<FilterCondition>(
    {
      query: query.q || "",
      choume: false,
      koaza: false,
      partOfTown: false,
      spreadAcrossTowns: false,
    },
  );
  const updateFilterCondition = (
    partialCondition: Partial<FilterCondition>,
  ) => {
    if (partialCondition.query !== filterCondition.query) {
      updateQuery({ q: partialCondition.query });
    }
    const newCondition = { ...filterCondition, ...partialCondition };
    setFilterCondition(newCondition);
  };

  return (
    <FilterConditionContext.Provider
      value={{ filterCondition, updateFilterCondition }}
    >
      {children}
    </FilterConditionContext.Provider>
  );
};
