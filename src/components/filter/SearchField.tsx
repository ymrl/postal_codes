import { inputStyle, searchLabelStyle } from "./Search.css";
import { FilterConditionContext, SettingsContext } from "../../contexts";
import React, { useEffect } from "react";

export const SearchField = () => {
  const { filterCondition, updateFilterCondition } = React.useContext(FilterConditionContext);
  const { query } = filterCondition;
  const { shortcutKey } = React.useContext(SettingsContext);
  const ref = React.useRef<HTMLInputElement>(null);

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
    <label className={searchLabelStyle}>
      検索
      <input
        className={inputStyle}
        type="text"
        value={query}
        onChange={(e) =>
          updateFilterCondition({ ...filterCondition, query: e.target.value })
        }
        ref={ref}
      />
    </label>
  );
};
