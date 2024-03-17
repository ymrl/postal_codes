import React from "react";
import { fieldsStyle, fieldsStyleHorizontal } from "./Fields.css";

export const Fields = ({
  children,
  horizontal,
  gap = "normal",
}: {
  children: React.ReactNode[];
  horizontal?: boolean;
  gap?: "normal" | "none" | "small";
}) => (
  <ul
    className={`${fieldsStyle[gap]} ${horizontal ? fieldsStyleHorizontal : ""}`}
  >
    {children.map((child, index) => (
      <li key={index}>{child}</li>
    ))}
  </ul>
);
