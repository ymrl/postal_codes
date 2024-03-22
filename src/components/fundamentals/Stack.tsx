import {
  stackStyle,
  stackPaddingStyle,
  stackFlexDirectionStyle,
  stackJustifyContentStyle,
} from "./Stack.css";
type SizeType = "inline" | "block" | "container";

export const Stack = ({
  children,
  size = "inline",
  padding = false,
  direction = "row",
  justifyContent = "start",
}: {
  children: React.ReactNode;
  size?: SizeType;
  padding?: boolean;
  direction?: "row" | "column";
  justifyContent?: "start" | "center" | "end" | "spaceBetween";
}) => (
  <div
    className={[
      stackStyle[size],
      padding ? stackPaddingStyle[size] : undefined,
      stackFlexDirectionStyle[direction],
      stackJustifyContentStyle[justifyContent],
    ]
      .filter((e) => e)
      .join(" ")}
  >
    {children}
  </div>
);
