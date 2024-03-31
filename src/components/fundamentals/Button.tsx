import React from "react";
import { buttonStyle, buttonWithBorderStyle } from "./Button.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const ButtonRenderer = (
  {
    children,
    onClick,
    border = false,
    ...props
  }: {
    children: React.ReactNode;
    border?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  } & Omit<ButtonProps, "type" | "onClick" | "children" | "className">,
  ref: React.Ref<HTMLButtonElement>,
) => (
  <button
    type="button"
    onClick={onClick}
    className={border ? buttonWithBorderStyle : buttonStyle}
    {...props}
    ref={ref}
  >
    {children}
  </button>
);

export const Button = React.forwardRef(ButtonRenderer);
