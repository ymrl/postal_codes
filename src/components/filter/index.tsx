import { FilterCondition } from "../../FilterCondition";
import { AdvancesSearch } from "./AdvancedSearch";
import { searchStyle } from "./Search.css";
import { SearchField } from "./SearchField";

export const Filter = ({
  condition,
  onChangeCondition,
}: {
  condition: FilterCondition;
  onChangeCondition: (condition: FilterCondition) => void;
}) => {
  return (
    <search className={searchStyle}>
      <SearchField
        condition={condition}
        onChangeCondition={onChangeCondition}
      />
      <AdvancesSearch
        condition={condition}
        onChangeCondition={onChangeCondition}
      />
    </search>
  );
};
