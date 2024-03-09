import React from "react";
import { FilterConditionContext } from "../../contexts";
import { badgeStyle } from "./Badge.css";
import { VisuallyHidden } from "../fundamentals";

export const Badge = () => {
  const { filterCondition } = React.useContext(FilterConditionContext);
  const appliedConditionsCount = [
    filterCondition.choume,
    filterCondition.koaza,
    filterCondition.partOfTown,
    filterCondition.spreadAcrossTowns,
  ].filter(Boolean).length;
  return (
    appliedConditionsCount > 0 && (
      <>
        <VisuallyHidden>（適用中</VisuallyHidden>
        <span className={badgeStyle}>{appliedConditionsCount}</span>
        <VisuallyHidden>件）</VisuallyHidden>
      </>
    )
  );
};
