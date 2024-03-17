import React from "react";
import { inputStyle } from "./Input.css";

type InputProps = {
  width?: "default" | "full";
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

const InputRenderer: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ width = "default", ...props }, ref) => (
  <input className={inputStyle[width]} {...props} ref={ref} />
);

export const Input = React.forwardRef(InputRenderer);
