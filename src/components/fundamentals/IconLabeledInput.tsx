import React from "react";
import { IconFont } from ".";
import {
  iconLabeledInputLabelStyle,
  iconLabeledInputLabelTextHiddenStyle,
  iconLabeledInputLabelTextStyle,
} from "./IconLabeledInput.css";
import { labeledInputStyle, labeledInputInputStyle } from "./LabeledInput.css";

type IconLabeledInputProps = {
  labelText: string;
  Icon: React.ElementType;
  width?: keyof typeof labeledInputStyle;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;
const IconLabeledInputRenderer: React.ForwardRefRenderFunction<
  HTMLInputElement,
  IconLabeledInputProps
> = ({ labelText, Icon, value, width = "default", ...props }, ref) => {
  return (
    <label className={labeledInputStyle[width]}>
      <span className={iconLabeledInputLabelStyle}>
        <IconFont Icon={Icon} />
        <span
          className={`${iconLabeledInputLabelTextStyle} ${value ? iconLabeledInputLabelTextHiddenStyle : ""}`}
        >
          {labelText}
        </span>
      </span>
      <input
        className={labeledInputInputStyle}
        value={value}
        {...props}
        ref={ref}
      />
    </label>
  );
};
export const IconLabeledInput = React.forwardRef(IconLabeledInputRenderer);
