import React from "react";
import { Checkbox, Fields } from "../fundamentals";
import { advancedSearchContentStyle } from "./AdvancedSearchContent.css";
import { useFilter } from "../../contexts/KenAll/useFilter";

const labels = {
  partOfTown: "町域の一部を示す郵便番号",
  spreadAcrossTowns: "複数の町域にまたがる郵便番号",
  koaza: "小字毎に番地が起番されている町域",
  choume: "丁目を有する町域",
} as const;

export const AdvancedSearchContent = ({ ids }: { ids: string[] }) => {
  const { filter, spreadAcrossTowns, partOfTown, koaza, choume } = useFilter();
  const filterCondition = { spreadAcrossTowns, partOfTown, koaza, choume };
  const ref = React.useRef<HTMLDivElement>(null);
  const adjustPosition = () => {
    if (!ref.current) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    if (rect.right > window.outerWidth) {
      ref.current.style.left = `${window.outerWidth - rect.right}px`;
    }
  };
  React.useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(() => {
        adjustPosition();
      });
      observer.observe(ref.current);
      observer.observe(window.document.body);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className={advancedSearchContentStyle} ref={ref}>
      <Fields>
        {(Object.keys(labels) as (keyof typeof labels)[]).map((key, i) => (
          <Checkbox
            id={ids[i]}
            key={key}
            value={key}
            checked={!!filterCondition[key]}
            onChange={(e) => filter({ [key]: e.target.checked })}
          >
            {labels[key]}
          </Checkbox>
        ))}
      </Fields>
    </div>
  );
};
