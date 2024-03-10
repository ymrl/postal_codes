import React from "react";
import { fieldsStyle, fieldsStyleHorizontal } from "./Fields.css";

export const Fields = ({
  children,
  horizontal,
}: {
  children: React.ReactNode[];
  horizontal?: boolean;
}) => (
  <ul className={`${fieldsStyle} ${horizontal ? fieldsStyleHorizontal : ""}`}>
    {children.map((child, index) => (
      <li key={index}>{child}</li>
    ))}
  </ul>
);
