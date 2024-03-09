import React from "react";
import { KenAllContext } from "../contexts";
import { statusStyle } from "./Status.css";

export const Status = () => {
  const { filteredKenAll } = React.useContext(KenAllContext);
  const count = filteredKenAll.length;
  return (
    <div
      className={statusStyle}
      aria-live="polite"
      aria-atomic="true"
    >{`${count}件`}</div>
  );
};
