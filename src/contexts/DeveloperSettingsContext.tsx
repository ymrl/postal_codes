import React from "react";

type DeveloperSettingsT = {
  useCSSVarForBackdrop: boolean;
  useDetailsPopupForMobileSafari: boolean;
  displayDetailsChildrenClosed: boolean;
  disableVirtualScroll: boolean;
  virutalPositioning: "translate" | "dummy-element";
  tableElement: "div" | "table";
  tableRole: "table" | "grid" | undefined;
  tableOverscan: number;
  noAriaColIndex: boolean;
  noAriaRowIndex: boolean;
  noAriaColCount: boolean;
  noAriaRowCount: boolean;
  noAriaDescribedby: boolean;
  cssDisplayMode: "row-grid" | "table";
};

export const DeveloperSettingsContext = React.createContext<
  DeveloperSettingsT & {
    updateDeveloperSettings: (settings: Partial<DeveloperSettingsT>) => void;
  }
>({
  useCSSVarForBackdrop: false,
  useDetailsPopupForMobileSafari: false,
  displayDetailsChildrenClosed: false,
  disableVirtualScroll: false,
  virutalPositioning: "translate",
  tableElement: "div",
  tableRole: "grid",
  tableOverscan: 10,
  noAriaColIndex: false,
  noAriaRowIndex: false,
  noAriaColCount: false,
  noAriaRowCount: false,
  noAriaDescribedby: false,
  cssDisplayMode: "row-grid",
  updateDeveloperSettings: () => {},
});

export const DeveloperSettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = React.useState<DeveloperSettingsT>({
    useCSSVarForBackdrop: false,
    useDetailsPopupForMobileSafari: false,
    displayDetailsChildrenClosed: false,
    disableVirtualScroll: false,
    virutalPositioning: "translate",
    tableElement: "div",
    tableRole: "grid",
    tableOverscan: 10,
    noAriaColIndex: false,
    noAriaRowIndex: false,
    noAriaColCount: false,
    noAriaRowCount: false,
    noAriaDescribedby: false,
    cssDisplayMode: "row-grid",
  });
  const updateDeveloperSettings = (settings: Partial<DeveloperSettingsT>) => {
    setSettings((prev) => ({ ...prev, ...settings }));
  };

  return (
    <DeveloperSettingsContext.Provider
      value={{ ...settings, updateDeveloperSettings }}
    >
      {children}
    </DeveloperSettingsContext.Provider>
  );
};
