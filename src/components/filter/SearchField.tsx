import { inputStyle, searchLabelStyle } from "./Search.css";
import { FilterCondition } from "../../FilterCondition";
import React, { useEffect } from "react";
import { SettingsContext } from "../settings";

export const SearchField = ({
  condition,
  onChangeCondition,
}: {
  condition: FilterCondition;
  onChangeCondition: (condition: FilterCondition) => void;
}) => {
  const { query } = condition;
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
          onChangeCondition({ ...condition, query: e.target.value })
        }
        ref={ref}
      />
    </label>
  );
};
