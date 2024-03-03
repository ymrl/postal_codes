import React from "react";
import { titleStyle } from "./Title.css";

export const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 className={titleStyle}>{children}</h1>
);
