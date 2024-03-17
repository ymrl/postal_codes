import { fieldLabelTextStyle, fieldStyle } from "./Field.css";

export const Field = ({
  labelText,
  children,
  htmlFor,
}: {
  labelText: string;
  children: React.ReactNode;
  htmlFor?: string;
}) => (
  <span className={fieldStyle}>
    <label className={fieldLabelTextStyle} htmlFor={htmlFor}>
      {labelText}
    </label>
    <span>{children}</span>
  </span>
);
