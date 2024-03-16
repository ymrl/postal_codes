import React from "react";

type DeveloperSettingsT = {
  useCSSVarForBackdrop: boolean;
  useDetailsPopupForMobileSafari: boolean;
  displayDetailsChildrenClosed: boolean;
  disableVirtualScroll: boolean;
  tableElement: "div" | "table";
  tableRole: "table" | "grid" | undefined;
  tableOverscanScreens: number;
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
  tableElement: "div",
  tableRole: "table",
  tableOverscanScreens: 3,
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
    tableElement: "div",
    tableRole: "table",
    tableOverscanScreens: 3,
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
