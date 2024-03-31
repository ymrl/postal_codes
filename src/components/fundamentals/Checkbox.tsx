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
  id,
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
  const uniqId = useId();
  const captionId = `${uniqId}-caption`;
  return (
    <span className={checkBoxContainerStyle}>
      {caption && (
        <span id={captionId} className={checkBoxCaptionStyle}>
          {caption}
        </span>
      )}
      <label className={checkBoxLabelStyle}>
        <input
          className={visuallyHiddenStyle}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          id={id || uniqId}
          aria-describedby={caption ? captionId : undefined}
          {...rest}
        />
        <span className={checkBoxVisualStyle} aria-hidden="true" />
        <span className={checkBoxTextStyle}>{children}</span>
      </label>
    </span>
  );
};
