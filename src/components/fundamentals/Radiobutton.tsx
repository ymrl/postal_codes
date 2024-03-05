import { raidoButtonContainerStyle } from "./Radiobutton.css";

export const Radiobutton = ({
  children,
  checked,
  value,
  name,
  onChange,
}: {
  children: React.ReactNode;
  checked: boolean;
  value?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <label className={raidoButtonContainerStyle}>
    <input
      type="radio"
      checked={checked}
      onChange={onChange}
      value={value}
      name={name}
    />
    <span>{children}</span>
  </label>
);
