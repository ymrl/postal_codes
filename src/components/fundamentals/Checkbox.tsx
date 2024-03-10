import { checkBoxContainerStyle, checkBoxVisualStyle } from "./Checkbox.css";
import { visuallyHiddenStyle } from "./VisuallyHidden.css";

export const Checkbox = ({
  children,
  checked,
  value,
  onChange,
  ...rest
}: {
  children: React.ReactNode;
  checked: boolean;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "checked"
>) => (
  <label className={checkBoxContainerStyle}>
    <input
      className={visuallyHiddenStyle}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      value={value}
      {...rest}
    />
    <span className={checkBoxVisualStyle} aria-hidden="true" />
    <span>{children}</span>
  </label>
);
