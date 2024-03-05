import React from "react";
import { fieldsStyle } from "./Fields.css";

export const Fields = ({ children }: { children: React.ReactNode[] }) => (
  <ul className={fieldsStyle}>
    {children.map((child, index) => (
      <li key={index}>{child}</li>
    ))}
  </ul>
);
