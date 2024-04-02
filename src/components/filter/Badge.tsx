import React from "react";
import { KenAllContext } from "../../contexts";
import { badgeStyle } from "./Badge.css";
import { VisuallyHidden } from "../fundamentals";

export const Badge = () => {
  const { choume, koaza, partOfTown, spreadAcrossTowns } =
    React.useContext(KenAllContext);
  const appliedConditionsCount = [
    choume,
    koaza,
    partOfTown,
    spreadAcrossTowns,
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
