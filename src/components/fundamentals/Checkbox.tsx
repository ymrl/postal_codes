import { useId } from "react";
import {
  checkBoxCaptionStyle,
  checkBoxContainerStyle,
  checkBoxLabelStyle,
  checkBoxTextStyle,
  checkBoxVisualStyle,
} from "./Checkbox.css";
import { visuallyHiddenStyle } from "./VisuallyHidden.css";

export const Checkbox = ({
  children,
  checked,
  onChange,
  caption,
  ...rest
}: {
  children: React.ReactNode;
  checked: boolean;
  caption?: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "checked"
>) => {
  const id = useId();
  const captionId = `${id}-caption`;
  return (
    <span className={checkBoxContainerStyle}>
      {caption && (
        <span id={captionId} className={checkBoxCaptionStyle}>
          {caption}
        </span>
      )}
      <label className={checkBoxLabelStyle} htmlFor={id}>
        <input
          className={visuallyHiddenStyle}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          id={id}
          aria-describedby={caption ? captionId : undefined}
          {...rest}
        />
        <span className={checkBoxVisualStyle} aria-hidden="true" />
        <span className={checkBoxTextStyle}>{children}</span>
      </label>
    </span>
  );
};
