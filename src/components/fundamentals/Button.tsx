import React from "react";
import { buttonStyle } from "./Button.css";

export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button type="button" onClick={onClick} className={buttonStyle}>
    {children}
  </button>
);
