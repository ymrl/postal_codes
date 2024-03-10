import React from "react";
import { AdvancedSearchDetails } from "./AdvancedSearchDetails";
import { searchFormStyle } from "./index.css";
import { SearchField } from "./SearchField";
import { AdvancedSearchPopupButton } from "./AdvancedSearchPopupButton";
import { AdvancedSearchContent } from "./AdvancedSearchContent";
import { Status } from "./Status";

export const Filter = () => {
  const [isMobileSafari, setIsMobileSafari] = React.useState(false);
  React.useEffect(() => {
    setIsMobileSafari(
      /iP(ad|hone|od).+Version\/[\d.]+.*Safari/i.test(navigator.userAgent),
    );
  }, []);
  const id = React.useId();
  const fieldId = `${id}__field`;
  const advancedIds = [
    `${id}__partOfTown`,
    `${id}__spreadAcrossTowns`,
    `${id}__koaza`,
    `${id}__choume`,
  ];
  return (
    <search>
      <form
        className={searchFormStyle}
        id={id}
        onSubmit={(e) => e.preventDefault()}
      >
        <SearchField fieldId={fieldId} />
        {isMobileSafari ? (
          <AdvancedSearchPopupButton>
            <AdvancedSearchContent ids={advancedIds} />
          </AdvancedSearchPopupButton>
        ) : (
          <AdvancedSearchDetails>
            <AdvancedSearchContent ids={advancedIds} />
          </AdvancedSearchDetails>
        )}
        <Status ids={[fieldId, ...advancedIds]} />
      </form>
    </search>
  );
};
