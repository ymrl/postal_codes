import {
  advanceSearchSummaryStyle,
  advancedSearchContentStyle,
  advancedSearchDetailsStyle,
  badgeStyle,
} from "./AdvancedSearch.css";
import { FilterCondition } from "../../FilterCondition";
import React from "react";
import { Checkbox, Fields } from "../fundamentals";

export const AdvancesSearch = ({
  onChangeCondition,
  condition,
}: {
  condition: FilterCondition;
  onChangeCondition: (condition: FilterCondition) => void;
}) => {
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
    condition.choume,
    condition.koaza,
    condition.partOfTown,
    condition.spreadAcrossTowns,
  ].filter(Boolean).length;

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
          <Checkbox
            value="partOfTown"
            checked={!!condition.partOfTown}
            onChange={(e) =>
              onChangeCondition({
                ...condition,
                partOfTown: e.target.checked,
              })
            }
          >
            町域の一部を示す郵便番号
          </Checkbox>
          <Checkbox
            value="spreadAcrossTowns"
            checked={!!condition.spreadAcrossTowns}
            onChange={(e) =>
              onChangeCondition({
                ...condition,
                spreadAcrossTowns: e.target.checked,
              })
            }
          >
            複数の町域にまたがる郵便番号
          </Checkbox>
          <Checkbox
            value="koaza"
            checked={!!condition.koaza}
            onChange={(e) =>
              onChangeCondition({ ...condition, koaza: e.target.checked })
            }
          >
            小字毎に番地が起番されている町域
          </Checkbox>
          <Checkbox
            value="choume"
            checked={!!condition.choume}
            onChange={(e) =>
              onChangeCondition({ ...condition, choume: e.target.checked })
            }
          >
            丁目を有する町域
          </Checkbox>
        </Fields>
      </div>
    </details>
  );
};
