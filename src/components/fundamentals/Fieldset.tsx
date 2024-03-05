import { fieldsetStyle, legendStyle } from "./Fieldset.css";

export const Fieldset = ({
  children,
  legend,
}: {
  children: React.ReactNode;
  legend: string;
}) => (
  <fieldset className={fieldsetStyle}>
    <legend className={legendStyle}>{legend}</legend>
    {children}
  </fieldset>
);
