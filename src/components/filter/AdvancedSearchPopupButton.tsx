import React, { useId } from "react";
import { SlEyeglass } from "react-icons/sl";
import { Button, TextWithIcon } from "../fundamentals";
import { Badge } from "./Badge";
import { advancedSearchPopupButtonContainerStyle } from "./AdvancedSearchPopupButton.css";

export const AdvancedSearchPopupButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const id = useId();

  React.useEffect(() => {
    if (!popupOpen) {
      return;
    }
    const listener = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !buttonRef.current?.contains(target) &&
        !contentRef.current?.contains(target)
      ) {
        setPopupOpen(false);
      }
    };
    window.addEventListener("click", listener);
    return () => {
      window.removeEventListener("click", listener);
    };
  }, [popupOpen]);

  return (
    <div className={advancedSearchPopupButtonContainerStyle} id={id}>
      <Button
        onClick={() => {
          if (!popupOpen) {
            setTimeout(() =>
              (
                (contentRef.current?.querySelector(
                  "a, button, input:not([hidden]), textarea, select, details, summary, [tabindex]",
                ) as HTMLElement) || contentRef.current
              )?.focus(),
            );
          }
          setPopupOpen(!popupOpen);
        }}
        aria-expanded={popupOpen}
        aria-controls={`${id}-popup`}
        ref={buttonRef}
        id={`${id}-button`}
      >
        <TextWithIcon hideText="medium" Icon={SlEyeglass}>
          高度な条件
        </TextWithIcon>
        <Badge />
      </Button>
      <div
        onKeyDown={(e) => {
          if (e.key === "Escape" && popupOpen) {
            buttonRef.current?.focus();
            setPopupOpen(false);
          }
        }}
        ref={contentRef}
        tabIndex={-1}
        hidden={!popupOpen}
        id={`${id}-popup`}
      >
        {children}
      </div>
    </div>
  );
};
