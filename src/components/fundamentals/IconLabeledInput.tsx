import React from "react";
import { IconFont } from ".";
import {
  iconLabeledInputInputStyle,
  iconLabeledInputLabelStyle,
  iconLabeledInputStyle,
  iconLabeledInputLabelTextHiddenStyle,
  iconLabeledInputLabelTextStyle,
} from "./IconLabeledInput.css";

type IconLabeledInputProps = {
  labelText: string;
  Icon: React.ElementType;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;
const IconLabeledInputRenderer: React.ForwardRefRenderFunction<
  HTMLInputElement,
  IconLabeledInputProps
> = ({ labelText, Icon, value, ...props }, ref) => {
  return (
    <label className={iconLabeledInputStyle}>
      <span className={iconLabeledInputLabelStyle}>
        <IconFont Icon={Icon} />
        <span
          className={`${iconLabeledInputLabelTextStyle} ${value ? iconLabeledInputLabelTextHiddenStyle : ""}`}
        >
          {labelText}
        </span>
      </span>
      <input
        className={iconLabeledInputInputStyle}
        value={value}
        {...props}
        ref={ref}
      />
    </label>
  );
};
export const IconLabeledInput = React.forwardRef(IconLabeledInputRenderer);
