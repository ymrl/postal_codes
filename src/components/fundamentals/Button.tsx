import React from "react";
import { buttonStyle } from "./Button.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const ButtonRenderer = (
  {
    children,
    onClick,
    ...props
  }: {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  } & Omit<ButtonProps, "type" | "onClick" | "children" | "className">,
  ref: React.Ref<HTMLButtonElement>,
) => (
  <button
    type="button"
    onClick={onClick}
    className={buttonStyle}
    {...props}
    ref={ref}
  >
    {children}
  </button>
);

export const Button = React.forwardRef(ButtonRenderer);
