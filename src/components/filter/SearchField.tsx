import React, { useEffect } from "react";
import { SettingsContext } from "../../contexts";
import { SlMagnifier } from "react-icons/sl";
import { IconLabeledInput } from "../fundamentals";
import { useFilter } from "../../contexts/KenAll/useFilter";

export const SearchField = ({ fieldId }: { fieldId: string }) => {
  const { shortcutKey } = React.useContext(SettingsContext);
  const ref = React.useRef<HTMLInputElement>(null);
  const { query, filter } = useFilter();

  React.useEffect(() => {
    const parsedSearch = new URLSearchParams(location.search);
    const q = parsedSearch.get("q");
    if (q) {
      filter({
        query: q,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (
        shortcutKey &&
        ref.current &&
        e.key === "f" &&
        (e.ctrlKey || e.metaKey)
      ) {
        e.preventDefault();
        ref.current.focus();
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [shortcutKey]);

  return (
    <IconLabeledInput
      labelText="検索"
      type="search"
      Icon={SlMagnifier}
      id={fieldId}
      value={query}
      onChange={(e) => filter({ query: e.target.value })}
      ref={ref}
    />
  );
};
