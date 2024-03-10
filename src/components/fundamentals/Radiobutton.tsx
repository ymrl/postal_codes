import {
  radioButtonVisualStyle,
  radioButtonContainerStyle,
} from "./Radiobutton.css";
import { visuallyHiddenStyle } from "./VisuallyHidden.css";

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
  <label className={radioButtonContainerStyle}>
    <input
      className={visuallyHiddenStyle}
      type="radio"
      checked={checked}
      onChange={onChange}
      value={value}
      name={name}
    />
    <span className={radioButtonVisualStyle} aria-hidden="true" />
    <span>{children}</span>
  </label>
);
