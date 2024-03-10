import React from "react";
import { KenAllContext } from "../../contexts";
import { statusStyle } from "./Status.css";

export const Status = ({ ids }: { ids: string[] }) => {
  const { filteredKenAll } = React.useContext(KenAllContext);
  const count = filteredKenAll.length;
  return (
    <output
      className={statusStyle}
      htmlFor={ids.join(" ")}
    >{`${count}件`}</output>
  );
};
