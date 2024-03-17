import {
  advancedSearchSummaryStyle,
  advancedSearchDetailsStyle,
} from "./AdvancedSearchDetails.css";
import React from "react";
import { TextWithIcon } from "../fundamentals";
import { SlEyeglass } from "react-icons/sl";
import { Badge } from "./Badge";

export const AdvancedSearchDetails = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = React.useRef<HTMLDetailsElement>(null);
  React.useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (
        ref.current &&
        ref.current.open &&
        !ref.current.contains(e.target as Node)
      ) {
        ref.current.open = false;
      }
    };
    window.addEventListener("click", listener);
    return () => {
      window.removeEventListener("click", listener);
    };
  }, [ref]);

  return (
    <details className={advancedSearchDetailsStyle} ref={ref}>
      <summary className={advancedSearchSummaryStyle} tabIndex={0}>
        <TextWithIcon Icon={SlEyeglass} hideText="medium">
          高度な条件
        </TextWithIcon>
        <Badge />
      </summary>
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Escape" && ref.current?.open) {
            ref.current.open = false;
            ref.current.querySelector("summary")?.focus();
          }
        }}
      >
        {children}
      </div>
    </details>
  );
};
