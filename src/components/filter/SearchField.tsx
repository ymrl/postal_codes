import React, { useContext, useEffect } from "react";
import { KenAllContext, SettingsContext } from "../../contexts";
import { SlMagnifier } from "react-icons/sl";
import { IconLabeledInput } from "../fundamentals";

export const SearchField = ({ fieldId }: { fieldId: string }) => {
  const { query, dispatch } = useContext(KenAllContext);
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
      type="search"
      Icon={SlMagnifier}
      id={fieldId}
      value={query}
      onChange={(e) =>
        dispatch({ type: "FILTER_KEN_ALL", payload: { query: e.target.value } })
      }
      ref={ref}
    />
  );
};
