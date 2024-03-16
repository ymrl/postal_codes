export type ColumnType = "number" | "pref" | "city" | "town" | "others";

export type Column = {
  type: ColumnType;
  label: string;
  id: string;
};
