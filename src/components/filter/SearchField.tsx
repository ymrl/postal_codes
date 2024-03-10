import React, { useEffect } from "react";
import { FilterConditionContext, SettingsContext } from "../../contexts";
import { SlMagnifier } from "react-icons/sl";
import { IconLabeledInput } from "../fundamentals";

export const SearchField = ({ fieldId }: { fieldId: string }) => {
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
      id={fieldId}
      value={query}
      onChange={(e) =>
        updateFilterCondition({ ...filterCondition, query: e.target.value })
      }
      ref={ref}
    />
  );
};
