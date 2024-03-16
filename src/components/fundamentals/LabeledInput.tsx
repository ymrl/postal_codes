import React from "react";
import {
  labeledInputStyle,
  labeledInputInputStyle,
  labeledInputLabelStyle,
} from "./LabeledInput.css";

type LabeledInputProps = {
  labelText: string;
  width?: keyof typeof labeledInputStyle;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;
const LabeledInputRenderer: React.ForwardRefRenderFunction<
  HTMLInputElement,
  LabeledInputProps
> = ({ labelText, value, width = "default", ...props }, ref) => {
  return (
    <label className={labeledInputStyle[width]}>
      <span className={labeledInputLabelStyle}>{labelText}</span>
      <input
        className={labeledInputInputStyle}
        value={value}
        {...props}
        ref={ref}
      />
    </label>
  );
};
export const LabeledInput = React.forwardRef(LabeledInputRenderer);
