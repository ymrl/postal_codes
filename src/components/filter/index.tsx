import { AdvancesSearch } from "./AdvancedSearch";
import { searchStyle } from "./Search.css";
import { SearchField } from "./SearchField";

export const Filter = () => {
  return (
    <search className={searchStyle}>
      <SearchField />
      <AdvancesSearch />
    </search>
  );
};
