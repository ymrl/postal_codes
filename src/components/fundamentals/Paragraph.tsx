import React from "react";
import { paragraphStyle } from "./Paragraph.css";

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className={paragraphStyle}>{children}</p>
);
