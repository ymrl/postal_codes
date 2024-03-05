import { checkBoxContainerStyle } from "./Checkbox.css";

export const Checkbox = ({
  children,
  checked,
  value,
  onChange,
}: {
  children: React.ReactNode;
  checked: boolean;
  value?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <label className={checkBoxContainerStyle}>
    <input type="checkbox" checked={checked} onChange={onChange} value={value} />
    <span>{children}</span>
  </label>
);
