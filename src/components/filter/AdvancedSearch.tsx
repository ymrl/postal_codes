import {
  advanceSearchSummaryStyle,
  advancedSearchContentStyle,
  advancedSearchDetailsStyle,
  badgeStyle,
} from "./AdvancedSearch.css";
import { FilterCondition, FilterConditionContext } from "../../FilterConditionProvider";
import React from "react";
import { Checkbox, Fields } from "../fundamentals";

export const AdvancesSearch = () => {
  const { filterCondition, updateFilterCondition } = React.useContext(FilterConditionContext);
  const ref = React.useRef<HTMLDetailsElement>(null);
  React.useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (
        ref.current &&
        ref.current.open &&
        !ref.current.contains(e.target as Node)
      ) {
        ref.current.open = false;
      }
    };
    window.addEventListener("click", listener);
    return () => {
      window.removeEventListener("click", listener);
    };
  }, [ref]);

  const appliedConditionsCount = [
    filterCondition.choume,
    filterCondition.koaza,
    filterCondition.partOfTown,
    filterCondition.spreadAcrossTowns,
  ].filter(Boolean).length;

  const labels = {
    partOfTown: "町域の一部を示す郵便番号",
    spreadAcrossTowns: "複数の町域にまたがる郵便番号",
    koaza: "小字毎に番地が起番されている町域",
    choume: "丁目を有する町域",
  } as const;

  return (
    <details className={advancedSearchDetailsStyle} ref={ref}>
      <summary className={advanceSearchSummaryStyle}>
        高度な条件
        {appliedConditionsCount > 0 && (
          <span className={badgeStyle}>{appliedConditionsCount}</span>
        )}
      </summary>
      <div
        className={advancedSearchContentStyle}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Escape" && ref.current?.open) {
            ref.current.open = false;
            ref.current.querySelector("summary")?.focus();
          }
        }}
      >
        <Fields>
          {
            (Object.keys(labels) as (keyof typeof labels)[]).map((key) => (
              <Checkbox
                key={key}
                value={key}
                checked={!!filterCondition[key as keyof FilterCondition]}
                onChange={(e) =>
                  updateFilterCondition({
                    ...filterCondition,
                    [key]: e.target.checked,
                  })
                }
                >{labels[key]}</Checkbox>
            ))
          }
        </Fields>
      </div>
    </details>
  );
};
