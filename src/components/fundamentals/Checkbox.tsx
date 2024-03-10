import { checkBoxContainerStyle } from "./Checkbox.css";

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
      type="checkbox"
      checked={checked}
      onChange={onChange}
      value={value}
      {...rest}
    />
    <span>{children}</span>
  </label>
);
