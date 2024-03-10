import { inputStyle, searchLabelStyle } from "./Search.css";
import { FilterConditionContext, SettingsContext } from "../../contexts";
import React, { useEffect } from "react";
import { SlMagnifier } from "react-icons/sl";
import { IconLabeledInput, TextWithIcon } from "../fundamentals";

export const SearchField = () => {
  const { filterCondition, updateFilterCondition } = React.useContext(
    FilterConditionContext,
  );
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
    <IconLabeledInput
      labelText="検索"
      Icon={SlMagnifier}
      value={query}
      onChange={(e) =>
        updateFilterCondition({ ...filterCondition, query: e.target.value })
      }
      ref={ref}
    />
  );
};
