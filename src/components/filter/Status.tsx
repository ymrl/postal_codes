import React from "react";
import { KenAllContext } from "../../contexts";
import { statusStyle } from "./Status.css";

export const Status = ({ ids }: { ids: string[] }) => {
  const { filteredNumbers } = React.useContext(KenAllContext);
  const count = filteredNumbers.length;
  return (
    <output
      className={statusStyle}
      htmlFor={ids.join(" ")}
    >{`${count}件`}</output>
  );
};
