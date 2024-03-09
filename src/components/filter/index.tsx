import React from "react";
import { AdvancedSearchDetails } from "./AdvancedSearchDetails";
import { searchStyle } from "./Search.css";
import { SearchField } from "./SearchField";
import { AdvancedSearchPopupButton } from "./AdvancedSearchPopupButton";

export const Filter = () => {
  const [isMobileSafari, setIsMobileSafari] = React.useState(false);
  React.useEffect(() => {
    setIsMobileSafari(
      /iP(ad|hone|od).+Version\/[\d.]+.*Safari/i.test(navigator.userAgent),
    );
  }, []);
  return (
    <search className={searchStyle}>
      <SearchField />
      {isMobileSafari ? (
        <AdvancedSearchPopupButton />
      ) : (
        <AdvancedSearchDetails />
      )}
    </search>
  );
};
