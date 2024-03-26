import {
  stackStyle,
  stackPaddingStyle,
  stackFlexDirectionStyle,
  stackJustifyContentStyle,
  stackShrinkStyle,
  stackGrowStyle,
  stackAlignItemsStyle,
} from "./Stack.css";
type SizeType = "inline" | "block" | "container";

export const Stack = ({
  children,
  size = "inline",
  padding = false,
  direction = "row",
  justifyContent = "start",
  alignItems = "start",
  shrink = false,
  grow = false,
}: {
  children: React.ReactNode;
  size?: SizeType;
  padding?: boolean;
  direction?: "row" | "column";
  justifyContent?: "start" | "center" | "end" | "spaceBetween";
  alignItems?: "start" | "center" | "end";
  shrink?: boolean;
  grow?: boolean;
}) => (
  <div
    className={[
      stackStyle[size],
      padding ? stackPaddingStyle[size] : undefined,
      stackFlexDirectionStyle[direction],
      stackJustifyContentStyle[justifyContent],
      stackAlignItemsStyle[alignItems],
      stackShrinkStyle[shrink ? "shrink" : "noShrink"],
      stackGrowStyle[grow ? "grow" : "noGrow"],
    ]
      .filter((e) => e)
      .join(" ")}
  >
    {children}
  </div>
);
